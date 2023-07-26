import { Rate } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Image from 'next/image';
import * as React from 'react';
import { FaAdversal } from 'react-icons/fa';
import { MdBookmark, MdReviews } from 'react-icons/md';

import logo from '../../public/images/detail-brand/logo.jpg';

export default function SearhResultItem() {
  return (
    <div className='gap-3 grid grid-cols-12 px-11 py-10'>
      <div className='col-span-12 md:col-span-3'>
        <Image
          src={'/images/default-image.webp'}
          alt=''
          className='cursor-pointer mx-auto object-cover rounded-xl'
          width={300}
          height={170}
          layout='responsive'
        />
      </div>
      <div className='col-span-12 flex justify-between md:ml-2 lg:col-span-9'>
        <div className=''>
          <div className='flex items-center justify-between pb-2'>
            <Image
              src={logo}
              alt=''
              className='rounded-full'
              width={40}
              height={40}
            />

            <h3 className='cursor-pointer font-bold ml-2 text-xl md:ml-0 lg:text-2xl'>
              On Top Movers
            </h3>

            <FaAdversal className='h-5 rounded-sm w-10' />
          </div>
          <div className='py-2'>
            <div className='items-center md:flex'>
              <Rate value={5} className='mr-4' />
              <p className='font-semibold mt-1 text-sm'>(5 out of 5)</p>
            </div>
            <div className='flex items-center py-3'>
              <MdBookmark className='text-2xl md:mr-4' />
              <span className='font-semibold text-sm'>
                Requested 1,0000 times through Anygonow
              </span>
            </div>
            <div className='flex items-center pt-1'>
              <MdReviews className='text-2xl md:mr-4' />
              <span className='capitalize font-semibold text-sm'>
                900 customer reviews
              </span>
            </div>
          </div>
        </div>
        <Checkbox
          className='mr-[20%] my-auto'
          style={{ transform: 'scale(2)' }}
        />
      </div>
      <div className='col-span-12'>
        <h3 className='font-bold text-2xl'>Description</h3>
        <p className='line-clamp-3'>
          A product description is a form of marketing copy used to describe and
          explain the benefits of your product. In other words, it provides all
          the information and details of your product on your ecommerce site.
          These product details can be one sentence, a short paragraph or
          bulleted.A product description is a form of marketing copy used to
          describe and explain the benefits of your product. In other words, it
          provides all the information and details of your product on your
          ecommerce site. These product details can be one sentence, a short
          paragraph or bulleted.
        </p>
      </div>
    </div>
  );
}
