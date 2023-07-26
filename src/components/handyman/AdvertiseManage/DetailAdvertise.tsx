import { useStripe } from '@stripe/react-stripe-js';
import { DatePicker, Form, Select } from 'antd';
import moment from 'moment';
import * as React from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { CgCalendarDates, CgChevronDownO } from 'react-icons/cg';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';

import {
  buyPromote,
  getAdvertiseDetail,
  setupBuyAdBusinesses,
} from '@/api/user-service';
import ui from '@/utils/ui';

import PaymentMethod from './PaymentMethod';
//confirmCardPayment
export default function DetailAdvertisePage(props: any) {
  const { setTab, currentAdvertise, setBuyAdvertise } = props;
  const [advertise, setAdvertise] = React.useState<any>();
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [timeBegin, setTimeBegin] = React.useState<Date>();
  const [timeEnd, setTimeEnd] = React.useState<Date>();
  const [steps, setSteps] = React.useState('ad_manage');
  const [idPaymentMethod, setIdPaymentMethod] = React.useState('');
  const userInfo = useSelector((state: any) => state.auth);
  // const userInfo = useSelector((state: any) => state.auth);
  const [InfoAD, setInfoAD] = React.useState<any>({
    ProfessionalCategory: '',
    ServiceAreas: '',
    serviceId: '',
  });
  const stripe = useStripe();
  const handleChangeTimeBegin = (date: any, dateString: any) => {
    setTimeBegin(dateString);
    if (timeEnd) {
      const now = moment(dateString); //todays date
      const end = moment(timeEnd); // another date
      const duration = moment.duration(end.diff(now));
      const days = duration.asDays();
      if (days > 0) {
        const timeString = (days * currentAdvertise?.price).toFixed(2);
        const time = parseFloat(timeString);
        setTotalPrice(time);
      } else {
        setTotalPrice(0);
      }
    }
  };

  const handleChangeTimeEnd = (date: any, dateString: any) => {
    setTimeEnd(dateString);
    if (timeBegin) {
      const now = moment(timeBegin); //todays date
      const end = moment(dateString); // another date
      const duration = moment.duration(end.diff(now));
      const days = duration.asDays();
      if (days > 0) {
        const timeString = (days * currentAdvertise?.price).toFixed(2);
        const time = parseFloat(timeString);
        setTotalPrice(time);
      } else {
        setTotalPrice(0);
      }
    }
  };

  const handleChangeAreas = (value: any) => {
    setInfoAD({
      ...InfoAD,
      ServiceAreas: value,
    });
  };
  const handleChangeCategory = (value: any) => {
    let idOfservice = '';
    advertise?.serviceInfo.map((item: any) => {
      if (item.serviceName == value) {
        idOfservice = item.serviceId;
      }
    });

    setInfoAD({
      ...InfoAD,
      ProfessionalCategory: value,
      serviceId: idOfservice,
    });
  };

  const handleSubmit = () => {
    if (steps == 'ad_manage') {
      setSteps('payment_method');
      setBuyAdvertise({
        PackageName: currentAdvertise?.name ? currentAdvertise?.name : '',
        ProfessionalCategory: InfoAD?.ProfessionalCategory
          ? InfoAD?.ProfessionalCategory
          : '',
        ServiceAreas: InfoAD?.ServiceAreas ? InfoAD?.ServiceAreas : '',
        RegistrationDate: moment(timeBegin).format('DD.MM.yyyy'),
        ExpiryDate: moment(timeEnd).format('DD.MM.yyyy'),
        Price: currentAdvertise?.price ? currentAdvertise?.price : 0,
        TotalAmount: totalPrice ? totalPrice : 0,
      });
    }
    if (steps == 'payment_method') {
      setTab('buyMore');
    }
  };
  const handlePayNow = () => {
    setupBuyAdBusinesses({
      UserId: userInfo.id,
      amount: Math.trunc(totalPrice * 100),
      paymentId: idPaymentMethod,
    })
      .then((data) => {
        const clientSecret = data.clientSecret;
        stripe
          ?.confirmCardPayment(clientSecret)
          .then((data) => {
            const result = data.paymentIntent;
            if (result) {
              const data = {
                UserId: '',
                advertisePackageId: currentAdvertise.id,
                packageName: currentAdvertise.name,
                price: currentAdvertise.price,
                bannerUrl: currentAdvertise.bannerUrl || '',
                description: currentAdvertise.description,
                zipcode: InfoAD.ServiceAreas,
                categoryName: InfoAD.ProfessionalCategory,
                categoryId: InfoAD.serviceId,
                startDate: moment(timeBegin).valueOf(),
                endDate: moment(timeEnd).valueOf(),
              };
              console.log(data);
              buyPromote(data)
                .then(() => ui.alertSuccess('Payment successed!'))
                .catch((err) => ui.alertFailed(err));
            }
          })
          .catch((err: any) => ui.alertFailed(err));
        // console.(clientSecret);
      })
      .catch((err: any) => ui.alertFailed(err));
  };
  React.useEffect(() => {
    getAdvertiseDetail({ id: currentAdvertise?.id }).then((data) => {
      setAdvertise(data.result[0]);
    });
  }, [currentAdvertise]);
  return (
    <div className='detailAD'>
      <h1 className='font-medium mb-[40px] text-[24px] text-black'>
        Advertise manage
      </h1>
      <div className='content-bottom flex flex-wrap items-start justify-start'>
        {steps == 'ad_manage' && (
          <div className='bg-white border-[1.5px] mb-5 mr-5 p-[20px] rounded-md w-[400px]'>
            <p className='font-medium mb-[32px] mt-[0px] text-[20px] text-center w-[100%]'>
              {currentAdvertise?.name ? currentAdvertise.name : ''}
            </p>

            <b className='font-medium inline-block mb-[32px] text-[32px] text-center w-[100%]'>
              <span className='text-[#ff511a]'>
                ${currentAdvertise?.price ? currentAdvertise?.price : 0}
              </span>
              /day
            </b>
            <div className='text-center w-full'>
              <p className='font-medium mb-[14px] text-[18px] w-[100%]'>
                Services
              </p>
              {currentAdvertise?.serviceInfo &&
                currentAdvertise?.serviceInfo.map(
                  (service: any, index: number) => (
                    <div
                      key={index}
                      className='flex items-center justify-center mb-[10px]'
                    >
                      <AiOutlineClear className='mr-2 text-[20px]' />
                      <p className='font-normal mb-[0px] text-[16px]'>
                        {service?.serviceName ? service?.serviceName : ''}
                      </p>
                    </div>
                  )
                )}
            </div>
            <p className='font-medium mb-[12px] mt-[24px] text-[18px] text-center w-[100%]'>
              Description {currentAdvertise?.name ? currentAdvertise.name : ''}
            </p>
            <span className='font-normal inline-block mb-[20px] ml-2 text-[14px] text-center w-full'>
              {currentAdvertise?.description
                ? currentAdvertise?.description
                : ''}
            </span>
          </div>
        )}{' '}
        {steps == 'payment_method' && (
          <PaymentMethod setIdPayment={setIdPaymentMethod} />
        )}
        <Form
          className='bg-white border-[1.5px] mb-5 mr-5 p-[20px] rounded-md w-[400px]'
          onFinish={handleSubmit}
        >
          <div className=''>
            <div className='text-[18px]'>
              <p className='font-medium mb-[4px] text-[14px]'>
                Professional Category:{' '}
              </p>
              <Form.Item
                name='category'
                className='w-[100%]'
                rules={[
                  {
                    required: true,
                    message: 'Professional Category is required.',
                  },
                ]}
              >
                <Select
                  className='rounded-lg'
                  placeholder='Select'
                  suffixIcon={<CgChevronDownO className='text-gray-400' />}
                  onChange={handleChangeCategory}
                >
                  {advertise &&
                    advertise?.serviceInfo?.map((item: any, index: number) => (
                      <Select.Option key={index} value={item.serviceName}>
                        {item.serviceName}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
            <div className='text-[18px]'>
              <p className='font-medium mb-[4px] text-[14px]'>
                Service Areas:{' '}
              </p>
              <Form.Item
                name='areas'
                className='w-[100%]'
                rules={[
                  {
                    required: true,
                    message: 'Service Areas is required.',
                  },
                ]}
              >
                <Select
                  className='rounded-lg'
                  suffixIcon={<CgChevronDownO className='text-gray-400' />}
                  placeholder='Select'
                  onChange={handleChangeAreas}
                >
                  {advertise &&
                    advertise?.zipcodes?.map((item: any, index: number) => (
                      <Select.Option key={index} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
            <div className='mb-6 text-[18px]'>
              <p className='font-medium mb-[4px] text-[14px]'>
                Registration Date:{' '}
              </p>
              {/* <input
                type='date'
                className='border-gray-300 px-5 py-3 rounded-lg text-[14px] text-gray-400 w-[100%]'
                onChange={handleChangeTimeBegin}
              /> */}
              <Form.Item
                name='RegistrationDate'
                className='w-[100%]'
                rules={[
                  {
                    required: true,
                    message: 'Registration Date is required.',
                  },
                ]}
              >
                <DatePicker
                  className='border-gray-300 font-medium px-5 py-3 rounded-lg text-[16px] text-gray-400 w-[100%]'
                  disabledDate={(current) => {
                    const customDate = moment().format('YYYY-MM-DD');
                    return (
                      current && current < moment(customDate, 'YYYY-MM-DD')
                    );
                  }}
                  onChange={handleChangeTimeBegin}
                  suffixIcon={<CgCalendarDates className='text-gray-400' />}
                />
              </Form.Item>
            </div>
            <div className='mb-6 text-[18px]'>
              <p className='font-medium mb-[4px] text-[14px]'>Expiry date: </p>
              {/* <input
                type='date'
                className='border-gray-300 px-5 py-3 rounded-lg text-[14px] text-gray-400 w-[100%]'
                onChange={handleChangeTimeEnd}
              /> */}
              <Form.Item
                name='Expirydate'
                className='w-[100%]'
                rules={[
                  {
                    required: true,
                    message: 'Expiry date is required.',
                  },
                ]}
              >
                <DatePicker
                  className='border-gray-300 font-medium px-5 py-3 rounded-lg text-[16px] text-gray-400 w-[100%]'
                  onChange={handleChangeTimeEnd}
                  disabledDate={(current) => {
                    const customDate = moment(timeBegin).format('YYYY-MM-DD');
                    return current < moment(customDate, 'YYYY-MM-DD');
                  }}
                  suffixIcon={<CgCalendarDates className='text-gray-400' />}
                />
              </Form.Item>
            </div>
            <div className='border-b-[1.5px] flex justify-between text-[18px]'>
              <p className='font-medium mb-[4px] text-[14px]'>Price: </p>
              <p className='font-medium text-[16px]'>
                ${currentAdvertise?.price ? currentAdvertise?.price : 0}
              </p>
            </div>
            <div className='flex justify-between mt-4 text-[18px]'>
              <p className='font-medium mb-[4px] text-[14px]'>Total Amount: </p>
              <p className='font-bold mb-0 text-[#ff511a] text-[20px]'>
                ${totalPrice}
              </p>
            </div>
          </div>
          <div className='flex justify-between mt-5 w-full'>
            <Button
              size='small'
              variant='outline'
              className='w-[35%]'
              onClick={() => setTab('manageAD')}
            >
              Cancel
            </Button>
            {steps == 'ad_manage' && (
              <Button
                size='small'
                className='w-[60%]'
                // onClick={() => setSteps('payment_method')}
              >
                Continue checkout
              </Button>
            )}
            {steps == 'payment_method' && (
              <Button
                size='small'
                className='w-[60%]'
                onClick={() => handlePayNow()}
              >
                Pay now
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}
