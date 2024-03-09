// OpenContext.js
import React, { createContext, useContext, useState } from 'react';

const OpenContext = createContext();

export const useOpen = () => useContext(OpenContext);

export const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};
