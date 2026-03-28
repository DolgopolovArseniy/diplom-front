import { Link } from "react-router";
import "../../glass.css";

export default function AuthForm({ isLoading, type, children, ...props }) {
  const isSignup = type === "signup";
  return (
    <form
      {...props}
      className="w-full placeholder-[#c7ccc8a8] bg-[#121315] rounded-3xl resize-none px-6 py-4 focus:outline-none shadow-lg/30 glass mb-20 flex flex-col items-stretch gap-3.5"
    >
      <h2 className="font-medium text-2xl self-center">
        {isSignup ? "Sign up" : "Log in"} to{" "}
        <span className="text-donathell-main font-bold">Donathell</span>
      </h2>
      {children}
      <button
        type="submit"
        className={`mt-3 rounded-2xl text-lg ${isLoading ? "cursor-not-allowed" : "cursor-pointer"} duration-200  bg-donathell-main text-[#101115] font-semibold h-11 hover:bg-[#32970d] disabled:bg-[#363739] glass-button`}
        disabled={isLoading}
      >
        {isSignup ? "Sign up" : "Log in"}
      </button>
      <Link
        to={`/${isSignup ? "login" : "signup"}`}
        className="hover:bg-[#555658] hover:text-donathell-secondary rounded-2xl flex items-center justify-center text-donathell-main h-11 duration-200"
      >
        {isSignup
          ? "Have an account? Log in"
          : "Don't have an account? Sign up"}
      </Link>
    </form>
  );
}
