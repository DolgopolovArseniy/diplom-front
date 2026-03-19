import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import DonationPage from "./pages/DonationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [],
  },
  {
    path: "/:donation-slug",
    element: <DonationPage />,
  },
]);

export default router;
