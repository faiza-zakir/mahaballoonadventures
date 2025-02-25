import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
// import thumb from "../../../../assets/HomePage/testimonial.jpg";
import "./styles.scss";
import { PhoneInput } from "react-international-phone";
import { usePathname } from "next/navigation";
function Index(props) {
  const {
    handleChange,
    formData,
    handleRegisterSubmit,
    isRegisterSending,
    setFormData,
  } = props;
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <div className="RegisterCustomer32" dir={lang == "ar" ? "rtl" : "ltr"}>
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
              <div className="ReGisterForm mt-2">
                <div className="regFormWrapper">
                  <Row>
                    <Col lg={6}>
                      <div className="form_group mt-4">
                        <label htmlFor="first_name">
                          {lang == "ar" ? "الاسم الأول" : "First Name"}
                        </label>
                        <input
                          className="inputField"
                          name="first_name"
                          type="text"
                          placeholder=""
                          onChange={handleChange}
                          value={formData?.first_name}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form_group mt-4">
                        <label htmlFor="last_name">
                          {lang == "ar" ? "اسم العائلة" : "Last Name"}
                        </label>
                        <input
                          className="inputField"
                          name="last_name"
                          type="text"
                          placeholder=""
                          value={formData?.last_name}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form_group mt-4">
                        <label htmlFor="email">
                          {lang == "ar" ? "بريد إلكتروني" : "Email"}
                        </label>
                        <input
                          className="inputField"
                          name="email"
                          type="email"
                          placeholder="abc@gmail.com"
                          value={formData?.email}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form_group form_groupPhone mt-4">
                        <label htmlFor="Mobile">
                          {lang == "ar"
                            ? "رقم الهاتف المحمول"
                            : "Mobile Number"}
                        </label>
                        <PhoneInput
                          defaultCountry="ae"
                          value={formData?.phone}
                          onChange={(phone) =>
                            setFormData((prev) => ({
                              ...prev,
                              ["phone"]: phone,
                            }))
                          }
                        />
                      </div>
                      {/* <div className="form_group mt-4">
                        <label htmlFor="phone">Mobile Number</label>
                        <input
                          className="inputField"
                          name="phone"
                          type="number"
                          placeholder="(+971)"
                          value={formData?.phone}
                          onChange={handleChange}
                        />
                      </div> */}
                    </Col>
                    <Col lg={12}>
                      <div className="form_group mt-4">
                        <label htmlFor="password">
                          {lang == "ar" ? "كلمة المرور" : "Password"}
                        </label>
                        <input
                          className="inputField"
                          name="password"
                          type="password"
                          placeholder=""
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form_group mt-4">
                        <label htmlFor="vrify_password">
                          {lang == "ar"
                            ? "التحقق من كلمة المرور"
                            : "Verify Password"}
                        </label>
                        <input
                          className="inputField"
                          name="vrify_password"
                          type="password"
                          placeholder=""
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mt-3 btnWrapper">
                  <button
                    className="btnNl btnNl-secondary"
                    onClick={() => {
                      props.setlogIn(true);
                    }}
                  >
                    {lang == "ar" ? "خلف" : "Back"}
                  </button>
                  <button
                    className="btnNl btnNl-primary"
                    onClick={(e) => {
                      handleRegisterSubmit(e);
                    }}
                  >
                    {isRegisterSending
                      ? lang == "ar"
                        ? "إرسال..."
                        : "Sending..."
                      : lang == "ar"
                      ? "إنشاء حساب"
                      : "Create Account"}
                  </button>
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
