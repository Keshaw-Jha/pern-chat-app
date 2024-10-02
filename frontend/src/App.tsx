import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import useAuthContext from "./hooks/useAuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, isLoading } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/signup",
      element: authUser ? <Navigate to="/" /> : <SignUp />,
    },
    {
      path: "/login",
      element: authUser ? <Navigate to="/" /> : <LogIn />,
    },
  ]);

  if (isLoading) return null;

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
