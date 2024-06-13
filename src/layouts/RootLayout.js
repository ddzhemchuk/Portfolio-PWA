import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileMenu";

export default function RootLayout({ children }) {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.querySelector("body").classList = "loaded";
  }, []);

  return (
    <>
      {pathname !== "/" ? (
        <Header setShowMenu={setShowMenu} />
      ) : (
        <Hero>
          <Header className="header" setShowMenu={setShowMenu} />
        </Hero>
      )}

      <main>{children ? children : <Outlet />}</main>

      <Footer />

      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}
