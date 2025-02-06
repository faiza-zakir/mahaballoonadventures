import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE",
    description:
      "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}`,
    },
  };
}

const Home = () => {
  return <PageContent />;
};

export default Home;
