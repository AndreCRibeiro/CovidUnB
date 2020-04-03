import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.215.210.191/',
});

export default api;
