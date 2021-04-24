import axios from 'axios';
import { BASEURL } from './config';

export const api = (urlPath, method, tokenExists, data) => {
  if (tokenExists) {
    const token = localStorage.getItem('token');
    return axios[method](
      `${BASEURL}${urlPath}`,
      {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data
    ).then((res) => res.data);
  }
  return axios[method](`${BASEURL}${urlPath}`, data).then((res) => res.data);
};
