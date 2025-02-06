/* eslint-disable @next/next/no-img-element */
import "animate.css";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import { Slide } from "./Slide";
import { ZoomableImage } from "./ZoomableImage";
import { useRouter } from "next/router";
import Loading from "./overlay/Loading";
import Carroussel from "./Carroussel";
import { uuid } from "uuidv4";

type ActiveEvent = {
  name: string;
  type: "new" | "rerun";
  button: string;
  banner: string;
  time: string;
  chibi: string;
  quests: string[];

  ships: {
    faction: string;
    faction_short: string;
    name: string;
    type: string;
    image: string;
    chibi: string;
  }[];

  note: {
    beginner: string[];
    veteran: string[];
    special: string[];
    summary: string[];
  };

  special: {
    blob: string;
    title: string;
    text: string;
  }[];

  guide: string;
};

export default function DataEventCard() {
  const router = useRouter();
  const [activeEvent, setActiveEvent] = useState<ActiveEvent | null>(null);
  const [chibiChatIndex, setChibiChatIndex] = useState<number>(0);
  const [chibiChatVisible, setChibiChatVisible] = useState<boolean>(true);

  const [webState, setWebState] = useState(0);

  const chibiChatText = [
    "กดคลิกที่รูปเพื่อขยายขนาดได้นะ",
    "ด่านแนะนำจะอยู่ด้านล่าง",
    "ปิดกล่องข้อความ กดที่ตัวจิบิ",
  ];

  useEffect(() => {
    if(!router.isReady) return;
    const load = async () => {
      const eventName = router.query.name
      const response = await fetch("/api/select_event/"+eventName);
      console.log(response)
      setWebState(response.status)
      const data = await response.json();
      setActiveEvent(data as ActiveEvent);
    };

    load().catch((e) => console.log(e));
  }, [router.isReady]);

  useEffect(() => {
    setTimeout(() => {
      setChibiChatIndex((current) =>
        current < chibiChatText.length - 1 ? ++current : 0
      );
    }, 15000);
  }, [chibiChatIndex, chibiChatText.length]);

  if (!activeEvent) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  } else {
    if (webState == 429) {
      return (
        <div
          id="error"
          className="p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
        >
          <div className="mx-auto flex gap-1 justify-center items-center bg-neutral-200 dark:bg-neutral-800">
            <svg className="w-8 h-8 mr-3 text-[#FF3845] fill-[#FF3845]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            <p className="text-[#FF3845]">ไม่สามารถโหลดข้อมูลได้</p>
          </div>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">กรุณาลองใหม่อีกครั้งหลังเวลา 14:00 น.</p>
        </div>
      )
    }

    let cards: { key: string; content: JSX.Element; }[] = [
    ];
    activeEvent.ships?.forEach(
      (ship) => {
        cards.push(
          {
            key: uuid(),
            content: <div className="relative max-h-[200px] md:max-h-[360px] xl:max-h-[500px] w-[220px] sm:w-[330px] md:w-[400px] lg:w-[500px] overflow-visible flex items-center justify-center">
              <img
                src={ship.image}
                key={ship.image}
                alt={ship.image}
                className="h-[220px] sm:h-[350px] md:h-[400px] lg:h-[600px] object-center aspect-square flex-shrink-0"
              />
              <p className="flex justify-center max-w-none w-max px-[5px] lg:px-[20px] py-[3px] lg:py-[12px] absolute left-1/2 transform -translate-x-1/2 bottom-[5px] lg:bottom-[20px] rounded rounded-md border border-gray-600 shadow-lg bg-neutral-800 text-neutral-200 dark:text-gray-300 text-lg lg:text-xl">
                {ship.faction_short} {ship.name}
              </p>
            </div>
          },
        )
      }
    )

    return (
      <article key={`event-idx-0`}>
        {activeEvent.chibi && (
          <div
            id="chibi"
            className="fixed z-50 bottom-2 left-2 md:bottom-4 md:left-4 animate__animated animate__fadeInUp animate__slow"
          >
            <div className="flex justify-start">
              <img
                className="w-20 cursor-pointer md:w-max"
                src={activeEvent.chibi}
                alt="event chibi"
                onClick={() => {
                  setChibiChatVisible((current) => !current);
                }}
              />
              {chibiChatVisible && (
                <div className="inline-flex items-center pt-4 md:pt-8">
                  <span className="animate__animated animate__fadeIn animate__slow flex bg-neutral-200 rounded-t-xl rounded-br-xl p-1 border-2 border-neutral-900 text-sm md:text-lg">
                    {chibiChatText[chibiChatIndex]}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
          <div id="banner">
            <div
              style={{ aspectRatio: 21 / 9 }}
              className="border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <img
                className="object-scale-down text-center rounded-lg"
                src={`${activeEvent.banner}`}
                alt={`${activeEvent.banner} picture`}
              />
            </div>
          </div>

          {activeEvent.ships?.length > 0 && (
            <div
              id="ships-slide"
              className="overflow-hidden border hidden md:block border-gray-300 dark:border-gray-700  rounded-lg shadow-md bg-[url('/images/BG_Fort.png')] dark:bg-[url('/images/BG_Fort_night.png')] bg-cover bg-center md:aspect-[21/14] lg:aspect-[21/10]"
            >
              <Carroussel
                cards={cards}
                height="100%"
                width="90%"
                margin="0 auto"
                offset={2}
                showArrows={false}
              />
            </div>
          )}

          {activeEvent.ships?.length > 0 && (
            <div
              id="ships-chibi"
              className="p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <h2 className="mb-2 text-lg md:text-2xl text-center">
                {activeEvent.name}
              </h2>
              <h2 className="mb-2 text-sm md:text-xl text-center">
                {activeEvent.time}
              </h2>
              <div className="mb-4 text-center border-t pt-[10px] border-gray-300 dark:border-gray-700">
                <h1 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                  {activeEvent.type === "new"
                    ? "เรือใหม่"
                    : "เรือในกิจกรรม"}
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {activeEvent.ships.map((ship, idx) => {
                  return (
                    <div
                      key={ship.name}
                      className="overflow-hidden duration-300 border-2 border-transparent rounded-lg shadow bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 hover:border-cyan-400"
                    >
                      <Link
                        className="text-zinc-200 dark:text-zinc-300"
                        href={`/ship/${ship.name}`}
                      >
                        <div className="flex items-center justify-start w-full py-1 sm:px-2">
                          <img
                            src={`/images/type/${ship.type}.webp`}
                            alt="ship type"
                            className="w-[40px] sm:w-[50px]"
                          />
                          <div className="w-full px-1 truncate md:px-3 sm:rounded-r-lg bg-neutral-500 dark:bg-neutral-600">
                            <p>{ship.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                          <img className="max-h-[150px]" src={ship.chibi} alt="ship chibi image" />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeEvent.quests && (
            <div
              id="quests"
              className="p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <div className="mb-4 text-center">
                <h1 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                  เควสและของรางวัล
                </h1>
              </div>
              {activeEvent.special && (
                <div className="grid gap-4 auto-rows-fr mb-4 md:grid md:grid-cols-2">
                  {activeEvent.special.map((item, idx) => {
                    return (
                      <div
                        key={`quest-${idx}`}
                        className="flex p-4 border border-gray-300 rounded-lg flex-cols\ dark:border-gray-700"
                      >
                        <div className="px-4 w-1/3 lg:w-1/4 aspect-square">
                          <img
                            className="w-full h-full object-contain"
                            alt={`event extra image ${idx}`}
                            src={item.blob}
                          ></img>
                        </div>
                        <div className="flex justify-start items-center flex-grow">
                          <div>
                            {item.title && (
                              <h1 className="my-2 text-left text-zinc-700 dark:text-zinc-300 md:text-lg">
                                {item.title}
                              </h1>
                            )}
                            {item.text && (
                              <p className="my-2 text-left text-zinc-700 dark:text-zinc-300">
                                {item.text}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="p-4 space-y-2 border border-gray-300 rounded-lg dark:border-gray-700">
                {activeEvent.quests.map((quest, idx) => {
                  return (
                    <p key={"quest" + idx}>
                      <span className="mr-2">▷</span>
                      {quest}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {activeEvent.note && (
            <div
              id="note"
              className="p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <div className="text-center">
                <h1 className="mb-4 text-xl md:text-2xl">
                  สรุปข้อมูลด่านน่าฟาร์มประจำ Event
                  {activeEvent.type === "new" ? " ใหม่" : ""}
                </h1>
              </div>
              <div className="p-4 space-y-4 border border-gray-300 rounded-lg dark:border-gray-700">
                {Object.entries({
                  beginner: "◆ ด่านน่าฟาร์ม (ผู้เล่นใหม่)",
                  veteran: "◆ ด่านน่าฟาร์ม (ผู้เล่นกลาง-เก่า)",
                  special: "◆ ด่าน SP",
                  summary: "◆ สรุปง่ายๆสั้นๆ",
                }).map(([key, title]) => {
                  const note = activeEvent.note;
                  return (
                    <div key={"note-" + key} id={`note-${key}`}>
                      <h1 className="text-lg">{title}</h1>
                      {note[key as keyof typeof note].map((text) => (
                        <p key={"text"} className="pl-8">
                          - {text ?? "ไม่มีข้อมูล"}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {activeEvent.guide && (
            <div id="guide" className="rounded-lg overflow-hidden shadow-md">
              <ZoomableImage
                src={`${activeEvent.guide}`}
              />
            </div>
          )}
        </div>
      </article>
    );
  }
}
