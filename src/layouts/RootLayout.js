import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("body").classList = "loaded";
  }, []);

  return (
    <>
      {location.pathname !== "/" ? (
        <Header />
      ) : (
        <Hero>
          <Header className="header" />
        </Hero>
      )}

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
