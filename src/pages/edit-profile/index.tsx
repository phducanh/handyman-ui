import { Form, Input, Modal, Select, Upload, UploadProps } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import ImgCrop from 'antd-img-crop';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { BiPlus } from 'react-icons/bi';
import { RiEdit2Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';

// import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/BaseLayout';
import TextDisplay from '@/components/TextDisplay';

import {
  CustomPostRequest,
  GetCurrentInfoContact,
  GetListStates,
  GetPreSignedURL,
  GetUserInfo,
  PutNewInfoContact,
  PutNewInfoUser,
} from '@/api/user-service';
import { Contact, State, User } from '@/pb/apiservice';
import ui from '@/utils/ui';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};
export default function AccountInfoPage() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.editProfile' });
  const userInfo = useSelector((state: any) => state.auth);
  console.log(userInfo);

  const id: string = userInfo?.id;
  const [isEdit, setIsEdit] = React.useState(false);
  const [avatarFileList, setAvatarFileList] = React.useState<any>([]);
  const [preview, setPreview] = React.useState<{
    previewImage?: any;
    previewVisible?: boolean;
    previewTitle?: any;
  }>();
  const [states, setStates] = React.useState<State[]>([]);
  const [form] = Form.useForm();
  const [initInfo, setInitInfo] = React.useState({
    image: '',
    firstName: '',
    lastName: '',
    mail: '',
    phone: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    zipcode: '',
  });
  const router = useRouter();

  React.useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [userInfo, router]);

  const getListStates = () => {
    GetListStates()
      .then((data) => {
        const states = data.states.map((state) => State.fromJSON(state));
        setStates(states);
      })
      .catch((error: any) => ui.alertFailed(error.message.toString()));
  };

  const getData = async () => {
    try {
      const userInfo = await GetCurrentInfoContact({ UserId: '', id });
      console.log(userInfo);

      const contact = Contact.fromJSON(userInfo.contact);
      const data = await GetUserInfo({ id, UserId: '' });
      const user = User.fromJSON(data.user);
      setInitInfo({ ...contact, ...user });
    } catch (err: any) {
      ui.alertFailed(err);
    }
  };

  const handleSubmit = async (e: any) => {
    //upload avt
    if (isEdit) {
      const avatarUrl = (await handleAvatarUpload()) || '';
      const { zipcode, address1, address2, city } = e;
      const { firstName, lastName } = e;
      const stateName = form.getFieldValue('state');
      let stateId = '';
      states.filter((state) => {
        if (state.name == stateName) {
          stateId = state.id;
          console.log(stateId);
          return;
        }
      });
      Promise.all([
        PutNewInfoContact({
          zipcode,
          address1,
          address2,
          stateId,
          city,
          UserId: '',
          id,
        }),
        PutNewInfoUser({ url: avatarUrl, firstName, lastName, UserId: '', id }),
      ])
        .then(() => ui.alertSuccess('Your profile has succesfully uploaded!'))
        .catch((error: any) => ui.alertFailed(error.toString()));
    }
    setIsEdit(!isEdit);
  };
  const handleAvatarUpload = async () => {
    if (avatarFileList.length < 1) return;

    const data = await GetPreSignedURL({
      filename: avatarFileList[0].name as string,
      contentLength: avatarFileList[0].size as number,
      UserId: '',
    });
    const { form: headers, url } = data;
    console.log(url);

    const formData = new FormData();
    for (const key in headers) {
      formData.append(key, headers[key]);
    }
    const file = avatarFileList[0];
    formData.append('file', file, headers.key);

    await CustomPostRequest(url, formData).catch((error: any) => {
      throw new Error(error);
    });
    return url + headers.key;
  };

  const uploadButtonProps = {
    listType: 'picture-card',
    maxCount: 1,
    fileList: avatarFileList,
    showUploadList: true,
    onRemove: () => {
      setAvatarFileList([]);
    },
    onPreview: (file: UploadFile) => {
      setPreview({
        previewVisible: true,
        previewImage: file.thumbUrl,
        previewTitle: file.fileName || '',
      });
    },
    beforeUpload: (file: any) => {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        console.log('Image must smaller than 2MB!');
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        file.thumbUrl = e.target?.result;
        setAvatarFileList([file]);
      };
      return false;
    },
  };
  React.useEffect(() => {
    if (userInfo) {
      getListStates();
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    form.setFieldsValue(initInfo);
  }, [form, initInfo]);
  return (
    <Layout>
      <Modal
        visible={preview?.previewVisible}
        title={preview?.previewTitle}
        footer={null}
        onCancel={() => setPreview({ ...preview, previewVisible: false })}
      >
        <Image
          alt='image preview'
          width={80}
          height={80}
          layout='responsive'
          src={preview?.previewImage}
        />
      </Modal>
      <div className='flex h-full items-center justify-center mt-24 w-full'>
        <div className='rounded-lg sm:w-full lg:w-[660px]'>
          <div className='mx-auto w-4/5'>
            <div>
              <TextDisplay
                text={t('title')}
                className='font-bold mx-auto py-3 text-2xl'
              />
            </div>
          </div>
          <Form
            className='mx-auto w-4/5'
            form={form}
            autoComplete='off'
            onFinish={handleSubmit}
          >
            <ImgCrop>
              <Upload
                name='avatarUrl'
                {...(uploadButtonProps as UploadProps)}
                disabled={!isEdit}
              >
                {avatarFileList < 1 ? (
                  <div className='bg-[#E6E6E6] flex h-20 items-center justify-center overflow-hidden relative rounded-full w-20'>
                    <BiPlus className='h-8 w-8' />
                  </div>
                ) : null}
              </Upload>
            </ImgCrop>

            <div className='items-center mt-4'>
              <div className='flex justify-between w-full'>
                <div className='w-[47%]'>
                  <label className='font-medium text-[14px]'>
                    {t('formItems.firstname.placeholder')}
                  </label>
                  <Form.Item
                    name='firstName'
                    rules={
                      isEdit
                        ? [
                            {
                              required: true,
                              message: 'Please input your first name!',
                            },
                          ]
                        : []
                    }
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={!isEdit}
                      placeholder={initInfo?.firstName}
                      type='text'
                    />
                  </Form.Item>
                </div>
                <div className='w-[47%]'>
                  <label className='font-medium text-[14px]'>
                    {t('formItems.lastname.placeholder')}
                  </label>
                  <Form.Item
                    name='lastName'
                    className=''
                    rules={
                      isEdit
                        ? [
                            {
                              required: true,
                              message: 'Please input your last name!',
                            },
                          ]
                        : []
                    }
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={!isEdit}
                      placeholder={initInfo?.lastName}
                      type='text'
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <label className='font-medium text-[14px]'>
              {t('formItems.email.placeholder')}
            </label>
            <Form.Item name='mail' className=''>
              <Input
                className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                value={initInfo?.mail}
                disabled={true}
              />
            </Form.Item>
            <label className='font-medium text-[14px]'>
              {t('formItems.phone.placeholder')}
            </label>
            <Form.Item name='phone' className=''>
              <Input
                className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                disabled={true}
                value={initInfo?.phone}
              />
            </Form.Item>
            <label className='font-bold mb-3 text-2xl'>
              {t('tabTitle.contactInfomation')}
            </label>
            <div className='mt-5'>
              <label className='font-medium text-[14px]'>
                {t('formItems.address1.placeholder')}
              </label>
              <Form.Item
                name='address1'
                rules={
                  isEdit
                    ? [
                        {
                          required: true,
                          message: 'Please input your address!',
                        },
                      ]
                    : []
                }
              >
                <Input
                  className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                  disabled={!isEdit}
                  placeholder={initInfo.address1}
                  type='text'
                />
              </Form.Item>
              <label className='font-medium text-[14px]'>
                {t('formItems.address2.placeholder')}
              </label>
              <Form.Item name='address2'>
                <Input
                  className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                  disabled={!isEdit}
                  type='text'
                  placeholder={initInfo.address2}
                />
              </Form.Item>
              <label className='font-medium text-[14px]'>
                {t('formItems.state.placeholder')}
              </label>
              <Form.Item
                name='state'
                className='edit-profile-Select'
                rules={
                  isEdit
                    ? [{ required: true, message: 'Please select your state!' }]
                    : []
                }
              >
                <Select disabled={!isEdit}>
                  {states.map((state: any) => (
                    <Select.Option key={state.id} value={state.name}>
                      {state.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <div className='flex justify-between'>
                <div className='w-[47%]'>
                  <label className='font-medium text-[14px]'>
                    {t('formItems.city.placeholder')}
                  </label>
                  <Form.Item
                    name='city'
                    rules={
                      isEdit
                        ? [
                            {
                              required: true,
                              message: 'Please input your city!',
                            },
                          ]
                        : []
                    }
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={!isEdit}
                      type='text'
                    />
                  </Form.Item>
                </div>
                <div className='w-[47%]'>
                  <label className='font-medium text-[14px]'>
                    {t('formItems.zipcode.placeholder')}
                  </label>
                  <Form.Item
                    name='zipcode'
                    rules={
                      isEdit
                        ? [
                            {
                              required: true,
                              message: 'Please input your zipcode!',
                            },
                          ]
                        : []
                    }
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={!isEdit}
                      type='number'
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className='align-right h-16 relative'>
              {/* <Button
                className='absolute mb-3 w-1/4'
                onClick={() => {
                  router.push('/');
                }}
              >
                Back to Home
              </Button> */}

              <button className='absolute bg-[#FF511A] flex font-bold items-center justify-center mb-3 px-[30px] py-[16px] right-0 rounded-lg text-base text-white'>
                {!isEdit ? (
                  <>
                    <RiEdit2Line className='mr-[5px] text-2xl' />
                    {t('updateProfile')}
                  </>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
