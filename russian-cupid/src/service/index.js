import axios from 'axios';

export const registerUser = (data) => {
  return axios.post('http://localhost:3030', data).then((res) => res.data);
};
