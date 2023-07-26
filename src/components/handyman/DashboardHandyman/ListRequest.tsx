import { Image } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';

import {
  GetAllOrders,
  getFreeContact,
  GetPaymentMethod,
  OrderConnectAll,
  OrderReject,
  PostConnectRequest,
} from '@/api/user-service';
import { Order } from '@/pb/apiservice';
import { orderStatus } from '@/pb/const';
import ui from '@/utils/ui';

export default function ListRequestHandyman() {
  const router = useRouter();
  const userInfo = useSelector((state: any) => state.auth);
  const userId: string = userInfo?.id;
  const [listRequest, setListRequest] = useState<Order[]>([]);
  // const [totalRequest, setTotalRequest] = useState(0);
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);
  const [numberFree, setNumberFree] = useState('');
  const { t } = useTranslation('common', { keyPrefix: 'pages.handyman' });
  useEffect(() => {
    GetAllOrders({
      limit: '',
      offset: '',
      serviceId: '',
      zipcode: '',
      UserId: '',
      status: orderStatus.PENDING,
    }).then((res) => {
      // const pagination = Pagination.fromJSON(res.pagination);
      const result = res.result.map((o) => Order.fromJSON(o));
      // console.log(result);

      setListRequest(result);
      // setTotalRequest(pagination.total);
    });
    GetPaymentMethod().then((res) => {
      if (res.payment && res.payment.paymentMethodId) setIsPaymentMethod(true);
    });
    getFreeContact(userId).then((res) => {
      setNumberFree(res.data.number);
      console.log(res.data);
    });
  }, [userId]);

  const onConnect = (requestId: any, index: number) => {
    if (!isPaymentMethod) {
      return router.push('/?page=payment_center');
    }

    PostConnectRequest({ orderId: requestId })
      .then(() => {
        const requestsNew = [
          ...listRequest.slice(0, index),
          ...listRequest.slice(index + 1),
        ];
        setListRequest(requestsNew);
        // setTotalRequest(requestsNew?.length);
        ui.alertSuccess(t('connectSuccess'));
      })
      .catch(() => {
        ui.alertFailed(t('connectFailure'));
      });
  };
  const onConnectAll = () => {
    if (!isPaymentMethod) {
      return router.push('/?page=payment_center');
    }
    const listOrderId = listRequest.map((req) => req.id);
    OrderConnectAll({ orderIds: listOrderId })
      .then(() => {
        router.push('/my-messages');
      })
      .catch(() => {
        ui.alertFailed(t('connectFailure'));
      });
  };
  const onIgnoreConnect = (requestId: any, index: number) => {
    const data = {
      UserId: userId,
      orderId: requestId,
      Role: 1,
    };
    OrderReject(data)
      .then(() => {
        const requestsNew = [
          ...listRequest.slice(0, index),
          ...listRequest.slice(index + 1),
        ];
        setListRequest(requestsNew);
        // setTotalRequest(requestsNew?.length);
        ui.alertSuccess(t('connectIgnoreSuccess'));
      })
      .catch(() => {
        ui.alertFailed(t('connectIgnoreFailure'));
      });
  };
  return (
    <div>
      <div className='mb-4'>
        <h1 className='font-medium mb-[20px] text-2xl'>Dashboard</h1>
        <div className='flex w-[210px]'>
          <Button
            className='mr-4'
            onClick={() => {
              onConnectAll();
            }}
          >
            Connect all
          </Button>

          <Button
            variant='outline'
            onClick={() => {
              router.push({ pathname: '/my-messages' });
            }}
          >
            View all connection
          </Button>
        </div>
      </div>
      <div className='flex justify-between mb-4 mt-3'>
        <p className='font-medium text-base'>
          Number of free contact with customer: {numberFree ? numberFree : 0}
        </p>
      </div>
      <div>
        <div className='max-w-5xl'>
          {listRequest &&
            listRequest.map((request: any, index: number) => (
              <div
                key={request.id}
                className='bg-white border border-[#E6E6E6] border-solid break-words flex flex-col mb-6 min-w-0 relative rounded-lg w-full last:mb-0'
              >
                <div className='flex items-center p-6'>
                  <div className='mr-6 w-[174px]'>
                    <Image
                      alt='img'
                      preview={false}
                      width={174}
                      height={174}
                      src={
                        request.image ??
                        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                      }
                      className='object-cover rounded-xl'
                    />
                  </div>
                  <div className='font-medium text-base w-5/6'>
                    <p className='leading-[19px] mb-[18px]'>
                      Requested time:{' '}
                      {moment(new Date(request.startDate)).format(
                        'h:mm:ss a, DD-MM-YYYY'
                      )}
                    </p>
                    <p className='leading-[19px] mb-[18px]'>
                      Expiry time:{' '}
                      {moment(new Date(request.endDate)).format(
                        'h:mm:ss a, DD-MM-YYYY'
                      )}
                    </p>
                    <p className='leading-[19px] mb-[18px]'>
                      Service Requested: {request.serviceName}
                    </p>
                    <p className='leading-[19px] mb-[18px]'>
                      Zipcode: {request.customerZipcode}
                    </p>
                    <p className='leading-[19px] mb-0'>
                      Deal Fee: ${request.fee}
                    </p>
                  </div>
                  <div className='w-1/6'>
                    <Button
                      variant='outline'
                      className='h-[48px] mb-3 w-[130px]'
                      onClick={() => onConnect(request.id, index)}
                    >
                      Connect
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => onIgnoreConnect(request.id, index)}
                      className='h-[48px] w-[130px]'
                    >
                      Ignore
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
