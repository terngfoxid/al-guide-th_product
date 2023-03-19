import Head from "next/head";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import BackToTop from "../components/overlay/BackToTop";
import { useState } from "react";

export default function Contract() {
  const [video, setVideo] = useState(1);
  const move = () => {
    let access = document.getElementById("VideoPlayer");
    if (access != null) {
      access.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Head>
        <title>ไกด์แมว 2.0</title>
        <meta name="description" content="Meowfficer thai guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <div className="flex justify-center">
            <p className="p-2 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">บทเรียนไกด์แมว 2.0</p>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 md:w-5/6 2xl:w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-10 pt-3">
              <div className="flex justify-center items-center rounded border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800 shadow-xl ">
                <div>
                  <p className="p-2 text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center ">Playlist ไกด์แมว 2.0</p>
                  <div className="grid grid-cols-1 p-2 gap-2 px-5">
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                      onClick={() => {
                        setVideo(1);
                        move();
                      }}
                    >
                      บทที่ 1 Slot Talent ตอนเกิด
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                      onClick={() => {
                        setVideo(2);
                        move();
                      }}
                    >
                      บทที่ 2 ตำแหน่ง คู่ และทีม
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                      onClick={() => {
                        setVideo(3);
                        move();
                      }}
                    >
                      บทที่ 3 Talent ตรงสาย
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                      onClick={() => {
                        setVideo(4);
                        move();
                      }}
                    >
                      บทที่ 4 เกิดแบบใหนน่าไปต่อ(ยังไม่มา)
                    </button>
                  </div>
                </div>
              </div>
              <div id="VideoPlayer" className="flex justify-center items-center rounded border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800 shadow-xl overflow-hidden">
                {
                  (video == 1) &&
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/g71yGC8BT9I"
                    title="YouTube video player" allowFullScreen>
                  </iframe>
                }
                {
                  (video == 2) &&
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/wLZUAY6DmrM"
                    title="YouTube video player" allowFullScreen>
                  </iframe>
                }
                {
                  (video == 3) &&
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/gk9o4WQc2Es"
                    title="YouTube video player" allowFullScreen>
                  </iframe>
                }
              </div>
            </div>
          </div>
          <br></br>
          <div className="flex justify-center ">
            <p className="px-3 pb-1 pt-3 w-max rounded-t-lg text-zinc-700 dark:text-zinc-300 text-xl md:text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">ตัวอย่างแมวที่รีเสร็จแล้วโดย Hori</p>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 md:w-5/6 2xl:w-full">
              <div
                id="exampleHori"
                className="w-full overflow-hidden border border-gray-300 rounded-lg shadow-md cursor-zoom-in bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800">
                <img
                  src="/images/meow2/example_hori.webp"
                  alt={`meaw picture`}
                  onClick={() => {
                    const element = document.getElementById("exampleHori")!;
                    element.classList.toggle("overflow-scroll");
                    element.classList.toggle("fixed");
                    element.classList.toggle("inset-0");
                    element.classList.toggle("cursor-zoom-in");
                    element.classList.toggle("cursor-zoom-out");
                    element.classList.toggle("bg-black");

                    element.scrollIntoView();

                    const BTT = document.getElementById("BTT")!;
                    BTT.classList.toggle("hidden");
                  }}
                ></img>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
