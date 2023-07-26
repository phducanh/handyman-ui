import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';

import Layout from '@/components/layout/BaseLayout';
import Seo from '@/components/Seo';

import { ResendMailVerify } from '@/api/user-service';
import ui from '@/utils/ui';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};
export default function EmailVerifyPage() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.emailVerify' });
  const router = useRouter();
  const [userEmail, setUserEmail] = React.useState<string>();
  const [countdown, setCountDown] = React.useState(0);
  const [otpId, setOtpId] = React.useState<any>();
  const resendEmail = () => {
    ResendMailVerify({ otpId })
      .then(() => {
        setCountDown(60);
      })
      .catch((err: string) => {
        ui.alertFailed(err);
      });
  };
  React.useEffect(() => {
    if (!router.query.email) {
      return;
    } else {
      const email = router.query.email;
      const otpId = router.query.otpId;
      setOtpId(otpId);
      const identifyPart = email.slice(0, email.indexOf('@'));
      setUserEmail(
        '*'.repeat(identifyPart.length / 2) +
          identifyPart.slice(identifyPart.length / 2) +
          email.slice(email.indexOf('@'))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  React.useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        const time = countdown - 1;
        setCountDown(time);
      }, 1000);
    }
  }, [countdown]);

  return (
    <Layout>
      <Seo templateTitle='test' />
      <main>
        <section className='h-full top-0 w-full'>
          <div className='container flex h-full justify-center mx-auto'>
            <div className='border flex flex-col h-fit items-center min-w-[400px] mt-[176px] pb-9 pt-[56px] px-6 rounded-xl shadow-lg'>
              <div>
                <Image
                  width={120}
                  height={112}
                  layout='fixed'
                  src='/images/mail-verify.svg'
                  alt='mail verify icon'
                />
              </div>
              <h2 className='font-medium inline-block leading-8 mt-[36px] mx-auto text-2xl text-[#FF511A]'>
                {t('title')}
              </h2>
              <h4 className='font-medium inline-block mt-[24px] text-base text-center'>
                {t('subtitle1')}
                <br />
                <u>{userEmail}</u>
                <br />
                <br />
                {t('subtitle2')}
              </h4>
              <br />
              <hr className='border-[#E6E6E6] border-t w-[98px]'></hr>
              <br />
              <h5 className='font-medium text-[#333333] text-center text-sm'>
                {t('hint')} <br />
                <button
                  className='border-0 mt-3 text-[#3864FF] text-sm underline'
                  onClick={resendEmail}
                >
                  {countdown > 0
                    ? `Resend in ${countdown}s`
                    : `Resend the link.`}
                </button>
              </h5>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
