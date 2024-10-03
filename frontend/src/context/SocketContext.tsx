import { createContext, useState, useEffect, ReactNode, useRef } from "react";
import io, { Socket } from "socket.io-client";
import useAuthContext from "../hooks/useAuthContext";

export interface ISocketContext {
  socket: Socket | null;
  onlineUsers: string[];
}

const socketURL =
  import.meta.env.VITE_MODE === "development" ? "http://localhost:5000" : "/";
// const socketURL = "http://localhost:5000";

export const SocketContext = createContext<ISocketContext | undefined>({
  socket: null,
  onlineUsers: [],
});

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const socketRef = useRef<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { authUser, isLoading } = useAuthContext();

  useEffect(() => {
    if (authUser && !isLoading) {
      const socket = io(socketURL, {
        query: {
          userId: authUser.id,
        },
      });
      socketRef.current = socket;

      socket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
        socketRef.current = null;
      };
    } else if (!authUser && !isLoading) {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    }
  }, [authUser, isLoading]);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
