/**
 * This file should contains all the factory to build react query keys
 */

/** Exemple */
export const exempleQKey = {
  mainKey: 'exemple',
  list: () => [exempleQKey.mainKey, 'list'],
  detail: (id) => [exempleQKey.mainKey, 'detail', id]
};

/** Extension */
export const extensionQKey = {
  mainKey: 'extension',
  detail: (id) => [extensionQKey.mainKey, 'detail', id]
};

/** Pastebin */
export const pastebinQKey = {
  mainKey: 'pastebin',
  detail: (id) => [pastebinQKey.mainKey, 'detail', id]
};
