import axios from 'axios';

/** The configured Axios instance. */
export const ScrapperHttpClient = axios.create({
  baseURL: import.meta.env.VITE_MARKETPLACE_URL
});
