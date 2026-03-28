import { Outlet } from "react-router";
import NavList from "../common/NavList";
import Nav from "../common/Nav";
import { NAV_LINKS_GENERAL, NAV_LINKS_WIDGETS } from "../../constants/navLinks";

export default function HomeLayout() {
  return (
    <main className="mx-auto flex w-full max-w-310 flex-col md:flex-row px-3 sm:px-4">
      <aside className="w-full shrink-0 border-[#101115] border-b md:w-58 md:border-b-0 md:border-r">
        <div className="sticky top-16 max-h-[min(22rem,50svh)] overflow-y-auto overscroll-contain p-3 sm:p-4 md:max-h-none md:h-[calc(100vh-4rem)]">
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
      <section className="mt-4 min-w-0 flex-1 pb-20 md:mt-7 md:ml-30">
        <Outlet />
      </section>
    </main>
  );
}
