import BackToTop from "../components/overlay/BackToTop";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import Loading from "@/components/overlay/Loading"
import Link from "next/link";
import Image from "next/image";

type ShipData = {
    data: [
        {
            name: string,
            type: string,
            chibi: string,
            augment: string,
            faction: string,
            faction_sub?: string
        }
    ]
};

const faction = ["Eagle Union", "Royal Navy", "Sakura Empire", "Iron Blood", "Dragon Empery", "Northern Parliament", "Iris Libre", "Vichya Dominion", "Sardegna Empire","Tempesta","META"]

export default function AugmentPage() {

    const [augmentShipData, setAugmentShipData] = useState<ShipData | null>(null);
    const [webState, setWebState] = useState(0);

    useEffect(() => {
        const load = async () => {
            const response = await fetch("/api/getAugment");
            setWebState(response.status)
            const data = await response.json();
            setAugmentShipData(data as ShipData);
        };

        load().catch((e) => console.log(e));
    }, []);

    if (augmentShipData == null) {
        return (<>
            <NextSeo
                title="Augmentation | Azur Lane Guide TH"
                description="Augment เรือ Azur Lane"
                openGraph={{
                    url: "https://al-guide-th.com/research_shipyard_guide",
                    title: "Augmentation | Azur Lane Guide TH",
                    description: "หน้า Augment เรือ",
                    type: "article",
                    article: {
                        tags: ["Azur Lane", "Augment", "Augment ประจำตัว"],
                    },
                    site_name: "Azur Lane Augmentation",
                }}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,Augmentation,Augment",
                    },
                ]}
            />

            <main>
                <div className="container w-full py-4 mx-auto">
                    <div className="w-11/12 lg:w-5/6 mx-auto">
                        <div className="flex justify-center">
                            <Loading />
                        </div>
                    </div>
                </div>
            </main>
        </>)
    }

    else {
        if (webState == 429) {
            return (
                <>
                    <NextSeo
                        title="Augmentation | Azur Lane Guide TH"
                        description="Augment เรือ Azur Lane"
                        openGraph={{
                            url: "https://al-guide-th.com/research_shipyard_guide",
                            title: "Augmentation | Azur Lane Guide TH",
                            description: "หน้า Augment เรือ",
                            type: "article",
                            article: {
                                tags: ["Azur Lane", "Augment", "Augment ประจำตัว"],
                            },
                            site_name: "Azur Lane Augmentation",
                        }}
                        additionalMetaTags={[
                            {
                                name: "keywords",
                                content:
                                    "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,Augmentation,Augment",
                            },
                        ]}
                    />

                    <main className="container mx-auto">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 py-[25px] space-y-[5px]">
                            <div className="flex justify-center">
                                <h1 className="p-2 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                                    Augmentation
                                </h1>
                            </div>
                            <div className="w-full">
                                <div className="md:flex mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
                                    <p className="px-4 text-center md:text-left text-zinc-700 dark:text-zinc-300 text-xl font-bold">Augmentation</p>
                                    <p className="px-4 text-zinc-700 dark:text-zinc-300 text-lg">คือ การติดตั้ง Augment Module ให้กับเรือที่ปลดดาวเต็มแล้ว เพื่อเพิ่ม status และปรับปรุงสกิลให้กับเรือ โดยเรือบางลำจะมี Unique Module ที่ติดตั้งได้แค่เฉพาะตัวเองเท่านั้น</p>
                                </div>
                            </div>


                            <div className="flex justify-center">
                                <h2 className="mt-[30px] p-2 pt-3 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                                    เรือที่มี Unique Module
                                </h2>
                            </div>

                            <div className="w-full">
                                <div className="mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
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

        const faction_sub_list = Array.from(new Set(augmentShipData.data?.filter((ship) => { if (ship.faction_sub != null) return true }).map((ship) => {
            if (ship.faction_sub != null) return ship.faction_sub
        })))

        return (
            <>
                <NextSeo
                    title="Augmentation | Azur Lane Guide TH"
                    description="Augment เรือ Azur Lane"
                    openGraph={{
                        url: "https://al-guide-th.com/research_shipyard_guide",
                        title: "Augmentation | Azur Lane Guide TH",
                        description: "หน้า Augment เรือ",
                        type: "article",
                        article: {
                            tags: ["Azur Lane", "Augment", "Augment ประจำตัว"],
                        },
                        site_name: "Azur Lane Augmentation",
                    }}
                    additionalMetaTags={[
                        {
                            name: "keywords",
                            content:
                                "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,Augmentation,Augment",
                        },
                    ]}
                />

                <main className="container mx-auto">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 py-[25px] space-y-[5px]">
                        <div className="flex justify-center">
                            <h1 className="p-2 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                                Augmentation
                            </h1>
                        </div>
                        <div className="w-full">
                            <div className="md:flex mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
                                <p className="px-4 text-center md:text-left text-zinc-700 dark:text-zinc-300 text-xl font-bold">Augmentation</p>
                                <p className="px-4 text-zinc-700 dark:text-zinc-300 text-lg">คือ การติดตั้ง Augment Module ให้กับเรือที่ปลดดาวเต็มแล้ว เพื่อเพิ่ม status และปรับปรุงสกิลให้กับเรือ โดยเรือบางลำจะมี Unique Module ที่ติดตั้งได้แค่เฉพาะตัวเองเท่านั้น</p>
                            </div>
                        </div>


                        <div className="flex justify-center">
                            <h2 className="mt-[30px] p-2 pt-3 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                                เรือที่มี Unique Module
                            </h2>
                        </div>

                        <div className="w-full">
                            {augmentShipData.data.filter((ship) => { if (ship.augment == "New Unique Modules") return true }).length != 0 ?
                                <>
                                    <p className="text-center text-xl text-zinc-700 dark:text-zinc-200 pt-5 pb-2">Unique Module ใหม่</p>
                                    <div className="mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                                            {augmentShipData.data?.map(
                                                (ship) => {
                                                    return (<>{ship.augment == "New Unique Modules" ?
                                                        <Link key={ship.name} className="mx-auto text-zinc-200 dark:text-zinc-300 text-base text-center w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300 hover:scale-110 border-2 border-transparent hover:border-cyan-400 hover:z-10"
                                                            href={"/ship/" + ship.name}>
                                                            <div className="rounded-lg">
                                                                <div>
                                                                    <div className="flex items-center justify-start w-full">
                                                                        <Image src={"/images/type/" + ship.type + ".webp"}
                                                                            alt="type image"
                                                                            width="49"
                                                                            height="30"
                                                                        />
                                                                        <div className="inline-block w-full truncate rounded bg-neutral-500 dark:bg-neutral-600">
                                                                            <p className="max-w-fit">&nbsp;{ship.name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                                                                            <img className="max-h-[150px]" src={ship.chibi} alt="ship chibi image" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link> :
                                                        <></>
                                                    }</>)
                                                }
                                            )}
                                        </div>
                                    </div>
                                </> : <></>
                            }
                        </div>

                        {
                            faction.map((faction) => {
                                const haveAug = augmentShipData.data.filter((ship) => { if ((ship.augment == "Unique Modules") && (faction == ship.faction)) return true })
                                if (haveAug.length == 0) { return }
                                return (
                                    <div key={faction} className="w-full">
                                        <p className="text-center text-xl text-zinc-700 dark:text-zinc-200 pt-5 pb-2">{faction}</p>
                                        <div className="mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                                                {augmentShipData.data?.map(
                                                    (ship) => {
                                                        return (<>{ship.augment == "Unique Modules" && ship.faction == faction ?
                                                            <Link key={ship.name} className="mx-auto text-zinc-200 dark:text-zinc-300 text-base text-center w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300 hover:scale-110 border-2 border-transparent hover:border-cyan-400 hover:z-10"
                                                                href={"/ship/" + ship.name}>
                                                                <div className="rounded-lg">
                                                                    <div>
                                                                        <div className="flex items-center justify-start w-full">
                                                                            <Image src={"/images/type/" + ship.type + ".webp"}
                                                                                alt="type image"
                                                                                width="49"
                                                                                height="30"
                                                                            />
                                                                            <div className="inline-block w-full truncate rounded bg-neutral-500 dark:bg-neutral-600">
                                                                                <p className="max-w-fit">&nbsp;{ship.name}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                                                                                <img className="max-h-[150px]" src={ship.chibi} alt="ship chibi image" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link> :
                                                            <></>
                                                        }</>)
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="w-full ">
                            <p className="text-center text-xl text-zinc-700 dark:text-zinc-200 pt-5 pb-2">เรือ Collab</p>
                            <div className="mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                                    {
                                        faction_sub_list.map((faction_sub) => {
                                            return (
                                                <><p className="col-span-2 md:col-span-4 text-center text-xl text-zinc-700 dark:text-zinc-200 pt-5 pb-2">{faction_sub}</p>
                                                    {
                                                        augmentShipData.data?.filter((ship) => { if (ship.faction_sub == faction_sub) return true }).map(
                                                            (ship) => {
                                                                return (
                                                                    <>{
                                                                        <Link key={ship.name} className="text-zinc-200 dark:text-zinc-300 text-base text-center w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300 hover:scale-110 border-2 border-transparent hover:border-cyan-400 hover:z-10"
                                                                            href={"/ship/" + ship.name}>
                                                                            <div className="rounded-lg">
                                                                                <div>
                                                                                    <div className="flex items-center justify-start w-full">
                                                                                        <Image
                                                                                            src={
                                                                                                "/images/type/" +
                                                                                                ship.type +
                                                                                                ".webp"
                                                                                            }
                                                                                            alt="type image"
                                                                                            width="49"
                                                                                            height="30"
                                                                                        />
                                                                                        <div className="inline-block w-full truncate rounded bg-neutral-500 dark:bg-neutral-600">
                                                                                            <p className="max-w-fit">&nbsp;{ship.name}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                                                                                            <img className="max-h-[150px]" src={ship.chibi} alt="ship chibi image" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    }
                                                                    </>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <BackToTop />
            </>
        );
    }
}
