import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Loading from "./overlay/Loading";
import ChibiEvent from "./overlay/Chibi_Event";
import "animate.css";

export default function ActiveEventCard(props: { eventType: string }) {
  const [eventdata, setEventdata] = useState({
    data: {
      banner: null,
      button: null,
      chibi: null,
      event_guide: null,

      newship: [],
      newship_chibi: [],
      newship_type: [],
      error: null,

      event_note_beginer: [],
      event_note_midgame: [],
      event_note_sp: [],
      event_note_sum: [],

      event_name: null,
      event_time: null,
      event_type: null,

      quest: [],
      special_furniture: null,
      special_frame: null,
      special_furniture_text: null,
      special_frame_text: null,
      special_furniture_text2: null,
      special_frame_text2: null,
    },
  });

  let elementRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetch("/api/" + props.eventType);
      const json = await data.json();
      setEventdata({ data: json });
    };

    load().catch((err) => console.log(err));
  }, []);

  if (eventdata.data.banner == null && eventdata.data.error == null) {
    return (
      <div className="flex justify-center p-5">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 md:max-w-5/6 ">
      <div id="banner">
        <div className="border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800">
          <img
            className="object-scale-down rounded-lg"
            src={`https://drive.google.com/uc?export=view&id=${eventdata.data.banner}`}
            alt={`${eventdata.data.banner} picture`}
          ></img>
        </div>
      </div>

      {eventdata.data.newship.length > 0 && (
        <div id="ships">
          <div className="p-3 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800">
            <div className="mb-3 text-center">
              {eventdata.data.event_type == null ? (
                <h1 className="text-xl font-bold text-zinc-700 dark:text-zinc-300 md:text-2xl">
                  ????????????????????????
                </h1>
              ) : (
                <h1 className="text-xl font-bold text-zinc-700 dark:text-zinc-300 md:text-2xl">
                  ???????????????????????????????????????
                </h1>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {eventdata.data.newship.map((newship, idx) => {
                return (
                  <div
                    key={eventdata.data.newship[idx]}
                    className="overflow-hidden duration-300 border-2 border-transparent rounded-lg shadow bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 hover:border-cyan-400"
                  >
                    <Link
                      className="text-zinc-700 dark:text-zinc-300"
                      href={`/ship/${newship}`}
                    >
                      <div className="flex items-center justify-start w-full py-1 sm:px-2">
                        <img
                          src={`/images/type/${eventdata.data.newship_type[idx]}.webp`}
                          alt="ship type"
                          className="w-[40px] sm:w-[50px]"
                        />
                        <div className="w-full px-1 truncate md:px-3 sm:rounded-r-lg bg-neutral-400 dark:bg-neutral-600">
                          <p>{eventdata.data.newship[idx]}</p>
                        </div>
                      </div>
                      {eventdata.data.newship_chibi[idx] != null && (
                        <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                          <img
                            src={eventdata.data.newship_chibi[idx]}
                            alt="ship chibi image"
                          />
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {eventdata.data.quest.length > 0 && (
        <div id="quest">
          <div className="p-3 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800">
            <div className="mb-3 text-center">
              <h1 className="text-xl font-bold text-zinc-700 dark:text-zinc-300 md:text-2xl">
                ????????????????????????????????????????????????
              </h1>
            </div>
            <div className="grid gap-3 mb-3 md:grid md:grid-cols-2">
              {eventdata.data.special_furniture != null && (
                <div className="flex p-3 border border-gray-300 rounded-lg flex-cols dark:border-gray-700">
                  <div className="px-3 w-fit">
                    <img
                      className="w-32"
                      src={eventdata.data.special_furniture}
                    ></img>
                  </div>
                  <div className="flex items-center justify-center flex-grow">
                    <div>
                      {eventdata.data.special_furniture_text && (
                        <h1 className="py-1 font-bold text-left text-zinc-700 dark:text-zinc-300 md:text-lg">
                          {eventdata.data.special_furniture_text}
                        </h1>
                      )}
                      {eventdata.data.special_furniture_text2 && (
                        <p className="py-1 text-left text-zinc-700 dark:text-zinc-300">
                          {eventdata.data.special_furniture_text2}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {eventdata.data.special_frame != null && (
                <div className="flex p-3 border border-gray-300 rounded-lg flex-cols dark:border-gray-700">
                  <div className="px-3 w-fit">
                    <img
                      className="w-32"
                      src={eventdata.data.special_frame}
                    ></img>
                  </div>
                  <div className="flex items-center justify-center flex-grow">
                    <div>
                      {eventdata.data.special_frame_text && (
                        <h1 className="py-1 font-bold text-left text-zinc-700 dark:text-zinc-300 md:text-lg">
                          {eventdata.data.special_frame_text}
                        </h1>
                      )}
                      {eventdata.data.special_frame_text2 && (
                        <p className="py-1 text-left text-zinc-700 dark:text-zinc-300">
                          {eventdata.data.special_frame_text2}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-5 border border-gray-300 rounded-lg dark:border-gray-700">
              {eventdata.data.quest.map((quest, idx) => {
                return (
                  <p
                    key={"quest" + idx}
                    className="py-1 text-left text-zinc-700 dark:text-zinc-300"
                  >
                    <div className="flex">
                      ???<p className="px-2">{quest}</p>
                    </div>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {(eventdata.data.event_note_beginer.length > 0 ||
        eventdata.data.event_note_midgame.length > 0 ||
        eventdata.data.event_note_sp.length > 0 ||
        eventdata.data.event_note_sum.length > 0) && (
        <div id="note">
          <div className="p-3 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800">
            <div className="mb-3 text-center">
              <h1 className="text-xl font-bold text-zinc-700 dark:text-zinc-300 md:text-2xl">
                {eventdata.data.event_type == null ? (
                  <>????????????????????????????????????????????????????????????????????????????????? Event ????????????</>
                ) : (
                  <>????????????????????????????????????????????????????????????????????????????????? Event</>
                )}
              </h1>

              {eventdata.data.event_name != null && (
                <h1 className="py-1 text-lg font-bold text-zinc-700 dark:text-zinc-300 md:text-xl">
                  {eventdata.data.event_name}
                </h1>
              )}

              {eventdata.data.event_time != null && (
                <h1 className="py-1 font-bold text-zinc-700 dark:text-zinc-300 md:text-lg">
                  {eventdata.data.event_time}
                </h1>
              )}
            </div>

            <div className="p-5 border border-gray-300 rounded-lg dark:border-gray-700">
              {eventdata.data.event_note_beginer.length > 0 && (
                <div className="mb-5">
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    ??? ???????????????????????????????????? (?????????????????????????????????)
                  </p>
                  {eventdata.data.event_note_beginer.map((note, idx) => {
                    return (
                      <p
                        key={"note_b" + idx}
                        className="py-1 text-zinc-700 dark:text-zinc-300"
                      >
                        <div className="flex pl-3">
                          -<p className="px-2">{note}</p>
                        </div>
                      </p>
                    );
                  })}
                </div>
              )}

              {eventdata.data.event_note_midgame.length > 0 && (
                <div className="mb-5">
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    ??? ???????????????????????????????????? (?????????????????????????????????-????????????)
                  </p>
                  {eventdata.data.event_note_midgame.map((note, idx) => {
                    return (
                      <p
                        key={"note_m" + idx}
                        className="py-1 text-zinc-700 dark:text-zinc-300"
                      >
                        <div className="flex pl-3">
                          -<p className="px-2">{note}</p>
                        </div>
                      </p>
                    );
                  })}
                </div>
              )}

              {eventdata.data.event_note_sp.length > 0 && (
                <div className="mb-5">
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    ??? ????????????SP
                  </p>
                  {eventdata.data.event_note_sp.map((note, idx) => {
                    return (
                      <p
                        key={"note_sp" + idx}
                        className="py-1 text-zinc-700 dark:text-zinc-300"
                      >
                        <div className="flex pl-3">
                          -<p className="px-2">{note}</p>
                        </div>
                      </p>
                    );
                  })}
                </div>
              )}

              {eventdata.data.event_note_sum.length > 0 && (
                <div>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    ??? ??????????????????????????????????????????
                  </p>
                  {eventdata.data.event_note_sum.map((note, idx) => {
                    return (
                      <p
                        key={"note_sum" + idx}
                        className="py-1 text-zinc-700 dark:text-zinc-300"
                      >
                        <div className="flex pl-3">
                          -<p className="px-2">{note}</p>
                        </div>
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {eventdata.data.event_guide != null && (
        <div id="guide">
          <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md cursor-zoom-in bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800">
            <img
              src={`https://drive.google.com/uc?export=view&id=${eventdata.data.event_guide}`}
              alt={`${eventdata.data.banner} picture`}
              ref={elementRef}
              onClick={() => {
                const element = document.getElementById("guide")!;
                document.body.classList.toggle("overflow-hidden");
                element.classList.toggle("overflow-scroll");
                element.classList.toggle("fixed");
                element.classList.toggle("inset-0");
                [
                  "overflow-hidden",
                  "rounded-lg",
                  "w-full",
                  "h-full",
                  "flex",
                  "justify-center",
                  "items-center",
                  "cursor-zoom-in",
                  "cursor-zoom-out",
                ].map((classes) =>
                  element.children[0].classList.toggle(classes),
                );
                const imgRatio =
                  elementRef.current!.offsetWidth /
                  elementRef.current!.offsetHeight;
                const winRatio = window.innerWidth / window.innerHeight;

                elementRef.current!.classList.toggle(
                  imgRatio > winRatio ? "w-full" : "h-full",
                );
                element.scrollIntoView();

                const chibi = document.getElementById("EventChibi")!;
                chibi.classList.toggle("hidden");

                const BTT = document.getElementById("BTT")!;
                BTT.classList.toggle("hidden");
              }}
            ></img>
          </div>
        </div>
      )}

      {eventdata.data.chibi != null && (
        <ChibiEvent chibi={eventdata.data.chibi} />
      )}
    </div>
  );
}
