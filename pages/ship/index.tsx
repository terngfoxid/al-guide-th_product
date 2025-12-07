import Head from "next/head";
import { AiOutlineSearch } from "react-icons/ai";
import { TbFilterSearch } from "react-icons/tb";
import { useEffect, useState } from "react";
import { ShipV2 } from "models/shipv2";
import ShipInGrid from "@/components/ship/shipingrid";

export default function FourOhFour() {
  const [ships, setShips] = useState<ShipV2[]>([]);
  const [isDropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [webState, setWebState] = useState(0);
  const [activeType, setActiveType] = useState<string[]>([])

  const handleDropDown = () => {
    setDropdown(!isDropdown);
  };

  const callAPI = async () => {
    try {
      const res = await fetch("/api/v2/ship");
      setWebState(res.status)
      const loaddata: ShipV2[] = await res.json();
      setShips(loaddata);
      return;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  if (webState === 0 || ships.length === 0) {
    return <></>
  }

  const allTypeListSet: Set<string | undefined> = new Set(ships.filter((ship) => { if (ship.type.length === 1) return true }).map((ship) => {
    if (ship.type[0]) return ship.type[0]
  }))
  const allTypeReListSet: Set<string | undefined> = new Set(ships.filter((ship) => { if (ship.type.length === 2) return true }).map((ship) => {
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

  if (activeType.length === allTypeListArray.length) {
    setActiveType([])
  }

  return (
    <>
      <Head>
        <title>ค้าหาเรือ | Azur Lane Guide TH</title>
        <meta name="description" content={"ค้าหาเรือ"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] lg:max-w-[calc(100vw-30px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
        <div className="flex p-[0.5rem] items-center gap-[0.5rem]">
          <AiOutlineSearch size={"1.5rem"} color="#ffffff" />
          <h2 className="text-[1.7rem] text-left text-white">ค้นหาเรือ </h2>
        </div>
        <div className="ml-2">
          <input
            type="search"
            id="searchtext"
            className={"block px-2 py-1 my-2 w-[300px] max-w-[80%] text-sm text-gray-800 bg-gray-50 rounded-lg border-gray-400 border focus:ring-blue-500 focus:border-blue-500 "}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
            }}
            placeholder="EX.Yorktown II -> york ,town ,YoRkTo"
          ></input>
        </div>
        <div>
          <div className="flex p-[0.5rem] items-center gap-[0.5rem]">
            <TbFilterSearch size={"1.2rem"} color="#ffffff" />
            <p className="text-[1.5rem] text-left text-white">Filter</p>
          </div>
          <div>
            <div className="relative ml-2 min-w-[100px]">
              <button
                className={"px-2 py-1 text-zinc-700 inline-flex items-center rounded bg-[#ffffff] hover:bg-neutral-200 duration-300 text-center overflow-hidden max-w-[80%]"}
                onClick={handleDropDown}
              >
                <p className="w-full truncate">{activeType.length == 0 ? <>All Type</> : <>{activeType.toString()}</>}</p>
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
                        }}
                      >
                        <p className="flex">All Type</p>
                      </button>
                    </>
                  }
                  {
                    allTypeListArray.map((type) => {
                      return (
                        <button key={type}
                          type="button"
                          className={"flex gap-1  items-center rounded px-2 py-1 inline-flex w-full items-center hover:text-zinc-700 hover:bg-neutral-400 duration-300 text-center"
                            + (activeType.includes(type) ? " text-zinc-100 bg-neutral-500" : " text-zinc-600 bg-neutral-200")
                          }
                          onClick={() => {
                            if (activeType.indexOf(type) == -1) {
                              setActiveType([...activeType, type]);
                            }
                            else {
                              setActiveType(activeType.filter((typeInList) => { return typeInList != type }))
                            }
                          }}
                        >
                          <img src={"/images/type/" + type + ".webp"}></img>{type}
                        </button>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-1 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-[1rem] mt-[1.5rem]">
          {
            ships.filter((ship)=>{
              if(activeType.length === 0) return true;
              if(ship.type.length === 1 ) return activeType.includes(ship.type[0])
              if(ship.type.length === 2 ) return (activeType.includes(ship.type[0]) || activeType.includes(ship.type[1]))
              return false
            }).filter(ship=>{
              if(search !== null && search !== "") return ship.name.toLowerCase().includes(search.toLowerCase())
              return true
            }).map(ship =>{
              return <ShipInGrid key={ship.name} ship={ship}/>
            })
          }
        </div>
      </div>
    </>
  );
}
