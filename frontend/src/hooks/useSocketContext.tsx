import { useContext } from "react";
import { ISocketContext, SocketContext } from "../context/SocketContext";
const useSocketContext = (): ISocketContext => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};

export default useSocketContext;
