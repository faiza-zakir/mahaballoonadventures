import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride",
    description: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/terms-of-service`,
    },
  };
}

const TermsOfService = () => {
  return <PageContent />;
};

export default TermsOfService;
