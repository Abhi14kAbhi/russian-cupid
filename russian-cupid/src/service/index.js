import axios from 'axios';

export const registerUser = (data) => {
  return axios.post('http://localhost:3030/user/register', data).then((res) => {
    return res.data;
  });
};

export const loginUser = (data) => {
  return axios.post('http://localhost:3030/user/login', data).then((res) => {
    return res.data;
  });
};
