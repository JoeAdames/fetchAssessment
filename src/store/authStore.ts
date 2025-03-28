import { create } from 'zustand';
import AuthState from '@/interfaces/auth/AuthState';

 export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: (name, email) => set({user:{ name, email}}),
    logout: () => set({ user: null },) 
 }))