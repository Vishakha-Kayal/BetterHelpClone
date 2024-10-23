import React, { createContext, useContext, useState } from 'react';

const VerificationContext = createContext();

export const VerificationProvider = ({ children }) => {
  const [verificationCode, setVerificationCode] = useState(null);

  return (
    <VerificationContext.Provider value={{ verificationCode, setVerificationCode }}>
      {children}
    </VerificationContext.Provider>
  );
};

export const useVerification = () => {
  return useContext(VerificationContext);
};