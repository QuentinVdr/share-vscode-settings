import { ApiHttpClient } from './VscodeConfigHttpClient';

const baseURL = '/vscode-config';

/**
 * Creates a new VSCode configuration.
 *
 * @param {Object} data - The configuration data.
 * @param {string} data._id - The unique identifier for the configuration.
 * @param {string[]} data.extensionIds - The list of extension IDs.
 * @param {Date} data.createdAt - The creation date of the configuration.
 * @returns {Promise<{_id: string, extensionIds: string[], createdAt: Date}>} The created configuration data.
 */
export const createVscodeConfig = (data) => ApiHttpClient.post(baseURL, data).then((res) => res.data);

/**
 * Finds a VSCode configuration by its ID.
 *
 * @param {string} id - The unique identifier for the configuration.
 * @returns {Promise<{_id: string, extensionIds: string[], createdAt: Date}>} The configuration data.
 */
export const findVscodeConfigById = (id) => ApiHttpClient.get(`${baseURL}/${id}`).then((res) => res.data);
