import axios from '../config/axios';

export const getAllCars = () => axios.get(`/entries?content_type=car`);
