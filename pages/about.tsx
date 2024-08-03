import About_Card from "@/components/About_Card";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>ผู้จัดทำ | Azur Lane Guide TH</title>
        <meta name="description" content="รายชื่อผู้จัดทำ" />
      </Head>

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <About_Card/>
          <br></br>
        </div>
      </main>
    </>
  );
}
