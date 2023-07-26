import { LocationMarkerIcon } from '@heroicons/react/outline';
import { AutoComplete, Col, Divider, Form, Input, Row } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/BaseLayout';
import { PageNavigation } from '@/components/Pagination';

import {
  GetListCategories,
  GetSearchResult,
  GetUserInfo,
  SendMultiRequest,
} from '@/api/user-service';
import {
  BusinessesGetRequest,
  BusinessRating,
  Pagination,
} from '@/pb/apiservice';
import { sortQuery } from '@/pb/const';
import ui from '@/utils/ui';

import OneResult from './oneResult';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
export default function SearchResultPage() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.customerSearch' });
  const userInfo = useSelector((state: any) => state.auth);
  const [form] = Form.useForm();
  const router = useRouter();

  const [data, setData] = React.useState<any>([]);
  const [listSelected, setListSelected] = React.useState<string[]>([]);
  const [zipcodeUser, setZipcodeUser] = React.useState<string>();

  const [options, setOptions] = React.useState<{ value: string }[]>([]);
  const [listService, setListService] = React.useState<
    { id: string; name: string }[]
  >([]);
  const [searchParams, setSearchParams] = React.useState<BusinessesGetRequest>(
    BusinessesGetRequest.fromJSON({})
  );
  const [pagination, setPagination] = React.useState<Pagination>({
    total: 0,
    limit: 10,
    offset: 1,
  });

  const sortByReview = (e: any) => {
    if (e.target.checked) {
      setSearchParams({
        ...searchParams,
        query: sortQuery.REVIEW,
      });
    } else {
      setSearchParams({
        ...searchParams,
        query: sortQuery.DEFAULT,
      });
    }
  };

  const sortByRequest = (e: any) => {
    if (e.target.checked) {
      setSearchParams({
        ...searchParams,
        query: sortQuery.REQUEST,
      });
    } else {
      setSearchParams({
        ...searchParams,
        query: sortQuery.DEFAULT,
      });
    }
  };

  const clearFilter = () => {
    setSearchParams({
      ...searchParams,
      query: sortQuery.DEFAULT,
    });
  };

  const getServiceById = (categoryId: string) => {
    const matchService = listService.find(
      (service) => service.id == categoryId
    );
    return matchService;
  };

  const getServiceByName = (categoryName: string) => {
    const matchService = listService.find(
      (service) => service.name == categoryName
    );
    return matchService;
  };

  const handleFinish = (e: any) => {
    const { service: inputServiceName, zipcode } = e;
    const matchService = getServiceByName(inputServiceName);
    router.push(
      `/customer/search-result?categoryId=${matchService?.id || ''}&zipcode=${
        zipcode ? zipcode : zipcodeUser
      }`
    );
    setSearchParams({
      ...searchParams,
      categoryId: matchService?.id || '',
      zipcode: zipcode,
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendRequest = () => {
    SendMultiRequest({
      businessIds: listSelected,
      UserId: userInfo.id,
      zipcode:
        (form.getFieldValue('zipcode') as string) ||
        (router.query.zipcode as string),
      categoryId:
        (form.getFieldValue('categoryId') as string) ||
        (router.query.categoryId as string),
    })
      .then((response: any) => console.log(response, 'response'))
      .catch((error) => {
        if (error.toString() === 'already_ordered')
          ui.alertFailed('The order has been sent');
        else if (error.toString() === 'missing_field_BusinessIds')
          ui.alertFailed('You need to choose at least 1 professional');
      });
  };

  React.useEffect(() => {
    const getZipcodeUsers = async () => {
      const data = await GetUserInfo({ id: userInfo?.id, UserId: '' });
      setZipcodeUser(data?.user?.zipcode);
    };
    getZipcodeUsers();
  }, [userInfo?.id]);

  React.useEffect(() => {
    // break if router is not yet ready
    if (!router.isReady) return;
    // if ready
    const { categoryId: queryCategoryId, zipcode: queryZipcode }: any =
      router.query;
    setSearchParams({
      ...searchParams,
      categoryId: queryCategoryId,
      zipcode: queryZipcode,
    });
    async function fetchAPI() {
      await GetListCategories().then((data) => {
        const { result: categories } = data;
        setOptions(
          categories.map((category) => ({
            value: category.name,
          }))
        );
        setListService(categories || []);
        const { name: matchServiceName } =
          categories.find((category) => category.id == queryCategoryId) || {};
        form.setFieldsValue({
          service: matchServiceName,
          zipcode: queryZipcode,
        });
      });
    }
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  React.useEffect(() => {
    // break if given categoryid is empty
    if (!searchParams.categoryId) return;
    GetSearchResult({ ...searchParams })
      .then((data) => {
        const { result: respondResult, pagination: respondPagination } = data;
        const { limit, total } = Pagination.fromJSON(respondPagination);
        if (limit > 0) {
          setPagination({
            ...(pagination as Pagination),
            total: total,
            limit: limit,
          });
        }
        setData(respondResult);
      })
      .catch((error) => {
        ui.alertFailed(error.toString());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Layout hiddenFooter={false} hiddenHeader={false}>
      <div className='max-w-7xl mt-28 mx-auto sm:text-base sm:w-[800px] lg:text-xl lg:w-[1024px]'>
        <Form name='search' form={form} onFinish={handleFinish}>
          <Row>
            <Col span={18}>
              <Row className='flex-nowrap justify-between mb-12'>
                <Input.Group
                  compact
                  className='bg-white border border-[#E6E6E6] flex flex-shrink-1 h-14 items-center mr-6 rounded'
                >
                  <Form.Item name='service' className='border-0 flex-[80%] m-0'>
                    <AutoComplete
                      options={options}
                      filterOption={(inputValue: string, option: any) =>
                        option?.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      }
                    >
                      <Input className='text-base' bordered={false} />
                    </AutoComplete>
                  </Form.Item>
                  <div className='h-4/5' />
                  <Form.Item name='zipcode' className='border-0 flex-[20%] m-0'>
                    <Input
                      bordered={false}
                      prefix={<LocationMarkerIcon className='text-base w-5' />}
                      type='string'
                    />
                  </Form.Item>
                </Input.Group>
                <Form.Item className='m-0'>
                  <Button type='submit' variant='primary' color='orange'>
                    {t('search')}
                  </Button>
                </Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>
        <Row className='mb-6'>
          <h2 className='text-[32px]'>
            {t('title').replace(
              '{0}',
              getServiceById(searchParams.categoryId)?.name || ''
            )}
          </h2>
        </Row>
        <Row className='mb-9'>
          <Col span={18}>
            {data?.map((element: BusinessRating, index: number) => (
              <div className='mb-6' key={index}>
                <OneResult
                  detail={element}
                  select={(selected: boolean, id: string) => {
                    if (selected) {
                      setListSelected((old) => [...old, id]);
                    } else {
                      setListSelected((old) => {
                        return old.filter((selected: any) => selected !== id);
                      });
                    }
                  }}
                  handleClickDetail={(id: string) => {
                    router.push({
                      pathname: `/detail-brand/${id}`,
                      query: {
                        categoryId: searchParams.categoryId,
                        zipcode: router.query.zipcode,
                      },
                    });
                  }}
                />
              </div>
            ))}
          </Col>
          <Col span={6} className='pl-6'>
            <Button
              type='submit'
              variant='primary'
              color='orange'
              className='w-full'
              onClick={() => sendRequest()}
            >
              Send request
            </Button>
            <div className='border-[#E6E6E6] mt-[24px] p-4 pl-[13px] relative rounded-lg shadow'>
              <h3 className='font-medium mb-2 text-xl'>Filter</h3>
              <Form>
                <Form.Item className='mb-3'>
                  <Checkbox
                    onChange={sortByReview}
                    checked={searchParams.query == sortQuery.REVIEW}
                  ></Checkbox>
                  <span className='float-right font-medium text-base'>
                    {t('mostReview')}
                  </span>
                </Form.Item>
                <Divider className='m-0 mb-3' />
                <Form.Item>
                  <Checkbox
                    onChange={sortByRequest}
                    checked={searchParams.query == sortQuery.REQUEST}
                  ></Checkbox>
                  <span className='float-right font-medium text-base'>
                    {t('mostRequest')}
                  </span>
                </Form.Item>
              </Form>
              <div className='flex items-center justify-center'>
                <Button variant='text' onClick={clearFilter}>
                  {t('clearFilter')}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={18} className='flex items-center justify-center'>
            <PageNavigation
              totalItem={pagination.total}
              itemsPerPage={pagination.limit}
              page={pagination.offset}
              setPage={(newOffset) =>
                setPagination({ ...pagination, offset: newOffset })
              }
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
