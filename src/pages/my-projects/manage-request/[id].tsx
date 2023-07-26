import moment from 'moment';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/BaseLayout';
import ModalReview from '@/components/modal-review/modalReview';
import { PageNavigation } from '@/components/Pagination';
// import { PageNavigation } from '@/components/Pagination';
import Seo from '@/components/Seo';

import {
  GetAllOrders,
  OrderCancel,
  OrderComplete,
  SendMultiRequest,
} from '@/api/user-service';
import { Order, UpdateOrderStatusPostRequest } from '@/pb/apiservice';
import { orderStatus, orderStatusFromJSON, ROLE } from '@/pb/const';
import ui from '@/utils/ui';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
export default function IndexPage() {
  const router = useRouter();
  const userInfo = useSelector((state: any) => state.auth);
  const { id, zipcode, serviceId } = router.query;

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState<number>(1);
  // const [limit, setLimit] = React.useState(15);
  const [active, setActive] = React.useState<any>();
  const [isReviewed, setIsReviewed] = React.useState(false);
  const [isModal, setIsModal] = React.useState(false);
  const [isShowReview, setIsShowReview] = React.useState(false);
  const [order, setOrder] = React.useState<any>();

  const [listPending, setListPending] = React.useState<Order[]>([]);
  const [listConnected, setListConnected] = React.useState<Order[]>([]);
  const [listCompleted, setListCompleted] = React.useState<Order[]>([]);
  const [curPending, setCurPending] = React.useState<Order>();
  const [indexOrder, setIndexOrder] = React.useState<number>(0);

  React.useEffect(() => {
    if (router.isReady) {
      setActive(id);
    }
  }, [router.isReady, id]);

  React.useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [userInfo, router]);

  React.useEffect(() => {
    if (isReviewed) {
      GetAllOrders({
        UserId: '',
        zipcode: zipcode as string,
        serviceId: serviceId as string,
        status: orderStatus.COMPLETED,
        limit: '5',
        offset: '0',
      }).then((res) => {
        const result = res?.result?.map((item) => Order.fromJSON(item));
        setListCompleted(result);
        setIsReviewed(false);
      });
    }
  }, [isReviewed, zipcode, serviceId]);

  // React.useEffect(() => {
  //   GetAllOrders({
  //     UserId: '',
  //     zipcode: zipcode as string,
  //     serviceId: serviceId as string,
  //     status: orderStatus.PENDING,
  //     limit: '5',
  //     offset: '0',
  //   }).then((res) => {
  //     const result = res?.result?.map((item) => Order.fromJSON(item));
  //     if (result.length > 0) {
  //       setBusiness(result[0]);
  //     }
  //   });
  //   GetAllOrders({
  //     UserId: '',
  //     zipcode: zipcode as string,
  //     serviceId: serviceId as string,
  //     status: orderStatus.CONNECTED,
  //     limit: '5',
  //     offset: '0',
  //   }).then((res) => {
  //     const result = res?.result?.map((item) => Order.fromJSON(item));
  //     if (result.length > 0) {
  //       setBusiness(result[0]);
  //     }
  //   });
  //   GetAllOrders({
  //     UserId: '',
  //     zipcode: zipcode as string,
  //     serviceId: serviceId as string,
  //     status: orderStatus.COMPLETED,
  //     limit: '5',
  //     offset: '0',
  //   }).then((res) => {
  //     const result = res?.result?.map((item) => Order.fromJSON(item));
  //     if (result.length > 0) {
  //       setBusiness(result[0]);
  //     }
  //   });
  // }, [serviceId, zipcode]);
  React.useEffect(() => {
    if (router.isReady) {
      if (userInfo) {
        GetAllOrders({
          status: orderStatusFromJSON(active),
          limit: '5',
          offset: (page > 0 ? (page - 1) * 5 : page * 5).toString(),
          zipcode: zipcode as string,
          UserId: '',
          serviceId: serviceId as string,
        })
          .then((res) => {
            const result = res?.result?.map((item) => Order.fromJSON(item));
            // console.log(res);

            const { pagination }: any = res;
            setTotal(pagination?.total);

            if (active == 'PENDING') {
              setPage(1);
              setListPending(result);
            }
            if (active == 'CONNECTED') {
              setPage(1);
              setListConnected(result);
            }
            if (active == 'COMPLETED') setListCompleted(result);
            console.log(result);
          })
          .catch((err: any) => ui.alertFailed(err));
      }
    }
  }, [router.isReady, zipcode, active, serviceId, page, userInfo]);

  const handleClick = (path: any) => {
    setActive(path);
    router.push(
      `/my-projects/manage-request/${path}?zipcode=${zipcode}&serviceId=${serviceId}`
    );
  };

  const handleDelete = () => {
    if (curPending?.id != '' && indexOrder >= 0) {
      const data: UpdateOrderStatusPostRequest = {
        UserId: '',
        orderId: curPending?.id ? curPending.id : '',
        Role: ROLE.UNRECOGNIZED,
      };
      OrderCancel(data)
        .then(() => {
          const newOrders = [
            ...listPending.slice(0, indexOrder),
            ...listPending.slice(indexOrder + 1),
          ];
          setListPending(newOrders);
          ui.alertSuccess('Cancel request successfully!');
        })
        .catch(() => ui.alertFailed('Cancel the request failed !'));
    }
    setIsModal(false);
  };
  const handleOpenModalCancel = (order: Order, index: number) => {
    setIsModal(true);
    setCurPending(order);
    setIndexOrder(index);
  };

  const handleCloseModalCancel = () => {
    setIsModal(false);
    setCurPending({
      id: '',
      customerId: '',
      businessId: '',
      conversationId: '',
      serviceId: '',
      startDate: 0,
      endDate: 0,
      status: orderStatus.UNRECOGNIZED,
      customerPhone: '',
      customerZipcode: '',
      customerName: '',
      customerMessage: '',
      serviceName: '',
      image: '',
      fee: 0,
      businessLogo: '',
      businessBanner: '',
      businessName: '',
      isReviewed: false,
    });
  };

  const handleMaskAsComplete = (order: Order, index: number) => {
    OrderComplete({
      UserId: '',
      orderId: order.id,
      Role: ROLE.UNRECOGNIZED,
    })
      .then(() => {
        const newData = [
          ...listConnected?.slice(0, index),
          ...listConnected?.slice(index + 1),
        ];
        setListConnected(newData);
        setOrder(order);
        setIsShowReview(true);
      })
      .catch((err) => ui.alertFailed(err));
  };
  const handleWriteReview = (order: Order) => {
    setOrder(order);
    setIsShowReview(true);
    setListCompleted([...listCompleted]);
  };
  const handleResend = (order: Order) => {
    SendMultiRequest({
      businessIds: [order?.businessId],
      zipcode: order.customerZipcode as string,
      UserId: userInfo?.id,
      categoryId: serviceId as string,
    })
      .then(() => {
        // const newData = [
        //   ...listCompleted.slice(0, index),
        //   ...listCompleted.slice(index + 1),
        // ];
        // setListCompleted(newData);
        ui.alertSuccess('Send request Successfully!');
      })
      .catch((err) => ui.alertFailed(err));
  };
  return (
    <Layout>
      <Seo templateTitle='My Requests' />

      <div className='flex justify-center min-h-screen py-20'>
        <div className='flex-col w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px]'>
          <div className='flex items-center pt-10'>
            {/* <Image
                  src={
                    business?.image
                      ? business.image
                      : '/images/banner/banner.png'
                  }
                  alt='img'
                  className='rounded-full'
                  layout='fixed'
                  width={60}
                  height={60}
                />
                <span className='font-bold ml-12 text-2xl'>
                  {business?.businessName
                    ? business.businessName
                    : 'Name of Project'}
                </span> */}
            <p className='font-bold text-2xl'>My request</p>
          </div>
          <div className='flex nav-item pb-3 pt-6'>
            <span
              className={
                active == 'PENDING'
                  ? 'font-medium  text-[#B72C00] mt-1 mr-8 w-[122px] h-[32px] rounded-lg bg-[#FFE1D8] cursor-pointer justify-center flex items-center'
                  : 'font-medium w-[122px] h-[32px] mt-1 mr-8  cursor-pointer p-auto justify-center flex items-center'
              }
              onClick={() => handleClick('PENDING')}
            >
              Waiting
            </span>
            <span
              className={
                active == 'CONNECTED'
                  ? 'font-medium  text-[#B72C00] mt-1 mr-8 w-[146px] h-[32px] rounded-lg bg-[#FFE1D8] cursor-pointer justify-center flex items-center'
                  : 'font-medium w-[146px] h-[32px] mt-1 mr-8  cursor-pointer p-auto justify-center flex items-center'
              }
              onClick={() => handleClick('CONNECTED')}
            >
              Connected
            </span>
            <span
              className={
                active == 'COMPLETED'
                  ? 'font-medium  text-[#B72C00] mt-1 mr-8 w-[147px] h-[32px] rounded-lg bg-[#FFE1D8] cursor-pointer justify-center flex items-center'
                  : 'font-medium w-[147px] h-[32px] mt-1 mr-8  cursor-pointer p-auto justify-center flex items-center'
              }
              onClick={() => handleClick('COMPLETED')}
            >
              Completed
            </span>
          </div>
          <hr className='text-[#E6E6E6]' />

          {/* Status on-going*/}

          {active == 'PENDING' &&
            (listPending && listPending?.length > 0 ? (
              listPending.map((order: Order, index: number) => (
                <div key={index}>
                  <div className='flex pt-8'>
                    <div className='flex flex-1'>
                      <Image
                        src={
                          order?.businessBanner
                            ? order.businessBanner
                            : '/images/detail-brand/logo.jpg'
                        }
                        alt=''
                        className='object-cover rounded-lg'
                        layout='fixed'
                        width='88px'
                        height='88px'
                      />
                      <div>
                        <div className='flex items-center justify-start ml-8 mt-4'>
                          <span className='text-base md:font-bold'>
                            {order.businessName
                              ? order.businessName
                              : 'Name of SerVice'}
                          </span>
                        </div>
                        <div className='ml-8 mt-4 text-[#999999] text-sm'>
                          {`Time request: ${moment(order.startDate).format(
                            'hh:mm - DD MMM, YYYY'
                          )}`}
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-1 items-center justify-center lg:justify-end'>
                      <button
                        className='border-[#FF0000] border-[1px] duration-700 ease-in-out font-bold h-12 rounded-lg text-[#FF0000] text-base transition w-[177px] hover:bg-[#B72C00] active:bg-red-900'
                        onClick={() => handleOpenModalCancel(order, index)}
                      >
                        Cancel Request
                      </button>
                    </div>
                  </div>
                  <hr className='mt-6 text-[#E6E6E6]' />
                </div>
              ))
            ) : (
              <p className='font-medium mt-14 text-3xl text-center text-red-500 w-full'>
                There is no requests.
              </p>
            ))}
          {/* Connected */}
          {active == 'CONNECTED' &&
            (listConnected && listConnected?.length > 0 ? (
              listConnected.map((order: Order, index) => (
                <div key={index}>
                  <div className='flex pt-8'>
                    <div className='flex flex-[5]'>
                      <Image
                        src={
                          order?.businessBanner
                            ? order.businessBanner
                            : '/images/detail-brand/logo.jpg'
                        }
                        alt=''
                        className='object-cover rounded-lg'
                        layout='fixed'
                        width='88px'
                        height='88px'
                        onClick={() => router.push('/my-messages')}
                      />
                      <div>
                        <div
                          className='cursor-pointer ml-8 mt-4'
                          onClick={() => router.push('/my-messages')}
                        >
                          <span className='font-bold text-base'>
                            {order.businessName
                              ? order.businessName
                              : 'Name of SerVice'}
                          </span>
                        </div>
                        <div className='ml-8 mt-4 text-[#999999] text-sm'>
                          {`Time connected: ${moment(order.startDate).format(
                            'hh:mm - DD MMM, YYYY'
                          )}`}
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-[4] items-center lg:justify-end'>
                      <button
                        className='border-[#FF0000] border-[1px] duration-700 ease-in-out font-bold h-12 ml-5 rounded-lg text-[#FF0000] text-base w-[196px] hover:bg-[#B72C00] active:bg-red-900'
                        onClick={() => handleMaskAsComplete(order, index)}
                      >
                        Mark as complete
                      </button>
                      <button
                        className='bg-transparent border-[#FF0000] border-[1px] duration-700 ease-in-out flex font-bold h-12 items-center justify-center ml-5 rounded-lg text-[#FF0000] text-base w-12 hover:bg-[#B72C00] hover:text-white active:bg-red-900'
                        onClick={() => router.push('/my-messages')}
                      >
                        <BiMessageDetail className='h-[18px] w-[18px]' />
                      </button>
                    </div>
                  </div>
                  <hr className='mt-6 text-[#E6E6E6]' />
                </div>
              ))
            ) : (
              <p className='font-medium mt-14 text-3xl text-center text-red-500 w-full'>
                There is no requests.
              </p>
            ))}

          {/* Completed */}
          {active == 'COMPLETED' &&
            (listCompleted && listCompleted?.length > 0 ? (
              listCompleted.map((order: Order, index: number) => (
                <>
                  <div key={index}>
                    <div className='flex pt-8'>
                      <div className='flex flex-[5]'>
                        <Image
                          src={
                            order?.businessBanner
                              ? order.businessBanner
                              : '/images/detail-brand/logo.jpg'
                          }
                          alt=''
                          className='object-cover rounded-lg'
                          layout='fixed'
                          width='88px'
                          height='88px'
                        />
                        <div>
                          <div className='flex ml-8 mt-4'>
                            <span className='font-bold text-base md:font-bold'>
                              {order.businessName
                                ? order.businessName
                                : 'Name of SerVice'}
                            </span>
                          </div>
                          <div className='ml-8 mt-4 text-[#999999] text-sm'>
                            {`Time completed: ${moment(order.startDate).format(
                              'hh:mm - DD MMM, YYYY'
                            )}`}
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-[4] items-center lg:justify-end'>
                        {order.isReviewed ? (
                          <button
                            className='border-[#FF0000] border-[1px] duration-700 ease-in-out flex font-bold h-12 items-center justify-center ml-5 rounded-lg text-[#FF0000] text-base w-[119px] hover:bg-[#B72C00] active:bg-red-900'
                            onClick={() => handleResend(order)}
                          >
                            Resend
                          </button>
                        ) : (
                          <button
                            className='border-[#FF0000] border-[1px] duration-700 ease-in-out flex font-bold h-12 items-center justify-center ml-5 rounded-lg text-[#FF0000] text-base w-[119px] hover:bg-[#B72C00] active:bg-red-900'
                            onClick={() => handleWriteReview(order)}
                          >
                            Review
                          </button>
                        )}
                      </div>
                    </div>
                    <hr className='mt-6 text-[#E6E6E6]' />
                  </div>
                </>
              ))
            ) : (
              <p className='font-medium mt-14 text-3xl text-center text-red-500 w-full'>
                There is no requests.
              </p>
            ))}
          {active == 'COMPLETED' && listCompleted?.length > 0 && (
            <div className='mt-20 text-right w-full'>
              <PageNavigation
                totalItem={total ? total : 1}
                itemsPerPage={5}
                page={page}
                setPage={setPage}
              />
            </div>
          )}
        </div>

        {/* Pagination */}
        {/* {listOrders?.length > 0 && (
              <div className='mt-20 text-right w-full'>
                <PageNavigation
                  totalItem={total ? total : 1}
                  itemsPerPage={limit ? limit : 1}
                  page={page}
                  setPage={setPage}
                />
              </div>
            )} */}
        {isModal && (
          <div className='bg-black/50 fixed flex h-[100%] items-center justify-center left-0 top-0 w-[100%] z-[100]'>
            <div className='bg-white h-[297px] rounded-md w-[700px]'>
              <div className='flex items-center justify-center pt-8 w-[100%]'>
                <Image
                  src='/images/icons/alert-icon.png'
                  alt=''
                  width={64}
                  height={60}
                />
              </div>
              <p className='pt-8 text-center text-xl lg:font-bold'>
                Do you want to cancel the request?
              </p>
              <div className='flex items-center justify-center py-6'>
                <Button
                  className='h-12 w-[176px]'
                  color='red'
                  onClick={handleCloseModalCancel}
                >
                  Cancel
                </Button>
                <Button className='h-12 ml-4 w-[176px]' onClick={handleDelete}>
                  Accept
                </Button>
              </div>
            </div>
          </div>
        )}

        {isShowReview && (
          <ModalReview
            setIsShowReview={setIsShowReview}
            visible={true}
            order={order ? order : ''}
            setIsReviewed={setIsReviewed}
          />
        )}
      </div>
    </Layout>
  );
}
