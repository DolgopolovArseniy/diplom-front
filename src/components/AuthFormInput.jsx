import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AuthFormInput({ isPassword, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <input
        className={`w-full bg-[#2b2c2e] rounded-md outline-none placeholder-[#c7ccc8a8] p-2 border border-[#959697] h-9 focus:ring-4 focus:ring-donathell-main duration-100 ${showPassword ? "font-mono" : ""}`}
        type={showPassword ? "password" : "text"}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          className="cursor-pointer hover:bg-[#555658] rounded-full duration-100 absolute right-1 top-1/2 -translate-y-1/2 p-0.75"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      )}
    </div>
  );
}
