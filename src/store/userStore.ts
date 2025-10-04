import { create } from 'zustand';

interface User {
    id: string;
    email: string;
    name: string;
}

interface UserState {
    user: User | null;
    token: string | null;
    isloading: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    token: null,
    isLoading: true,
    login: (userData, token) => set({ user: userData, token, isLoading: false }),
    logout: () => set({ user: null, token: null, isLoading: false }),
}));