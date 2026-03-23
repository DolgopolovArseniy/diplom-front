import { Link } from "react-router";

export default function Header({ isAuthenticated = false }) {
  return (
    <header className="h-16 border-b-2 border-[#101115] flex justify-center pt-2.5 pb-0.5">
      <div
        className={`flex items-center ${isAuthenticated ? "justify-between" : "justify-center"} h-full w-310`}
      >
        <Link to="/">
          <h1 className="text-donathell-main font-bold text-4xl cursor-pointer">
            Donathell
          </h1>
        </Link>
        {isAuthenticated && <nav>LOGOUT</nav>}
      </div>
    </header>
  );
}
