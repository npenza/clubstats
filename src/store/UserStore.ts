import create from "zustand";

// State management for users
interface UserState {
  userLoggedIn: true;
}

export const useUserStore = create<UserState>(() => ({
  userLoggedIn: true,
}));
