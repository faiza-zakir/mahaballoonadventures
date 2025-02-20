import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineLink } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Loader from "../../Common/Loader/Loader";
import BlogListData from "../../../Db/blogs";
import { useParams, usePathname } from "next/navigation";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { toast } from "react-toastify";
import "./styles.scss";

function Index() {
  const { id } = useParams();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const [blogDetail, setBlogDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    let CurrentBlog = BlogListData?.filter((item) => item?.route == id)[0];
    setBlogDetails(CurrentBlog);
    // setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="blogDetaildsk3i py-60">
          <Container>
            <div className="blogType">
              <div className="category">{blogDetail?.category?.[lang]}</div>
              <div className="readTime">{blogDetail?.readTime?.[lang]}</div>
            </div>
            <div className="main-title">{blogDetail?.title?.[lang]}</div>

            <div className="main-img">
              <img src={blogDetail?.featured_img} alt="blog Featured" />
            </div>
            <Row className="gy-3">
              <Col md={6}>
                <div className="blogInfo">
                  <div className="blogAuth">
                    <div className="title">Written by</div>
                    <div className="name">{blogDetail?.author?.[lang]}</div>
                  </div>
                  <div className="blogDate">
                    <div className="title">Published on</div>
                    <div className="name">
                      {blogDetail?.publish_date?.[lang]}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="social w-100">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.info("Link Copied to Clipboard", {
                        autoClose: 1000,
                        hideProgressBar: true,
                      });
                    }}
                  >
                    <div className="social-item">
                      <AiOutlineLink size={20} />
                    </div>
                  </div>
                  <LinkedinShareButton
                    url={window.location.href}
                    title={blogDetail?.title?.[lang]}
                    summary={blogDetail?.short_des?.[lang]}
                    source={window.location.href}
                  >
                    <div className="social-item">
                      <FaLinkedin size={20} />
                    </div>
                  </LinkedinShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    title={blogDetail?.title?.[lang]}
                    hashtag="#MahaHotAirBalloons"
                  >
                    <div className="social-item">
                      <FaXTwitter size={20} />
                    </div>
                  </TwitterShareButton>
                  <FacebookShareButton
                    url={window.location.href}
                    hashtag="#MahaHotAirBalloons"
                  >
                    <div className="social-item">
                      <FaFacebook size={20} />
                    </div>
                  </FacebookShareButton>
                </div>
              </Col>
            </Row>

            <div className="details">
              <div
                className="BlogDetailsk"
                dangerouslySetInnerHTML={{
                  __html: blogDetail?.description?.[lang],
                }}
              />
              {/* 
          <Row className="g-3 mt-4 mb-4">
            {blogDetail?.gallery?.map((item) => (
              <Col xs={12} md={4}>
                <div className="blogDetailsWrapper">
                  <img src={item} alt="" />
                </div>
              </Col>
            ))}
          </Row> */}
              <div
                className="BlogDetailsk"
                dangerouslySetInnerHTML={{
                  __html: blogDetail?.more_description?.[lang],
                }}
              />
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default Index;
