"use client";
import React, { useState, Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-international-phone/style.css";
// import LangContext from "./utils/LanguageContext";
import Loader from "../components/Common/Loader/Loader";
// import Navbar from "../components/Layout/Navbar/Navbar";

const Navbar = lazy(() => import("../components/Layout/Navbar/Navbar"));
const Footer = lazy(() => import("../components/Layout/Footer/Footer"));

export default function Template({ children }) {
  const [lang, setLang] = useState("en");

  return (
    <div className="layout-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Suspense fallback={<Loader />}>
        {/* <LangContext.Provider value={{ lang, setLang }}> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* </LangContext.Provider> */}
      </Suspense>
    </div>
  );
}
