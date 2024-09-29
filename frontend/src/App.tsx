import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./_ui_design/pages/home/Home";
import SignUp from "./_ui_design/pages/signup/SignUp";
import LogIn from "./_ui_design/pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
  ]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
