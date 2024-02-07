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
              "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,ไซเรน,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,TB,Project Identity",
          },
        ]}
      />

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <div className="flex justify-center">
            <h1 className="p-2 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
              Project Identity Ver 1.0
            </h1>
          </div>

          <div className="w-full">
            <div className="mt-2 md:flex mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
              <p className="px-4 text-center md:text-left text-zinc-700 dark:text-zinc-300 text-xl font-bold whitespace-nowrap">Project Identity</p>
              <p className="px-4 text-zinc-700 dark:text-zinc-300 text-lg">คือ ระบบจำลองการเลี้ยงดูน้อง TB โดยจะต้องใช้เวลาในการเลี้ยงน้องทั้งหมด 48 อาทิตย์ บุคลิกของ TB จะขึ้นอยู่กับการเลี้ยงดูของเรา มีฉากจบทั้งหมด 11แบบ และสามารถนำ TB ไปตั้งเป็นเลขาที่หน้า Lobby ได้</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-11/12 md:w-5/6 2xl:w-full grid grid-cols-1 gap-3 md:gap-x-10 pt-3">
              <div
                id="VideoPlayer"
                className="flex justify-center items-center rounded border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800 shadow-xl overflow-hidden"
              >
                <iframe
                  className="aspect-video w-full rounded"
                  src="https://www.youtube.com/embed/l2wmzP6Z2Ns"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
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
