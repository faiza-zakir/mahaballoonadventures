// "use client";
// import React, { Suspense, lazy } from "react";
// import { usePathname } from "next/navigation";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "react-international-phone/style.css";
// import Loader from "../components/Common/Loader/Loader";

// const Navbar = lazy(() => import("../components/Layout/Navbar/Navbar"));
// const Footer = lazy(() => import("../components/Layout/Footer/Footer"));

// export default function Template({ children }) {
//   const pathname = usePathname();
//   const locale = pathname.split("/")[1];
//   return (
//     <div className="layout-container">
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss={false}
//         draggable
//         pauseOnHover={false}
//         theme="light"
//       />
//       <Suspense fallback={<Loader />}>
//         <Navbar />
//         <main className={locale == "ar" ? "r_dir" : "l_dir"}>{children}</main>
//         <Footer />
//       </Suspense>
//     </div>
//   );
// }

// app/template.js (Server Component - SSR)
import ClientWrapper from "./ClientWrapper";

export default function Template({ children }) {
  return (
    <div className="layout-container">
      <ClientWrapper>{children}</ClientWrapper>
    </div>
  );
}
