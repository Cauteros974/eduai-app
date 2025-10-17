import { create } from "zustand";

interface User {
    id: string;
    email: string;
    name: string;
}

interface UserState {
    user: User | null;
    token: string | string;
    
}