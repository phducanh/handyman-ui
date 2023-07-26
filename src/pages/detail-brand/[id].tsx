import { Rate } from 'antd';
import clsx from 'clsx';
import moment from 'moment';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import RatingHandyman from '@/components/handyman/RatingCentre/Rating';
import Layout from '@/components/layout/BaseLayout';
import { PageNavigation } from '@/components/Pagination';
import Seo from '@/components/Seo';

import {
  GetFeedbacksOfHandyman,
  GetInfoDetailOfHandyman,
  GetInfoServicelOfHandyman,
  GetRatingOfHandyman,
  GetUserInfo,
  SendMultiRequest,
} from '@/api/user-service';
import {
  Business,
  Contact,
  Feedback,
  Pagination,
  Rating,
  Service,
} from '@/pb/apiservice';
import ui from '@/utils/ui';

import avatar from '../../../public/images/detail-brand/avatar.jpg';
import logo from '../../../public/images/detail-brand/logo.jpg';
import serviceImg from '../../../public/images/detail-brand/service.jpg';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export interface Data {
  businessIds: string[];
  zipcode: any;
  UserId: string;
  categoryId: string;
}

function DetailBrand() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [rate, setRate] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const userInfo = useSelector((state: any) => state.auth);
  // const [zipcode, setZipcode] = useState<string>();

  const [readMore, setReadMore] = useState(false);
  const router = useRouter();
  const [id1, setId1] = React.useState<string>('');
  const { id, categoryId, zipcode } = router.query;
  console.log(id, categoryId, zipcode);

  const { t } = useTranslation('common', { keyPrefix: 'pages.detail-brand' });
  const [rates, setRates] = useState([
    {
      rate: 0,
      review: 0,
    },
  ]);

  const [feedBacks, setFeedbacks] = useState([
    {
      rate: 5,
      comment: 'Worked fast  and efficiently!!! Highly recommend',
      createdAt: 1644034678699,
      customerName: 'Stefany Pham',
      serviceOrder: 'Moves and Truck',
      image: '',
    },
  ]);
  const [infoHandyman, setInfoHandyman] = useState({
    id: '',
    name: '',
    logoImage: '',
    bannerImage: '',
    contactId: '',
    website: '',
    descriptions: '',
    services: [] as string[],
    zipcode: '',
    zipcodes: [] as string[],
  });
  useEffect(() => {
    if (router.isReady) {
      setId1(router.query.id as string);
    }
  }, [router.isReady, router.query.id]);

  const [listService, setListService] = useState<Service[]>([]);

  useEffect(() => {
    if (!id1) return;
    GetInfoDetailOfHandyman({ id: id1, UserId: '' })
      .then((data) => {
        const business = Business.fromJSON(data.business);
        setInfoHandyman(business);
      })
      .catch((error: any) => ui.alertFailed(error + 'Đã có lỗi xảy ra'));

    GetInfoServicelOfHandyman({ id: id1 })
      .then((data) => {
        const services = data.result.map((e) => Service.fromJSON(e));
        console.log(data.result, 'service');
        setListService(services);
      })
      .catch((error: any) => ui.alertFailed(error + 'Đã có lỗi xảy ra'));

    GetRatingOfHandyman({ id: id as string })
      .then((res) => {
        const rate = res.rate.map((e) => Rating.fromJSON(e));
        setRates(rate);
        let totalRate = 0;
        let totalReview = 0;
        rate &&
          rate.map((item) => {
            totalRate += item?.rate * item?.review;
            if (item.rate > 0) totalReview += item?.review;
          });
        const rate1 = totalRate / totalReview;
        setRate(rate1);
        setTotalRate(totalReview);
      })
      .catch((error: any) => ui.alertFailed(error + 'Đã có lỗi xảy ra'));
  }, [id1, id]);
  useEffect(() => {
    GetFeedbacksOfHandyman({
      id: id as string,
      offset: (page > 0 ? (page - 1) * limit : page * limit).toString(),
      limit: limit.toString(),
      rate: '',
    })
      .then((res) => {
        const pagination = Pagination.fromJSON(res.pagination);
        const result = res.result.map((e) => Feedback.fromJSON(e));

        const { limit, total } = pagination;
        setTotal(total);
        if (limit > 0) setLimit(limit);
        setFeedbacks(result);
      })
      .catch((error: any) => ui.alertFailed(error + 'Đã có lỗi xảy ra'));
  }, [page, limit, id]);

  useEffect(() => {
    const getInfo = async () => {
      const user = await GetUserInfo({ UserId: '', id: userInfo?.id });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = Contact.fromJSON(user.user);
      // setZipcode(data.zipcode);
    };
    getInfo();
  }, [userInfo?.id]);

  // khi người dùng ấn gửi request
  const handleSendRequest = () => {
    if (!userInfo) {
      router.push('/signin');
    }
    if (userInfo) {
      const data: Data = {
        businessIds: [infoHandyman?.id],
        zipcode: router.query.zipcode,
        UserId: userInfo?.id,
        categoryId: categoryId ? categoryId.toString() : '',
      };
      console.log(data);

      SendMultiRequest(data)
        .then((res) => {
          console.log(res);
          ui.alertSuccess(t('sendSuccess'));
        })
        .catch((error: any) => ui.alertFailed(t(`${error}`)));

      // ui.alertSuccess('Successfully', 'Submit request successfully');
    }
  };
  return (
    <Layout>
      <Seo templateTitle={`Detailbrand ${id}`} />
      <main>
        <section>
          <div className='bg-white h-full pb-8 w-full'>
            <div className='w-full'>
              <div className='aboutUs bg-white pt-32 top-0 w-fulll z-10'>
                <div className='flex flex-col justify-center mx-auto w-[85%] lg:flex-row'>
                  <div className='w-[90%] lg:w-3/4'>
                    <div className='Info flex flex-col items-center text-center w-full lg:flex-row lg:items-start lg:text-left'>
                      <div className='avatar h-36 w-36 lg:mr-12'>
                        <Image
                          className='h-full rounded-[50%] w-full'
                          width={144}
                          height={144}
                          src={
                            infoHandyman.logoImage
                              ? infoHandyman.logoImage
                              : logo
                          }
                          alt='avatar'
                        />
                      </div>
                      <div className='mt-4 nameRate sm:'>
                        <h3 className='text-[32px] sm:font-bold'>
                          {infoHandyman ? infoHandyman?.name : 'Name'}
                        </h3>
                        <Rate
                          allowHalf
                          value={rate}
                          disabled
                          className='text-[#FF9F38]'
                        />{' '}
                        <span className='font-medium text-[#999999] text-base'>
                          {' '}
                          ({totalRate} reviews)
                        </span>
                      </div>
                    </div>
                    <div className='border-b border-b-[#E6E6E6] border-solid listMenu mt-8 pb-2 w-full lg:text-base'>
                      <div className='flex h-[48px] items-center lg:w-2/3 xl:1/2'>
                        <div className='flex h-full items-center px-[32px] rounded-[8px] visited:bg-[#FFE8E0] active:bg-[#FFE8E0]'>
                          <a href='#aboutUs' className='text-black'>
                            About Us
                          </a>
                        </div>
                        <div className='flex h-full items-center px-[32px] rounded-[8px] focus:bg-[#FFE8E0] active:bg-[#FFE8E0]'>
                          <a href='#service' className='text-black'>
                            Service provided
                          </a>
                        </div>
                        <div className='flex h-full items-center px-[32px] rounded-[8px] focus:bg-[#FFE8E0] active:bg-[#FFE8E0]'>
                          <a href='#reviews' className='text-black'>
                            Reviews
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-1/4'></div>
                </div>
              </div>
              <div className='mx-auto w-[85%]'>
                <div className='flex justify-center w-full'>
                  <div className='w-[90%] lg:w-3/4'>
                    <div
                      className='border-b border-b-[#E6E6E6] border-solid py-6 textMore'
                      id='aboutUs'
                    >
                      <h3 className='font-medium text-[20px]'>Description</h3>

                      <p
                        className={`inline text-base mb-0 ${
                          !readMore ? 'line-clamp-2' : ''
                        }`}
                      >
                        {infoHandyman.descriptions}
                      </p>
                      {!readMore && infoHandyman.descriptions.length > 300 && (
                        <div className='cursor-pointer hover:text-[#FF511A]'>
                          <span
                            className='font-bold text-base'
                            onClick={() => setReadMore(!readMore)}
                          >
                            Read more
                          </span>{' '}
                        </div>
                      )}
                      {readMore && infoHandyman.descriptions.length > 300 && (
                        <div className='cursor-pointer hover:text-[#FF511A]'>
                          <span
                            className='font-bold mr-1 text-base'
                            onClick={() => setReadMore(!readMore)}
                          >
                            Read less
                          </span>{' '}
                        </div>
                      )}
                    </div>
                    <div className='mt-8 services w-full' id='service'>
                      <h3 className='font-medium mt-8 text-[20px]'>
                        Service provided
                      </h3>
                      <div className='border-b border-b-[#E6E6E6] border-solid gap-5 grid listService mt-9 pb-12 sm:grid-cols-2 lg:grid-cols-3'>
                        {!listService && (
                          <p className='font-medium text-3xl text-center text-red-600 w-full'>
                            No services yet.
                          </p>
                        )}
                        {listService &&
                          listService.map((service, index) => (
                            <div
                              className='border-[1px] border-[E6E6E6] inline-block pt-3 rounded-[12px]'
                              key={index}
                            >
                              <div className='border-b-2 border-gray-400 pb-3'>
                                <div className='flex items-center px-3 w-full'>
                                  <div className='mr-3'>
                                    <Image
                                      className='h-full object-cover rounded-lg w-full'
                                      width={62}
                                      height={62}
                                      src={
                                        service.image
                                          ? service.image
                                          : serviceImg
                                      }
                                      alt='img'
                                    />
                                  </div>
                                  <div className=''>
                                    <div className='flex items-center'>
                                      <Image
                                        src='/images/icons/Home.png'
                                        alt='home'
                                        width={20}
                                        height={20}
                                        className='mr-1'
                                      />
                                      <span className='font-medium text-sm'>
                                        Requested {service?.numberOrder} times{' '}
                                      </span>
                                    </div>
                                    {/* <div className='flex items-center mt-1'>
                                      <Image
                                        src='/images/icons/Bookmark Check.png'
                                        alt='home'
                                        width={20}
                                        height={20}
                                        className='mr-1'
                                      />
                                      <span className='font-medium text-sm'>
                                        Helpers: 2 / 4hr{' '}
                                      </span>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={clsx([
                                  'bottom flex items-center justify-center pt-2',
                                  index % 3 === 0 && 'bg-[#FF511A]',
                                  index % 3 === 1 && 'bg-[#07BAAD]',
                                  index % 3 === 2 && 'bg-[#FFBB00]',
                                  'rounded-b-[12px]',
                                ])}
                              >
                                <p className='font-medium'>
                                  {service.name
                                    ? service.name
                                    : 'Name of Service'}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className='mt-8 review w-full' id='reviews'>
                      <h3>Reviews from customers</h3>
                      <div className='mb-5 mt-5 rating w-full'>
                        <RatingHandyman
                          rate={rate}
                          totalRate={totalRate}
                          rates={rates}
                        />
                      </div>

                      <div className='comment'>
                        <h4 className='border-b border-b-[#E6E6E6] border-solid font-bold py-5 w-full'>
                          Comments
                        </h4>
                        <div className='listComment my-5'>
                          {feedBacks.length > 0 &&
                            feedBacks?.map((item, index) => (
                              <div className='itemComment py-4' key={index}>
                                <div className='flex info mb-4'>
                                  <div className='avatar h-14 mr-5 w-14'>
                                    <Image
                                      className='h-full object-cover rounded-[50%] w-full'
                                      width={40}
                                      height={40}
                                      src={item?.image ? item?.image : avatar}
                                      alt='img'
                                    />
                                  </div>
                                  <div className='w-2/3'>
                                    <span className='font-medium text-base'>
                                      {item?.customerName
                                        ? item?.customerName
                                        : ''}
                                    </span>

                                    <div className='flex font-normal items-center mt-2 service text-[#333333]'>
                                      <span className='inline-block mr-5'>
                                        Customer service:{' '}
                                        {item?.serviceOrder
                                          ? item?.serviceOrder
                                          : ''}
                                      </span>{' '}
                                      <div className='bg-black h-[4px] mr-2 rounded-[50%] w-[4px]'></div>
                                      <span className=''>
                                        {moment(item.createdAt).format('ll')}
                                      </span>
                                    </div>
                                    <Rate
                                      value={item?.rate ? item?.rate : 0}
                                      disabled
                                      className='text-[#FF9F38]'
                                    />

                                    <div className='border border-[#E6E6E6] content mt-2 p-3 rounded-lg text-base w-full'>
                                      <p>
                                        {item?.comment ? item?.comment : ''}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          {feedBacks.length <= 0 && (
                            <p className='font-semibold mt-10 text-2xl text-center w-full'>
                              There are no reviews yet.
                            </p>
                          )}
                        </div>
                        {feedBacks.length > 0 && (
                          <div className='PageNavigation my-5 text-right w-full'>
                            <PageNavigation
                              totalItem={total ? total : 1}
                              itemsPerPage={limit ? limit : 1}
                              page={page}
                              setPage={setPage}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='px-[20px] lg:w-1/4'>
                    <div className='flex-col h-full w-full lg:items-center'>
                      <Button
                        type='submit'
                        className='flex font-bold h-[48px] justify-center mr-4 px-6 py-4 text-base lg:mb-4 lg:mr-0'
                        onClick={handleSendRequest}
                        color='lightlyOrange'
                      >
                        Send Request
                      </Button>
                      <Button
                        type='submit'
                        className='flex font-bold h-[48px] justify-center px-6 py-4 text-base'
                        variant='outline'
                        color='lightlyOrange'
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default DetailBrand;
