import { Form, Input } from 'antd';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { BiUpload } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '@/components/layout/BaseLayout';
import TextDisplay from '@/components/TextDisplay';

import { ChangePassword } from '@/api/user-service';
import { EXP } from '@/config/constant';
import { setUserInfo } from '@/reducer/auth.slice';
import {
  GenerateCertificate,
  GenerateKeyPairAndEncrypt,
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

export default function ChangePasswordPage() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.changePassword' });
  const userInfo = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [router, userInfo]);

  const handleSubmit = (e: any) => {
    const { newPass } = e;
    const { publicKey, encryptedPrivateKey, privateKey } =
      GenerateKeyPairAndEncrypt(newPass);
    ChangePassword({
      publicKey: publicKey,
      encryptedPrivateKey: encryptedPrivateKey,
      UserId: '',
    })
      .then(() => {
        const message = {
          id: userInfo.id,
          timestamp: new Date().getTime(),
          exp: EXP,
        };

        const certificate: any = GenerateCertificate(message, privateKey);

        const newUserInfo = {
          ...userInfo,
          _privateKey: privateKey,
          _certificate: certificate,
        };

        dispatch(setUserInfo(newUserInfo));

        ui.alertSuccess('Change Password Successfully');
      })
      .catch((err: string) => {
        ui.alertFailed(err);
      });
  };

  function checkCrrPass(crrPass: string): boolean {
    const { encryptedPrivateKey } = userInfo;
    const _privateKey = SymmetricDecrypt(encryptedPrivateKey, crrPass);
    return _privateKey === userInfo._privateKey;
  }

  return (
    <Layout>
      <div className='h-full items-center justify-center mx-auto py-20 w-full'>
        <div className='mx-auto py-7 rounded-lg sm:w-full lg:w-[780px]'>
          <TextDisplay
            text='Change your password'
            className='font-bold ml-[12%] mt-5 py-5 text-base w-full sm:text-xl md:text-2xl lg:text-3xl'
          ></TextDisplay>
          <div className='border-0 pt-3'>
            <div className='font-medium mx-auto w-4/5'>
              <Form
                name='changePassword'
                onFinish={handleSubmit}
                layout='vertical'
                className='ml-3 pb-3'
              >
                <div className=''>
                  <label className='ml-3'>
                    {t('formItems.currentPassword.label')}
                  </label>
                  <Form.Item
                    // label={t('formItems.currentPassword.label')}
                    name='crrPass'
                    className='lg:w-[612px]'
                    rules={[
                      {
                        required: false,
                        message: t(
                          'formItems.currentPassword.message.required'
                        ),
                      },
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (checkCrrPass(value)) {
                            return Promise.resolve();
                          } else
                            return Promise.reject(
                              t('formItems.currentPassword.message.incorrect')
                            );
                        },
                      }),
                    ]}
                    validateTrigger={['onBlur']}
                  >
                    <Input.Password
                      placeholder='Input'
                      className='bg-[#FFFFFF] font-medium p-3 rounded-md focus:border-blue-500'
                    />
                  </Form.Item>
                </div>
                <label className='ml-3'>
                  {t('formItems.newPassword.label')}
                </label>
                <Form.Item
                  // label={t('formItems.newPassword.label')}
                  name='newPass'
                  className='lg:w-[612px]'
                  rules={[
                    {
                      required: false,
                      message: t('formItems.newPassword.message.required'),
                    },
                    {
                      pattern: new RegExp(
                        '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                      ),
                      message: t('formItems.newPassword.message.invalid'),
                    },
                  ]}
                >
                  <Input.Password
                    className='bg-[#FFFFFF] p-3 rounded-md'
                    placeholder='Input'
                  />
                </Form.Item>
                <label className='ml-3'>
                  {t('formItems.confirmPassword.label')}
                </label>
                <Form.Item
                  // label={t('formItems.confirmPassword.label')}
                  name='cfPass'
                  className='lg:w-[612px]'
                  dependencies={['newPass']}
                  rules={[
                    {
                      required: false,
                      message: t('formItems.confirmPassword.message.required'),
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPass') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            t('formItems.confirmPassword.message.notMatch')
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    className='bg-[#FFFFFF] p-3 rounded-md'
                    placeholder='Input'
                  />
                </Form.Item>
                <div className='align-right h-12 mt-10 relative'>
                  <button className='bg-[#FF511A] border-none flex float-right font-bold h-full items-center justify-center rounded-lg text-base text-white w-full md:h-14 md:w-[152px] hover:bg-[#f0592b] active:bg-[#af2e07]'>
                    <BiUpload className='font-bold h-6 mb-1 mr-2 w-6' />
                    Update
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
