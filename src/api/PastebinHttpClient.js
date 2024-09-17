import axios from 'axios';

/** The configured Axios instance. */
export const PastebinHttpClient = axios.create({
  baseURL: import.meta.env.VITE_PASTEBIN_URL
});
