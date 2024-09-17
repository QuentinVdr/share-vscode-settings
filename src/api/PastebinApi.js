import { PastebinHttpClient } from './PastebinHttpClient';

export const createPastebin = (data) =>
  PastebinHttpClient.post('/api/api_post.php', {
    api_dev_key: import.meta.env.VITE_PASTEBIN_KEY,
    api_option: 'paste',
    api_paste_code: JSON.stringify(data),
    api_paste_expire_date: '1D',
    api_paste_format: 'text'
  }).then((res) => res.data);

export const getPastebin = (id) => PastebinHttpClient.get(`/raw/${id}`).then((res) => res.data);
