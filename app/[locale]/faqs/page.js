import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Maha Hot Air Balloons in Dubai",
    description: "Maha Hot Air Balloons in Dubai",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/faqs",
    },
  };
}

const Faqs = () => {
  return <PageContent />;
};

export default Faqs;
