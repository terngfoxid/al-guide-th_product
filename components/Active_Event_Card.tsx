import { useEffect, useState } from "react";
import Loading from "./overlay/Loading";
import Chibi_Event from "./overlay/Chibi_Event";
import 'animate.css';
import Link from "next/link";

export default function Active_Event_Card(ship: any) {

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

            quest: [],
            special_furniture: null,
            special_frame: null,
            special_furniture_text: null,
            special_frame_text: null,
            special_furniture_text2: null,
            special_frame_text2: null,
        }
    });

    const callAPI = async () => {
        try {
            const res = await fetch('/api/active_event');
            //const res = await fetch('https://al-guide-th.vercel.app/api/active_event');
            const loaddata = await res.json()
            setEventdata({ data: loaddata })
            return
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI()
    }, []);

    if (eventdata.data.banner == null && eventdata.data.error == null) {
        return (
            <div className="flex justify-center">
                <Loading />
            </div>
        )
    }
    else {
        const card_style = (
            {
                title_style: 'py-1 text-zinc-700 dark:text-zinc-300 text-xl md:text-2xl font-bold ',
                title_date_style: 'py-1 text-zinc-700 dark:text-zinc-300 text-base md:text-lg font-bold ',

                shape: "w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                position: "flex justify-center",
                body_style: "pt-3 text-zinc-700 dark:text-zinc-300 text-base ",
                button_style: "w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300 hover:scale-110 border-2 border-transparent hover:border-cyan-400",
                note_header_style: "text-lg mt-1 pt-2 text-left",
                note_style: "pl-2 py-1 text-left",

                reward:"flex w-11/12 border border-gray-300 dark:border-gray-700 rounded-lg",
            }
        );

        const ship_list = [];
        let count = 0;
        for (count = 0; count < eventdata.data.newship.length; count++) {
            const buffer = count
            ship_list.push(
                <div className={"flex justify-center"}>
                    <div className={card_style.button_style}>
                        <div>
                            <Link className={card_style.body_style} href={"/ship/" + eventdata.data.newship[buffer]}>
                                <div className="flex justify-start items-center w-full">
                                    <img src={"/images/type/" + eventdata.data.newship_type[buffer] + ".webp"} alt='type image' width="50" />
                                    <div className="truncate inline-block rounded bg-neutral-400 dark:bg-neutral-600 w-full">
                                        <p className="max-w-fit">&nbsp;{eventdata.data.newship[buffer]}</p>
                                    </div>
                                </div>
                                <div>
                                    {eventdata.data.newship_chibi[buffer] != null ? <>
                                        <div className="w-full flex justify-center items-center aspect-square md:aspect-video">
                                            <img src={eventdata.data.newship_chibi[buffer]} alt='ship chibi image' />
                                        </div></> : <></>
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }

        const note_body = [];

        if (eventdata.data.event_note_beginer.length > 0) {
            note_body.push(
                <><p className={card_style.note_header_style}>◆ ด่านน่าฟาร์ม (ผู้เล่นใหม่)</p></>
            )
            for (count = 0; count < eventdata.data.event_note_beginer.length; count++) {
                const buffer = count
                note_body.push(

                    <><div className="flex"><p className={card_style.note_style}>-</p>
                        <p className={card_style.note_style}>{eventdata.data.event_note_beginer[buffer]}</p>
                    </div></>
                )
            }
        }

        if (eventdata.data.event_note_midgame.length > 0) {
            note_body.push(
                <><p className={card_style.note_header_style}>◆ ด่านน่าฟาร์ม (ผู้เล่นกลาง-เก่า)</p></>
            )
            for (count = 0; count < eventdata.data.event_note_midgame.length; count++) {
                const buffer = count
                note_body.push(
                    <><div className="flex"><p className={card_style.note_style}>-</p>
                        <p className={card_style.note_style}>{eventdata.data.event_note_midgame[buffer]}</p>
                    </div></>
                )
            }
        }

        if (eventdata.data.event_note_sp.length > 0) {
            note_body.push(
                <><p className={card_style.note_header_style}>◆ ด่านSP</p></>
            )
            for (count = 0; count < eventdata.data.event_note_sp.length; count++) {
                const buffer = count
                note_body.push(
                    <><div className="flex"><p className={card_style.note_style}>-</p>
                        <p className={card_style.note_style}>{eventdata.data.event_note_sp[buffer]}</p>
                    </div></>
                )
            }
        }

        if (eventdata.data.event_note_sum.length > 0) {
            note_body.push(
                <><p className={card_style.note_header_style}>◆ สรุปง่ายๆสั้นๆ</p></>
            )
            for (count = 0; count < eventdata.data.event_note_sum.length; count++) {
                const buffer = count
                note_body.push(
                    <><div className="flex"><p className={card_style.note_style}>-</p>
                        <p className={card_style.note_style}>{eventdata.data.event_note_sum[buffer]}</p>
                    </div></>
                )
            }
        }

        const quest_body = [];
        if (eventdata.data.quest.length > 0) {
            for (count = 0; count < eventdata.data.quest.length; count++) {
                const buffer = count
                quest_body.push(
                    <><div className="flex"><p className={card_style.note_style}>▷</p>
                        <p className={card_style.note_style}>{eventdata.data.quest[buffer]}</p>
                    </div></>
                )
            }
        }

        return (
            <div>
                <div id="shipdata" className={card_style.position}>
                    <div className={card_style.shape}>
                        <img className="object-scale-down rounded-lg" src={"https://drive.google.com/uc?export=view&id=" + eventdata.data.banner} alt={eventdata.data.banner + " picture"}></img>
                    </div>
                </div>

                {eventdata.data.newship.length != 0 ?
                    <>
                        <br></br>
                        <div id="shipdata2" className={card_style.position}>
                            <div className={card_style.shape}>
                                <div className="flex justify-center">
                                    <h1 className={card_style.title_style}>เรือใหม่</h1>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                                    {ship_list}
                                </div>
                                <br></br>
                            </div>
                        </div></> : <></>}

                        {(eventdata.data.quest.length != 0) ?
                    <>
                        <br></br>
                        <div id="shipdata5" className={card_style.position}>
                            <div className={card_style.shape}>
                                <div className="flex justify-center mt-2">
                                    <h1 className={card_style.title_style}>เควสและของรางวัล</h1>
                                </div>

                                <div className={card_style.body_style}>
                                    <div className="md:grid md:grid-cols-2">
                                        {eventdata.data.special_furniture != null ? <>
                                            <div className="flex justify-center pb-2">
                                                <div className={card_style.reward}>
                                                    <div className="w-1/3">
                                                        <img src={eventdata.data.special_furniture}></img>
                                                    </div>
                                                    <div className="pt-2">
                                                        {eventdata.data.special_furniture_text != null ?
                                                            <>
                                                                <h1 className={card_style.title_date_style+"pl-2 py-1"}>{eventdata.data.special_furniture_text}</h1>
                                                            </> : <></>}
                                                        {eventdata.data.special_furniture_text2 != null ?
                                                            <>
                                                                <p className={card_style.note_style}>{eventdata.data.special_furniture_text2}</p>
                                                            </> : <></>}
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                        {eventdata.data.special_frame != null ? <>
                                            <div className="flex justify-center pb-2">
                                                <div className={card_style.reward}>
                                                    <div className="w-1/3">
                                                        <img src={eventdata.data.special_frame}></img>
                                                    </div>
                                                    <div className="pt-2">
                                                        {eventdata.data.special_frame_text != null ?
                                                            <>
                                                                <h1 className={card_style.title_date_style+"pl-2 py-1"}>{eventdata.data.special_frame_text}</h1>
                                                            </> : <></>}
                                                        {eventdata.data.special_frame_text2 != null ?
                                                            <>
                                                                <p className={card_style.note_style}>{eventdata.data.special_frame_text2}</p>
                                                            </> : <></>}
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <></>}
                                    </div>
                                    <br></br>
                                    <div className="flex justify-center">
                                        <div className="w-11/12 space-y-1">
                                            {quest_body}
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        </div></> : <></>}

                {(eventdata.data.event_note_beginer != null) ||
                    (eventdata.data.event_note_midgame != null) ||
                    (eventdata.data.event_note_sp != null) ||
                    (eventdata.data.event_note_sum != null)
                    ?
                    <>
                        <br></br>
                        <div id="shipdata4" className={card_style.position}>
                            <div className={card_style.shape}>
                                <div className="flex justify-center mt-2">
                                    <h1 className={card_style.title_style}>สรุปข้อมูลด่านน่าฟาร์มประจำ Event ใหม่</h1>
                                </div>
                                {eventdata.data.event_name != null ?
                                    <><div className="flex justify-center">
                                        <h1 className={card_style.title_style}>{eventdata.data.event_name}</h1>
                                    </div></> : <></>}
                                {eventdata.data.event_time != null ?
                                    <><div className="flex justify-center">
                                        <h1 className={card_style.title_date_style}>{eventdata.data.event_time}</h1>
                                    </div></> : <></>}

                                <div className={card_style.body_style}>
                                    <div className="flex justify-center">
                                        <div className="w-11/12 space-y-1">
                                            {note_body}
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </div>
                        </div></> : <></>}

                {(eventdata.data.event_guide != null) ? <>
                    <br></br>
                    <div id="shipdata3" className={card_style.position}>
                        <div className={card_style.shape}>
                            <img className="cursor-zoom-in object-scale-down rounded-lg" src={"https://drive.google.com/uc?export=view&id=" + eventdata.data.event_guide} alt={eventdata.data.banner + " picture"}
                                onClick={() => {
                                    document.getElementById("present0")?.classList.remove("hidden")
                                    document.getElementById("shipchibi")?.classList.add("hidden")
                                    document.getElementById("shipdata")?.classList.add("hidden")
                                    document.getElementById("shipdata2")?.classList.add("hidden")
                                    document.getElementById("shipdata3")?.classList.add("hidden")
                                    document.getElementById("shipdata4")?.classList.add("hidden")
                                    document.getElementById("shipdata5")?.classList.add("hidden")
                                    document.body.classList.remove("overflow-x-hidden");
                                    document.body.classList.add("w-max");
                                }}
                            ></img>
                        </div>
                    </div></> : <></>}

                {(eventdata.data.event_guide != null) ? <>
                    <div id="present0" className="hidden bg-gray-900 w-max"
                        onClick={() => {
                            document.getElementById("present0")?.classList.add("hidden")
                            document.getElementById("shipchibi")?.classList.remove("hidden")
                            document.getElementById("shipdata")?.classList.remove("hidden")
                            document.getElementById("shipdata2")?.classList.remove("hidden")
                            document.getElementById("shipdata3")?.classList.remove("hidden")
                            document.getElementById("shipdata4")?.classList.remove("hidden")
                            document.getElementById("shipdata5")?.classList.remove("hidden")
                            document.body.classList.add("overflow-x-hidden");
                            document.body.classList.remove("w-max");
                        }}
                    >
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + eventdata.data.event_guide} alt={"Guide picture"}></img>
                    </div></> : <></>}

                {eventdata.data.chibi != null ? <>
                    <Chibi_Event chibi={eventdata.data.chibi} />
                </> : <></>}
            </div>
        )
    }
}