import { DelayStatusType } from "./interface";

export const delayTime = <T>(
  seconds: number, 
  status: DelayStatusType = 'success',
  mockData?: T
): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'success') {
        resolve(mockData as T);
      } else {
        reject(new Error("Simulated database connection error..."));
      }
    }, seconds * 1000);
  });
};