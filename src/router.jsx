import { createBrowserRouter, redirect } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import DonatePage from "./pages/DonatePage";
import LoginPage from "./pages/LoginPage";
import { getTransactions, getUserBySlug } from "./services/api";
import NotFound from "./components/common/NotFound";
import SignupPage from "./pages/SignupPage";
import DonationsPage from "./pages/DonationsPage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import HomeLayout from "./components/layout/HomeLayout";

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
        element: (
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            loader: () => redirect("/donations"),
          },
          {
            path: "/donations",
            element: <DonationsPage />,
            loader: async () => {
              try {
                const transactions = await getTransactions();
                return transactions;
              } catch (err) {
                if (err.response?.status === 404) {
                  return redirect("/404");
                }
                throw err;
              }
            },
          },
          {
            path: "/payouts",
            element: <DonationsPage />,
          },
          {
            path: "/notifications",
            element: <DonationsPage />,
          },
          {
            path: "/fundraising",
            element: <DonationsPage />,
          },
        ],
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
