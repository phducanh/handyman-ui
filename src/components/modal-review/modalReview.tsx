import { StarOutlined } from '@ant-design/icons';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Image from 'next/image';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { postFeedback } from '@/api/user-service';
import { FeedbacksPostRequest } from '@/pb/apiservice';
import ui from '@/utils/ui';

import Button from '../buttons/Button';

export default function ModalReview(props: any) {
  const { setIsShowReview, order, visible, setIsReviewed } = props;
  const userInfo = useSelector((state: any) => state.auth);
  const [isError, setIsError] = React.useState('');

  const [dataFeedback, setDataFeedback] = React.useState<FeedbacksPostRequest>({
    UserId: userInfo.id,
    orderId: order?.id,
    rate: 0,
    comment: '',
    serviceId: order?.serviceId ? order?.serviceId : '',
    businessId: order?.businessId ? order?.businessId : '',
  });
  const desc = ['Terrible!', 'Bad!', 'Normal!', 'Good!', 'Wonderful!'];
  const handleChange = (value: number) => {
    setIsError('');
    setDataFeedback({
      ...dataFeedback,
      rate: value,
    });
  };

  const handleSubmit = () => {
    console.log(dataFeedback);
    if (dataFeedback.rate > 0) {
      if (dataFeedback.comment.length < 30) {
        // console.log(dataFeedback);
        setIsError('Enter at least 30 characters');
        return;
      }
      setIsError('');
      setIsShowReview(false);
      postFeedback(dataFeedback)
        .then((res) => {
          console.log(res);
          ui.alertSuccess('The request has been completed!');
          setIsReviewed(true);
        })
        .catch(() => {
          ui.alertFailed('You have written review this order!');
        });
    } else {
      setIsError('You have not rated.');
    }
  };

  return (
    <Modal
      visible={visible}
      footer={null}
      className='bg-white pb-0 review-modal rounded-xl w-[600px]'
      onOk={() => setIsShowReview(false)}
      onCancel={() => setIsShowReview(false)}
      closeIcon={<></>}
    >
      <div className='flex items-center justify-center py-6 w-[100%]'>
        <p className='font-bold m-0 text-2xl text-center lg:text-3xl'>
          Service Rating
        </p>
        {/* <ImCancelCircle
            className='cursor-pointer h-9 w-9'
            onClick={() => setIsShowReview(false)}
          /> */}
      </div>
      <div className='flex justify-center'>
        <Image
          src={
            order?.businessBanner
              ? order?.businessBanner
              : '/images/detail-brand/logo.jpg'
          }
          alt=''
          width={30}
          height={30}
          className='rounded-lg'
          layout='fixed'
        />
      </div>
      <div className='font-bold mt-1 text-center text-md'>
        {order?.serviceName && order?.serviceName}
      </div>
      <p className='font-medium mb-5 mt-1 text-[#999999] text-center text-sm'>
        Service request: {order?.serviceName && order?.serviceName}
      </p>
      <div className='flex flex-col justify-center mb-5 star-container'>
        {/* <span className='font-bold text-2xl'> {order?.businessName}</span> */}

        <Rate
          character={<StarOutlined />}
          className='flex justify-center'
          onChange={handleChange}
          value={dataFeedback?.rate}
          style={{ marginLeft: 20 }}
        />
        {dataFeedback?.rate ? (
          <span className='ant-rate-text font-semibold text-center'>
            {desc[dataFeedback?.rate - 1]}
          </span>
        ) : (
          ''
        )}
      </div>
      <TextArea
        rows={9}
        className='font-medium placeholder:font-medium pt-3 rounded text-sm'
        maxLength={3000}
        placeholder='Your review help others decide on the right pro for them. Please share your experiences with this professional'
        onChange={(e) =>
          setDataFeedback({ ...dataFeedback, comment: e.target.value })
        }
      />
      {isError?.length > 0 && (
        <div className='absolute flex items-center mt-2 text-sm'>
          <InfoCircleOutlined className='text-red-500' />
          <span className='ml-1 text-red-500'>{isError}</span>
        </div>
      )}
      <Button className='h-12 ml-auto mt-4 w-36' onClick={handleSubmit}>
        Submit
      </Button>
    </Modal>
  );
}
