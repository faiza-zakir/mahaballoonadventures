import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Maha Hot Air Balloons in Dubai",
    description: "Maha Hot Air Balloons in Dubai",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/faqs`,
    },
  };
}

const Faqs = () => {
  return <PageContent />;
};

export default Faqs;
