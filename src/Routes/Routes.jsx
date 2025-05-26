import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import MyTasks from "../Components/MyTasks";
import AddTask from "../Components/AddTask";
import BrowseTask from "../Components/BrowseTask";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Error from "../Components/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loader from "../Components/Loader";
import TaskDetails from "../Components/TaskDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/sortedTasks"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/mytask",
        loader: () => fetch("http://localhost:3000/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/tasks",
        loader: () => fetch("http://localhost:3000/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <BrowseTask></BrowseTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/tasks/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tasks/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
            //{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
