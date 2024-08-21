/**
 * This file should contains all the factory to build react query keys
 */

/** Exemple */
export const exempleQKey = {
  mainKey: 'exemple',
  list: () => [exempleQKey.mainKey, 'list'],
  detail: (id) => [exempleQKey.mainKey, 'detail', id]
};

/** Exemple */
export const extensionQKey = {
  mainKey: 'extension',
  list: () => [extensionQKey.mainKey, 'list'],
  detail: (id) => [extensionQKey.mainKey, 'detail', id]
};
