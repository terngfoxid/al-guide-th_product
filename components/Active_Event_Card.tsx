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
            name: null,
            newship: [],
            newship_chibi: [],
            newship_type:[],
            error:null,
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
                title_style: 'py-2 text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center',
                shape: "w-11/12 md:w-5/6 2xl:w-2/3 rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800",
                position: "flex justify-center",
                body_style: "text-zinc-700 dark:text-zinc-300 text-base text-center",
                button_style: "w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300",

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
                                                <img src={"https://drive.google.com/uc?export=view&id=" + eventdata.data.newship_chibi[buffer]} alt='ship chibi image' />
                                            </div></> : <></>
                                        }
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
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
                </div></>:<></>}

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
                                document.body.classList.remove("overflow-x-hidden");
                                document.body.classList.add("w-max");
                            }}
                        ></img>
                    </div>
                </div>

                {(eventdata.data.event_guide != null) ? <>
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
                        <img className="cursor-zoom-out object-scale-down" src={"https://drive.google.com/uc?export=view&id=" + eventdata.data.event_guide} alt={"Guide picture"}></img>
                    </div></> : <></>}

                {eventdata.data.chibi != null ? <>
                    <Chibi_Event chibi={eventdata.data.chibi} />
                </> : <></>}
            </div>
        )
    }
}