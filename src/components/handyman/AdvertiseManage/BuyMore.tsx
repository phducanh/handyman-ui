import moment from 'moment';
import * as React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import { PageNavigation } from '@/components/Pagination';

import { getOrderedPromote } from '@/api/user-service';
import { Pagination } from '@/pb/apiservice';

const totalPrice = (start: any, end: any, price: number) => {
  const duration = end - start;
  return (price * duration) / 86400000;
};

export default function BuyMorePage(props: any) {
  const { setTab } = props;
  const [purchased, setPurchase] = React.useState<any[]>([]);
  const [pagination, setPagination] = React.useState<Pagination>({
    total: 0,
    limit: 2,
    offset: 1,
  });
  React.useEffect(() => {
    const data = {
      UserId: '',
      limit: '0',
      offset: '0',
    };
    getOrderedPromote(data).then((res) => {
      const { pagination, result } = res;
      setPurchase(result);
      setPagination(pagination);
    });
  }, []);
  return (
    <section>
      {purchased.map((item: any, index: number) => (
        <div className='detailAD' key={index}>
          <h1 className='font-medium text-[24px] text-black'>
            Advertise manage
          </h1>
          <div className='content-bottom flex flex-wrap items-start justify-start'>
            <div className='bg-white flex items-center justify-start mt-2 rounded-md w-[400px]'>
              <AiFillCheckCircle className='inline-block mr-4 text-[24px] text-green-500' />
              <p className='font-medium mb-[0px] mt-[0px] text-[20px]'>
                Package name: {item?.name ? item?.name : ''}
              </p>
            </div>

            <div className='bg-white border-[1.5px] m-5 p-[20px] rounded-md w-[400px]'>
              <div className=''>
                <div className='border-b-[1.5px] flex justify-between pb-6 text-[18px]'>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    Professional Category:{' '}
                  </p>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    {item?.categoryName ? item?.categoryName : ''}
                  </p>
                </div>
                <div className='border-b-[1.5px] flex justify-between mt-6 pb-6 text-[18px]'>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    Service Areas:{' '}
                  </p>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    {item?.zipcode ? item?.zipcode : ''}
                  </p>
                </div>
                <div className='border-b-[1.5px] flex justify-between mt-6 pb-6 text-[18px]'>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    Registration Date:{' '}
                  </p>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    {item?.startDate
                      ? moment(item?.startDate).format('DD.MM.yyyy')
                      : ''}
                  </p>
                </div>
                <div className='border-b-[1.5px] flex justify-between mt-6 pb-6 text-[18px]'>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    Expiry date:{' '}
                  </p>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    {item?.endDate
                      ? moment(item?.endDate).format('DD.MM.yyyy')
                      : ''}
                  </p>
                </div>
                <div className='border-b-[1.5px] flex justify-between mt-6 pb-6 text-[18px]'>
                  <p className='font-medium mb-[0px] text-[16px]'>Price: </p>
                  <p className='font-medium text-[16px]'>
                    ${item?.price ? item?.price : ''}
                  </p>
                </div>
                <div className='flex justify-between mt-4 text-[18px]'>
                  <p className='font-medium mb-[0px] text-[16px]'>
                    Total Amount:{' '}
                  </p>
                  <p className='font-bold mb-0 text-[#ff511a] text-[20px]'>
                    {totalPrice(item.startDate, item.endDate, item.price)}
                  </p>
                </div>
              </div>
              <div className='flex justify-between mt-5 w-full'>
                <Button
                  size='small'
                  className='w-[100%]'
                  onClick={() => setTab('manageAD')}
                >
                  Buy more
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <PageNavigation
        totalItem={pagination.total}
        itemsPerPage={pagination.limit}
        page={pagination.offset}
        setPage={(newOffset) =>
          setPagination({ ...pagination, offset: newOffset })
        }
      />
    </section>
  );
}
