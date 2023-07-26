import { useState } from 'react';

import AddPaymentMethodForm from './AddPaymentMethodForm';
import ManagePaymentMethod from './ManagePaymentMethod';

export default function DashboardHandyman() {
  const [tab, setTab] = useState('manage_payment_method');
  const changeTab = (t: string) => {
    setTab(t);
  };
  return (
    <div style={{ minHeight: '50vh' }}>
      <div className='flex justify-between mb-4'>
        <h1 className='font-bold text-2xl'>Payment center</h1>
      </div>
      <div className='w-full'>
        {tab === 'manage_payment_method' && (
          <ManagePaymentMethod changeTab={changeTab} />
        )}
        {tab === 'add_payment_method' && (
          <AddPaymentMethodForm changeTab={changeTab} />
        )}
      </div>
    </div>
  );
}
