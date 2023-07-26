import { useState } from 'react';

import ListRequestHandyman from './ListRequest';
import PaymentHandyman from './Payment';

export default function DashboardHandyman() {
  const [tab] = useState('list_request');
  return (
    <div style={{ minHeight: '50vh' }}>
      {tab === 'list_request' && <ListRequestHandyman />}
      {tab === 'payment' && <PaymentHandyman />}
    </div>
  );
}
