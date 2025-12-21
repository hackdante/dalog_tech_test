import { UserUI } from "@/interfaces";
import { MOCK_USERS, AUTH_PASSWORD_MASTER } from "@/mocks";
import { delayTime } from "@/utils";


export const authService = async (email: string, password: string): Promise<UserUI> => {
  await delayTime(2, 'success');

  const user = MOCK_USERS.find((u) => u.email === email);

  if (user && password === AUTH_PASSWORD_MASTER) {
    return user; 
  }

  throw new Error("The email address or password is incorrect.");
};