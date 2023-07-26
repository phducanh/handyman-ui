/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { RightCircleOutlined, SearchOutlined } from '@ant-design/icons';
import {
  // ChevronLeftIcon,
  // ChevronRightIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';
import { AutoComplete, Col, Form, Input, Row, Space } from 'antd';
import clsx from 'clsx';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Button from '@/components/buttons/Button';
import BaseContent, { InnerContent } from '@/components/layout/BaseContent';
import Layout from '@/components/layout/BaseLayout';
// import NextImage from '@/components/NextImage';
// import Product from '@/components/Product';
import Seo from '@/components/Seo';
import MostInterest from '@/components/slickSliderHomePage/SliderHomepage';

import { getMostInterest, getNear } from '@/api/app-service';
import { GetCurrentInfoContact, GetListCategories } from '@/api/user-service';
import { THEME } from '@/config/constant';
// import { ProductProps } from '@/config/interface';
import { Contact } from '@/pb/apiservice';
import { ROLE } from '@/pb/const';

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '0',
  slidesToShow: 5,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function HomepageCus() {
  const { t } = useTranslation('common', { keyPrefix: 'pages.home' });
  const userInfo = useSelector((state: any) => state.auth);

  const [service, setService] = React.useState<string>('');
  const [categoryId, setCategoryId] = React.useState<string>('');
  const [zipcode, setZipcode] = React.useState<string>('');
  const [listService, setListService] = React.useState<any>([]);
  const [options, setOptions] = React.useState<any[]>([]);

  const [nearData, setNearData] = useState<Array<any>>();
  const [mostInterest, setMostInterest] = useState<Array<any>>();
  const router = useRouter();
  const [listOurService, setListOUrservice] = useState<Array<any>>([]);

  const getData = () => {
    getNear()
      .then(({ data }) => {
        // console.log(data, 'check 1');
        setNearData(data?.result || []); // use when have data
      })
      .catch((err) => {
        // console.log(err);
      });
    // getMostInterest()
    //   .then((data) => {
    //     // console.log(data, 'check 2');
    //     setMostInterest(data?.result || []); // use when have data
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //   });
    GetListCategories()
      .then((data) => {
        const { result } = data;
        setListOUrservice(result.filter((element, index) => index < 6));
        setListService(result);
        const newOptions = result.map(
          (oneServive: { id: string; name: string }) => {
            const { name } = oneServive;
            return { value: name };
          }
        );
        setOptions(newOptions);
        // console.log(newOptions, 'options');
      })
      .catch((err) => {
        // console.log(err);
      });
    userInfo &&
      GetCurrentInfoContact({
        id: userInfo.id,
        UserId: '',
      }).then((data) => {
        const contact = Contact.fromJSON(data.contact);
        // console.log(contact, 'contact');
        setZipcode(contact.zipcode);
      });
  };

  React.useEffect(() => {
    if (userInfo) {
      if (userInfo?.role == 1) {
        router.push('/');
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  React.useState(() => {
    // console.log('top', nearData);
  });
  React.useEffect(() => {
    listService.map((element: { id: string; name: string }) => {
      // console.log(element);
      if (element.name == service) {
        const { id } = element;
        setCategoryId(id);
      }
    });
  }, [listService, service]);
  const search = () => {
    // console.log({ categoryId, zipcode });
    if (categoryId.length > 0)
      router.push(
        `/customer/search-result?categoryId=${categoryId}&zipcode=${zipcode}`
      );
  };
  return (
    <Layout headerTheme={THEME.dark}>
      <Seo templateTitle='Home' />
      <main className='mt-[-80px]'>
        {/* <section className='bg-banner bg-cover bg-no-repeat h-[550px] relative sm:h-[520px] lg:h-[600px]'> */}
        <section className='bg-banner bg-cover bg-no-repeat h-[550px] sm:h-[520px] lg:h-[600px]'>
          <InnerContent className='h-full'>
            <div className='h-full mr-auto relative w-full'>
              <div className='flex h-[58%] items-center lg:h-3/4'>
                <div className='h-1/3 w-[60%] sm:w-[50%]'>
                  <div className='content-center h-full justify-center w-full lg:w-max'>
                    <div className='font-[Larken-Medium] my-2 text-[#FFBB00] text-[16px] uppercase sm:text-sm lg:text-base'>
                      best of anygonow
                    </div>
                    <div className='capitalize font-["Larken-Medium"] font-bold mb-2 text-[28px] text-white sm:text-4xl lg:text-7xl'>
                      for your home
                    </div>
                    <div className='flex w-full'>
                      <span className='font-[Larken-Medium] text-[18px] text-white sm:text-sm lg:text-2xl'>
                        we have everything
                      </span>
                      <div className='h-[100%] hidden ml-1 relative w-[58%] lg:block'>
                        <p className='absolute bg-white border-b-1 border-b-white h-[1px] top-[22px] w-full'></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='h-1/3 mx-auto relative w-2/3'></div> */}
              {/* <div className='border-b-[1px] capitalize color grid h-max mx-auto sm:text-sm md:text-sm lg:text-lg'> */}
              <Row className='border-b-[#626262] border-b-[1.5px] capitalize color grid h-max homepage mx-auto sm:text-sm md:text-sm lg:text-lg'>
                <Col span={18}>
                  <Row className='flex-wrap justify-start lg:justify-start'>
                    {listOurService?.map((element: any, index: number) => (
                      <div
                        key={index}
                        className='after:absolute after:border-b-0 after:bottom-[-0px] after:h-[0px] after:right-0 after:w-full mr-6 mt-2 relative text-white lg:after:border-b-[#626262] lg:after:border-b-[1.5px] lg:after:bottom-[-2px] lg:after:h-[2px] lg:mt-0 hover:after:border-b-[#FFBB00]'
                      >
                        <Link
                          href={`/customer/search-result?categoryId=${element.id}`}
                        >
                          <a className='text-white lg:hover:text-white hover:text-[#FFBB00]'>
                            {element.name}
                          </a>
                        </Link>
                      </div>
                    ))}
                  </Row>
                </Col>
              </Row>
              <Row className='mb-[54px] mt-[22px]'>
                <Col span={18}>
                  <Form className='flex flex-col lg:flex-row lg:items-center'>
                    <Input.Group
                      compact
                      className='bg-white border border-[#E6E6E6] flex h-14 items-center mr-6 rounded w-full'
                    >
                      <Form.Item
                        className='border-0 m-0 w-[60%] lg:w-[70%]'
                        name='service'
                      >
                        <AutoComplete
                          options={options}
                          filterOption={(inputValue: string, option: any) =>
                            option?.value
                              .toUpperCase()
                              .indexOf(inputValue.toUpperCase()) !== -1
                          }
                          onChange={(data: string) => setService(data)}
                        >
                          <Input
                            className='text-base'
                            placeholder={t('section.hero.search.placeholder')}
                            bordered={false}
                          />
                        </AutoComplete>
                      </Form.Item>
                      <div className='h-4/5' />
                      <Form.Item className='border-0 m-0 w-[40%] lg:w-[30%]'>
                        <Input
                          // className='min-w-max'
                          maxLength={6}
                          placeholder='City/Zipcode'
                          bordered={false}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          onChange={(e: any) => setZipcode(e.target.value)}
                          defaultValue={zipcode}
                          prefix={
                            <LocationMarkerIcon className='h-full text-[#A1A1A1] w-5' />
                          }
                        />
                      </Form.Item>
                    </Input.Group>
                    <Form.Item className='flex items-center mb-0 mt-4 lg:mt-0'>
                      <Button
                        onClick={search}
                        icon={
                          <SearchOutlined className='flex font-bold text-lg' />
                        }
                      >
                        {t('section.hero.search.submit')}
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </div>
          </InnerContent>
        </section>
        <section className='mt-10 py-10'>
          <div className='mx-auto lg:w-[55%] xl:w-[55%]'>
            <div className='mx-auto w-full'>
              <p className='font-["Larken"] font-normal text-[#333333] text-base text-center uppercase w-full'>
                Our process
              </p>
              <div className='font-["Larken"] font-medium inline-block text-2xl text-center w-full md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
                <p>
                  How it{' '}
                  <p className='inline text-[#07BAAD] text-center'>works.</p>
                </p>
              </div>
              <div className='w-full'>
                <p className='font-["NormPro"] font-medium mx-auto text-[14px] text-center w-4/5 sm:text-[15px] lg:text-lg lg:w-2/3'>
                  Many people want to increase their income for a variety
                  reasons, including to get out of debt, save for the future,
                  have a financial cushion for emergency needs.
                </p>
              </div>
            </div>
          </div>
          <div className='hidden mt-20 mx-auto md:block lg:w-2/3 xl:w-4/5'>
            <Image
              src='/images/banner/123.png'
              width={1537}
              height={156}
              alt='123'
              layout='responsive'
            />
          </div>
          <Row className='justify-around mx-auto lg:w-2/3 xl:w-4/5'>
            <Col span={24} md={{ span: 5, push: 1 }}>
              <div className='mx-auto text-center w-[60%] md:w-full'>
                <p className='font-bold mb-2 mt-5 text-xl md:mb-5'>
                  Tell us what your home needs{' '}
                </p>
                <p className='font-medium text-[14px] sm:text-[15px] lg:text-lg'>
                  From routine maintenance and repairs to dream home
                  renovations, we can help with any project — big or small.
                </p>
              </div>
            </Col>
            <Col span={24} md={{ span: 5 }}>
              <div className='mx-auto text-center w-[60%] md:w-full'>
                <p className='font-bold mb-2 mt-5 text-xl md:mb-5'>
                  We’ll match you with personalized solutions
                </p>
                <p className='font-medium text-[14px] sm:text-[15px] lg:text-lg'>
                  See your price and book services in an instant. Or, request
                  and compare quotes from highly rated pros near you.
                </p>
              </div>
            </Col>
            <Col span={20} md={{ span: 5, pull: 1 }}>
              <div className='mx-auto text-center w-[60%] md:w-full'>
                <p className='font-bold mb-2 mt-5 text-xl md:mb-5'>
                  Start to finish, we’ve got you covered{' '}
                </p>
                <p className='font-medium text-[14px] sm:text-[15px] lg:text-lg'>
                  When you book and pay with Angi, you’re covered by our
                  Happiness Guarantee. We’ll cover your projects up to full
                  purchase price.
                </p>
              </div>
            </Col>
          </Row>
        </section>
        <section className='bg-[#F5F5F5] pb-9 pt-10'>
          <div className='mx-auto lg:w-[55%] xl:w-[55%]'>
            <div className='mx-auto w-full'>
              <p className='font-["Larken"] font-normal text-[#333333] text-base text-center uppercase w-full'>
                what we do
              </p>
              <div className='font-["Larken"] font-medium inline-block text-5xl text-center w-full'>
                <p className='mb-5 text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
                  Our <p className='inline text-[#07BAAD]'>services.</p>
                </p>
              </div>
              <div className='w-full'>
                <p className='font-medium mx-auto text-[14px] text-center w-[90%] sm:text-[15px] sm:w-[80%] lg:text-lg lg:w-2/3'>
                  Many people want to increase their income for a variety
                  reasons, including to get out of debt, save for the future,
                  have a financial cushion for emergency needs.
                </p>
              </div>
            </div>
          </div>
          <InnerContent className='h-1/3 mt-16 mx-auto'>
            <MostInterest
              items={listOurService}
              settings={settings}
              className='bottom-6 mx-auto w-full'
            />
          </InnerContent>
        </section>
        <section className='mt-[132px] w-full'>
          <InnerContent className='mx-auto'>
            <div className='mx-auto text-center'>
              <Row className='mx-auto'>
                <Col span={4}>
                  <Image
                    src='/images/banner/decoration1.png'
                    alt='image'
                    width={70}
                    height={70}
                    layout='responsive'
                  />
                </Col>
                <Col span={14} push={1}>
                  <div className='flex flex-col items-center justify-center'>
                    <p className='font-["Larken"] font-normal text-[#333333] text-base text-center uppercase w-full'>
                      join pro network
                    </p>
                    <div className='font-["Larken"] font-medium inline-block text-2xl text-center w-full md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
                      <p className='font-medium mb-2'>Most effective ways</p>
                      <p className=''>
                        to improve your{' '}
                        <p className='inline text-[#07BAAD]'>earning.</p>
                      </p>
                    </div>
                    <p className='font-medium text-center sm:text-[14px] lg:mx-auto lg:text-lg lg:w-5/6'>
                      Many people want to increase their income for a variety
                      reasons, including to get out of debt, save for the
                      future, have a financial cushion for emergency needs and
                      simply live more comfortably.
                    </p>
                    {!userInfo && (
                      <Button
                        className='w-min'
                        onClick={() => router.push('/signin')}
                        icon={
                          <RightCircleOutlined className='flex font-bold text-lg' />
                        }
                      >
                        Get started
                      </Button>
                    )}
                  </div>
                </Col>
                <Col span={1} className='translate-y-40'>
                  <Image
                    src='/images/banner/decoration4.png'
                    alt='image'
                    layout='responsive'
                    width={60}
                    height={50}
                  />
                </Col>
                <Col span={3}>
                  <Image
                    src='/images/banner/decoration2.png'
                    alt='image'
                    layout='responsive'
                    width={176}
                    height={233}
                  />{' '}
                </Col>
              </Row>
            </div>
            <div className='flex flex-col justify-between my-20 w-full lg:flex-row lg:items-center'>
              <div className='w-full lg:w-max'>
                <div className='flex flex-col items-center mb-10 lg:items-start'>
                  <span className='font-["Larken"] font-normal mb-0 text-[#333333] text-base text-center uppercase'>
                    JOIN PRO NETWORK
                  </span>
                  <span className='font-["Larken"] font-bold inline-block mb-1 text-2xl text-center md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
                    Unnovative top rated
                  </span>
                  <span className='font-["Larken"] font-bold inline-block mb-5 text-2xl text-center md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
                    user friendly{' '}
                    <span className='inline text-[#07BAAD]'> App</span>
                  </span>
                  <p className='text-base text-left'>
                    Message and video chat with pros, securely pay for projects,
                    and more — only in the AnygoNow app.
                  </p>
                  <div className='flex justify-center lg:justify-start'>
                    <Image
                      className='cursor-pointer'
                      src='/images/banner/appstore.png'
                      width={188}
                      height={60}
                      // layout='responsive'
                      alt='images'
                    />
                    <Image
                      className='cursor-pointer'
                      src='/images/banner/googlestore.png'
                      width={188}
                      height={60}
                      // layout='responsive'
                      alt='images'
                    />
                  </div>
                </div>
              </div>
              <div className='mx-auto w-[50%] lg:mr-0 lg:w-[50%] 2xl:w-[40%]'>
                <Image
                  src='/images/banner/pattern1.png'
                  width={500}
                  height={500}
                  layout='responsive'
                  alt='images'
                />
              </div>
            </div>
            <div className='flex flex-col items-end mb-20 w-full lg:flex-row lg:items-center'>
              <div className='mx-auto w-[50%] lg:ml-0 lg:mr-[56px]'>
                <Image
                  src='/images/banner/decoration3.png'
                  alt='images'
                  width={600}
                  height={480}
                  layout='responsive'
                />
              </div>
              <div className='mt-4 px-3 w-[100%] lg:mt-0 lg:w-1/2'>
                <p className='font-["Larken"] font-normal text-[#333333] text-base text-center uppercase w-full sm:mb-1 sm:mt-4 lg:text-left'>
                  About Us
                </p>
                <div className='text-center lg:text-left'>
                  <div className='inline-block'>
                    <p className='font-["Larken"] font-normal inline-block mb-0 mr-1 text-2xl sm:text-center md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
                      Dedicated team
                    </p>
                  </div>
                  <div className='inline-block'>
                    <p className='font-medium inline-block mb-1 text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
                      for your daily{' '}
                      <p className='inline text-[#07BAAD]'>needs</p>
                    </p>
                  </div>
                </div>
                <div className='font-medium mb-4 mt-1 mx-auto text-[14px] text-center w-[70%] xl-mt-5 md:text-[16px] lg:ml-0 lg:mt-4 lg:text-left lg:text-lg lg:w-[100%] 2xl:mt-10'>
                  Many people want to increase their income for a variety
                  reasons, including to get out of debt, save for the future,
                  have a financial cushion for emergency needs and simply live
                  more comfortably.
                </div>
                <div className='gap-2 grid grid-cols-2 mt-1 lg:mt-4 xl:mt-6 2xl:mt-10'>
                  <div className='sm:flex sm:justify-center lg:block'>
                    <div className='flex items-center'>
                      <div>
                        <Image
                          src='/images/banner/Boxes.png'
                          alt='IAMGE'
                          width={50}
                          height={50}
                          // layout='responsive'
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='font-bold mb-0 text-black lg:text-[22px] xl:text-3xl'>
                          400
                        </p>
                        <p className='font-medium mb-0 text-black lg:text-base xl:text-base'>
                          Service professional
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='sm:flex sm:justify-center lg:block'>
                    <div className='flex items-center'>
                      <div>
                        <Image
                          src='/images/banner/User.png'
                          alt='IAMGE'
                          width={50}
                          height={50}
                          // layout='responsive'
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='font-bold mb-0 text-black lg:text-[22px] xl:text-3xl'>
                          2045+
                        </p>
                        <p className='font-medium mb-0 text-base text-black'>
                          Satisfied Customer{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-[10px] xl-mt-[25px] sm:flex sm:justify-center lg:block lg:mt-[18px] 2xl:mt-[38px]'>
                    <div className='flex items-center'>
                      <div>
                        <Image
                          src='/images/banner/Hospital Building.png'
                          alt='IAMGE'
                          width={50}
                          height={50}
                          // layout='responsive'
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='font-bold mb-0 text-black lg:text-[22px] xl:text-3xl'>
                          125
                        </p>
                        <p className='font-medium mb-0 text-base text-black'>
                          Corporate Companies{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-[10px] xl-mt-[25px] sm:flex sm:justify-center lg:block lg:mt-[18px] 2xl:mt-[38px]'>
                    <div className='flex items-center'>
                      <div>
                        <Image
                          src='/images/banner/Location.png'
                          alt='IAMGE'
                          width={50}
                          height={50}
                          // layout='responsive'
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='font-bold mb-0 text-black lg:text-[22px] xl:text-3xl'>
                          36
                        </p>
                        <p className='font-medium mb-0 text-base text-black'>
                          Cities & Area{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InnerContent>
        </section>
        {/* </section> */}
      </main>
    </Layout>
  );
}
