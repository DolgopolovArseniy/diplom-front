import { createBrowserRouter, redirect } from "react-router";
import RootLayout from "./layouts/RootLayout";
import DonationPage from "./pages/DonationPage";
import { getUserBySlug } from "./services/api";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [],
  },
  {
    path: "/:donationSlug",
    element: <DonationPage />,
    loader: async ({ params }) => {
      try {
        await getUserBySlug(params.donationSlug);
      } catch (err) {
        if (err.response?.status === 404) {
          return redirect("/404");
        }
        throw err;
      }
    },
  },
  {
    path: "/404",
    element: <NotFound />,
  },
]);

export default router;
