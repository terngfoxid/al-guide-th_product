import { useEffect, useState } from "react";
import BackToTop from "../components/overlay/BackToTop";
import { NextSeo } from "next-seo";
import Loading from "@/components/overlay/Loading";
import Link from "next/link";

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

export default function MetaShowdownPage() {

    const [activeList, setActiveEvent] = useState<ActiveEvent | null>(null);
    const [webState, setWebState] = useState(0);

    const card_style = {
        shape:
            "hover:scale-110 overflow-hidden group relative w-full rounded-lg shadow-md border bg-neutral-200 hover:bg-neutral-300 border-gray-300 dark:border-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border-b-2 border-t-1 border-l-1 border-r-1 duration-300",
        body_style:
            "py-2 text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl text-center ",
        image_style: "w-full rounded-lg ",
        image_src: "/images/Meta Showdown 600x300.webp",
    };

    useEffect(() => {
        const load = async () => {
            const response = await fetch("/api/alleventdata");
            setWebState(response.status)
            const data = await response.json();
            setActiveEvent(data as ActiveEvent);
        };

        load().catch((e) => console.log(e));
    }, []);

    if (!activeList) {
        return (
            <>
                <br></br>
                <div className="flex items-center justify-center">
                    <Loading />
                </div>
                <br></br>
            </>
        );
    } else {
        if (webState == 429) {
            return (
                <>
                    <NextSeo
                        title="ข้อมูลประวัติกิจกรรม | Azur Lane Guide TH"
                        description="ข้อมูลประวัติกิจกรรม Azur Lane"
                        openGraph={{
                            url: "https://al-guide-th.com/event_data_list",
                            title: "ข้อมูลประวัติกิจกรรม | Azur Lane Guide TH",
                            description: "หน้าข้อมูลประวัติกิจกรรม",
                            type: "article",
                            article: {
                                tags: ["Azur Lane", "ข้อมูลประวัติกิจกรรม", "Event"],
                            },
                            site_name: "Azur Lane ข้อมูลประวัติกิจกรรม",
                        }}
                        additionalMetaTags={[
                            {
                                name: "keywords",
                                content:
                                    "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ข้อมูลกิจกรรม,ข้อมูลบอส Meta azur lane",
                            },
                        ]}
                    />

                    <main>
                        <div className="container w-full py-4 mx-auto">
                            <div className="w-11/12 lg:w-5/6 mx-auto">
                                <div className="flex justify-center mt-[20px]">
                                    <h1 className="p-3 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                                        Event List
                                    </h1>
                                </div>


                                <div
                                    id="ships-chibi"
                                    className="mt-[20px] p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
                                >
                                    <div className="mb-4 text-center">
                                        <h2 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                                            ข้อมูลกิจกรรมทั้งหมด
                                        </h2>
                                    </div>
                                    <div className="mx-auto flex gap-1 justify-center items-center bg-neutral-200 dark:bg-neutral-800">
                                        <svg className="w-8 h-8 mr-3 text-[#FF3845] fill-[#FF3845]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                        </svg>
                                        <p className="text-[#FF3845]">ไม่สามารถโหลดข้อมูลได้</p>
                                    </div>
                                    <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">กรุณาลองใหม่อีกครั้งหลังเวลา 14:00 น.</p>
                                </div>
                            </div>
                        </div>
                    </main>

                    <BackToTop />
                </>
            );
        }
        return (
            <>
                <NextSeo
                    title="ข้อมูลประวัติกิจกรรม | Azur Lane Guide TH"
                    description="ข้อมูลประวัติกิจกรรม Azur Lane"
                    openGraph={{
                        url: "https://al-guide-th.com/event_data_list",
                        title: "ข้อมูลประวัติกิจกรรม | Azur Lane Guide TH",
                        description: "หน้าข้อมูลประวัติกิจกรรม",
                        type: "article",
                        article: {
                            tags: ["Azur Lane", "ข้อมูลประวัติกิจกรรม", "Event"],
                        },
                        site_name: "Azur Lane ข้อมูลประวัติกิจกรรม",
                    }}
                    additionalMetaTags={[
                        {
                            name: "keywords",
                            content:
                                "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ข้อมูลกิจกรรม,ข้อมูลบอส Meta azur lane",
                        },
                    ]}
                />

                <main>
                    <div className="container w-full py-4 mx-auto">
                        <div className="w-11/12 lg:w-5/6 mx-auto">
                            <div className="flex justify-center mt-[20px]">
                                <h1 className="p-3 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                                    Event List
                                </h1>
                            </div>

                            {activeList.length > 0 && (
                                <div
                                    id="event-list"
                                    className="mt-[20px] p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
                                >
                                    <div className="mb-4 text-center">
                                        <h2 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                                            ข้อมูลกิจกรรมทั้งหมด
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                                        {activeList.map((event, idx) => {
                                            return (
                                                <button className={card_style.shape} key={"event"+idx}>
                                                    <Link href={"/data_event?name=" + event.name} className="w-full">
                                                        <img
                                                            src={
                                                                "" +
                                                                event.button
                                                            }
                                                            className={card_style.image_style}
                                                            alt="ข้อมูลกิจกรรม"
                                                            width="600"
                                                            height="300"
                                                        />
                                                    </Link>
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </main>

                <BackToTop />
            </>
        );
    }
}
