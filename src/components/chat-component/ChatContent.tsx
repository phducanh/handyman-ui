/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable simple-import-sort/imports */
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Image } from 'antd';
import useInterval from '@use-it/interval';

import Button from '@/components/buttons/Button';
import { Order } from '@/pb/apiservice';
import ModalReview from '@/components/modal-review/modalReview';
import {
  GetChat,
  SendChat,
  OrderReject,
  OrderComplete,
  SendMultiRequest,
} from '@/api/user-service';
import { useSelector } from 'react-redux';
import { Input, Row, Col } from 'antd';
import { Chat } from '@/pb/chatservice';

export default function ChatContent(props: any) {
  const {
    isChattingWith,
    isType,
    role,
    getChatData,
  }: {
    isChattingWith: Order;
    isType: any;
    role: any;
    getChatData: any;
  } = props;
  const [showReview, setShowReview] = React.useState(false);
  const [isReviewed, setIsReviewed] = useState(false);
  console.log(isReviewed);
  useEffect(() => {
    setIsReviewed(false);
  }, [isChattingWith]);

  console.log(isChattingWith);

  const [text, setText] = useState('');
  const userInfo = useSelector((state: any) => state.auth);
  const chatRef = useRef<any>(null);

  const [messages, setMessages] = useState<Chat[]>();

  const getNewChat = () => {
    if (isChattingWith?.id) {
      GetChat({
        id: isChattingWith.conversationId,
        timestamp: new Date().getTime(),
        min: 1000,
        UserId: userInfo.id,
      }).then((res) => {
        setMessages(res?.chats);
      });
    } else setMessages([]);
  };

  useLayoutEffect(() => {
    if (chatRef?.current) {
      window.scrollTo({
        behavior: 'smooth',
        top: chatRef?.current.offsetTop,
      });
    }
  }, [messages]);
  useLayoutEffect(() => {
    getNewChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChattingWith, isType]);

  const handleTypeText = (e: any) => {
    setText(e.target.value);
  };
  const handleSend = () => {
    const messData = {
      UserId: '',
      payload: text,
      id: isChattingWith?.conversationId,
    };
    if (isChattingWith?.id) {
      SendChat(messData).then((res) => {
        setText('');

        // tempMsg.push();
        // setMessages(messages);
        setTimeout(() => {
          getNewChat();
        }, 500);
      });
    }
  };

  // useInterval(() => {
  //   if (isType === 'connected') {
  //     getNewChat();
  //   }
  // }, 1000);
  const showModalReview = () => {
    setShowReview(true);
  };
  const resendRequest = () => {
    SendMultiRequest({
      businessIds: [isChattingWith?.businessId],
      zipcode: isChattingWith?.customerZipcode as string,
      UserId: isChattingWith?.customerId,
      categoryId: isChattingWith?.serviceId as string,
    }).then((res) => {
      console.log('res', res);
    });
  };

  const renderMessages = () => {
    return (
      <div
        className='font-medium listMessage max-h-full overflow-y-scroll pb-100 pt-10 scrollbar-hide text-base'
        id='msg-container'
        ref={chatRef}
      >
        {messages?.map((mess: any, index: number) => {
          if (mess?.sender === userInfo?.id) {
            return (
              <div
                key={mess?.timestamp}
                className='flex itemMessage justify-end mb-6'
              >
                {index === messages.length - 1 ? (
                  <p
                    className='bg-[#FF511A] inline-block mb-0 px-5 py-4 rounded-lg text-white'
                    id='last-message'
                  >
                    {mess?.payload}
                  </p>
                ) : (
                  <p className='bg-[#FF511A] inline-block mb-0 px-5 py-4 rounded-lg text-white'>
                    {mess?.payload}
                  </p>
                )}
              </div>
            );
          } else
            return (
              <div key={mess?.timestamp} className='itemMessage mb-6'>
                {index === messages.length - 1 ? (
                  <p
                    className='bg-[#F8F9FA] inline-block mb-0 px-5 py-4 rounded-lg'
                    id='last-message'
                  >
                    {mess?.payload}
                  </p>
                ) : (
                  <p className='bg-[#F8F9FA] inline-block mb-0 px-5 py-4 rounded-lg'>
                    {mess?.payload}
                  </p>
                )}
              </div>
            );
        })}
      </div>
    );
  };

  const [chatContent, setChatContent] = useState(renderMessages());

  useEffect(() => {
    setChatContent(renderMessages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const handleReject = () => {
    const data = {
      UserId: '',
      orderId: isChattingWith?.id,
      Role: 1,
    };
    OrderReject(data).then((res) => {
      setTimeout(() => getChatData(), 200);
    });
  };

  const handleComplete = () => {
    const data = {
      UserId: '',
      orderId: isChattingWith?.id,
      Role: 1,
    };
    OrderComplete(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className='border-l-[#E6E6E6] border-l-[1px] bottom-message h-full relative w-full'>
        <div className='absolute bg-white flex items-center justify-between message-header px-10 py-3 shadow-headerChat w-full z-[1]'>
          {isChattingWith?.id && (
            <div className='flex flex-col header-info'>
              <Row className='flex info items-center'>
                <Col className='flex img mr-4 self-start'>
                  <Image
                    className='rounded-xl'
                    width={56}
                    height={56}
                    src={
                      role === 1
                        ? isChattingWith?.image ||
                          '/images/detail-brand/logo.jpg'
                        : isChattingWith?.businessLogo
                    }
                    alt='avatar'
                  />
                </Col>
                <Col className='text'>
                  <p className='font-bold mb-0 text-[20px]'>
                    {role === 1
                      ? isChattingWith?.customerName
                      : isChattingWith?.businessName}
                  </p>
                  {role === 1 ? (
                    <div className='font-medium header-service text-[#999999] text-sm'>
                      <p className='mb-0'>
                        Start time:{' '}
                        {new Date(isChattingWith?.startDate).toDateString()}{' '}
                      </p>
                      <p className='mb-0'>
                        Service orders: {isChattingWith?.serviceName}{' '}
                      </p>
                      <p className='mb-0'>
                        Zip: {isChattingWith?.customerZipcode}{' '}
                      </p>
                      <p className='mb-0'>
                        Email: {isChattingWith?.customerPhone}{' '}
                      </p>
                      <p className='mb-0'>
                        Phone number: {isChattingWith?.customerPhone}{' '}
                      </p>
                    </div>
                  ) : (
                    <div className='font-medium header-service text-[#999999] text-sm'>
                      <p className='mb-0'>
                        Service request: {isChattingWith?.serviceName}{' '}
                      </p>
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          )}
          {role === 1 && isChattingWith?.id && isType === 'connected' && (
            <div className='header-button ml-auto mr-2'>
              <Button
                className='bg-primary-outline h-[48px] px-8 py-4 text-base'
                variant='outline'
                onClick={handleReject}
                size='small'
              >
                Reject
              </Button>
            </div>
          )}
          {isType == 'connected' && isChattingWith?.id && (
            <div className='header-button'>
              <Button
                className='bg-primary-outline px-8 py-4 text-base'
                variant='outline'
                onClick={handleComplete}
                size='small'
              >
                Complete
              </Button>
            </div>
          )}
          {role !== 1 && isChattingWith?.id && isType === 'completed' && (
            <div className='flex header-button'>
              {!isChattingWith?.isReviewed && !isReviewed ? (
                <Button
                  className='bg-primary-outline border-[#E6E6E6] border-[1.5px] cursor-pointer mb-0 mr-5 px-8 py-4 rounded-md text-base'
                  variant='outline'
                  size='small'
                  onClick={showModalReview}
                >
                  Write Review
                </Button>
              ) : (
                ''
              )}
              <Button
                onClick={resendRequest}
                className='bg-primary-outline border-[#E6E6E6] border-[1.5px] cursor-pointer h-[48px] mb-0 px-8 py-4 rounded-md text-base'
                variant='outline'
                size='small'
              >
                Resend request
              </Button>
            </div>
          )}
        </div>
        {isType == 'connected' && isChattingWith?.id && (
          <div className='absolute bg-white bottom-0 h-24 input pl-10 pr-5 w-full'>
            <div className='border-[#E6E6E6] border-[1.5px] flex input-content px-5 py-4 rounded-md w-full'>
              <Input
                placeholder='Write a message'
                className='border-0 mb-5 mr-3 outline-hidden outline-none text-[16px] w-full z-[3]'
                value={text}
                onChange={handleTypeText}
                onPressEnter={handleSend}
              />
              <div className=''>
                {/* <FaTelegramPlane
                    onClick={handleSend}
                    className='cursor-pointer text-3xl'
                  /> */}
                <Image
                  onClick={handleSend}
                  preview={false}
                  src='/images/icons/send-msg.svg'
                  className='cursor-pointer'
                  alt='avatar'
                />
              </div>
            </div>
          </div>
        )}

        <div className='h-full message pb-24 pl-10 pr-5 pt-48 relative'>
          {chatContent}
        </div>
      </div>
      {showReview && (
        <ModalReview
          visible={showReview}
          setIsShowReview={setShowReview}
          setIsReviewed={setIsReviewed}
          order={isChattingWith ? isChattingWith : ''}
        />
      )}
    </>
  );
}
