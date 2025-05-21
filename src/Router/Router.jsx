import {
  createBrowserRouter,
  
} from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Main from "../Layout/Main";
import Error from "../Pages/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[

    ]
    
  },
]);