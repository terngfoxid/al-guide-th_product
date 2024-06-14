import { useEffect, useState } from "react";
import BackToTop from "../components/overlay/BackToTop";
import { NextSeo } from "next-seo";
import Loading from "@/components/overlay/Loading";
import { AutoConvertText } from "@/components/functional/AutoConvertText";
import Cut_String from "@/components/functional/Cut_String";

type Boss = [
    {
        name: string
        type: string
        armor: string

        chibi: string

        meta_showdown: [
            {
                skill_detail: string
                skill_name: string
                skill_image: string
            }
        ]
        meta_showdown_comment: string
        meta_showdown_team: string[]

        skins: [
            {
                name: "",
                image: "",
                price: "",
                released: ""
            }
        ]
    }
]

export default function MetaShowdownPage() {

    const [bossData, setBossData] = useState<Boss | null>(null);
    const [index, setIndex] = useState<number>(0);
    const [webState, setWebState] = useState(0);

    useEffect(() => {
        const load = async () => {
            const response = await fetch("/api/getMetaBoss");
            setWebState(response.status)
            const data = await response.json();
            setBossData(data as Boss);
        };

        load().catch((e) => console.log(e));
    }, []);

    if (!bossData) {
        return (
            <div className="flex items-center justify-center">
                <Loading />
            </div>
        );
    } else {
        if (webState == 429) {
            return (
                <>
                    <NextSeo
                        title="ข้อมูลบอส Meta | Azur Lane Guide TH"
                        description="ข้อมูลบอส Meta Azur Lane"
                        openGraph={{
                            url: "https://al-guide-th.com/meta_showdown",
                            title: "ข้อมูลบอส Meta | Azur Lane Guide TH",
                            description: "หน้าข้อมูลบอส Meta",
                            type: "article",
                            article: {
                                tags: ["Azur Lane", "ข้อมูลบอส Meta", "Meta Boss", "Meta showdown"],
                            },
                            site_name: "Azur Lane ข้อมูลบอส Meta",
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
                                        Meta Showdown Guide
                                    </h1>
                                </div>


                                <div
                                    id="ships-chibi"
                                    className="mt-[20px] p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
                                >
                                    <div className="mb-4 text-center">
                                        <h2 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                                            บอสทั้งหมด
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
                    title="ข้อมูลบอส Meta | Azur Lane Guide TH"
                    description="ข้อมูลบอส Meta Azur Lane"
                    openGraph={{
                        url: "https://al-guide-th.com/meta_showdown",
                        title: "ข้อมูลบอส Meta | Azur Lane Guide TH",
                        description: "หน้าข้อมูลบอส Meta",
                        type: "article",
                        article: {
                            tags: ["Azur Lane", "ข้อมูลบอส Meta", "Meta Boss", "Meta showdown"],
                        },
                        site_name: "Azur Lane ข้อมูลบอส Meta",
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
                                    Meta Showdown Guide
                                </h1>
                            </div>

                            {bossData.length > 0 && (
                                <div
                                    id="ships-chibi"
                                    className="mt-[20px] p-4 border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800"
                                >
                                    <div className="mb-4 text-center">
                                        <h2 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                                            บอสทั้งหมด
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                                        {bossData.map((ship, idx) => {
                                            if (index == idx) return (
                                                <div
                                                    key={ship.name}
                                                    className="overflow-hidden duration-300 border-2 border-red-900 rounded-lg shadow bg-neutral-300 dark:bg-neutral-700"
                                                >
                                                    <button
                                                        className="text-zinc-700 dark:text-zinc-300 w-full h-full"
                                                    >
                                                        <div className="flex items-center justify-start w-full py-1 sm:px-2">
                                                            <img
                                                                src={`/images/type/${ship.type}.webp`}
                                                                alt="ship type"
                                                                className="w-[40px] sm:w-[50px]"
                                                            />
                                                            <div className="w-full px-1 truncate md:px-3 sm:rounded-r-lg bg-neutral-400 dark:bg-neutral-600">
                                                                <p>{ship.name}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                                                            <img className="max-h-[150px]" src={ship.chibi} alt="ship chibi image" />
                                                        </div>
                                                    </button>
                                                </div>)
                                            else return (
                                                <div
                                                    key={ship.name}
                                                    className="overflow-hidden duration-300 border-2 border-transparent rounded-lg shadow bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-105 hover:border-cyan-400"
                                                >
                                                    <button
                                                        className="text-zinc-700 dark:text-zinc-300 w-full h-full"
                                                        onClick={() => {
                                                            setIndex(idx)
                                                            let access = document.getElementById("bossdata");
                                                            if (access != null) {
                                                                access.scrollIntoView({ behavior: "smooth" });
                                                            }
                                                        }}
                                                    >
                                                        <div className="flex items-center justify-start w-full py-1 sm:px-2">
                                                            <img
                                                                src={`/images/type/${ship.type}.webp`}
                                                                alt="ship type"
                                                                className="w-[40px] sm:w-[50px]"
                                                            />
                                                            <div className="w-full px-1 truncate md:px-3 sm:rounded-r-lg bg-neutral-400 dark:bg-neutral-600">
                                                                <p>{ship.name}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                                                            <img className="max-h-[150px]" src={ship.chibi} alt="ship chibi image" />
                                                        </div>
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {index != null && (
                                <div
                                    id="bossdata"
                                    className="p-[5px] md:p-[20px] border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:border-gray-700 dark:bg-neutral-800 mt-[20px]"
                                >
                                    <div className="mb-4 text-center mt-[5px]">
                                        <h2 className="text-2xl text-zinc-700 dark:text-zinc-300 md:text-4xl">
                                            ข้อมูลบอส
                                        </h2>
                                    </div>
                                    <div className="lg:flex md:gap-[5px]">
                                        <div>
                                            <div className="mx-auto lg:mx-[10px] min-w-[300px] w-max h-max rounded rounded-lg overflow-hidden bg-neutral-300 dark:bg-neutral-700 p-[10px] md:p-[20px] border border-[2px] border-gray-300 dark:border-gray-700">
                                                <div className="flex mx-auto w-max md:items-center">
                                                    <img className="max-w-[150px] h-full" src={bossData[index].chibi} alt="ship chibi image" />
                                                    <div className="md:ml-[30px]">
                                                        <h3 className="text-md md:text-lg text-zinc-700 dark:text-zinc-300 2xl:text-2xl">{bossData[index].name}</h3>
                                                        <h4 className="text-md md:text-md text-zinc-700 dark:text-zinc-300 2xl:text-xl mt-[10px]">ข้อมูลเบื้องต้น</h4>
                                                        <div className="flex gap-[5px] text-md md:text-md text-zinc-700 dark:text-zinc-300 2xl:text-xl mt-[10px]">ประเภท:
                                                            <img
                                                                src={`/images/type/${bossData[index].type}.webp`}
                                                                alt="ship type"
                                                                className="w-[30px] sm:w-[30px] h-full"
                                                            />
                                                            {bossData[index].type}
                                                        </div>
                                                        <p className="text-md md:text-md text-zinc-700 dark:text-zinc-300 2xl:text-xl mt-[10px]">เกราะ: {bossData[index].armor}</p>
                                                    </div>
                                                </div>
                                                <div className="text-md lg:text-lg text-zinc-700 dark:text-zinc-300 xl:text-xl mt-[10px]">
                                                    <Cut_String text={"ข้อมูลอื่นๆ: " + bossData[index].meta_showdown_comment}></Cut_String>
                                                </div>

                                            </div>
                                            <div className="hidden lg:block flex justifly-center max-w-[350px] mt-[20px]">
                                                {bossData[index].skins && (
                                                    <img
                                                        src={bossData[index].skins[0].image}
                                                        alt={"default skin " + bossData[index].name}
                                                        className="w-full h-full">
                                                    </img>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-[10px] md:ml-[20px] md:ml-[5px] p-[10px] w-full lg:w-max">
                                            <h4 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl lg:text-3xl text-center lg:text-start">
                                                Skill และ Mechanic
                                            </h4>
                                            {bossData[index].meta_showdown.map((skill, index) => {
                                                return (
                                                    <div key={"skill" + index} className="mt-[20px] items-end text-zinc-700 dark:text-zinc-300">
                                                        <p className="text-lg  xl:text-xl 2xl:text-2xl pr-[5px]">{skill.skill_name}</p>
                                                        <AutoConvertText className="text-md pl-[10px] pr-[20px] xl:text-lg 2xl:text-xl mt-[5px] lg:max-w-[380px] xl:max-w-[550px] 2xl:max-w-[780px]">{skill.skill_detail}</AutoConvertText>
                                                        {skill.skill_image != null && (
                                                            <img className="max-w-[300px] max-h-[200px] mx-auto mb-[10px] mt-[5px]" src={skill.skill_image} alt={"Boss skill " + index} ></img>
                                                        )}
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                    {bossData[index].meta_showdown_team != null && (
                                        <div className="mb-4 text-center mt-[20px]">
                                            <h2 className="text-xl text-zinc-700 dark:text-zinc-300 md:text-2xl">
                                                ตัวอย่างทีมที่ใช้ตี
                                            </h2>
                                            <div>
                                                {bossData[index].meta_showdown_team.map(
                                                    (image, index) => {
                                                        return (
                                                            <div key={"team image" + index}>
                                                                <p className="text-center text-zinc-700 dark:text-zinc-300">ทีม {index + 1}</p>
                                                                <div className="w-full flex justify-center">
                                                                    <img className="w-full max-w-[700px]" src={image} alt={"Boss team " + index}></img>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )}
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
