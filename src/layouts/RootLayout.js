import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
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
      <Header
        setShowMenu={setShowMenu}
        className={pathname !== "/" ? "secondary" : null}
      />

      <main>{children ? children : <Outlet />}</main>

      <Footer />

      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}
