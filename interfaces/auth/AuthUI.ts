import { UserUI } from '@/interfaces/auth';

export interface AuthContextUI {
  user: UserUI | null;     
  isAuthenticated: boolean; 
  login: (userData: UserUI) => void;
  logout: () => void;
}