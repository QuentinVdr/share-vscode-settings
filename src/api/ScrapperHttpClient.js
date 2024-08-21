import axios from 'axios';

/** The configured Axios instance. */
export const ScrapperHttpClient = axios.create({
  baseURL: `https://marketplace.visualstudio.com`
});
