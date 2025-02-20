import React from "react";
import { useRouter, usePathname } from "next/navigation";
import "./styles.scss";

function Card(props) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const { title, short_des, category, readTime, thumb, route } = props;

  return (
    <div
      className={`BlogsCardHomepahg32 ${lang == "ar" ? "r_dir" : "l_dir"}`}
      key={props?.key}
    >
      <div className="cardFlight">
        <div className="imageWrapper">
          <img src={thumb} alt="blog_thumbnail" />
        </div>
        <div className="blogType">
          <div className="category">{category?.[lang]}</div>
          <div className="readTime">{readTime?.[lang]}</div>
        </div>
        <div className="details mt-3">
          <div className="sec-title">{title?.[lang]}</div>

          <p className="para mt-2">{short_des?.[lang]}</p>
        </div>

        <button
          className="btnNl btnNl-secondary"
          onClick={() => router.push(`/${lang}/blog/${route}`)}
        >
          {lang == "ar" ? "اقرأ المزيد" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default Card;
