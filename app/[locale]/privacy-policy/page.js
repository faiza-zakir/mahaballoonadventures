import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai",
    description: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/privacy-policy",
    },
  };
}

const PrivacyPolicy = () => {
  return <PageContent />;
};

export default PrivacyPolicy;
