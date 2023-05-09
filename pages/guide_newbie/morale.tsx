import Head from "next/head";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import BackToTop from "../../components/overlay/BackToTop";

export default function Home() {
  return (
    <>
      <Head>
        <title>บทเรียนที่ 5 ค่าอารมณ์ | Azur Lane Guide TH</title>
        <meta
          name="description"
          content="ค่าอารมณ์ Azur Lane , การฟื้นฟูค่าอารมณ์ , การคำนวณค่าอารมณ์ , อัตราการฟื้นฟูค่าอารมณ์"
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
                  src="/images/learning/act 5/banner.webp"
                  alt="ค่าอารมณ์"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 5/0.webp"
                  alt="ค่าอารมณ์ Azur Lane"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 5/1.webp"
                  alt="โบนัสจากค่าอารมณ์"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 5/2.webp"
                  alt="การลดค่าอารมณ์"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 5/3.webp"
                  alt="อัตราการฟื้นฟูค่าอารมณ์"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
