/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'const';

export enum ROLE {
  CUSTOMER = 0,
  HANDYMAN = 1,
  ADMIN = 2,
  UNRECOGNIZED = -1,
}

export function rOLEFromJSON(object: any): ROLE {
  switch (object) {
    case 0:
    case 'CUSTOMER':
      return ROLE.CUSTOMER;
    case 1:
    case 'HANDYMAN':
      return ROLE.HANDYMAN;
    case 2:
    case 'ADMIN':
      return ROLE.ADMIN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ROLE.UNRECOGNIZED;
  }
}

export function rOLEToJSON(object: ROLE): string {
  switch (object) {
    case ROLE.CUSTOMER:
      return 'CUSTOMER';
    case ROLE.HANDYMAN:
      return 'HANDYMAN';
    case ROLE.ADMIN:
      return 'ADMIN';
    default:
      return 'UNKNOWN';
  }
}

export enum serviceStatus {
  SERVICE_ACTIVE = 0,
  SERVICE_INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function serviceStatusFromJSON(object: any): serviceStatus {
  switch (object) {
    case 0:
    case 'SERVICE_ACTIVE':
      return serviceStatus.SERVICE_ACTIVE;
    case 1:
    case 'SERVICE_INACTIVE':
      return serviceStatus.SERVICE_INACTIVE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return serviceStatus.UNRECOGNIZED;
  }
}

export function serviceStatusToJSON(object: serviceStatus): string {
  switch (object) {
    case serviceStatus.SERVICE_ACTIVE:
      return 'SERVICE_ACTIVE';
    case serviceStatus.SERVICE_INACTIVE:
      return 'SERVICE_INACTIVE';
    default:
      return 'UNKNOWN';
  }
}

export enum otpType {
  REGISTER = 0,
  FORGOT_PASSWORD = 1,
  CHANGE_MAIL = 2,
  UNRECOGNIZED = -1,
}

export function otpTypeFromJSON(object: any): otpType {
  switch (object) {
    case 0:
    case 'REGISTER':
      return otpType.REGISTER;
    case 1:
    case 'FORGOT_PASSWORD':
      return otpType.FORGOT_PASSWORD;
    case 2:
    case 'CHANGE_MAIL':
      return otpType.CHANGE_MAIL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return otpType.UNRECOGNIZED;
  }
}

export function otpTypeToJSON(object: otpType): string {
  switch (object) {
    case otpType.REGISTER:
      return 'REGISTER';
    case otpType.FORGOT_PASSWORD:
      return 'FORGOT_PASSWORD';
    case otpType.CHANGE_MAIL:
      return 'CHANGE_MAIL';
    default:
      return 'UNKNOWN';
  }
}

export enum orderStatus {
  PENDING = 0,
  CONNECTED = 1,
  REJECTED = 2,
  CANCELED = 3,
  COMPLETED = 4,
  UNRECOGNIZED = -1,
}

export function orderStatusFromJSON(object: any): orderStatus {
  switch (object) {
    case 0:
    case 'PENDING':
      return orderStatus.PENDING;
    case 1:
    case 'CONNECTED':
      return orderStatus.CONNECTED;
    case 2:
    case 'REJECTED':
      return orderStatus.REJECTED;
    case 3:
    case 'CANCELED':
      return orderStatus.CANCELED;
    case 4:
    case 'COMPLETED':
      return orderStatus.COMPLETED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return orderStatus.UNRECOGNIZED;
  }
}

export function orderStatusToJSON(object: orderStatus): string {
  switch (object) {
    case orderStatus.PENDING:
      return 'PENDING';
    case orderStatus.CONNECTED:
      return 'CONNECTED';
    case orderStatus.REJECTED:
      return 'REJECTED';
    case orderStatus.CANCELED:
      return 'CANCELED';
    case orderStatus.COMPLETED:
      return 'COMPLETED';
    default:
      return 'UNKNOWN';
  }
}

export enum accountStatus {
  ACTIVE = 0,
  INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function accountStatusFromJSON(object: any): accountStatus {
  switch (object) {
    case 0:
    case 'ACTIVE':
      return accountStatus.ACTIVE;
    case 1:
    case 'INACTIVE':
      return accountStatus.INACTIVE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return accountStatus.UNRECOGNIZED;
  }
}

export function accountStatusToJSON(object: accountStatus): string {
  switch (object) {
    case accountStatus.ACTIVE:
      return 'ACTIVE';
    case accountStatus.INACTIVE:
      return 'INACTIVE';
    default:
      return 'UNKNOWN';
  }
}

export enum sortQuery {
  DEFAULT = 0,
  REQUEST = 1,
  REVIEW = 2,
  UNRECOGNIZED = -1,
}

export function sortQueryFromJSON(object: any): sortQuery {
  switch (object) {
    case 0:
    case 'DEFAULT':
      return sortQuery.DEFAULT;
    case 1:
    case 'REQUEST':
      return sortQuery.REQUEST;
    case 2:
    case 'REVIEW':
      return sortQuery.REVIEW;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return sortQuery.UNRECOGNIZED;
  }
}

export function sortQueryToJSON(object: sortQuery): string {
  switch (object) {
    case sortQuery.DEFAULT:
      return 'DEFAULT';
    case sortQuery.REQUEST:
      return 'REQUEST';
    case sortQuery.REVIEW:
      return 'REVIEW';
    default:
      return 'UNKNOWN';
  }
}

export enum registrationProcess {
  DONE = 0,
  STEP_1 = 1,
  STEP_2 = 2,
  STEP_3 = 3,
  UNRECOGNIZED = -1,
}

export function registrationProcessFromJSON(object: any): registrationProcess {
  switch (object) {
    case 0:
    case 'DONE':
      return registrationProcess.DONE;
    case 1:
    case 'STEP_1':
      return registrationProcess.STEP_1;
    case 2:
    case 'STEP_2':
      return registrationProcess.STEP_2;
    case 3:
    case 'STEP_3':
      return registrationProcess.STEP_3;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return registrationProcess.UNRECOGNIZED;
  }
}

export function registrationProcessToJSON(object: registrationProcess): string {
  switch (object) {
    case registrationProcess.DONE:
      return 'DONE';
    case registrationProcess.STEP_1:
      return 'STEP_1';
    case registrationProcess.STEP_2:
      return 'STEP_2';
    case registrationProcess.STEP_3:
      return 'STEP_3';
    default:
      return 'UNKNOWN';
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
