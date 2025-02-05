import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { id, locale } = params;

  return {
    title: "Blogs - Dubai Hot Air Balloon Adventure | Maha Balloon",
    description:
      "Stay updated with the latest blogs from Maha Balloon Adventures. Learn tips, insights, and the best times for hot air balloon rides in UAE.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/blog/${id}`,
    },
  };
}

const BlogInner = () => {
  return <PageContent />;
};

export default BlogInner;
