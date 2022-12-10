import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import About from "../Pages/Home/About/About";
import FeedBack from "../Pages/Home/FeedBack/FeedBack";
import Home from "../Pages/Home/Home";
import Resume from "../Pages/Resume/Resume";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
    ],
  },
]);
