// UserContext.js
'use client'
import React, { createContext, useState } from 'react';

// Create context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(true); // Initial user state is null
  let handleLogout = () => {

    setUser(false)
  }
  let handlesignin = () => {

    setUser(true)
  }
  return (
    <UserContext.Provider value={{ user, setUser, handleLogout, handlesignin }}>
      {children}
    </UserContext.Provider>
  );
};
