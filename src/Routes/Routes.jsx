import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import MyTasks from "../Components/MyTasks";
import AddTask from "../Components/AddTask";
import BrowseTask from "../Components/BrowseTask";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/mytask",
        Component: MyTasks,
      },
      {
        path: "/addtask",
        Component: AddTask,
      },
      {
        path: "/browsetask",
        Component: BrowseTask,
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
]);
