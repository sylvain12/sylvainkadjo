import { create } from "zustand";
import { IBlogPost } from "./models/types";

type State = {
  posts: IBlogPost[];
  showedPost: IBlogPost | null;
};

type Actions = {
  setPosts: (items: IBlogPost[]) => void;
  setShowedPost: (post: IBlogPost) => void;
};

export const usePostStore = create<State & Actions>((set) => ({
  posts: [],
  showedPost: null,
  setPosts: (items: IBlogPost[]) => set(() => ({ posts: items })),
  setShowedPost: (post: IBlogPost) => set(() => ({ showedPost: post })),
}));
