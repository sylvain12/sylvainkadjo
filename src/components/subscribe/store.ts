import { create } from "zustand";

type SubscribeStore = {
  isVisible: boolean;
  setVisibility: (visibility: boolean) => void;
};

export const useSubscribevisibilitystore = create<SubscribeStore>((set) => ({
  isVisible: false,
  setVisibility: (visibility: boolean) =>
    set(() => ({ isVisible: visibility })),
}));
