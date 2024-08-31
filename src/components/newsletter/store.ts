import { create } from "zustand";

type SubscriberStore = {
  subscriber: string;
  setSubscriber: (email: string) => void;
};

export const useSubscriberStore = create<SubscriberStore>((set) => ({
  subscriber: "",
  setSubscriber: (email: string) => set(() => ({ subscriber: email })),
}));
