import { Outlet } from "react-router";
import NavList from "../common/NavList";
import Nav from "../common/Nav";
import { NAV_LINKS_GENERAL, NAV_LINKS_WIDGETS } from "../../constants/navLinks";

export default function HomeLayout() {
  return (
    <main className="mx-auto w-310 h-[calc(100vh-4rem)] flex">
      <Nav>
        <section className="flex flex-col gap-0.5">
          <h3 className="text-[#b7b8b7]">General</h3>
          <NavList navLinks={NAV_LINKS_GENERAL} />
        </section>

        <section className="flex flex-col gap-0.5">
          <h3 className="text-[#b7b8b7]">Widgets</h3>
          <NavList navLinks={NAV_LINKS_WIDGETS} />
        </section>
      </Nav>
      <Outlet />
    </main>
  );
}
