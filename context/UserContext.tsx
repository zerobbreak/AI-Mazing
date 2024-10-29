// UserContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
} from "react";

type User = {
  id: number; // Unique identifier for the user
  email: string; // Unique email address for login
  password: string; // Password for authentication (usually not included in user context)
  name?: string | null; // Optional name of the user
  learningPath?: string | null; // Optional learning path associated with the user
  progress?: number | null; // Optional progress percentage or value
  recommendations: string[]; // Array of recommendations
  completedLessons?: number | null; // Optional count of completed lessons
  hoursSpent?: number | null; // Optional hours spent on the platform
  performanceTrend?: string | null; // Optional performance trend indicator
  createdAt: Date; // DateTime when the user was created
  updatedAt: Date; // DateTime when the user was last updated
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
  };
  
  const UserContext = createContext<UserContextType | undefined>(undefined);
  
  export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    const logout = () => {
      setUser(null);
      // Optionally clear local storage or session data
    };
  
    return (
      <UserContext.Provider value={{ user, setUser, logout }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
  };
