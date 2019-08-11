import React, { useState, createContext } from 'react';

export const JobContext = createContext();

export const Provider = ({ children, initialValue }) => {
  const [job, setJob] = useState(initialValue);

  return (
    <JobContext.Provider value={{ job, setJob }}>
      {children}
    </JobContext.Provider>
  );
};
