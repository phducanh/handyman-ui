import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

export default function Card({
  className,
  src,
  append,
  children,
}: {
  className?: string;
  src?: string;
  append?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        'bg-white border border-[#E6E6E6] border-solid break-words flex flex-col mb-6 min-w-max relative rounded-lg w-full last:mb-0',
        className
      )}
    >
      <div className='flex items-stretch justify-start p-[16px] pr-[132px]'>
        <div className='flex mr-[24px] w-[174px]'>
          <Image
            alt='card img'
            width={174}
            height={174}
            layout='fixed'
            src={src || ''}
            className='rounded-xl'
          />
        </div>
        <div className='font-medium text-base'>{children}</div>
        {append}
      </div>
    </div>
  );
}
