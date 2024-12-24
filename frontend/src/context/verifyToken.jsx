import { createContext, useContext, useState } from "react";
import { decodeToken } from "../utils/decodeToken";
import axios from "axios";
import { url } from "../App"
import { useNavigate } from "react-router-dom";
const VerificationContext = createContext();

export const VerificationContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [isPrivate, setIsPrivate] = useState(false)
  const [decodedToken, setDecodedToken] = useState(token ? decodeToken(token) : null);
  const updateToken = (newToken) => {
    setToken(newToken);
    setDecodedToken(token ? decodeToken(token) : null)
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
    navigate("/login")
  };

  const updateisPrivate = (newIsprivate) => {
    setIsPrivate(newIsprivate)
  }

  const setIsPrivateToServer = async (newIsPrivate) => {
    if (token) {
      const decodedToken = decodeToken(token)
      const userId = decodedToken._id;
      const formattedUserType = userType?.charAt(0).toUpperCase() + userType?.slice(1);
      await axios.post(`${url}/api/users/setVisibilty`, { userId, userType: formattedUserType, isPrivate: newIsPrivate })
    }
  }

  const getPrivateFromServer = async () => {
    if (token) {
      try {
        console.log("tok", token);
        const decodedToken = decodeToken(token);
        const userId = decodedToken._id;
        const formattedUserType = userType?.charAt(0).toUpperCase() + userType?.slice(1);
        const response = await axios.post(`${url}/api/users/getVisibility`, { userId, userType: formattedUserType });
        setIsPrivate(response.data.data);
      } catch (error) {
        console.error("Error fetching visibility:", error);
      }
    }
  }

  const getUserIdUserType = () => {
    const formattedUserType = userType.charAt(0).toUpperCase() + userType.slice(1)
    const userId = decodedToken?._id
    return { formattedUserType, userId };
  }
  return (
    <VerificationContext.Provider
      value={{
        token,
        logout,
        userType,
        updateToken,
        updateUserType,
        isPrivate,
        updateisPrivate,
        setIsPrivateToServer,
        getPrivateFromServer,
        decodedToken,getUserIdUserType
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