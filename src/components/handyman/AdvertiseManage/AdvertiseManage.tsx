import * as React from 'react';
import { AiOutlineClear } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import { PageNavigation } from '@/components/Pagination';

import { getAdvertise } from '@/api/user-service';
import ui from '@/utils/ui';

export default function AdvertiseManagePage(props: any) {
  const { setTab, setCurrentAdvertise } = props;
  const [listAdvertise, setListAdvertise] = React.useState<Array<any>>([]);

  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(4);

  React.useEffect(() => {
    getAdvertise({
      offset: (page > 0 ? (page - 1) * limit : page * limit).toString(),
      limit: limit.toString(),
    })
      .then((data) => {
        const { result, pagination } = data;
        const { limit, total } = pagination;
        setTotal(total);
        setLimit(limit);
        if (limit > 0) setLimit(limit);
        setListAdvertise(result);
      })
      .catch(() => {
        ui.alertFailed('Đã có lỗi xảy ra');
      });
  }, [page, limit]);

  const handleClickSelectAD = (item: any) => {
    setCurrentAdvertise(item);
    setTab('detailAD');
  };

  return (
    <div>
      <h1 className='font-medium mb-[40px] text-[24px] text-black'>
        Advertise manage
      </h1>
      <div className='listAD'>
        {listAdvertise.length > 0 &&
          listAdvertise.map((item: any, index) => (
            <div
              key={index}
              className='bg-white border-[1.5px] inline-block itemAD mb-5 mr-5 p-[20px] rounded-md w-[400px]'
            >
              <p className='font-medium mb-[32px] mt-[0px] text-[20px] text-center w-[100%]'>
                {item?.name ? item.name : ''}
              </p>

              <b className='font-medium inline-block mb-[32px] text-[32px] text-center w-[100%]'>
                <span className='text-[#ff511a]'>
                  ${item?.price ? item?.price : 0}
                </span>
                /day
              </b>
              <div className='text-center w-full'>
                <p className='font-medium mb-[14px] text-[18px] w-[100%]'>
                  Services
                </p>
                {item?.serviceInfo &&
                  item?.serviceInfo.map((service: any, index: number) => (
                    <div
                      key={index}
                      className='flex items-center justify-center mb-[10px]'
                    >
                      <AiOutlineClear className='mr-2 text-[20px]' />
                      <p className='font-normal mb-[0px] text-[16px]'>
                        {service?.serviceName ? service?.serviceName : ''}
                      </p>
                    </div>
                  ))}
              </div>

              <div className='button flex justify-center mt-[70px] w-full'>
                <Button
                  size='small'
                  variant='outline'
                  className='duration-300 ease-in-out transition w-[98%] hover:bg-[#ff511a] hover:text-[white]'
                  onClick={() => handleClickSelectAD(item)}
                >
                  Choose
                </Button>
              </div>
            </div>
          ))}
      </div>

      <div className='flex justify-center mt-5 w-full'>
        <PageNavigation
          totalItem={total ? total : 1}
          itemsPerPage={limit ? limit : 1}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
