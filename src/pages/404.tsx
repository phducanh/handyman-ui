import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import BaseContent from '@/components/layout/BaseContent';
import Layout from '@/components/layout/BaseLayout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <BaseContent>
        <section className='bg-white'>
          <div className='flex flex-col items-center justify-center min-h-screen mx-auto my-auto text-black text-center'>
            <RiAlarmWarningFill
              size={60}
              className='animate-flicker drop-shadow-glow text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>
              {t('common:pageNotFound')}
            </h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </BaseContent>
    </Layout>
  );
};

export default NotFoundPage;
