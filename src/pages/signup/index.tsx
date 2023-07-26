/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Checkbox, Form, Input } from 'antd';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/BaseLayout';
import Seo from '@/components/Seo';

import { Signup } from '@/api/user-service';
import { GenerateKeyPairAndEncrypt } from '@/utils/auth-cryptography';
import ui from '@/utils/ui';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};
export default function SignupPage() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.signup' });
  const router = useRouter();
  const handleSignup = (e: any) => {
    const { password, confirmPassword, email, isAgreeTerm, phoneNumber } = e;

    if (password !== confirmPassword || !isAgreeTerm) return;

    const { publicKey, encryptedPrivateKey } =
      GenerateKeyPairAndEncrypt(password);

    Signup({
      mail: email,
      phone: phoneNumber,
      publicKey,
      encryptedPrivateKey,
    })
      .then((res) => {
        // ui.alertMailOtp(
        //   `Check your email ${
        //     email.slice(0, email.indexOf('@')).replace(/./g, '*') +
        //     email.slice(email.indexOf('@'))
        //   }`,
        //   `Confirmation link has been sent to email address ${
        //     email.slice(0, email.indexOf('@')).replace(/./g, '*') +
        //     email.slice(email.indexOf('@'))
        //   }. Please check your mailbox`,
        //   () => {
        //     console.log('a');
        //   }
        // );
        router.push(
          {
            pathname: '/signup/verify',
            query: { email: email, otpId: res.otpId },
          },
          '/signup'
        );
      })
      .catch((err: string) => {
        ui.alertFailed(t(err));
      });
  };

  return (
    <Layout hiddenHeader={false} hiddenFooter={true}>
      <Seo templateTitle='Signup' />
      <main>
        <section className='absolute h-full top-[140px] w-full'>
          <div className='absolute h-full top-0 w-full'></div>
          <div className='container h-full mx-auto px-4'>
            <div className='content-center flex h-full justify-center'>
              <div className='w-full lg:w-[400px]'>
                <div className='bg-white border-0 break-words flex flex-col mb-6 min-w-0 mt-[69px] relative rounded-lg shadow-lg w-full'>
                  <div className='border flex-auto p-6 rounded-xl'>
                    <div className='mb-5 text-center text-gray-500'>
                      <h3 className='font-bold leading-8 mb-1 text-2xl'>
                        {t('homeownerSignup')}
                      </h3>
                      <p className='font-medium leading-6 mx-auto text-[#999] text-base w-56'>
                        {t('review')}
                      </p>
                    </div>

                    <Form
                      onFinish={handleSignup}
                      autoComplete='off'
                      initialValues={{
                        email: '',
                        phoneNumber: '',
                        password: '',
                      }}
                      layout='vertical'
                      className='mx-auto w-full'
                    >
                      <div className='font-medium leading-4 mb-[4px] pl-5 text-sm'>
                        {t('formItems.email.label')}
                      </div>
                      <Form.Item
                        validateTrigger={['onBlur', 'onChange']}
                        style={{ marginBottom: '4px' }}
                        name='email'
                        rules={[
                          {
                            required: true,
                            message: t('formItems.email.message.required'),
                          },
                          {
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: t('formItems.email.message.invalid'),
                          },
                        ]}
                      >
                        <Input
                          className='font-medium leading-4 px-5 py-4 rounded-xl text-sm'
                          placeholder='name@email.com'
                        />
                      </Form.Item>

                      <div className='font-medium leading-4 mb-[4px] mt-4 pl-5 text-sm'>
                        {t('formItems.phoneNumber.label')}
                      </div>
                      <Form.Item
                        style={{ marginBottom: '4px' }}
                        validateTrigger={['onBlur', 'onChange']}
                        name='phoneNumber'
                        rules={[
                          {
                            required: true,
                            message: t(
                              'formItems.phoneNumber.message.required'
                            ),
                          },
                          {
                            pattern:
                              // /\(?([0-9]{0,3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                              /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{1,6}$/im,

                            message: t('formItems.phoneNumber.message.invalid'),
                          },
                        ]}
                      >
                        <Input
                          className='font-medium leading-4 px-5 py-4 rounded-xl text-sm'
                          placeholder='000-111-222-333'
                          onKeyPress={(e) =>
                            !/[0-9\b]/.test(e.key) && e.preventDefault()
                          }
                        />
                      </Form.Item>

                      <div className='font-medium leading-4 mb-[4px] mt-4 pl-5 text-sm'>
                        {t('formItems.password.label')}
                      </div>
                      <Form.Item
                        validateTrigger={['onBlur', 'onChange']}
                        style={{ marginBottom: '4px' }}
                        name='password'
                        rules={[
                          {
                            required: true,
                            message: t('formItems.password.message.required'),
                          },
                          {
                            pattern: new RegExp(
                              '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                            ),
                            message: t('formItems.password.message.invalid'),
                          },
                        ]}
                      >
                        <Input.Password
                          className='font-medium leading-4 px-5 py-4 rounded-xl signup-input-password text-sm'
                          placeholder={t('formItems.password.label')}
                        />
                      </Form.Item>

                      <div className='font-medium leading-4 mb-[4px] mt-4 pl-5 text-sm'>
                        {t('formItems.confirmPassword.label')}
                      </div>
                      <Form.Item
                        className='mb-0'
                        validateTrigger={['onBlur', 'onChange']}
                        name='confirmPassword'
                        dependencies={['password']}
                        rules={[
                          {
                            required: true,
                            message: t(
                              'formItems.confirmPassword.message.required'
                            ),
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue('password') === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  t(
                                    'formItems.confirmPassword.message.notMatch'
                                  )
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          className='font-medium leading-4 px-5 py-4 rounded-xl signup-input-password text-sm'
                          placeholder={t('formItems.confirmPassword.label')}
                        />
                      </Form.Item>

                      <Form.Item
                        className='mb-0 mt-6'
                        name='isAgreeTerm'
                        valuePropName='checked'
                        rules={[
                          {
                            validator: (_, value) =>
                              value
                                ? Promise.resolve()
                                : Promise.reject(
                                    new Error(t('termOfUseNotAccepted'))
                                  ),
                          },
                        ]}
                      >
                        <Checkbox className='align-center flex font-medium leading-5 pl-2 text-sm'>
                          <div className=''>
                            <span className='ml-2'>{t('iAgreeToThe')}</span>
                            <a className='ml-1 text-[#3864FF] underline'>
                              {t('termOfUse')}
                            </a>{' '}
                            {t('and')}{' '}
                            <a className='text-[#3864FF] underline'>
                              {t('privacyPolicy')}
                            </a>
                          </div>
                        </Checkbox>
                      </Form.Item>

                      <Form.Item className='mb-4 mt-[18px]'>
                        <Button
                          type='submit'
                          className='!w-full bg-orange-1000 font-bold px-8 py-4 text-base hover:bg-orange-500'
                        >
                          {t('next')}
                        </Button>
                      </Form.Item>
                    </Form>
                    <div>
                      <Link href='/signin'>
                        <a className='bg-orange-1000-outline border-2 flex font-bold items-center justify-center leading-4 mt-4 px-8 py-4 rounded-xl text-base text-orange-1000 w-full'>
                          <img
                            src='/images/icons/left-circle-arrow.png'
                            alt='default'
                            className='inline mr-2'
                          />
                          {t('alreadyHaveAccount')}
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
    </Layout>
  );
}
