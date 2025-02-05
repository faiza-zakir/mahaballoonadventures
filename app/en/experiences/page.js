import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Hot Air Balloon Experiences in Dubai | Maha Balloon Adventures",
    description:
      "Explore a range of thrilling hot air balloon experiences with Maha Balloon Adventures in Dubai. Perfect for adventure seekers, couples, and families.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/experiences`,
    },
  };
}

const Experiences = () => {
  return <PageContent />;
};

export default Experiences;
