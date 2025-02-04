import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Best Things to Do in Dubai | Outdoor Activities | Maha Balloon",
    description:
      "Explore the Best Things To Do in Dubai! From the Burj Khalifa and Dubai Mall to Desert Safaris and Nightlife, Discover unforgettable Outdoor Activities.",
    alternates: {
      canonical: "https://mahaballoonadventures.ae/things-to-do-in-dubai",
    },
  };
}

const ThingsToDo = () => {
  return <PageContent />;
};

export default ThingsToDo;
