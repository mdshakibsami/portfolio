import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetailsOne";
import RootLayout from "../layouts/RootLayout";

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
        Component: ProjectDetails,
      },
      {
        path: "project/2",
        Component: ProjectDetails,
      },
      {
        path: "project/3",
        Component: ProjectDetails,
      },
    ],
  },
]);
