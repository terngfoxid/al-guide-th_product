import Link from "next/link";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Azur Lane Guide</title>
        <meta name="description" content="Webapp for azur lane TH comunity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <main className="flex justify-center">
        <div className="container p-5 xl:max-w-screen-xl">
          <div className="flex flex-col gap-5 py-5 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800">
            <div className="pt-2">
              <h1 className="text-3xl font-bold text-center text-zinc-700 dark:text-zinc-300">
                404 Page Not Found
              </h1>
            </div>
            <div className="py-2 text-lg text-center text-zinc-600 dark:text-zinc-400 md:text-2xl">
              <Link
                href="/"
                className="px-2 rounded hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
