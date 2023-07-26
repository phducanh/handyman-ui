/* eslint-disable @typescript-eslint/no-unused-vars */
import { Image } from 'antd';
import React from 'react';

export const ChatList = (props: any) => {
  const { data, isChattingWith, setIsChattingWith, role } = props;

  return (
    <>
      <div className='bottom-listOrder max-h-[650px] md:w-[50%] lg:w-[40%]'>
        {/* <p className='font-medium mt-5 text-xl'>Your Order</p> */}
        <div className='h-full listOrder mr-5 mt-3 overflow-y-scroll scrollbar-hide'>
          {data?.map((item: any, index: number) => {
            console.log('item', item);
            return (
              <div
                key={item.id}
                className={`cursor-pointer flex itemOrder items-start mb-0 ${
                  index < data.length - 1 ? 'border-b pb-0' : ''
                }`}
                onClick={() => {
                  setIsChattingWith(item);
                }}
              >
                <div
                  className={`flex w-full p-2 rounded-lg ${
                    isChattingWith.id === item.id ? 'bg-[#FFF6F3]' : ''
                  }`}
                >
                  <div className='img mr-6'>
                    <Image
                      className='rounded-lg'
                      width={56}
                      height={56}
                      src={
                        role === 1
                          ? item?.image || '/images/detail-brand/logo.jpg'
                          : item.businessLogo
                      }
                      alt='avatar'
                      preview={false}
                    />
                  </div>
                  <div className='mr-9 title'>
                    <p className='font-semibold mb-0 text-base'>
                      {role === 1 ? item?.customerName : item?.businessName}
                    </p>
                    <p className='mb-0 text-[#999999] text-sm'>
                      Service request: {item?.serviceName}{' '}
                    </p>
                    {role === 1 && (
                      <p className='mb-0 text-[#999999] text-[14px] text-sm'>
                        Zip: {item?.customerZipcode}{' '}
                      </p>
                    )}
                  </div>
                  <div className='ml-auto'>
                    <p className='mb-0 text-[#999999] text-sm'>1 hour ago</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
