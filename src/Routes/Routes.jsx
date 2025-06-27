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
import UpdateTask from "../Components/UpdateTask";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import BrowseTaskFromFormat from "../Components/BrowseTaskFromFormat";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://giglance-server.vercel.app/sortedTasks"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/tasks",
        loader: () => fetch("https://giglance-server.vercel.app/tasks"),
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
          fetch(`https://giglance-server.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashBoardLayout,
    children: [
      {
        index: true,
        element: (
          <div className="flex items-center justify-center text-primary font-bold text-2xl md:text-5xl lg:text-7xl  min-h-[500px]">
            Welcome to dashboard
          </div>
        ),
      },
      {
        path: "/dashboard/mytask",
        loader: () => fetch("https://giglance-server.vercel.app/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updatetask/:id",
        loader: ({ params }) =>
          fetch(`https://giglance-server.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tasks",
        loader: () => fetch("https://giglance-server.vercel.app/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            {/* <BrowseTask></BrowseTask> */}
            <BrowseTaskFromFormat></BrowseTaskFromFormat>
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
