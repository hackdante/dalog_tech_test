import { ErrorTriggerUI } from "./interface";

export const ErrorTrigger = ({
  random = 5,
  message = "Simulated system failure",
}: ErrorTriggerUI): null => {
  const probability = random / 10;
  const luckyNumber = Math.random();

  if (luckyNumber < probability) {
    throw new Error(`${message} [Chaos Factor: ${random}/10]`);
  }
  return null;
};
