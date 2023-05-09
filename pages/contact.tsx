import Head from "next/head";
import Contact_Card from "../components/Contact_Card";

export default function Contract() {
  return (
    <>
      <Head>
        <title>ผู้จัดทำ | Azur Lane Guide TH</title>
        <meta name="description" content="รายชื่อผู้จัดทำ" />
      </Head>

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <Contact_Card />
          <br></br>
        </div>
      </main>
    </>
  );
}
