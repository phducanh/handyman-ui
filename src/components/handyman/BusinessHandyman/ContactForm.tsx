import { Form, Input, Select } from 'antd';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';

import {
  getCurrentBusiness,
  GetCurrentInfoContact,
  GetListStates,
  Ping,
  PutNewInfoBusiness,
  PutNewInfoContact,
} from '@/api/user-service';
import { Business, Contact, State } from '@/pb/apiservice';
import { ROLE } from '@/pb/const';
import ui from '@/utils/ui';
const { Option } = Select;
export default function ContactFormHandyman() {
  const [form] = Form.useForm();
  const router = useRouter();
  const userInfo = useSelector((state: any) => state.auth);
  const [states, setStates] = React.useState<{ id: string; name: string }[]>([
    { id: 'demo', name: 'demo' },
  ]);
  const [isEdit, setIsEdit] = React.useState(false);
  const [process, setProcess] = React.useState();
  const [isFirstSignup, setIsFirstSignup] = React.useState();
  let initInfo = {
    phone: '',
    state: '',
    city: '',
    address1: '',
    address2: '',
    country: '',
    zipcode: '',
    zipcodes: [] as any,
    website: '',
  };
  const [initData, setInitData] = React.useState({
    phone: '',
    state: '',
    city: '',
    address1: '',
    address2: '',
    country: '',
    zipcode: '',
    zipcodes: [],
    website: '',
  });

  const getListStates = async () => {
    GetListStates()
      .then((data) => {
        const states = data.states.map((e) => State.fromJSON(e));
        setStates(states);
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
  };

  const getCrrInfoContact = async () => {
    GetCurrentInfoContact({ id: userInfo?.id, UserId: '' })
      .then((data) => {
        const contact = Contact.fromJSON(data.contact);
        console.log(data);

        const { zipcode, address1, address2, state, city } = contact;
        initInfo = {
          ...initInfo,
          address1,
          address2,
          state,
          city,
          zipcode,
        };
        setInitData(initInfo);
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
  };

  const getCrrBusiness = async () => {
    getCurrentBusiness({ id: userInfo?.id, UserId: '' })
      .then((data) => {
        const business = Business.fromJSON(data.business);
        const { phone, website, zipcodes } = business;
        initInfo = {
          ...initInfo,
          phone,
          website,
          zipcodes: zipcodes,
        };
        setInitData(initInfo);
      })
      .catch((error: any) => ui.alertFailed(error?.message?.toString()));
    return;
  };

  const ping = async (isRedirect: boolean): Promise<any> => {
    return Ping({ UserId: '', Role: ROLE.UNRECOGNIZED })
      .then((data) => {
        if (data.process < 3) {
          setProcess(data.process);
          // setIsEdit(true);
          if (isRedirect) {
            router.push('/?page=manage_my_business&tab=service_info');
          }
        } else {
          if (isFirstSignup) {
            // ui.alertSuccess('Your business information is all set!');
            router.push('/?page=services_areas');
          }
        }
        return data.process;
      })
      .catch((err: any) => {
        ui.alertFailed(err);
      });
  };

  const handleSubmit = async (e: any) => {
    if (!isEdit) return;
    const { zipcode, address1, address2, city, phone, website } = e;
    const stateName = form.getFieldValue('state');
    const statesFilter = states.filter((state: any) => state.name == stateName);
    if (!statesFilter || !statesFilter.length) return;
    const stateId = statesFilter[0].id;
    PutNewInfoContact({
      id: userInfo?.id,
      UserId: '',
      zipcode,
      address1,
      address2,
      stateId,
      city,
    })
      .then(() => {
        if (!isFirstSignup) {
          ui.alertSuccess('Update contact success!');
        }
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
    PutNewInfoBusiness({
      zipcodes: initData?.zipcodes,
      id: userInfo?.id,
      UserId: '',
      bannerUrl: '',
      description: '',
      logoUrl: '',
      name: '',
      phone: phone as string,
      website: website as string,
    })
      .then(() => {
        // ui.alertSuccess('Update business success!');
        ping(true);
      })
      .catch((error: any) => ui.alertFailed(error.toString()));
    setIsEdit(false);
  };

  const getData = async () => {
    await getListStates();
    await getCrrInfoContact();
    await getCrrBusiness();
    const pingRes = await ping(false);
    if (pingRes) setIsFirstSignup(pingRes && pingRes < 3);
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    form.setFieldsValue(initData);
  }, [form, initData]);
  return (
    <div className='max-w-5xl'>
      <Form form={form} autoComplete='off' onFinish={handleSubmit}>
        <div className='font-medium leading-4 mb-[8px] mt-8 text-[20px]'>
          Phone number*
        </div>
        <Form.Item
          style={{ marginBottom: '14px' }}
          rules={
            isEdit
              ? [
                  {
                    required: true,
                  },
                ]
              : []
          }
          name='phone'
        >
          <Input
            className='font-medium leading-4 px-5 py-4 rounded-lg text-sm'
            placeholder='For potential clients to reach you'
            disabled={!isEdit}
          />
        </Form.Item>
        <div className='font-medium leading-4 mb-[8px] mt-6 text-[20px]'>
          State*
        </div>
        <Form.Item
          style={{ marginBottom: '14px' }}
          name='state'
          rules={
            isEdit
              ? [
                  {
                    required: true,
                  },
                ]
              : []
          }
        >
          <Select
            defaultValue='lucy'
            className='contactForm-Select font-medium leading-4 rounded-lg text-sm'
            disabled={!isEdit}
          >
            {states &&
              states.map((state: any) => (
                <Option key={state.id} value={state.name}>
                  {state.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <div className='font-medium leading-4 mb-[8px] mt-6 text-[20px]'>
          City*
        </div>
        <Form.Item
          style={{ marginBottom: '14px' }}
          name='city'
          rules={
            isEdit
              ? [
                  {
                    required: true,
                  },
                ]
              : []
          }
        >
          <Input
            className='font-medium leading-4 px-5 py-4 rounded-lg text-sm'
            disabled={!isEdit}
          />
        </Form.Item>
        <div className='font-medium leading-4 mb-[8px] mt-6 text-[20px]'>
          Country
        </div>
        <Form.Item style={{ marginBottom: '14px' }} name='country'>
          <Input
            className='font-medium leading-4 px-5 py-4 rounded-lg text-sm'
            disabled={!isEdit}
          />
        </Form.Item>
        <div className='font-medium leading-4 mb-[8px] mt-6 text-[20px]'>
          Address 1*
        </div>
        <Form.Item
          style={{ marginBottom: '14px' }}
          name='address1'
          rules={
            isEdit
              ? [
                  {
                    required: true,
                  },
                ]
              : []
          }
        >
          <Input
            className='font-medium leading-4 px-5 py-4 rounded-lg text-sm'
            placeholder='Please enter your business’s address'
            disabled={!isEdit}
          />
        </Form.Item>
        <div className='font-medium leading-4 mb-[8px] mt-6 text-[20px]'>
          Address 2
        </div>
        <Form.Item style={{ marginBottom: '14px' }} name='address2'>
          <Input
            className='font-medium leading-4 px-5 py-4 rounded-lg text-sm'
            placeholder='Apt'
            disabled={!isEdit}
          />
        </Form.Item>
        <div className='font-medium leading-4 mb-[8px] mt-6 text-[20px]'>
          Zipcode of your office*
        </div>
        <Form.Item
          style={{ marginBottom: '14px' }}
          name='zipcode'
          rules={
            isEdit
              ? [
                  {
                    required: true,
                  },
                ]
              : []
          }
        >
          <Input
            className='font-medium leading-4 px-5 py-4 rounded-lg text-sm'
            disabled={!isEdit}
          />
        </Form.Item>
        <div className='font-medium leading-4 mb-[8px] mt-6 text-[20px]'>
          Website
        </div>
        <Form.Item style={{ marginBottom: '14px' }} name='website'>
          <Input
            className='font-medium leading-4 px-5 py-4 rounded-lg text-sm'
            disabled={!isEdit}
          />
        </Form.Item>
        {isEdit && (
          <Form.Item>
            <div className='float-right left w-[150px]'>
              <Button
                className='!w-full bg-primary font-bold mt-6 px-8 py-4 rounded-[8px] text-base'
                type='submit'
              >
                {process && process < 3 ? 'Next' : 'Update'}
              </Button>
            </div>
          </Form.Item>
        )}
      </Form>
      {!isEdit && (
        <div className='float-right left w-[150px]'>
          <Button
            className='!w-full bg-primary font-bold mt-6 px-8 py-4 rounded-[8px] text-base'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}
