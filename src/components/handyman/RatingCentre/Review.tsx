import { Rate, Space } from 'antd';
import moment from 'moment';
import Image from 'next/image';

import { Feedback } from '@/pb/apiservice';

export default function Review({ item }: { item: Feedback }) {
  return (
    <div className='flex mb-4 w-full'>
      <div className='flex justify-start mr-4'>
        <Image
          width={48}
          height={48}
          layout='fixed'
          className='object-cover rounded-[50%]'
          src={item?.image ? item?.image : '/images/detail-brand/avatar.jpg'}
          alt='img'
        />
      </div>
      <div className='flex-grow'>
        <Space className='w-full' direction='vertical' size={4}>
          <span className='block font-medium text-base text-black'>
            {item?.customerName ? item?.customerName : ''}
          </span>
          <div>
            <span className='font-normal text-[#333333] text-base'>
              User service: {item?.serviceOrder ? item?.serviceOrder : ''}
            </span>
            <span className='font-medium mx-2 text-[#333333] text-lg'>•</span>
            <span className='text-[#333333] text-base'>
              {moment(item.createdAt).format('ll')}
            </span>
          </div>
          <Rate
            className='block text-[#FF9F38] text-sm'
            allowHalf
            disabled
            defaultValue={item?.rate ? item?.rate : 0}
          />
        </Space>
        {item.comment && (
          <div className='border max-w-full mt-[16px] p-4 rounded-xl'>
            <p className='font-normal m-0 text-base text-black'>
              {item?.comment ? item?.comment : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
