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

/** VscodeConfig */
export const vscodeConfigQKey = {
  mainKey: 'vscode-config',
  detail: (id) => [vscodeConfigQKey.mainKey, 'detail', id]
};
