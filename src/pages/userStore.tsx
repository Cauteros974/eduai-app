import { create } from "zustand";

interface User {
    id: string;
    email: string;
    name: string;
}

interface UserState {
    user: User | null;
    token: string | string;
    isLoading : boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
}