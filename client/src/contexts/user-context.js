import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export const Provider = ({ children, initialValue }) => {
  const [user, setUser] = useState(initialValue);

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('loggedInUser');

    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  const handleSetUser = user => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};
