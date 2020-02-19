import axios from 'axios';
const api = process.env.REACT_APP_RECORDS_API_URL || 'http://localhost:3004/'

export const getData = () => axios.get(`${api}/api/v1/records`);

export const createData = (record) => axios.post(`${api}/api/v1/records`, record);