// "use client";
// import { usePathname } from "next/navigation";
// import { ToastContainer } from "react-toastify";
// import { Suspense, lazy } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import Loader from "../components/Common/Loader/Loader";
// import Providers from "../providers";
// import { LanguageProvider } from "../context/LanguageContext";
// const Navbar = lazy(() => import("../components/Layout/Navbar/Navbar"));
// const Footer = lazy(() => import("../components/Layout/Footer/Footer"));

// export default function ClientWrapper({ children }) {
//   const pathname = usePathname();
//   const locale = pathname.split("/")[1];

//   return (
//     <>
//       <Providers>
//         <LanguageProvider>
//           <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss={false}
//             draggable
//             pauseOnHover={false}
//             theme="light"
//           />
//           <Suspense fallback={<Loader />}>
//             <Navbar />
//             <main className={locale === "ar" ? "r_dir" : "l_dir"}>
//               {children}
//             </main>
//             <Footer />
//           </Suspense>
//         </LanguageProvider>
//       </Providers>
//     </>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Common/Loader/Loader";

const Navbar = lazy(() => import("../components/Layout/Navbar/Navbar"));
const Footer = lazy(() => import("../components/Layout/Footer/Footer"));

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const locale = pathname?.split("/")?.[1] || "en"; // Ensure locale extraction is safe

  return (
    <>
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
        <Navbar />
      </Suspense>
      <main className={locale === "ar" ? "r_dir" : "l_dir"}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
}
