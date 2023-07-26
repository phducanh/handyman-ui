import { Select, Space } from 'antd';
import moment from 'moment';
import ImageNext from 'next/image';
import { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { VscChevronDown } from 'react-icons/vsc';

import Button from '@/components/buttons/Button';
import Card from '@/components/Card';

import { getPaymentSummary } from '@/api/user-service';
import { orderStatus, orderStatusToJSON } from '@/pb/const';
import ui from '@/utils/ui';

import Tag from '../Tag';

export interface infoPaymentSummary {
  startDate: '';
  endDate: '';
  serviceName: '';
  zipcode: '';
  fee: 0;
  status: orderStatus;
  id: '';
  image: '';
}

export default function PaymentSummaryHandyman() {
  const [selectedSort, setSelectedSort] = useState('0');
  const [listPaymentSummary, setListPaymentSummary] =
    useState<infoPaymentSummary[]>();
  // const test: infoPaymentSummary[] = [{
  //   startDate: '',
  //   endDate: '',
  //   serviceName: '',
  //   zipcode: '',
  //   fee: 0,
  //   status: orderStatus.COMPLETED,
  //   id: '',
  //   image: '',
  // },
  // {
  //   startDate: '',
  //   endDate: '',
  //   serviceName: '',
  //   zipcode: '',
  //   fee: 0,
  //   status: orderStatus.REJECTED,
  //   id: '',
  //   image: '',
  // }]
  const [totalFee, setTotalFee] = useState(0);

  const menuSort = [
    { label: 'This week', key: '0' },
    { label: 'Last week', key: '1' },
    { label: 'Last 2 week', key: '2' },
    { label: 'Last 3 week', key: '3' },
    { label: 'Last month', key: '4' },
  ];
  useEffect(() => {
    getPaymentSummary({
      userId: '',
      query: selectedSort.toString(),
      limit: '5',
      offset: '0',
    })
      .then((res) => {
        const result = res.data.result;
        // console.log(selectedSort);
        // console.log(result);
        setListPaymentSummary(result);
        setTotalFee(res.data.totalFee);
      })
      .catch((err) => ui.alertFailed(err));
  }, [selectedSort]);

  const colorByStatus = (status: orderStatus) => {
    switch (status) {
      case orderStatus.COMPLETED:
        return 'green';
      case orderStatus.CONNECTED:
        return 'blue';
      case orderStatus.REJECTED:
        return 'red';
      default:
        return 'yellow';
    }
  };
  return (
    <div style={{ minHeight: '50vh' }} className='paymentSummary'>
      <div className='flex justify-between mb-6'>
        <h1>Payment Summary</h1>
      </div>
      <Space className='h-full w-full' size={24} direction='vertical'>
        <div>
          <Space>
            <div className='border border-[#E6E6E6] flex h-[48px] items-center justify-center px-[32px] py-[12px] rounded-lg text-[#11952D] w-max'>
              <ImageNext
                alt='coins'
                src='/images/payment/coins.svg'
                width={24}
                height={24}
                layout='fixed'
              />
              <span className='ml-1'>Total: ${totalFee ? totalFee : 0}</span>
            </div>
            <Select
              size='small'
              suffixIcon={<VscChevronDown className='text-black' />}
              defaultValue='Sort'
              onChange={(value) => setSelectedSort(value)}
              className='text-center'
            >
              {menuSort.map((item) => {
                return (
                  <Select.Option
                    value={item.key}
                    key={item.key}
                    className='text-lg'
                  >
                    {item.label}
                  </Select.Option>
                );
              })}
            </Select>
          </Space>
        </div>
        <div className='w-[80%]'>
          {listPaymentSummary ? (
            <>
              {listPaymentSummary.map(
                (item: infoPaymentSummary, index: number) => (
                  <Card
                    key={index}
                    src={
                      item?.image ||
                      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                    }
                    append={
                      <Tag
                        className='absolute right-[16px] top-[16px]'
                        color={colorByStatus(item.status)}
                      >
                        {orderStatusToJSON(item.status)}
                      </Tag>
                    }
                  >
                    <div className='flex flex-col flex-shrink-0 h-full justify-between min-w-max'>
                      <p className='h-min m-0 min-w-max text-base whitespace-nowrap'>
                        Requested time:{' '}
                        {moment(item.startDate).format('h:mm A, MMM DD, YYYY')}
                      </p>
                      <p className='h-min m-0 min-w-max text-base whitespace-nowrap'>
                        Expiry time:{' '}
                        {moment(item.endDate).format('h:mm A, MMM DD, YYYY')}
                      </p>
                      <p className='h-min m-0 min-w-max text-base whitespace-nowrap'>
                        Service Requested: {item.serviceName}
                      </p>
                      <p className='h-min m-0 min-w-max text-base whitespace-nowrap'>
                        Zipcode: {item.zipcode}
                      </p>
                      <p className='h-min m-0 min-w-max text-base whitespace-nowrap'>
                        Deal fee: {item?.fee ? item.fee : 0}$
                      </p>
                    </div>
                  </Card>
                )
              )}
              <div className='flex justify-end'>
                <Button
                  icon={<FiDownload />}
                  variant='outline'
                  className='h-[auto] ml-6 text-lg'
                >
                  Download weekly statement
                </Button>
              </div>
            </>
          ) : (
            <p className='font-bold text-3xl text-red-500'>
              There is no Payment!
            </p>
          )}
        </div>
      </Space>
    </div>
  );
}
