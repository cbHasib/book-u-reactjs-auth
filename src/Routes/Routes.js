import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SingleBlog from "../Pages/Blog/SingleBlog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("/data.json");
        },
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/post/:id",
        loader: async ({ params }) => {
          return fetch("/data.json")
            .then((res) => res.json())
            .then((data) => data.find((post) => post.id === params.id));
        },
        element: <SingleBlog />,
      },
    ],
  },
]);
