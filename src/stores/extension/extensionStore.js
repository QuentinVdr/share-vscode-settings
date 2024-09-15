import { create } from 'zustand';

export const useExtensionStore = create((set) => ({
  extensionsIds: [],
  setExtensionsIds: (extensionsIds) => set({ extensionsIds: extensionsIds })
}));
