import * as React from 'react';

import AdvertiseManage from '@/components/handyman/AdvertiseManage/AdvertiseManage';
import DetailAdvertisePage from '@/components/handyman/AdvertiseManage/DetailAdvertise';
import Seo from '@/components/Seo';

import BuyMorePage from './BuyMore';

export default function AdvertiseManagePage() {
  const [tab, setTab] = React.useState('manageAD');
  const [currentAdvertise, setCurrentAdvertise] = React.useState<any>();
  const [buyAdvertise, setBuyAdvertise] = React.useState<any>({
    PackageName: '',
    ProfessionalCategory: '',
    ServiceAreas: '',
    RegistrationDate: '',
    ExpiryDate: '',
    Price: '',
    TotalAmount: '',
  });

  return (
    <div>
      <Seo templateTitle='AdvertiseManage' />
      <main>
        <section className=''>
          <div className='min-h-screen py-0'>
            {tab == 'manageAD' && (
              <AdvertiseManage
                setTab={setTab}
                setCurrentAdvertise={setCurrentAdvertise}
              />
            )}
            {tab == 'detailAD' && (
              <DetailAdvertisePage
                setTab={setTab}
                currentAdvertise={currentAdvertise}
                setBuyAdvertise={setBuyAdvertise}
              />
            )}
            {tab == 'buyMore' && (
              <BuyMorePage
                setTab={setTab}
                currentAdvertise={currentAdvertise}
                buyAdvertise={buyAdvertise}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
