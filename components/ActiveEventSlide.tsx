import "animate.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "./overlay/Loading";
import { Slide } from "./Slide";
import { ZoomableImage } from "./ZoomableImage";

type ActiveEvent = {
  name: string;
  type: "new" | "rerun";
  banner: string;
  time: string;
  chibi: string;
  quests: string[];

  ships: {
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
  const [activeEvent, setActiveEvent] = useState<ActiveEvent | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setActiveEvent(data as ActiveEvent);
    };

    load().catch((e) => console.log(e));
  }, []);

  if (!activeEvent) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        {activeEvent.length > 1 && (
          <div
            id="event-selector"
            className="grid gap-4 p-5 border border-gray-300 rounded-lg dark:border-gray-700"
          >
            {activeEvent.map((evt, idx) => {
              return (
                <button
                  key={`${idx}-${evt.name}`}
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  className={`w-full p-1 text-xl duration-300 border border-transparent rounded ${
                    activeIndex == idx
                      ? "border-sky-500 bg-neutral-300 dark:bg-neutral-600"
                      : "bg-neutral-200 dark:bg-neutral-800"
                  } md:text-xl lg:text-2xl hover:border-sky-500 hover:bg-neutral-300 dark:hover:bg-neutral-600`}
                >
                  {evt.name}
                </button>
              );
            })}
          </div>
        )}

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
            id="ships"
            className="border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
          >
            <Slide>
              {activeEvent[activeIndex].ships.map((ship) => {
                return (
                  <div key={"slide "+ship.name} className="sm:aspect-[21/9] sm:px-10 pb-8 bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/MainDayBG.webp')] dark:bg-[url('/images/MainTwilightBG.webp')]">
                    <Link href={`/ship/${ship.name}`}>
                      <div className="flex flex-col w-full h-full sm:flex-row">
                        <img
                          src={ship.image}
                          key={ship.image}
                          className="z-40 scale-[3] sm:scale-150 object-scale-down aspect-square origin-[50%_25%] sm:origin-[40%_40%] flex-shrink-0 md:aspect-square md:block"
                        />
                        <div className="z-50 h-full p-4">
                          <div className="w-full h-full p-4 overflow-y-auto rounded-lg aspect-square sm:aspect-auto bg-neutral-200 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80">
                            <div className="flex items-center mb-5">
                              <img
                                className="inline h-8 mr-1 align-middle"
                                src={`/images/type/${ship.type}.webp`}
                                alt={ship.type}
                              />
                              <span className="text-xl md:text-4xl">
                                {ship.name}
                              </span>
                            </div>
                            <p className="md:text-lg">{ship.desc}</p>
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
                  <div key={"note-"+key} id={`note-${key}`}>
                    <h1 className="text-lg">{title}</h1>

                    {note[key as keyof typeof note].map((text) => (
                      <p key={"text"} className="pl-8">- {text ?? "ไม่มีข้อมูล"}</p>
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
    );
  }
}
