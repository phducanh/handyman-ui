import { Divider, Row, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PageNavigation } from '@/components/Pagination';

import {
  GetFeedbacksOfHandyman,
  GetRatingOfHandyman,
} from '@/api/user-service';
import { Feedback, Pagination, Rating } from '@/pb/apiservice';
import ui from '@/utils/ui';

// import { BusinessFeedbacksGetRequest, BusinessRatingGetRequest, Pagination } from '@/pb/apiservice';
import RatingHandyman from './Rating';
import Review from './Review';

export default function RatingCentre() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [limit, setLimit] = useState<number>(5);
  const userInfo = useSelector((state: any) => state.auth);
  const [feedBacks, setFeedbacks] = useState<Feedback[]>([]);
  const [rate, setRate] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const [rates, setRates] = useState([
    {
      rate: 0,
      review: 0,
    },
  ]);

  useEffect(() => {
    if (userInfo) {
      GetFeedbacksOfHandyman({
        id: userInfo?.id as string,
        offset: (page > 0 ? (page - 1) * limit : page * limit).toString(),
        limit: limit.toString(),
        rate: '',
      })
        .then((res) => {
          const pagination = Pagination.fromJSON(res.pagination);
          const result = res.result.map((e) => Feedback.fromJSON(e));

          const { limit, total } = pagination;
          setTotal(total);
          if (limit > 0) setLimit(limit);
          setFeedbacks(result);
        })
        .catch((error: any) => ui.alertFailed(error + 'Đã có lỗi xảy ra'));
    }
  }, [page, limit, userInfo]);

  useEffect(() => {
    if (userInfo) {
      GetRatingOfHandyman({ id: userInfo?.id as string })
        .then((res) => {
          const rate = res.rate.map((e) => Rating.fromJSON(e));
          setRates(rate);
          let totalRate = 0;
          let totalReview = 0;
          rate &&
            rate.map((item) => {
              totalRate += item?.rate * item?.review;
              if (item.rate > 0) totalReview += item?.review;
            });
          const rate1 = totalRate / totalReview;
          setRate(rate1);
          setTotalRate(totalReview);
        })
        .catch((error: any) => ui.alertFailed(error + 'Đã có lỗi xảy ra'));
    }
  }, [userInfo]);

  return (
    <div className='min-h-[50vh]'>
      <div className='flex justify-between mb-6'>
        <h1>Rating Center</h1>
      </div>
      <Space direction='vertical' className='w-full' size='middle'>
        <RatingHandyman rate={rate} totalRate={totalRate} rates={rates} />
        <Divider />
        <Row>
          <h3 className='font-medium text-xl'>Comments</h3>
        </Row>
        <div className='w-full md:w-[80%] xl:w-[60%]'>
          <Row>
            <div className='w-full'>
              {feedBacks.length > 0 &&
                feedBacks?.map((item, index) => (
                  <Review key={index} item={item} />
                ))}
              {feedBacks.length <= 0 && (
                <p className='font-semibold mt-10 text-2xl text-center w-full'>
                  There are no reviews yet.
                </p>
              )}
            </div>
          </Row>
          <Row className='items-center justify-center'>
            {feedBacks.length > 0 && (
              <PageNavigation
                totalItem={total ? total : 1}
                itemsPerPage={limit ? limit : 1}
                page={page}
                setPage={setPage}
              />
            )}
          </Row>
        </div>
      </Space>
    </div>
  );
}
