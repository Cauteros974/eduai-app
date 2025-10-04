import { create } from 'zustand';

interface User {
    id: string, 
    email: string,
    name: string,
}

interface UserState {
    user: User | null;
    token: string | null;
    isloading: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    
}))