import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ChevronDown, LogOut, PanelTop, Settings2 } from "lucide-react";

export default function Header({ isAuthenticated = false }) {
  const className =
    "flex items-center justify-center gap-2.5 cursor-pointer hover:bg-[#101112] hover:text-[#f7f8f7] duration-200 py-1 rounded-lg";
  const { user, logout } = useAuth();
  const { isOpen, setIsOpen, ref } = useClickOutside();
  return (
    <header className="h-16 border-b border-[#101115] flex justify-center pt-2.5 pb-0.5 sticky top-0 bg-[#141517]">
      <div
        className={`flex items-center ${isAuthenticated ? "justify-between" : "justify-center"} h-full w-310`}
      >
        <Link to="/">
          <h1 className="text-donathell-main font-bold text-4xl cursor-pointer pb-2">
            Donathell
          </h1>
        </Link>
        {isAuthenticated && (
          <div ref={ref} className="relative">
            <button
              className="cursor-pointer font-semibold flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {user ? (
                <span className="pb-1 text-xl">{user.username}</span>
              ) : (
                <div className="w-26 h-6 bg-[#2b2c2e] rounded animate-pulse" />
              )}
              <ChevronDown
                size={24}
                className={`transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute overflow-hidden z-10 left-1/2 -translate-x-1/2 top-9 bg-[#131416] rounded-lg flex flex-col p-1.5 gap-2 ${isOpen ? "opacity-100 max-h-100 pointer-events-auto" : "opacity-0 max-h-0 pointer-events-none"} transition-all duration-150 min-w-42 border border-[#202123]`}
            >
              <ul className="border-b border-[#2c2c2e] flex flex-col gap-1.5 pb-1.5">
                <Link
                  to={`/${user?.donationSlug}`}
                  className={className}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PanelTop size={28} />
                  My page
                </Link>
                <li className={className}>
                  <Settings2 size={28} />
                  Settings
                </li>
              </ul>
              <button
                className={className}
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                <LogOut size={28} /> Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
