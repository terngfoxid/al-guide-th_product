import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";
import Image from "next/image";

type FactionShip = {
  data: {
    error: string | null,
    data: [{ name: string | null, type: string, chibi: string, faction_sub: string | null }]
  }
};

export default function Faction_Ship_Card(faction: any) {
  const [shipdata, setShipdata] = useState<FactionShip>({
    data: { error: null, data: [{ name: null, type: "", chibi: "", faction_sub: null }] },
  });
  const [isDropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [webState, setWebState] = useState(0);
  const [activeType, setActiveType] = useState<string[]>([])

  const handleDropDown = () => {
    setDropdown(!isDropdown);
  };

  const callAPI = async () => {
    try {
      const res = await fetch("/api/faction/" + faction.faction);
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
  try {
    if (shipdata.data.error != null) {
      const card_style = {
        title_style:
          "text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center",
        shape:
          "w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
        position: "flex justify-center",
        body_style: "text-zinc-600 dark:text-zinc-400 text-xl text-center ",
      };

      if (webState == 429) return (
        <div className={card_style.position}>
          <div className={card_style.shape}>
            <br></br>
            <p className={card_style.title_style}>
              <p>Error 429 Too Many Requests</p>
            </p>
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
      );

      return (
        <div className={card_style.position}>
          <div className={card_style.shape}>
            <br></br>
            <p className={card_style.title_style}>
              <p>Error 404</p>
              <p>Ship in Faction Not Found</p>
            </p>
            <br></br>
            <div className={card_style.body_style}>
              <p>ไม่พบข้อมูลเรือ</p>
              <p>Database ยังไม่มีข้อมูล</p>
            </div>
            <br></br>
          </div>
        </div>
      );
    } else if (shipdata.data.data[0].name == null) {
      return (
        <div className="flex justify-center">
          <Loading />
        </div>
      );
    } else {
      const card_style = {
        title_style:
          "py-2 text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center",
        shape:
          "w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
        position: "flex justify-center",
        body_style: "text-zinc-200 dark:text-zinc-300 text-base text-center",
        button_style:
          "w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300 hover:scale-110 border-2 border-transparent hover:border-cyan-400",
        text_bg: "",
        dd_btn_style:
          "px-2 py-1 my-2 text-zinc-600 dark:text-zinc-300 inline-flex items-center rounded bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-300 text-center",
        dd_list_btn_style:
          "flex gap-1 text-zinc-600 dark:text-zinc-300 items-center rounded px-2 py-1 inline-flex w-full items-center bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-300 text-center",
        dd_list_bg_style:
          "z-10 rounded-lg w-[120px] px-2 py-2 bg-neutral-300 dark:bg-neutral-700 border border-gray-400 dark:border-gray-900",
        dd_list_position: "flex justify-center",
        input_style:
          "block px-2 py-1 my-2 w-full z-20 text-sm text-gray-800 bg-gray-50 rounded-l-lg border-l-gray-400 border-l-2 border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-600 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-300 dark:text-neutral-100 dark:focus:border-blue-500",
        input_button:
          "top-0 right-0 px-1 py-1 my-2 z-30 text-sm font-medium text-white bg-neutral-500 rounded-r-lg border border-gray-600 hover:bg-gray-400 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-neutral-700 dark:hover:bg-gray-600 dark:focus:ring-blue-800",
      };

      const ship_list = [];
      let count = 0;

      if (faction.faction == "Collab" || faction.faction == "META") {
        const faction_sub_list = new Set(shipdata.data.data.filter((ship) => { if (ship.faction_sub != null) return true }).map((ship) => {
          if (ship.faction_sub != null) return ship.faction_sub
        }))

        faction_sub_list.forEach((value1) => {
          ship_list.push(<p className="col-span-2 md:col-span-4 text-center text-xl text-zinc-700 dark:text-zinc-200 pt-3 md:pt-7 pb-2" key={value1}>{value1}</p>)

          for (count = 0; count < shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true }).length; count++) {
            const buffer = count;
            let hidden = "";
            if (search != null && search != "") {
              if (shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].name != null) {
                let name = "" + shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].name
                if (!name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                  hidden = " hidden"
                }
              }
            }

            if (activeType.length != 0) {
              const currentShipType = shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].type
              if(currentShipType != null){
                if(activeType.includes(currentShipType) == false) hidden = " hidden";
              }
            }

            ship_list.push(
              <div
                id={(shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].name + "_box").toLowerCase()}
                className={"flex justify-center" + hidden} key={(shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].name + "_box").toLowerCase()}
              >
                <Link
                  className={card_style.body_style + " " + card_style.button_style}
                  href={"/ship/" + shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].name}
                >
                  <div
                    id={(shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].name + "").toLowerCase()}
                    className={"rounded-lg"}
                  >
                    <div>
                      <div className="flex items-center justify-start w-full">
                        <Image
                          src={
                            "/images/type/" +
                            shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].type +
                            ".webp"
                          }
                          alt="type image"
                          width="49"
                          height="30"
                        />
                        <div className="inline-block w-full truncate rounded bg-neutral-500 dark:bg-neutral-600">
                          <p className="max-w-fit">
                            &nbsp;{shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].name}
                          </p>
                        </div>
                      </div>
                      <div>
                        {shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].chibi != null ? (
                          <>
                            <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                              <img
                                className="max-h-[150px]"
                                src={"" + shipdata.data.data.filter((ship) => { if (ship.faction_sub == value1) return true })[buffer].chibi}
                                alt="ship chibi image"
                              />
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>,
            );
          }
        })
      }

      else {
        for (count = 0; count < shipdata.data.data.length; count++) {
          const buffer = count;
          let hidden = "";

          if (search != null && search != "") {
            if (shipdata.data.data[buffer].name != null) {
              let name = "" + shipdata.data.data[buffer].name
              if (!name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                hidden = " hidden"
              }
            }
          }

          if (activeType.length != 0) {
            const currentShipType = shipdata.data.data[buffer].type
            if(currentShipType != null){
              if(activeType.includes(currentShipType) == false) hidden = " hidden";
            }
          }

          ship_list.push(
            <div
              id={(shipdata.data.data[buffer].name + "_box").toLowerCase()}
              className={"flex justify-center" + hidden}
              key={(shipdata.data.data[buffer].name + "_box").toLowerCase()}
            >
              <Link
                className={card_style.body_style + " " + card_style.button_style}
                href={"/ship/" + shipdata.data.data[buffer].name}
              >
                <div
                  id={(shipdata.data.data[buffer].name + "").toLowerCase()}
                  className={"rounded-lg"}
                >
                  <div>
                    <div className="flex items-center justify-start w-full">
                      <Image
                        src={
                          "/images/type/" +
                          shipdata.data.data[buffer].type +
                          ".webp"
                        }
                        alt="type image"
                        width="49"
                        height="30"
                      />
                      <div className="inline-block w-full truncate rounded bg-neutral-500 dark:bg-neutral-600">
                        <p className="max-w-fit">
                          &nbsp;{shipdata.data.data[buffer].name}
                        </p>
                      </div>
                    </div>
                    <div>
                      {shipdata.data.data[buffer].chibi != null ? (
                        <>
                          <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                            <img
                              className="max-h-[150px]"
                              src={"" + shipdata.data.data[buffer].chibi}
                              alt="ship chibi image"
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>,
          );
        }
      }

      const searchFunction = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        let move = false;

        for (count = 0; count < shipdata.data.data.length; count++) {
          const buffer = count;
          document
            .getElementById(
              (shipdata.data.data[buffer].name + "").toLowerCase(),
            )
            ?.classList.remove("border-2");
          document
            .getElementById(
              (shipdata.data.data[buffer].name + "").toLowerCase(),
            )
            ?.classList.remove("border-red-500");
          document
            .getElementById(
              (shipdata.data.data[buffer].name + "_box").toLowerCase(),
            )
            ?.classList.remove("hidden");
        }
        if ((search == null || search == "") && activeType.length == 0) return;

        for (count = 0; count < shipdata.data.data.length; count++) {
          const buffer = count;
          if (
            search.toLowerCase() ==
            (shipdata.data.data[buffer].name + "").toLowerCase() &&
            ((shipdata.data.data[buffer].type && activeType.includes(shipdata.data.data[buffer].type)) || activeType.length == 0)
          ) {
            let access = document.getElementById(
              (shipdata.data.data[buffer].name + "").toLowerCase(),
            );
            if (access != null && move == false) {
              access.scrollIntoView({ behavior: "smooth" });
              move = true;
            }
            document
              .getElementById(
                (shipdata.data.data[buffer].name + "").toLowerCase(),
              )
              ?.focus();
            document
              .getElementById(
                (shipdata.data.data[buffer].name + "").toLowerCase(),
              )
              ?.classList.add("border-2");
            document
              .getElementById(
                (shipdata.data.data[buffer].name + "").toLowerCase(),
              )
              ?.classList.add("border-red-500");
          }
        }

        if (document.body.textContent != null) {
          if (
            document.body.textContent
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            for (count = 0; count < shipdata.data.data.length; count++) {
              const buffer = count;

              if (
                document
                  .getElementById(
                    (shipdata.data.data[buffer].name + "").toLowerCase(),
                  )
                  ?.textContent?.toLowerCase()
                  .includes(search.toLowerCase()) &&
                ((shipdata.data.data[buffer].type && activeType.includes(shipdata.data.data[buffer].type)) || activeType.length == 0)
              ) {
                let access = document.getElementById(
                  (shipdata.data.data[buffer].name + "").toLowerCase(),
                );
                if (access != null && move == false) {
                  access.scrollIntoView({ behavior: "smooth" });
                  move = true;
                }
                document
                  .getElementById(
                    (shipdata.data.data[buffer].name + "").toLowerCase(),
                  )
                  ?.focus();
              } else {
                document
                  .getElementById(
                    (shipdata.data.data[buffer].name + "_box").toLowerCase(),
                  )
                  ?.classList.add("hidden");
              }
            }
          }
        }
        return;
      };

      const allTypeListSet: Set<string | undefined> = new Set(shipdata.data.data.filter((ship) => { if (ship.type != null) return true }).map((ship) => {
        if (ship.type != null) return ship.type
      }))
      const allTypeListArray: string[] = []
      allTypeListSet.forEach((type: string | undefined) => {
        if (type != null) allTypeListArray.push(type);
      })
      allTypeListArray.sort()

      if(activeType.length == allTypeListArray.length){
        setActiveType([])
      }

      console.log("active",activeType.length)
      return (
        <div>
          <div className={card_style.position}>
            <div className={card_style.shape}>
              <div className="flex justify-center">
                <h1 className={card_style.title_style}>ค้นหาเรือ</h1>
              </div>
              <div className={card_style.body_style}>
                <div className="flex justify-center">
                  <div className="relative mx-2">
                    <button
                      className={card_style.dd_btn_style}
                      onClick={handleDropDown}
                    >
                      {activeType.length == 0 ? <>All Type</>:<>{activeType.toString()}</>}
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-1"
                        fill="gray"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={
                        isDropdown
                          ? "block flex justify-center absolute top-full left-1/2 transform -translate-x-1/2 "
                          : "hidden"
                      }
                    >
                      <ul
                        className={card_style.dd_list_bg_style}
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {
                            <>
                              <button
                                type="button"
                                className={card_style.dd_list_btn_style}
                                onClick={(event) => { 
                                  setActiveType([])
                                }}
                              >
                                <input className="relative peer shrink-0 appearance-none w-4 h-4 border border-blue-500 rounded bg-white" type="checkbox" checked={activeType.length == 0}/>
                                <svg
                                  className="absolute w-4 h-4 hidden peer-checked:block mt-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#4169E1"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <p className="flex">All Type</p>
                              </button>
                            </>
                        }
                        {
                          allTypeListArray.map((type) => {
                            return (
                              <button key={type}
                                type="button"
                                className={card_style.dd_list_btn_style}
                                onClick={(event) => {
                                  if(activeType.indexOf(type) == -1){
                                    setActiveType([...activeType, type]);
                                  }
                                  else{
                                    setActiveType(activeType.filter((typeInList) => {return typeInList != type}))
                                  }
                                }}
                              >
                                <input className="relative peer shrink-0 appearance-none w-4 h-4 border border-blue-500 rounded bg-white" type="checkbox" id={type} name={type} checked={activeType.includes(type)}/>
                                <svg
                                  className="absolute w-4 h-4 hidden peer-checked:block mt-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#4169E1"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {type}
                              </button>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                  <form
                    id="searchform"
                    className="flex justify-center w-1/2"
                    onSubmit={searchFunction}
                  >
                    <div className="flex justify-center w-full">
                      <input
                        type="search"
                        id="searchtext"
                        className={card_style.input_style}
                        onChange={(event) => {
                          setSearch(event.currentTarget.value);
                        }}
                        placeholder="EX.Yorktown II -> york ,town ,YoRkTo"
                      ></input>
                      <button
                        id="searchbutton"
                        type="submit"
                        className={card_style.input_button}
                        aria-label="search"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className={card_style.position}>
            <div className={card_style.shape}>
              <div className="flex justify-center">
                <p className={card_style.title_style}>
                  เรือ {faction.faction}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                {ship_list}
              </div>
              <br></br>
            </div>
          </div>
        </div>
      );
    }
  } catch (err) {
    console.log(err);
    return <div></div>;
  }
}
