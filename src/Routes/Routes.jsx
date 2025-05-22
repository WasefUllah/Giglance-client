import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import MyTasks from "../Components/MyTasks";
import AddTask from "../Components/AddTask";
import BrowseTask from "../Components/BrowseTask";

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
]);
