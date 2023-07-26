import { Button } from 'antd';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';

import Layout from '@/components/layout/BaseLayout';
import Seo from '@/components/Seo';

import { VerifyOtp } from '@/api/user-service';
import ui from '@/utils/ui';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};

export default function ActiveAccountPage() {
  const router = useRouter();
  const [verified, setVerified] = React.useState(false);
  const { t } = useTranslation('common', { keyPrefix: 'verifyAcctiveAccount' });
  React.useEffect(() => {
    const { otp, otpId } = router.query;
    if (otp && otpId) {
      VerifyOtp({ otp: otp as string, otpId: otpId as string })
        .then((data: any) => {
          console.log(data);
          setVerified(true);
        })
        .catch((err: any) => {
          setVerified(false);
          ui.alertFailed(t(err));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query]);

  return (
    <Layout>
      <Seo templateTitle='ActiveAccount' />
      <main>
        <section className=''>
          <div className='pb-[427px] pt-[176px]'>
            {verified && (
              <div className='bg-white border-[#EBEBEB] border-[1px] box-verify content-center mx-auto rounded-[12px] shadow-verify text-center lg:h-[412px] lg:w-[400px]'>
                <div className='h-full p-[24px] w-full'>
                  <div className='mt-6 mx-auto w-1/3'>
                    <Image
                      src='/images/icons/email.svg'
                      alt='done'
                      width={175}
                      height={158}
                      layout='responsive'
                      className='mx-auto'
                    />
                  </div>
                  <div className='font-[NormPro] font-medium mt-[25px] text-[#FF511A] text-[24px]'>
                    {t('verified')}
                  </div>
                  <div className='font-[NormPro] font-bold mx-auto my-[20px] text-[16px] w-[234px]'>
                    {t('thankYou')}
                  </div>
                  <Button
                    onClick={() => router.push('/signin')}
                    className='bg-[#FF511A] border-none bottom-[24px] font-[NormPro] font-medium h-[48px] mt-14 px-[24px] rounded-[8px] text-base text-white w-full hover:bg-[#B72C00] active:bg-[#B72C00]'
                  >
                    {t('login')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
