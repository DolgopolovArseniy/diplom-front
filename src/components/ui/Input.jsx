export default function Input({
  className = "",
  type = "text",
  showPassword,
  ...props
}) {
  const inputType = showPassword ? "password" : type;
  return (
    <input
      className={`bg-[#131416] rounded-sm outline-none placeholder-[#c7ccc8a8] 
                  border border-[#202123] h-9 focus:ring-4 focus:ring-donathell-main 
                  duration-100 text-donathell-secondary
                  ${showPassword ? "font-mono" : ""} 
                  ${className}`}
      type={inputType}
      {...props}
    />
  );
}
