import { UserUI } from "@/interfaces";
export interface AuthContextTypeUI {
  currentUser: UserUI | null;
  login: (user: UserUI) => void;
  logout: () => void;
  isHydrated: boolean;
}
