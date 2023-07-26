import { BookmarkIcon, ChatAltIcon } from '@heroicons/react/outline';
import { Checkbox, Col, Rate, Row } from 'antd';
import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';

import { Business, BusinessRating, Rating } from '@/pb/apiservice';

export default function OneResult({
  detail,
  select = (f: any) => f,
  handleClickDetail = (f: any) => f,
}: {
  detail: BusinessRating;
  select: any;
  handleClickDetail: any;
}) {
  const [selected, setSelected] = React.useState<boolean>(false);
  const business = Business.fromJSON(detail.business);
  const rating = Rating.fromJSON(detail.rating);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => select(selected, business.id), [selected]);
  const handleChose = () => {
    handleClickDetail(business.id);
  };
  return (
    <div className='bg-white border border-[#E6E6E6] max-h-[248px] p-4 pr-20 relative rounded-lg shadow'>
      <Row className='flex items-start justify-start'>
        <Col
          span={8}
          className='h-full max-w-[280px] mr-4 rounded-lg'
          onClick={handleChose}
        >
          <Image
            alt='banner'
            width={284}
            height={216}
            src={
              business.bannerImage
                ? business.bannerImage
                : 'https://anygonow.s3.us-east-1.amazonaws.com/image.svg'
            }
          />
        </Col>
        <Col span={15}>
          <div className='flex items-center mb-3 w-full'>
            <Image
              width={32}
              height={32}
              alt='service-logo'
              src={
                business.logoImage
                  ? business.logoImage
                  : 'https://anygonow.s3.us-east-1.amazonaws.com/image.svg'
              }
            />
            <h4
              className='font-bold mb-0 ml-2 text-xl hover:cursor-pointer hover:text-cyan-500'
              onClick={handleChose}
            >
              {business.name}
            </h4>
          </div>
          <div className='mb-3'>
            <p
              className='font-medium overflow-hidden text-sm'
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {business.descriptions}
            </p>
          </div>
          <div className='flex items-end mb-3'>
            <Rate
              className='text-sm'
              allowHalf
              disabled
              defaultValue={rating.rate}
            />
            <p className='font-medium leading-4 ml-2 my-0 text-[#999999] text-sm'>
              {rating.review} reviews
            </p>
          </div>
          <div className='flex items-center mb-3'>
            <BookmarkIcon className='h-5 text-lg w-5' />
            <span className='font-medium ml-2 text-[#333333] text-base truncate'>
              Requested {rating.request} times through Anygonow
            </span>
          </div>
          <div className='flex items-center'>
            <ChatAltIcon className='h-5 text-lg w-5' />
            <span className='font-medium ml-2 text-[#333333] text-base truncate'>
              {rating.review} Customer Review
            </span>
          </div>
        </Col>
      </Row>
      <Checkbox
        className='absolute right-4 top-4'
        onClick={() => setSelected(!selected)}
        defaultChecked={false}
      ></Checkbox>
      <div className='absolute bottom-4 right-4'>
        <Button variant='outline' onClick={handleChose}>
          view
        </Button>
      </div>
    </div>
  );
}
