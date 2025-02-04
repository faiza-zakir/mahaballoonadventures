import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai",
    description:
      "Discover why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai. Experience unmatched service, breathtaking views, and memories.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/why-us`,
    },
  };
}

const WhyUs = () => {
  return <PageContent />;
};

export default WhyUs;
