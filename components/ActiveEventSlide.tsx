/* eslint-disable @next/next/no-img-element */
import "animate.css";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import { Slide } from "./Slide";
import { ZoomableImage } from "./ZoomableImage";
import { useRouter } from "next/router";
import Loading from "./overlay/Loading";

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
    desc: string;
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
}[];

export default function ActiveEventCard() {
  const router = useRouter();
  const [activeEvent, setActiveEvent] = useState<ActiveEvent | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [chibiChatIndex, setChibiChatIndex] = useState<number>(0);
  const [chibiChatVisible, setChibiChatVisible] = useState<boolean>(true);

  const chibiChatText = [
    "กดคลิกที่รูปเพื่อขยายขนาดได้นะ",
    "ด่านแนะนำจะอยู่ด้านล่าง",
    "ปิดกล่องข้อความ กดที่ตัวจิบิ",
  ];

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setActiveEvent(data as ActiveEvent);
    };

    load().catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setChibiChatIndex((current) =>
        current < chibiChatText.length - 1 ? ++current : 0
      );
    }, 15000);
  }, [chibiChatIndex, chibiChatText.length]);

  useEffect(() => {
    const idx = activeEvent?.findIndex(
      (active) => active.name.replaceAll(" ", "_") === router.query.event
    );

    if (idx && idx !== -1) setActiveIndex(idx);
  }, [activeEvent, router.query.event]);

  if (!activeEvent) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <article key={`event-idx-${activeIndex}`}>
        {activeEvent[activeIndex].chibi && (
          <div
            id="chibi"
            className="fixed z-50 bottom-2 left-2 md:bottom-4 md:left-4 animate__animated animate__fadeInUp animate__slow"
          >
            <div className="flex justify-start">
              <img
                className="w-20 cursor-pointer md:w-max"
                src={activeEvent[activeIndex].chibi}
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
                src={`https://drive.google.com/uc?export=view&id=${activeEvent[activeIndex].banner}`}
                alt={`${activeEvent[activeIndex].banner} picture`}
              />
            </div>
          </div>

          {activeEvent[activeIndex].ships?.length > 0 && (
            <div
              id="ships-slide"
              className="border hidden md:block border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <Slide>
                {activeEvent[activeIndex].ships.map((ship) => {
                  return (
                    <div
                      key={ship.name}
                      className="aspect-[21/9] px-10 pb-8 bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/MainDayBG.webp')] dark:bg-[url('/images/MainTwilightBG.webp')]"
                    >
                      <Link href={`/ship/${ship.name}`}>
                        <div className="flex w-full h-full flex-row">
                          <img
                            src={ship.image}
                            key={ship.image}
                            alt={ship.image}
                            className="z-40 object-scale-down aspect-square origin-[40%_40%] flex-shrink-0"
                          />
                          <div className="z-50 h-full p-4 w-full">
                            <div className="w-full h-full p-4 overflow-y-auto rounded-lg bg-neutral-200 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80">
                              <div className="flex items-center mb-5">
                                <img
                                  className="inline h-8 mr-1 align-middle"
                                  src={`/images/type/${ship.type}.webp`}
                                  alt={ship.type}
                                />
                                <span className="text-xl lg:text-4xl">
                                  {(
                                    (ship.faction_short ?? "") +
                                    " " +
                                    ship.name
                                  ).trim()}
                                </span>
                              </div>
                              <Markdown options={{ wrapper: "article" }}>
                                {ship.desc.replace(/\\n/g, "\n") ??
                                  "ไม่มีข้อมูล"}
                              </Markdown>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Slide>
            </div>
          )}

          {activeEvent[activeIndex].ships?.length > 0 && (
            <div
              id="ships-chibi"
              className="p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <div className="mb-4 text-center">
                <h1 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                  {activeEvent[activeIndex].type === "new"
                    ? "เรือใหม่"
                    : "เรือในกิจกรรม"}
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {activeEvent[activeIndex].ships.map((ship, idx) => {
                  return (
                    <div
                      key={ship.name}
                      className="overflow-hidden duration-300 border-2 border-transparent rounded-lg shadow bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 hover:border-cyan-400"
                    >
                      <Link
                        className="text-zinc-700 dark:text-zinc-300"
                        href={`/ship/${ship.name}`}
                      >
                        <div className="flex items-center justify-start w-full py-1 sm:px-2">
                          <img
                            src={`/images/type/${ship.type}.webp`}
                            alt="ship type"
                            className="w-[40px] sm:w-[50px]"
                          />
                          <div className="w-full px-1 truncate md:px-3 sm:rounded-r-lg bg-neutral-400 dark:bg-neutral-600">
                            <p>{ship.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                          <img src={ship.chibi} alt="ship chibi image" />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeEvent[activeIndex].quests && (
            <div
              id="quests"
              className="p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <div className="mb-4 text-center">
                <h1 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                  เควสและของรางวัล
                </h1>
              </div>
              {activeEvent[activeIndex].special && (
                <div className="grid gap-4 mb-4 md:grid md:grid-cols-2">
                  {activeEvent[activeIndex].special.map((item, idx) => {
                    return (
                      <div
                        key={`quest-${idx}`}
                        className="flex p-4 border border-gray-300 rounded-lg flex-cols dark:border-gray-700"
                      >
                        <div className="px-4 w-fit">
                          <img
                            className="w-32 aspect-square"
                            alt={`event extra image ${idx}`}
                            src={item.blob}
                          ></img>
                        </div>
                        <div className="flex items-center justify-center flex-grow">
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
                {activeEvent[activeIndex].quests.map((quest, idx) => {
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
          {activeEvent[activeIndex].note && (
            <div
              id="note"
              className="p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
            >
              <div className="text-center">
                <h1 className="mb-4 text-xl md:text-2xl">
                  สรุปข้อมูลด่านน่าฟาร์มประจำ Event
                  {activeEvent[activeIndex].type === "new" ? " ใหม่" : ""}
                </h1>
                <h2 className="mb-2 text-lg md:text-xl">
                  {activeEvent[activeIndex].name}
                </h2>
                <h2 className="mb-2 text-lg md:text-xl">
                  {activeEvent[activeIndex].time}
                </h2>
              </div>
              <div className="p-4 space-y-4 border border-gray-300 rounded-lg dark:border-gray-700">
                {Object.entries({
                  beginner: "◆ ด่านน่าฟาร์ม (ผู้เล่นใหม่)",
                  veteran: "◆ ด่านน่าฟาร์ม (ผู้เล่นกลาง-เก่า)",
                  special: "◆ ด่าน SP",
                  summary: "◆ สรุปง่ายๆสั้นๆ",
                }).map(([key, title]) => {
                  const note = activeEvent[activeIndex].note;
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
          {activeEvent[activeIndex].guide && (
            <div id="guide" className="rounded-lg overflow-hidden shadow-md">
              <ZoomableImage
                src={`https://drive.google.com/uc?export=view&id=${activeEvent[activeIndex].guide}`}
              />
            </div>
          )}
        </div>
      </article>
    );
  }
}
