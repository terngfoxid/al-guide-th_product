import Head from "next/head";
import Topbar from "../components/Topbar";
import ActiveEventCard from "../components/ActiveEventCard";
import Footer from "../components/Footer";
import BackToTop from "../components/overlay/BackToTop";

export default function Active_Event() {
  return (
    <>
      <Head>
        <title>Active Event</title>
        <meta name="description" content="active event page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />

      <main className="flex justify-center">
        <div className="container w-full py-4 mx-auto">
          <div className="flex justify-center">
            <div className="w-11/12 lg:w-5/6">
              <ActiveEventCard eventType="active_event" />
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
