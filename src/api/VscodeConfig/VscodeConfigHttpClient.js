import axios from 'axios';

/** The configured Axios instance. */
export const ApiHttpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    x_api_key: import.meta.env.VITE_API_KEY
  }
});
