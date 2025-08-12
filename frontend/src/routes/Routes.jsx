import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import ProjectDetailsOne from "../pages/ProjectDetailsOne";
import ProjectDetailsTwo from "../pages/ProjectDetailsTwo";
import ProjectDetailsThree from "../pages/ProjectDetailsThree";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "project/1",
        Component: ProjectDetailsOne,
      },
      {
        path: "project/2",
        Component: ProjectDetailsTwo,
      },
      {
        path: "project/3",
        Component: ProjectDetailsThree,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
