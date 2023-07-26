import { UserIcon } from '@heroicons/react/outline';
import { Col, Rate, Row } from 'antd';
import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import Progress from '@/components/Progress';

import { standardizedRate } from '@/functions/index';

export default function RatingHandyman({
  rate,
  totalRate,
  rates,
}: {
  rate: number;
  totalRate: number;
  rates: any;
}) {
  const [dataRates, setDataRates] = useState([
    {
      rate: 0,
      review: 0,
    },
  ]);

  useEffect(() => {
    const dataRates1 = standardizedRate(rates);

    setDataRates(dataRates1);
  }, [rates]);

  const getPercent = (star: number) => {
    return (star / totalRate) * 100;
  };

  return (
    <Row className='flex flex-wrap items-center lg:flex-nowrap'>
      <Col className='border-[#E6E6E6] border-r flex flex-col items-center justify-start pr-[63px]'>
        <span className='bg-[#FFF5F2] flex font-medium h-[122px] items-center justify-center mb-[26px] rounded-[50%] text-[#C02D02] text-[56px] w-[122px]'>
          {rate ? rate.toFixed(1) : (0.0).toFixed(1)}
        </span>
        <Rate
          className='mb-[14px] text-[#FF9F38] text-xl'
          allowHalf
          disabled
          value={rate}
        />
        <div className='flex font-medium items-center leading-6 ml-2 my-0 text-base text-black'>
          <UserIcon width={20} height={20} className='inline-block mr-1' />
          <span className='h-min text-lg'>Total {totalRate}</span>
        </div>
      </Col>
      <Col className='pl-[32px] w-[100%] lg:w-[75%]'>
        {dataRates.map((index) => (
          <div key={index.rate} className='my-5'>
            <Progress
              percent={getPercent(index.review ? index.review : 0)}
              prepend={
                <div className='flex items-center justify-start'>
                  <span className='font-bold mr-1 text-base'>{index.rate}</span>
                  <AiFillStar className='inline-block text-[#FF9F38] text-xl' />
                </div>
              }
              append={
                index.review > 0 && (
                  <span className='font-bold mr-1 text-base whitespace-nowrap'>
                    {index.review ? index.review : 0} reviews
                  </span>
                )
              }
            />
          </div>
        ))}
      </Col>
    </Row>
  );
}
