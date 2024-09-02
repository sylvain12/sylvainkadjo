import { create } from "zustand";
import { IBlogPost } from "../posts/models/types";

type State = {
  posts: IBlogPost[];
  //   showedPost: IBlogPost | null;
  //   showCasePost: IBlogPost | null;
};

type Actions = {
  setPosts: (items: IBlogPost[]) => void;
  //   setShowedPost: (post: IBlogPost) => void;
  //   setShowCasePost: (post: IBlogPost) => void;
};

export const useDashboardPostStore = create<State & Actions>((set) => ({
  posts: [],
  //   showedPost: null,
  //   showCasePost: null,
  setPosts: (items: IBlogPost[]) => set(() => ({ posts: items })),
  //   setShowedPost: (post: IBlogPost) => set(() => ({ showedPost: post })),
  //   setShowCasePost: (post: IBlogPost) => set(() => ({ showCasePost: post })),
}));
