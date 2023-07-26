/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Form, Input, Modal } from 'antd';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
// import { AiOutlineConsoleSql } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/BaseLayout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { GetCredential, Ping } from '@/api/user-service';
import { EXP } from '@/config/constant';
import { ROLE } from '@/pb/const';
import { clearUserInfo, setUserInfo } from '@/reducer/auth.slice';
import {
  GenerateCertificate,
  SymmetricDecrypt,
} from '@/utils/auth-cryptography';
import ui from '@/utils/ui';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};
export default function LoginPage() {
  const [process, setProcess] = React.useState();
  const { t } = useTranslation('common', { keyPrefix: 'pages.signin' });
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.auth);

  React.useEffect(() => {
    if (userInfo?.id) {
      router.push('/');
    }
  }, []);

  const handleSubmit = (e: any) => {
    const { username, password } = e;
    GetCredential({ identifier: username })
      .then((data) => {
        const _privateKey = SymmetricDecrypt(
          data.encryptedPrivateKey,
          password
        );
        if (!_privateKey) {
          return Promise.reject('password wrong');
        }
        const message = {
          id: data.id,
          timestamp: new Date().getTime(),
          exp: EXP,
        };

        const certificate: any = GenerateCertificate(message, _privateKey);
        const newUserInfo = {
          ...userInfo,
          _privateKey,
          _certificate: certificate,
          identifier: username,
          id: data.id,
          encryptedPrivateKey: data.encryptedPrivateKey,
        };
        dispatch(setUserInfo(newUserInfo));
        // if (!userInfo) return;
        Ping({ UserId: '', Role: ROLE.UNRECOGNIZED })
          .then((res) => {
            dispatch(setUserInfo({ ...userInfo, ...res }));
            if (res.role === 1) {
              if (res.process <= 3) setProcess(res.process);
              else router.push('/');
            } else router.push('/');
          })
          .catch((err: any) => {
            dispatch(clearUserInfo());
            ui.alertFailed(t(err));
          });
      })
      .catch((err: any) => {
        console.log({ err });
        let errMsg = err;

        if (errMsg === 'user_record_not_found') {
          errMsg = 'Incorrect email or password';
          // console.log('msg', errMsg);
        }
        ui.alertFailed(errMsg);
      });
  };
  // React.useEffect(() => {}, [userInfo]);
  return (
    <Layout hiddenHeader={false} hiddenFooter={true}>
      <Seo templateTitle='Login' />
      <main>
        <section className='fixed font-primary h-full modal top-[140px] w-full'>
          <div className='absolute h-full top-0 w-full'></div>
          <div className='container h-full mx-auto px-4'>
            <div className='content-center flex h-full justify-center'>
              <div className='relative w-full lg:w-[400px]'>
                <div className='bg-white border-0 break-words flex flex-col mb-6 min-w-0 mt-[69px] relative rounded-lg shadow-lg w-full'>
                  <div className='border flex-auto p-6 pb-5 rounded-xl'>
                    <div className='mb-5 text-center text-gray-500'>
                      <h3 className='font-bold font-primary_bold leading-8 mb-1 text-2xl'>
                        {t('welcome')}
                      </h3>
                      <p className='font-medium leading-6 mx-auto text-[#999] text-base w-56'>
                        {t('review')}
                      </p>
                    </div>
                    <Form
                      onFinish={handleSubmit}
                      autoComplete='off'
                      initialValues={{ username: '', password: '' }}
                      layout='vertical'
                      className='mx-auto w-full'
                    >
                      <div className='font-medium leading-4 mb-[4px] pl-5 text-sm'>
                        {t('formItems.email.label')}
                      </div>
                      <Form.Item
                        style={{ marginBottom: '4px' }}
                        rules={[
                          {
                            required: true,
                            message: t('formItems.email.message.required'),
                          },
                        ]}
                        name='username'
                      >
                        <Input
                          className='font-medium leading-4 px-5 py-4 rounded-xl text-sm'
                          placeholder='name@email.com'
                        />
                      </Form.Item>

                      <div className='font-medium leading-4 mb-[4px] mt-4 pl-5 text-sm'>
                        {t('formItems.password.label')}
                      </div>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: t('formItems.password.message.required'),
                          },
                        ]}
                        name='password'
                      >
                        <Input.Password
                          className='font-medium leading-4 px-5 py-4 rounded-xl signup-input-password text-sm'
                          placeholder={t('formItems.password.label')}
                        />
                      </Form.Item>

                      <div className='flex items-center mb-6'>
                        <div className='inline-block w-6/12'>
                          <UnstyledLink
                            className='font-medium left text-[#3864FF] text-sm underline'
                            href='/forgot-password'
                          >
                            {t('forgotPassword')}
                          </UnstyledLink>
                        </div>

                        {/* <Form.Item
                          className='inline-block m-0 text-right w-6/12'
                          name='isRemember'
                          valuePropName='checked'
                          rules={[]}
                        >
                          <Checkbox className='font-medium text-sm'>
                            {t('rememberMe')}
                          </Checkbox>
                        </Form.Item> */}
                      </div>

                      <Form.Item className='mb-4'>
                        <Button
                          className='bg-orange-1000 font-bold px-8 py-4 text-base w-full hover:bg-orange-500'
                          type='submit'
                        >
                          {t('login')}
                        </Button>
                      </Form.Item>
                    </Form>
                    <div>
                      <Link href='/signup'>
                        <a className='bg-orange-1000-outline border-2 border-orange-1000 flex font-bold items-center justify-center leading-4 px-8 py-4 rounded-xl text-base text-orange-1000 w-full'>
                          <div>{t('createNewAccount')}</div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Modal
        visible={process && process <= 3}
        closable={false}
        centered={true}
        bodyStyle={{ padding: '0px' }}
        footer={null}
      >
        <div className='w-full md:w-[500px]'>
          <div className='w-full md:w-[500px]'>
            <div className='py-8'>
              <img
                src='/images/icons/alert-icon.png'
                className='h-12 mx-auto w-12'
                alt='success'
              />
            </div>
            <div className='text-black text-center'>
              <div className='font-extrabold text-black text-xl'>
                You need to complete your business information
              </div>
            </div>
            <div className='flex justify-center mx-auto py-8 text-center w-1/3'>
              <Button
                className='w-full'
                variant='primary'
                onClick={() => {
                  if (process == 1) {
                    router.push('/?page=manage_my_business&tab=service_info');
                  }
                  if (process == 2) {
                    router.push('/?page=manage_my_business&tab=contact_info');
                  }
                  if (process == 3) {
                    router.push('/?page=services_areas');
                  }
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
