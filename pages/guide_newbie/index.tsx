import Head from "next/head";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>บทเรียน AL GuideTH</title>
        <meta name="description" content="Webapp for azur lane TH comunity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <div className="flex justify-center">
            <div className="w-11/12 px-5 py-2 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700">
              <p className="p-2 text-2xl font-bold text-center text-zinc-600 dark:text-zinc-300 md:text-2xl lg:text-3xl">
                บทเรียนมือใหม่
              </p>
              <div className="grid grid-cols-1 gap-10 py-2 md:grid-cols-2">
                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/glossary"
                >
                  บทเรียนที่ 1 คำศัพท์/คำย่อ
                </Link>

                <button className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl">
                  บทเรียนที่ 2 (ไม่พร้อมใช้งาน)
                </button>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </main>
      <Footer />
    </>
  );
}
