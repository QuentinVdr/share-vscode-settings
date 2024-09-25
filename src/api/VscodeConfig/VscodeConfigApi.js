import { ApiHttpClient } from './VscodeConfigHttpClient';

const baseURL = '/vscode-config';

export const createVscodeConfig = (data) => ApiHttpClient.post(baseURL, data).then((res) => res.data);

export const getVscodeConfig = (id) => ApiHttpClient.get(`/${id}`).then((res) => res.data);
