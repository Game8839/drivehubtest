import axios from 'axios';
import { getAccessToken } from '../utills/localStorage';

axios.defaults.baseURL = 'https://cdn.contentful.com/spaces/vveq832fsd73/';

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
