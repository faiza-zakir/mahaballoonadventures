import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { id } = params;

  return {
    title: "Maha Hot Air Balloons in Dubai",
    description: "Maha Hot Air Balloons in Dubai",
    alternates: {
      canonical: `https://newedge-realty-next.vercel.app/passengers-details/${id}`,
    },
  };
}

const PassengersDetails = () => {
  return <PageContent />;
};

export default PassengersDetails;
