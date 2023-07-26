import { PlusCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
// import { Content } from 'antd/lib/layout/layout';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { MdRadioButtonChecked } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

import Button from '@/components/buttons/Button';

import {
  DeletePaymentMethod,
  GetPaymentMethod,
  getStripePaymentMethods,
} from '@/api/user-service';
import ui from '@/utils/ui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ManagePaymentMethod({ changeTab }: any) {
  const { t } = useTranslation('common', { keyPrefix: 'pages.paymentCenter' });
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalDelete24, setIsModalDelete24] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<any>();

  const getPaymentMethods = async () => {
    const isPayment = await GetPaymentMethod();
    if (
      !isPayment ||
      !isPayment.payment ||
      // !isPayment.payment.id ||
      !isPayment.payment.paymentMethodId
    ) {
      setPaymentMethods(null);
      return;
    }
    getStripePaymentMethods()
      .then((res) => {
        setPaymentMethods(res);
      })
      .catch((err) => {
        ui.alertFailed(err);
      });
  };

  const onDeletePaymentMethod = () => {
    DeletePaymentMethod()
      .then(async (res) => {
        if (res) {
          ui.alertSuccess('Remove Card Success');
          await getPaymentMethods();
          setIsModalDelete(false);
          setIsModalDelete24(false);
        }
      })
      .catch((err) => {
        ui.alertFailed(err);
      });
  };

  useEffect(() => {
    getPaymentMethods();
  }, []);
  return (
    <div className='flex items-center justify-center'>
      {!paymentMethods && (
        <div className='flex h-full w-full'>
          <div className='flex flex-col h-max items-center justify-center mx-auto w-max'>
            <Image
              alt='method not found'
              src='/images/payment/not-found.svg'
              width={147}
              height={138}
              layout='fixed'
            />
            <span className='font-medium leading-6 mb-[24px] mt-[8px] text-[#999999] text-base'>
              {t('methodNotFound')}
            </span>
            <Button
              icon={<PlusCircleOutlined className='text-xl' />}
              onClick={() => changeTab('add_payment_method')}
            >
              {t('addPaymentMethod')}
            </Button>
          </div>
        </div>
      )}
      {paymentMethods && (
        <div className='flex items-center justify-center w-[600px] lg:w-[700px]'>
          <div className=''>
            <div>
              <p className='font-medium text-lg'>My cards</p>
            </div>
            <div className='border border-[#FF511A] break-words flex flex-col mb-6 min-w-0 relative rounded-lg w-full'>
              <div className='flex h-[72px] items-center justify-between min-w-[350px] lg:w-[513px]'>
                <MdRadioButtonChecked className='flex-1 h-5 text-[#FF511A] w-5' />
                <div className='flex flex-[4]'>
                  <HiOutlineCreditCard className='font-medium h-6 mr-2 text-lg w-6' />
                  <div className='font-medium text-lg'>
                    **** **** **** {paymentMethods.last4}
                  </div>
                </div>

                <button
                  className='flex flex-1 justify-end mr-3 w-[10%]'
                  onClick={() => setIsModalDelete(true)}
                >
                  <RiDeleteBinLine className='font-medium h-5 w-5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal
        visible={isModalDelete}
        footer={null}
        onCancel={() => setIsModalDelete(false)}
      >
        <p className='text-center text-lg'>Do you want to delete?</p>
        <div className='flex gap-8 justify-center pt-5'>
          <div className='w-[150px]'>
            <Button variant='outline' onClick={() => setIsModalDelete(false)}>
              Cancel
            </Button>
          </div>
          <div className='w-[150px]'>
            <Button onClick={() => onDeletePaymentMethod()}>Confirm</Button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isModalDelete24}
        footer={null}
        onCancel={() => setIsModalDelete24(false)}
      >
        <div className='flex justify-center py-8'>
          <Image
            src='/images/icons/alert-icon.png'
            alt='success'
            height='48'
            width='48'
            className='mx-auto'
          />
        </div>
        <div className='text-black text-center'>
          <div className='mt-1 text-sm'>
            It has been more than 24 hours before the system fee payment time.
            If you change your payment method, we will still charge your current
            card.
          </div>
        </div>
        <div className='flex justify-center mx-auto py-8 text-center w-1/3'>
          <Button
            className='w-full'
            variant='primary'
            onClick={() => onDeletePaymentMethod()}
          >
            Continue
          </Button>
        </div>
      </Modal>
    </div>
  );
}
