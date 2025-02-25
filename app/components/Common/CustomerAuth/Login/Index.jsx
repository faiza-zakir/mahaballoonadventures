import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
// import thumb from "../../../../assets/HomePage/testimonial.jpg";
import social1 from "../../../../assets/icons/google_symbol.svg.svg";
import social2 from "../../../../assets/icons/facebook.svg";
import social3 from "../../../../assets/icons/linkedin_symbol.svg.svg";
import social4 from "../../../../assets/icons/or.svg";
import "./styles.scss";
import { usePathname } from "next/navigation";
function Index(props) {
  const { handleChange, handleSubmit, isLoading, setForgotPassword } = props;
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <div className="LoginCustomer32" dir={lang == "ar" ? "rtl" : "ltr"}>
      <Container>
        <Row className="gy-3">
          <Col lg={6}>
            <div className="formWrapper">
              <div className="form-title">
                {lang == "ar"
                  ? "مغامرات مها بالون: أفضل مشغل منطاد الهواء الساخن في دبي"
                  : "Welcome to Maha Balloon Adventures Dubai!"}
              </div>
              <p className="form-details mt-2">
                {lang == "ar"
                  ? "يرجى تسجيل الدخول إلى حسابك للحصول على عروض رائعة، تخفيضات ومزايا أخرى. يمكنك تحقيق الدخل المتبقي عن طريق الاشتراك في أفضل برنامج إحالة وتسويق تابع مع أفضل شركة مغامرات منطاد الهواء الساخن في الشرق الأوسط."
                  : "Please sign in to your account to get fantastic offers, discounts, and other benefits. You can make residual income by signing up to the best referral and affiliate marketing program with the best hot air balloon adventure company in the Middle East."}
              </p>
              <div className="loginform mt-2">
                <div className="form_group mt-4">
                  <label htmlFor="email">
                    {lang == "ar" ? "بريد إلكتروني" : "Email"}
                  </label>
                  <input
                    className="inputField"
                    name="email"
                    type="email"
                    placeholder="abc@gmail.com"
                    onChange={handleChange}
                  />
                </div>
                <div className="form_group mt-4">
                  <div className="password">
                    <label htmlFor="email">
                      {lang == "ar" ? "كلمة المرور" : "Password"}
                    </label>
                    <span onClick={() => setForgotPassword(true)}>
                      {lang == "ar" ? "نسيت كلمة المرور؟" : `Forget Password?`}
                    </span>
                  </div>
                  <input
                    className="inputField"
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3 btnWrapper">
                  <button
                    className="btnNl btnNl-primary"
                    onClick={(e) => {
                      if (isLoading) {
                        return;
                      }
                      handleSubmit(e);
                    }}
                  >
                    {isLoading
                      ? lang == "ar"
                        ? "تسجيل..."
                        : "Logging..."
                      : lang == "ar"
                      ? "تسجيل الدخول"
                      : "Login"}
                  </button>
                  <button
                    className="btnNl btnNl-secondary"
                    onClick={() => {
                      props.setlogIn(false);
                    }}
                  >
                    {lang == "ar" ? "إنشاء حساب" : "Create Account"}
                  </button>
                </div>
                <div className="SoicalWrapper">
                  <div className="OrSOicalWrapper">
                    <img src={social4} alt="" />
                  </div>
                  <div className="SocialLog">
                    <img src={social1} alt="google-login" />
                    <img src={social2} alt="facebook-login" />
                    <img src={social3} alt="linkedIn-login" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="imgWrapper">
              {/* <img src={thumb} alt="" /> */}
              <Image
                src="/assets/HomePage/testimonial.jpg"
                alt="User"
                width={500}
                height={500}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
