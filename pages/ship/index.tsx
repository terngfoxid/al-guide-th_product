import Head from "next/head";
import { AiOutlineSearch } from "react-icons/ai";
import { TbFilterSearch, TbTransformFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { ShipV2 } from "models/shipv2";
import ShipInGrid from "@/components/ship/shipingrid";
import { GiAtom, GiPirateFlag, GiSwitchWeapon } from "react-icons/gi";
import { FaFlag, FaShip } from "react-icons/fa";
import { useLoading } from "@/components/overlay/loading";
import { useDialog } from "@/components/dialog";
import { BiWorld } from "react-icons/bi";

export default function AllShipList() {
  const [ships, setShips] = useState<ShipV2[]>([]);
  const [isDropdown, setDropdown] = useState(false);
  const [webState, setWebState] = useState(0);

  const [allType, setAllType] = useState<string[]>([])
  const [allFaction, setAllFaction] = useState<string[]>([])
  const [allSubFaction, setAllSubFaction] = useState<string[]>([])

  //store search
  const [search, setSearch] = useState<string>()

  const [showRetrofitSkin, setShowRetrofitSkin] = useState<boolean>(false)
  const [showRetrofitOnly, setShowRetrofitOnly] = useState<boolean>(false)
  const [showAugmentOnly, setShowAugmentOnly] = useState<boolean>(false)
  const [showResearchOnly, setShowResearchOnly] = useState<boolean>(false)

  const [activeType, setActiveType] = useState<string[]>([])
  const [activeFaction, setActiveFaction] = useState<string[]>([])
  const [activeSubFaction, setActiveSubFaction] = useState<string[]>([])

  const { showLoading, hideLoading } = useLoading()
  const { openErrorDialog } = useDialog()

  const handleDropDown = () => {
    setDropdown(!isDropdown);
  };

  const callAPI = async () => {
    const storedSearch = localStorage.getItem("search");
    setSearch(storedSearch ?? undefined)

    const storedShowRetrofitSkin = localStorage.getItem("showRetrofitSkin");
    setShowRetrofitSkin(storedShowRetrofitSkin === "true")
    const storedShowRetrofitOnly = localStorage.getItem("showRetrofitOnly");
    setShowRetrofitOnly(storedShowRetrofitOnly === "true")
    const storedShowAugmentOnly = localStorage.getItem("showAugmentOnly");
    setShowAugmentOnly(storedShowAugmentOnly === "true")
    const storedShowResearchOnly = localStorage.getItem("showResearchOnly");
    setShowResearchOnly(storedShowResearchOnly === "true")

    const storedActiveType = localStorage.getItem("activeType");
    setActiveType(JSON.parse(storedActiveType ?? "[]"))
    const storedActiveFaction = localStorage.getItem("activeFaction");
    setActiveFaction(JSON.parse(storedActiveFaction ?? "[]"))
    const storedActiveSubFaction = localStorage.getItem("activeSubFaction");
    setActiveSubFaction(JSON.parse(storedActiveSubFaction ?? "[]"))

    try {
      showLoading()
      const res = await fetch("/api/v2/ship");
      setWebState(res.status)
      if (!res.ok) {
        openErrorDialog({
          title: "เกิดข้อผิดพลาด " + res.status,
          message: "โหลดข้อมูลไม่สำเร็จ",
          onClose: () => { }
        })
      }
      else {
        res.json().then((loaddata: ShipV2[]) => {
          setShips(loaddata);

          const allTypeListSet: Set<string | undefined> = new Set(loaddata.filter((ship) => { if (ship.type.length === 1) return true }).map((ship) => {
            if (ship.type[0]) return ship.type[0]
          }))
          const allTypeReListSet: Set<string | undefined> = new Set(loaddata.filter((ship) => { if (ship.type.length === 2) return true }).map((ship) => {
            if (ship.type[1] != null) return ship.type[1]
          }))

          const allTypeListArray: string[] = []
          allTypeListSet.forEach((type: string | undefined) => {
            if (type != null) allTypeListArray.push(type);
          })
          allTypeReListSet.forEach((type_re: string | undefined) => {
            if (type_re != null) {
              if (allTypeListArray.includes(type_re) == false) {
                allTypeListArray.push(type_re);
              }
            }
          })
          allTypeListArray.sort()
          setAllType(allTypeListArray)

          const allFactionSet: Set<string | undefined> = new Set(loaddata.map((ship) => { return ship.faction.full }))
          const allSubFactiontSet: Set<string | undefined> = new Set(loaddata.filter((ship) => { if (ship.faction.sub) return true }).map((ship) => {
            return ship.faction.sub
          }))

          const allFactionListArray: string[] = []
          const allSubFactionListArray: string[] = []

          allFactionSet.forEach((faction: string | undefined) => {
            if (faction != null) allFactionListArray.push(faction);
          })
          allSubFactiontSet.forEach((subfaction: string | undefined) => {
            if (subfaction != null) allSubFactionListArray.push(subfaction);
          })

          allFactionListArray.sort()
          allSubFactionListArray.sort
          setAllFaction(allFactionListArray)
          setAllSubFaction(allSubFactionListArray)
          hideLoading()
        })
      }
    } catch (err) {
      hideLoading()
      openErrorDialog({
        title: "เกิดข้อผิดพลาด",
        message: err as any,
        onClose: () => { }
      })
      console.error(err);
    }
  };

  useEffect(() => {
    callAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (webState === 0 || ships.length === 0 || allType.length === 0 || allFaction.length === 0 || allSubFaction.length === 0) {
    return <></>
  }

  if (activeType.length === allType.length) {
    setActiveType([])
    localStorage.setItem("activeType", JSON.stringify([]))
  }

  if (activeFaction.length === allFaction.length) {
    setActiveFaction([])
    localStorage.setItem("activeFaction", JSON.stringify([]))
  }

  if (activeSubFaction.length === allSubFaction.length) {
    setActiveSubFaction([])
    localStorage.setItem("activeSubFaction", JSON.stringify([]))
  }

  const handleTypeFilter = (ship: ShipV2) => {
    if (activeType.length === 0) return true;
    if (ship.type.length === 1) return activeType.includes(ship.type[0])
    if (ship.type.length === 2) return (activeType.includes(ship.type[0]) || activeType.includes(ship.type[1]))
    return false
  }

  const handleSearchFilter = (ship: ShipV2) => {
    if (search !== null && search !== undefined && search !== "") return ship.name.toLowerCase().includes(search.toLowerCase())
    return true
  }

  const handleRetrofitFilter = (ship: ShipV2) => {
    if (showRetrofitOnly) return (ship.skins.find((skin) => (skin.name === "Retrofit")))
    return true
  }

  const handleAugmentFilter = (ship: ShipV2) => {
    if (showAugmentOnly) return (ship.augment)
    return true
  }

  const handleReserarchFilter = (ship: ShipV2) => {
    if (showResearchOnly) return (ship.rarity.includes("PR") || ship.rarity.includes("DR"))
    return true
  }

  const handleFactionFilter = (ship: ShipV2) => {
    if (activeFaction.length !== 0) return activeFaction.includes(ship.faction.full ?? "")
    return true
  }

  const handleSubFactionFilter = (ship: ShipV2) => {
    if (activeSubFaction.length !== 0) return activeSubFaction.includes(ship.faction.sub ?? "")
    return true
  }

  return (
    <>
      <Head>
        <title>ค้าหาเรือ | Azur Lane Guide TH</title>
        <meta name="description" content={"ค้าหาเรือ"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="scroll-container" className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] max-w-[min(calc(100vw-30px),1890px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
        <div className="flex p-[0.5rem] items-center gap-[0.5rem]">
          <AiOutlineSearch size={"1.5rem"} color="#ffffff" />
          <h2 className="text-[1.7rem] text-left text-white">ค้นหาเรือ </h2>
        </div>
        <div className="flex ml-2 gap-[10px]">
          <input
            type="search"
            id="searchtext"
            className={"block px-2 py-1 my-2 w-[300px] max-w-[65%] text-sm text-gray-800 bg-gray-50 rounded-lg border-gray-400 border focus:ring-blue-500 focus:border-blue-500 "}
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              localStorage.setItem("search", event.currentTarget.value)
            }}
            placeholder="EX.Yorktown II -> york ,town ,YoRkTo"
          ></input>
          <button className={`my-2 flex items-center rounded-lg px-[0.5rem] py-[0.35rem] md:py-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[10px] md:text-[12px] lg:text-[14px] bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)] hover:bg-[#2E4A80] hover:bg-opacity-90 hover:shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]`}
            onClick={() => {
              setSearch("")
              localStorage.setItem("search", "")
              setActiveType([])
              localStorage.setItem("activeType", JSON.stringify([]))
              setActiveFaction([])
              localStorage.setItem("activeFaction", JSON.stringify([]))
              setActiveSubFaction([])
              localStorage.setItem("activeSubFaction", JSON.stringify([]))
              setShowRetrofitSkin(false)
              localStorage.setItem("showRetrofitSkin", "false")
              setShowRetrofitOnly(false)
              localStorage.setItem("showRetrofitOnly", "false")
              setShowAugmentOnly(false)
              localStorage.setItem("showAugmentOnly", "false")
              setShowResearchOnly(false)
              localStorage.setItem("showResearchOnly", "false")
            }}>
            Clear All
          </button>
        </div>
        <div>
          <div className="flex p-[0.5rem] items-center gap-[0.5rem]">
            <TbFilterSearch size={"1.2rem"} color="#ffffff" />
            <p className="text-[1.5rem] text-left text-white">Filter</p>
          </div>
          <div className="lg:flex gap-[2rem]">
            <div className="md:flex md:gap-[0.75rem] lg:gap[2rem]">
              <div className="ml-2  flex gap-[10px] items-center">
                <FaShip size={28} color="#ffffff" />
                <div className="relative min-w-[200px] max-w-[200px]">
                  <button
                    className={`p-[0.35rem] md:p-[0.75rem] text-[#ffffff] inline-flex items-center rounded-lg duration-300 text-center overflow-hidden w-full ${activeType.length ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
                    onClick={handleDropDown}
                  >
                    <p className="w-full truncate text-[10px] md:text-[12px] lg:text-[14px]">{activeType.length == 0 ? <>All Type</> : <>{activeType.toString()}</>}</p>
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
                        ? "block flex justify-center absolute z-20 top-full left-0 p-1 overflow-hidden"
                        : "hidden"
                    }
                  >
                    <ul
                      className={"rounded-lg w-[150px] px-2 py-2 bg-neutral-200 border border-gray-400 max-h-[50vh] overflow-y-scroll space-y-[5px]"}
                      aria-labelledby="dropdownMenuButton1"
                    >
                      {
                        <>
                          <button
                            type="button"
                            className={"flex gap-1  items-center rounded px-2 py-1 inline-flex w-full items-center hover:text-zinc-700 hover:bg-neutral-400 duration-300 text-center"
                              + (activeType.length === 0 ? " text-zinc-100 bg-neutral-500" : " text-zinc-600 bg-neutral-200")
                            }
                            onClick={() => {
                              setActiveType([])
                              localStorage.setItem("activeType", JSON.stringify([]))
                            }}
                          >
                            <p className="flex">All Type</p>
                          </button>
                        </>
                      }
                      {
                        allType.map((type) => {
                          return (
                            <button key={type}
                              type="button"
                              className={"flex gap-1  items-center rounded px-2 py-1 inline-flex w-full items-center hover:text-zinc-700 hover:bg-neutral-400 duration-300 text-center"
                                + (activeType.includes(type) ? " text-zinc-100 bg-neutral-500" : " text-zinc-600 bg-neutral-200")
                              }
                              onClick={() => {
                                if (activeType.indexOf(type) == -1) {
                                  setActiveType([...activeType, type]);
                                  localStorage.setItem("activeType", JSON.stringify([...activeType, type]))
                                }
                                else {
                                  setActiveType(activeType.filter((typeInList) => { return typeInList != type }))
                                  localStorage.setItem("activeType", JSON.stringify(activeType.filter((typeInList) => { return typeInList != type })))
                                }
                              }}
                            >
                              <img alt={"Ship Type"} src={"/images/type/" + type + ".webp"}></img>{type}
                            </button>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ml-2 mt-[1rem] md:mt-0 flex gap-[10px] items-center">
                <TbTransformFilled size={28} color="#ffffff" />
                <button className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[10px] md:text-[12px] lg:text-[14px] ${showRetrofitSkin ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
                  onClick={() => {
                    setShowRetrofitSkin(!showRetrofitSkin)
                    localStorage.setItem("showRetrofitSkin", (!showRetrofitSkin).toString())
                  }}>
                  {
                    showRetrofitSkin ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                      :
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                  }<span>แสดงร่าง Retrofit</span>
                </button>
                <button className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[10px] md:text-[12px] lg:text-[14px] ${showRetrofitOnly ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
                  onClick={() => {
                    setShowRetrofitOnly(!showRetrofitOnly)
                    localStorage.setItem("showRetrofitOnly", (!showRetrofitOnly).toString())
                  }}>
                  {
                    showRetrofitOnly ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                      :
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                  }<span>แสดงเฉพาะตัว Retrofit</span>
                </button>
              </div>
            </div>
            <div className="ml-2 mt-[1rem] lg:mt-0 flex gap-[10px] items-center">
              <GiSwitchWeapon size={28} color="#ffffff" />
              <button className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[10px] md:text-[12px] lg:text-[14px] ${showAugmentOnly ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
                onClick={() => {
                  setShowAugmentOnly(!showAugmentOnly)
                  localStorage.setItem("showAugmentOnly", (!showAugmentOnly).toString())
                }}>
                {
                  showAugmentOnly ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                    :
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                }<span>แสดงเฉพาะที่มี Augment</span>
              </button>
            </div>
            <div className="ml-2 mt-[1rem] lg:mt-0 flex gap-[10px] items-center">
              <GiAtom color="#FFFFFF" size={28}/>
              <button className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[10px] md:text-[12px] lg:text-[14px] ${showResearchOnly ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
                onClick={() => {
                  setShowResearchOnly(!showResearchOnly)
                  localStorage.setItem("showResearchOnly", (!showResearchOnly).toString())
                }}>
                {
                  showResearchOnly ? <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                    :
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                }<span>แสดงเฉพาะเรือ Research</span>
              </button>
            </div>
          </div>
          <div className="mx-2 mt-[1rem] flex items-center gap-[20px]">
            <FaFlag size={28} color="#ffffff" />
            <span className="text-[1.5rem] text-left text-white">Faction</span>
          </div>
          <div className="mx-2 mt-[0.5rem] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-[0.5rem] md:gap-[1rem]">
            <button className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[8px] md:text-[10px] lg:text-[12px] ${(activeFaction.length === 0) ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
              onClick={() => { setActiveFaction([]); localStorage.setItem("activeFaction", JSON.stringify([])) }}>
              <BiWorld size={20} color="#ffffff" />แสดงทั้งหมด
            </button>
            {
              allFaction.map((faction) => {
                return <button key={faction} className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.4rem] text-[#ffffff] text-[8px] md:text-[10px] lg:text-[12px] ${(activeFaction.includes(faction)) ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
                  onClick={() => {
                    if (activeFaction.indexOf(faction) == -1) {
                      setActiveFaction([...activeFaction, faction]);
                      localStorage.setItem("activeFaction", JSON.stringify([...activeFaction, faction]))
                    }
                    else {
                      setActiveFaction(activeFaction.filter((factionInList) => { return factionInList != faction }))
                      localStorage.setItem("activeFaction", JSON.stringify(activeFaction.filter((factionInList) => { return factionInList != faction })))
                    }
                  }}>
                  <img alt="Ship Faction" src={"/images/faction/" + faction + ".webp"} className="w-[20px]"></img>
                  {faction}
                </button>
              })
            }
          </div>
          <div className="mx-2 mt-[1rem] flex items-center gap-[20px]">
            <GiPirateFlag size={28} color="#ffffff" />
            <span className="text-[1.5rem] text-left text-white">Faction ย่อย</span>
          </div>
          <div className="mx-2 mt-[0.5rem] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[0.5rem] md:gap-[1rem]">
            <button className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[8px] md:text-[10px] lg:text-[12px] ${(activeSubFaction.length === 0) ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
              onClick={() => { setActiveSubFaction([]); localStorage.setItem("activeSubFaction", JSON.stringify([])) }}>
              แสดงทั้งหมด
            </button>
            {
              allSubFaction.map((subfaction) => {
                return <button key={subfaction} className={`flex items-center rounded-lg p-[0.35rem] md:p-[0.75rem] gap-[0.5rem] text-[#ffffff] text-[8px] md:text-[10px] lg:text-[12px] ${(activeSubFaction.includes(subfaction)) ? "bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]" : "bg-[#173859] bg-opacity-90 shadow-[0_0_5px_2px_rgba(150,150,150,0.85)]"}`}
                  onClick={() => {
                    if (activeSubFaction.indexOf(subfaction) == -1) {
                      setActiveSubFaction([...activeSubFaction, subfaction]);
                      localStorage.setItem("activeSubFaction", JSON.stringify([...activeSubFaction, subfaction]))
                    }
                    else {
                      setActiveSubFaction(activeSubFaction.filter((subfactionInList) => { return subfactionInList != subfaction }))
                      localStorage.setItem("activeSubFaction", JSON.stringify(activeSubFaction.filter((subfactionInList) => { return subfactionInList != subfaction })))
                    }
                  }}>
                  {subfaction}
                </button>
              })
            }
          </div>
        </div>
        <div className="px-1 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-[0.5rem] md:gap-[1rem] mt-[1.5rem]">
          {
            ships.map(ship => {
              return <div key={ship.name} className={(handleTypeFilter(ship) && handleSearchFilter(ship) && handleRetrofitFilter(ship) && handleAugmentFilter(ship) && handleReserarchFilter(ship) && handleFactionFilter(ship) && handleSubFactionFilter(ship)) ? "w-full h-full duration-500 animate-slide-in-bottom" : "hidden"}>
                <ShipInGrid ship={ship} retrofit={showRetrofitSkin} />
              </div>
            })
          }
        </div>
      </div>
    </>
  );
}
