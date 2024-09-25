import axios from 'axios';

/** The configured Axios instance. */
export const MarketplaceHttpClient = axios.create({
  baseURL: import.meta.env.VITE_MARKETPLACE_URL
});
