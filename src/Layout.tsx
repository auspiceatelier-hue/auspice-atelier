import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { HomeServicesButton } from "./components/HomeServicesButton";
import { useEffect } from "react";
import { bgWater } from "./assets";

export function Layout() {
  const { pathname } = useLocation();
  const isServicePage = pathname.startsWith("/services");
  const isHomePage = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-gold selection:text-brand-primary font-sans text-brand-body relative flex flex-col">
      {!isServicePage && (
        <>
          <div
            className="fixed inset-0 pointer-events-none z-0 bg-center bg-no-repeat bg-contain opacity-[0.22] md:opacity-[0.24] lg:opacity-[0.2]"
            style={{ backgroundImage: `url('${bgWater}')` }}
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-brand-bg/60 via-brand-bg/30 to-brand-bg/55"
            aria-hidden="true"
          />
        </>
      )}
      <Menu />
      {isHomePage && <HomeServicesButton />}
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
