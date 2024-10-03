import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = (): AuthContext => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuthContext must be used within AuthContextProvider");
  return context;
};

export default useAuthContext;
