import { create } from "zustand";
import { IProject } from "./models/types";

type State = {
  projects: IProject[];
};

type Actions = {
  setProjects: (items: IProject[]) => void;
};

export const useProjectStore = create<State & Actions>((set) => ({
  projects: [],
  setProjects: (items: IProject[]) => set(() => ({ projects: items })),
}));
