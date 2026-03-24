import { createBrowserRouter, redirect } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import DonatePage from "./pages/DonatePage";
import LoginPage from "./pages/LoginPage";
import { getUserBySlug } from "./services/api";
import NotFound from "./components/common/NotFound";
import SignupPage from "./pages/SignupPage";
import DonationsPage from "./pages/DonationsPage";
import ProtectedRoute from "./components/common/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
          const token = localStorage.getItem("token");
          if (token) return redirect("/");
        },
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/",
        index: true,
        element: (
          <ProtectedRoute>
            <DonationsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/:donationSlug",
    element: <DonatePage />,
    loader: async ({ params }) => {
      try {
        const user = await getUserBySlug(params.donationSlug);
        return user;
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
