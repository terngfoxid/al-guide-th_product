import Head from "next/head";
import Topbar from "../components/Topbar";
import Contact_Card from "../components/Contact_Card";
import Footer from "../components/Footer";

export default function Contract() {
  return (
    <>
      <Head>
        <title>Azur Lane Guide</title>
        <meta name="description" content="contract page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <Contact_Card />
          <br></br>
        </div>
      </main>
      <Footer />
    </>
  );
}
