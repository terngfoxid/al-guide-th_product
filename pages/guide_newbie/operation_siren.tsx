import BackToTop from "../../components/overlay/BackToTop";
import { useState } from "react";
import { NextSeo } from "next-seo";

export default function OPSguide() {
  const [video, setVideo] = useState(1);
  const move = () => {
    let access = document.getElementById("VideoPlayer");
    if (access != null) {
      access.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NextSeo
        title="ไกด์ Operation Siren | Azur Lane Guide TH"
        description="ไกด์ Operation Siren Azur Lane"
        openGraph={{
          url: "https://al-guide-th.com/guide_newbie/operation_siren",
          title: "ไกด์ Operation Siren | Azur Lane Guide TH",
          description: "ไกด์ Operation Siren Azur Lane",
          type: "article",
          article: {
            tags: ["Azur Lane", "Operation Siren", "OPS", "ไกด์"],
          },
          site_name: "ไกด์ Operation Siren",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,ไซเรน,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,Operation Siren,OPS",
          },
        ]}
      />

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <div className="flex justify-center">
            <h1 className="p-2 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
              ไกด์ Operation Siren
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="w-11/12 md:w-5/6 2xl:w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-10 pt-3">
              <div className="flex justify-center items-center rounded border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800 shadow-xl ">
                <div className="w-11/12">
                  <h2 className="p-2 text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center ">
                    Playlist OPS Starter 2023
                  </h2>
                  <div className="grid grid-cols-1 p-2 gap-2 px-5">
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:z-10"
                      onClick={() => {
                        setVideo(1);
                        move();
                      }}
                    >
                      บทที่ 1 ตะลุย OPS ครั้งแรก
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:z-10"
                      onClick={() => {
                        setVideo(2);
                        move();
                      }}
                    >
                      บทที่ 2 Puzzle อะไรลิงแก้ไม่เป็น
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:z-10"
                      onClick={() => {
                        setVideo(3);
                        move();
                      }}
                    >
                      บทที่ 3 เควส Ch.2 และ Zone Lv.5
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:z-10"
                      onClick={() => {
                        setVideo(4);
                        move();
                      }}
                    >
                      บทที่ 4 จบเควสเนื้อเรื่อง และ Guild Shop
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:z-10"
                      onClick={() => {
                        setVideo(5);
                        move();
                      }}
                    >
                      บทที่ 5 สิ่งที่ต้องทำในโหมด OPS
                    </button>
                    <button
                      className="w-full p-2 text-left text-xl duration-300 border border-transparent rounded bg-neutral-300 dark:bg-neutral-700 text-zinc-600 dark:text-zinc-300 md:text-xl lg:text-2xl hover:border-sky-500 hover:scale-110 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:z-10"
                      onClick={() => {
                        setVideo(6);
                        move();
                      }}
                    >
                      บทที่ 6 รีเดือนครั้งแรก
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="VideoPlayer"
                className="flex justify-center items-center rounded border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800 shadow-xl overflow-hidden"
              >
                {video == 1 && (
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/s2nUhTtR_gk"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                )}
                {video == 2 && (
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/Mq27k4qCRws"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                )}
                {video == 3 && (
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/kAO9rmZp_SI"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                )}
                {video == 4 && (
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/e8V5cydcjYE"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                )}
                {video == 5 && (
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/rtALEkrSSE0"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                )}
                {video == 6 && (
                  <iframe
                    className="aspect-video w-full rounded"
                    src="https://www.youtube.com/embed/cBE3COEZCng"
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
