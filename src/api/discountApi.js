import axios from '../config/axios';

export const getAllDiscounts = () =>
  axios.get(`/entries?content_type=discount`);
