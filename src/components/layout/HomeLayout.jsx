import { Outlet } from "react-router";
import NavList from "../common/NavList";
import Nav from "../common/Nav";
import { NAV_LINKS_GENERAL, NAV_LINKS_WIDGETS } from "../../constants/navLinks";

export default function HomeLayout() {
  return (
    <main className="mx-auto w-310 flex">
      <aside className="w-58 border-r border-[#101115] shrink-0">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
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
        </div>
      </aside>
      <section className="flex-1 mt-7 ml-30 pb-20">
        <Outlet />
      </section>
    </main>
  );
}
