/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Form, Input, Modal } from 'antd';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/BaseLayout';
import Seo from '@/components/Seo';

import { RequestForgotPassword } from '@/api/user-service';
import ui from '@/utils/ui';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};
export default function ForgotPasswordPage() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.forgotPassword' });
  const [disableBtn, setDisableBtn] = useState(false);
  const [formattedEmail, setFormattedEmail] = useState('');
  const [modalResend, setModalResend] = useState(false);
  const [email, setEmail] = useState();
  const [countdown, setCountDown] = useState(3);
  const router = useRouter();
  const handleForgotPassword = (value: any) => {
    if (countdown > 0) return;
    setDisableBtn(true);
    const { email } = value;
    setEmail(email);
    const ind: number = email.indexOf('@');
    setFormattedEmail(email.replace(value.email.slice(0, ind - 3), '*******'));

    RequestForgotPassword({ mail: email })
      .then(() => {
        setModalResend(true);
        setCountDown(60);
      })
      .catch((err: string) => {
        ui.alertFailed(err);
      });
  };
  useEffect(() => {
    if (disableBtn) {
      setTimeout(() => setDisableBtn(false), 60000);
    }
  }, [disableBtn]);
  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        const time = countdown - 1;
        setCountDown(time);
      }, 1000);
    }
  }, [countdown]);
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout hiddenHeader={false} hiddenFooter={false}>
      <Seo templateTitle='Forgot Password' />
      <main className='min-h-[700px]'>
        <section className='absolute top-[180px] w-full'>
          <div className='absolute h-full top-0 w-full'></div>
          <div className='container h-full mx-auto px-4'>
            <div className='content-center flex h-full items-center justify-center'>
              <div className='w-full lg:w-[400px]'>
                <div className='bg-white border-0 break-words flex flex-col mb-6 min-w-0 relative rounded-lg shadow-lg w-full'>
                  <div className='flex-auto pb-6 pt-6 px-0 py-10 lg:px-6'>
                    <div className='mb-8 mx-auto'>
                      <h3 className='font-bold mb-6 text-2xl text-center'>
                        {t('title')}
                      </h3>
                      <div className='flex text-left text-sm'>
                        <div className='bg-orange-400 block dot h-[8px] mr-3 mt-1.5 rounded-lg w-[12px]'></div>
                        <div className='font-medium text-sm'>
                          {t('warning')}
                          <br />
                          {t('warning1')}
                        </div>
                      </div>
                    </div>
                    <Form
                      name='basic'
                      labelCol={{
                        span: 16,
                      }}
                      wrapperCol={{
                        span: 24,
                      }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={handleForgotPassword}
                      onFinishFailed={onFinishFailed}
                      autoComplete='off'
                      layout='vertical'
                      className='mx-auto'
                    >
                      <div className='font-medium leading-4 mb-[4px] pl-5 text-sm'>
                        {t('formItems.email.label')}
                      </div>
                      <Form.Item
                        name='email'
                        rules={[
                          {
                            required: true,
                            message: t('formItems.email.message.required'),
                          },
                        ]}
                      >
                        <Input
                          name='email'
                          placeholder='name@email.com'
                          className='font-normal py-3 rounded-lg text-sm'
                        />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{
                          offset: 0,
                          span: 24,
                        }}
                        className='mb-2'
                      >
                        {disableBtn ? (
                          <Button
                            className='bg-primary font-bold mt-2 px-8 py-3 text-base w-full'
                            variant='primary'
                            type='submit'
                            disabled={true}
                          >
                            {t('next')}
                          </Button>
                        ) : (
                          <Button
                            className='bg-primary font-bold mt-2 px-8 py-3 text-base w-full'
                            variant='primary'
                            type='submit'
                            disabled={false}
                          >
                            {t('next')}
                          </Button>
                        )}
                      </Form.Item>
                      <Button
                        className='bg-primary-outline font-bold mt-2 px-8 py-3 text-base text-primary w-full hover:bg-[#b72c00] active:bg-[#b72c00] active:text-white'
                        variant='outline'
                        type='button'
                        disabled={false}
                        onClick={() => router.push(`/signin`)}
                      >
                        {t('backToLogin')}
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {modalResend && (
        <Modal
          visible={true}
          closable={false}
          centered={true}
          bodyStyle={{ padding: '0px' }}
          footer={null}
          className='forgot-pwd-modal'
        >
          <div className='w-full md:w-[500px]'>
            <div className='w-full md:w-[500px]'>
              <div className='py-11'>
                <img
                  src='/images/icons/letter.png'
                  className='mx-auto w-[140px]'
                  alt='success'
                />
              </div>
              <div className='text-black text-center'>
                <div className='font-medium text-2xl text-primary'>
                  Please check your email
                </div>
                <div className='font-medium mt-5 text-base'>
                  Confirmation link has been sent to email address
                  <br />{' '}
                  <div className='decoration-solid underline underline-offset-1'>
                    {formattedEmail}.
                  </div>
                </div>
                <div className='border mt-8 mx-auto w-[98px]'></div>
                <div className='mt-8 text-sm'>
                  No email? Check your spam folder berfore you
                </div>
                <button
                  className='border-0 mb-8 mt-3 text-[#3864FF] text-sm underline'
                  onClick={() => handleForgotPassword({ email })}
                >
                  {countdown > 0
                    ? `Resend in ${countdown}s`
                    : `Resend the link.`}
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Layout>
  );
}
