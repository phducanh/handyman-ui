import { Radio } from 'antd';
import { useState } from 'react';

import Button from '@/components/buttons/Button';

export default function PaymentHandyman() {
  const [card, setCard] = useState(1);
  return (
    <div>
      <div className='flex justify-between mb-4'>
        <h1>Dashboard</h1>
      </div>
      <div className='flex'>
        <div className='w-2/3'>
          <div>
            <p className='text-2xl'>Crad Information</p>
          </div>
          <div className='max-w-5xl mt-12 w-5/6'>
            <Radio.Group
              onChange={(e) => setCard(e.target.value)}
              value={card}
              className='w-full'
            >
              <div className='bg-white border-0 break-words flex flex-col mb-6 min-w-0 relative rounded-lg shadow-lg w-full'>
                <div className='flex flex-auto p-6 py-11 rounded-3xl'>
                  <Radio value={1} className='text-lg'>
                    422149******2397
                  </Radio>
                </div>
              </div>
            </Radio.Group>
          </div>
        </div>
        <div className='w-1/3'>
          <div className='border border-black px-9 py-6 rounded-md'>
            <div className='flex mb-6'>
              <p className='text-lg w-2/3'>Fee:</p>
              <p className='text-lg w-1/3'>$undefined</p>
            </div>
            <div className='flex mb-6'>
              <p className='text-lg w-2/3'>Registration Date:</p>
              <p className='text-lg w-1/3'>undefined</p>
            </div>
            <div className='flex mb-6'>
              <p className='text-lg w-2/3'>Expiry date:</p>
              <p className='text-lg w-1/3'>undefined</p>
            </div>
            <div className='flex mb-6'>
              <p className='text-lg w-2/3'>Total Amount:</p>
              <p className='text-2xl w-1/3'>$undefined</p>
            </div>
          </div>
          <Button className='mt-6 w-full'>Pay Now</Button>
        </div>
      </div>
    </div>
  );
}
