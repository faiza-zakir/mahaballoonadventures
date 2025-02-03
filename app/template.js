"use client";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Common/Loader/Loader";
import Navbar from "./components/Layout/Navbar/Navbar";

const Footer = React.lazy(() => import("./components/Layout/Footer/Footer"));

export default function Template({ children }) {
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
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main>{children}</main>
        <Footer />
      </Suspense>
    </div>
  );
}
