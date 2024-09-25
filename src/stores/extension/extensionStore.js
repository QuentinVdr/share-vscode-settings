import { create } from 'zustand';

export const useExtensionStore = create((set) => ({
  extensionIds: [],
  setExtensionIds: (extensionIds) => set({ extensionIds: extensionIds })
}));
