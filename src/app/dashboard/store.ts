import { create } from "zustand";
import { IBlogPost } from "../posts/models/types";

type State = {
  posts: IBlogPost[];
  editPost: IBlogPost | null;
  //   showCasePost: IBlogPost | null;
};

type Actions = {
  setPosts: (items: IBlogPost[]) => void;
  setEditPost: (post: IBlogPost) => void;
  //   setShowCasePost: (post: IBlogPost) => void;
};

export const useDashboardPostStore = create<State & Actions>((set) => ({
  posts: [],
  editPost: null,
  //   showCasePost: null,
  setPosts: (items: IBlogPost[]) => set(() => ({ posts: items })),
  setEditPost: (post: IBlogPost) => set(() => ({ editPost: post })),
  //   setShowCasePost: (post: IBlogPost) => set(() => ({ showCasePost: post })),
}));
