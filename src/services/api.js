import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    // Authorization: '620cd6dc28e6754c927f38c55fda93b15ce5d1b2',
    Authorization: 'Bearer 15321beb2661bf0bd41a98b20d99fd14dd97877a',
  },
});

export default api;
