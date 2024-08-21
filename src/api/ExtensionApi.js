import * as cheerio from 'cheerio';
import { ScrapperHttpClient } from './ScrapperHttpClient';

const ExtensionBaseUrl = 'items?itemName=';

export const findExtensionDetailById = (extensionName) =>
  ScrapperHttpClient.get(`${ExtensionBaseUrl}${extensionName}`).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    return {
      name: $('h1 > span.ux-item-name').text(),
      description: $('.ux-item-shortdesc').text()
    };
  });
