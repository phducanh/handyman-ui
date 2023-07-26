import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Checkbox, Form } from 'antd';
import { useEffect, useState } from 'react';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { MdRadioButtonChecked } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

// import { useSelector } from 'react-redux';
import Button from '@/components/buttons/Button';

import {
  DeletePaymentMethod,
  GetPaymentMethod,
  getStripePaymentMethods,
  PostPaymentMethod,
  PostPaymentMethodSetup,
} from '@/api/user-service';
import ui from '@/utils/ui';
export default function PaymentMethod({
  changeTab,
  setIdPayment,
}: // setAddingCard,
any) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const userInfo = useSelector((state: any) => state.auth);
  const stripe = useStripe();
  const [paymentMethods, setPaymentMethods] = useState<any>();

  const elements = useElements();

  const getPaymentMethods = async () => {
    const isPayment = await GetPaymentMethod();
    console.log({ isPayment });
    if (
      !isPayment ||
      !isPayment.payment ||
      // !isPayment.payment.id ||
      !isPayment.payment.paymentMethodId
    ) {
      setPaymentMethods(null);
      return;
    }
    setIdPayment(isPayment.payment.id);
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
        }
      })
      .catch((err) => {
        ui.alertFailed(err);
      });
  };

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
  useEffect(() => {
    getPaymentMethods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (paymentMethods) {
    return (
      <div className='bg-white m-5 ml-0 mt-0 p-[20px] pl-0 rounded-md'>
        <div className=''>
          <div>
            <p className='font-medium text-lg'>My cards</p>
          </div>
          <div className='border border-[#FF511A] break-words flex flex-col mb-6 min-w-0 relative rounded-lg w-full'>
            <div className='flex h-[72px] items-center justify-between min-w-[250px] lg:w-[400px]'>
              <MdRadioButtonChecked className='flex-1 h-5 text-[#FF511A] w-5' />
              <div className='flex flex-[4]'>
                <HiOutlineCreditCard className='font-medium h-6 mr-2 text-lg w-6' />
                <div className='font-medium text-lg'>
                  **** **** **** {paymentMethods.last4}
                </div>
              </div>

              <button
                className='flex flex-1 justify-end mr-3 w-[10%]'
                onClick={() => onDeletePaymentMethod()}
              >
                <RiDeleteBinLine className='font-medium h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='bg-white m-5 ml-0 mt-0 p-[20px] pl-0 rounded-md'>
      <div className='flex'>
        <div className=''>
          <p className='font-medium text-lg'>My cards</p>
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
                </div>
              </div>
            </div>
            <Form.Item
              className='mb-0'
              name='isAgreeTerm'
              valuePropName='checked'
            >
              <div className='flex flex-col-reverse lg:flex-row lg:justify-center'>
                <Checkbox className='align-center flex font-medium leading-5 pl-2 text-sm'>
                  <div className=''>
                    <span className='ml-2'>Save card to “My cards”</span>
                  </div>
                </Checkbox>
              </div>
            </Form.Item>
            <Form.Item>
              <div className='flex flex-col-reverse py-6 lg:flex-row lg:justify-center'>
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
      </div>
    </div>
  );
}
