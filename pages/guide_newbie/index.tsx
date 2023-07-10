import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="บทเรียนผู้เล่นใหม่ | Azur Lane Guide TH"
        description="บทเรียนผู้เล่นใหม่ | Azur Lane Guide TH"
        openGraph={{
          url: "https://al-guide-th.com/guide_newbie",
          title: "บทเรียนผู้เล่นใหม่ | Azur Lane Guide TH",
          description: "บทเรียนผู้เล่นใหม่ | Azur Lane Guide TH",
          type: "article",
          article: {
            tags: ["Azur Lane", "บทเรียน", "สอนเล่น", "ผู้เล่นใหม่"],
          },
          site_name: "บทเรียนผู้เล่นใหม่ | Azur Lane Guide TH",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,สอนเล่น,เล่นใหม่,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,บทเรียน al guide th,เล่นใหม่,เล่นใหม่ azur lane",
          },
        ]}
      />

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <div className="flex justify-center">
            <div className="w-11/12 px-5 py-2 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700">
              <h1 className="p-2 text-2xl font-bold text-center text-zinc-600 dark:text-zinc-300 md:text-2xl lg:text-3xl">
                บทเรียนมือใหม่
              </h1>
              <div className="grid grid-cols-1 gap-x-10 gap-y-5 py-2 md:grid-cols-2">
                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/glossary"
                >
                  <h2>บทเรียนที่ 1 คำศัพท์/คำย่อ</h2>
                </Link>

                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/basic_formation"
                >
                  <h2>บทเรียนที่ 2 ตำแหน่งของเรือในทีม</h2>
                </Link>

                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/get3star"
                >
                  <h2>บทเรียนที่ 3 การเก็บ 3☆</h2>
                </Link>

                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/xpcommander"
                >
                  <h2>บทเรียนที่ 4 การเก็บ Exp ผู้การ</h2>
                </Link>

                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/morale"
                >
                  <h2>บทเรียนที่ 5 ค่าอารมณ์</h2>
                </Link>

                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/coredata"
                >
                  <h2>บทเรียนที่ 6 Core Data</h2>
                </Link>

                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/tech"
                >
                  <h2>บทเรียนที่ 7 Tech</h2>
                </Link>

                <Link
                  className="items-center w-full h-full p-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/retrofit"
                >
                  <h2>บทเรียนที่ 8 Retrofit</h2>
                </Link>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </main>
    </>
  );
}
