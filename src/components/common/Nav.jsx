export default function Nav({ children }) {
  return (
    <nav className="flex flex-col gap-4 w-58 border-r border-[#101115] h-full pt-3.5">
      {children}
    </nav>
  );
}
