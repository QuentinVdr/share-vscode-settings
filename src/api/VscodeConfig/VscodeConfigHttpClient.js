import axios from 'axios';

/** The configured Axios instance. */
export const ApiHttpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'X-Api-Key': import.meta.env.VITE_API_KEY
  }
});
