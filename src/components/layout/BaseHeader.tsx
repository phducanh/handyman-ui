/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import {
  AnnotationIcon,
  BellIcon,
  CodeIcon,
  GlobeIcon,
  HandIcon,
  HomeIcon,
  InformationCircleIcon,
  LoginIcon,
  LogoutIcon,
  MenuIcon,
  PencilIcon,
  ShieldCheckIcon,
  // ShieldCheckIcon,
  ShoppingCartIcon,
  SpeakerphoneIcon,
  SupportIcon,
  UserCircleIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Divider, Layout, Space } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Fragment, useEffect, useState } from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import { getReferralCode } from '@/api/user-service';
import { THEME } from '@/config/constant';
import { PopUpItemsProps } from '@/config/interface';
import { ROLE } from '@/pb/const';
import { clearUserInfo } from '@/reducer/auth.slice';
import ui from '@/utils/ui';

import Button from '../buttons/Button';
import { PopOverButton } from '../buttons/PopOverButton';
import UnstyledLink from '../links/UnstyledLink';

export default function BaseHeader({
  theme = THEME.light,
  userRole = ROLE.UNRECOGNIZED,
  withLogo = true,
}: {
  theme?: THEME;
  userRole?: ROLE;
  withLogo?: boolean;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'layout.header' });
  const userInfo = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    if (userRole === ROLE.HANDYMAN) {
      getReferralCode().then((data) => {
        // console.log(data.code);
        setReferralCode(data.code);
      });
    }
  }, [userRole]);

  const primaryText =
    theme == THEME.light
      ? 'text-[#333333]'
      : theme == THEME.dark
      ? 'text-[#FFFFFF]'
      : 'text-[#FFFFFF]';

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(clearUserInfo());
    localStorage.clear();
    router.push('/');
  };
  const accountAction: PopUpItemsProps[] = [
    { name: 'Help Center', onClick: () => {}, icon: SupportIcon },
    { name: 'Logout', onClick: handleLogout, icon: LogoutIcon },
  ];

  const customerAccount: PopUpItemsProps[] = [
    {
      name: t('items.notification.name'),
      description: t('items.notification.description'),
      href: '#',
      icon: BellIcon,
    },
    {
      name: t('items.accountManagement.name'),
      description: t('items.accountManagement.description'),
      href: '/edit-profile',
      icon: UserCircleIcon,
    },
    {
      name: t('items.security.name'),
      description: t('items.security.description'),
      href: '#',
      icon: ShieldCheckIcon,
    },
    {
      name: t('items.changePassword.name'),
      description: t('items.changePassword.description'),
      href: '/change-password',
      icon: PencilIcon,
    },
    {
      name: t('items.accountInfomation.name'),
      description: t('items.accountInfomation.description'),
      href: '/account-info',
      icon: InformationCircleIcon,
    },
    {
      name: t('items.myProjects.name'),
      description: t('items.myProjects.description'),
      href: '/my-projects',
      icon: HiOutlineBookOpen,
    },
  ];
  const handymanAccount: PopUpItemsProps[] = [
    {
      name: t('items.referralCode.name'),
      description: t('items.referralCode.description'),
      onClick: () => {
        navigator.clipboard.writeText(referralCode);
        ui.alertSuccess('Your referral code coppied');
      },
      icon: CodeIcon,
    },
    {
      name: t('items.changePassword.name'),
      description: t('items.changePassword.description'),
      href: '/change-password',
      icon: PencilIcon,
    },
  ];
  const links: PopUpItemsProps[] = [
    {
      name: t('links.home'),
      href: '/',
      icon: HomeIcon,
    },
    {
      name: t('links.services'),
      href: '#',
      icon: HandIcon,
    },
    {
      name: t('links.about'),
      href: '#',
      icon: SpeakerphoneIcon,
    },
    {
      name: t('links.contact'),
      href: '#',
      icon: SpeakerphoneIcon,
    },
    {
      name: t('links.joinAsPro'),
      href: '/signup/as-pro',
      icon: GlobeIcon,
    },
  ];

  const customerHeaderInner = (
    <>
      <div className='flex h-full items-center justify-between py-4 w-full md:space-x-10'>
        {withLogo && (
          <span
            className='cursor-pointer flex flex-shrink-0'
            onClick={() => router.push('/')}
          >
            <span className='sr-only'>Workflow</span>
            <img className='' src='/images/Anygonow.svg' alt='' />
          </span>
        )}
        <div className='flex-auto'></div>
        <div className='flex'>
          <Space size={16} className='items-center' align='center'>
            <div className='hidden lg:flex'>
              {links.map((link) => {
                if (userInfo && link.href == 'signup/as-pro') return;
                else
                  return (
                    <Button size='small' variant='text' key={link.name}>
                      <UnstyledLink
                        href={link.href || '#'}
                        className={primaryText}
                      >
                        {link.name}
                      </UnstyledLink>
                    </Button>
                  );
              })}
            </div>
            {!userInfo ? (
              <>
                <Space className='hidden 2xl:flex' size={16}>
                  <Button
                    size='small'
                    variant='outline'
                    onClick={() => router.push('/signup')}
                  >
                    {t('links.joinAsHomeowner')}
                  </Button>

                  <Button
                    size='small'
                    onClick={() => router.push('/signin')}
                    icon={
                      <LoginIcon
                        width={18}
                        className='flex font-bold rotate-180 text-lg'
                      />
                    }
                  >
                    {t('links.login')}
                  </Button>
                </Space>
                <Popover.Button
                  className={`2xl:hidden flex my-auto items-center justify-center p-2 rounded-md ${primaryText} hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset`}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </>
            ) : (
              <>
                <Button
                  size='small'
                  className='!bg-white !w-[48px] hover:!bg-[#999999] active:!bg-[#E6E6E6]'
                  icon={
                    <AnnotationIcon width={24} className='text-[#333333]' />
                  }
                  onClick={() =>
                    router.push({
                      pathname: '/my-messages',
                    })
                  }
                ></Button>
                <PopOverButton
                  className='h-min hidden xl:flex'
                  showDropIcon={false}
                  items={customerAccount}
                  callsToAction={accountAction}
                  title={
                    <Button
                      size='small'
                      className='!bg-white !w-[48px] hover:!bg-[#999999] active:!bg-[#E6E6E6]'
                      icon={<UserIcon width={24} className='text-[#333333]' />}
                    ></Button>
                  }
                />
                <Popover.Button
                  className={`xl:hidden flex items-center my-auto justify-center p-2 rounded-md ${primaryText} hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset`}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </>
            )}
          </Space>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 origin-top-right p-2 top-0 transform transition'
        >
          <div className='bg-white divide-gray-50 divide-y-2 ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg'>
            <div className='pb-6 pt-5 px-5'>
              <div className='flex items-center justify-between'>
                <span
                  className='cursor-pointer flex'
                  onClick={() => router.push('/')}
                >
                  <img className='' src='/images/Anygonow.svg' alt='' />
                </span>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='gap-y-8 grid'>
                  <input
                    style={{ width: '100%' }}
                    className='bg-white border-2 border-gray-300 h-8 pr-8 rounded-md text-sm md:pr-4 lg:pr-12 focus:outline-none'
                    type='search'
                    name='search'
                    placeholder={t('search')}
                  />
                  <button type='submit' className='absolute mr-4 mt-2 right-6'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
            <div className='px-5 py-6 space-y-6'>
              <div className='lg:hidden'>
                <div className='gap-x-8 gap-y-4 grid grid-cols-2'>
                  {links.map((link) => {
                    if (userInfo && link.href == 'signup/as-pro') return;
                    else
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          className='flex text-base text-gray-900 hover:text-gray-700'
                        >
                          <link.icon
                            className='flex-shrink-0 h-6 mr-2 text-indigo-600 w-6'
                            aria-hidden='true'
                          />
                          {link.name}
                        </a>
                      );
                  })}
                </div>
                <Divider />
              </div>
              {!userInfo ? (
                <Space className='w-full' direction='vertical'>
                  <Button size='small' className='!w-full rounded-md'>
                    <UnstyledLink href='/signup' className='text-current'>
                      {t('links.signup')}
                    </UnstyledLink>
                  </Button>
                  <Button
                    className='!w-full'
                    size='small'
                    variant='outline'
                    onClick={() => router.push('/signup/as-pro')}
                  >
                    {t('links.joinAsPro')}
                  </Button>
                  <p className='mt-4 text-base text-center text-gray-500'>
                    Existing customer?
                    <UnstyledLink
                      href='/signin'
                      className='ml-1 text-indigo-600 hover:text-indigo-500'
                    >
                      {t('links.login')}
                    </UnstyledLink>
                  </p>
                </Space>
              ) : (
                <>
                  <div className='gap-x-8 gap-y-4 grid grid-cols-2'>
                    <a className='flex text-base text-gray-900 hover:text-gray-700'>
                      <ShoppingCartIcon
                        className='flex-shrink-0 h-6 mr-2 text-indigo-600 w-6'
                        aria-hidden='true'
                      />
                      {t('links.shoppingCarts')}
                    </a>
                    {customerAccount.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='flex text-base text-gray-900 hover:text-gray-700'
                      >
                        <item.icon
                          className='flex-shrink-0 h-6 mr-2 text-indigo-600 w-6'
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <Button
                      className='!w-full'
                      size='small'
                      onClick={(e) => handleLogout(e)}
                      variant='primary'
                    >
                      {t('links.logout')}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
  const handymanHeaderInner = (
    <>
      <div className='flex items-center justify-between py-4 md:space-x-10'>
        {withLogo && (
          <span
            className='cursor-pointer flex flex-shrink-0'
            onClick={() => router.push('/')}
          >
            <span className='sr-only'>Workflow</span>
            <img className='' src='/images/Anygonow.svg' alt='' />
          </span>
        )}
        <div className='flex-auto'></div>
        <Space size={16}>
          <Button size='small' variant='outline'>
            Verify your account
          </Button>
          <Button
            size='small'
            className='!bg-[#F8F9FA] w-[48px] hover:!bg-[#999999] active:!bg-[#E6E6E6]'
            icon={<AnnotationIcon width={24} className='text-[#333333]' />}
            onClick={() => router.push('my-messages')}
          ></Button>
          <Button
            size='small'
            className='!bg-[#F8F9FA] w-[48px] hover:!bg-[#999999] active:!bg-[#E6E6E6]'
            icon={<BellIcon width={24} className='text-[#333333]' />}
            onClick={() => router.push('#')}
          ></Button>
          <PopOverButton
            className='flex h-min'
            showDropIcon={false}
            items={handymanAccount}
            callsToAction={accountAction}
            title={
              <Button
                size='small'
                className='!bg-[#F8F9FA] w-[48px] hover:!bg-[#999999] active:!bg-[#E6E6E6]'
                icon={<UserIcon width={24} className='text-[#333333]' />}
              ></Button>
            }
          />
        </Space>
      </div>
    </>
  );

  if (userRole == ROLE.HANDYMAN) {
    return (
      <Layout.Header className='bg-[#FFFFFF] border-[#DBDBDB] border-b h-[80px] p-0 shadow-headerHandyman top-0 w-full z-40'>
        <Popover className='h-full px-[16px] shadow-none w-full md:px-[40px] lg:px-[80px] 2xl:px-[200px]'>
          {handymanHeaderInner}
        </Popover>
      </Layout.Header>
    );
  } else {
    return (
      <Layout.Header className='bg-transparent border-[#DBDBDB] border-b h-[80px] p-0 shadow-none top-0 w-full z-50'>
        <Popover className='h-full px-[16px] relative shadow-none w-full md:px-[80px] lg:px-[100px] 2xl:px-[300px]'>
          {customerHeaderInner}
        </Popover>
      </Layout.Header>
    );
  }
}
