"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  role: "admin" | "innovator" | "organization";
  name?: string;
  email?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const fetchUser = async () => {
      try {
       
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        } else {
        
          const path = window.location.pathname;
          if (path.startsWith('/admin')) {
            setUser({ role: 'admin' });
          } else if (path.startsWith('/innovator')) {
            setUser({ role: 'innovator' });
          } else if (path.startsWith('/organization')) {
            setUser({ role: 'organization' });
          } else {
        
            setUser({ role: 'admin' });
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      
        setUser({ role: 'admin' });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
