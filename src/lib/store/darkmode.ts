import { DateTime } from 'luxon';
import {create} from 'zustand'


type DarkModeStore = {
    isDark: boolean;
    toggleDarkmode: () => void
}

export const useDarkMode = create<DarkModeStore>((set) => ({
    isDark: DateTime.local().hour >= 18 || DateTime.local().hour <= 4 ? true : false,
    toggleDarkmode: () => set((state) => ({isDark: !state.isDark}))
}))

