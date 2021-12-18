import axios from 'axios';
import {CONSTANT} from '../utils/constants';

export const connect = axios.create({
  baseURL: CONSTANT.baseUrl,
  timeout: 1000,
  headers: {Authorization: `Bearer ${CONSTANT.token}`},
});
