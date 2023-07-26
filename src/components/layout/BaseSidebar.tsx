/* eslint-disable @next/next/no-img-element */
import {
  CashIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  StarIcon,
  ViewBoardsIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import { Layout, Menu } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '../buttons/Button';

export default function BaseSidebar() {
  const router = useRouter();
  const navigate = (tab: string) => {
    if (router.pathname === '/') {
      router.push({ pathname: '', query: { page: tab } });
    } else router.push({ pathname: '/', query: { page: tab } });
  };
  const tabs: { title: string; key: string; icon: JSX.Element }[] = [
    { title: 'Dashboard', key: 'dashboard', icon: <ViewGridIcon width={20} /> },
    {
      title: 'Manage My Business',
      key: 'manage_my_business',
      icon: <CashIcon width={20} />,
    },
    {
      title: 'Services Areas',
      key: 'services_areas',
      icon: <ViewBoardsIcon width={20} />,
    },
    {
      title: 'Payment Center',
      key: 'payment_center',
      icon: <CurrencyDollarIcon width={20} />,
    },
    {
      title: 'Rating Center',
      key: 'rating_center',
      icon: <StarIcon width={20} />,
    },
    {
      title: 'Advertise Manage',
      key: 'advertise_manage',
      icon: <NewspaperIcon width={20} />,
    },
    {
      title: 'Payment Summary',
      key: 'payment_summary',
      icon: <CreditCardIcon width={20} />,
    },
  ];
  return (
    <Layout.Sider
      width={256}
      theme='light'
      className='border-[#E6E6E6] border-r z-50'
    >
      <div className='flex h-[80px] items-center justify-center mb-[30px]'>
        <span className='cursor-pointer flex' onClick={() => router.push('/')}>
          <img className='' src='/images/Anygonow.svg' alt='' />
        </span>
      </div>

      <Menu selectedKeys={router.query.page as string[]}>
        {tabs.map((tab) => (
          <Menu.Item
            key={tab.key}
            className='flex h-[48px] leading-[48px] text-base text-center'
            onClick={({ key }) => navigate(key)}
            icon={tab.icon}
          >
            {tab.title}
          </Menu.Item>
        ))}

        <div className='advertise flex flex-col h-1/2 mb-60 mt-12 mx-auto my-5 overflow-hidden p-4 relative rounded-xl shadow-3xl w-[216px]'>
          <div className='absolute left-0 scale-x-110 scale-y-125 top-4'>
            <Image
              src='/images/AdvertiseLine.svg'
              alt='Advertise-background'
              width={241}
              height={194}
            />
          </div>
          <Image
            src='/images/Advertise.svg'
            alt='Advertise'
            width={141}
            height={141}
          />
          <div className='font-medium mb-6 mt-3 text-center text-lg'>
            We help get more customers for your business with comprehensive ads
          </div>
          <Button
            className='bg-orange-1000 click:bg-orange-700 h-12 mx-auto w-full hover:bg-orange-700'
            variant='primary'
          >
            Advertise with us
          </Button>
        </div>
      </Menu>
    </Layout.Sider>
  );
}
