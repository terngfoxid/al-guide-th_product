import Head from "next/head";
import BackToTop from "../../components/overlay/BackToTop";

export default function Home() {
  return (
    <>
      <Head>
        <title>บทเรียนที่ 6 Core Data | Azur Lane Guide TH</title>
        <meta
          name="description"
          content="Core Data Azur Lane , Core Data หาจากใหน , Core Data ควรแลกอะไร , Core Shop Azur Lane"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <div className="grid grid-cols-1 py-5 space-y-3 md:space-y-5">
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 6/banner.webp"
                  alt="Core Data Azur Lane"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 6/1.webp"
                  alt="Core Data คืออะไร"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 6/2.webp"
                  alt="Core Data หาจากใหน"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 6/3.webp"
                  alt="Core Data แลกอะไรดี"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 6/4.webp"
                  alt="Core Data แลกอะไรดี"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 6/5.webp"
                  alt="Core Data แลกอะไรดี"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
