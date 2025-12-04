"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useContext, ReactNode } from "react";

interface UserContextType {
  user: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserContextInner({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  return (
    <UserContext.Provider value={{ user: session?.user }}>
      {children}
    </UserContext.Provider>
  );
}

export function UserProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <UserContextInner>{children}</UserContextInner>
    </SessionProvider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
