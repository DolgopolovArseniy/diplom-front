import { Link } from "react-router";

export default function Header({ isAuthenticated = false }) {
  return (
    <header className="h-20 border-b-2 border-[#101115] flex justify-center">
      <div
        className={`flex items-center ${isAuthenticated ? "justify-between" : "justify-center"} h-full w-380`}
      >
        <Link to="/">
          <h1 className="text-donathell-main font-bold text-5xl cursor-pointer">
            Donathell
          </h1>
        </Link>
        {isAuthenticated && <nav>LOGOUT</nav>}
      </div>
    </header>
  );
}
