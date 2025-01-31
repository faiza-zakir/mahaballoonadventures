import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Testimonials | Hot Air Balloons in Dubai | Maha Balloons",
    description:
      "Read reviews and testimonials from our satisfied customers. See why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai.",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/testimonial",
    },
  };
}

const Testimonial = () => {
  return <PageContent />;
};

export default Testimonial;
