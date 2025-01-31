import React from "react";
import { useParams } from "next/navigation";

function Index({ prevArrow, nextArrow }) {
  const { lang = "en" } = useParams();

  return (
    <>
      {lang == "ar" ? (
        <>
          {nextArrow} {prevArrow}
        </>
      ) : (
        <>
          {prevArrow} {nextArrow}
        </>
      )}
    </>
  );
}

export default Index;
