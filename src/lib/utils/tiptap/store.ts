import { create } from "zustand";

type TitapStore = {
  content: string;
  setContent: (newContent: string) => void;
};

export const useTiptapStore = create<TitapStore>((set) => ({
  content: "",
  setContent: (newContent: string) => set(() => ({ content: newContent })),
}));
