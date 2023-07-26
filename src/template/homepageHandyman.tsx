/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';

import AdvertiseManagePage from '@/components/handyman/AdvertiseManage';
import ManageBusinessHandyman from '@/components/handyman/BusinessHandyman';
import DashboardHandyman from '@/components/handyman/DashboardHandyman';
import ManagePaymentMethod from '@/components/handyman/ManagePaymentMethod';
import PaymentSummaryHandyman from '@/components/handyman/PaymentSummary';
import RatingCentre from '@/components/handyman/RatingCentre';
import ServiceAreas from '@/components/handyman/ServiceAreas';
import BaseContent from '@/components/layout/BaseContent';
import BaseLayout from '@/components/layout/BaseLayout';
import Seo from '@/components/Seo';

import { ROLE } from '@/pb/const';

export default function HandymanPage() {
  const [page, setPage] = React.useState<string>('dashboard');
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) {
      const tab = router.query?.page as string;
      // if (tab.length == 0) return;
      if (tab) {
        setPage(tab);
      }
    }
  }, [router]);
  return (
    <BaseLayout
      withSidebar
      withLogo={false}
      hiddenHeader={false}
      hiddenFooter={false}
    >
      <BaseContent userRole={ROLE.HANDYMAN}>
        <Seo templateTitle='Home' />
        {page === 'dashboard' && <DashboardHandyman />}
        {page === 'manage_my_business' && <ManageBusinessHandyman />}
        {page === 'services_areas' && <ServiceAreas />}
        {page === 'payment_center' && <ManagePaymentMethod />}
        {page === 'rating_center' && <RatingCentre />}
        {page === 'advertise_manage' && <AdvertiseManagePage />}
        {page === 'payment_summary' && <PaymentSummaryHandyman />}
      </BaseContent>
    </BaseLayout>
  );
}
