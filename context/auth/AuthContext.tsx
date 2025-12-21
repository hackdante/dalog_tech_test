"use client"
import { createContext } from 'react';
import { AuthContextTypeUI } from './interface';

export const AuthContext = createContext<AuthContextTypeUI | undefined>(undefined);