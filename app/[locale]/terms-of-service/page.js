import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride",
    description: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/terms-of-service",
    },
  };
}

const TermsOfService = () => {
  return <PageContent />;
};

export default TermsOfService;
