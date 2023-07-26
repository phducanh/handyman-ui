import { Form, Input } from 'antd';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';

import Layout from '@/components/layout/BaseLayout';
import TextDisplay from '@/components/TextDisplay';

import { GetCurrentInfoContact, GetUserInfo } from '@/api/user-service';
import { Contact, User } from '@/pb/apiservice';
import ui from '@/utils/ui';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};
export default function AccountInfoPage() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.accountInfo' });
  const userInfo = useSelector((state: any) => state.auth);
  const id: string = userInfo?.id;
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
  }, [router, userInfo]);
  const getInfo = async () => {
    try {
      const userContact = await GetCurrentInfoContact({ UserId: '', id });
      const contact = Contact.fromJSON(userContact.contact);
      const userInfo = await GetUserInfo({ UserId: '', id });
      const data = User.fromJSON(userInfo.user);
      console.log(contact, data);

      setInitInfo({ ...data, ...contact });
    } catch (err: any) {
      ui.alertFailed(err);
    }
  };

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (userInfo) {
      getInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    form.setFieldsValue(initInfo);
  }, [form, initInfo]);
  return (
    <Layout>
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
          <Form className='mx-auto w-4/5' form={form} autoComplete='off'>
            {console.log(initInfo.image)}
            <Image
              src={initInfo?.image ? initInfo?.image : '/images/logo.svg'}
              width={100}
              height={100}
              alt='avatar'
              className='h-20 py-3 rounded-full w-20'
            />
            <div className='items-center mt-4'>
              <div className='flex justify-between w-full'>
                <div className='w-[47%]'>
                  <label className='font-medium text-[14px]'>
                    {t('formItems.firstname.placeholder')}
                  </label>
                  <Form.Item
                    name='firstName'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                    ]}
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={true}
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
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                    ]}
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={true}
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
                rules={[
                  {
                    required: true,
                    message: 'Please input your address!',
                  },
                ]}
              >
                <Input
                  className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                  disabled={true}
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
                  disabled={true}
                  type='text'
                  placeholder={initInfo.address2}
                />
              </Form.Item>
              <label className='font-medium text-[14px]'>
                {t('formItems.state.placeholder')}
              </label>
              <Form.Item
                name='state'
                rules={[
                  { required: true, message: 'Please select your state!' },
                ]}
              >
                <Input
                  className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                  disabled={true}
                  type='text'
                  placeholder={initInfo.address2}
                />
              </Form.Item>
              <div className='flex justify-between'>
                <div className='w-[47%]'>
                  <label className='font-medium text-[14px]'>
                    {t('formItems.city.placeholder')}
                  </label>
                  <Form.Item
                    name='city'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your city!',
                      },
                    ]}
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={true}
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
                    rules={[
                      { required: true, message: 'Please input your zipcode!' },
                    ]}
                  >
                    <Input
                      className='bg-white border-1 font-medium p-[12px] rounded-md text-gray-500'
                      disabled={true}
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

              <button
                className='absolute bg-[#FF511A] flex font-bold items-center justify-center mb-3 px-[30px] py-[16px] right-0 rounded-lg text-base text-white'
                onClick={() => router.push('/')}
              >
                <BiHomeAlt className='mr-[5px] text-2xl' />
                {t('returnHome')}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
