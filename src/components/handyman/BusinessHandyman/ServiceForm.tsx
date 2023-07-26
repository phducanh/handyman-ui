import { Form, Input, Select, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';

import {
  CustomPostRequest,
  getCurrentBusiness,
  getCurrentBusinessServices,
  GetListCategories,
  GetPreSignedURL,
  Ping,
  PutNewInfoBusiness,
  PutNewInfoBusinessServices,
} from '@/api/user-service';
import { Business, Category, Service } from '@/pb/apiservice';
import { ROLE } from '@/pb/const';
import ui from '@/utils/ui';

const { TextArea } = Input;

export default function ServiceFormHandyman() {
  const router = useRouter();
  const [form] = Form.useForm();
  const userInfo = useSelector((state: any) => state.auth);
  const id: string = userInfo?.id;
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [listLogoFile, setListLogoFile] = React.useState<any>([]);
  const [listBannerFile, setListBannerFile] = React.useState<any>([]);
  const [isEdit, setIsEdit] = React.useState(false);
  const [process, setProcess] = React.useState();
  const [isFirstSignup, setIsFirstSignup] = React.useState();
  let initInfo: any = {
    logoUrl: '',
    bannerUrl: '',
    name: '',
    description: '',
    category: [] as Category[],
    zipcodes: [] as any,
  };
  const [initData, setInitData] = React.useState({
    logoUrl: '',
    bannerUrl: '',
    name: '',
    description: '',
    category: [] as Category[],
    zipcodes: [],
  });

  const getListCategory = () => {
    GetListCategories()
      .then((data) => {
        setCategories(data.result);
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
    return;
  };

  const getCrrBusiness = async () => {
    getCurrentBusiness({ id, UserId: '' })
      .then((data) => {
        console.log(data);

        const business = Business.fromJSON(data.business);
        const { logoImage, bannerImage, name, descriptions, zipcodes } =
          business;
        // TODO
        initInfo = {
          ...initInfo,
          logoUrl: logoImage,
          bannerUrl: bannerImage,
          name,
          description: descriptions,
          zipcodes: zipcodes,
        };
        setInitData(initInfo);
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
    return;
  };

  const ping = async (isRedirect: boolean): Promise<any> => {
    return Ping({ UserId: '', Role: ROLE.UNRECOGNIZED })
      .then((data) => {
        if (data.process < 3) {
          setProcess(data.process);
          // setIsEdit(true);
          if (isRedirect) {
            router.push('/?page=manage_my_business&tab=contact_info');
          }
        } else {
          if (isFirstSignup) {
            // ui.alertSuccess('Your business information is all set!');
            router.push('/?page=services_areas');
          }
          // router.push('/?page=services_areas');
        }
        return data.process;
      })
      .catch((err: any) => {
        ui.alertFailed(err);
      });
  };

  const getCrrBusinessServices = async () => {
    getCurrentBusinessServices({ id })
      .then((data) => {
        const result = data.result.map((e) => Service.fromJSON(e));
        initInfo = {
          ...initInfo,
          category: result.map((r) => {
            return r.name;
          }),
        };
        setInitData(initInfo);
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
    return;
  };

  const handleSubmit = async (e: any) => {
    if (!isEdit) return;
    //upload logo
    const logoUrl = listLogoFile ? await handleUploadImage(listLogoFile) : '';
    //upload banner
    const bannerUrl = listBannerFile
      ? await handleUploadImage(listBannerFile)
      : '';
    if (logoUrl) {
      setInitData({
        ...initData,
        logoUrl,
      });
    }
    if (bannerUrl) {
      setInitData({
        ...initData,
        bannerUrl,
      });
    }
    const { name, description, category } = e;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const listCateSelected = category
      ? categories?.filter((c) => category.indexOf(c.name) !== -1)
      : [];
    await PutNewInfoBusiness({
      zipcodes: initData?.zipcodes,
      id,
      UserId: '',
      phone: '',
      website: '',
      name,
      description,
      logoUrl,
      bannerUrl,
    }).catch((error: any) => ui.alertFailed(error.toString()));
    await PutNewInfoBusinessServices({
      id: id,
      categoryIds: listCateSelected.map((category) => category.id),
      UserId: '',
    })
      .then(async () => {
        await getCrrBusiness();
        await getCrrBusinessServices();
        ping(true);
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
    setIsEdit(false);
    if (!isFirstSignup) {
      ui.alertSuccess('Update business service success!');
    }
  };

  const handleUploadImage = async (listImg: any[]): Promise<string> => {
    if (listImg.length < 1) return '';

    const data = await GetPreSignedURL({
      filename: listImg[0].name as string,
      contentLength: listImg[0].size as number,
      UserId: '',
    });
    // const { data } = response;
    const { form: headers, url } = data;

    const formData = new FormData();
    for (const key in headers) {
      formData.append(key, headers[key]);
    }
    const file = listImg[0];
    formData.append('file', file, headers.key);

    await CustomPostRequest(url, formData).catch((error: any) => {
      throw new Error(error);
    });
    return url + headers.key;
  };

  const getData = async () => {
    getListCategory();
    getCrrBusiness();
    getCrrBusinessServices();
    const pingRes = await ping(false);
    if (pingRes) setIsFirstSignup(pingRes && pingRes < 3);
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    form.setFieldsValue(initData);
  }, [form, initData]);
  return (
    <div className='max-w-5xl serviceForm'>
      <Form form={form} autoComplete='off' onFinish={handleSubmit}>
        <div>
          <p className='font-[500] m-0 text-[20px]'>Logo Image*</p>
          <div className='font-[500] mb-7 text-[15px] text-gray-400'>
            This image will also be used for navigation. At least 210x210
            recommended.
          </div>
          <Form.Item
            style={{ marginBottom: '14px' }}
            name='logoUrl'
            rules={
              isEdit
                ? [
                    {
                      required: false,
                    },
                  ]
                : []
            }
          >
            <ImgCrop rotate={true}>
              <Upload
                disabled={!isEdit}
                name='logoUrl'
                listType='picture'
                maxCount={1}
                fileList={listLogoFile}
                onRemove={() => {
                  setListLogoFile([]);
                }}
                beforeUpload={(file: any) => {
                  const isLt2M = file.size / 1024 / 1024 < 2;
                  if (!isLt2M) {
                    console.log('Image smaller than 2MB!');
                    return false;
                  }
                  setListLogoFile([file]);
                  return false;
                }}
              >
                {initData && initData.logoUrl ? (
                  <div
                    style={{
                      background: `url(${initData.logoUrl})`,
                      backgroundSize: 'contain',
                    }}
                    className={`bg-center bg-no-repeat h-[100px] mb-6 py-3 rounded-full w-[100px]`}
                  />
                ) : (
                  <div className="bg-[url('/images/banner/noAvatar.png')] bg-center bg-no-repeat h-[100px] mb-6 py-3 rounded-full w-[100px]" />
                )}
              </Upload>
            </ImgCrop>
          </Form.Item>

          <p className='font-[500] m-0 text-[20px]'>Banner</p>
          <div className='font-[500] mb-7 text-[15px] text-gray-400'>
            This image will also be used for navigation. Recommend size 1000x550
          </div>
          <Form.Item style={{ marginBottom: '14px' }} name='bannerUrl'>
            <Upload
              disabled={!isEdit}
              name='bannerUrl'
              listType='picture'
              maxCount={1}
              fileList={listBannerFile}
              onRemove={() => {
                setListBannerFile([]);
              }}
              beforeUpload={(file: any) => {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                  console.log('Image smaller than 2MB!');
                  return false;
                }
                setListBannerFile([file]);
                return false;
              }}
            >
              {initData && initData.bannerUrl ? (
                <div
                  style={{
                    background: `url(${initData.bannerUrl})`,
                    backgroundSize: 'contain',
                  }}
                  className={`bg-center bg-no-repeat h-[100px] mb-6 py-3 w-[164px]`}
                />
              ) : (
                <div className="bg-[url('/images/banner/noBanner.png')] bg-center bg-no-repeat h-[100px] mb-6 py-3 w-[164px]" />
              )}
            </Upload>
          </Form.Item>

          <div className='font-medium leading-4 mb-[16px] mt-[38px] text-[20px]'>
            Business Name*
          </div>
          <Form.Item
            style={{ marginBottom: '14px' }}
            rules={
              isEdit
                ? [
                    {
                      required: true,
                    },
                  ]
                : []
            }
            name='name'
          >
            <Input
              disabled={!isEdit}
              className='font-medium leading-4 px-5 py-4 rounded-lg text-[14px]'
              placeholder='AnygoNow'
            />
          </Form.Item>
          <div className='font-medium leading-4 mb-[16px] mt-8 text-[20px]'>
            Professional Category*
          </div>
          <Form.Item
            style={{ marginBottom: '14px' }}
            name='category'
            rules={
              isEdit
                ? [
                    {
                      required: true,
                    },
                  ]
                : []
            }
          >
            <Select
              mode='multiple'
              allowClear
              style={{ width: '100%' }}
              placeholder='Please select'
              disabled={!isEdit}
            >
              {categories &&
                categories.map((category) => (
                  <Select.Option key={category.id} value={category.name}>
                    {category.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <div className='font-medium leading-4 mb-[16px] mt-[32px] text-[20px]'>
            Description
          </div>
          <Form.Item style={{ marginBottom: '14px' }} name='description'>
            <TextArea
              disabled={!isEdit}
              className='font-medium h-[160px] leading-4 px-5 py-4 resize-none rounded-lg text-[14px]'
              placeholder='AnygoNow'
            />
          </Form.Item>
          {isEdit && (
            <Form.Item>
              <div className='float-right left mt-6 w-[150px]'>
                <Button
                  className='!w-full bg-primary font-bold px-8 py-4 text-base'
                  type='submit'
                >
                  {process && process < 3 ? 'Next' : 'Update'}
                </Button>
              </div>
            </Form.Item>
          )}
        </div>
      </Form>
      {!isEdit && (
        <div className='float-right left mt-6 w-[150px]'>
          <Button
            className='!w-full bg-primary font-bold px-8 py-4 text-base'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}
