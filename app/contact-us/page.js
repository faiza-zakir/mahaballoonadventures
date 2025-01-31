import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Contact Maha Balloon | Book Your Aerial Adventure Ride in Dubai",
    description:
      "Reach out to Maha Balloon Adventures for inquiries or bookings. Contact us today to plan your unforgettable hot air balloon experience in Dubai.",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/contact-us",
    },
  };
}

const ContactUs = () => {
  return <PageContent />;
};

export default ContactUs;
