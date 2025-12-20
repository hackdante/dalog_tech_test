import { UserUI } from "@/interfaces";

export const MOCK_USERS: UserUI[] = [
    {
    id: "admin",
    email: "genoma3d@gmail.com",
    firstName: "Leandro",
    lastName: "Gonzalez",
    gender: "male",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
  },
  {
    id: "u1",
    email: "admin@dalog.com",
    firstName: "Carlos",
    lastName: "Rodríguez",
    gender: "male",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
  },
  {
    id: "u2",
    email: "andrea.perez@dalog.com",
    firstName: "Andrea",
    lastName: "Pérez",
    gender: "female",
    role: "technician",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: "u3",
    email: "sergio.mora@dalog.com",
    firstName: "Sergio",
    lastName: "Mora",
    gender: "male",
    role: "technician",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: "u4",
    email: "elena.gomez@dalog.com",
    firstName: "Elena",
    lastName: "Gómez",
    gender: "female",
    role: "viewer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

export const AUTH_PASSWORD_MASTER = "DALOG";