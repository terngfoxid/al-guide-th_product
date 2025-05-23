import { useEffect, useRef, useState } from "react";
import Loading from "./overlay/Loading";
import Chibi from "./overlay/Chibi";
import "animate.css";
import Link from "next/link";
import Cut_String from "./functional/Cut_String";
import Carroussel from "./Carroussel";
import { uuid } from "uuidv4";

export default function Ship_Card(ship: { ship: string }) {
  let elementRef = useRef<HTMLImageElement>(null);

  const [shipdata, setShipdata] = useState({
    data: {
      name: null,

      skill: null,
      skill_2: null,
      skill_3: null,
      skill_4: null,

      faction: null,
      type: null,
      type_re: null,
      error: null,

      re: null,
      re_2: null,
      re_3: null,
      re_4: null,

      faction_short: null,

      fatesim: null,
      fatesim_2: null,
      fatesim_3: null,
      fatesim_4: null,

      chibi: null,
      gear: null,
      history: null,
      review: null,

      aoa: null,
      aoa_note: null,

      guide_skill_1: null,
      guide_skill_1_note: null,

      guide_skill_2: null,
      guide_skill_2_note: null,

      guide_skill_3: null,
      guide_skill_3_note: null,

      guide_skill_4: null,
      guide_skill_4_note: null,

      guide_skill_5: null,
      guide_skill_5_note: null,

      guide_skill_6: null,
      guide_skill_6_note: null,

      ship_note: null,

      skins: [
        {
          name: "",
          image: "",
          price: "",
          released: ""
        }
      ]
    },
  });
  const [webState, setWebState] = useState(0);

  const callAPI = async () => {
    try {
      const res = await fetch("/api/ship/" + ship.ship.toLowerCase());
      setWebState(res.status)
      const loaddata = await res.json();
      setShipdata({ data: loaddata });
      return;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);



  if (shipdata.data.name == null && shipdata.data.error == null) {
    return (
      <><br></br>
        <div className="flex justify-center">
          <Loading />
        </div>
      </>
    );
  } else if (webState == 429) {
    const buffername = ship.ship.replaceAll("_", " ").toLowerCase();
    localStorage.removeItem(buffername);

    const card_style = {
      title_style:
        "text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center",
      shape:
        "w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
      position: "flex justify-center",
      body_style: "text-zinc-600 dark:text-zinc-400 text-xl text-center",
    };

    return (
      <>
        <br></br>
        <div className={card_style.position}>
          <div className={card_style.shape}>
            <br></br>
            <p className={card_style.title_style}>Error 429 Too Many Requests</p>
            <br></br>
            <div className={card_style.body_style}>
              <div className="mx-auto flex gap-1 justify-center items-center bg-neutral-200 dark:bg-neutral-800">
                <svg className="w-8 h-8 mr-3 text-[#FF3845] fill-[#FF3845]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                <p className="text-[#FF3845]">ไม่สามารถโหลดข้อมูลได้</p>
              </div>
              <p className="mt-2">กรุณาลองใหม่อีกครั้งหลังเวลา 14:00 น.</p>
            </div>
            <br></br>
          </div>
        </div>
      </>
    );
  }
  else if (shipdata.data.error != null) {
    const buffername = ship.ship.replaceAll("_", " ").toLowerCase();
    localStorage.removeItem(buffername);

    const card_style = {
      title_style:
        "text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center",
      shape:
        "w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
      position: "flex justify-center",
      body_style: "text-zinc-600 dark:text-zinc-400 text-xl text-center",
    };

    return (
      <>
        <br></br>
        <div className={card_style.position}>
          <div className={card_style.shape}>
            <br></br>
            <p className={card_style.title_style}>Error 404 Ship Not Found</p>
            <br></br>
            <div className={card_style.body_style}>
              <p>ไม่พบข้อมูลเรือ</p>
              <p>โปรดตรวจสอบชื่อของเรือในลิงค์</p>
            </div>
            <br></br>
          </div>
        </div>
      </>
    );
  } else {
    const card_style = {
      title_style:
        "text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center",
      shape:
        "w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
      position: "flex justify-center",
      body_style: "text-zinc-600 dark:text-zinc-400 text-2xl text-center",
      mrt_shape:
        "hover:scale-110 overflow-hidden group relative w-11/12 rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-4 border-t-1 border-l-1 border-r-1 duration-300 hover:z-10",
      image_style: "w-full rounded-lg shadow-xl",
      mrt_image_src: "/images/MRT 600x300.webp",
      yt_image_src: "/images/review 600x300.webp",
      note_text:
        "text-zinc-600 dark:text-zinc-400 text-base md:text-lg xl:text-xl 2xl:text-2xl w-11/12 md:w-3/4 border border-gray-500/10 p-2 rounded text-left",
    };

    let cards: { key: string; content: JSX.Element; }[] = [
    ];
    console.log(shipdata.data.skins);
    if (shipdata.data.skins != null) {
      shipdata.data.skins.forEach(
        (skin) => {
          cards.push(
            {
              key: uuid(),
              content: <div className="relative max-h-[200px] md:max-h-[360px] xl:max-h-[500px] w-[220px] sm:w-[330px] md:w-[400px] lg:w-[500px] overflow-visible flex items-center justify-center">
                <img
                  src={skin.image}
                  key={skin.image}
                  alt={skin.image}
                  className="h-[220px] sm:h-[350px] md:h-[400px] lg:h-[600px] object-center aspect-square flex-shrink-0"
                />

                <div className="max-w-none w-max px-[5px] lg:px-[20px] py-[3px] lg:py-[12px] absolute left-1/2 transform -translate-x-1/2 bottom-[5px] lg:bottom-[20px] rounded rounded-md border border-gray-600 shadow-lg bg-neutral-800 text-neutral-200 dark:text-gray-300 text-xs md:text-lg lg:text-xl">
                  <p className="text-center">{skin.name}</p>
                  <div className="flex justify-between gap-x-[5px] lg:gap-x-[30px] ">
                    {skin.price && (
                      <div className="flex gap-x-[5px] pt-[2px] md:pt-[10px]">
                        <img
                          src="/images/Ruby.png"
                          key="ruby"
                          alt="ruby"
                          className=""
                        />
                        <p>{skin.price}</p>
                      </div>
                    )}
                    {skin.released && (
                      <p className="pt-[2px] md:pt-[10px]">{skin.released}</p>
                    )}
                  </div>
                </div>
              </div>
            },
          )
        }
      )
      if (shipdata.data.skins.length < 3 && shipdata.data.skins.length > 1) {

        shipdata.data.skins.forEach(
          (skin) => {
            cards.push(
              {
                key: uuid(),
                content: <div className="relative max-h-[200px] md:max-h-[360px] xl:max-h-[500px] w-[220px] sm:w-[330px] md:w-[400px] lg:w-[500px] overflow-visible flex items-center justify-center">
                  <img
                    src={skin.image}
                    key={skin.image}
                    alt={skin.image}
                    className="h-[220px] sm:h-[350px] md:h-[400px] lg:h-[600px] object-center aspect-square flex-shrink-0"
                  />

                  <div className="max-w-none w-max px-[5px] lg:px-[20px] py-[3px] lg:py-[12px] absolute left-1/2 transform -translate-x-1/2 bottom-[5px] lg:bottom-[20px] rounded rounded-md border border-gray-600 shadow-lg bg-neutral-800 text-neutral-200 dark:text-gray-300 text-xs md:text-lg lg:text-xl">
                    <p className="text-center">{skin.name}</p>
                    <div className="flex justify-between gap-x-[5px] lg:gap-x-[30px]">
                      {skin.price && (
                        <>
                          <div className="flex gap-x-[5px] pt-[2px] md:pt-[10px]">
                            <img
                              src="/images/Ruby.png"
                              key="ruby"
                              alt="ruby"
                              className=""
                            />
                            <p>{skin.price}</p>
                          </div>
                        </>
                      )}
                      {skin.released && (
                        <p className="pt-[2px] md:pt-[10px]">{skin.released}</p>
                      )}
                    </div>
                  </div>
                </div>
              },
            )
          }
        )
      }
    }

    return (
      <div>
        <div id="shipdata">
          <br></br>
          <div className={card_style.position}>
            <div className={card_style.shape}>
              <br></br>
              <h1 className={card_style.title_style}>
                {shipdata.data.faction_short != null ? (
                  <>{shipdata.data.faction_short + " "}</>
                ) : (
                  <></>
                )}
                {shipdata.data.name}
              </h1>
              <br></br>
              <div className={card_style.body_style}>
                <p>Faction: {shipdata.data.faction}</p>
                <p>Type: {shipdata.data.type} {shipdata.data.type_re != null ? (" , "+shipdata.data.type_re+"(Retrofit)"):""}</p>
                <div className="flex justify-center">
                  <div className="w-11/12 md:w-11/12">
                    {shipdata.data.skill != null ? (
                      <>
                        <div id="skill">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.skill
                            }
                            alt={shipdata.data.name + " picture"}
                            onClick={() => {
                              const element = document.getElementById("skill")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const shipData2 = document.getElementById("shipdata2")!;
                              shipData2 != null && (shipData2.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.skill_2 != null ? (
                      <>
                        <p className="pt-[20px]">หน้าที่ 2</p>
                        <div id="skill_2">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.skill_2
                            }
                            alt={shipdata.data.name + " picture_2"}
                            onClick={() => {
                              const element = document.getElementById("skill_2")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const shipData2 = document.getElementById("shipdata2")!;
                              shipData2 != null && (shipData2.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.skill_3 != null ? (
                      <>
                        <p className="pt-[20px]">หน้าที่ 3</p>
                        <div id="skill_3">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.skill_3
                            }
                            alt={shipdata.data.name + " picture_3"}
                            onClick={() => {
                              const element = document.getElementById("skill_3")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const shipData2 = document.getElementById("shipdata2")!;
                              shipData2 != null && (shipData2.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.skill_4 != null ? (
                      <>
                        <p className="pt-[20px]">หน้าที่ 4</p>
                        <div id="skill_4">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.skill_4
                            }
                            alt={shipdata.data.name + " picture_4"}
                            onClick={() => {
                              const element = document.getElementById("skill_4")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const shipData2 = document.getElementById("shipdata2")!;
                              shipData2 != null && (shipData2.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.re != null ? (
                      <>
                        <p className="pt-[20px]">Retrofit</p>
                        <div id="re">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.re
                            }
                            alt={shipdata.data.name + " picture"}
                            onClick={() => {
                              const element = document.getElementById("re")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.re_2 != null ? (
                      <>
                        <p className="pt-[20px]">Retrofit หน้าที่ 2</p>
                        <div id="re_2">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.re_2
                            }
                            alt={shipdata.data.name + " picture_2"}
                            onClick={() => {
                              const element = document.getElementById("re_2")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.re_3 != null ? (
                      <>
                        <p className="pt-[20px]">Retrofit หน้าที่ 3</p>
                        <div id="re_3">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.re_3
                            }
                            alt={shipdata.data.name + " picture_3"}
                            onClick={() => {
                              const element = document.getElementById("re_3")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.re_4 != null ? (
                      <>
                        <p className="pt-[20px]">Retrofit หน้าที่ 4</p>
                        <div id="re_4">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.re_4
                            }
                            alt={shipdata.data.name + " picture_4"}
                            onClick={() => {
                              const element = document.getElementById("re_4")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.fatesim != null ? (
                      <>
                        <p className="pt-[20px]">Fate Simulation</p>
                        <div id="fatesim">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.fatesim
                            }
                            alt={shipdata.data.name + " picture"}
                            onClick={() => {
                              const element = document.getElementById("fatesim")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.fatesim_2 != null ? (
                      <>
                        <p className="pt-[20px]">Fate Simulation หน้าที่ 2</p>
                        <div id="fatesim_2">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.fatesim_2
                            }
                            alt={shipdata.data.name + " picture_2"}
                            onClick={() => {
                              const element = document.getElementById("fatesim_2")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.fatesim_3 != null ? (
                      <>
                        <p className="pt-[20px]">Fate Simulation หน้าที่ 3</p>
                        <div id="fatesim_3">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.fatesim_3
                            }
                            alt={shipdata.data.name + " picture_3"}
                            onClick={() => {
                              const element = document.getElementById("fatesim_3")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.fatesim_4 != null ? (
                      <>
                        <p className="pt-[20px]">Fate Simulation หน้าที่ 4</p>
                        <div id="fatesim_4">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.fatesim_4
                            }
                            alt={shipdata.data.name + " picture_4"}
                            onClick={() => {
                              const element = document.getElementById("fatesim_4")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>

          {
            shipdata.data.skins != null && shipdata.data.skins.length > 0 ?
              <>
                <br></br>
                <div className="flex justify-center">
                  <div
                    id="ships-slide"
                    className="w-11/12 md:w-5/6 2xl:w-full overflow-hidden border border-gray-300 dark:border-gray-700  rounded-lg shadow-md bg-[url('/images/Skin_BG.png')] bg-cover bg-center aspect-[21/14] lg:aspect-[21/10]"
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
                </div>
              </>
              : <></>
          }

          {shipdata.data.aoa != null ||
            shipdata.data.ship_note != null ||
            shipdata.data.guide_skill_1 != null ||
            shipdata.data.guide_skill_2 != null ||
            shipdata.data.guide_skill_3 != null ? (
            <>
              <br></br>
              <div className={card_style.position}>
                <div className={card_style.shape}>
                  <div className={card_style.body_style + " z-10"}>
                    {shipdata.data.aoa != null ? (
                      <>
                        <br></br>
                        <p className="pb-4">All Out Assault</p>
                        <div className="flex justify-center pb-2">
                          <div className="flex justify-center w-11/12">
                            <img
                              className=""
                              src={shipdata.data.aoa}
                              alt={shipdata.data.name + " aoa picture"}
                            ></img>
                          </div>
                        </div>
                        {shipdata.data.aoa_note != null ? (
                          <>
                            <div className="flex justify-center">
                              <p className={card_style.note_text}>
                                <Cut_String text={shipdata.data.aoa_note} />
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                    {
                      shipdata.data.guide_skill_1 != null ||
                        shipdata.data.guide_skill_2 != null ||
                        shipdata.data.guide_skill_3 != null ||
                        shipdata.data.guide_skill_4 != null ||
                        shipdata.data.guide_skill_5 != null ||
                        shipdata.data.guide_skill_6 != null ?
                        <>
                          <br></br>
                          <p className="pb-4">Note Skill</p>
                        </>
                        :
                        <></>
                    }

                    {shipdata.data.guide_skill_1 != null ? (
                      <>
                        <div className="flex justify-center pb-2">
                          <div className="flex justify-center w-11/12">
                            <img
                              className=""
                              src={shipdata.data.guide_skill_1}
                              alt={shipdata.data.name + " skill 1 Guide"}
                            ></img>
                          </div>
                        </div>
                        {shipdata.data.guide_skill_1_note != null ? (
                          <>
                            <div className="flex justify-center">
                              <p className={card_style.note_text}>
                                <Cut_String
                                  text={shipdata.data.guide_skill_1_note}
                                />
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <br></br>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.guide_skill_2 != null ? (
                      <>
                        <div className="flex justify-center pb-2">
                          <div className="flex justify-center w-11/12">
                            <img
                              className=""
                              src={shipdata.data.guide_skill_2}
                              alt={shipdata.data.name + " skill 2 Guide"}
                            ></img>
                          </div>
                        </div>
                        {shipdata.data.guide_skill_2_note != null ? (
                          <>
                            <div className="flex justify-center">
                              <p className={card_style.note_text}>
                                <Cut_String
                                  text={shipdata.data.guide_skill_2_note}
                                />
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <br></br>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.guide_skill_3 != null ? (
                      <>
                        <div className="flex justify-center pb-2">
                          <div className="flex justify-center w-11/12">
                            <img
                              className=""
                              src={shipdata.data.guide_skill_3}
                              alt={shipdata.data.name + " skill 3 Guide"}
                            ></img>
                          </div>
                        </div>
                        {shipdata.data.guide_skill_3_note != null ? (
                          <>
                            <div className="flex justify-center">
                              <p className={card_style.note_text}>
                                <Cut_String
                                  text={shipdata.data.guide_skill_3_note}
                                />
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <br></br>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.guide_skill_4 != null ? (
                      <>
                        <div className="flex justify-center pb-2">
                          <div className="flex justify-center w-11/12">
                            <img
                              className=""
                              src={shipdata.data.guide_skill_4}
                              alt={shipdata.data.name + " skill 4 Guide"}
                            ></img>
                          </div>
                        </div>
                        {shipdata.data.guide_skill_4_note != null ? (
                          <>
                            <div className="flex justify-center">
                              <p className={card_style.note_text}>
                                <Cut_String
                                  text={shipdata.data.guide_skill_4_note}
                                />
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <br></br>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.guide_skill_5 != null ? (
                      <>
                        <div className="flex justify-center pb-2">
                          <div className="flex justify-center w-11/12">
                            <img
                              className=""
                              src={shipdata.data.guide_skill_5}
                              alt={shipdata.data.name + " skill 5 Guide"}
                            ></img>
                          </div>
                        </div>
                        {shipdata.data.guide_skill_5_note != null ? (
                          <>
                            <div className="flex justify-center">
                              <p className={card_style.note_text}>
                                <Cut_String
                                  text={shipdata.data.guide_skill_5_note}
                                />
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <br></br>
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.guide_skill_6 != null ? (
                      <>
                        <div className="flex justify-center pb-2">
                          <div className="flex justify-center w-11/12">
                            <img
                              className=""
                              src={shipdata.data.guide_skill_6}
                              alt={shipdata.data.name + " skill 6 Guide"}
                            ></img>
                          </div>
                        </div>
                        {shipdata.data.guide_skill_6_note != null ? (
                          <>
                            <div className="flex justify-center">
                              <p className={card_style.note_text}>
                                <Cut_String
                                  text={shipdata.data.guide_skill_6_note}
                                />
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}

                    {shipdata.data.ship_note != null ? (
                      <>
                        <br></br>
                        <p className="pb-4">Note</p>
                        <div className="flex justify-center">
                          <p className={card_style.note_text}>
                            <Cut_String text={shipdata.data.ship_note} />
                          </p>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <br></br>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        {shipdata.data.gear != null ? (
          <>
            <div id="shipdata2">
              <br></br>
              <div className={card_style.position}>
                <div className={card_style.shape + " relative"}>
                  <br></br>
                  <div className={card_style.body_style + " z-10"}>
                    <p className="pb-4">อุปกรณ์สวมใส่แนะนำ</p>
                    <div className="flex justify-center">
                      <div className="w-11/12 md:w-11/12">
                        <div id="gear">
                          <img
                            className="object-scale-down cursor-zoom-in"
                            src={
                              "" +
                              shipdata.data.gear
                            }
                            alt={shipdata.data.name + " picture"}
                            onClick={() => {
                              const element = document.getElementById("gear")!;
                              element.classList.toggle("overflow-scroll");
                              element.classList.toggle("fixed");
                              element.classList.toggle("inset-0");
                              element.classList.toggle("cursor-zoom-in");
                              element.classList.toggle("cursor-zoom-out");
                              element.classList.toggle("bg-black");

                              element.scrollIntoView();

                              const chibi = document.getElementById("shipchibi")!;
                              chibi.classList.toggle("hidden");

                              const BTT = document.getElementById("BTT")!;
                              BTT.classList.toggle("hidden");

                              const shipData3 = document.getElementById("shipdata3")!;
                              shipData3 != null && (shipData3.classList.toggle("hidden"));

                              const sdGear = document.getElementById("SDgear")!;
                              sdGear != null && (sdGear.classList.toggle("hidden"));

                              const shipsslide = document.getElementById("ships-slide")!;
                              shipsslide != null && (shipsslide.classList.toggle("hidden"));
                            }}
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div id="SDgear" className="absolute right-0 z-0 w-1/6 h-10 top-2 md:w-max">
                    <div className="w-[60px] md:w-[100px] animate__animated animate__fadeInRight animate__delay-1s animate__slow">
                      {shipdata.data.type == "CV" &&
                        shipdata.data.faction == "Sakura Empire" ? (
                        <>
                          <img
                            className=""
                            src="/images/gear/Tenrai_SD.webp"
                            alt={"aircraft picture"}
                          ></img>
                        </>
                      ) : shipdata.data.type == "CV" &&
                        shipdata.data.faction == "Eagle Union" ? (
                        <>
                          <img
                            className=""
                            src="/images/gear/AD-1_SD.webp"
                            alt={"aircraft picture"}
                          ></img>
                        </>
                      ) : shipdata.data.type == "CV" &&
                        shipdata.data.faction == "Royal Navy" ? (
                        <>
                          <img
                            className=""
                            src="/images/gear/Firefly_1771_SD.webp"
                            alt={"aircraft picture"}
                          ></img>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {shipdata.data.history != null || shipdata.data.review != null ? (
          <>
            <div id="shipdata3">
              <br className="hidden md:block"></br>
              <div className="flex justify-center">
                <div className="w-full md:w-5/6 2xl:w-full">
                  <div className="md:grid md:grid-cols-2">
                    {shipdata.data.review != null ? (
                      <br className="block md:hidden"></br>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-center md:justify-start">
                      {shipdata.data.review != null ? (
                        <button className={card_style.mrt_shape}>
                          <Link
                            href={shipdata.data.review}
                            className="w-full"
                            legacyBehavior
                          >
                            <a target="_blank">
                              <img
                                src={card_style.yt_image_src}
                                className={card_style.image_style}
                                alt="Youtube button image"
                              />
                            </a>
                          </Link>
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                    {shipdata.data.history != null ? (
                      <br className="block md:hidden"></br>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-center md:justify-end">
                      {shipdata.data.history != null ? (
                        <button className={card_style.mrt_shape}>
                          <Link
                            href={shipdata.data.history}
                            className="w-full"
                            legacyBehavior
                          >
                            <a target="_blank">
                              <img
                                src={card_style.mrt_image_src}
                                className={card_style.image_style}
                                alt="Mr.T button image"
                              />
                            </a>
                          </Link>
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {shipdata.data.chibi != null ? (
          <>
            <Chibi chibi={shipdata.data.chibi} />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
