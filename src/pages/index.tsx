import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { ROLE } from '@/pb/const';
import HomePageCus from '@/template/homepagecus';
import HandymanPage from '@/template/homepageHandyman';
export const getServerSideProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
export default function HomePage() {
  const userInfo = useSelector((state: any) => state.auth);
  return (
    <div className='max-h-max w-full'>
      {(!userInfo?.role || userInfo.role != ROLE.HANDYMAN) && <HomePageCus />}
      {userInfo?.role == ROLE.HANDYMAN && <HandymanPage />}
    </div>
  );
}
