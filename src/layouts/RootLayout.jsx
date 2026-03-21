import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function RootLayout() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <>
      <header className="h-20 border-b-2 border-[#101115] flex justify-center">
        <div
          className={`flex items-center ${isAuthenticated ? "justify-between" : "justify-center"} h-full w-380`}
        >
          <h1
            className="text-donathell-main font-bold text-5xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Donathell
          </h1>
          {isAuthenticated && <nav>LOGOUT</nav>}
        </div>
      </header>
      <Outlet />
    </>
  );
}
