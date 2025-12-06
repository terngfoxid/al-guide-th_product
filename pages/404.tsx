import Link from "next/link";
import Head from "next/head";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="404 Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        404
      </main>
    </>
  );
}
