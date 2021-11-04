import { createContext, useState } from "react";

export const AuthModalContext = createContext(null);

export const AuthModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authContext, setAuthContext] = useState("login");

  return (
    <AuthModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        authContext,
        setAuthContext,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
