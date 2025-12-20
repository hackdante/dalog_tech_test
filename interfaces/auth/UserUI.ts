export type UserRoleType = 'admin' | 'technician' | 'viewer';
export type UserGenderType = 'male' | 'female' | 'other';

export interface UserUI {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: UserGenderType;
  role: UserRoleType;
  avatar: string;
}