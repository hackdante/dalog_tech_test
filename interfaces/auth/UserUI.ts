export type UserRoleType = 'admin' | 'technician' | 'viewer';
export type UserGenderType = 'male' | 'female' | 'other';
export type ThemeType = 'light' | 'dark';

export interface UserUI {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: UserGenderType;
  role: UserRoleType;
  avatar: string;
  theme: ThemeType;
}