import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function B_Event_2_Card() {
  const [activeEvent, setActiveEvent] = useState<ActiveEvent | null>(null);
  const [webState, setWebState] = useState(0);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/events");
      setWebState(response.status)
      const data = await response.json();
      setActiveEvent(data as ActiveEvent);
    };

    load().catch((e) => console.log(e));
  }, []);

  const card_style = {
    shape:
      "hover:scale-110 overflow-hidden group relative w-full rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-2 border-t-1 border-l-1 border-r-1 duration-300 hover:z-10",
    body_style:
      "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center ",
    image_style: "w-full rounded-lg shadow-xl",
  };

  if (!activeEvent) {
    const loading_style = {
      symbol_style:
        "w-full h-full text-zinc-600 dark:text-zinc-300 text-2xl font-bold font-serif text-left",
      adjust_inline: "inline-flex items-center block p-2",
      body_position: "flex justify-center items-center",
    };

    return (
      <div className={card_style.shape}>
        <div
          className={
            loading_style.symbol_style + " " + loading_style.body_position
          }
        >
          <button className={loading_style.adjust_inline}>
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-3 text-gray-400 animate-spin fill-neutral-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            Loading...
          </button>
        </div>
      </div>
    );
  }

  if (webState == 429) {
    const loading_style = {
      symbol_style:
        "w-full h-full text-zinc-600 dark:text-zinc-300 text-2xl font-bold font-serif text-left",
      adjust_inline: "inline-flex items-center block p-2",
      body_position: "flex justify-center items-center",
    };

    return (
      <div className={card_style.shape}>
        <div
          className={
            loading_style.symbol_style + " " + loading_style.body_position
          }
        >
          <button className={loading_style.adjust_inline}>
            <svg className="w-8 h-8 mr-3 text-[#FF3845] fill-[#FF3845]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            <p className="text-[#FF3845]">ไม่สามารถโหลดข้อมูลได้</p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <button className={card_style.shape}>
      <Link href={"/active_event_slide?event="+activeEvent[1].name.replaceAll(" ", "_")} className="w-full">
        <img
          src={
            "" +
            activeEvent[1].button
          }
          className={card_style.image_style}
          alt="ข้อมูลกิจกรรม"
          width="600"
          height="300"
        />
      </Link>
    </button>
  );
}
