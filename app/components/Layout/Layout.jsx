import React from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "next/navigation";
// const Navbar = lazy(() => import("../../components/Layout/Navbar/Navbar"));
import Navbar from "../../components/Layout/Navbar/Navbar";

import Footer from "../../components/Layout/Footer/Footer";
import { Helmet } from "react-helmet";
// import Navbar from "../../components/Layout/Navbar/Navbar";
// import FooterMbl from "./Footer/FooterMobile/FooterMbl";
function Layout() {
  const { lang = "en" } = useParams();
  return (
    <>
      {/* <Suspense fallback={"Loading..."}> */}

      <Navbar />
      {/* </Suspense> */}
      <main className={lang == "ar" ? "r_dir" : "l_dir"}>
        <Outlet />
      </main>
      <Footer />
      {/* <FooterMbl /> */}
    </>
  );
}

export default Layout;
