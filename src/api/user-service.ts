import axios from 'axios';

import { API_BASE_URL } from '@/config/constant';
import {
  AuthCredentialRequest,
  AuthCredentialResponse_Data,
  AuthForgotPostRequest,
  AuthForgotPostResponse_Data,
  AuthForgotResetPostRequest,
  AuthForgotResetPostResponse_Data,
  AuthOTPPostRequest,
  AuthOTPPostResponse_Data,
  AuthPasswordPostRequest,
  AuthPasswordPostResponse_Data,
  AuthPingRequest,
  BusinessesGetRequest,
  BusinessesGetResponse_Data,
  BusinessFeedbacksGetRequest,
  BusinessFeedbacksGetResponse_Data,
  BusinessGetRequest,
  BusinessGetResponse_Data,
  BusinessPaymentMethodGetResponse_Data,
  BusinessPaymentMethodPostRequest,
  BusinessPaymentMethodPostResponse_Data,
  BusinessPaymentMethodSetupPostRequest,
  BusinessPaymentMethodSetupPostResponse_Data,
  BusinessPostRequest,
  BusinessPostResponse_Data,
  BusinessPutRequest,
  BusinessPutResponse_Data,
  BusinessRatingGetRequest,
  BusinessRatingGetResponse_Data,
  BusinessServiceGetRequest,
  BusinessServiceGetResponse_Data,
  BusinessServicesPutRequest,
  CancelProjectPostRequest,
  CancelProjectPostResponse_Data,
  // CategoriesGetRequest,
  CategoriesGetResponse_Data,
  CategoryGetRequest,
  CategoryGetResponse_Data,
  ContactGetRequest,
  ContactGetResponse_Data,
  ContactPutRequest,
  ContactPutResponse_Data,
  FeedbacksPostRequest,
  FeedbacksPostResponse_Data,
  OrdersGetRequest,
  OrdersGetResponse_Data,
  OrdersPostRequest,
  OrdersPostResponse_Data,
  StatesGetResponse_Data,
  UpdateOrderStatusPostRequest,
  UpdateOrderStatusPostResponse_Data,
  UploadUrlPostRequest,
  UserGetRequest,
  UserGetResponse_Data,
  UserPostRequest,
  UserPostResponse_Data,
  UserProjectsGetRequest,
  UserProjectsGetResponse_Data,
  UserPutRequest,
  UserPutResponse_Data,
} from '@/pb/apiservice';
import {
  FetchOnePostRequest,
  FetchOnePostResponse_Data,
  FetchPostRequest,
  FetchPostResponse_Data,
  SendPostRequest,
  SendPostResponse_Data,
} from '@/pb/chatservice';

export function GetCredential(data: AuthCredentialRequest) {
  return axios
    .post(API_BASE_URL + '/auth/credential', data)
    .then((res: any) => {
      return AuthCredentialResponse_Data.fromJSON(res.data);
    });
}

export const Ping = (data: AuthPingRequest) => {
  return axios
    .post(API_BASE_URL + '/auth/ping', data)
    .then((res: any) => res.data);
};

export const Signup = (data: UserPostRequest) => {
  return axios
    .post(API_BASE_URL + '/users', data)
    .then((res) => UserPostResponse_Data.fromJSON(res.data));
};

export const SignupPro = (data: BusinessPostRequest) => {
  return axios
    .post(API_BASE_URL + '/businesses', data)
    .then((res) => BusinessPostResponse_Data.fromJSON(res.data));
};

export const ChangePassword = (data: AuthPasswordPostRequest) => {
  return axios
    .post(API_BASE_URL + '/auth/password', data)
    .then((res) => AuthPasswordPostResponse_Data.fromJSON(res.data));
};

export const ResetPassword = (data: AuthForgotResetPostRequest) => {
  return axios
    .post(API_BASE_URL + '/auth/forgot/reset', data)
    .then((res) => AuthForgotResetPostResponse_Data.fromJSON(res.data));
};

export const VerifyOtp = (data: AuthOTPPostRequest) => {
  return axios
    .post(API_BASE_URL + '/auth/otp', data)
    .then((res) => AuthOTPPostResponse_Data.fromJSON(res.data));
};

export const RequestForgotPassword = (data: AuthForgotPostRequest) => {
  return axios
    .post(API_BASE_URL + '/auth/forgot', data)
    .then((res) => AuthForgotPostResponse_Data.fromJSON(res.data));
};

export const ResendMailVerify = (data: any) => {
  return axios
    .post(API_BASE_URL + `/auth/otp/resend`, data)
    .then((res) => res.data);
};

export const GetListStates = () => {
  return axios
    .get(API_BASE_URL + '/contacts/states')
    .then((res) => StatesGetResponse_Data.fromJSON(res.data));
};

export const GetCurrentInfoContact = (data: ContactGetRequest) => {
  return axios
    .get(API_BASE_URL + `/contacts/${data.id}`)
    .then((res) => ContactGetResponse_Data.fromJSON(res.data));
};

export const GetUserInfo = (data: UserGetRequest) => {
  return axios
    .get(API_BASE_URL + `/users/${data.id}`)
    .then((res) => UserGetResponse_Data.fromJSON(res.data));
};

export const GetListCategories = () => {
  return axios
    .get(API_BASE_URL + '/categories')
    .then((res) => CategoriesGetResponse_Data.fromJSON(res.data));
};

export const getCurrentBusiness = (data: BusinessGetRequest) => {
  return axios
    .get(API_BASE_URL + `/businesses/${data.id}`)
    .then((res) => BusinessGetResponse_Data.fromJSON(res.data));
};

export const getCurrentBusinessServices = (data: BusinessServiceGetRequest) => {
  return axios
    .get(API_BASE_URL + `/businesses/${data.id}/services`)
    .then((res) => BusinessServiceGetResponse_Data.fromJSON(res.data));
};

export const PutNewInfoContact = (data: ContactPutRequest) => {
  return axios
    .put(API_BASE_URL + `/contacts/${data.id}`, data)
    .then((res) => ContactPutResponse_Data.fromJSON(res.data));
};

export const PutNewInfoBusinessServices = (
  data: BusinessServicesPutRequest
) => {
  return axios
    .put(API_BASE_URL + `/businesses/${data.id}/services`, data)
    .then((res) => BusinessServiceGetResponse_Data.fromJSON(res.data));
};

export const PutNewInfoBusiness = (data: BusinessPutRequest) => {
  return axios
    .put(API_BASE_URL + `/businesses/${data.id}`, data)
    .then((res) => BusinessPutResponse_Data.fromJSON(res.data));
};

export const PutNewInfoUser = (data: UserPutRequest) => {
  return axios
    .put(API_BASE_URL + `/users/${data.id}`, data)
    .then((res) => UserPutResponse_Data.fromJSON(res.data));
};

export const GetPreSignedURL = (data: UploadUrlPostRequest) => {
  return axios.post(API_BASE_URL + '/upload-url', data).then((res) => res.data);
  // .then((res) => UploadUrlPostResponse_Data.fromJSON(res.data));
};

export const CustomPostRequest = (url: string, data: any) => {
  const _axios = axios.create();
  return _axios({
    url: url,
    method: 'post',
    data: data,
  });
};
export const GetSearchResult = (data: BusinessesGetRequest) => {
  return axios
    .get(API_BASE_URL + '/businesses', { params: data })
    .then((res) => BusinessesGetResponse_Data.fromJSON(res.data));
};

export const GetNameService = (data: CategoryGetRequest) => {
  return axios
    .get(API_BASE_URL + `/categories/${data}`)
    .then((res) => CategoryGetResponse_Data.fromJSON(res.data));
};

export const SendMultiRequest = (data: OrdersPostRequest) => {
  return axios
    .post(API_BASE_URL + '/orders', data)
    .then((res) => OrdersPostResponse_Data.fromJSON(res.data));
};

export const GetInfoDetailOfHandyman = (data?: BusinessGetRequest) => {
  return axios
    .get(API_BASE_URL + `/businesses/${data?.id}`)
    .then((res) => BusinessGetResponse_Data.fromJSON(res.data));
};

export const GetInfoServicelOfHandyman = (data: BusinessServiceGetRequest) => {
  return axios
    .get(API_BASE_URL + `/businesses/${data.id}/services`)
    .then((res) => BusinessServiceGetResponse_Data.fromJSON(res.data));
};

export const GetRatingOfHandyman = (data: BusinessRatingGetRequest) => {
  return axios
    .get(API_BASE_URL + `/businesses/${data.id}/rating`)
    .then((res) => BusinessRatingGetResponse_Data.fromJSON(res.data));
};

export const GetFeedbacksOfHandyman = (data: BusinessFeedbacksGetRequest) => {
  return axios
    .get(API_BASE_URL + `/businesses/${data.id}/feedbacks`, {
      params: { limit: data.limit, offset: data.offset },
    })
    .then((res) => BusinessFeedbacksGetResponse_Data.fromJSON(res.data));
};

// export const GetProjects = (limit: any, offset: any) => {
//   return axios.get (
//     API_BASE_URL + `/orders/projects?limit=${limit}&offset=${offset}`
//   );
// }

export const GetProjects = (data: UserProjectsGetRequest) => {
  return axios
    .get(API_BASE_URL + `/orders/projects`, {
      params: { offset: data.offset, limit: data.limit },
    })
    .then((res) => UserProjectsGetResponse_Data.fromJSON(res.data));
};

export const CancelProject = (data: CancelProjectPostRequest) => {
  return axios
    .post(API_BASE_URL + `/orders/projects/cancel`, data)
    .then((res) => CancelProjectPostResponse_Data.fromJSON(res.data));
};

export const GetPaymentMethod = () => {
  return axios
    .get(API_BASE_URL + `/businesses/payment-method`)
    .then((res) => BusinessPaymentMethodGetResponse_Data.fromJSON(res.data));
};

export const PostPaymentMethod = (data: BusinessPaymentMethodPostRequest) => {
  return axios
    .post(API_BASE_URL + `/businesses/payment-method`, data)
    .then((res) => BusinessPaymentMethodPostResponse_Data.fromJSON(res.data));
};

export const PostPaymentMethodSetup = (
  data: BusinessPaymentMethodSetupPostRequest
) => {
  return axios
    .post(API_BASE_URL + `/businesses/payment-method/setup`, data)
    .then((res) =>
      BusinessPaymentMethodSetupPostResponse_Data.fromJSON(res.data)
    );
};

export const DeletePaymentMethod = () => {
  return axios
    .post(API_BASE_URL + `/businesses/payment-method/delete`)
    .then((res) => res.data);
};

export const GetAllOrders = (data: OrdersGetRequest) => {
  return axios
    .get(API_BASE_URL + `/orders`, {
      params: {
        offset: data.offset,
        limit: data.limit,
        status: data.status,
        zipcode: data.zipcode,
        serviceId: data.serviceId,
      },
    })
    .then((res) => OrdersGetResponse_Data.fromJSON(res.data));
};

export const postFeedback = (data: FeedbacksPostRequest) => {
  return axios
    .post(API_BASE_URL + `/feedbacks`, data)
    .then((res) => FeedbacksPostResponse_Data.fromJSON(res.data));
};

export const GetChat = (data: FetchOnePostRequest) => {
  return axios
    .post(API_BASE_URL + `/chat/${data.id}/fetch`, {
      timestamp: data.timestamp,
      min: data.min,
    })
    .then((res) => FetchOnePostResponse_Data.fromJSON(res.data));
};

export const GetChats = (data: FetchPostRequest) => {
  return axios
    .post(API_BASE_URL + `/chat/fetch`, data)
    .then((res) => FetchPostResponse_Data.fromJSON(res.data));
};

export const SendChat = (data: SendPostRequest) => {
  return axios
    .post(API_BASE_URL + `/chat/${data.id}/send`, data)
    .then((res) => SendPostResponse_Data.fromJSON(res.data));
};

export const OrderConnect = (data: UpdateOrderStatusPostRequest) => {
  return axios
    .post(API_BASE_URL + `/orders/connect`, data)
    .then((res) => UpdateOrderStatusPostResponse_Data.fromJSON(res.data));
};

export const OrderConnectAll = (data: any) => {
  return axios
    .post(API_BASE_URL + `/orders/connect-all`, data)
    .then((res) => res.data);
};

export const OrderReject = (data: UpdateOrderStatusPostRequest) => {
  return axios
    .post(API_BASE_URL + `/orders/reject`, data)
    .then((res) => UpdateOrderStatusPostResponse_Data.fromJSON(res.data));
};

export const OrderCancel = (data: UpdateOrderStatusPostRequest) => {
  return axios
    .post(API_BASE_URL + `/orders/cancel`, data)
    .then((res) => UpdateOrderStatusPostResponse_Data.fromJSON(res.data));
};

export const OrderComplete = (data: UpdateOrderStatusPostRequest) => {
  return axios
    .post(API_BASE_URL + `/orders/complete`, data)
    .then((res) => UpdateOrderStatusPostResponse_Data.fromJSON(res.data));
};

export const PostConnectRequest = (data: any) => {
  return axios
    .post(API_BASE_URL + `/orders/connect`, data)
    .then((res) => res.data);
};

export function getStripeSetup() {
  return axios.get(API_BASE_URL + '/stripe/setup').then((res) => res.data);
}

export function getStripePaymentMethods() {
  return axios
    .get(API_BASE_URL + '/stripe/payment-method')
    .then((res) => res.data);
}

export const getPaymentSummary = (data: any) => {
  return axios.get(API_BASE_URL + '/businesses/payment-summary', {
    params: {
      UserId: data.UserId,
      query: data.query,
      limit: data.limit,
      offset: data.offset,
    },
  });
};

export const getAdvertise = (data: any) => {
  return axios
    .get(API_BASE_URL + '/businesses/promote', {
      params: { limit: data.limit, offset: data.offset },
    })
    .then((res) => res.data);
};

export const getAdvertiseDetail = (data: any) => {
  return axios
    .get(API_BASE_URL + `/businesses/promote/${data.id}`)
    .then((res) => res.data);
};

export const getOrderedPromote = (data: {
  UserId: string;
  limit: string;
  offset: string;
}) => {
  return axios
    .get(API_BASE_URL + '/businesses/promote/order', { data })
    .then((res) => res.data);
};

export const getFreeContact = (id: string) => {
  return axios.get(API_BASE_URL + `/businesses/${id}/free-contact`);
};

export const getReferralCode = () => {
  return axios
    .get(API_BASE_URL + '/businesses/invitation-code')
    .then((res) => res.data);
};
export const setupBuyAdBusinesses = (data: any) => {
  return axios
    .post(API_BASE_URL + `/businesses/buy-promote/setup`, data)
    .then((res) => res.data);
};

export const buyPromote = (data: any) => {
  return axios.post(API_BASE_URL + `/businesses/buy-promote`, data);
};
