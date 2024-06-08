import Head from "next/head";
import BackToTop from "../../components/overlay/BackToTop";

export default function Home() {
  return (
    <>
      <Head>
        <title>บทเรียนที่ 4 การเก็บ Exp ผู้การ | Azur Lane Guide TH</title>
        <meta name="description" content="การเก็บเลเวลผู้การ Azur Lane" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ez-upload.al-guide-th.com/api/download/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <div className="grid grid-cols-1 py-5 space-y-3 md:space-y-5">
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 4/banner.webp"
                  alt="การเก็บ Exp ผู้การ 1"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 4/1.webp"
                  alt="การเก็บ Exp ผู้การ 2"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 4/2.webp"
                  alt="การเก็บ Exp ผู้การ 3"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 4/3.webp"
                  alt="การเก็บ Exp ผู้การ 4"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 4/4.webp"
                  alt="การเก็บ Exp ผู้การ 5"
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
