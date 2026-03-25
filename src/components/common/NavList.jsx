import { NavLink } from "react-router";

export default function NavList({ navLinks }) {
  const navLinkClassName = ({ isActive }) =>
    `flex gap-2 items-center hover:bg-[#101112] duration-200 p-1.5 -ml-1.5 rounded-md ${
      isActive ? "text-donathell-main" : ""
    }`;

  return (
    <ul className="flex flex-col gap-1">
      {navLinks.map((link) => (
        <NavLink key={link.to} to={link.to} className={navLinkClassName}>
          <link.icon size={28} /> {link.label}
        </NavLink>
      ))}
    </ul>
  );
}
