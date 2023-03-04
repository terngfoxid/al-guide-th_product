import Head from "next/head";
import Topbar from "../components/Topbar";
import ActiveEventCard from "../components/Active_Event_Card";
import Footer from "../components/Footer";

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
        <div className="container p-5 xl:max-w-screen-xl">
          <ActiveEventCard />
        </div>
      </main>
      
      <Footer />
    </>
  );
}
