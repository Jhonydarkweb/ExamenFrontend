import { createBrowserRouter } from "react-router-dom";
import Landing from "@/pages/Landing";
import NotFound from "@/pages/NotFound";
import UnderConstruction from "@/pages/UnderConstruction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/reportar-estafa",
    element: <UnderConstruction />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
