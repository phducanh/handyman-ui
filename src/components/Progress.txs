import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Progress({
  prepend,
  append,
  percent,
  className,
}: {
  append?: ReactNode;
  prepend?: ReactNode;
  percent: number;
  className?: string;
}) {
  return (
    <div className={clsx('flex flex-1 w-full', className)}>
      <div className='mr-3'>{prepend}</div>
      <div
        className={`h-[24px] rounded bg-gradient-to-r to-[#FF511A] from-[#FF845E]`}
        style={{ width: `${percent}%` }}
      ></div>
      <div className='ml-3'>{append}</div>
    </div>
  );
}
