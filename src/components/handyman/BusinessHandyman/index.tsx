import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ContactFormHandyman from './ContactForm';
import ServiceFormHandyman from './ServiceForm';

export default function ManageBusinessHandyman() {
  const [tab, setTab] = useState<any>('service_info');
  const router = useRouter();
  useEffect(() => {
    const tab = router.query?.tab as string;
    if (tab) {
      setTab(tab);
      // console.log(tab);
    }
  }, [router]);
  const handleClick = (path: any) => {
    setTab(path);
    router.push(`/?page=manage_my_business&tab=${path}`);
  };
  return (
    <div style={{ minHeight: '50vh' }}>
      <div className='flex justify-between mb-4'>
        <h3 className='font-bold'>Manage My Business</h3>
        <div>
          <button className='border-[#FF511A] border-[1.5px] font-[700] px-6 py-2 rounded-md text-[#FF511A] text-[16px]'>
            Verify your account
          </button>
        </div>
      </div>
      <div className='mb-5'>
        {/* <Menu
          mode='horizontal'
          // selectedKeys={[tab]}
          defaultSelectedKeys={[tab]}
        >
          <Menu.Item key='service_info' onClick={({ key }) => setTab(key)}>
            <p>Service Infor</p> 
          </Menu.Item>
          <Menu.Item key='contact_info' onClick={({ key }) => setTab(key)}>
            <p>Contact Infor</p>
          </Menu.Item>
        </Menu> */}
        <div className='border-b-[1.5px] border-b-gray-400 flex pb-3 w-full'>
          <div
            className={`mr-2 py-3 px-4 cursor-pointer rounded-lg ${
              tab == 'service_info' ? 'bg-[#FFE8E0] text-[#B72C00]' : ''
            }`}
            onClick={() => handleClick('service_info')}
          >
            <p className='font-medium m-0 text-base'>Service Infor</p>
          </div>
          <div
            className={`py-3 px-4 cursor-pointer rounded-lg ${
              tab == 'contact_info' ? 'bg-[#FFE8E0] text-[#B72C00]' : ''
            }`}
            onClick={() => handleClick('contact_info')}
          >
            <p className='font-medium m-0 text-base'>Contact Infor</p>
          </div>
        </div>
      </div>
      {tab === 'service_info' && <ServiceFormHandyman />}
      {tab === 'contact_info' && <ContactFormHandyman />}
    </div>
  );
}
