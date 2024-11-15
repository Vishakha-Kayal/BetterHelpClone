import { createContext, useContext, useState } from "react";

const VerificationContext = createContext();

export const VerificationContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const updateToken = (newToken) => {
  
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  const updateUserType = (newUserType) => {
    setUserType(newUserType);
    if (newUserType) {
      localStorage.setItem("userType", newUserType);
    } else {
      localStorage.removeItem("userType");
    }
  };
  const logout = () => {
    setToken(null);
    setUserType(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
  };
  return (
    <VerificationContext.Provider
      value={{
        token,
        logout,
        userType,
        updateToken,
        updateUserType,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};
export const useVerification = () => {
    const context = useContext(VerificationContext);
    if (!context) {
        throw new Error("useVerification must be used within a VerificationContextProvider");
    }
    return context;
};