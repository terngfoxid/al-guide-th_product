import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";
import Chibi from "./overlay/Chibi";
import 'animate.css';
import Link from "next/link";



export default function Ship_Card(ship: any) {
    const [shipdata, setShipdata] = useState({
        data: {
            name: null,
            skill: null,
            faction: null,
            type: null,
            error: null,
            re: null,
            faction_short: null,
            fatesim: null,
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

            ship_note: null,
        }
    });

    const callAPI = async () => {
        try {
            const res = await fetch('/api/ship/' + ship.ship.toLowerCase());
            //const res = await fetch('https://al-guide-th.vercel.app/api/ship/' + ship.ship.toLowerCase());

            const loaddata = await res.json()
            setShipdata({ data: loaddata })
            localStorage.setItem("" + ship.ship.replaceAll("_", " ").toLowerCase(), JSON.stringify(loaddata))
            return
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        const buffername = ship.ship.replaceAll("_", " ").toLowerCase();

        const localdata = localStorage.getItem("" + buffername)
        if ((localdata != null) && (JSON.parse(localdata).name.toLowerCase() == buffername)) {

            setShipdata({ data: JSON.parse(localdata) })
        }
        else {
            callAPI()
        }
    }, []);

    if (shipdata.data.name == null && shipdata.data.error == null) {
        return (
            <div className="flex justify-center">
                <Loading />
            </div>
        )
    }
    else if (shipdata.data.error != null) {
        const buffername = ship.ship.replaceAll("_", " ").toLowerCase()
        localStorage.removeItem(buffername)

        const card_style = (
            {
                title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                shape: "w-11/12 md:w-1/2 2xl:w-1/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                position: "flex justify-center",
                body_style: "text-zinc-600 dark:text-zinc-400 text-xl text-center",
            }
        );


        return (
            <div className={card_style.position}>
                <div className={card_style.shape}>
                    <br></br>
                    <h1 className={card_style.title_style}>Error 404 Ship Not Found</h1>
                    <br></br>
                    <div className={card_style.body_style}>
                        <p>ไม่พบข้อมูลเรือ</p>
                        <p>โปรดตรวจสอบชื่อของเรือในลิงค์</p>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
    else {
        const card_style = (
            {
                title_style: 'text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                position: "flex justify-center",
                body_style: "text-zinc-600 dark:text-zinc-400 text-2xl text-center",
                mrt_shape: "hover:scale-110 overflow-hidden group relative w-11/12 rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-4 border-t-1 border-l-1 border-r-1 duration-300",
                image_style: "w-full rounded-lg shadow-xl",
                mrt_image_src: "/images/MRT 600x300.webp",
                yt_image_src: "/images/MRT 600x300.webp",
                note_text: "text-zinc-600 dark:text-zinc-400 text-base md:text-lg w-11/12 md:w-3/4 border border-gray-500/10 p-2 rounded",
            }
        );

        return (
            <div>
                <div id="shipdata" >
                    <div className={card_style.position}>
                        <div className={card_style.shape}>
                            <br></br>
                            <h1 className={card_style.title_style}>
                                {shipdata.data.faction_short != null ? <>
                                    {shipdata.data.faction_short + " "}
                                </> : <></>}
                                {shipdata.data.name}
                            </h1>
                            <br></br>
                            <div className={card_style.body_style}>
                                <p>Faction: {shipdata.data.faction}</p>
                                <p>Type: {shipdata.data.type}</p>
                                <div className="flex justify-center">
                                    <div className="w-11/12 md:w-11/12">
                                        <p className="text-xs py-2">(รูปอาจจะโหลดช้าหน่อยนะ)</p>
                                        {(shipdata.data.skill != null) ? <>
                                            <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.skill} alt={shipdata.data.name + " picture"}
                                                onClick={() => {
                                                    document.getElementById("present0")?.classList.remove("hidden")
                                                    document.getElementById("shipchibi")?.classList.add("hidden")
                                                    document.getElementById("shipdata")?.classList.add("hidden")
                                                    document.getElementById("shipdata2")?.classList.add("hidden")
                                                    document.getElementById("shipdata3")?.classList.add("hidden")
                                                    document.body.classList.remove("overflow-x-hidden");
                                                    document.body.classList.add("w-max");
                                                }}
                                            >
                                            </img>
                                        </> : <></>}

                                        {(shipdata.data.re != null) ? <>
                                            <p>Retrofit</p>
                                            <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.re} alt={shipdata.data.name + " picture"}
                                                onClick={() => {
                                                    document.getElementById("present1")?.classList.remove("hidden")
                                                    document.getElementById("shipchibi")?.classList.add("hidden")
                                                    document.getElementById("shipdata")?.classList.add("hidden")
                                                    document.getElementById("shipdata2")?.classList.add("hidden")
                                                    document.getElementById("shipdata3")?.classList.add("hidden")
                                                    document.body.classList.remove("overflow-x-hidden");
                                                    document.body.classList.add("w-max");
                                                }}
                                            >
                                            </img>
                                        </> : <></>}

                                        {(shipdata.data.fatesim != null) ? <>
                                            <p>Fate Simulation</p>
                                            <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.fatesim} alt={shipdata.data.name + " picture"}
                                                onClick={() => {
                                                    document.getElementById("present2")?.classList.remove("hidden")
                                                    document.getElementById("shipchibi")?.classList.add("hidden")
                                                    document.getElementById("shipdata")?.classList.add("hidden")
                                                    document.getElementById("shipdata2")?.classList.add("hidden")
                                                    document.getElementById("shipdata3")?.classList.add("hidden")
                                                    document.body.classList.remove("overflow-x-hidden");
                                                    document.body.classList.add("w-max");
                                                }}
                                            >
                                            </img>
                                        </> : <></>}

                                    </div>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    </div>

                    {
                        ((shipdata.data.aoa != null) || (shipdata.data.ship_note != null) ||
                            (shipdata.data.guide_skill_1 != null) || (shipdata.data.guide_skill_2 != null) ||
                            (shipdata.data.guide_skill_3 != null)) ?
                            <>
                                <br></br>
                                <div className={card_style.position}>
                                    <div className={card_style.shape}>
                                        <div className={card_style.body_style + " z-10"}>
                                            {
                                                (shipdata.data.aoa != null) ?
                                                    <>
                                                        <br></br>
                                                        <p className="pb-4">All Out Assault</p>
                                                        <div className="flex justify-center pb-2">
                                                            <img className="" src={shipdata.data.aoa} alt={shipdata.data.name + " aoa picture"}></img>
                                                        </div>
                                                        {(shipdata.data.aoa_note != null) ?
                                                            <>
                                                                <div className="flex justify-center">
                                                                    <p className={card_style.note_text}>{shipdata.data.aoa_note}</p>
                                                                </div>
                                                            </> : <></>
                                                        }
                                                    </> : <></>
                                            }

                                            {
                                                (shipdata.data.guide_skill_1 != null) ?
                                                    <>
                                                        <br></br>
                                                        <p className="pb-4">Skill 1</p>
                                                        <div className="flex justify-center pb-2">
                                                            <img className="" src={shipdata.data.guide_skill_1} alt={shipdata.data.name + " skill 1 Guide"}></img>
                                                        </div>
                                                        {(shipdata.data.guide_skill_1_note != null) ?
                                                            <>
                                                                <div className="flex justify-center">
                                                                    <p className={card_style.note_text}>{shipdata.data.guide_skill_1_note}</p>
                                                                </div>
                                                            </> : <></>
                                                        }
                                                    </> : <></>
                                            }

                                            {
                                                (shipdata.data.guide_skill_2 != null) ?
                                                    <>
                                                        <br></br>
                                                        <p className="pb-4">Skill 2</p>
                                                        <div className="flex justify-center pb-2">
                                                            <img className="" src={shipdata.data.guide_skill_2} alt={shipdata.data.name + " skill 2 Guide"}></img>
                                                        </div>
                                                        {(shipdata.data.guide_skill_2_note != null) ?
                                                            <>
                                                                <div className="flex justify-center">
                                                                    <p className={card_style.note_text}>{shipdata.data.guide_skill_2_note}</p>
                                                                </div>
                                                            </> : <></>
                                                        }
                                                    </> : <></>
                                            }

                                            {
                                                (shipdata.data.guide_skill_3 != null) ?
                                                    <>
                                                        <br></br>
                                                        <p className="pb-4">Skill 3</p>
                                                        <div className="flex justify-center pb-2">
                                                            <img className="" src={shipdata.data.guide_skill_3} alt={shipdata.data.name + " skill 3 Guide"}></img>
                                                        </div>
                                                        {(shipdata.data.guide_skill_3_note != null) ?
                                                            <>
                                                                <div className="flex justify-center">
                                                                    <p className={card_style.note_text}>{shipdata.data.guide_skill_3_note}</p>
                                                                </div>
                                                            </> : <></>
                                                        }
                                                    </> : <></>
                                            }

                                            {
                                                (shipdata.data.ship_note != null) ?
                                                    <>
                                                        <br></br>
                                                        <p className="pb-4">Note</p>
                                                        <div className="flex justify-center">
                                                            <p className={card_style.note_text}>{shipdata.data.ship_note}</p>
                                                        </div>
                                                    </> : <></>
                                            }
                                        </div>
                                        <br></br>
                                    </div>
                                </div>

                            </> : <></>
                    }

                </div>

                {(shipdata.data.gear != null) ? <>
                    <br></br>
                    <div id="shipdata2" className={card_style.position}>
                        <div className={card_style.shape + " relative"}>
                            <br></br>
                            <div className={card_style.body_style + " z-10"}>
                                <p className="pb-4">อุปกรณ์สวมใส่แนะนำ</p>
                                <div className="flex justify-center">
                                    <div className="w-11/12 md:w-11/12">
                                        <img className="cursor-zoom-in object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.gear} alt={shipdata.data.name + " picture"}
                                            onClick={() => {
                                                document.getElementById("present3")?.classList.remove("hidden")
                                                document.getElementById("shipchibi")?.classList.add("hidden")
                                                document.getElementById("shipdata")?.classList.add("hidden")
                                                document.getElementById("shipdata2")?.classList.add("hidden")
                                                document.getElementById("shipdata3")?.classList.add("hidden")
                                                document.body.classList.remove("overflow-x-hidden");
                                                document.body.classList.add("w-max");
                                            }}
                                        >
                                        </img>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="absolute top-2 right-0 z-0 h-10 w-1/6 md:w-max">
                                <div className="animate__animated animate__fadeInRight animate__delay-1s animate__slow">

                                    {(shipdata.data.type == "CV") ?
                                        <><img className="" src="/images/gear/Tenrai.png" alt={"aircraft picture"}></img></> : <></>
                                    }

                                </div>
                            </div>
                        </div>
                    </div></> : <></>}

                {((shipdata.data.history != null) || (false)) ? <>
                    <div id="shipdata3">
                        <br></br>
                        <div className="flex justify-center">
                            <div className="w-full md:w-5/6 2xl:w-2/3">
                                <div className='md:grid md:grid-cols-2'>
                                    <div className='flex justify-center md:justify-start'>
                                        {(shipdata.data.review != null) ?
                                            <button className={card_style.mrt_shape}>
                                                <Link href={shipdata.data.review} className="w-full" legacyBehavior>
                                                    <a target="_blank">
                                                        <img src={card_style.mrt_image_src} className={card_style.image_style} alt='Youtube button image' />
                                                    </a>
                                                </Link>
                                            </button> : <></> 
                                        }
                                    </div>
                                    {(shipdata.data.history != null) ?
                                        <br className='block md:hidden'></br> : <></>
                                    }
                                    <div className='flex justify-center md:justify-end'>
                                        {(shipdata.data.history != null) ?
                                            <button className={card_style.mrt_shape}>
                                                <Link href={shipdata.data.history} className="w-full" legacyBehavior>
                                                    <a target="_blank">
                                                        <img src={card_style.yt_image_src} className={card_style.image_style} alt='Mr.T button image' />
                                                    </a>
                                                </Link>
                                            </button> : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <></>
                }

                {(shipdata.data.skill != null) ? <>
                    <div id="present0" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present0")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.getElementById("shipdata3")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.skill} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {(shipdata.data.re != null) ? <>
                    <div id="present1" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present1")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.getElementById("shipdata3")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.re} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {(shipdata.data.fatesim != null) ? <>
                    <div id="present2" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present2")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.getElementById("shipdata3")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.fatesim} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {(shipdata.data.gear != null) ? <>
                    <div id="present3" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present3")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.getElementById("shipdata3")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + shipdata.data.gear} alt={shipdata.data.name + " picture"}></img>
                    </div></> : <></>}

                {shipdata.data.chibi != null ? <>
                    <Chibi chibi={shipdata.data.chibi} />
                </> : <></>}
            </div>
        )
    }
}