import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";
import Image from 'next/image'

export default function Faction_Ship_Card(faction: any) {
    const [shipdata, setShipdata] = useState({ data: { error: null, data: [{ name: null, type: null, chibi: null }] } });
    const [type, setType] = useState("All Type")
    const [isDropdown, setDropdown] = useState(false);
    const [search, setSearch] = useState("")

    const handleDropDown = () => {
        setDropdown(!isDropdown);
    };

    const callAPI = async () => {
        try {
            const res = await fetch('/api/faction/' + faction.faction)
            //const res = await fetch('https://al-guide-th.vercel.app/api/faction/' + faction.faction);
            const loaddata = await res.json()
            setShipdata({ data: loaddata })
            return
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI()
    }, []);
    try {
        if (shipdata.data.error != null) {

            const card_style = (
                {
                    title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                    shape: "w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                    position: "flex justify-center",
                    body_style: "text-zinc-600 dark:text-zinc-400 text-xl text-center ",
                }
            );

            return (
                <div className={card_style.position}>
                    <div className={card_style.shape}>
                        <br></br>
                        <h1 className={card_style.title_style}>
                            <p>Error 404</p>
                            <p>Ship in Faction Not Found</p>
                        </h1>
                        <br></br>
                        <div className={card_style.body_style}>
                            <p>ไม่พบข้อมูลเรือ</p>
                            <p>Database ยังไม่มีข้อมูล</p>
                        </div>
                        <br></br>
                    </div>
                </div>
            )
        }

        else if (shipdata.data.data[0].name == null) {

            return (
                <div className="flex justify-center">
                    <Loading />
                </div>
            )

        }
        else {
            const card_style = (
                {
                    title_style: 'py-2 text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                    shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                    position: "flex justify-center",
                    body_style: "text-zinc-700 dark:text-zinc-300 text-base text-center",
                    button_style: "w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300",
                    text_bg: "",
                    dd_btn_style: "px-2 py-1 my-2 inline-flex items-center rounded bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-300 text-center",
                    dd_list_btn_style: "flex justify-center rounded px-2 py-1 inline-flex w-full items-center bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600 duration-300 text-center",
                    dd_list_bg_style: "z-10 rounded-lg w-28 px-2 py-2 bg-neutral-300 dark:bg-neutral-700 border border-gray-400 dark:border-gray-900",
                    dd_list_position: "flex justify-center",
                    input_style: "block px-2 py-1 my-2 w-full z-20 text-sm text-gray-800 bg-gray-50 rounded-l-lg border-l-gray-400 border-l-2 border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-600 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-300 dark:text-neutral-100 dark:focus:border-blue-500",
                    input_button: "top-0 right-0 px-1 py-1 my-2 z-30 text-sm font-medium text-white bg-neutral-500 rounded-r-lg border border-gray-600 hover:bg-gray-400 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-neutral-700 dark:hover:bg-gray-600 dark:focus:ring-blue-800",
                }
            );

            const ship_list = [];
            let count = 0;
            for (count = 0; count < shipdata.data.data.length; count++) {
                const buffer = count
                let hidden = ""

                if (type != "All Type") {
                    if (type == "AE") { if ((shipdata.data.data[buffer].type != "AE")) hidden = " hidden" }
                    else if (type == "AR") { if ((shipdata.data.data[buffer].type != "AR")) hidden = " hidden" }
                    else if (type == "BB") { if ((shipdata.data.data[buffer].type != "BB")) hidden = " hidden" }
                    else if (type == "BC") { if ((shipdata.data.data[buffer].type != "BC")) hidden = " hidden" }
                    else if (type == "BM") { if ((shipdata.data.data[buffer].type != "BM")) hidden = " hidden" }
                    else if (type == "CA") { if ((shipdata.data.data[buffer].type != "CA")) hidden = " hidden" }
                    else if (type == "CB") { if ((shipdata.data.data[buffer].type != "CB")) hidden = " hidden" }
                    else if (type == "CL") { if ((shipdata.data.data[buffer].type != "CL")) hidden = " hidden" }
                    else if (type == "CV") { if ((shipdata.data.data[buffer].type != "CV")) hidden = " hidden" }
                    else if (type == "CVL") { if ((shipdata.data.data[buffer].type != "CVL")) hidden = " hidden" }
                    else if (type == "DD") { if ((shipdata.data.data[buffer].type != "DD")) hidden = " hidden" }
                    else if (type == "IX") { if ((shipdata.data.data[buffer].type != "IX")) hidden = " hidden" }
                    else if (type == "SS") { if ((shipdata.data.data[buffer].type != "SS")) hidden = " hidden" }
                    else if (type == "SSV") { if ((shipdata.data.data[buffer].type != "SSV")) hidden = " hidden" }
                }

                ship_list.push(
                    <div id={(shipdata.data.data[buffer].name + "_box").toLowerCase()} className={"flex justify-center" + hidden}>
                        <Link className={card_style.body_style + " " + card_style.button_style} href={"/ship/" + shipdata.data.data[buffer].name}>
                            <div id={(shipdata.data.data[buffer].name + "").toLowerCase()} className={"rounded-lg"}>
                                <div>
                                    <div className="flex justify-start items-center w-full">
                                        <Image
                                            src={"/images/type/" + shipdata.data.data[buffer].type + ".webp"}
                                            alt='type image'
                                            width="49"
                                            height="30"
                                        />
                                        <div className="truncate inline-block rounded bg-neutral-400 dark:bg-neutral-600 w-full">
                                            <p className="max-w-fit">&nbsp;{shipdata.data.data[buffer].name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {shipdata.data.data[buffer].chibi != null ? <>
                                            <div className="w-full flex justify-center items-center aspect-square md:aspect-video">
                                                    <img
                                                        src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.data[buffer].chibi}
                                                        alt='ship chibi image'
                                                    />
                                            </div></> : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }

            const searchFunction = (event: { preventDefault: () => void; }) => {
                event.preventDefault();
                let move = false;

                for (count = 0; count < shipdata.data.data.length; count++) {
                    const buffer = count
                    document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase())?.classList.remove("border-2")
                    document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase())?.classList.remove("border-red-500")
                    document.getElementById((shipdata.data.data[buffer].name + "_box").toLowerCase())?.classList.remove("hidden")
                }
                if (((search == null) || (search == "")) && (type == "All Type")) return;

                for (count = 0; count < shipdata.data.data.length; count++) {
                    const buffer = count
                    if ((search.toLowerCase() == (shipdata.data.data[buffer].name + "").toLowerCase()) && (type == shipdata.data.data[buffer].type || type == "All Type")) {
                        var access = document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase());
                        if ((access != null) && (move == false)) {
                            access.scrollIntoView({ behavior: 'smooth' });
                            move = true;
                        }
                        document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase())?.focus();
                        document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase())?.classList.add("border-2")
                        document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase())?.classList.add("border-red-500")
                    }
                }

                if (document.body.textContent != null) {
                    if (document.body.textContent.toLowerCase().includes(search.toLowerCase())) {
                        for (count = 0; count < shipdata.data.data.length; count++) {
                            const buffer = count

                            if ((document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase())?.textContent?.toLowerCase().includes(search.toLowerCase())) && (type == shipdata.data.data[buffer].type || type == "All Type")) {
                                var access = document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase());
                                if ((access != null) && (move == false)) {
                                    access.scrollIntoView({ behavior: 'smooth' });
                                    move = true;
                                }
                                document.getElementById((shipdata.data.data[buffer].name + "").toLowerCase())?.focus();
                            }
                            else { document.getElementById((shipdata.data.data[buffer].name + "_box").toLowerCase())?.classList.add("hidden") }
                        }
                    }
                }
                return;
            };

            return (<div>
                <div className={card_style.position}>
                    <div className={card_style.shape}>
                        <div className="flex justify-center">
                            <h1 className={card_style.title_style}>ค้นหาเรือ</h1>
                        </div>
                        <div className={card_style.body_style}>
                            <div className="flex justify-center">
                                <div className="relative mx-2">
                                    <button className={card_style.dd_btn_style} onClick={handleDropDown}>{type}<svg aria-hidden="true" className="w-4 h-4 ml-1" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                                    <div className={isDropdown ? "block flex justify-center absolute top-full left-1/2 transform -translate-x-1/2 " : "hidden"}>
                                        <ul className={card_style.dd_list_bg_style} aria-labelledby="dropdownMenuButton1">
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("All Type"), setDropdown(false) }}>All Type</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("AE"), setDropdown(false) }}>AE</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("AR"), setDropdown(false) }}>AR</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("BB"), setDropdown(false) }}>BB</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("BC"), setDropdown(false) }}>BC</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("BM"), setDropdown(false) }}>BM</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("CA"), setDropdown(false) }}>CA</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("CB"), setDropdown(false) }}>CB</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("CL"), setDropdown(false) }}>CL</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("CV"), setDropdown(false) }}>CV</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("CVL"), setDropdown(false) }}>CVL</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("DD"), setDropdown(false) }}>DD</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("IX"), setDropdown(false) }}>IX</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("SS"), setDropdown(false) }}>SS</button></li>
                                            <li className={card_style.dd_list_position}><button type="button" className={card_style.dd_list_btn_style} onClick={event => { setType("SSV"), setDropdown(false) }}>SSV</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <form id="searchform" className="flex justify-center w-1/2" onSubmit={searchFunction}>
                                    <div className="flex justify-center w-full">
                                        <input type="search" id="searchtext" className={card_style.input_style} onChange={event => { setSearch(event.currentTarget.value) }} placeholder="EX.Yorktown II -> york ,town ,YoRkTo"></input>
                                        <button id="searchbutton" type="submit" className={card_style.input_button} aria-label="search">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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
                            <h1 className={card_style.title_style}>เรือ {faction.faction}</h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                            {ship_list}
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
            )
        }
    } catch (err) {
        console.log(err);
        return (
            <div>

            </div>
        )
    }
}