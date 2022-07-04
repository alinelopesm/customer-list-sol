import axios from 'axios';

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_API_URL;
const api = axios.create({
    baseURL: `${url}` ,
});

export default api;