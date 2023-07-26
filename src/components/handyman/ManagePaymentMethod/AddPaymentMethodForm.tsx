import { CloseCircleOutlined } from '@ant-design/icons';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Form, Modal } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';

// import { useSelector } from 'react-redux';
import Button from '@/components/buttons/Button';

import { PostPaymentMethod, PostPaymentMethodSetup } from '@/api/user-service';
import ui from '@/utils/ui';
export default function AddPaymentMethodForm({
  changeTab,
}: // setAddingCard,
any) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [modalInfoCVC, setModalInfoCVC] = useState(false);
  const userInfo = useSelector((state: any) => state.auth);
  const stripe = useStripe();

  const elements = useElements();

  const handleSubmit = async () => {
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const paymentMethodSetup = await PostPaymentMethodSetup({
      UserId: userInfo.id,
    });

    const paymentMethodInfo = await stripe.confirmCardSetup(
      paymentMethodSetup.clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardNumberElement) ?? { token: '' },
        },
      }
    );
    if (
      !paymentMethodInfo ||
      !paymentMethodInfo.setupIntent ||
      !paymentMethodInfo.setupIntent.payment_method ||
      paymentMethodInfo.setupIntent.status !== 'succeeded'
    ) {
      ui.alertFailed('Payment save failed!');
      setLoading(false);
    }
    if (paymentMethodInfo.error) {
      ui.alertFailed('Please input the right value!');
      setLoading(false);
    } else {
      const data = {
        UserId: userInfo.id,
        paymentMethodId: paymentMethodInfo.setupIntent.payment_method ?? '',
      };
      PostPaymentMethod(data)
        .then(() => {
          changeTab('manage_payment_method');
          setLoading(false);
        })
        .catch(() => {
          ui.alertFailed('Add Payment method failed');
          setLoading(false);
        });
    }
  };
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center w-[700px]'>
        <div className=''>
          <p className='font-medium text-lg'>Add Payment Method</p>
          <Form form={form} autoComplete='off' onFinish={handleSubmit}>
            <div className='font-medium leading-4 ml-3 my-[4px] text-sm'>
              Card Number
              <span className='text-red-500'>*</span>
            </div>
            <Form.Item className='lg:w-[405px]'>
              <CardNumberElement className='border p-4 rounded-xl'></CardNumberElement>
            </Form.Item>
            <div className='justify-between lg:flex'>
              <div>
                <div className='font-medium leading-4 ml-3 my-[4px] text-sm'>
                  Expiration Date
                  <span className='text-red-500'>*</span>
                </div>
                <Form.Item
                  style={{ marginBottom: '14px' }}
                  className='w-full lg:w-[190px]'
                  name='state'
                >
                  <CardExpiryElement className='border p-4 rounded-xl' />
                </Form.Item>
              </div>
              <div>
                <div className='font-medium leading-4 ml-3 my-[4px] text-sm'>
                  CVV
                  <span className='text-red-500'>*</span>
                </div>
                <div className='flex lg:flex-col'>
                  <Form.Item
                    style={{ marginBottom: '3px' }}
                    name='city'
                    className='w-32 lg:w-[190px]'
                  >
                    <CardCvcElement className='border p-4 rounded-xl' />
                  </Form.Item>
                  <a
                    href='#'
                    className='flex items-center justify-center mb-3 ml-3 text-sm underline'
                    onClick={() => setModalInfoCVC(true)}
                  >
                    What is a security code?
                  </a>
                </div>
              </div>
            </div>
            <Form.Item>
              <div className='flex flex-col-reverse py-6 lg:flex-row lg:justify-end'>
                <Button
                  className='font-bold h-12 mr-3 text-base w-full lg:w-[132px]'
                  variant='outline'
                  onClick={() => changeTab('manage_payment_method')}
                >
                  Cancel
                </Button>
                <Button
                  className='bg-primary font-bold h-12 my-3 text-base w-full lg:my-0 lg:w-[132px]'
                  type='submit'
                  isLoading={loading}
                >
                  Add Card
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
        {modalInfoCVC && (
          <Modal
            visible={true}
            closable={false}
            centered={true}
            bodyStyle={{ padding: '0px' }}
            footer={null}
            className='forgot-pwd-modal'
            width={690}
          >
            <div className='pb-[37px] pt-[52px] px-[74px] w-full'>
              <div className='w-full'>
                <button
                  className='absolute right-10 top-9'
                  onClick={() => setModalInfoCVC(false)}
                >
                  <CloseCircleOutlined style={{ fontSize: '35px' }} />
                </button>
                <div className='text-black text-center'>
                  <div className='font-medium text-[28px] text-left'>
                    Please check your email
                  </div>
                  <div className='font-medium mt-10 text-[22px] text-left'>
                    We require that you enter your credit card verification
                    number (CVV) to make sure the payment goes through. Your CVV
                    number can be located on the back of your credit card.
                  </div>
                </div>
                <div className='pt-11'>
                  <Image
                    src='/images/cvc.png'
                    className='mx-auto'
                    alt='success'
                    width={590}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}
