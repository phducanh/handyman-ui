import { Layout } from 'antd';
// import Sider from 'antd/lib/layout/Sider';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { THEME } from '@/config/constant';
import { ROLE } from '@/pb/const';

import BaseHeader from './BaseHeader';
import BaseSidebar from './BaseSidebar';
import Footer from './Footer';

export default function BaseLayout({
  withSidebar = false,
  withLogo = true,
  headerTheme,
  children,
  hiddenHeader,
  hiddenFooter,
}: {
  withSidebar?: boolean;
  withLogo?: boolean;
  headerTheme?: THEME;
  children: React.ReactNode;
  hiddenHeader?: boolean;
  hiddenFooter?: boolean;
}) {
  const userInfo = useSelector((state: any) => state.auth);
  if (userInfo && userInfo?.role == ROLE.HANDYMAN) {
    return (
      <Layout className='font-primary'>
        <Layout>
          {withSidebar && <BaseSidebar />}
          <Layout className='bg-white'>
            {!hiddenHeader && (
              <BaseHeader
                withLogo={withLogo}
                theme={headerTheme}
                userRole={ROLE.HANDYMAN}
              />
            )}
            {children}
          </Layout>
        </Layout>
        {!hiddenFooter && <Footer />}
      </Layout>
    );
  } else
    return (
      <Layout className='bg-white font-primary relative'>
        {!hiddenHeader && (
          <BaseHeader withLogo={withLogo} theme={headerTheme} />
        )}
        {children}
        {!hiddenFooter && <Footer />}
      </Layout>
    );
}
