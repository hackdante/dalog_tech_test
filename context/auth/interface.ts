import { UserUI } from "@/interfaces";
export interface AuthContextTypeUI {
  user: UserUI | null;
  isAuthenticated: boolean;
  login: (userData: UserUI) => void;
  logout: () => void;
}
