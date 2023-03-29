import Head from "next/head";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import BackToTop from "../../components/overlay/BackToTop";

export default function Home() {

    return (
        <>
            <Head>
                <title>บทเรียนที่ 2 ตำแหน่งของเรือในทีม</title>
                <meta name="description" content="การจัดกองเรือ Azur Lane,สอนจัดกองเรือ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Topbar />

            <main className="flex justify-center">
                <div className="w-full 2xl:max-w-7xl">
                    <div className="grid grid-cols-1 py-5 space-y-3 md:space-y-5">
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 2/banner.webp"
                                    alt="ตำแหน่งของเรือในทีม 1"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 2/1.webp"
                                    alt="ตำแหน่งของเรือในทีม 2"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 2/2.webp"
                                    alt="ตำแหน่งของเรือในทีม 3"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 2/3.webp"
                                    alt="ตำแหน่งของเรือในทีม 4"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 2/4.webp"
                                    alt="ตำแหน่งของเรือในทีม 5"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 2/5.webp"
                                    alt="ตำแหน่งของเรือในทีม 6"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 2/6.webp"
                                    alt="ตำแหน่งของเรือในทีม 7"
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
