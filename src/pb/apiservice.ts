/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  orderStatus,
  ROLE,
  sortQuery,
  accountStatus,
  serviceStatus,
  registrationProcess,
  orderStatusFromJSON,
  orderStatusToJSON,
  rOLEFromJSON,
  rOLEToJSON,
  sortQueryFromJSON,
  sortQueryToJSON,
  accountStatusFromJSON,
  accountStatusToJSON,
  serviceStatusFromJSON,
  serviceStatusToJSON,
  registrationProcessFromJSON,
  registrationProcessToJSON,
} from './const';

export const protobufPackage = 'apiservice';

export interface serviceGroup {
  serviceName: string;
  serviceId: string;
}

export interface Group {
  id: string;
  name: string;
  fee: number;
  serviceInfo: serviceGroup[];
}

export interface Feedback {
  rate: number;
  comment: string;
  createdAt: number;
  customerName: string;
  image: string;
  serviceOrder: string;
}

export interface Payment {
  id: string;
  paymentMethodId: string;
}

export interface Rating {
  rate: number;
  review: number;
  request: number;
}

export interface BusinessRating {
  business: Business | undefined;
  rating: Rating | undefined;
}

export interface Order {
  id: string;
  customerId: string;
  businessId: string;
  conversationId: string;
  serviceId: string;
  startDate: number;
  endDate: number;
  status: orderStatus;
  customerPhone: string;
  customerZipcode: string;
  customerName: string;
  customerMessage: string;
  serviceName: string;
  image: string;
  fee: number;
  businessLogo: string;
  businessBanner: string;
  businessName: string;
  isReviewed: boolean;
}

export interface PaymentMethodInfo {
  cardType: string;
  last4: string;
  expireDate: string;
  ownerName: string;
}

export interface StripePaymentMethodGetRequest {
  UserId: string;
}

export interface StripePaymentMethodGetResponse {
  code: number;
  success: boolean;
  data: StripePaymentMethodGetResponse_Data | undefined;
}

export interface StripePaymentMethodGetResponse_Data {
  paymentMethodInfo: PaymentMethodInfo | undefined;
}

export interface BusinessPaymentMethodSetupPostRequest {
  UserId: string;
}

export interface BusinessPaymentMethodSetupPostResponse {
  code: number;
  success: boolean;
  data: BusinessPaymentMethodSetupPostResponse_Data | undefined;
}

export interface BusinessPaymentMethodSetupPostResponse_Data {
  clientSecret: string;
}

export interface BusinessPaymentMethodDeletePostRequest {
  UserId: string;
}

export interface BusinessPaymentMethodDeletePostResponse {
  code: number;
  success: boolean;
  data: BusinessPaymentMethodDeletePostResponse_Data | undefined;
}

export interface BusinessPaymentMethodDeletePostResponse_Data {}

export interface UserProjectsGetRequest {
  UserId: string;
  offset: string;
  limit: string;
}

export interface UserProjectsGetResponse {
  code: number;
  success: boolean;
  data: UserProjectsGetResponse_Data | undefined;
}

export interface UserProjectsGetResponse_Data {
  result: Project[];
  pagination: Pagination | undefined;
}

export interface CancelProjectPostRequest {
  UserId: string;
  zipcode: string;
  categoryId: string;
}

export interface CancelProjectPostResponse {
  code: number;
  success: boolean;
  data: CancelProjectPostResponse_Data | undefined;
}

export interface CancelProjectPostResponse_Data {}

export interface AdminCategoryPostRequest {
  UserId: string;
  name: string;
  image: string;
}

export interface AdminCategoryPostResponese {
  code: number;
  success: boolean;
  data: AdminCategoryPostResponese_Data | undefined;
}

export interface AdminCategoryPostResponese_Data {}

export interface AdminCategoryPostEditRequest {
  UserId: string;
  id: string;
  name: string;
  fee: number;
  url: string;
}

export interface AdminCategoryPostEditResponese {
  code: number;
  success: boolean;
  data: AdminCategoryPostEditResponese_Data | undefined;
}

export interface AdminCategoryPostEditResponese_Data {}

export interface AdminCategoryPostDeleteRequest {
  UserId: string;
  categoryId: string;
}

export interface AdminCategoryPostDeleteResponese {
  code: number;
  success: boolean;
  data: AdminCategoryPostDeleteResponese_Data | undefined;
}

export interface AdminCategoryPostDeleteResponese_Data {}

export interface AdminGroupGetRequest {
  UserId: string;
  limit: string;
  offset: string;
  categoryId: string;
}

export interface AdminGroupGetResponse {
  code: number;
  success: boolean;
  data: AdminGroupGetResponse_Data | undefined;
}

export interface AdminGroupGetResponse_Data {
  pagination: Pagination | undefined;
  result: Group[];
}

export interface AdminGroupPostRequest {
  UserId: string;
  name: string;
  fee: number;
  ServiceIds: string[];
}

export interface AdminGroupPostResponse {
  code: number;
  success: boolean;
  data: AdminGroupPostResponse_Data | undefined;
}

export interface AdminGroupPostResponse_Data {}

export interface AdminGroupPutRequest {
  UserId: string;
  name: string;
  fee: number;
  ServiceIds: string[];
  id: string;
}

export interface AdminGroupPutResponse {
  code: number;
  success: boolean;
  data: AdminGroupPutResponse_Data | undefined;
}

export interface AdminGroupPutResponse_Data {}

export interface Project {
  serviceName: string;
  zipcode: string;
  total: number;
  image: string;
  serviceId: string;
}

export interface AuthMailPostRequest {
  mail: string;
  UserId: string;
}

export interface AuthMailPostResponse {
  code: number;
  success: boolean;
  data: AuthMailPostResponse_Data | undefined;
}

export interface AuthMailPostResponse_Data {
  otpId: string;
}

export interface StripeSetupPostRequest {
  UserId: string;
}

export interface StripeSetupPostResponse {
  code: number;
  success: boolean;
  data: StripeSetupPostResponse_Data | undefined;
}

export interface StripeSetupPostResponse_Data {
  setupIntentId: string;
}

export interface BusinessPaymentMethodGetRequest {
  UserId: string;
}

export interface BusinessPaymentMethodGetResponse {
  code: number;
  success: boolean;
  data: BusinessPaymentMethodGetResponse_Data | undefined;
}

export interface BusinessPaymentMethodGetResponse_Data {
  payment: Payment | undefined;
}

export interface BusinessPaymentMethodPostRequest {
  UserId: string;
  paymentMethodId: string;
}

export interface BusinessPaymentMethodPostResponse {
  code: number;
  success: boolean;
  data: BusinessPaymentMethodPostResponse_Data | undefined;
}

export interface BusinessPaymentMethodPostResponse_Data {}

export interface StripePaymentMethodPostRequest {
  UserId: string;
  paymentMethodId: string;
}

export interface StripePaymentMethodPostResponse {
  code: number;
  success: boolean;
  data: StripePaymentMethodPostResponse_Data | undefined;
}

export interface StripePaymentMethodPostResponse_Data {}

export interface StripeKeyGetRequest {
  id: string;
}

export interface StripeKeyGetResponse {
  code: number;
  success: boolean;
  data: StripeKeyGetResponse_Data | undefined;
}

export interface StripeKeyGetResponse_Data {
  key: string;
}

export interface FeedbacksPostRequest {
  UserId: string;
  orderId: string;
  rate: number;
  comment: string;
  serviceId: String;
  businessId: String;
}

export interface FeedbacksPostResponse {
  code: number;
  success: boolean;
  data: FeedbacksPostResponse_Data | undefined;
}

export interface FeedbacksPostResponse_Data {
  feedback: Feedback | undefined;
}

export interface UpdateOrderStatusPostRequest {
  UserId: string;
  orderId: string;
  Role: ROLE;
}

export interface UpdateOrderStatusPostResponse {
  code: number;
  success: boolean;
  data: UpdateOrderStatusPostResponse_Data | undefined;
}

export interface UpdateOrderStatusPostResponse_Data {}

export interface CategoryGetRequest {
  id: string;
}

export interface CategoryGetResponse {
  code: number;
  success: boolean;
  data: CategoryGetResponse_Data | undefined;
}

export interface CategoryGetResponse_Data {
  category: Category | undefined;
}

export interface OrdersPostRequest {
  businessIds: string[];
  zipcode: string;
  UserId: string;
  categoryId: string;
}

export interface OrdersPostResponse {
  code: number;
  success: boolean;
  data: OrdersPostResponse_Data | undefined;
}

export interface OrdersPostResponse_Data {}

export interface BusinessRatingGetRequest {
  id: string;
}

export interface BusinessRatingGetResponse {
  code: number;
  success: boolean;
  data: BusinessRatingGetResponse_Data | undefined;
}

export interface BusinessRatingGetResponse_Data {
  rate: Rating[];
}

export interface BusinessFeedbacksGetRequest {
  id: string;
  offset: string;
  limit: string;
  rate: string;
}

export interface BusinessFeedbacksGetResponse {
  code: number;
  success: boolean;
  data: BusinessFeedbacksGetResponse_Data | undefined;
}

export interface BusinessFeedbacksGetResponse_Data {
  pagination: Pagination | undefined;
  result: Feedback[];
}

export interface BusinessServicesPutRequest {
  categoryIds: string[];
  id: string;
  UserId: string;
}

export interface BusinessServicesPutResponse {
  code: number;
  success: boolean;
  data: BusinessServicesPutResponse_Data | undefined;
}

export interface BusinessServicesPutResponse_Data {
  result: Service[];
}

export interface CategoriesGetRequest {
  query: string;
  limit: string;
  offset: string;
}

export interface CategoriesGetResponse {
  code: number;
  success: boolean;
  data: CategoriesGetResponse_Data | undefined;
}

export interface CategoriesGetResponse_Data {
  result: Category[];
  pagination: Pagination | undefined;
}

export interface BusinessesGetRequest {
  categoryId: string;
  zipcode: string;
  offset: string;
  limit: string;
  mail: string;
  phone: string;
  query: sortQuery;
}

export interface BusinessesGetResponse {
  code: number;
  success: boolean;
  data: BusinessesGetResponse_Data | undefined;
}

export interface BusinessesGetResponse_Data {
  result: BusinessRating[];
  pagination: Pagination | undefined;
}

export interface AuthCheckGetRequest {
  identifier: string;
}

export interface AuthCheckGetResponse {
  code: number;
  success: boolean;
  data: AuthCheckGetResponse_Data | undefined;
}

export interface AuthCheckGetResponse_Data {
  existed: boolean;
}

export interface Pagination {
  offset: number;
  limit: number;
  total: number;
}

export interface Category {
  id: string;
  name: string;
  totalProvider: number;
  fee: number;
  image: string;
}

export interface BusinessServiceGetRequest {
  id: string;
}

export interface BusinessServiceGetResponse {
  code: number;
  success: boolean;
  data: BusinessServiceGetResponse_Data | undefined;
}

export interface BusinessServiceGetResponse_Data {
  result: Service[];
}

export interface BusinessNearGetRequest {
  UserId: string;
}

export interface BusinessNearGetResponse {
  code: number;
  success: boolean;
  data: BusinessNearGetResponse_Data | undefined;
}

export interface BusinessNearGetResponse_Data {
  result: BusinessRating[];
}

export interface OrdersGetRequest {
  UserId: string;
  status: orderStatus;
  offset: string;
  limit: string;
  serviceId: string;
  zipcode: string;
}

export interface OrdersGetResponse {
  code: number;
  success: boolean;
  data: OrdersGetResponse_Data | undefined;
}

export interface OrdersGetResponse_Data {
  pagination: Pagination | undefined;
  result: Order[];
}

export interface BusinessInterestGetRequest {}

export interface BusinessInterestGetResponse {
  code: number;
  success: boolean;
  data: BusinessInterestGetResponse_Data | undefined;
}

export interface BusinessInterestGetResponse_Data {
  result: BusinessRating[];
}

export interface UploadUrlPostRequest {
  UserId: string;
  filename: string;
  contentLength: number;
}

export interface UploadUrlPostResponse {
  code: number;
  success: boolean;
  data: UploadUrlPostResponse_Data | undefined;
}

export interface UploadUrlPostResponse_Data {}

export interface AdminBanUserPostRequest {
  id: string;
  UserId: string;
}

export interface AdminBanUserPostResponse {
  code: number;
  success: boolean;
  data: AdminBanUserPostResponse_Data | undefined;
}

export interface AdminBanUserPostResponse_Data {}

export interface AdminUsersUnbanPostRequest {
  id: string;
  UserId: string;
}

export interface AdminUsersUnbanPostResponse {
  code: number;
  success: boolean;
  data: AdminUsersUnbanPostResponse_Data | undefined;
}

export interface AdminUsersUnbanPostResponse_Data {}

export interface AdminUsersDeletePostRequest {
  id: string;
  UserId: string;
}

export interface AdminUsersDeletePostResponse {
  code: number;
  success: boolean;
  data: AdminUsersDeletePostResponse_Data | undefined;
}

export interface AdminUsersDeletePostResponse_Data {}

export interface AdminBusinessesUnbanPostRequest {
  id: string;
  UserId: string;
}

export interface AdminBusinessesUnbanPostResponse {
  code: number;
  success: boolean;
  data: AdminBusinessesUnbanPostResponse_Data | undefined;
}

export interface AdminBusinessesUnbanPostResponse_Data {}

/** rpc AuthOTPForgot(AuthForgotResetPostResponse) returns (AuthForgotResetPostResponse) */
export interface AuthForgotResetPostRequest {
  otpId: string;
  encryptedPrivateKey: string;
  publicKey: string;
  otp: string;
}

export interface AuthForgotResetPostResponse {
  code: number;
  success: boolean;
  data: AuthForgotResetPostResponse_Data | undefined;
}

export interface AuthForgotResetPostResponse_Data {}

/** rpc AuthPasswordForgotPost(AuthForgotPostRequest) returns (AuthForgotPostResponse) */
export interface AuthForgotPostRequest {
  mail: string;
}

export interface AuthForgotPostResponse {
  code: number;
  success: boolean;
  data: AuthForgotPostResponse_Data | undefined;
}

export interface AuthForgotPostResponse_Data {
  otpId: string;
  id: string;
}

export interface AuthResendOTPPostRequest {
  otpId: string;
}

export interface AuthResendOTPPostResponse {
  code: number;
  success: boolean;
  data: AuthResendOTPPostResponse_Data | undefined;
}

export interface AuthResendOTPPostResponse_Data {
  otpId: string;
}

/** rpc AuthOTPPost(AuthOTPPostRequest) returns (AuthOTPPostResponse) */
export interface AuthOTPPostRequest {
  otpId: string;
  otp: string;
}

export interface AuthOTPPostResponse {
  code: number;
  success: boolean;
  data: AuthOTPPostResponse_Data | undefined;
}

export interface AuthOTPPostResponse_Data {}

export interface StatesGetRequest {}

export interface StatesGetResponse {
  code: number;
  success: boolean;
  data: StatesGetResponse_Data | undefined;
}

export interface StatesGetResponse_Data {
  states: State[];
}

export interface ContactGetRequest {
  id: string;
  UserId: string;
}

export interface ContactGetResponse {
  code: number;
  success: boolean;
  data: ContactGetResponse_Data | undefined;
}

export interface ContactGetResponse_Data {
  contact: Contact | undefined;
}

export interface UserPutRequest {
  id: string;
  UserId: string;
  url: string;
  firstName: string;
  lastName: string;
}

export interface UserPutResponse {
  code: number;
  success: boolean;
  data: UserPutResponse_Data | undefined;
}

export interface UserPutResponse_Data {
  user: User | undefined;
}

export interface ContactPutRequest {
  id: string;
  UserId: string;
  zipcode: string;
  address1: string;
  address2: string;
  stateId: string;
  city: string;
}

export interface ContactPutResponse {
  code: number;
  success: boolean;
  data: ContactPutResponse_Data | undefined;
}

export interface ContactPutResponse_Data {
  contact: Contact | undefined;
}

export interface AdminBusinessDeletePostRequest {
  UserId: string;
  id: string;
}

export interface AdminBusinessDeletePostResponse {
  code: number;
  success: boolean;
  data: AdminBusinessDeletePostResponse_Data | undefined;
}

export interface AdminBusinessDeletePostResponse_Data {}

export interface AdminBusinessBanPostRequest {
  UserId: string;
  id: string;
}

export interface AdminBusinessBanPostResponse {
  code: number;
  success: boolean;
  data: AdminBusinessBanPostResponse_Data | undefined;
}

export interface AdminBusinessBanPostResponse_Data {}

export interface AdminUsersGetRequest {
  UserId: string;
  query: string;
  limit: string;
  offset: string;
}

export interface AdminUsersGetResponse {
  code: number;
  success: boolean;
  data: AdminUsersGetResponse_Data | undefined;
}

export interface AdminUsersGetResponse_Data {
  pagination: Pagination | undefined;
  result: User[];
}

export interface AdminBusinessesGetRequest {
  UserId: string;
  mail: string;
  phone: string;
  limit: string;
  offset: string;
}

export interface AdminBusinessesGetResponse {
  code: number;
  success: boolean;
  data: AdminBusinessesGetResponse_Data | undefined;
}

export interface AdminBusinessesGetResponse_Data {
  pagination: Pagination | undefined;
  result: Business[];
}

export interface BusinessGetRequest {
  id: string;
  UserId: string;
}

export interface BusinessGetResponse {
  code: number;
  success: boolean;
  data: BusinessGetResponse_Data | undefined;
}

export interface BusinessGetResponse_Data {
  business: Business | undefined;
}

export interface State {
  id: string;
  name: string;
}

export interface Business {
  id: string;
  name: string;
  phone: string;
  logoImage: string;
  bannerImage: string;
  contactId: string;
  website: string;
  descriptions: string;
  services: string[];
  mail: string;
  zipcode: string;
  status: accountStatus;
  zipcodes: string[];
}

export interface Service {
  id: string;
  name: string;
  image: string;
  businessId: string;
  status: serviceStatus;
  categoryId: string;
  categoryName: string;
  numberOrder: number;
}

export interface BusinessPutRequest {
  id: string;
  UserId: string;
  name: string;
  phone: string;
  logoUrl: string;
  bannerUrl: string;
  website: string;
  description: string;
  zipcodes: string[];
}

export interface BusinessPutResponse {
  code: number;
  success: boolean;
  data: BusinessPutResponse_Data | undefined;
}

export interface BusinessPutResponse_Data {
  business: Business | undefined;
}

/** rpc UserGet(UserGetRequest) returns (UserGetResponse) */
export interface UserGetRequest {
  id: string;
  UserId: string;
}

export interface UserGetResponse {
  code: number;
  success: boolean;
  data: UserGetResponse_Data | undefined;
}

export interface UserGetResponse_Data {
  user: User | undefined;
}

export interface User {
  id: string;
  image: string;
  mail: string;
  phone: string;
  contactId: string;
  firstName: string;
  lastName: string;
  status: accountStatus;
  name: string;
  zipcode: string;
}

export interface Contact {
  id: string;
  zipcode: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  stateId: string;
}

/** AuthPasswordPost(AuthPasswordPostRequest) returns (AuthPasswordPostResponse) */
export interface AuthPasswordPostRequest {
  publicKey: string;
  encryptedPrivateKey: string;
  UserId: string;
}

export interface AuthPasswordPostResponse {
  code: number;
  success: boolean;
  data: AuthPasswordPostResponse_Data | undefined;
}

export interface AuthPasswordPostResponse_Data {}

/** UserPost(UserPostResquest) returns (UserPostResponse) */
export interface UserPostRequest {
  mail: string;
  phone: string;
  publicKey: string;
  encryptedPrivateKey: string;
}

export interface UserPostResponse {
  code: number;
  success: boolean;
  data: UserPostResponse_Data | undefined;
}

export interface UserPostResponse_Data {
  otpId: string;
  mail: string;
  phone: string;
}

export interface BusinessPostRequest {
  mail: string;
  phone: string;
  publicKey: string;
  encryptedPrivateKey: string;
}

export interface BusinessPostResponse {
  code: number;
  success: boolean;
  data: BusinessPostResponse_Data | undefined;
}

export interface BusinessPostResponse_Data {
  otpId: string;
  mail: string;
  phone: string;
}

/** AuthCredential(AuthCredentialRequest) returns (AuthCredentialResponse) */
export interface AuthCredentialRequest {
  identifier: string;
}

export interface AuthCredentialResponse {
  code: number;
  success: boolean;
  data: AuthCredentialResponse_Data | undefined;
}

export interface AuthCredentialResponse_Data {
  id: string;
  publicKey: string;
  encryptedPrivateKey: string;
}

/** AuthPing(AuthPingRequest) returns (AuthPingResponse) */
export interface AuthPingRequest {
  UserId: string;
  Role: ROLE;
}

export interface AuthPingResponse {
  code: number;
  success: boolean;
  data: AuthPingResponse_Data | undefined;
}

export interface AuthPingResponse_Data {
  id: string;
  role: ROLE;
  process: registrationProcess;
}

function createBaseserviceGroup(): serviceGroup {
  return { serviceName: '', serviceId: '' };
}

export const serviceGroup = {
  encode(
    message: serviceGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceName !== '') {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.serviceId !== '') {
      writer.uint32(18).string(message.serviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): serviceGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseserviceGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.serviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): serviceGroup {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : '',
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : '',
    };
  },

  toJSON(message: serviceGroup): unknown {
    const obj: any = {};
    message.serviceName !== undefined &&
      (obj.serviceName = message.serviceName);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<serviceGroup>, I>>(
    object: I
  ): serviceGroup {
    const message = createBaseserviceGroup();
    message.serviceName = object.serviceName ?? '';
    message.serviceId = object.serviceId ?? '';
    return message;
  },
};

function createBaseGroup(): Group {
  return { id: '', name: '', fee: 0, serviceInfo: [] };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.fee !== 0) {
      writer.uint32(29).float(message.fee);
    }
    for (const v of message.serviceInfo) {
      serviceGroup.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.fee = reader.float();
          break;
        case 4:
          message.serviceInfo.push(
            serviceGroup.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Group {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      serviceInfo: Array.isArray(object?.serviceInfo)
        ? object.serviceInfo.map((e: any) => serviceGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.fee !== undefined && (obj.fee = message.fee);
    if (message.serviceInfo) {
      obj.serviceInfo = message.serviceInfo.map((e) =>
        e ? serviceGroup.toJSON(e) : undefined
      );
    } else {
      obj.serviceInfo = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.fee = object.fee ?? 0;
    message.serviceInfo =
      object.serviceInfo?.map((e) => serviceGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeedback(): Feedback {
  return {
    rate: 0,
    comment: '',
    createdAt: 0,
    customerName: '',
    image: '',
    serviceOrder: '',
  };
}

export const Feedback = {
  encode(
    message: Feedback,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rate !== 0) {
      writer.uint32(13).float(message.rate);
    }
    if (message.comment !== '') {
      writer.uint32(18).string(message.comment);
    }
    if (message.createdAt !== 0) {
      writer.uint32(24).int64(message.createdAt);
    }
    if (message.customerName !== '') {
      writer.uint32(34).string(message.customerName);
    }
    if (message.image !== '') {
      writer.uint32(42).string(message.image);
    }
    if (message.serviceOrder !== '') {
      writer.uint32(50).string(message.serviceOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feedback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.float();
          break;
        case 2:
          message.comment = reader.string();
          break;
        case 3:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.customerName = reader.string();
          break;
        case 5:
          message.image = reader.string();
          break;
        case 6:
          message.serviceOrder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Feedback {
    return {
      rate: isSet(object.rate) ? Number(object.rate) : 0,
      comment: isSet(object.comment) ? String(object.comment) : '',
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      customerName: isSet(object.customerName)
        ? String(object.customerName)
        : '',
      image: isSet(object.image) ? String(object.image) : '',
      serviceOrder: isSet(object.serviceOrder)
        ? String(object.serviceOrder)
        : '',
    };
  },

  toJSON(message: Feedback): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.comment !== undefined && (obj.comment = message.comment);
    message.createdAt !== undefined &&
      (obj.createdAt = Math.round(message.createdAt));
    message.customerName !== undefined &&
      (obj.customerName = message.customerName);
    message.image !== undefined && (obj.image = message.image);
    message.serviceOrder !== undefined &&
      (obj.serviceOrder = message.serviceOrder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Feedback>, I>>(object: I): Feedback {
    const message = createBaseFeedback();
    message.rate = object.rate ?? 0;
    message.comment = object.comment ?? '';
    message.createdAt = object.createdAt ?? 0;
    message.customerName = object.customerName ?? '';
    message.image = object.image ?? '';
    message.serviceOrder = object.serviceOrder ?? '';
    return message;
  },
};

function createBasePayment(): Payment {
  return { id: '', paymentMethodId: '' };
}

export const Payment = {
  encode(
    message: Payment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.paymentMethodId !== '') {
      writer.uint32(18).string(message.paymentMethodId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.paymentMethodId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payment {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      paymentMethodId: isSet(object.paymentMethodId)
        ? String(object.paymentMethodId)
        : '',
    };
  },

  toJSON(message: Payment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.paymentMethodId !== undefined &&
      (obj.paymentMethodId = message.paymentMethodId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Payment>, I>>(object: I): Payment {
    const message = createBasePayment();
    message.id = object.id ?? '';
    message.paymentMethodId = object.paymentMethodId ?? '';
    return message;
  },
};

function createBaseRating(): Rating {
  return { rate: 0, review: 0, request: 0 };
}

export const Rating = {
  encode(
    message: Rating,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rate !== 0) {
      writer.uint32(13).float(message.rate);
    }
    if (message.review !== 0) {
      writer.uint32(16).int32(message.review);
    }
    if (message.request !== 0) {
      writer.uint32(24).int32(message.request);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rating {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRating();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.float();
          break;
        case 2:
          message.review = reader.int32();
          break;
        case 3:
          message.request = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rating {
    return {
      rate: isSet(object.rate) ? Number(object.rate) : 0,
      review: isSet(object.review) ? Number(object.review) : 0,
      request: isSet(object.request) ? Number(object.request) : 0,
    };
  },

  toJSON(message: Rating): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.review !== undefined && (obj.review = Math.round(message.review));
    message.request !== undefined &&
      (obj.request = Math.round(message.request));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rating>, I>>(object: I): Rating {
    const message = createBaseRating();
    message.rate = object.rate ?? 0;
    message.review = object.review ?? 0;
    message.request = object.request ?? 0;
    return message;
  },
};

function createBaseBusinessRating(): BusinessRating {
  return { business: undefined, rating: undefined };
}

export const BusinessRating = {
  encode(
    message: BusinessRating,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.business !== undefined) {
      Business.encode(message.business, writer.uint32(10).fork()).ldelim();
    }
    if (message.rating !== undefined) {
      Rating.encode(message.rating, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessRating {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessRating();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.business = Business.decode(reader, reader.uint32());
          break;
        case 2:
          message.rating = Rating.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessRating {
    return {
      business: isSet(object.business)
        ? Business.fromJSON(object.business)
        : undefined,
      rating: isSet(object.rating) ? Rating.fromJSON(object.rating) : undefined,
    };
  },

  toJSON(message: BusinessRating): unknown {
    const obj: any = {};
    message.business !== undefined &&
      (obj.business = message.business
        ? Business.toJSON(message.business)
        : undefined);
    message.rating !== undefined &&
      (obj.rating = message.rating ? Rating.toJSON(message.rating) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessRating>, I>>(
    object: I
  ): BusinessRating {
    const message = createBaseBusinessRating();
    message.business =
      object.business !== undefined && object.business !== null
        ? Business.fromPartial(object.business)
        : undefined;
    message.rating =
      object.rating !== undefined && object.rating !== null
        ? Rating.fromPartial(object.rating)
        : undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: '',
    customerId: '',
    businessId: '',
    conversationId: '',
    serviceId: '',
    startDate: 0,
    endDate: 0,
    status: 0,
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
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.customerId !== '') {
      writer.uint32(18).string(message.customerId);
    }
    if (message.businessId !== '') {
      writer.uint32(26).string(message.businessId);
    }
    if (message.conversationId !== '') {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.serviceId !== '') {
      writer.uint32(42).string(message.serviceId);
    }
    if (message.startDate !== 0) {
      writer.uint32(48).int64(message.startDate);
    }
    if (message.endDate !== 0) {
      writer.uint32(56).int64(message.endDate);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.customerPhone !== '') {
      writer.uint32(74).string(message.customerPhone);
    }
    if (message.customerZipcode !== '') {
      writer.uint32(82).string(message.customerZipcode);
    }
    if (message.customerMessage !== '') {
      writer.uint32(90).string(message.customerMessage);
    }
    if (message.serviceName !== '') {
      writer.uint32(98).string(message.serviceName);
    }
    if (message.image !== '') {
      writer.uint32(106).string(message.image);
    }
    if (message.fee !== 0) {
      writer.uint32(117).float(message.fee);
    }
    if (message.businessLogo !== '') {
      writer.uint32(122).string(message.businessLogo);
    }
    if (message.businessBanner !== '') {
      writer.uint32(130).string(message.businessBanner);
    }
    if (message.businessName !== '') {
      writer.uint32(138).string(message.businessName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.customerId = reader.string();
          break;
        case 3:
          message.businessId = reader.string();
          break;
        case 4:
          message.conversationId = reader.string();
          break;
        case 5:
          message.serviceId = reader.string();
          break;
        case 6:
          message.startDate = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.endDate = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.customerPhone = reader.string();
          break;
        case 10:
          message.customerZipcode = reader.string();
          break;
        case 11:
          message.customerMessage = reader.string();
          break;
        case 12:
          message.serviceName = reader.string();
          break;
        case 13:
          message.image = reader.string();
          break;
        case 14:
          message.fee = reader.float();
          break;
        case 15:
          message.businessLogo = reader.string();
          break;
        case 16:
          message.businessBanner = reader.string();
          break;
        case 17:
          message.businessName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      customerId: isSet(object.customerId) ? String(object.customerId) : '',
      businessId: isSet(object.businessId) ? String(object.businessId) : '',
      conversationId: isSet(object.conversationId)
        ? String(object.conversationId)
        : '',
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : '',
      startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
      endDate: isSet(object.endDate) ? Number(object.endDate) : 0,
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
      customerPhone: isSet(object.customerPhone)
        ? String(object.customerPhone)
        : '',
      customerZipcode: isSet(object.customerZipcode)
        ? String(object.customerZipcode)
        : '',
      customerMessage: isSet(object.customerMessage)
        ? String(object.customerMessage)
        : '',
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : '',
      image: isSet(object.image) ? String(object.image) : '',
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      businessLogo: isSet(object.businessLogo)
        ? String(object.businessLogo)
        : '',
      businessBanner: isSet(object.businessBanner)
        ? String(object.businessBanner)
        : '',
      businessName: isSet(object.businessName)
        ? String(object.businessName)
        : '',
      customerName: isSet(object.customerName)
        ? String(object.customerName)
        : '',
      isReviewed: isSet(object.isReviewed) ? Boolean(object.isReviewed) : false,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.businessId !== undefined && (obj.businessId = message.businessId);
    message.conversationId !== undefined &&
      (obj.conversationId = message.conversationId);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.startDate !== undefined &&
      (obj.startDate = Math.round(message.startDate));
    message.endDate !== undefined &&
      (obj.endDate = Math.round(message.endDate));
    message.status !== undefined &&
      (obj.status = orderStatusToJSON(message.status));
    message.customerPhone !== undefined &&
      (obj.customerPhone = message.customerPhone);
    message.customerZipcode !== undefined &&
      (obj.customerZipcode = message.customerZipcode);
    message.customerMessage !== undefined &&
      (obj.customerMessage = message.customerMessage);
    message.serviceName !== undefined &&
      (obj.serviceName = message.serviceName);
    message.image !== undefined && (obj.image = message.image);
    message.fee !== undefined && (obj.fee = message.fee);
    message.businessLogo !== undefined &&
      (obj.businessLogo = message.businessLogo);
    message.businessBanner !== undefined &&
      (obj.businessBanner = message.businessBanner);
    message.businessName !== undefined &&
      (obj.businessName = message.businessName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.id = object.id ?? '';
    message.customerId = object.customerId ?? '';
    message.businessId = object.businessId ?? '';
    message.conversationId = object.conversationId ?? '';
    message.serviceId = object.serviceId ?? '';
    message.startDate = object.startDate ?? 0;
    message.endDate = object.endDate ?? 0;
    message.status = object.status ?? 0;
    message.customerPhone = object.customerPhone ?? '';
    message.customerZipcode = object.customerZipcode ?? '';
    message.customerMessage = object.customerMessage ?? '';
    message.serviceName = object.serviceName ?? '';
    message.image = object.image ?? '';
    message.fee = object.fee ?? 0;
    message.businessLogo = object.businessLogo ?? '';
    message.businessBanner = object.businessBanner ?? '';
    message.businessName = object.businessName ?? '';
    return message;
  },
};

function createBasePaymentMethodInfo(): PaymentMethodInfo {
  return { cardType: '', last4: '', expireDate: '', ownerName: '' };
}

export const PaymentMethodInfo = {
  encode(
    message: PaymentMethodInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cardType !== '') {
      writer.uint32(10).string(message.cardType);
    }
    if (message.last4 !== '') {
      writer.uint32(18).string(message.last4);
    }
    if (message.expireDate !== '') {
      writer.uint32(26).string(message.expireDate);
    }
    if (message.ownerName !== '') {
      writer.uint32(34).string(message.ownerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentMethodInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentMethodInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardType = reader.string();
          break;
        case 2:
          message.last4 = reader.string();
          break;
        case 3:
          message.expireDate = reader.string();
          break;
        case 4:
          message.ownerName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentMethodInfo {
    return {
      cardType: isSet(object.cardType) ? String(object.cardType) : '',
      last4: isSet(object.last4) ? String(object.last4) : '',
      expireDate: isSet(object.expireDate) ? String(object.expireDate) : '',
      ownerName: isSet(object.ownerName) ? String(object.ownerName) : '',
    };
  },

  toJSON(message: PaymentMethodInfo): unknown {
    const obj: any = {};
    message.cardType !== undefined && (obj.cardType = message.cardType);
    message.last4 !== undefined && (obj.last4 = message.last4);
    message.expireDate !== undefined && (obj.expireDate = message.expireDate);
    message.ownerName !== undefined && (obj.ownerName = message.ownerName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PaymentMethodInfo>, I>>(
    object: I
  ): PaymentMethodInfo {
    const message = createBasePaymentMethodInfo();
    message.cardType = object.cardType ?? '';
    message.last4 = object.last4 ?? '';
    message.expireDate = object.expireDate ?? '';
    message.ownerName = object.ownerName ?? '';
    return message;
  },
};

function createBaseStripePaymentMethodGetRequest(): StripePaymentMethodGetRequest {
  return { UserId: '' };
}

export const StripePaymentMethodGetRequest = {
  encode(
    message: StripePaymentMethodGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripePaymentMethodGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripePaymentMethodGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripePaymentMethodGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: StripePaymentMethodGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripePaymentMethodGetRequest>, I>>(
    object: I
  ): StripePaymentMethodGetRequest {
    const message = createBaseStripePaymentMethodGetRequest();
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseStripePaymentMethodGetResponse(): StripePaymentMethodGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const StripePaymentMethodGetResponse = {
  encode(
    message: StripePaymentMethodGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      StripePaymentMethodGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripePaymentMethodGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripePaymentMethodGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = StripePaymentMethodGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripePaymentMethodGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? StripePaymentMethodGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: StripePaymentMethodGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? StripePaymentMethodGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripePaymentMethodGetResponse>, I>>(
    object: I
  ): StripePaymentMethodGetResponse {
    const message = createBaseStripePaymentMethodGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? StripePaymentMethodGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseStripePaymentMethodGetResponse_Data(): StripePaymentMethodGetResponse_Data {
  return { paymentMethodInfo: undefined };
}

export const StripePaymentMethodGetResponse_Data = {
  encode(
    message: StripePaymentMethodGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.paymentMethodInfo !== undefined) {
      PaymentMethodInfo.encode(
        message.paymentMethodInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripePaymentMethodGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripePaymentMethodGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentMethodInfo = PaymentMethodInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripePaymentMethodGetResponse_Data {
    return {
      paymentMethodInfo: isSet(object.paymentMethodInfo)
        ? PaymentMethodInfo.fromJSON(object.paymentMethodInfo)
        : undefined,
    };
  },

  toJSON(message: StripePaymentMethodGetResponse_Data): unknown {
    const obj: any = {};
    message.paymentMethodInfo !== undefined &&
      (obj.paymentMethodInfo = message.paymentMethodInfo
        ? PaymentMethodInfo.toJSON(message.paymentMethodInfo)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<StripePaymentMethodGetResponse_Data>, I>
  >(object: I): StripePaymentMethodGetResponse_Data {
    const message = createBaseStripePaymentMethodGetResponse_Data();
    message.paymentMethodInfo =
      object.paymentMethodInfo !== undefined &&
      object.paymentMethodInfo !== null
        ? PaymentMethodInfo.fromPartial(object.paymentMethodInfo)
        : undefined;
    return message;
  },
};

function createBaseBusinessPaymentMethodSetupPostRequest(): BusinessPaymentMethodSetupPostRequest {
  return { UserId: '' };
}

export const BusinessPaymentMethodSetupPostRequest = {
  encode(
    message: BusinessPaymentMethodSetupPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodSetupPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodSetupPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodSetupPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: BusinessPaymentMethodSetupPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodSetupPostRequest>, I>
  >(object: I): BusinessPaymentMethodSetupPostRequest {
    const message = createBaseBusinessPaymentMethodSetupPostRequest();
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseBusinessPaymentMethodSetupPostResponse(): BusinessPaymentMethodSetupPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessPaymentMethodSetupPostResponse = {
  encode(
    message: BusinessPaymentMethodSetupPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessPaymentMethodSetupPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodSetupPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodSetupPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessPaymentMethodSetupPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodSetupPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessPaymentMethodSetupPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessPaymentMethodSetupPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessPaymentMethodSetupPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodSetupPostResponse>, I>
  >(object: I): BusinessPaymentMethodSetupPostResponse {
    const message = createBaseBusinessPaymentMethodSetupPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessPaymentMethodSetupPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessPaymentMethodSetupPostResponse_Data(): BusinessPaymentMethodSetupPostResponse_Data {
  return { clientSecret: '' };
}

export const BusinessPaymentMethodSetupPostResponse_Data = {
  encode(
    message: BusinessPaymentMethodSetupPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientSecret !== '') {
      writer.uint32(10).string(message.clientSecret);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodSetupPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodSetupPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientSecret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodSetupPostResponse_Data {
    return {
      clientSecret: isSet(object.clientSecret)
        ? String(object.clientSecret)
        : '',
    };
  },

  toJSON(message: BusinessPaymentMethodSetupPostResponse_Data): unknown {
    const obj: any = {};
    message.clientSecret !== undefined &&
      (obj.clientSecret = message.clientSecret);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodSetupPostResponse_Data>, I>
  >(object: I): BusinessPaymentMethodSetupPostResponse_Data {
    const message = createBaseBusinessPaymentMethodSetupPostResponse_Data();
    message.clientSecret = object.clientSecret ?? '';
    return message;
  },
};

function createBaseBusinessPaymentMethodDeletePostRequest(): BusinessPaymentMethodDeletePostRequest {
  return { UserId: '' };
}

export const BusinessPaymentMethodDeletePostRequest = {
  encode(
    message: BusinessPaymentMethodDeletePostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodDeletePostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodDeletePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodDeletePostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: BusinessPaymentMethodDeletePostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodDeletePostRequest>, I>
  >(object: I): BusinessPaymentMethodDeletePostRequest {
    const message = createBaseBusinessPaymentMethodDeletePostRequest();
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseBusinessPaymentMethodDeletePostResponse(): BusinessPaymentMethodDeletePostResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessPaymentMethodDeletePostResponse = {
  encode(
    message: BusinessPaymentMethodDeletePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessPaymentMethodDeletePostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodDeletePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodDeletePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessPaymentMethodDeletePostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodDeletePostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessPaymentMethodDeletePostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessPaymentMethodDeletePostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessPaymentMethodDeletePostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodDeletePostResponse>, I>
  >(object: I): BusinessPaymentMethodDeletePostResponse {
    const message = createBaseBusinessPaymentMethodDeletePostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessPaymentMethodDeletePostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessPaymentMethodDeletePostResponse_Data(): BusinessPaymentMethodDeletePostResponse_Data {
  return {};
}

export const BusinessPaymentMethodDeletePostResponse_Data = {
  encode(
    _: BusinessPaymentMethodDeletePostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodDeletePostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodDeletePostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): BusinessPaymentMethodDeletePostResponse_Data {
    return {};
  },

  toJSON(_: BusinessPaymentMethodDeletePostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<BusinessPaymentMethodDeletePostResponse_Data>,
      I
    >
  >(_: I): BusinessPaymentMethodDeletePostResponse_Data {
    const message = createBaseBusinessPaymentMethodDeletePostResponse_Data();
    return message;
  },
};

function createBaseUserProjectsGetRequest(): UserProjectsGetRequest {
  return { UserId: '', offset: '', limit: '' };
}

export const UserProjectsGetRequest = {
  encode(
    message: UserProjectsGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.offset !== '') {
      writer.uint32(18).string(message.offset);
    }
    if (message.limit !== '') {
      writer.uint32(26).string(message.limit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserProjectsGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserProjectsGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.offset = reader.string();
          break;
        case 3:
          message.limit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserProjectsGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      offset: isSet(object.offset) ? String(object.offset) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
    };
  },

  toJSON(message: UserProjectsGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserProjectsGetRequest>, I>>(
    object: I
  ): UserProjectsGetRequest {
    const message = createBaseUserProjectsGetRequest();
    message.UserId = object.UserId ?? '';
    message.offset = object.offset ?? '';
    message.limit = object.limit ?? '';
    return message;
  },
};

function createBaseUserProjectsGetResponse(): UserProjectsGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const UserProjectsGetResponse = {
  encode(
    message: UserProjectsGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      UserProjectsGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserProjectsGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserProjectsGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = UserProjectsGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserProjectsGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? UserProjectsGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: UserProjectsGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? UserProjectsGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserProjectsGetResponse>, I>>(
    object: I
  ): UserProjectsGetResponse {
    const message = createBaseUserProjectsGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? UserProjectsGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseUserProjectsGetResponse_Data(): UserProjectsGetResponse_Data {
  return { result: [], pagination: undefined };
}

export const UserProjectsGetResponse_Data = {
  encode(
    message: UserProjectsGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.result) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserProjectsGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserProjectsGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(Project.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserProjectsGetResponse_Data {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Project.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: UserProjectsGetResponse_Data): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? Project.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserProjectsGetResponse_Data>, I>>(
    object: I
  ): UserProjectsGetResponse_Data {
    const message = createBaseUserProjectsGetResponse_Data();
    message.result = object.result?.map((e) => Project.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseCancelProjectPostRequest(): CancelProjectPostRequest {
  return { UserId: '', zipcode: '', categoryId: '' };
}

export const CancelProjectPostRequest = {
  encode(
    message: CancelProjectPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.zipcode !== '') {
      writer.uint32(18).string(message.zipcode);
    }
    if (message.categoryId !== '') {
      writer.uint32(26).string(message.categoryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelProjectPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelProjectPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.zipcode = reader.string();
          break;
        case 3:
          message.categoryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelProjectPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
    };
  },

  toJSON(message: CancelProjectPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelProjectPostRequest>, I>>(
    object: I
  ): CancelProjectPostRequest {
    const message = createBaseCancelProjectPostRequest();
    message.UserId = object.UserId ?? '';
    message.zipcode = object.zipcode ?? '';
    message.categoryId = object.categoryId ?? '';
    return message;
  },
};

function createBaseCancelProjectPostResponse(): CancelProjectPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const CancelProjectPostResponse = {
  encode(
    message: CancelProjectPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      CancelProjectPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelProjectPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelProjectPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = CancelProjectPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelProjectPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? CancelProjectPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: CancelProjectPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? CancelProjectPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelProjectPostResponse>, I>>(
    object: I
  ): CancelProjectPostResponse {
    const message = createBaseCancelProjectPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? CancelProjectPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseCancelProjectPostResponse_Data(): CancelProjectPostResponse_Data {
  return {};
}

export const CancelProjectPostResponse_Data = {
  encode(
    _: CancelProjectPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelProjectPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelProjectPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CancelProjectPostResponse_Data {
    return {};
  },

  toJSON(_: CancelProjectPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelProjectPostResponse_Data>, I>>(
    _: I
  ): CancelProjectPostResponse_Data {
    const message = createBaseCancelProjectPostResponse_Data();
    return message;
  },
};

function createBaseAdminCategoryPostRequest(): AdminCategoryPostRequest {
  return { UserId: '', name: '', image: '' };
}

export const AdminCategoryPostRequest = {
  encode(
    message: AdminCategoryPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.image !== '') {
      writer.uint32(26).string(message.image);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminCategoryPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      name: isSet(object.name) ? String(object.name) : '',
      image: isSet(object.image) ? String(object.image) : '',
    };
  },

  toJSON(message: AdminCategoryPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.name !== undefined && (obj.name = message.name);
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminCategoryPostRequest>, I>>(
    object: I
  ): AdminCategoryPostRequest {
    const message = createBaseAdminCategoryPostRequest();
    message.UserId = object.UserId ?? '';
    message.name = object.name ?? '';
    message.image = object.image ?? '';
    return message;
  },
};

function createBaseAdminCategoryPostResponese(): AdminCategoryPostResponese {
  return { code: 0, success: false, data: undefined };
}

export const AdminCategoryPostResponese = {
  encode(
    message: AdminCategoryPostResponese,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminCategoryPostResponese_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostResponese {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostResponese();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminCategoryPostResponese_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminCategoryPostResponese {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminCategoryPostResponese_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminCategoryPostResponese): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminCategoryPostResponese_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminCategoryPostResponese>, I>>(
    object: I
  ): AdminCategoryPostResponese {
    const message = createBaseAdminCategoryPostResponese();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminCategoryPostResponese_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminCategoryPostResponese_Data(): AdminCategoryPostResponese_Data {
  return {};
}

export const AdminCategoryPostResponese_Data = {
  encode(
    _: AdminCategoryPostResponese_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostResponese_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostResponese_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminCategoryPostResponese_Data {
    return {};
  },

  toJSON(_: AdminCategoryPostResponese_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminCategoryPostResponese_Data>, I>>(
    _: I
  ): AdminCategoryPostResponese_Data {
    const message = createBaseAdminCategoryPostResponese_Data();
    return message;
  },
};

function createBaseAdminCategoryPostEditRequest(): AdminCategoryPostEditRequest {
  return { UserId: '', id: '', name: '', fee: 0, url: '' };
}

export const AdminCategoryPostEditRequest = {
  encode(
    message: AdminCategoryPostEditRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.fee !== 0) {
      writer.uint32(37).float(message.fee);
    }
    if (message.url !== '') {
      writer.uint32(42).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostEditRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostEditRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.fee = reader.float();
          break;
        case 5:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminCategoryPostEditRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      url: isSet(object.url) ? String(object.url) : '',
    };
  },

  toJSON(message: AdminCategoryPostEditRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.fee !== undefined && (obj.fee = message.fee);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminCategoryPostEditRequest>, I>>(
    object: I
  ): AdminCategoryPostEditRequest {
    const message = createBaseAdminCategoryPostEditRequest();
    message.UserId = object.UserId ?? '';
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.fee = object.fee ?? 0;
    message.url = object.url ?? '';
    return message;
  },
};

function createBaseAdminCategoryPostEditResponese(): AdminCategoryPostEditResponese {
  return { code: 0, success: false, data: undefined };
}

export const AdminCategoryPostEditResponese = {
  encode(
    message: AdminCategoryPostEditResponese,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminCategoryPostEditResponese_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostEditResponese {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostEditResponese();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminCategoryPostEditResponese_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminCategoryPostEditResponese {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminCategoryPostEditResponese_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminCategoryPostEditResponese): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminCategoryPostEditResponese_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminCategoryPostEditResponese>, I>>(
    object: I
  ): AdminCategoryPostEditResponese {
    const message = createBaseAdminCategoryPostEditResponese();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminCategoryPostEditResponese_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminCategoryPostEditResponese_Data(): AdminCategoryPostEditResponese_Data {
  return {};
}

export const AdminCategoryPostEditResponese_Data = {
  encode(
    _: AdminCategoryPostEditResponese_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostEditResponese_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostEditResponese_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminCategoryPostEditResponese_Data {
    return {};
  },

  toJSON(_: AdminCategoryPostEditResponese_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminCategoryPostEditResponese_Data>, I>
  >(_: I): AdminCategoryPostEditResponese_Data {
    const message = createBaseAdminCategoryPostEditResponese_Data();
    return message;
  },
};

function createBaseAdminCategoryPostDeleteRequest(): AdminCategoryPostDeleteRequest {
  return { UserId: '', categoryId: '' };
}

export const AdminCategoryPostDeleteRequest = {
  encode(
    message: AdminCategoryPostDeleteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.categoryId !== '') {
      writer.uint32(18).string(message.categoryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.categoryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminCategoryPostDeleteRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
    };
  },

  toJSON(message: AdminCategoryPostDeleteRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminCategoryPostDeleteRequest>, I>>(
    object: I
  ): AdminCategoryPostDeleteRequest {
    const message = createBaseAdminCategoryPostDeleteRequest();
    message.UserId = object.UserId ?? '';
    message.categoryId = object.categoryId ?? '';
    return message;
  },
};

function createBaseAdminCategoryPostDeleteResponese(): AdminCategoryPostDeleteResponese {
  return { code: 0, success: false, data: undefined };
}

export const AdminCategoryPostDeleteResponese = {
  encode(
    message: AdminCategoryPostDeleteResponese,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminCategoryPostDeleteResponese_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostDeleteResponese {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostDeleteResponese();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminCategoryPostDeleteResponese_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminCategoryPostDeleteResponese {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminCategoryPostDeleteResponese_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminCategoryPostDeleteResponese): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminCategoryPostDeleteResponese_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminCategoryPostDeleteResponese>, I>
  >(object: I): AdminCategoryPostDeleteResponese {
    const message = createBaseAdminCategoryPostDeleteResponese();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminCategoryPostDeleteResponese_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminCategoryPostDeleteResponese_Data(): AdminCategoryPostDeleteResponese_Data {
  return {};
}

export const AdminCategoryPostDeleteResponese_Data = {
  encode(
    _: AdminCategoryPostDeleteResponese_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminCategoryPostDeleteResponese_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminCategoryPostDeleteResponese_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminCategoryPostDeleteResponese_Data {
    return {};
  },

  toJSON(_: AdminCategoryPostDeleteResponese_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminCategoryPostDeleteResponese_Data>, I>
  >(_: I): AdminCategoryPostDeleteResponese_Data {
    const message = createBaseAdminCategoryPostDeleteResponese_Data();
    return message;
  },
};

function createBaseAdminGroupGetRequest(): AdminGroupGetRequest {
  return { UserId: '', limit: '', offset: '', categoryId: '' };
}

export const AdminGroupGetRequest = {
  encode(
    message: AdminGroupGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.limit !== '') {
      writer.uint32(18).string(message.limit);
    }
    if (message.offset !== '') {
      writer.uint32(26).string(message.offset);
    }
    if (message.categoryId !== '') {
      writer.uint32(34).string(message.categoryId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.limit = reader.string();
          break;
        case 3:
          message.offset = reader.string();
          break;
        case 4:
          message.categoryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminGroupGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
      offset: isSet(object.offset) ? String(object.offset) : '',
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
    };
  },

  toJSON(message: AdminGroupGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.limit !== undefined && (obj.limit = message.limit);
    message.offset !== undefined && (obj.offset = message.offset);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupGetRequest>, I>>(
    object: I
  ): AdminGroupGetRequest {
    const message = createBaseAdminGroupGetRequest();
    message.UserId = object.UserId ?? '';
    message.limit = object.limit ?? '';
    message.offset = object.offset ?? '';
    message.categoryId = object.categoryId ?? '';
    return message;
  },
};

function createBaseAdminGroupGetResponse(): AdminGroupGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminGroupGetResponse = {
  encode(
    message: AdminGroupGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminGroupGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminGroupGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminGroupGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminGroupGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminGroupGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminGroupGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupGetResponse>, I>>(
    object: I
  ): AdminGroupGetResponse {
    const message = createBaseAdminGroupGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminGroupGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminGroupGetResponse_Data(): AdminGroupGetResponse_Data {
  return { pagination: undefined, result: [] };
}

export const AdminGroupGetResponse_Data = {
  encode(
    message: AdminGroupGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.result) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        case 2:
          message.result.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminGroupGetResponse_Data {
    return {
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Group.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AdminGroupGetResponse_Data): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    if (message.result) {
      obj.result = message.result.map((e) => (e ? Group.toJSON(e) : undefined));
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupGetResponse_Data>, I>>(
    object: I
  ): AdminGroupGetResponse_Data {
    const message = createBaseAdminGroupGetResponse_Data();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    message.result = object.result?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAdminGroupPostRequest(): AdminGroupPostRequest {
  return { UserId: '', name: '', fee: 0, ServiceIds: [] };
}

export const AdminGroupPostRequest = {
  encode(
    message: AdminGroupPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.fee !== 0) {
      writer.uint32(29).float(message.fee);
    }
    for (const v of message.ServiceIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.fee = reader.float();
          break;
        case 4:
          message.ServiceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminGroupPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      name: isSet(object.name) ? String(object.name) : '',
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      ServiceIds: Array.isArray(object?.ServiceIds)
        ? object.ServiceIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: AdminGroupPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.name !== undefined && (obj.name = message.name);
    message.fee !== undefined && (obj.fee = message.fee);
    if (message.ServiceIds) {
      obj.ServiceIds = message.ServiceIds.map((e) => e);
    } else {
      obj.ServiceIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupPostRequest>, I>>(
    object: I
  ): AdminGroupPostRequest {
    const message = createBaseAdminGroupPostRequest();
    message.UserId = object.UserId ?? '';
    message.name = object.name ?? '';
    message.fee = object.fee ?? 0;
    message.ServiceIds = object.ServiceIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseAdminGroupPostResponse(): AdminGroupPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminGroupPostResponse = {
  encode(
    message: AdminGroupPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminGroupPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminGroupPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminGroupPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminGroupPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminGroupPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminGroupPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupPostResponse>, I>>(
    object: I
  ): AdminGroupPostResponse {
    const message = createBaseAdminGroupPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminGroupPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminGroupPostResponse_Data(): AdminGroupPostResponse_Data {
  return {};
}

export const AdminGroupPostResponse_Data = {
  encode(
    _: AdminGroupPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminGroupPostResponse_Data {
    return {};
  },

  toJSON(_: AdminGroupPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupPostResponse_Data>, I>>(
    _: I
  ): AdminGroupPostResponse_Data {
    const message = createBaseAdminGroupPostResponse_Data();
    return message;
  },
};

function createBaseAdminGroupPutRequest(): AdminGroupPutRequest {
  return { UserId: '', name: '', fee: 0, ServiceIds: [], id: '' };
}

export const AdminGroupPutRequest = {
  encode(
    message: AdminGroupPutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.fee !== 0) {
      writer.uint32(29).float(message.fee);
    }
    for (const v of message.ServiceIds) {
      writer.uint32(34).string(v!);
    }
    if (message.id !== '') {
      writer.uint32(42).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupPutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupPutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.fee = reader.float();
          break;
        case 4:
          message.ServiceIds.push(reader.string());
          break;
        case 5:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminGroupPutRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      name: isSet(object.name) ? String(object.name) : '',
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      ServiceIds: Array.isArray(object?.ServiceIds)
        ? object.ServiceIds.map((e: any) => String(e))
        : [],
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: AdminGroupPutRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.name !== undefined && (obj.name = message.name);
    message.fee !== undefined && (obj.fee = message.fee);
    if (message.ServiceIds) {
      obj.ServiceIds = message.ServiceIds.map((e) => e);
    } else {
      obj.ServiceIds = [];
    }
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupPutRequest>, I>>(
    object: I
  ): AdminGroupPutRequest {
    const message = createBaseAdminGroupPutRequest();
    message.UserId = object.UserId ?? '';
    message.name = object.name ?? '';
    message.fee = object.fee ?? 0;
    message.ServiceIds = object.ServiceIds?.map((e) => e) || [];
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAdminGroupPutResponse(): AdminGroupPutResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminGroupPutResponse = {
  encode(
    message: AdminGroupPutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminGroupPutResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupPutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminGroupPutResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminGroupPutResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminGroupPutResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminGroupPutResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminGroupPutResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupPutResponse>, I>>(
    object: I
  ): AdminGroupPutResponse {
    const message = createBaseAdminGroupPutResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminGroupPutResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminGroupPutResponse_Data(): AdminGroupPutResponse_Data {
  return {};
}

export const AdminGroupPutResponse_Data = {
  encode(
    _: AdminGroupPutResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminGroupPutResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminGroupPutResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminGroupPutResponse_Data {
    return {};
  },

  toJSON(_: AdminGroupPutResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminGroupPutResponse_Data>, I>>(
    _: I
  ): AdminGroupPutResponse_Data {
    const message = createBaseAdminGroupPutResponse_Data();
    return message;
  },
};

function createBaseProject(): Project {
  return { serviceName: '', zipcode: '', total: 0, image: '', serviceId: '' };
}

export const Project = {
  encode(
    message: Project,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serviceName !== '') {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.zipcode !== '') {
      writer.uint32(18).string(message.zipcode);
    }
    if (message.total !== 0) {
      writer.uint32(24).int64(message.total);
    }
    if (message.image !== '') {
      writer.uint32(34).string(message.image);
    }
    if (message.serviceId !== '') {
      writer.uint32(42).string(message.serviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;
        case 2:
          message.zipcode = reader.string();
          break;
        case 3:
          message.total = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.image = reader.string();
          break;
        case 5:
          message.serviceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      total: isSet(object.total) ? Number(object.total) : 0,
      image: isSet(object.image) ? String(object.image) : '',
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : '',
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.serviceName !== undefined &&
      (obj.serviceName = message.serviceName);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.image !== undefined && (obj.image = message.image);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Project>, I>>(object: I): Project {
    const message = createBaseProject();
    message.serviceName = object.serviceName ?? '';
    message.zipcode = object.zipcode ?? '';
    message.total = object.total ?? 0;
    message.image = object.image ?? '';
    message.serviceId = object.serviceId ?? '';
    return message;
  },
};

function createBaseAuthMailPostRequest(): AuthMailPostRequest {
  return { mail: '', UserId: '' };
}

export const AuthMailPostRequest = {
  encode(
    message: AuthMailPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mail !== '') {
      writer.uint32(10).string(message.mail);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthMailPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthMailPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mail = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthMailPostRequest {
    return {
      mail: isSet(object.mail) ? String(object.mail) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: AuthMailPostRequest): unknown {
    const obj: any = {};
    message.mail !== undefined && (obj.mail = message.mail);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthMailPostRequest>, I>>(
    object: I
  ): AuthMailPostRequest {
    const message = createBaseAuthMailPostRequest();
    message.mail = object.mail ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseAuthMailPostResponse(): AuthMailPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthMailPostResponse = {
  encode(
    message: AuthMailPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthMailPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthMailPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthMailPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthMailPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthMailPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthMailPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthMailPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthMailPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthMailPostResponse>, I>>(
    object: I
  ): AuthMailPostResponse {
    const message = createBaseAuthMailPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthMailPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthMailPostResponse_Data(): AuthMailPostResponse_Data {
  return { otpId: '' };
}

export const AuthMailPostResponse_Data = {
  encode(
    message: AuthMailPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthMailPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthMailPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthMailPostResponse_Data {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
    };
  },

  toJSON(message: AuthMailPostResponse_Data): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthMailPostResponse_Data>, I>>(
    object: I
  ): AuthMailPostResponse_Data {
    const message = createBaseAuthMailPostResponse_Data();
    message.otpId = object.otpId ?? '';
    return message;
  },
};

function createBaseStripeSetupPostRequest(): StripeSetupPostRequest {
  return { UserId: '' };
}

export const StripeSetupPostRequest = {
  encode(
    message: StripeSetupPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripeSetupPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripeSetupPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripeSetupPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: StripeSetupPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripeSetupPostRequest>, I>>(
    object: I
  ): StripeSetupPostRequest {
    const message = createBaseStripeSetupPostRequest();
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseStripeSetupPostResponse(): StripeSetupPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const StripeSetupPostResponse = {
  encode(
    message: StripeSetupPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      StripeSetupPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripeSetupPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripeSetupPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = StripeSetupPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripeSetupPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? StripeSetupPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: StripeSetupPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? StripeSetupPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripeSetupPostResponse>, I>>(
    object: I
  ): StripeSetupPostResponse {
    const message = createBaseStripeSetupPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? StripeSetupPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseStripeSetupPostResponse_Data(): StripeSetupPostResponse_Data {
  return { setupIntentId: '' };
}

export const StripeSetupPostResponse_Data = {
  encode(
    message: StripeSetupPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.setupIntentId !== '') {
      writer.uint32(10).string(message.setupIntentId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripeSetupPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripeSetupPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setupIntentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripeSetupPostResponse_Data {
    return {
      setupIntentId: isSet(object.setupIntentId)
        ? String(object.setupIntentId)
        : '',
    };
  },

  toJSON(message: StripeSetupPostResponse_Data): unknown {
    const obj: any = {};
    message.setupIntentId !== undefined &&
      (obj.setupIntentId = message.setupIntentId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripeSetupPostResponse_Data>, I>>(
    object: I
  ): StripeSetupPostResponse_Data {
    const message = createBaseStripeSetupPostResponse_Data();
    message.setupIntentId = object.setupIntentId ?? '';
    return message;
  },
};

function createBaseBusinessPaymentMethodGetRequest(): BusinessPaymentMethodGetRequest {
  return { UserId: '' };
}

export const BusinessPaymentMethodGetRequest = {
  encode(
    message: BusinessPaymentMethodGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: BusinessPaymentMethodGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessPaymentMethodGetRequest>, I>>(
    object: I
  ): BusinessPaymentMethodGetRequest {
    const message = createBaseBusinessPaymentMethodGetRequest();
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseBusinessPaymentMethodGetResponse(): BusinessPaymentMethodGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessPaymentMethodGetResponse = {
  encode(
    message: BusinessPaymentMethodGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessPaymentMethodGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessPaymentMethodGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessPaymentMethodGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessPaymentMethodGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessPaymentMethodGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodGetResponse>, I>
  >(object: I): BusinessPaymentMethodGetResponse {
    const message = createBaseBusinessPaymentMethodGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessPaymentMethodGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessPaymentMethodGetResponse_Data(): BusinessPaymentMethodGetResponse_Data {
  return { payment: undefined };
}

export const BusinessPaymentMethodGetResponse_Data = {
  encode(
    message: BusinessPaymentMethodGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payment !== undefined) {
      Payment.encode(message.payment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payment = Payment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodGetResponse_Data {
    return {
      payment: isSet(object.payment)
        ? Payment.fromJSON(object.payment)
        : undefined,
    };
  },

  toJSON(message: BusinessPaymentMethodGetResponse_Data): unknown {
    const obj: any = {};
    message.payment !== undefined &&
      (obj.payment = message.payment
        ? Payment.toJSON(message.payment)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodGetResponse_Data>, I>
  >(object: I): BusinessPaymentMethodGetResponse_Data {
    const message = createBaseBusinessPaymentMethodGetResponse_Data();
    message.payment =
      object.payment !== undefined && object.payment !== null
        ? Payment.fromPartial(object.payment)
        : undefined;
    return message;
  },
};

function createBaseBusinessPaymentMethodPostRequest(): BusinessPaymentMethodPostRequest {
  return { UserId: '', paymentMethodId: '' };
}

export const BusinessPaymentMethodPostRequest = {
  encode(
    message: BusinessPaymentMethodPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.paymentMethodId !== '') {
      writer.uint32(18).string(message.paymentMethodId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.paymentMethodId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      paymentMethodId: isSet(object.paymentMethodId)
        ? String(object.paymentMethodId)
        : '',
    };
  },

  toJSON(message: BusinessPaymentMethodPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.paymentMethodId !== undefined &&
      (obj.paymentMethodId = message.paymentMethodId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodPostRequest>, I>
  >(object: I): BusinessPaymentMethodPostRequest {
    const message = createBaseBusinessPaymentMethodPostRequest();
    message.UserId = object.UserId ?? '';
    message.paymentMethodId = object.paymentMethodId ?? '';
    return message;
  },
};

function createBaseBusinessPaymentMethodPostResponse(): BusinessPaymentMethodPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessPaymentMethodPostResponse = {
  encode(
    message: BusinessPaymentMethodPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessPaymentMethodPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessPaymentMethodPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPaymentMethodPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessPaymentMethodPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessPaymentMethodPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessPaymentMethodPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodPostResponse>, I>
  >(object: I): BusinessPaymentMethodPostResponse {
    const message = createBaseBusinessPaymentMethodPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessPaymentMethodPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessPaymentMethodPostResponse_Data(): BusinessPaymentMethodPostResponse_Data {
  return {};
}

export const BusinessPaymentMethodPostResponse_Data = {
  encode(
    _: BusinessPaymentMethodPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPaymentMethodPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPaymentMethodPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): BusinessPaymentMethodPostResponse_Data {
    return {};
  },

  toJSON(_: BusinessPaymentMethodPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessPaymentMethodPostResponse_Data>, I>
  >(_: I): BusinessPaymentMethodPostResponse_Data {
    const message = createBaseBusinessPaymentMethodPostResponse_Data();
    return message;
  },
};

function createBaseStripePaymentMethodPostRequest(): StripePaymentMethodPostRequest {
  return { UserId: '', paymentMethodId: '' };
}

export const StripePaymentMethodPostRequest = {
  encode(
    message: StripePaymentMethodPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.paymentMethodId !== '') {
      writer.uint32(18).string(message.paymentMethodId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripePaymentMethodPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripePaymentMethodPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.paymentMethodId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripePaymentMethodPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      paymentMethodId: isSet(object.paymentMethodId)
        ? String(object.paymentMethodId)
        : '',
    };
  },

  toJSON(message: StripePaymentMethodPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.paymentMethodId !== undefined &&
      (obj.paymentMethodId = message.paymentMethodId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripePaymentMethodPostRequest>, I>>(
    object: I
  ): StripePaymentMethodPostRequest {
    const message = createBaseStripePaymentMethodPostRequest();
    message.UserId = object.UserId ?? '';
    message.paymentMethodId = object.paymentMethodId ?? '';
    return message;
  },
};

function createBaseStripePaymentMethodPostResponse(): StripePaymentMethodPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const StripePaymentMethodPostResponse = {
  encode(
    message: StripePaymentMethodPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      StripePaymentMethodPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripePaymentMethodPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripePaymentMethodPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = StripePaymentMethodPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripePaymentMethodPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? StripePaymentMethodPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: StripePaymentMethodPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? StripePaymentMethodPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripePaymentMethodPostResponse>, I>>(
    object: I
  ): StripePaymentMethodPostResponse {
    const message = createBaseStripePaymentMethodPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? StripePaymentMethodPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseStripePaymentMethodPostResponse_Data(): StripePaymentMethodPostResponse_Data {
  return {};
}

export const StripePaymentMethodPostResponse_Data = {
  encode(
    _: StripePaymentMethodPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripePaymentMethodPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripePaymentMethodPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StripePaymentMethodPostResponse_Data {
    return {};
  },

  toJSON(_: StripePaymentMethodPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<StripePaymentMethodPostResponse_Data>, I>
  >(_: I): StripePaymentMethodPostResponse_Data {
    const message = createBaseStripePaymentMethodPostResponse_Data();
    return message;
  },
};

function createBaseStripeKeyGetRequest(): StripeKeyGetRequest {
  return { id: '' };
}

export const StripeKeyGetRequest = {
  encode(
    message: StripeKeyGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StripeKeyGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripeKeyGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripeKeyGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: StripeKeyGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripeKeyGetRequest>, I>>(
    object: I
  ): StripeKeyGetRequest {
    const message = createBaseStripeKeyGetRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseStripeKeyGetResponse(): StripeKeyGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const StripeKeyGetResponse = {
  encode(
    message: StripeKeyGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      StripeKeyGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripeKeyGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripeKeyGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = StripeKeyGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripeKeyGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? StripeKeyGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: StripeKeyGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? StripeKeyGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripeKeyGetResponse>, I>>(
    object: I
  ): StripeKeyGetResponse {
    const message = createBaseStripeKeyGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? StripeKeyGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseStripeKeyGetResponse_Data(): StripeKeyGetResponse_Data {
  return { key: '' };
}

export const StripeKeyGetResponse_Data = {
  encode(
    message: StripeKeyGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StripeKeyGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStripeKeyGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StripeKeyGetResponse_Data {
    return {
      key: isSet(object.key) ? String(object.key) : '',
    };
  },

  toJSON(message: StripeKeyGetResponse_Data): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StripeKeyGetResponse_Data>, I>>(
    object: I
  ): StripeKeyGetResponse_Data {
    const message = createBaseStripeKeyGetResponse_Data();
    message.key = object.key ?? '';
    return message;
  },
};

function createBaseFeedbacksPostRequest(): FeedbacksPostRequest {
  return {
    UserId: '',
    orderId: '',
    rate: 0,
    comment: '',
    serviceId: '',
    businessId: '',
  };
}

export const FeedbacksPostRequest = {
  encode(
    message: FeedbacksPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.orderId !== '') {
      writer.uint32(18).string(message.orderId);
    }
    if (message.rate !== 0) {
      writer.uint32(29).float(message.rate);
    }
    if (message.comment !== '') {
      writer.uint32(34).string(message.comment);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeedbacksPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedbacksPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.rate = reader.float();
          break;
        case 4:
          message.comment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedbacksPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
      rate: isSet(object.rate) ? Number(object.rate) : 0,
      comment: isSet(object.comment) ? String(object.comment) : '',
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : '',
      businessId: isSet(object.businessId) ? String(object.businessId) : '',
    };
  },

  toJSON(message: FeedbacksPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeedbacksPostRequest>, I>>(
    object: I
  ): FeedbacksPostRequest {
    const message = createBaseFeedbacksPostRequest();
    message.UserId = object.UserId ?? '';
    message.orderId = object.orderId ?? '';
    message.rate = object.rate ?? 0;
    message.comment = object.comment ?? '';
    return message;
  },
};

function createBaseFeedbacksPostResponse(): FeedbacksPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const FeedbacksPostResponse = {
  encode(
    message: FeedbacksPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      FeedbacksPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeedbacksPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedbacksPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = FeedbacksPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedbacksPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? FeedbacksPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: FeedbacksPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? FeedbacksPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeedbacksPostResponse>, I>>(
    object: I
  ): FeedbacksPostResponse {
    const message = createBaseFeedbacksPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? FeedbacksPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseFeedbacksPostResponse_Data(): FeedbacksPostResponse_Data {
  return { feedback: undefined };
}

export const FeedbacksPostResponse_Data = {
  encode(
    message: FeedbacksPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feedback !== undefined) {
      Feedback.encode(message.feedback, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeedbacksPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedbacksPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedback = Feedback.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedbacksPostResponse_Data {
    return {
      feedback: isSet(object.feedback)
        ? Feedback.fromJSON(object.feedback)
        : undefined,
    };
  },

  toJSON(message: FeedbacksPostResponse_Data): unknown {
    const obj: any = {};
    message.feedback !== undefined &&
      (obj.feedback = message.feedback
        ? Feedback.toJSON(message.feedback)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeedbacksPostResponse_Data>, I>>(
    object: I
  ): FeedbacksPostResponse_Data {
    const message = createBaseFeedbacksPostResponse_Data();
    message.feedback =
      object.feedback !== undefined && object.feedback !== null
        ? Feedback.fromPartial(object.feedback)
        : undefined;
    return message;
  },
};

function createBaseUpdateOrderStatusPostRequest(): UpdateOrderStatusPostRequest {
  return { UserId: '', orderId: '', Role: 0 };
}

export const UpdateOrderStatusPostRequest = {
  encode(
    message: UpdateOrderStatusPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.orderId !== '') {
      writer.uint32(18).string(message.orderId);
    }
    if (message.Role !== 0) {
      writer.uint32(24).int32(message.Role);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOrderStatusPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrderStatusPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.Role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOrderStatusPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
      Role: isSet(object.Role) ? rOLEFromJSON(object.Role) : 0,
    };
  },

  toJSON(message: UpdateOrderStatusPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.Role !== undefined && (obj.Role = rOLEToJSON(message.Role));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOrderStatusPostRequest>, I>>(
    object: I
  ): UpdateOrderStatusPostRequest {
    const message = createBaseUpdateOrderStatusPostRequest();
    message.UserId = object.UserId ?? '';
    message.orderId = object.orderId ?? '';
    message.Role = object.Role ?? 0;
    return message;
  },
};

function createBaseUpdateOrderStatusPostResponse(): UpdateOrderStatusPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const UpdateOrderStatusPostResponse = {
  encode(
    message: UpdateOrderStatusPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      UpdateOrderStatusPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOrderStatusPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrderStatusPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = UpdateOrderStatusPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOrderStatusPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? UpdateOrderStatusPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: UpdateOrderStatusPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? UpdateOrderStatusPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateOrderStatusPostResponse>, I>>(
    object: I
  ): UpdateOrderStatusPostResponse {
    const message = createBaseUpdateOrderStatusPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? UpdateOrderStatusPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseUpdateOrderStatusPostResponse_Data(): UpdateOrderStatusPostResponse_Data {
  return {};
}

export const UpdateOrderStatusPostResponse_Data = {
  encode(
    _: UpdateOrderStatusPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateOrderStatusPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrderStatusPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateOrderStatusPostResponse_Data {
    return {};
  },

  toJSON(_: UpdateOrderStatusPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<UpdateOrderStatusPostResponse_Data>, I>
  >(_: I): UpdateOrderStatusPostResponse_Data {
    const message = createBaseUpdateOrderStatusPostResponse_Data();
    return message;
  },
};

function createBaseCategoryGetRequest(): CategoryGetRequest {
  return { id: '' };
}

export const CategoryGetRequest = {
  encode(
    message: CategoryGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CategoryGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoryGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: CategoryGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryGetRequest>, I>>(
    object: I
  ): CategoryGetRequest {
    const message = createBaseCategoryGetRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseCategoryGetResponse(): CategoryGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const CategoryGetResponse = {
  encode(
    message: CategoryGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      CategoryGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CategoryGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = CategoryGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoryGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? CategoryGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: CategoryGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? CategoryGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryGetResponse>, I>>(
    object: I
  ): CategoryGetResponse {
    const message = createBaseCategoryGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? CategoryGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseCategoryGetResponse_Data(): CategoryGetResponse_Data {
  return { category: undefined };
}

export const CategoryGetResponse_Data = {
  encode(
    message: CategoryGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.category !== undefined) {
      Category.encode(message.category, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CategoryGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = Category.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoryGetResponse_Data {
    return {
      category: isSet(object.category)
        ? Category.fromJSON(object.category)
        : undefined,
    };
  },

  toJSON(message: CategoryGetResponse_Data): unknown {
    const obj: any = {};
    message.category !== undefined &&
      (obj.category = message.category
        ? Category.toJSON(message.category)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryGetResponse_Data>, I>>(
    object: I
  ): CategoryGetResponse_Data {
    const message = createBaseCategoryGetResponse_Data();
    message.category =
      object.category !== undefined && object.category !== null
        ? Category.fromPartial(object.category)
        : undefined;
    return message;
  },
};

function createBaseOrdersPostRequest(): OrdersPostRequest {
  return { businessIds: [], zipcode: '', UserId: '', categoryId: '' };
}

export const OrdersPostRequest = {
  encode(
    message: OrdersPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.businessIds) {
      writer.uint32(10).string(v!);
    }
    if (message.zipcode !== '') {
      writer.uint32(18).string(message.zipcode);
    }
    if (message.UserId !== '') {
      writer.uint32(26).string(message.UserId);
    }
    if (message.categoryId !== '') {
      writer.uint32(34).string(message.categoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrdersPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.businessIds.push(reader.string());
          break;
        case 2:
          message.zipcode = reader.string();
          break;
        case 3:
          message.UserId = reader.string();
          break;
        case 4:
          message.categoryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersPostRequest {
    return {
      businessIds: Array.isArray(object?.businessIds)
        ? object.businessIds.map((e: any) => String(e))
        : [],
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
    };
  },

  toJSON(message: OrdersPostRequest): unknown {
    const obj: any = {};
    if (message.businessIds) {
      obj.businessIds = message.businessIds.map((e) => e);
    } else {
      obj.businessIds = [];
    }
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersPostRequest>, I>>(
    object: I
  ): OrdersPostRequest {
    const message = createBaseOrdersPostRequest();
    message.businessIds = object.businessIds?.map((e) => e) || [];
    message.zipcode = object.zipcode ?? '';
    message.UserId = object.UserId ?? '';
    message.categoryId = object.categoryId ?? '';
    return message;
  },
};

function createBaseOrdersPostResponse(): OrdersPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const OrdersPostResponse = {
  encode(
    message: OrdersPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      OrdersPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrdersPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = OrdersPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? OrdersPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: OrdersPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? OrdersPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersPostResponse>, I>>(
    object: I
  ): OrdersPostResponse {
    const message = createBaseOrdersPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? OrdersPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseOrdersPostResponse_Data(): OrdersPostResponse_Data {
  return {};
}

export const OrdersPostResponse_Data = {
  encode(
    _: OrdersPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): OrdersPostResponse_Data {
    return {};
  },

  toJSON(_: OrdersPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersPostResponse_Data>, I>>(
    _: I
  ): OrdersPostResponse_Data {
    const message = createBaseOrdersPostResponse_Data();
    return message;
  },
};

function createBaseBusinessRatingGetRequest(): BusinessRatingGetRequest {
  return { id: '' };
}

export const BusinessRatingGetRequest = {
  encode(
    message: BusinessRatingGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessRatingGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessRatingGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessRatingGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: BusinessRatingGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessRatingGetRequest>, I>>(
    object: I
  ): BusinessRatingGetRequest {
    const message = createBaseBusinessRatingGetRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseBusinessRatingGetResponse(): BusinessRatingGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessRatingGetResponse = {
  encode(
    message: BusinessRatingGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessRatingGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessRatingGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessRatingGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessRatingGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessRatingGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessRatingGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessRatingGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessRatingGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessRatingGetResponse>, I>>(
    object: I
  ): BusinessRatingGetResponse {
    const message = createBaseBusinessRatingGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessRatingGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessRatingGetResponse_Data(): BusinessRatingGetResponse_Data {
  return { rate: [] };
}

export const BusinessRatingGetResponse_Data = {
  encode(
    message: BusinessRatingGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rate) {
      Rating.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessRatingGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessRatingGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate.push(Rating.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessRatingGetResponse_Data {
    return {
      rate: Array.isArray(object?.rate)
        ? object.rate.map((e: any) => Rating.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessRatingGetResponse_Data): unknown {
    const obj: any = {};
    if (message.rate) {
      obj.rate = message.rate.map((e) => (e ? Rating.toJSON(e) : undefined));
    } else {
      obj.rate = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessRatingGetResponse_Data>, I>>(
    object: I
  ): BusinessRatingGetResponse_Data {
    const message = createBaseBusinessRatingGetResponse_Data();
    message.rate = object.rate?.map((e) => Rating.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessFeedbacksGetRequest(): BusinessFeedbacksGetRequest {
  return { id: '', offset: '', limit: '', rate: '' };
}

export const BusinessFeedbacksGetRequest = {
  encode(
    message: BusinessFeedbacksGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.offset !== '') {
      writer.uint32(18).string(message.offset);
    }
    if (message.limit !== '') {
      writer.uint32(26).string(message.limit);
    }
    if (message.rate !== '') {
      writer.uint32(34).string(message.rate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessFeedbacksGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessFeedbacksGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.offset = reader.string();
          break;
        case 3:
          message.limit = reader.string();
          break;
        case 4:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessFeedbacksGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      offset: isSet(object.offset) ? String(object.offset) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
      rate: isSet(object.rate) ? String(object.rate) : '',
    };
  },

  toJSON(message: BusinessFeedbacksGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessFeedbacksGetRequest>, I>>(
    object: I
  ): BusinessFeedbacksGetRequest {
    const message = createBaseBusinessFeedbacksGetRequest();
    message.id = object.id ?? '';
    message.offset = object.offset ?? '';
    message.limit = object.limit ?? '';
    message.rate = object.rate ?? '';
    return message;
  },
};

function createBaseBusinessFeedbacksGetResponse(): BusinessFeedbacksGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessFeedbacksGetResponse = {
  encode(
    message: BusinessFeedbacksGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessFeedbacksGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessFeedbacksGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessFeedbacksGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessFeedbacksGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessFeedbacksGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessFeedbacksGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessFeedbacksGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessFeedbacksGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessFeedbacksGetResponse>, I>>(
    object: I
  ): BusinessFeedbacksGetResponse {
    const message = createBaseBusinessFeedbacksGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessFeedbacksGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessFeedbacksGetResponse_Data(): BusinessFeedbacksGetResponse_Data {
  return { pagination: undefined, result: [] };
}

export const BusinessFeedbacksGetResponse_Data = {
  encode(
    message: BusinessFeedbacksGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.result) {
      Feedback.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessFeedbacksGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessFeedbacksGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        case 2:
          message.result.push(Feedback.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessFeedbacksGetResponse_Data {
    return {
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Feedback.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessFeedbacksGetResponse_Data): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? Feedback.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessFeedbacksGetResponse_Data>, I>
  >(object: I): BusinessFeedbacksGetResponse_Data {
    const message = createBaseBusinessFeedbacksGetResponse_Data();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    message.result = object.result?.map((e) => Feedback.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessServicesPutRequest(): BusinessServicesPutRequest {
  return { categoryIds: [], id: '', UserId: '' };
}

export const BusinessServicesPutRequest = {
  encode(
    message: BusinessServicesPutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.categoryIds) {
      writer.uint32(10).string(v!);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(26).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessServicesPutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessServicesPutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryIds.push(reader.string());
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessServicesPutRequest {
    return {
      categoryIds: Array.isArray(object?.categoryIds)
        ? object.categoryIds.map((e: any) => String(e))
        : [],
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: BusinessServicesPutRequest): unknown {
    const obj: any = {};
    if (message.categoryIds) {
      obj.categoryIds = message.categoryIds.map((e) => e);
    } else {
      obj.categoryIds = [];
    }
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessServicesPutRequest>, I>>(
    object: I
  ): BusinessServicesPutRequest {
    const message = createBaseBusinessServicesPutRequest();
    message.categoryIds = object.categoryIds?.map((e) => e) || [];
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseBusinessServicesPutResponse(): BusinessServicesPutResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessServicesPutResponse = {
  encode(
    message: BusinessServicesPutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessServicesPutResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessServicesPutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessServicesPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessServicesPutResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessServicesPutResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessServicesPutResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessServicesPutResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessServicesPutResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessServicesPutResponse>, I>>(
    object: I
  ): BusinessServicesPutResponse {
    const message = createBaseBusinessServicesPutResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessServicesPutResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessServicesPutResponse_Data(): BusinessServicesPutResponse_Data {
  return { result: [] };
}

export const BusinessServicesPutResponse_Data = {
  encode(
    message: BusinessServicesPutResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.result) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessServicesPutResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessServicesPutResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessServicesPutResponse_Data {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Service.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessServicesPutResponse_Data): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessServicesPutResponse_Data>, I>
  >(object: I): BusinessServicesPutResponse_Data {
    const message = createBaseBusinessServicesPutResponse_Data();
    message.result = object.result?.map((e) => Service.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCategoriesGetRequest(): CategoriesGetRequest {
  return { query: '', limit: '', offset: '' };
}

export const CategoriesGetRequest = {
  encode(
    message: CategoriesGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.query !== '') {
      writer.uint32(10).string(message.query);
    }
    if (message.limit !== '') {
      writer.uint32(18).string(message.limit);
    }
    if (message.offset !== '') {
      writer.uint32(26).string(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CategoriesGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoriesGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.query = reader.string();
          break;
        case 2:
          message.limit = reader.string();
          break;
        case 3:
          message.offset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoriesGetRequest {
    return {
      query: isSet(object.query) ? String(object.query) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
      offset: isSet(object.offset) ? String(object.offset) : '',
    };
  },

  toJSON(message: CategoriesGetRequest): unknown {
    const obj: any = {};
    message.query !== undefined && (obj.query = message.query);
    message.limit !== undefined && (obj.limit = message.limit);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoriesGetRequest>, I>>(
    object: I
  ): CategoriesGetRequest {
    const message = createBaseCategoriesGetRequest();
    message.query = object.query ?? '';
    message.limit = object.limit ?? '';
    message.offset = object.offset ?? '';
    return message;
  },
};

function createBaseCategoriesGetResponse(): CategoriesGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const CategoriesGetResponse = {
  encode(
    message: CategoriesGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      CategoriesGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CategoriesGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoriesGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = CategoriesGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoriesGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? CategoriesGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: CategoriesGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? CategoriesGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoriesGetResponse>, I>>(
    object: I
  ): CategoriesGetResponse {
    const message = createBaseCategoriesGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? CategoriesGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseCategoriesGetResponse_Data(): CategoriesGetResponse_Data {
  return { result: [], pagination: undefined };
}

export const CategoriesGetResponse_Data = {
  encode(
    message: CategoriesGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.result) {
      Category.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CategoriesGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoriesGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(Category.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoriesGetResponse_Data {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Category.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: CategoriesGetResponse_Data): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? Category.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoriesGetResponse_Data>, I>>(
    object: I
  ): CategoriesGetResponse_Data {
    const message = createBaseCategoriesGetResponse_Data();
    message.result = object.result?.map((e) => Category.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseBusinessesGetRequest(): BusinessesGetRequest {
  return {
    categoryId: '',
    zipcode: '',
    offset: '',
    limit: '',
    mail: '',
    phone: '',
    query: 0,
  };
}

export const BusinessesGetRequest = {
  encode(
    message: BusinessesGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.categoryId !== '') {
      writer.uint32(10).string(message.categoryId);
    }
    if (message.zipcode !== '') {
      writer.uint32(18).string(message.zipcode);
    }
    if (message.offset !== '') {
      writer.uint32(26).string(message.offset);
    }
    if (message.limit !== '') {
      writer.uint32(34).string(message.limit);
    }
    if (message.mail !== '') {
      writer.uint32(42).string(message.mail);
    }
    if (message.phone !== '') {
      writer.uint32(50).string(message.phone);
    }
    if (message.query !== 0) {
      writer.uint32(56).int32(message.query);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessesGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessesGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryId = reader.string();
          break;
        case 2:
          message.zipcode = reader.string();
          break;
        case 3:
          message.offset = reader.string();
          break;
        case 4:
          message.limit = reader.string();
          break;
        case 5:
          message.mail = reader.string();
          break;
        case 6:
          message.phone = reader.string();
          break;
        case 7:
          message.query = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessesGetRequest {
    return {
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      offset: isSet(object.offset) ? String(object.offset) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
      mail: isSet(object.mail) ? String(object.mail) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
      query: isSet(object.query) ? sortQueryFromJSON(object.query) : 0,
    };
  },

  toJSON(message: BusinessesGetRequest): unknown {
    const obj: any = {};
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    message.mail !== undefined && (obj.mail = message.mail);
    message.phone !== undefined && (obj.phone = message.phone);
    message.query !== undefined && (obj.query = sortQueryToJSON(message.query));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessesGetRequest>, I>>(
    object: I
  ): BusinessesGetRequest {
    const message = createBaseBusinessesGetRequest();
    message.categoryId = object.categoryId ?? '';
    message.zipcode = object.zipcode ?? '';
    message.offset = object.offset ?? '';
    message.limit = object.limit ?? '';
    message.mail = object.mail ?? '';
    message.phone = object.phone ?? '';
    message.query = object.query ?? 0;
    return message;
  },
};

function createBaseBusinessesGetResponse(): BusinessesGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessesGetResponse = {
  encode(
    message: BusinessesGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessesGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessesGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessesGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessesGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessesGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessesGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessesGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessesGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessesGetResponse>, I>>(
    object: I
  ): BusinessesGetResponse {
    const message = createBaseBusinessesGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessesGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessesGetResponse_Data(): BusinessesGetResponse_Data {
  return { result: [], pagination: undefined };
}

export const BusinessesGetResponse_Data = {
  encode(
    message: BusinessesGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.result) {
      BusinessRating.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessesGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessesGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(BusinessRating.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessesGetResponse_Data {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => BusinessRating.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: BusinessesGetResponse_Data): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? BusinessRating.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessesGetResponse_Data>, I>>(
    object: I
  ): BusinessesGetResponse_Data {
    const message = createBaseBusinessesGetResponse_Data();
    message.result =
      object.result?.map((e) => BusinessRating.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseAuthCheckGetRequest(): AuthCheckGetRequest {
  return { identifier: '' };
}

export const AuthCheckGetRequest = {
  encode(
    message: AuthCheckGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== '') {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthCheckGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthCheckGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthCheckGetRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : '',
    };
  },

  toJSON(message: AuthCheckGetRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthCheckGetRequest>, I>>(
    object: I
  ): AuthCheckGetRequest {
    const message = createBaseAuthCheckGetRequest();
    message.identifier = object.identifier ?? '';
    return message;
  },
};

function createBaseAuthCheckGetResponse(): AuthCheckGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthCheckGetResponse = {
  encode(
    message: AuthCheckGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthCheckGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthCheckGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthCheckGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthCheckGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthCheckGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthCheckGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthCheckGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthCheckGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthCheckGetResponse>, I>>(
    object: I
  ): AuthCheckGetResponse {
    const message = createBaseAuthCheckGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthCheckGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthCheckGetResponse_Data(): AuthCheckGetResponse_Data {
  return { existed: false };
}

export const AuthCheckGetResponse_Data = {
  encode(
    message: AuthCheckGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.existed === true) {
      writer.uint32(8).bool(message.existed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthCheckGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthCheckGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.existed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthCheckGetResponse_Data {
    return {
      existed: isSet(object.existed) ? Boolean(object.existed) : false,
    };
  },

  toJSON(message: AuthCheckGetResponse_Data): unknown {
    const obj: any = {};
    message.existed !== undefined && (obj.existed = message.existed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthCheckGetResponse_Data>, I>>(
    object: I
  ): AuthCheckGetResponse_Data {
    const message = createBaseAuthCheckGetResponse_Data();
    message.existed = object.existed ?? false;
    return message;
  },
};

function createBasePagination(): Pagination {
  return { offset: 0, limit: 0, total: 0 };
}

export const Pagination = {
  encode(
    message: Pagination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).int32(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    if (message.total !== 0) {
      writer.uint32(24).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.int32();
          break;
        case 2:
          message.limit = reader.int32();
          break;
        case 3:
          message.total = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pagination {
    return {
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pagination>, I>>(
    object: I
  ): Pagination {
    const message = createBasePagination();
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseCategory(): Category {
  return { id: '', name: '', totalProvider: 0, fee: 0, image: '' };
}

export const Category = {
  encode(
    message: Category,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.totalProvider !== 0) {
      writer.uint32(24).int64(message.totalProvider);
    }
    if (message.fee !== 0) {
      writer.uint32(37).float(message.fee);
    }
    if (message.image !== '') {
      writer.uint32(42).string(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Category {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.totalProvider = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.fee = reader.float();
          break;
        case 5:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Category {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      totalProvider: isSet(object.totalProvider)
        ? Number(object.totalProvider)
        : 0,
      fee: isSet(object.fee) ? Number(object.fee) : 0,
      image: isSet(object.image) ? String(object.image) : '',
    };
  },

  toJSON(message: Category): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.totalProvider !== undefined &&
      (obj.totalProvider = Math.round(message.totalProvider));
    message.fee !== undefined && (obj.fee = message.fee);
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Category>, I>>(object: I): Category {
    const message = createBaseCategory();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.totalProvider = object.totalProvider ?? 0;
    message.fee = object.fee ?? 0;
    message.image = object.image ?? '';
    return message;
  },
};

function createBaseBusinessServiceGetRequest(): BusinessServiceGetRequest {
  return { id: '' };
}

export const BusinessServiceGetRequest = {
  encode(
    message: BusinessServiceGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessServiceGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessServiceGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessServiceGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: BusinessServiceGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessServiceGetRequest>, I>>(
    object: I
  ): BusinessServiceGetRequest {
    const message = createBaseBusinessServiceGetRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseBusinessServiceGetResponse(): BusinessServiceGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessServiceGetResponse = {
  encode(
    message: BusinessServiceGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessServiceGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessServiceGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessServiceGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessServiceGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessServiceGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessServiceGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessServiceGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessServiceGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessServiceGetResponse>, I>>(
    object: I
  ): BusinessServiceGetResponse {
    const message = createBaseBusinessServiceGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessServiceGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessServiceGetResponse_Data(): BusinessServiceGetResponse_Data {
  return { result: [] };
}

export const BusinessServiceGetResponse_Data = {
  encode(
    message: BusinessServiceGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.result) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessServiceGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessServiceGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessServiceGetResponse_Data {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Service.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessServiceGetResponse_Data): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessServiceGetResponse_Data>, I>>(
    object: I
  ): BusinessServiceGetResponse_Data {
    const message = createBaseBusinessServiceGetResponse_Data();
    message.result = object.result?.map((e) => Service.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessNearGetRequest(): BusinessNearGetRequest {
  return { UserId: '' };
}

export const BusinessNearGetRequest = {
  encode(
    message: BusinessNearGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessNearGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessNearGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessNearGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: BusinessNearGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessNearGetRequest>, I>>(
    object: I
  ): BusinessNearGetRequest {
    const message = createBaseBusinessNearGetRequest();
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseBusinessNearGetResponse(): BusinessNearGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessNearGetResponse = {
  encode(
    message: BusinessNearGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessNearGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessNearGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessNearGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessNearGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessNearGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessNearGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessNearGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessNearGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessNearGetResponse>, I>>(
    object: I
  ): BusinessNearGetResponse {
    const message = createBaseBusinessNearGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessNearGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessNearGetResponse_Data(): BusinessNearGetResponse_Data {
  return { result: [] };
}

export const BusinessNearGetResponse_Data = {
  encode(
    message: BusinessNearGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.result) {
      BusinessRating.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessNearGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessNearGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(BusinessRating.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessNearGetResponse_Data {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => BusinessRating.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessNearGetResponse_Data): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? BusinessRating.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessNearGetResponse_Data>, I>>(
    object: I
  ): BusinessNearGetResponse_Data {
    const message = createBaseBusinessNearGetResponse_Data();
    message.result =
      object.result?.map((e) => BusinessRating.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrdersGetRequest(): OrdersGetRequest {
  return {
    UserId: '',
    status: 0,
    offset: '',
    limit: '',
    serviceId: '',
    zipcode: '',
  };
}

export const OrdersGetRequest = {
  encode(
    message: OrdersGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.offset !== '') {
      writer.uint32(26).string(message.offset);
    }
    if (message.limit !== '') {
      writer.uint32(34).string(message.limit);
    }
    if (message.serviceId !== '') {
      writer.uint32(42).string(message.serviceId);
    }
    if (message.zipcode !== '') {
      writer.uint32(50).string(message.zipcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrdersGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.offset = reader.string();
          break;
        case 4:
          message.limit = reader.string();
          break;
        case 5:
          message.serviceId = reader.string();
          break;
        case 6:
          message.zipcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
      offset: isSet(object.offset) ? String(object.offset) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
      serviceId: isSet(object.serviceId) ? String(object.serviceId) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
    };
  },

  toJSON(message: OrdersGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.status !== undefined &&
      (obj.status = orderStatusToJSON(message.status));
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersGetRequest>, I>>(
    object: I
  ): OrdersGetRequest {
    const message = createBaseOrdersGetRequest();
    message.UserId = object.UserId ?? '';
    message.status = object.status ?? 0;
    message.offset = object.offset ?? '';
    message.limit = object.limit ?? '';
    message.serviceId = object.serviceId ?? '';
    message.zipcode = object.zipcode ?? '';
    return message;
  },
};

function createBaseOrdersGetResponse(): OrdersGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const OrdersGetResponse = {
  encode(
    message: OrdersGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      OrdersGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrdersGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = OrdersGetResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? OrdersGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: OrdersGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? OrdersGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersGetResponse>, I>>(
    object: I
  ): OrdersGetResponse {
    const message = createBaseOrdersGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? OrdersGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseOrdersGetResponse_Data(): OrdersGetResponse_Data {
  return { pagination: undefined, result: [] };
}

export const OrdersGetResponse_Data = {
  encode(
    message: OrdersGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.result) {
      Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        case 2:
          message.result.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersGetResponse_Data {
    return {
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Order.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OrdersGetResponse_Data): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    if (message.result) {
      obj.result = message.result.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersGetResponse_Data>, I>>(
    object: I
  ): OrdersGetResponse_Data {
    const message = createBaseOrdersGetResponse_Data();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    message.result = object.result?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessInterestGetRequest(): BusinessInterestGetRequest {
  return {};
}

export const BusinessInterestGetRequest = {
  encode(
    _: BusinessInterestGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessInterestGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessInterestGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): BusinessInterestGetRequest {
    return {};
  },

  toJSON(_: BusinessInterestGetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessInterestGetRequest>, I>>(
    _: I
  ): BusinessInterestGetRequest {
    const message = createBaseBusinessInterestGetRequest();
    return message;
  },
};

function createBaseBusinessInterestGetResponse(): BusinessInterestGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessInterestGetResponse = {
  encode(
    message: BusinessInterestGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessInterestGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessInterestGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessInterestGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessInterestGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessInterestGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessInterestGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessInterestGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessInterestGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessInterestGetResponse>, I>>(
    object: I
  ): BusinessInterestGetResponse {
    const message = createBaseBusinessInterestGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessInterestGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessInterestGetResponse_Data(): BusinessInterestGetResponse_Data {
  return { result: [] };
}

export const BusinessInterestGetResponse_Data = {
  encode(
    message: BusinessInterestGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.result) {
      BusinessRating.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessInterestGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessInterestGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(BusinessRating.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessInterestGetResponse_Data {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => BusinessRating.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BusinessInterestGetResponse_Data): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? BusinessRating.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessInterestGetResponse_Data>, I>
  >(object: I): BusinessInterestGetResponse_Data {
    const message = createBaseBusinessInterestGetResponse_Data();
    message.result =
      object.result?.map((e) => BusinessRating.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUploadUrlPostRequest(): UploadUrlPostRequest {
  return { UserId: '', filename: '', contentLength: 0 };
}

export const UploadUrlPostRequest = {
  encode(
    message: UploadUrlPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.filename !== '') {
      writer.uint32(18).string(message.filename);
    }
    if (message.contentLength !== 0) {
      writer.uint32(24).int64(message.contentLength);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UploadUrlPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadUrlPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.filename = reader.string();
          break;
        case 3:
          message.contentLength = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UploadUrlPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      filename: isSet(object.filename) ? String(object.filename) : '',
      contentLength: isSet(object.contentLength)
        ? Number(object.contentLength)
        : 0,
    };
  },

  toJSON(message: UploadUrlPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.filename !== undefined && (obj.filename = message.filename);
    message.contentLength !== undefined &&
      (obj.contentLength = Math.round(message.contentLength));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UploadUrlPostRequest>, I>>(
    object: I
  ): UploadUrlPostRequest {
    const message = createBaseUploadUrlPostRequest();
    message.UserId = object.UserId ?? '';
    message.filename = object.filename ?? '';
    message.contentLength = object.contentLength ?? 0;
    return message;
  },
};

function createBaseUploadUrlPostResponse(): UploadUrlPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const UploadUrlPostResponse = {
  encode(
    message: UploadUrlPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      UploadUrlPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UploadUrlPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadUrlPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = UploadUrlPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UploadUrlPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? UploadUrlPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: UploadUrlPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? UploadUrlPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UploadUrlPostResponse>, I>>(
    object: I
  ): UploadUrlPostResponse {
    const message = createBaseUploadUrlPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? UploadUrlPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseUploadUrlPostResponse_Data(): UploadUrlPostResponse_Data {
  return {};
}

export const UploadUrlPostResponse_Data = {
  encode(
    _: UploadUrlPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UploadUrlPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadUrlPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UploadUrlPostResponse_Data {
    return {};
  },

  toJSON(_: UploadUrlPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UploadUrlPostResponse_Data>, I>>(
    _: I
  ): UploadUrlPostResponse_Data {
    const message = createBaseUploadUrlPostResponse_Data();
    return message;
  },
};

function createBaseAdminBanUserPostRequest(): AdminBanUserPostRequest {
  return { id: '', UserId: '' };
}

export const AdminBanUserPostRequest = {
  encode(
    message: AdminBanUserPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBanUserPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBanUserPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBanUserPostRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: AdminBanUserPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBanUserPostRequest>, I>>(
    object: I
  ): AdminBanUserPostRequest {
    const message = createBaseAdminBanUserPostRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseAdminBanUserPostResponse(): AdminBanUserPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminBanUserPostResponse = {
  encode(
    message: AdminBanUserPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminBanUserPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBanUserPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBanUserPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminBanUserPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBanUserPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminBanUserPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminBanUserPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminBanUserPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBanUserPostResponse>, I>>(
    object: I
  ): AdminBanUserPostResponse {
    const message = createBaseAdminBanUserPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminBanUserPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminBanUserPostResponse_Data(): AdminBanUserPostResponse_Data {
  return {};
}

export const AdminBanUserPostResponse_Data = {
  encode(
    _: AdminBanUserPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBanUserPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBanUserPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminBanUserPostResponse_Data {
    return {};
  },

  toJSON(_: AdminBanUserPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBanUserPostResponse_Data>, I>>(
    _: I
  ): AdminBanUserPostResponse_Data {
    const message = createBaseAdminBanUserPostResponse_Data();
    return message;
  },
};

function createBaseAdminUsersUnbanPostRequest(): AdminUsersUnbanPostRequest {
  return { id: '', UserId: '' };
}

export const AdminUsersUnbanPostRequest = {
  encode(
    message: AdminUsersUnbanPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersUnbanPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersUnbanPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminUsersUnbanPostRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: AdminUsersUnbanPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminUsersUnbanPostRequest>, I>>(
    object: I
  ): AdminUsersUnbanPostRequest {
    const message = createBaseAdminUsersUnbanPostRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseAdminUsersUnbanPostResponse(): AdminUsersUnbanPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminUsersUnbanPostResponse = {
  encode(
    message: AdminUsersUnbanPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminUsersUnbanPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersUnbanPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersUnbanPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminUsersUnbanPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminUsersUnbanPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminUsersUnbanPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminUsersUnbanPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminUsersUnbanPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminUsersUnbanPostResponse>, I>>(
    object: I
  ): AdminUsersUnbanPostResponse {
    const message = createBaseAdminUsersUnbanPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminUsersUnbanPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminUsersUnbanPostResponse_Data(): AdminUsersUnbanPostResponse_Data {
  return {};
}

export const AdminUsersUnbanPostResponse_Data = {
  encode(
    _: AdminUsersUnbanPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersUnbanPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersUnbanPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminUsersUnbanPostResponse_Data {
    return {};
  },

  toJSON(_: AdminUsersUnbanPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminUsersUnbanPostResponse_Data>, I>
  >(_: I): AdminUsersUnbanPostResponse_Data {
    const message = createBaseAdminUsersUnbanPostResponse_Data();
    return message;
  },
};

function createBaseAdminUsersDeletePostRequest(): AdminUsersDeletePostRequest {
  return { id: '', UserId: '' };
}

export const AdminUsersDeletePostRequest = {
  encode(
    message: AdminUsersDeletePostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersDeletePostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersDeletePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminUsersDeletePostRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: AdminUsersDeletePostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminUsersDeletePostRequest>, I>>(
    object: I
  ): AdminUsersDeletePostRequest {
    const message = createBaseAdminUsersDeletePostRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseAdminUsersDeletePostResponse(): AdminUsersDeletePostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminUsersDeletePostResponse = {
  encode(
    message: AdminUsersDeletePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminUsersDeletePostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersDeletePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersDeletePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminUsersDeletePostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminUsersDeletePostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminUsersDeletePostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminUsersDeletePostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminUsersDeletePostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminUsersDeletePostResponse>, I>>(
    object: I
  ): AdminUsersDeletePostResponse {
    const message = createBaseAdminUsersDeletePostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminUsersDeletePostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminUsersDeletePostResponse_Data(): AdminUsersDeletePostResponse_Data {
  return {};
}

export const AdminUsersDeletePostResponse_Data = {
  encode(
    _: AdminUsersDeletePostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersDeletePostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersDeletePostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminUsersDeletePostResponse_Data {
    return {};
  },

  toJSON(_: AdminUsersDeletePostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminUsersDeletePostResponse_Data>, I>
  >(_: I): AdminUsersDeletePostResponse_Data {
    const message = createBaseAdminUsersDeletePostResponse_Data();
    return message;
  },
};

function createBaseAdminBusinessesUnbanPostRequest(): AdminBusinessesUnbanPostRequest {
  return { id: '', UserId: '' };
}

export const AdminBusinessesUnbanPostRequest = {
  encode(
    message: AdminBusinessesUnbanPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessesUnbanPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessesUnbanPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessesUnbanPostRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: AdminBusinessesUnbanPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessesUnbanPostRequest>, I>>(
    object: I
  ): AdminBusinessesUnbanPostRequest {
    const message = createBaseAdminBusinessesUnbanPostRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseAdminBusinessesUnbanPostResponse(): AdminBusinessesUnbanPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminBusinessesUnbanPostResponse = {
  encode(
    message: AdminBusinessesUnbanPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminBusinessesUnbanPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessesUnbanPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessesUnbanPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminBusinessesUnbanPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessesUnbanPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminBusinessesUnbanPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminBusinessesUnbanPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminBusinessesUnbanPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminBusinessesUnbanPostResponse>, I>
  >(object: I): AdminBusinessesUnbanPostResponse {
    const message = createBaseAdminBusinessesUnbanPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminBusinessesUnbanPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminBusinessesUnbanPostResponse_Data(): AdminBusinessesUnbanPostResponse_Data {
  return {};
}

export const AdminBusinessesUnbanPostResponse_Data = {
  encode(
    _: AdminBusinessesUnbanPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessesUnbanPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessesUnbanPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminBusinessesUnbanPostResponse_Data {
    return {};
  },

  toJSON(_: AdminBusinessesUnbanPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminBusinessesUnbanPostResponse_Data>, I>
  >(_: I): AdminBusinessesUnbanPostResponse_Data {
    const message = createBaseAdminBusinessesUnbanPostResponse_Data();
    return message;
  },
};

function createBaseAuthForgotResetPostRequest(): AuthForgotResetPostRequest {
  return { otpId: '', encryptedPrivateKey: '', publicKey: '', otp: '' };
}

export const AuthForgotResetPostRequest = {
  encode(
    message: AuthForgotResetPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    if (message.encryptedPrivateKey !== '') {
      writer.uint32(18).string(message.encryptedPrivateKey);
    }
    if (message.publicKey !== '') {
      writer.uint32(26).string(message.publicKey);
    }
    if (message.otp !== '') {
      writer.uint32(34).string(message.otp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthForgotResetPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthForgotResetPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        case 2:
          message.encryptedPrivateKey = reader.string();
          break;
        case 3:
          message.publicKey = reader.string();
          break;
        case 4:
          message.otp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthForgotResetPostRequest {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
      encryptedPrivateKey: isSet(object.encryptedPrivateKey)
        ? String(object.encryptedPrivateKey)
        : '',
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : '',
      otp: isSet(object.otp) ? String(object.otp) : '',
    };
  },

  toJSON(message: AuthForgotResetPostRequest): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    message.encryptedPrivateKey !== undefined &&
      (obj.encryptedPrivateKey = message.encryptedPrivateKey);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.otp !== undefined && (obj.otp = message.otp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthForgotResetPostRequest>, I>>(
    object: I
  ): AuthForgotResetPostRequest {
    const message = createBaseAuthForgotResetPostRequest();
    message.otpId = object.otpId ?? '';
    message.encryptedPrivateKey = object.encryptedPrivateKey ?? '';
    message.publicKey = object.publicKey ?? '';
    message.otp = object.otp ?? '';
    return message;
  },
};

function createBaseAuthForgotResetPostResponse(): AuthForgotResetPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthForgotResetPostResponse = {
  encode(
    message: AuthForgotResetPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthForgotResetPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthForgotResetPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthForgotResetPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthForgotResetPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthForgotResetPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthForgotResetPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthForgotResetPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthForgotResetPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthForgotResetPostResponse>, I>>(
    object: I
  ): AuthForgotResetPostResponse {
    const message = createBaseAuthForgotResetPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthForgotResetPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthForgotResetPostResponse_Data(): AuthForgotResetPostResponse_Data {
  return {};
}

export const AuthForgotResetPostResponse_Data = {
  encode(
    _: AuthForgotResetPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthForgotResetPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthForgotResetPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AuthForgotResetPostResponse_Data {
    return {};
  },

  toJSON(_: AuthForgotResetPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AuthForgotResetPostResponse_Data>, I>
  >(_: I): AuthForgotResetPostResponse_Data {
    const message = createBaseAuthForgotResetPostResponse_Data();
    return message;
  },
};

function createBaseAuthForgotPostRequest(): AuthForgotPostRequest {
  return { mail: '' };
}

export const AuthForgotPostRequest = {
  encode(
    message: AuthForgotPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mail !== '') {
      writer.uint32(10).string(message.mail);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthForgotPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthForgotPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthForgotPostRequest {
    return {
      mail: isSet(object.mail) ? String(object.mail) : '',
    };
  },

  toJSON(message: AuthForgotPostRequest): unknown {
    const obj: any = {};
    message.mail !== undefined && (obj.mail = message.mail);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthForgotPostRequest>, I>>(
    object: I
  ): AuthForgotPostRequest {
    const message = createBaseAuthForgotPostRequest();
    message.mail = object.mail ?? '';
    return message;
  },
};

function createBaseAuthForgotPostResponse(): AuthForgotPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthForgotPostResponse = {
  encode(
    message: AuthForgotPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthForgotPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthForgotPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthForgotPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthForgotPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthForgotPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthForgotPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthForgotPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthForgotPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthForgotPostResponse>, I>>(
    object: I
  ): AuthForgotPostResponse {
    const message = createBaseAuthForgotPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthForgotPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthForgotPostResponse_Data(): AuthForgotPostResponse_Data {
  return { otpId: '', id: '' };
}

export const AuthForgotPostResponse_Data = {
  encode(
    message: AuthForgotPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthForgotPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthForgotPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthForgotPostResponse_Data {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: AuthForgotPostResponse_Data): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthForgotPostResponse_Data>, I>>(
    object: I
  ): AuthForgotPostResponse_Data {
    const message = createBaseAuthForgotPostResponse_Data();
    message.otpId = object.otpId ?? '';
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAuthResendOTPPostRequest(): AuthResendOTPPostRequest {
  return { otpId: '' };
}

export const AuthResendOTPPostRequest = {
  encode(
    message: AuthResendOTPPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthResendOTPPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthResendOTPPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthResendOTPPostRequest {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
    };
  },

  toJSON(message: AuthResendOTPPostRequest): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthResendOTPPostRequest>, I>>(
    object: I
  ): AuthResendOTPPostRequest {
    const message = createBaseAuthResendOTPPostRequest();
    message.otpId = object.otpId ?? '';
    return message;
  },
};

function createBaseAuthResendOTPPostResponse(): AuthResendOTPPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthResendOTPPostResponse = {
  encode(
    message: AuthResendOTPPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthResendOTPPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthResendOTPPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthResendOTPPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthResendOTPPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthResendOTPPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthResendOTPPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthResendOTPPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthResendOTPPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthResendOTPPostResponse>, I>>(
    object: I
  ): AuthResendOTPPostResponse {
    const message = createBaseAuthResendOTPPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthResendOTPPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthResendOTPPostResponse_Data(): AuthResendOTPPostResponse_Data {
  return { otpId: '' };
}

export const AuthResendOTPPostResponse_Data = {
  encode(
    message: AuthResendOTPPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthResendOTPPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthResendOTPPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthResendOTPPostResponse_Data {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
    };
  },

  toJSON(message: AuthResendOTPPostResponse_Data): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthResendOTPPostResponse_Data>, I>>(
    object: I
  ): AuthResendOTPPostResponse_Data {
    const message = createBaseAuthResendOTPPostResponse_Data();
    message.otpId = object.otpId ?? '';
    return message;
  },
};

function createBaseAuthOTPPostRequest(): AuthOTPPostRequest {
  return { otpId: '', otp: '' };
}

export const AuthOTPPostRequest = {
  encode(
    message: AuthOTPPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    if (message.otp !== '') {
      writer.uint32(18).string(message.otp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthOTPPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthOTPPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        case 2:
          message.otp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthOTPPostRequest {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
      otp: isSet(object.otp) ? String(object.otp) : '',
    };
  },

  toJSON(message: AuthOTPPostRequest): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    message.otp !== undefined && (obj.otp = message.otp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthOTPPostRequest>, I>>(
    object: I
  ): AuthOTPPostRequest {
    const message = createBaseAuthOTPPostRequest();
    message.otpId = object.otpId ?? '';
    message.otp = object.otp ?? '';
    return message;
  },
};

function createBaseAuthOTPPostResponse(): AuthOTPPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthOTPPostResponse = {
  encode(
    message: AuthOTPPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthOTPPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthOTPPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthOTPPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthOTPPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthOTPPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthOTPPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthOTPPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthOTPPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthOTPPostResponse>, I>>(
    object: I
  ): AuthOTPPostResponse {
    const message = createBaseAuthOTPPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthOTPPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthOTPPostResponse_Data(): AuthOTPPostResponse_Data {
  return {};
}

export const AuthOTPPostResponse_Data = {
  encode(
    _: AuthOTPPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthOTPPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthOTPPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AuthOTPPostResponse_Data {
    return {};
  },

  toJSON(_: AuthOTPPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthOTPPostResponse_Data>, I>>(
    _: I
  ): AuthOTPPostResponse_Data {
    const message = createBaseAuthOTPPostResponse_Data();
    return message;
  },
};

function createBaseStatesGetRequest(): StatesGetRequest {
  return {};
}

export const StatesGetRequest = {
  encode(
    _: StatesGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatesGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatesGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StatesGetRequest {
    return {};
  },

  toJSON(_: StatesGetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatesGetRequest>, I>>(
    _: I
  ): StatesGetRequest {
    const message = createBaseStatesGetRequest();
    return message;
  },
};

function createBaseStatesGetResponse(): StatesGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const StatesGetResponse = {
  encode(
    message: StatesGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      StatesGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatesGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatesGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = StatesGetResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatesGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? StatesGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: StatesGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? StatesGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatesGetResponse>, I>>(
    object: I
  ): StatesGetResponse {
    const message = createBaseStatesGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? StatesGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseStatesGetResponse_Data(): StatesGetResponse_Data {
  return { states: [] };
}

export const StatesGetResponse_Data = {
  encode(
    message: StatesGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.states) {
      State.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StatesGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatesGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.states.push(State.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatesGetResponse_Data {
    return {
      states: Array.isArray(object?.states)
        ? object.states.map((e: any) => State.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StatesGetResponse_Data): unknown {
    const obj: any = {};
    if (message.states) {
      obj.states = message.states.map((e) => (e ? State.toJSON(e) : undefined));
    } else {
      obj.states = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatesGetResponse_Data>, I>>(
    object: I
  ): StatesGetResponse_Data {
    const message = createBaseStatesGetResponse_Data();
    message.states = object.states?.map((e) => State.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContactGetRequest(): ContactGetRequest {
  return { id: '', UserId: '' };
}

export const ContactGetRequest = {
  encode(
    message: ContactGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: ContactGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContactGetRequest>, I>>(
    object: I
  ): ContactGetRequest {
    const message = createBaseContactGetRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseContactGetResponse(): ContactGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const ContactGetResponse = {
  encode(
    message: ContactGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      ContactGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = ContactGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? ContactGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: ContactGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? ContactGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContactGetResponse>, I>>(
    object: I
  ): ContactGetResponse {
    const message = createBaseContactGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? ContactGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseContactGetResponse_Data(): ContactGetResponse_Data {
  return { contact: undefined };
}

export const ContactGetResponse_Data = {
  encode(
    message: ContactGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContactGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contact = Contact.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactGetResponse_Data {
    return {
      contact: isSet(object.contact)
        ? Contact.fromJSON(object.contact)
        : undefined,
    };
  },

  toJSON(message: ContactGetResponse_Data): unknown {
    const obj: any = {};
    message.contact !== undefined &&
      (obj.contact = message.contact
        ? Contact.toJSON(message.contact)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContactGetResponse_Data>, I>>(
    object: I
  ): ContactGetResponse_Data {
    const message = createBaseContactGetResponse_Data();
    message.contact =
      object.contact !== undefined && object.contact !== null
        ? Contact.fromPartial(object.contact)
        : undefined;
    return message;
  },
};

function createBaseUserPutRequest(): UserPutRequest {
  return { id: '', UserId: '', url: '', firstName: '', lastName: '' };
}

export const UserPutRequest = {
  encode(
    message: UserPutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    if (message.url !== '') {
      writer.uint32(26).string(message.url);
    }
    if (message.firstName !== '') {
      writer.uint32(34).string(message.firstName);
    }
    if (message.lastName !== '') {
      writer.uint32(42).string(message.lastName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.firstName = reader.string();
          break;
        case 5:
          message.lastName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPutRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      url: isSet(object.url) ? String(object.url) : '',
      firstName: isSet(object.firstName) ? String(object.firstName) : '',
      lastName: isSet(object.lastName) ? String(object.lastName) : '',
    };
  },

  toJSON(message: UserPutRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.url !== undefined && (obj.url = message.url);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPutRequest>, I>>(
    object: I
  ): UserPutRequest {
    const message = createBaseUserPutRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    message.url = object.url ?? '';
    message.firstName = object.firstName ?? '';
    message.lastName = object.lastName ?? '';
    return message;
  },
};

function createBaseUserPutResponse(): UserPutResponse {
  return { code: 0, success: false, data: undefined };
}

export const UserPutResponse = {
  encode(
    message: UserPutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      UserPutResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = UserPutResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPutResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? UserPutResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: UserPutResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? UserPutResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPutResponse>, I>>(
    object: I
  ): UserPutResponse {
    const message = createBaseUserPutResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? UserPutResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseUserPutResponse_Data(): UserPutResponse_Data {
  return { user: undefined };
}

export const UserPutResponse_Data = {
  encode(
    message: UserPutResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserPutResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPutResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPutResponse_Data {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: UserPutResponse_Data): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPutResponse_Data>, I>>(
    object: I
  ): UserPutResponse_Data {
    const message = createBaseUserPutResponse_Data();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

function createBaseContactPutRequest(): ContactPutRequest {
  return {
    id: '',
    UserId: '',
    zipcode: '',
    address1: '',
    address2: '',
    stateId: '',
    city: '',
  };
}

export const ContactPutRequest = {
  encode(
    message: ContactPutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    if (message.zipcode !== '') {
      writer.uint32(26).string(message.zipcode);
    }
    if (message.address1 !== '') {
      writer.uint32(34).string(message.address1);
    }
    if (message.address2 !== '') {
      writer.uint32(42).string(message.address2);
    }
    if (message.stateId !== '') {
      writer.uint32(50).string(message.stateId);
    }
    if (message.city !== '') {
      writer.uint32(58).string(message.city);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactPutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        case 3:
          message.zipcode = reader.string();
          break;
        case 4:
          message.address1 = reader.string();
          break;
        case 5:
          message.address2 = reader.string();
          break;
        case 6:
          message.stateId = reader.string();
          break;
        case 7:
          message.city = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPutRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      address1: isSet(object.address1) ? String(object.address1) : '',
      address2: isSet(object.address2) ? String(object.address2) : '',
      stateId: isSet(object.stateId) ? String(object.stateId) : '',
      city: isSet(object.city) ? String(object.city) : '',
    };
  },

  toJSON(message: ContactPutRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.address1 !== undefined && (obj.address1 = message.address1);
    message.address2 !== undefined && (obj.address2 = message.address2);
    message.stateId !== undefined && (obj.stateId = message.stateId);
    message.city !== undefined && (obj.city = message.city);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContactPutRequest>, I>>(
    object: I
  ): ContactPutRequest {
    const message = createBaseContactPutRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    message.zipcode = object.zipcode ?? '';
    message.address1 = object.address1 ?? '';
    message.address2 = object.address2 ?? '';
    message.stateId = object.stateId ?? '';
    message.city = object.city ?? '';
    return message;
  },
};

function createBaseContactPutResponse(): ContactPutResponse {
  return { code: 0, success: false, data: undefined };
}

export const ContactPutResponse = {
  encode(
    message: ContactPutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      ContactPutResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContactPutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = ContactPutResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPutResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? ContactPutResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: ContactPutResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? ContactPutResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContactPutResponse>, I>>(
    object: I
  ): ContactPutResponse {
    const message = createBaseContactPutResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? ContactPutResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseContactPutResponse_Data(): ContactPutResponse_Data {
  return { contact: undefined };
}

export const ContactPutResponse_Data = {
  encode(
    message: ContactPutResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ContactPutResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContactPutResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contact = Contact.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContactPutResponse_Data {
    return {
      contact: isSet(object.contact)
        ? Contact.fromJSON(object.contact)
        : undefined,
    };
  },

  toJSON(message: ContactPutResponse_Data): unknown {
    const obj: any = {};
    message.contact !== undefined &&
      (obj.contact = message.contact
        ? Contact.toJSON(message.contact)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContactPutResponse_Data>, I>>(
    object: I
  ): ContactPutResponse_Data {
    const message = createBaseContactPutResponse_Data();
    message.contact =
      object.contact !== undefined && object.contact !== null
        ? Contact.fromPartial(object.contact)
        : undefined;
    return message;
  },
};

function createBaseAdminBusinessDeletePostRequest(): AdminBusinessDeletePostRequest {
  return { UserId: '', id: '' };
}

export const AdminBusinessDeletePostRequest = {
  encode(
    message: AdminBusinessDeletePostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessDeletePostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessDeletePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessDeletePostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: AdminBusinessDeletePostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessDeletePostRequest>, I>>(
    object: I
  ): AdminBusinessDeletePostRequest {
    const message = createBaseAdminBusinessDeletePostRequest();
    message.UserId = object.UserId ?? '';
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAdminBusinessDeletePostResponse(): AdminBusinessDeletePostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminBusinessDeletePostResponse = {
  encode(
    message: AdminBusinessDeletePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminBusinessDeletePostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessDeletePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessDeletePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminBusinessDeletePostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessDeletePostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminBusinessDeletePostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminBusinessDeletePostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminBusinessDeletePostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessDeletePostResponse>, I>>(
    object: I
  ): AdminBusinessDeletePostResponse {
    const message = createBaseAdminBusinessDeletePostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminBusinessDeletePostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminBusinessDeletePostResponse_Data(): AdminBusinessDeletePostResponse_Data {
  return {};
}

export const AdminBusinessDeletePostResponse_Data = {
  encode(
    _: AdminBusinessDeletePostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessDeletePostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessDeletePostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminBusinessDeletePostResponse_Data {
    return {};
  },

  toJSON(_: AdminBusinessDeletePostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminBusinessDeletePostResponse_Data>, I>
  >(_: I): AdminBusinessDeletePostResponse_Data {
    const message = createBaseAdminBusinessDeletePostResponse_Data();
    return message;
  },
};

function createBaseAdminBusinessBanPostRequest(): AdminBusinessBanPostRequest {
  return { UserId: '', id: '' };
}

export const AdminBusinessBanPostRequest = {
  encode(
    message: AdminBusinessBanPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessBanPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessBanPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessBanPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: AdminBusinessBanPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessBanPostRequest>, I>>(
    object: I
  ): AdminBusinessBanPostRequest {
    const message = createBaseAdminBusinessBanPostRequest();
    message.UserId = object.UserId ?? '';
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAdminBusinessBanPostResponse(): AdminBusinessBanPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminBusinessBanPostResponse = {
  encode(
    message: AdminBusinessBanPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminBusinessBanPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessBanPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessBanPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminBusinessBanPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessBanPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminBusinessBanPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminBusinessBanPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminBusinessBanPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessBanPostResponse>, I>>(
    object: I
  ): AdminBusinessBanPostResponse {
    const message = createBaseAdminBusinessBanPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminBusinessBanPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminBusinessBanPostResponse_Data(): AdminBusinessBanPostResponse_Data {
  return {};
}

export const AdminBusinessBanPostResponse_Data = {
  encode(
    _: AdminBusinessBanPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessBanPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessBanPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AdminBusinessBanPostResponse_Data {
    return {};
  },

  toJSON(_: AdminBusinessBanPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<AdminBusinessBanPostResponse_Data>, I>
  >(_: I): AdminBusinessBanPostResponse_Data {
    const message = createBaseAdminBusinessBanPostResponse_Data();
    return message;
  },
};

function createBaseAdminUsersGetRequest(): AdminUsersGetRequest {
  return { UserId: '', query: '', limit: '', offset: '' };
}

export const AdminUsersGetRequest = {
  encode(
    message: AdminUsersGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.query !== '') {
      writer.uint32(18).string(message.query);
    }
    if (message.limit !== '') {
      writer.uint32(26).string(message.limit);
    }
    if (message.offset !== '') {
      writer.uint32(34).string(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.limit = reader.string();
          break;
        case 4:
          message.offset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminUsersGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      query: isSet(object.query) ? String(object.query) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
      offset: isSet(object.offset) ? String(object.offset) : '',
    };
  },

  toJSON(message: AdminUsersGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.query !== undefined && (obj.query = message.query);
    message.limit !== undefined && (obj.limit = message.limit);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminUsersGetRequest>, I>>(
    object: I
  ): AdminUsersGetRequest {
    const message = createBaseAdminUsersGetRequest();
    message.UserId = object.UserId ?? '';
    message.query = object.query ?? '';
    message.limit = object.limit ?? '';
    message.offset = object.offset ?? '';
    return message;
  },
};

function createBaseAdminUsersGetResponse(): AdminUsersGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminUsersGetResponse = {
  encode(
    message: AdminUsersGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminUsersGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminUsersGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminUsersGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminUsersGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminUsersGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminUsersGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminUsersGetResponse>, I>>(
    object: I
  ): AdminUsersGetResponse {
    const message = createBaseAdminUsersGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminUsersGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminUsersGetResponse_Data(): AdminUsersGetResponse_Data {
  return { pagination: undefined, result: [] };
}

export const AdminUsersGetResponse_Data = {
  encode(
    message: AdminUsersGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.result) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminUsersGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminUsersGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        case 2:
          message.result.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminUsersGetResponse_Data {
    return {
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => User.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AdminUsersGetResponse_Data): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    if (message.result) {
      obj.result = message.result.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminUsersGetResponse_Data>, I>>(
    object: I
  ): AdminUsersGetResponse_Data {
    const message = createBaseAdminUsersGetResponse_Data();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    message.result = object.result?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAdminBusinessesGetRequest(): AdminBusinessesGetRequest {
  return { UserId: '', mail: '', phone: '', limit: '', offset: '' };
}

export const AdminBusinessesGetRequest = {
  encode(
    message: AdminBusinessesGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.mail !== '') {
      writer.uint32(18).string(message.mail);
    }
    if (message.phone !== '') {
      writer.uint32(26).string(message.phone);
    }
    if (message.limit !== '') {
      writer.uint32(34).string(message.limit);
    }
    if (message.offset !== '') {
      writer.uint32(42).string(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessesGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessesGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.mail = reader.string();
          break;
        case 3:
          message.phone = reader.string();
          break;
        case 4:
          message.limit = reader.string();
          break;
        case 5:
          message.offset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessesGetRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      mail: isSet(object.mail) ? String(object.mail) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
      limit: isSet(object.limit) ? String(object.limit) : '',
      offset: isSet(object.offset) ? String(object.offset) : '',
    };
  },

  toJSON(message: AdminBusinessesGetRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.phone !== undefined && (obj.phone = message.phone);
    message.limit !== undefined && (obj.limit = message.limit);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessesGetRequest>, I>>(
    object: I
  ): AdminBusinessesGetRequest {
    const message = createBaseAdminBusinessesGetRequest();
    message.UserId = object.UserId ?? '';
    message.mail = object.mail ?? '';
    message.phone = object.phone ?? '';
    message.limit = object.limit ?? '';
    message.offset = object.offset ?? '';
    return message;
  },
};

function createBaseAdminBusinessesGetResponse(): AdminBusinessesGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const AdminBusinessesGetResponse = {
  encode(
    message: AdminBusinessesGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AdminBusinessesGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessesGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessesGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AdminBusinessesGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessesGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AdminBusinessesGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AdminBusinessesGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AdminBusinessesGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessesGetResponse>, I>>(
    object: I
  ): AdminBusinessesGetResponse {
    const message = createBaseAdminBusinessesGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AdminBusinessesGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAdminBusinessesGetResponse_Data(): AdminBusinessesGetResponse_Data {
  return { pagination: undefined, result: [] };
}

export const AdminBusinessesGetResponse_Data = {
  encode(
    message: AdminBusinessesGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.result) {
      Business.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AdminBusinessesGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminBusinessesGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        case 2:
          message.result.push(Business.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminBusinessesGetResponse_Data {
    return {
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => Business.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AdminBusinessesGetResponse_Data): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    if (message.result) {
      obj.result = message.result.map((e) =>
        e ? Business.toJSON(e) : undefined
      );
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminBusinessesGetResponse_Data>, I>>(
    object: I
  ): AdminBusinessesGetResponse_Data {
    const message = createBaseAdminBusinessesGetResponse_Data();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    message.result = object.result?.map((e) => Business.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBusinessGetRequest(): BusinessGetRequest {
  return { id: '', UserId: '' };
}

export const BusinessGetRequest = {
  encode(
    message: BusinessGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: BusinessGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessGetRequest>, I>>(
    object: I
  ): BusinessGetRequest {
    const message = createBaseBusinessGetRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseBusinessGetResponse(): BusinessGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessGetResponse = {
  encode(
    message: BusinessGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessGetResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessGetResponse>, I>>(
    object: I
  ): BusinessGetResponse {
    const message = createBaseBusinessGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessGetResponse_Data(): BusinessGetResponse_Data {
  return { business: undefined };
}

export const BusinessGetResponse_Data = {
  encode(
    message: BusinessGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.business !== undefined) {
      Business.encode(message.business, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.business = Business.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessGetResponse_Data {
    return {
      business: isSet(object.business)
        ? Business.fromJSON(object.business)
        : undefined,
    };
  },

  toJSON(message: BusinessGetResponse_Data): unknown {
    const obj: any = {};
    message.business !== undefined &&
      (obj.business = message.business
        ? Business.toJSON(message.business)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessGetResponse_Data>, I>>(
    object: I
  ): BusinessGetResponse_Data {
    const message = createBaseBusinessGetResponse_Data();
    message.business =
      object.business !== undefined && object.business !== null
        ? Business.fromPartial(object.business)
        : undefined;
    return message;
  },
};

function createBaseState(): State {
  return { id: '', name: '' };
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): State {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseBusiness(): Business {
  return {
    id: '',
    name: '',
    phone: '',
    logoImage: '',
    bannerImage: '',
    contactId: '',
    website: '',
    descriptions: '',
    services: [],
    mail: '',
    zipcode: '',
    status: 0,
    zipcodes: [],
  };
}

export const Business = {
  encode(
    message: Business,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.phone !== '') {
      writer.uint32(26).string(message.phone);
    }
    if (message.logoImage !== '') {
      writer.uint32(34).string(message.logoImage);
    }
    if (message.bannerImage !== '') {
      writer.uint32(42).string(message.bannerImage);
    }
    if (message.contactId !== '') {
      writer.uint32(50).string(message.contactId);
    }
    if (message.website !== '') {
      writer.uint32(58).string(message.website);
    }
    if (message.descriptions !== '') {
      writer.uint32(66).string(message.descriptions);
    }
    for (const v of message.services) {
      writer.uint32(74).string(v!);
    }
    if (message.mail !== '') {
      writer.uint32(82).string(message.mail);
    }
    if (message.zipcode !== '') {
      writer.uint32(90).string(message.zipcode);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    for (const v of message.zipcodes) {
      writer.uint32(106).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Business {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusiness();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.phone = reader.string();
          break;
        case 4:
          message.logoImage = reader.string();
          break;
        case 5:
          message.bannerImage = reader.string();
          break;
        case 6:
          message.contactId = reader.string();
          break;
        case 7:
          message.website = reader.string();
          break;
        case 8:
          message.descriptions = reader.string();
          break;
        case 9:
          message.services.push(reader.string());
          break;
        case 10:
          message.mail = reader.string();
          break;
        case 11:
          message.zipcode = reader.string();
          break;
        case 12:
          message.status = reader.int32() as any;
          break;
        case 13:
          message.zipcodes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Business {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
      logoImage: isSet(object.logoImage) ? String(object.logoImage) : '',
      bannerImage: isSet(object.bannerImage) ? String(object.bannerImage) : '',
      contactId: isSet(object.contactId) ? String(object.contactId) : '',
      website: isSet(object.website) ? String(object.website) : '',
      descriptions: isSet(object.descriptions)
        ? String(object.descriptions)
        : '',
      services: Array.isArray(object?.services)
        ? object.services.map((e: any) => String(e))
        : [],
      mail: isSet(object.mail) ? String(object.mail) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      status: isSet(object.status) ? accountStatusFromJSON(object.status) : 0,
      zipcodes: Array.isArray(object?.zipcodes)
        ? object.zipcodes.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Business): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.phone !== undefined && (obj.phone = message.phone);
    message.logoImage !== undefined && (obj.logoImage = message.logoImage);
    message.bannerImage !== undefined &&
      (obj.bannerImage = message.bannerImage);
    message.contactId !== undefined && (obj.contactId = message.contactId);
    message.website !== undefined && (obj.website = message.website);
    message.descriptions !== undefined &&
      (obj.descriptions = message.descriptions);
    if (message.services) {
      obj.services = message.services.map((e) => e);
    } else {
      obj.services = [];
    }
    message.mail !== undefined && (obj.mail = message.mail);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.status !== undefined &&
      (obj.status = accountStatusToJSON(message.status));
    if (message.zipcodes) {
      obj.zipcodes = message.zipcodes.map((e) => e);
    } else {
      obj.zipcodes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Business>, I>>(object: I): Business {
    const message = createBaseBusiness();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.phone = object.phone ?? '';
    message.logoImage = object.logoImage ?? '';
    message.bannerImage = object.bannerImage ?? '';
    message.contactId = object.contactId ?? '';
    message.website = object.website ?? '';
    message.descriptions = object.descriptions ?? '';
    message.services = object.services?.map((e) => e) || [];
    message.mail = object.mail ?? '';
    message.zipcode = object.zipcode ?? '';
    message.status = object.status ?? 0;
    message.zipcodes = object.zipcodes?.map((e) => e) || [];
    return message;
  },
};

function createBaseService(): Service {
  return {
    id: '',
    name: '',
    image: '',
    businessId: '',
    status: 0,
    categoryId: '',
    categoryName: '',
    numberOrder: 0,
  };
}

export const Service = {
  encode(
    message: Service,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.image !== '') {
      writer.uint32(26).string(message.image);
    }
    if (message.businessId !== '') {
      writer.uint32(34).string(message.businessId);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.categoryId !== '') {
      writer.uint32(50).string(message.categoryId);
    }
    if (message.categoryName !== '') {
      writer.uint32(58).string(message.categoryName);
    }
    if (message.numberOrder !== 0) {
      writer.uint32(64).int64(message.numberOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.image = reader.string();
          break;
        case 4:
          message.businessId = reader.string();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.categoryId = reader.string();
          break;
        case 7:
          message.categoryName = reader.string();
          break;
        case 8:
          message.numberOrder = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      name: isSet(object.name) ? String(object.name) : '',
      image: isSet(object.image) ? String(object.image) : '',
      businessId: isSet(object.businessId) ? String(object.businessId) : '',
      status: isSet(object.status) ? serviceStatusFromJSON(object.status) : 0,
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : '',
      categoryName: isSet(object.categoryName)
        ? String(object.categoryName)
        : '',
      numberOrder: isSet(object.numberOrder) ? Number(object.numberOrder) : 0,
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.image !== undefined && (obj.image = message.image);
    message.businessId !== undefined && (obj.businessId = message.businessId);
    message.status !== undefined &&
      (obj.status = serviceStatusToJSON(message.status));
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.categoryName !== undefined &&
      (obj.categoryName = message.categoryName);
    message.numberOrder !== undefined &&
      (obj.numberOrder = Math.round(message.numberOrder));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.image = object.image ?? '';
    message.businessId = object.businessId ?? '';
    message.status = object.status ?? 0;
    message.categoryId = object.categoryId ?? '';
    message.categoryName = object.categoryName ?? '';
    message.numberOrder = object.numberOrder ?? 0;
    return message;
  },
};

function createBaseBusinessPutRequest(): BusinessPutRequest {
  return {
    id: '',
    UserId: '',
    name: '',
    phone: '',
    logoUrl: '',
    bannerUrl: '',
    website: '',
    description: '',
    zipcodes: [],
  };
}

export const BusinessPutRequest = {
  encode(
    message: BusinessPutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.phone !== '') {
      writer.uint32(34).string(message.phone);
    }
    if (message.logoUrl !== '') {
      writer.uint32(42).string(message.logoUrl);
    }
    if (message.bannerUrl !== '') {
      writer.uint32(50).string(message.bannerUrl);
    }
    if (message.website !== '') {
      writer.uint32(58).string(message.website);
    }
    if (message.description !== '') {
      writer.uint32(66).string(message.description);
    }
    for (const v of message.zipcodes) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessPutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.phone = reader.string();
          break;
        case 5:
          message.logoUrl = reader.string();
          break;
        case 6:
          message.bannerUrl = reader.string();
          break;
        case 7:
          message.website = reader.string();
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.zipcodes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPutRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      name: isSet(object.name) ? String(object.name) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
      logoUrl: isSet(object.logoUrl) ? String(object.logoUrl) : '',
      bannerUrl: isSet(object.bannerUrl) ? String(object.bannerUrl) : '',
      website: isSet(object.website) ? String(object.website) : '',
      description: isSet(object.description) ? String(object.description) : '',
      zipcodes: Array.isArray(object?.zipcodes)
        ? object.zipcodes.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: BusinessPutRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.name !== undefined && (obj.name = message.name);
    message.phone !== undefined && (obj.phone = message.phone);
    message.logoUrl !== undefined && (obj.logoUrl = message.logoUrl);
    message.bannerUrl !== undefined && (obj.bannerUrl = message.bannerUrl);
    message.website !== undefined && (obj.website = message.website);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.zipcodes) {
      obj.zipcodes = message.zipcodes.map((e) => e);
    } else {
      obj.zipcodes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessPutRequest>, I>>(
    object: I
  ): BusinessPutRequest {
    const message = createBaseBusinessPutRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    message.name = object.name ?? '';
    message.phone = object.phone ?? '';
    message.logoUrl = object.logoUrl ?? '';
    message.bannerUrl = object.bannerUrl ?? '';
    message.website = object.website ?? '';
    message.description = object.description ?? '';
    message.zipcodes = object.zipcodes?.map((e) => e) || [];
    return message;
  },
};

function createBaseBusinessPutResponse(): BusinessPutResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessPutResponse = {
  encode(
    message: BusinessPutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessPutResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessPutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessPutResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPutResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessPutResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessPutResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessPutResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessPutResponse>, I>>(
    object: I
  ): BusinessPutResponse {
    const message = createBaseBusinessPutResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessPutResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessPutResponse_Data(): BusinessPutResponse_Data {
  return { business: undefined };
}

export const BusinessPutResponse_Data = {
  encode(
    message: BusinessPutResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.business !== undefined) {
      Business.encode(message.business, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPutResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPutResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.business = Business.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPutResponse_Data {
    return {
      business: isSet(object.business)
        ? Business.fromJSON(object.business)
        : undefined,
    };
  },

  toJSON(message: BusinessPutResponse_Data): unknown {
    const obj: any = {};
    message.business !== undefined &&
      (obj.business = message.business
        ? Business.toJSON(message.business)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessPutResponse_Data>, I>>(
    object: I
  ): BusinessPutResponse_Data {
    const message = createBaseBusinessPutResponse_Data();
    message.business =
      object.business !== undefined && object.business !== null
        ? Business.fromPartial(object.business)
        : undefined;
    return message;
  },
};

function createBaseUserGetRequest(): UserGetRequest {
  return { id: '', UserId: '' };
}

export const UserGetRequest = {
  encode(
    message: UserGetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserGetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: UserGetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserGetRequest>, I>>(
    object: I
  ): UserGetRequest {
    const message = createBaseUserGetRequest();
    message.id = object.id ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseUserGetResponse(): UserGetResponse {
  return { code: 0, success: false, data: undefined };
}

export const UserGetResponse = {
  encode(
    message: UserGetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      UserGetResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = UserGetResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserGetResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? UserGetResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: UserGetResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? UserGetResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserGetResponse>, I>>(
    object: I
  ): UserGetResponse {
    const message = createBaseUserGetResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? UserGetResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseUserGetResponse_Data(): UserGetResponse_Data {
  return { user: undefined };
}

export const UserGetResponse_Data = {
  encode(
    message: UserGetResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserGetResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGetResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserGetResponse_Data {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: UserGetResponse_Data): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserGetResponse_Data>, I>>(
    object: I
  ): UserGetResponse_Data {
    const message = createBaseUserGetResponse_Data();
    message.user =
      object.user !== undefined && object.user !== null
        ? User.fromPartial(object.user)
        : undefined;
    return message;
  },
};

function createBaseUser(): User {
  return {
    id: '',
    image: '',
    mail: '',
    phone: '',
    contactId: '',
    firstName: '',
    lastName: '',
    status: 0,
    name: '',
    zipcode: '',
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.image !== '') {
      writer.uint32(18).string(message.image);
    }
    if (message.mail !== '') {
      writer.uint32(26).string(message.mail);
    }
    if (message.phone !== '') {
      writer.uint32(34).string(message.phone);
    }
    if (message.contactId !== '') {
      writer.uint32(42).string(message.contactId);
    }
    if (message.firstName !== '') {
      writer.uint32(50).string(message.firstName);
    }
    if (message.lastName !== '') {
      writer.uint32(58).string(message.lastName);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.name !== '') {
      writer.uint32(74).string(message.name);
    }
    if (message.zipcode !== '') {
      writer.uint32(82).string(message.zipcode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.image = reader.string();
          break;
        case 3:
          message.mail = reader.string();
          break;
        case 4:
          message.phone = reader.string();
          break;
        case 5:
          message.contactId = reader.string();
          break;
        case 6:
          message.firstName = reader.string();
          break;
        case 7:
          message.lastName = reader.string();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.zipcode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      image: isSet(object.image) ? String(object.image) : '',
      mail: isSet(object.mail) ? String(object.mail) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
      contactId: isSet(object.contactId) ? String(object.contactId) : '',
      firstName: isSet(object.firstName) ? String(object.firstName) : '',
      lastName: isSet(object.lastName) ? String(object.lastName) : '',
      status: isSet(object.status) ? accountStatusFromJSON(object.status) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.image !== undefined && (obj.image = message.image);
    message.mail !== undefined && (obj.mail = message.mail);
    message.phone !== undefined && (obj.phone = message.phone);
    message.contactId !== undefined && (obj.contactId = message.contactId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.status !== undefined &&
      (obj.status = accountStatusToJSON(message.status));
    message.name !== undefined && (obj.name = message.name);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? '';
    message.image = object.image ?? '';
    message.mail = object.mail ?? '';
    message.phone = object.phone ?? '';
    message.contactId = object.contactId ?? '';
    message.firstName = object.firstName ?? '';
    message.lastName = object.lastName ?? '';
    message.status = object.status ?? 0;
    message.name = object.name ?? '';
    message.zipcode = object.zipcode ?? '';
    return message;
  },
};

function createBaseContact(): Contact {
  return {
    id: '',
    zipcode: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    stateId: '',
  };
}

export const Contact = {
  encode(
    message: Contact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.zipcode !== '') {
      writer.uint32(18).string(message.zipcode);
    }
    if (message.address1 !== '') {
      writer.uint32(26).string(message.address1);
    }
    if (message.address2 !== '') {
      writer.uint32(34).string(message.address2);
    }
    if (message.state !== '') {
      writer.uint32(42).string(message.state);
    }
    if (message.city !== '') {
      writer.uint32(50).string(message.city);
    }
    if (message.stateId !== '') {
      writer.uint32(58).string(message.stateId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.zipcode = reader.string();
          break;
        case 3:
          message.address1 = reader.string();
          break;
        case 4:
          message.address2 = reader.string();
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.city = reader.string();
          break;
        case 7:
          message.stateId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contact {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      address1: isSet(object.address1) ? String(object.address1) : '',
      address2: isSet(object.address2) ? String(object.address2) : '',
      state: isSet(object.state) ? String(object.state) : '',
      city: isSet(object.city) ? String(object.city) : '',
      stateId: isSet(object.stateId) ? String(object.stateId) : '',
    };
  },

  toJSON(message: Contact): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.address1 !== undefined && (obj.address1 = message.address1);
    message.address2 !== undefined && (obj.address2 = message.address2);
    message.state !== undefined && (obj.state = message.state);
    message.city !== undefined && (obj.city = message.city);
    message.stateId !== undefined && (obj.stateId = message.stateId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Contact>, I>>(object: I): Contact {
    const message = createBaseContact();
    message.id = object.id ?? '';
    message.zipcode = object.zipcode ?? '';
    message.address1 = object.address1 ?? '';
    message.address2 = object.address2 ?? '';
    message.state = object.state ?? '';
    message.city = object.city ?? '';
    message.stateId = object.stateId ?? '';
    return message;
  },
};

function createBaseAuthPasswordPostRequest(): AuthPasswordPostRequest {
  return { publicKey: '', encryptedPrivateKey: '', UserId: '' };
}

export const AuthPasswordPostRequest = {
  encode(
    message: AuthPasswordPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.publicKey !== '') {
      writer.uint32(10).string(message.publicKey);
    }
    if (message.encryptedPrivateKey !== '') {
      writer.uint32(18).string(message.encryptedPrivateKey);
    }
    if (message.UserId !== '') {
      writer.uint32(26).string(message.UserId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthPasswordPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthPasswordPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = reader.string();
          break;
        case 2:
          message.encryptedPrivateKey = reader.string();
          break;
        case 3:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthPasswordPostRequest {
    return {
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : '',
      encryptedPrivateKey: isSet(object.encryptedPrivateKey)
        ? String(object.encryptedPrivateKey)
        : '',
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: AuthPasswordPostRequest): unknown {
    const obj: any = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.encryptedPrivateKey !== undefined &&
      (obj.encryptedPrivateKey = message.encryptedPrivateKey);
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthPasswordPostRequest>, I>>(
    object: I
  ): AuthPasswordPostRequest {
    const message = createBaseAuthPasswordPostRequest();
    message.publicKey = object.publicKey ?? '';
    message.encryptedPrivateKey = object.encryptedPrivateKey ?? '';
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseAuthPasswordPostResponse(): AuthPasswordPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthPasswordPostResponse = {
  encode(
    message: AuthPasswordPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthPasswordPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthPasswordPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthPasswordPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthPasswordPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthPasswordPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthPasswordPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthPasswordPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthPasswordPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthPasswordPostResponse>, I>>(
    object: I
  ): AuthPasswordPostResponse {
    const message = createBaseAuthPasswordPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthPasswordPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthPasswordPostResponse_Data(): AuthPasswordPostResponse_Data {
  return {};
}

export const AuthPasswordPostResponse_Data = {
  encode(
    _: AuthPasswordPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthPasswordPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthPasswordPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AuthPasswordPostResponse_Data {
    return {};
  },

  toJSON(_: AuthPasswordPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthPasswordPostResponse_Data>, I>>(
    _: I
  ): AuthPasswordPostResponse_Data {
    const message = createBaseAuthPasswordPostResponse_Data();
    return message;
  },
};

function createBaseUserPostRequest(): UserPostRequest {
  return { mail: '', phone: '', publicKey: '', encryptedPrivateKey: '' };
}

export const UserPostRequest = {
  encode(
    message: UserPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mail !== '') {
      writer.uint32(10).string(message.mail);
    }
    if (message.phone !== '') {
      writer.uint32(18).string(message.phone);
    }
    if (message.publicKey !== '') {
      writer.uint32(26).string(message.publicKey);
    }
    if (message.encryptedPrivateKey !== '') {
      writer.uint32(34).string(message.encryptedPrivateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mail = reader.string();
          break;
        case 2:
          message.phone = reader.string();
          break;
        case 3:
          message.publicKey = reader.string();
          break;
        case 4:
          message.encryptedPrivateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPostRequest {
    return {
      mail: isSet(object.mail) ? String(object.mail) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : '',
      encryptedPrivateKey: isSet(object.encryptedPrivateKey)
        ? String(object.encryptedPrivateKey)
        : '',
    };
  },

  toJSON(message: UserPostRequest): unknown {
    const obj: any = {};
    message.mail !== undefined && (obj.mail = message.mail);
    message.phone !== undefined && (obj.phone = message.phone);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.encryptedPrivateKey !== undefined &&
      (obj.encryptedPrivateKey = message.encryptedPrivateKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPostRequest>, I>>(
    object: I
  ): UserPostRequest {
    const message = createBaseUserPostRequest();
    message.mail = object.mail ?? '';
    message.phone = object.phone ?? '';
    message.publicKey = object.publicKey ?? '';
    message.encryptedPrivateKey = object.encryptedPrivateKey ?? '';
    return message;
  },
};

function createBaseUserPostResponse(): UserPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const UserPostResponse = {
  encode(
    message: UserPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      UserPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = UserPostResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? UserPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: UserPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? UserPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPostResponse>, I>>(
    object: I
  ): UserPostResponse {
    const message = createBaseUserPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? UserPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseUserPostResponse_Data(): UserPostResponse_Data {
  return { otpId: '', mail: '', phone: '' };
}

export const UserPostResponse_Data = {
  encode(
    message: UserPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    if (message.mail !== '') {
      writer.uint32(18).string(message.mail);
    }
    if (message.phone !== '') {
      writer.uint32(26).string(message.phone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        case 2:
          message.mail = reader.string();
          break;
        case 3:
          message.phone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserPostResponse_Data {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
      mail: isSet(object.mail) ? String(object.mail) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
    };
  },

  toJSON(message: UserPostResponse_Data): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserPostResponse_Data>, I>>(
    object: I
  ): UserPostResponse_Data {
    const message = createBaseUserPostResponse_Data();
    message.otpId = object.otpId ?? '';
    message.mail = object.mail ?? '';
    message.phone = object.phone ?? '';
    return message;
  },
};

function createBaseBusinessPostRequest(): BusinessPostRequest {
  return { mail: '', phone: '', publicKey: '', encryptedPrivateKey: '' };
}

export const BusinessPostRequest = {
  encode(
    message: BusinessPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mail !== '') {
      writer.uint32(10).string(message.mail);
    }
    if (message.phone !== '') {
      writer.uint32(18).string(message.phone);
    }
    if (message.publicKey !== '') {
      writer.uint32(26).string(message.publicKey);
    }
    if (message.encryptedPrivateKey !== '') {
      writer.uint32(34).string(message.encryptedPrivateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusinessPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mail = reader.string();
          break;
        case 2:
          message.phone = reader.string();
          break;
        case 3:
          message.publicKey = reader.string();
          break;
        case 4:
          message.encryptedPrivateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPostRequest {
    return {
      mail: isSet(object.mail) ? String(object.mail) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : '',
      encryptedPrivateKey: isSet(object.encryptedPrivateKey)
        ? String(object.encryptedPrivateKey)
        : '',
    };
  },

  toJSON(message: BusinessPostRequest): unknown {
    const obj: any = {};
    message.mail !== undefined && (obj.mail = message.mail);
    message.phone !== undefined && (obj.phone = message.phone);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.encryptedPrivateKey !== undefined &&
      (obj.encryptedPrivateKey = message.encryptedPrivateKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessPostRequest>, I>>(
    object: I
  ): BusinessPostRequest {
    const message = createBaseBusinessPostRequest();
    message.mail = object.mail ?? '';
    message.phone = object.phone ?? '';
    message.publicKey = object.publicKey ?? '';
    message.encryptedPrivateKey = object.encryptedPrivateKey ?? '';
    return message;
  },
};

function createBaseBusinessPostResponse(): BusinessPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const BusinessPostResponse = {
  encode(
    message: BusinessPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      BusinessPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = BusinessPostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? BusinessPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: BusinessPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessPostResponse>, I>>(
    object: I
  ): BusinessPostResponse {
    const message = createBaseBusinessPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseBusinessPostResponse_Data(): BusinessPostResponse_Data {
  return { otpId: '', mail: '', phone: '' };
}

export const BusinessPostResponse_Data = {
  encode(
    message: BusinessPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.otpId !== '') {
      writer.uint32(10).string(message.otpId);
    }
    if (message.mail !== '') {
      writer.uint32(18).string(message.mail);
    }
    if (message.phone !== '') {
      writer.uint32(26).string(message.phone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otpId = reader.string();
          break;
        case 2:
          message.mail = reader.string();
          break;
        case 3:
          message.phone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessPostResponse_Data {
    return {
      otpId: isSet(object.otpId) ? String(object.otpId) : '',
      mail: isSet(object.mail) ? String(object.mail) : '',
      phone: isSet(object.phone) ? String(object.phone) : '',
    };
  },

  toJSON(message: BusinessPostResponse_Data): unknown {
    const obj: any = {};
    message.otpId !== undefined && (obj.otpId = message.otpId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusinessPostResponse_Data>, I>>(
    object: I
  ): BusinessPostResponse_Data {
    const message = createBaseBusinessPostResponse_Data();
    message.otpId = object.otpId ?? '';
    message.mail = object.mail ?? '';
    message.phone = object.phone ?? '';
    return message;
  },
};

function createBaseAuthCredentialRequest(): AuthCredentialRequest {
  return { identifier: '' };
}

export const AuthCredentialRequest = {
  encode(
    message: AuthCredentialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== '') {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthCredentialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthCredentialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthCredentialRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : '',
    };
  },

  toJSON(message: AuthCredentialRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthCredentialRequest>, I>>(
    object: I
  ): AuthCredentialRequest {
    const message = createBaseAuthCredentialRequest();
    message.identifier = object.identifier ?? '';
    return message;
  },
};

function createBaseAuthCredentialResponse(): AuthCredentialResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthCredentialResponse = {
  encode(
    message: AuthCredentialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthCredentialResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthCredentialResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthCredentialResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthCredentialResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthCredentialResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthCredentialResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthCredentialResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthCredentialResponse>, I>>(
    object: I
  ): AuthCredentialResponse {
    const message = createBaseAuthCredentialResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthCredentialResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthCredentialResponse_Data(): AuthCredentialResponse_Data {
  return { id: '', publicKey: '', encryptedPrivateKey: '' };
}

export const AuthCredentialResponse_Data = {
  encode(
    message: AuthCredentialResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.publicKey !== '') {
      writer.uint32(18).string(message.publicKey);
    }
    if (message.encryptedPrivateKey !== '') {
      writer.uint32(26).string(message.encryptedPrivateKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthCredentialResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthCredentialResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        case 3:
          message.encryptedPrivateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthCredentialResponse_Data {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : '',
      encryptedPrivateKey: isSet(object.encryptedPrivateKey)
        ? String(object.encryptedPrivateKey)
        : '',
    };
  },

  toJSON(message: AuthCredentialResponse_Data): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.encryptedPrivateKey !== undefined &&
      (obj.encryptedPrivateKey = message.encryptedPrivateKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthCredentialResponse_Data>, I>>(
    object: I
  ): AuthCredentialResponse_Data {
    const message = createBaseAuthCredentialResponse_Data();
    message.id = object.id ?? '';
    message.publicKey = object.publicKey ?? '';
    message.encryptedPrivateKey = object.encryptedPrivateKey ?? '';
    return message;
  },
};

function createBaseAuthPingRequest(): AuthPingRequest {
  return { UserId: '', Role: 0 };
}

export const AuthPingRequest = {
  encode(
    message: AuthPingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.Role !== 0) {
      writer.uint32(16).int32(message.Role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthPingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthPingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.Role = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthPingRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      Role: isSet(object.Role) ? rOLEFromJSON(object.Role) : 0,
    };
  },

  toJSON(message: AuthPingRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.Role !== undefined && (obj.Role = rOLEToJSON(message.Role));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthPingRequest>, I>>(
    object: I
  ): AuthPingRequest {
    const message = createBaseAuthPingRequest();
    message.UserId = object.UserId ?? '';
    message.Role = object.Role ?? 0;
    return message;
  },
};

function createBaseAuthPingResponse(): AuthPingResponse {
  return { code: 0, success: false, data: undefined };
}

export const AuthPingResponse = {
  encode(
    message: AuthPingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      AuthPingResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthPingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthPingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = AuthPingResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthPingResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? AuthPingResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: AuthPingResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? AuthPingResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthPingResponse>, I>>(
    object: I
  ): AuthPingResponse {
    const message = createBaseAuthPingResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? AuthPingResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseAuthPingResponse_Data(): AuthPingResponse_Data {
  return { id: '', role: 0, process: 0 };
}

export const AuthPingResponse_Data = {
  encode(
    message: AuthPingResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.role !== 0) {
      writer.uint32(16).int32(message.role);
    }
    if (message.process !== 0) {
      writer.uint32(24).int32(message.process);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthPingResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthPingResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.role = reader.int32() as any;
          break;
        case 3:
          message.process = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthPingResponse_Data {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      role: isSet(object.role) ? rOLEFromJSON(object.role) : 0,
      process: isSet(object.process)
        ? registrationProcessFromJSON(object.process)
        : 0,
    };
  },

  toJSON(message: AuthPingResponse_Data): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.role !== undefined && (obj.role = rOLEToJSON(message.role));
    message.process !== undefined &&
      (obj.process = registrationProcessToJSON(message.process));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuthPingResponse_Data>, I>>(
    object: I
  ): AuthPingResponse_Data {
    const message = createBaseAuthPingResponse_Data();
    message.id = object.id ?? '';
    message.role = object.role ?? 0;
    message.process = object.process ?? 0;
    return message;
  },
};

export interface ApiService {
  /** Auth Credential for get credential infomation */
  AuthCredential(
    request: AuthCredentialRequest
  ): Promise<AuthCredentialResponse>;
  /** Auth Ping to check whether is authorized */
  AuthPing(request: AuthPingRequest): Promise<AuthPingResponse>;
  /** Auth Password to change password */
  AuthPasswordPost(
    request: AuthPasswordPostRequest
  ): Promise<AuthPasswordPostResponse>;
  /** Auth OTP to send OTP */
  AuthOTPPost(request: AuthOTPPostRequest): Promise<AuthOTPPostResponse>;
  /** Auth Resend OTP to resend OTP */
  AuthResendOTP(
    request: AuthResendOTPPostRequest
  ): Promise<AuthResendOTPPostResponse>;
  /** Forgot to send OTP for forgotting password */
  AuthForgotPost(
    request: AuthForgotPostRequest
  ): Promise<AuthForgotPostResponse>;
  /** Auth OTP Forgot to update new password when forgotting */
  AuthForgotReset(
    request: AuthForgotResetPostRequest
  ): Promise<AuthForgotResetPostResponse>;
  /** User for create new user */
  UserPost(request: UserPostRequest): Promise<UserPostResponse>;
  /** Business for create new handyman (business) */
  BusinessPost(request: BusinessPostRequest): Promise<BusinessPostResponse>;
  /** User to get user by id */
  UserGet(request: UserGetRequest): Promise<UserGetResponse>;
  /** Business to get business by id */
  BusinessGet(request: BusinessGetRequest): Promise<BusinessGetResponse>;
  /** Business to get business by id */
  BusinessPut(request: BusinessPutRequest): Promise<BusinessPutResponse>;
  BusinessPaymentMethodGet(
    request: BusinessPaymentMethodGetRequest
  ): Promise<BusinessPaymentMethodGetResponse>;
  OrdersProjectCancel(
    request: CancelProjectPostRequest
  ): Promise<CancelProjectPostResponse>;
  BusinessPaymentMethodSetupPost(
    request: BusinessPaymentMethodSetupPostRequest
  ): Promise<BusinessPaymentMethodSetupPostResponse>;
  BusinessPaymentMethodDeletePost(
    request: BusinessPaymentMethodDeletePostRequest
  ): Promise<BusinessPaymentMethodDeletePostResponse>;
  /** Business to get business by id */
  ContactGet(request: ContactGetRequest): Promise<ContactGetResponse>;
  /** Business to get business by id */
  ContactPut(request: ContactPutRequest): Promise<ContactPutResponse>;
  UserPut(request: UserPutRequest): Promise<UserPutResponse>;
  StatesGet(request: StatesGetRequest): Promise<StatesGetResponse>;
  AdminBanUserPost(
    request: AdminBanUserPostRequest
  ): Promise<AdminBanUserPostResponse>;
  AdminGroupGet(request: AdminGroupGetRequest): Promise<AdminGroupGetResponse>;
  AdminGroupPost(
    request: AdminGroupPostRequest
  ): Promise<AdminGroupPostResponse>;
  AdminGroupPut(request: AdminGroupPutRequest): Promise<AdminGroupPutRequest>;
  StripePaymentMethodGet(
    request: StripePaymentMethodGetRequest
  ): Promise<StripePaymentMethodGetResponse>;
  UploadUrlPost(request: UploadUrlPostRequest): Promise<UploadUrlPostResponse>;
  BusinessNearGet(
    request: BusinessNearGetRequest
  ): Promise<BusinessNearGetResponse>;
  BusinessInterestGet(
    request: BusinessInterestGetRequest
  ): Promise<BusinessInterestGetResponse>;
  OrdersGet(request: OrdersGetRequest): Promise<OrdersGetResponse>;
  BusinessServiceGet(
    request: BusinessServiceGetRequest
  ): Promise<BusinessServiceGetResponse>;
  AdminBusinessesGet(
    request: AdminBusinessesGetRequest
  ): Promise<AdminBusinessesGetResponse>;
  AdminBusinessBanPost(
    request: AdminBusinessBanPostRequest
  ): Promise<AdminBusinessBanPostResponse>;
  AdminBusinessDeletePost(
    request: AdminBusinessDeletePostRequest
  ): Promise<AdminBusinessDeletePostResponse>;
  AdminUsersDeletePost(
    request: AdminUsersDeletePostRequest
  ): Promise<AdminUsersDeletePostResponse>;
  AdminUsersUnbanPost(
    request: AdminUsersUnbanPostRequest
  ): Promise<AdminUsersUnbanPostResponse>;
  AdminBusinessesUnbanPost(
    request: AdminBusinessesUnbanPostRequest
  ): Promise<AdminBusinessesUnbanPostResponse>;
  AdminUsersGet(request: AdminUsersGetRequest): Promise<AdminUsersGetResponse>;
  AdminPostCategories(
    request: AdminCategoryPostRequest
  ): Promise<AdminCategoryPostResponese>;
  AdminPostEditCategories(
    request: AdminCategoryPostEditRequest
  ): Promise<AdminCategoryPostEditResponese>;
  AdminPostDeleteCategories(
    request: AdminCategoryPostDeleteRequest
  ): Promise<AdminCategoryPostDeleteResponese>;
  CategoriesGet(request: CategoriesGetRequest): Promise<CategoriesGetResponse>;
  CategoryGet(request: CategoryGetRequest): Promise<CategoryGetResponse>;
  StripeKeyGet(request: StripeKeyGetRequest): Promise<StripeKeyGetResponse>;
  StripeSetupPost(
    request: StripeSetupPostRequest
  ): Promise<StripeSetupPostResponse>;
  BusinesssGet(request: BusinessesGetRequest): Promise<BusinessesGetResponse>;
  AuthCheckGet(request: AuthCheckGetRequest): Promise<AuthCheckGetResponse>;
  BusinessServicesPut(
    request: BusinessServicesPutRequest
  ): Promise<BusinessServicesPutResponse>;
  BusinessFeedbacksGet(
    request: BusinessFeedbacksGetRequest
  ): Promise<BusinessFeedbacksGetResponse>;
  BusinessRatingGet(
    request: BusinessRatingGetRequest
  ): Promise<BusinessRatingGetResponse>;
  OrdersPost(request: OrdersPostRequest): Promise<OrdersPostResponse>;
  UpdateOrderConnectPost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse>;
  UpdateOrderRejectPost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse>;
  UpdateOrderCancelPost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse>;
  UpdateOrderCompletePost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse>;
  FeedbacksPost(request: FeedbacksPostRequest): Promise<FeedbacksPostResponse>;
  AuthMailPost(request: AuthMailPostRequest): Promise<AuthMailPostResponse>;
  OrdersProjectsGet(
    request: UserProjectsGetRequest
  ): Promise<UserProjectsGetResponse>;
  BusinessPaymentMethodPost(
    request: BusinessPaymentMethodPostRequest
  ): Promise<BusinessPaymentMethodPostResponse>;
}

export class ApiServiceClientImpl implements ApiService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AuthCredential = this.AuthCredential.bind(this);
    this.AuthPing = this.AuthPing.bind(this);
    this.AuthPasswordPost = this.AuthPasswordPost.bind(this);
    this.AuthOTPPost = this.AuthOTPPost.bind(this);
    this.AuthResendOTP = this.AuthResendOTP.bind(this);
    this.AuthForgotPost = this.AuthForgotPost.bind(this);
    this.AuthForgotReset = this.AuthForgotReset.bind(this);
    this.UserPost = this.UserPost.bind(this);
    this.BusinessPost = this.BusinessPost.bind(this);
    this.UserGet = this.UserGet.bind(this);
    this.BusinessGet = this.BusinessGet.bind(this);
    this.BusinessPut = this.BusinessPut.bind(this);
    this.BusinessPaymentMethodGet = this.BusinessPaymentMethodGet.bind(this);
    this.OrdersProjectCancel = this.OrdersProjectCancel.bind(this);
    this.BusinessPaymentMethodSetupPost =
      this.BusinessPaymentMethodSetupPost.bind(this);
    this.BusinessPaymentMethodDeletePost =
      this.BusinessPaymentMethodDeletePost.bind(this);
    this.ContactGet = this.ContactGet.bind(this);
    this.ContactPut = this.ContactPut.bind(this);
    this.UserPut = this.UserPut.bind(this);
    this.StatesGet = this.StatesGet.bind(this);
    this.AdminBanUserPost = this.AdminBanUserPost.bind(this);
    this.AdminGroupGet = this.AdminGroupGet.bind(this);
    this.AdminGroupPost = this.AdminGroupPost.bind(this);
    this.AdminGroupPut = this.AdminGroupPut.bind(this);
    this.StripePaymentMethodGet = this.StripePaymentMethodGet.bind(this);
    this.UploadUrlPost = this.UploadUrlPost.bind(this);
    this.BusinessNearGet = this.BusinessNearGet.bind(this);
    this.BusinessInterestGet = this.BusinessInterestGet.bind(this);
    this.OrdersGet = this.OrdersGet.bind(this);
    this.BusinessServiceGet = this.BusinessServiceGet.bind(this);
    this.AdminBusinessesGet = this.AdminBusinessesGet.bind(this);
    this.AdminBusinessBanPost = this.AdminBusinessBanPost.bind(this);
    this.AdminBusinessDeletePost = this.AdminBusinessDeletePost.bind(this);
    this.AdminUsersDeletePost = this.AdminUsersDeletePost.bind(this);
    this.AdminUsersUnbanPost = this.AdminUsersUnbanPost.bind(this);
    this.AdminBusinessesUnbanPost = this.AdminBusinessesUnbanPost.bind(this);
    this.AdminUsersGet = this.AdminUsersGet.bind(this);
    this.AdminPostCategories = this.AdminPostCategories.bind(this);
    this.AdminPostEditCategories = this.AdminPostEditCategories.bind(this);
    this.AdminPostDeleteCategories = this.AdminPostDeleteCategories.bind(this);
    this.CategoriesGet = this.CategoriesGet.bind(this);
    this.CategoryGet = this.CategoryGet.bind(this);
    this.StripeKeyGet = this.StripeKeyGet.bind(this);
    this.StripeSetupPost = this.StripeSetupPost.bind(this);
    this.BusinesssGet = this.BusinesssGet.bind(this);
    this.AuthCheckGet = this.AuthCheckGet.bind(this);
    this.BusinessServicesPut = this.BusinessServicesPut.bind(this);
    this.BusinessFeedbacksGet = this.BusinessFeedbacksGet.bind(this);
    this.BusinessRatingGet = this.BusinessRatingGet.bind(this);
    this.OrdersPost = this.OrdersPost.bind(this);
    this.UpdateOrderConnectPost = this.UpdateOrderConnectPost.bind(this);
    this.UpdateOrderRejectPost = this.UpdateOrderRejectPost.bind(this);
    this.UpdateOrderCancelPost = this.UpdateOrderCancelPost.bind(this);
    this.UpdateOrderCompletePost = this.UpdateOrderCompletePost.bind(this);
    this.FeedbacksPost = this.FeedbacksPost.bind(this);
    this.AuthMailPost = this.AuthMailPost.bind(this);
    this.OrdersProjectsGet = this.OrdersProjectsGet.bind(this);
    this.BusinessPaymentMethodPost = this.BusinessPaymentMethodPost.bind(this);
  }
  AuthCredential(
    request: AuthCredentialRequest
  ): Promise<AuthCredentialResponse> {
    const data = AuthCredentialRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthCredential',
      data
    );
    return promise.then((data) =>
      AuthCredentialResponse.decode(new _m0.Reader(data))
    );
  }

  AuthPing(request: AuthPingRequest): Promise<AuthPingResponse> {
    const data = AuthPingRequest.encode(request).finish();
    const promise = this.rpc.request('apiservice.ApiService', 'AuthPing', data);
    return promise.then((data) =>
      AuthPingResponse.decode(new _m0.Reader(data))
    );
  }

  AuthPasswordPost(
    request: AuthPasswordPostRequest
  ): Promise<AuthPasswordPostResponse> {
    const data = AuthPasswordPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthPasswordPost',
      data
    );
    return promise.then((data) =>
      AuthPasswordPostResponse.decode(new _m0.Reader(data))
    );
  }

  AuthOTPPost(request: AuthOTPPostRequest): Promise<AuthOTPPostResponse> {
    const data = AuthOTPPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthOTPPost',
      data
    );
    return promise.then((data) =>
      AuthOTPPostResponse.decode(new _m0.Reader(data))
    );
  }

  AuthResendOTP(
    request: AuthResendOTPPostRequest
  ): Promise<AuthResendOTPPostResponse> {
    const data = AuthResendOTPPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthResendOTP',
      data
    );
    return promise.then((data) =>
      AuthResendOTPPostResponse.decode(new _m0.Reader(data))
    );
  }

  AuthForgotPost(
    request: AuthForgotPostRequest
  ): Promise<AuthForgotPostResponse> {
    const data = AuthForgotPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthForgotPost',
      data
    );
    return promise.then((data) =>
      AuthForgotPostResponse.decode(new _m0.Reader(data))
    );
  }

  AuthForgotReset(
    request: AuthForgotResetPostRequest
  ): Promise<AuthForgotResetPostResponse> {
    const data = AuthForgotResetPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthForgotReset',
      data
    );
    return promise.then((data) =>
      AuthForgotResetPostResponse.decode(new _m0.Reader(data))
    );
  }

  UserPost(request: UserPostRequest): Promise<UserPostResponse> {
    const data = UserPostRequest.encode(request).finish();
    const promise = this.rpc.request('apiservice.ApiService', 'UserPost', data);
    return promise.then((data) =>
      UserPostResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessPost(request: BusinessPostRequest): Promise<BusinessPostResponse> {
    const data = BusinessPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessPost',
      data
    );
    return promise.then((data) =>
      BusinessPostResponse.decode(new _m0.Reader(data))
    );
  }

  UserGet(request: UserGetRequest): Promise<UserGetResponse> {
    const data = UserGetRequest.encode(request).finish();
    const promise = this.rpc.request('apiservice.ApiService', 'UserGet', data);
    return promise.then((data) => UserGetResponse.decode(new _m0.Reader(data)));
  }

  BusinessGet(request: BusinessGetRequest): Promise<BusinessGetResponse> {
    const data = BusinessGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessGet',
      data
    );
    return promise.then((data) =>
      BusinessGetResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessPut(request: BusinessPutRequest): Promise<BusinessPutResponse> {
    const data = BusinessPutRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessPut',
      data
    );
    return promise.then((data) =>
      BusinessPutResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessPaymentMethodGet(
    request: BusinessPaymentMethodGetRequest
  ): Promise<BusinessPaymentMethodGetResponse> {
    const data = BusinessPaymentMethodGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessPaymentMethodGet',
      data
    );
    return promise.then((data) =>
      BusinessPaymentMethodGetResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersProjectCancel(
    request: CancelProjectPostRequest
  ): Promise<CancelProjectPostResponse> {
    const data = CancelProjectPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'OrdersProjectCancel',
      data
    );
    return promise.then((data) =>
      CancelProjectPostResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessPaymentMethodSetupPost(
    request: BusinessPaymentMethodSetupPostRequest
  ): Promise<BusinessPaymentMethodSetupPostResponse> {
    const data = BusinessPaymentMethodSetupPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessPaymentMethodSetupPost',
      data
    );
    return promise.then((data) =>
      BusinessPaymentMethodSetupPostResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessPaymentMethodDeletePost(
    request: BusinessPaymentMethodDeletePostRequest
  ): Promise<BusinessPaymentMethodDeletePostResponse> {
    const data =
      BusinessPaymentMethodDeletePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessPaymentMethodDeletePost',
      data
    );
    return promise.then((data) =>
      BusinessPaymentMethodDeletePostResponse.decode(new _m0.Reader(data))
    );
  }

  ContactGet(request: ContactGetRequest): Promise<ContactGetResponse> {
    const data = ContactGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'ContactGet',
      data
    );
    return promise.then((data) =>
      ContactGetResponse.decode(new _m0.Reader(data))
    );
  }

  ContactPut(request: ContactPutRequest): Promise<ContactPutResponse> {
    const data = ContactPutRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'ContactPut',
      data
    );
    return promise.then((data) =>
      ContactPutResponse.decode(new _m0.Reader(data))
    );
  }

  UserPut(request: UserPutRequest): Promise<UserPutResponse> {
    const data = UserPutRequest.encode(request).finish();
    const promise = this.rpc.request('apiservice.ApiService', 'UserPut', data);
    return promise.then((data) => UserPutResponse.decode(new _m0.Reader(data)));
  }

  StatesGet(request: StatesGetRequest): Promise<StatesGetResponse> {
    const data = StatesGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'StatesGet',
      data
    );
    return promise.then((data) =>
      StatesGetResponse.decode(new _m0.Reader(data))
    );
  }

  AdminBanUserPost(
    request: AdminBanUserPostRequest
  ): Promise<AdminBanUserPostResponse> {
    const data = AdminBanUserPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminBanUserPost',
      data
    );
    return promise.then((data) =>
      AdminBanUserPostResponse.decode(new _m0.Reader(data))
    );
  }

  AdminGroupGet(request: AdminGroupGetRequest): Promise<AdminGroupGetResponse> {
    const data = AdminGroupGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminGroupGet',
      data
    );
    return promise.then((data) =>
      AdminGroupGetResponse.decode(new _m0.Reader(data))
    );
  }

  AdminGroupPost(
    request: AdminGroupPostRequest
  ): Promise<AdminGroupPostResponse> {
    const data = AdminGroupPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminGroupPost',
      data
    );
    return promise.then((data) =>
      AdminGroupPostResponse.decode(new _m0.Reader(data))
    );
  }

  AdminGroupPut(request: AdminGroupPutRequest): Promise<AdminGroupPutRequest> {
    const data = AdminGroupPutRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminGroupPut',
      data
    );
    return promise.then((data) =>
      AdminGroupPutRequest.decode(new _m0.Reader(data))
    );
  }

  StripePaymentMethodGet(
    request: StripePaymentMethodGetRequest
  ): Promise<StripePaymentMethodGetResponse> {
    const data = StripePaymentMethodGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'StripePaymentMethodGet',
      data
    );
    return promise.then((data) =>
      StripePaymentMethodGetResponse.decode(new _m0.Reader(data))
    );
  }

  UploadUrlPost(request: UploadUrlPostRequest): Promise<UploadUrlPostResponse> {
    const data = UploadUrlPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'UploadUrlPost',
      data
    );
    return promise.then((data) =>
      UploadUrlPostResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessNearGet(
    request: BusinessNearGetRequest
  ): Promise<BusinessNearGetResponse> {
    const data = BusinessNearGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessNearGet',
      data
    );
    return promise.then((data) =>
      BusinessNearGetResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessInterestGet(
    request: BusinessInterestGetRequest
  ): Promise<BusinessInterestGetResponse> {
    const data = BusinessInterestGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessInterestGet',
      data
    );
    return promise.then((data) =>
      BusinessInterestGetResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersGet(request: OrdersGetRequest): Promise<OrdersGetResponse> {
    const data = OrdersGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'OrdersGet',
      data
    );
    return promise.then((data) =>
      OrdersGetResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessServiceGet(
    request: BusinessServiceGetRequest
  ): Promise<BusinessServiceGetResponse> {
    const data = BusinessServiceGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessServiceGet',
      data
    );
    return promise.then((data) =>
      BusinessServiceGetResponse.decode(new _m0.Reader(data))
    );
  }

  AdminBusinessesGet(
    request: AdminBusinessesGetRequest
  ): Promise<AdminBusinessesGetResponse> {
    const data = AdminBusinessesGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminBusinessesGet',
      data
    );
    return promise.then((data) =>
      AdminBusinessesGetResponse.decode(new _m0.Reader(data))
    );
  }

  AdminBusinessBanPost(
    request: AdminBusinessBanPostRequest
  ): Promise<AdminBusinessBanPostResponse> {
    const data = AdminBusinessBanPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminBusinessBanPost',
      data
    );
    return promise.then((data) =>
      AdminBusinessBanPostResponse.decode(new _m0.Reader(data))
    );
  }

  AdminBusinessDeletePost(
    request: AdminBusinessDeletePostRequest
  ): Promise<AdminBusinessDeletePostResponse> {
    const data = AdminBusinessDeletePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminBusinessDeletePost',
      data
    );
    return promise.then((data) =>
      AdminBusinessDeletePostResponse.decode(new _m0.Reader(data))
    );
  }

  AdminUsersDeletePost(
    request: AdminUsersDeletePostRequest
  ): Promise<AdminUsersDeletePostResponse> {
    const data = AdminUsersDeletePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminUsersDeletePost',
      data
    );
    return promise.then((data) =>
      AdminUsersDeletePostResponse.decode(new _m0.Reader(data))
    );
  }

  AdminUsersUnbanPost(
    request: AdminUsersUnbanPostRequest
  ): Promise<AdminUsersUnbanPostResponse> {
    const data = AdminUsersUnbanPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminUsersUnbanPost',
      data
    );
    return promise.then((data) =>
      AdminUsersUnbanPostResponse.decode(new _m0.Reader(data))
    );
  }

  AdminBusinessesUnbanPost(
    request: AdminBusinessesUnbanPostRequest
  ): Promise<AdminBusinessesUnbanPostResponse> {
    const data = AdminBusinessesUnbanPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminBusinessesUnbanPost',
      data
    );
    return promise.then((data) =>
      AdminBusinessesUnbanPostResponse.decode(new _m0.Reader(data))
    );
  }

  AdminUsersGet(request: AdminUsersGetRequest): Promise<AdminUsersGetResponse> {
    const data = AdminUsersGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminUsersGet',
      data
    );
    return promise.then((data) =>
      AdminUsersGetResponse.decode(new _m0.Reader(data))
    );
  }

  AdminPostCategories(
    request: AdminCategoryPostRequest
  ): Promise<AdminCategoryPostResponese> {
    const data = AdminCategoryPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminPostCategories',
      data
    );
    return promise.then((data) =>
      AdminCategoryPostResponese.decode(new _m0.Reader(data))
    );
  }

  AdminPostEditCategories(
    request: AdminCategoryPostEditRequest
  ): Promise<AdminCategoryPostEditResponese> {
    const data = AdminCategoryPostEditRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminPostEditCategories',
      data
    );
    return promise.then((data) =>
      AdminCategoryPostEditResponese.decode(new _m0.Reader(data))
    );
  }

  AdminPostDeleteCategories(
    request: AdminCategoryPostDeleteRequest
  ): Promise<AdminCategoryPostDeleteResponese> {
    const data = AdminCategoryPostDeleteRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AdminPostDeleteCategories',
      data
    );
    return promise.then((data) =>
      AdminCategoryPostDeleteResponese.decode(new _m0.Reader(data))
    );
  }

  CategoriesGet(request: CategoriesGetRequest): Promise<CategoriesGetResponse> {
    const data = CategoriesGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'CategoriesGet',
      data
    );
    return promise.then((data) =>
      CategoriesGetResponse.decode(new _m0.Reader(data))
    );
  }

  CategoryGet(request: CategoryGetRequest): Promise<CategoryGetResponse> {
    const data = CategoryGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'CategoryGet',
      data
    );
    return promise.then((data) =>
      CategoryGetResponse.decode(new _m0.Reader(data))
    );
  }

  StripeKeyGet(request: StripeKeyGetRequest): Promise<StripeKeyGetResponse> {
    const data = StripeKeyGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'StripeKeyGet',
      data
    );
    return promise.then((data) =>
      StripeKeyGetResponse.decode(new _m0.Reader(data))
    );
  }

  StripeSetupPost(
    request: StripeSetupPostRequest
  ): Promise<StripeSetupPostResponse> {
    const data = StripeSetupPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'StripeSetupPost',
      data
    );
    return promise.then((data) =>
      StripeSetupPostResponse.decode(new _m0.Reader(data))
    );
  }

  BusinesssGet(request: BusinessesGetRequest): Promise<BusinessesGetResponse> {
    const data = BusinessesGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinesssGet',
      data
    );
    return promise.then((data) =>
      BusinessesGetResponse.decode(new _m0.Reader(data))
    );
  }

  AuthCheckGet(request: AuthCheckGetRequest): Promise<AuthCheckGetResponse> {
    const data = AuthCheckGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthCheckGet',
      data
    );
    return promise.then((data) =>
      AuthCheckGetResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessServicesPut(
    request: BusinessServicesPutRequest
  ): Promise<BusinessServicesPutResponse> {
    const data = BusinessServicesPutRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessServicesPut',
      data
    );
    return promise.then((data) =>
      BusinessServicesPutResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessFeedbacksGet(
    request: BusinessFeedbacksGetRequest
  ): Promise<BusinessFeedbacksGetResponse> {
    const data = BusinessFeedbacksGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessFeedbacksGet',
      data
    );
    return promise.then((data) =>
      BusinessFeedbacksGetResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessRatingGet(
    request: BusinessRatingGetRequest
  ): Promise<BusinessRatingGetResponse> {
    const data = BusinessRatingGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessRatingGet',
      data
    );
    return promise.then((data) =>
      BusinessRatingGetResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersPost(request: OrdersPostRequest): Promise<OrdersPostResponse> {
    const data = OrdersPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'OrdersPost',
      data
    );
    return promise.then((data) =>
      OrdersPostResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateOrderConnectPost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse> {
    const data = UpdateOrderStatusPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'UpdateOrderConnectPost',
      data
    );
    return promise.then((data) =>
      UpdateOrderStatusPostResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateOrderRejectPost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse> {
    const data = UpdateOrderStatusPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'UpdateOrderRejectPost',
      data
    );
    return promise.then((data) =>
      UpdateOrderStatusPostResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateOrderCancelPost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse> {
    const data = UpdateOrderStatusPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'UpdateOrderCancelPost',
      data
    );
    return promise.then((data) =>
      UpdateOrderStatusPostResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateOrderCompletePost(
    request: UpdateOrderStatusPostRequest
  ): Promise<UpdateOrderStatusPostResponse> {
    const data = UpdateOrderStatusPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'UpdateOrderCompletePost',
      data
    );
    return promise.then((data) =>
      UpdateOrderStatusPostResponse.decode(new _m0.Reader(data))
    );
  }

  FeedbacksPost(request: FeedbacksPostRequest): Promise<FeedbacksPostResponse> {
    const data = FeedbacksPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'FeedbacksPost',
      data
    );
    return promise.then((data) =>
      FeedbacksPostResponse.decode(new _m0.Reader(data))
    );
  }

  AuthMailPost(request: AuthMailPostRequest): Promise<AuthMailPostResponse> {
    const data = AuthMailPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'AuthMailPost',
      data
    );
    return promise.then((data) =>
      AuthMailPostResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersProjectsGet(
    request: UserProjectsGetRequest
  ): Promise<UserProjectsGetResponse> {
    const data = UserProjectsGetRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'OrdersProjectsGet',
      data
    );
    return promise.then((data) =>
      UserProjectsGetResponse.decode(new _m0.Reader(data))
    );
  }

  BusinessPaymentMethodPost(
    request: BusinessPaymentMethodPostRequest
  ): Promise<BusinessPaymentMethodPostResponse> {
    const data = BusinessPaymentMethodPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'apiservice.ApiService',
      'BusinessPaymentMethodPost',
      data
    );
    return promise.then((data) =>
      BusinessPaymentMethodPostResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
