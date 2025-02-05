import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai",
    description: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/privacy-policy`,
    },
  };
}

const PrivacyPolicy = () => {
  return <PageContent />;
};

export default PrivacyPolicy;
