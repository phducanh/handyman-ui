import * as React from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import Slider, { Settings } from 'react-slick';

import { Category } from '@/config/interface';

import Product from '../Product';

export default function MostInterest({
  className,
  style,
  items,
  settings,
}: {
  className?: string;
  style?: React.CSSProperties;
  items: any[] | undefined;
  settings: Settings;
}) {
  const myRef = React.useRef<Slider | null>(null);
  const next = () => myRef.current?.slickNext();
  const pre = () => myRef.current?.slickPrev();
  return (
    <div>
      <Slider ref={myRef} {...settings} className={className} arrows={false}>
        {items?.map((item: Category, index: number) => (
          <Product product={item} key={index} style={style} />
        ))}
      </Slider>

      <div className='gap-2 grid grid-cols-2 mx-auto w-[70px]'>
        <div
          onClick={pre}
          className='bg-[#FFEBCC] cursor-pointer flex h-[36px] items-center justify-center mr-2 rounded-full w-[36px]'
        >
          <BsFillCaretLeftFill className='text-gray-500 text-xl' />
        </div>
        <div
          onClick={next}
          className='bg-[#FFEBCC] cursor-pointer flex h-[36px] items-center justify-center rounded-full w-[36px]'
        >
          <BsFillCaretRightFill className='text-gray-500 text-xl' />
        </div>
      </div>
    </div>
  );
}
