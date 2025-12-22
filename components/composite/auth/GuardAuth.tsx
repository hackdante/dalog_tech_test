"use client";

import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GuardAuthUI } from "./interface";

export const GuardAuth = ({ children }: GuardAuthUI) => {
  const { user, isHydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !user) {
      router.push("/login");
    }
  }, [user, isHydrated, router]);

  if (!isHydrated) {
    return null;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};
