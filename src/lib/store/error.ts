import { create } from "zustand";

type FormErrorStore = {
  hasError: boolean;
  errorMessage: string;
  setError: (message: string) => void;
  resetForm: () => void;
};

export const useFormErrorStore = create<FormErrorStore>((set) => ({
  hasError: false,
  errorMessage: "",
  setError: (msg: string) => set(() => ({ hasError: true, errorMessage: msg })),
  resetForm: () => set(() => ({ hasError: false, errorMessage: "" })),
}));
