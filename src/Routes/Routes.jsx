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
import Dashboard from "../Components/Dashboard";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import TermsAndConditions from "../Components/TermsAndConditions";

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
        element: <BrowseTask></BrowseTask>,
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
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/contactUs",
        Component: Contact,
      },
      {
        path: "/terms",
        Component: TermsAndConditions
      }
    ],
  },
  {
    path: "/dashboard",
    Component: DashBoardLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
        loader: () => fetch("https://giglance-server.vercel.app/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
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
