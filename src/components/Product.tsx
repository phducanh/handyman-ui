/* eslint-disable @next/next/no-img-element */

// import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

import { Category } from '@/config/interface';

export default function Product({
  style,
  product,
}: {
  className?: string;
  style?: React.CSSProperties;
  product: Category;
}) {
  const router = useRouter();
  return (
    <div>
      <div
        key={product.id}
        onClick={() =>
          router.push(`/customer/search-result?categoryId=${product.id}`)
        }
        className='relative'
        // className={clsx(
        //   className,
        //   'group primary-box-shadow rounded-lg lg:px-5'
        // )}
        style={style}
      >
        <Image
          src={product.image ? product.image : '/images/detail-brand/logo.jpg'}
          alt='image'
          className='w-full'
          // layout='responsive'
          width={283}
          height={377}
        />
        <span className='absolute bg-black/50 bottom-4 font-bold left-7 mt-1 px-1 rounded text-base text-white'>
          {product.name}
        </span>
      </div>
    </div>
  );
}
