import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Maha Hot Air Balloons in Dubai",
    description:
      "Reach out to Maha Balloon Adventures for inquiries or bookings.",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/wishlist",
    },
  };
}

const Wishlist = () => {
  return <PageContent />;
};

export default Wishlist;
