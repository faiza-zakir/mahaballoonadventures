import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Maha Hot Air Balloons in Dubai",
    description:
      "Reach out to Maha Balloon Adventures for inquiries or bookings.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/wishlist`,
    },
  };
}

const Wishlist = () => {
  return <PageContent />;
};

export default Wishlist;
