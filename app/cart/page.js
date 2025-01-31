import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Maha Hot Air Balloons in Dubai",
    description:
      "Reach out to Maha Balloon Adventures for inquiries or bookings.",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/cart",
    },
  };
}

const Cart = () => {
  return <PageContent />;
};

export default Cart;
