"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LocaleRedirector = ({ locale }) => {
  const router = useRouter();

  useEffect(() => {
    if (!locale) {
      router.push("/en"); // Redirect to /en if no locale is present
    }
  }, [locale, router]);

  return null; // This component doesn't render anything
};

export default LocaleRedirector;
