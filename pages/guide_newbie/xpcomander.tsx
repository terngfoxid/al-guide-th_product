import Head from "next/head";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import BackToTop from "../../components/overlay/BackToTop";

export default function Home() {

    return (
        <>
            <Head>
                <title>บทเรียนที่ 4 การเก็บ Exp ผู้การ</title>
                <meta name="description" content="Exp commander gain" />
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
                                    src="/images/learning/act 4/banner.webp"
                                    alt="learning banner picture"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 4/1.webp"
                                    alt="learning banner picture"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 4/2.webp"
                                    alt="learning banner picture"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 4/3.webp"
                                    alt="learning banner picture"
                                ></img>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                                <img
                                    className="w-full h-full"
                                    src="/images/learning/act 4/4.webp"
                                    alt="learning banner picture"
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
