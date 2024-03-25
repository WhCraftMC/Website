import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server.whcraft.top:9402',
  timeout: 6000,
});

export default api;