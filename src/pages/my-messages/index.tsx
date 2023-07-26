import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { useSelector } from 'react-redux';

import ChatContent from '@/components/chat-component/ChatContent';
import { ChatList } from '@/components/chat-component/ChatList';
import BaseContent from '@/components/layout/BaseContent';
import Layout from '@/components/layout/BaseLayout';
import BaseLayout from '@/components/layout/BaseLayout';
import Seo from '@/components/Seo';

import { GetAllOrders } from '@/api/user-service';
import { Order } from '@/pb/apiservice';
import { ROLE } from '@/pb/const';
import { orderStatus } from '@/pb/const';
import ui from '@/utils/ui';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default function IndexPage() {
  const [isType, setIsType] = React.useState('connected');
  const userInfo = useSelector((state: any) => state.auth);
  const [chatList, setChatList] = React.useState<Order[]>();
  const [isChattingWith, setIsChattingWith] = React.useState<Order>();
  const router = useRouter();

  React.useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, [router, userInfo]);

  const getChatData = () => {
    if (userInfo?.role === 1) {
      GetAllOrders({
        offset: '0',
        limit: '99',
        status:
          isType === 'connected'
            ? orderStatus.CONNECTED
            : orderStatus.COMPLETED,
        UserId: '',
        zipcode: '',
        serviceId: '',
      })
        .then((res) => {
          const allChat = res?.result;

          if (allChat?.length > 0) {
            setChatList(allChat);
            setIsChattingWith(allChat[0]);
          } else {
            setChatList([]);
            setIsChattingWith({
              id: '',
              customerId: '',
              businessId: '',
              conversationId: '',
              serviceId: '',
              startDate: 0,
              endDate: 0,
              status: orderStatus.UNRECOGNIZED,
              customerPhone: '',
              customerZipcode: '',
              customerName: '',
              customerMessage: '',
              serviceName: '',
              image: '',
              fee: 0,
              businessLogo: '',
              businessBanner: '',
              businessName: '',
              isReviewed: false,
            });
          }
        })
        .catch((err) => ui.alertFailed(err));
    } else {
      GetAllOrders({
        offset: '0',
        limit: '99',
        status:
          isType === 'connected'
            ? orderStatus.CONNECTED
            : orderStatus.COMPLETED,
        UserId: '',
        zipcode: '',
        serviceId: '',
      })
        .then((res) => {
          const allChat = res?.result;

          if (allChat?.length > 0) {
            setChatList(allChat);
            setIsChattingWith(allChat[0]);
          } else {
            setChatList([]);
            setIsChattingWith({
              id: '',
              customerId: '',
              businessId: '',
              conversationId: '',
              serviceId: '',
              startDate: 0,
              endDate: 0,
              status: orderStatus.UNRECOGNIZED,
              customerPhone: '',
              customerZipcode: '',
              customerName: '',
              customerMessage: '',
              serviceName: '',
              image: '',
              fee: 0,
              businessLogo: '',
              businessBanner: '',
              businessName: '',
              isReviewed: false,
            });
          }
        })
        .catch((err) => ui.alertFailed(err));
    }
  };
  React.useEffect(() => {
    setIsChattingWith({
      id: '',
      customerId: '',
      businessId: '',
      conversationId: '',
      serviceId: '',
      startDate: 0,
      endDate: 0,
      status: orderStatus.UNRECOGNIZED,
      customerPhone: '',
      customerZipcode: '',
      customerName: '',
      customerMessage: '',
      serviceName: '',
      image: '',
      fee: 0,
      businessLogo: '',
      businessBanner: '',
      businessName: '',
      isReviewed: false,
    });
    if (userInfo) {
      getChatData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isType]);

  return (
    <>
      {userInfo?.role === 1 ? (
        <BaseLayout
          withSidebar
          withLogo={false}
          hiddenHeader={false}
          hiddenFooter={false}
        >
          <BaseContent userRole={ROLE.HANDYMAN}>
            <Seo templateTitle='messages' />
            {/* <div className='bg-white h-screen'></div> */}
            <main className='absolute bg-white h-full w-10/12'>
              <section className='h-full'>
                <div className='max-h-full w-full'>
                  <div className='h-full max-h-full pt-4 w-auto'>
                    <div className='font-bold mb-0 pb-9 text-2xl'>
                      My messages
                    </div>
                    <div className='containerMessage h-[400px] md:h-[700px] lg:h-[800px] 2xl:h-[900px]'>
                      <div className='top'>
                        <div className='border-b-[#E6E6E6] border-b-[1px] flex pb-3 w-full'>
                          <p
                            className={`text-lg font-medium cursor-pointer mb-0 py-2 px-8 rounded-lg ${
                              isType == 'connected'
                                ? ' bg-[#FFE1D8]/50 text-[#B72C00]'
                                : ''
                            }`}
                            onClick={() => setIsType('connected')}
                          >
                            Connected
                          </p>
                          <p
                            className={`text-lg font-medium cursor-pointer mb-0 py-2 px-8 rounded-lg ${
                              isType == 'completed'
                                ? 'bg-[#FFE1D8]/50 text-[#B72C00]'
                                : ''
                            }`}
                            onClick={() => setIsType('completed')}
                          >
                            Completed
                          </p>
                        </div>
                      </div>
                      <div className='bottom flex h-full'>
                        <ChatList
                          isChattingWith={isChattingWith}
                          data={chatList}
                          setIsChattingWith={setIsChattingWith}
                          role={userInfo?.role}
                        />
                        {isChattingWith && userInfo && (
                          <ChatContent
                            isChattingWith={isChattingWith}
                            isType={isType}
                            role={userInfo?.role}
                            getChatData={getChatData}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </BaseContent>
        </BaseLayout>
      ) : (
        <Layout>
          <Seo templateTitle='messages' />
          <div className='bg-white min-h-[800px]'></div>
          <main className='absolute bg-white h-full pt-[80px] w-full'>
            <section className='h-full'>
              <div className='h-full pt-2 w-full'>
                <div className='h-full pl-20 pt-2 w-auto'>
                  <div className='font-bold mb-0 pb-5 text-2xl'>
                    My messages
                  </div>
                  <div className='containerMessage h-full'>
                    <div className='top'>
                      <div className='border-b-[#E6E6E6] border-b-[1px] flex pb-3 w-full'>
                        <p
                          className={`text-lg font-medium cursor-pointer mb-0 py-2 px-8 rounded-lg ${
                            isType == 'connected'
                              ? ' bg-[#FFE1D8]/50 text-[#B72C00]'
                              : ''
                          }`}
                          onClick={() => setIsType('connected')}
                        >
                          Connected
                        </p>
                        <p
                          className={`text-lg font-medium cursor-pointer mb-0 py-2 px-8 rounded-lg ${
                            isType == 'completed'
                              ? 'bg-[#FFE1D8]/50 text-[#B72C00]'
                              : ''
                          }`}
                          onClick={() => setIsType('completed')}
                        >
                          Completed
                        </p>
                      </div>
                    </div>
                    <div className='bottom flex h-full'>
                      <ChatList
                        isChattingWith={isChattingWith}
                        data={chatList}
                        setIsChattingWith={setIsChattingWith}
                        role={userInfo?.role}
                      />
                      {isChattingWith && userInfo && (
                        <ChatContent
                          isChattingWith={isChattingWith}
                          isType={isType}
                          role={userInfo?.role}
                          zipcode={userInfo}
                          getChatData={getChatData}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Layout>
      )}
    </>
  );
}
