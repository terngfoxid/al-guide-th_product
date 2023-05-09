import Head from "next/head";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import BackToTop from "../components/overlay/BackToTop";
import ActiveEventCard from "../components/ActiveEventSlide";

export default function ActiveEventDev() {
  return (
    <>
      <Head>
        <title>Active Event</title>
        <meta name="description" content="active event page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container w-full py-4 mx-auto">
          <div className="w-11/12 lg:w-5/6 mx-auto">
            <ActiveEventCard />
          </div>
        </div>
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}
