// app/page.js (default page)
import LocaleRedirector from "./LocaleRedirector";
import Loader from "./components/Common/Loader/Loader"; // Import your client-side redirect component

export default function Page({ params }) {
  return (
    <div>
      <LocaleRedirector locale={params.locale} /> <Loader />
    </div>
  );
}
