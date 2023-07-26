import axios from 'axios';

import { API_BASE_URL } from '@/config/constant';
import {
  // BusinessInterestGetRequest,
  BusinessInterestGetResponse_Data,
  // StripeKeyGetRequest,
  StripeKeyGetResponse_Data,
} from '@/pb/apiservice';

export function getNear() {
  return axios.get(API_BASE_URL + '/businesses/near');
}

export function getMostInterest() {
  return axios
    .get(API_BASE_URL + '/businesses/interest')
    .then((res) => BusinessInterestGetResponse_Data.fromJSON(res.data));
}

export function getStripeKey() {
  return axios
    .get(API_BASE_URL + '/stripe/key')
    .then((res) => StripeKeyGetResponse_Data.fromJSON(res.data));
}
