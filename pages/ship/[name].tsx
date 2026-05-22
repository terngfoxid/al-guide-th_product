import { useDialog } from "@/components/dialog";
import CutString from "@/components/functional/cutstring";
import { useLoading } from "@/components/overlay/loading";
import ShipCard from "@/components/ship/shipcard";
import { RARITY_MAPING } from "const/rarity.const";
import { TYPE_MAPING } from "const/type.const";
import { IPRSerie, IPRShip } from "models/ipr";
import { ShipV2 } from "models/shipv2";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { GiAtom, GiGearStickPattern } from "react-icons/gi";
import { LuAppWindowMac } from "react-icons/lu";
import { BsBookmarkStar } from "react-icons/bs";
import ShipInGrid from "@/components/ship/shipingrid";

export default function Ship() {
    const router = useRouter();
    const { name } = router.query;

    const [ship, setShip] = useState<ShipV2>()
    const [shipSameTag, setShipSameTag] = useState<ShipV2[]>([])
    const [shipPR, setShipPR] = useState<IPRShip>()
    const [dataMode, setDataMode] = useState<"Normal" | "Retrofit" | "Fatesim" | "Gear">("Normal")

    const [normalPage, setNormalPage] = useState<number>(1)
    const [retofitPage, setRetrofitPage] = useState<number>(1)
    const [fatesimPage, setFatesimPage] = useState<number>(1)
    const [gearPage, setGearPage] = useState<number>(1)

    const { showLoading, hideLoading } = useLoading()
    const { openErrorDialog } = useDialog()

    const callAPI = async () => {
        try {
            showLoading()
            fetch("/api/v2/ship/" + (name as string).toLowerCase()).then(
                (res) => {
                    if (!res.ok) {
                        hideLoading()
                        openErrorDialog({
                            title: "เกิดข้อผิดพลาด " + res.status,
                            message: "โหลดข้อมูลไม่สำเร็จ",
                            onClose: () => { }
                        })
                    }
                    else {
                        res.json().then((loaddata: ShipV2) => {
                            setShip(loaddata);
                            fetch("/api/v2/ship").then(allShipRes => {
                                if (!allShipRes.ok) {
                                    hideLoading()
                                    openErrorDialog({
                                        title: "เกิดข้อผิดพลาด " + res.status,
                                        message: "โหลดข้อมูลไม่สำเร็จ",
                                        onClose: () => { }
                                    })
                                }
                                else {
                                    allShipRes.json().then((allShip: ShipV2[]) => {
                                        const sameTag = allShip.filter(oneShip => oneShip.tag.some(tagShip => loaddata.tag.includes(tagShip)) && (loaddata.name !== oneShip.name))
                                        if (sameTag.length > 0) {
                                            setShipSameTag(sameTag)
                                        }
                                    })
                                }

                                if (!loaddata.rarity.includes("PR") && !loaddata.rarity.includes("DR")) {
                                    hideLoading()
                                }
                                else {
                                    fetch("/api/v2/research").then(
                                        res => {
                                            if (!res.ok) {
                                                hideLoading()
                                                openErrorDialog({
                                                    title: "เกิดข้อผิดพลาด " + res.status,
                                                    message: "โหลดข้อมูลไม่สำเร็จ",
                                                    onClose: () => { }
                                                })
                                            }
                                            else {
                                                res.json().then((prAllData: IPRSerie[]) => {
                                                    let target: IPRShip | undefined = undefined
                                                    prAllData.forEach(prSerie => {
                                                        if (target === undefined) {
                                                            const findShip = prSerie.ship.find(ship => (ship.name.toLowerCase() === (name as string).toLowerCase()))
                                                            if (findShip) target = findShip
                                                        }
                                                    })
                                                    if (target) {
                                                        setShipPR(target)
                                                    }
                                                    hideLoading()
                                                }).catch((err) => {
                                                    hideLoading()
                                                    openErrorDialog({
                                                        title: "เกิดข้อผิดพลาด",
                                                        message: err as any,
                                                        onClose: () => { }
                                                    })
                                                    console.error(err);
                                                })
                                            }
                                        }
                                    ).catch((err) => {
                                        hideLoading()
                                        openErrorDialog({
                                            title: "เกิดข้อผิดพลาด",
                                            message: err as any,
                                            onClose: () => { }
                                        })
                                        console.error(err);
                                    })
                                }
                            }).catch((err) => {
                                hideLoading()
                                openErrorDialog({
                                    title: "เกิดข้อผิดพลาด",
                                    message: err as any,
                                    onClose: () => { }
                                })
                                console.error(err);
                            })

                        }).catch((err) => {
                            hideLoading()
                            openErrorDialog({
                                title: "เกิดข้อผิดพลาด",
                                message: err as any,
                                onClose: () => { }
                            })
                            console.error(err);
                        })
                    }
                }
            ).catch((err) => {
                hideLoading()
                openErrorDialog({
                    title: "เกิดข้อผิดพลาด",
                    message: err as any,
                    onClose: () => { }
                })
                console.error(err);
            })
        } catch (err) {
            hideLoading()
            openErrorDialog({
                title: "เกิดข้อผิดพลาด",
                message: err as any,
                onClose: () => { }
            })
            console.error(err);
        }
    }

    useEffect(() => {
        if (name) {
            try {
                //reset Page
                setShip(undefined)
                setShipSameTag([])
                setDataMode("Normal")
                setShipPR(undefined)
                setNormalPage(1)
                setRetrofitPage(1)
                setFatesimPage(1)
                setGearPage(1)
                callAPI()
            }
            catch (err) {
                openErrorDialog({
                    title: "เกิดข้อผิดพลาด",
                    message: err as any,
                    onClose: () => { }
                })
                console.error(err);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    if (name == null) {
        return <>
            <Head>
                <title>ข้อมูลของ {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลของ " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    }

    if (!ship) {
        return <>
            <Head>
                <title>ข้อมูลของ {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลของ " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    }

    return (
        <>
            <Head>
                <title>ข้อมูลของ {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลของ " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="scroll-container" className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] max-w-[min(calc(100vw-30px),1890px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
                <div className="md:flex md:justify-between">
                    <div className="px-[1rem] min-w-[200px]">
                        <div className="flex p-[0.5rem] items-center gap-[0.5rem] w-full">
                            <h1 className="text-[1rem] md:text-[1.2rem] text-center text-white w-full">{ship.faction.short ? ship.faction.short : ""} {ship.name}</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-[200px] mx-auto md:mx-0">
                                <ShipCard ship={ship} retrofit={dataMode === "Retrofit" ? true : false} />
                            </div>
                        </div>
                        <div className="hidden 2xl:block mt-[1.2rem] text-white w-full text-[10px] md:text-[14px] lg:text-[16px]">
                            <table className="w-full mx-auto">
                                <thead>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">Rarity</th>
                                        <td className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">{RARITY_MAPING[dataMode !== "Retrofit" ? ship.rarity[0] : ship.rarity[ship.rarity.length - 1]]}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">Type</th>
                                        <td className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">{TYPE_MAPING[dataMode !== "Retrofit" ? ship.type[0] : ship.type[ship.type.length - 1]]}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">Faction</th>
                                        <td className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">{ship.faction.full}</td>
                                    </tr>
                                    {
                                        ship.faction.sub && <tr>
                                            <th className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">Sub Faction</th>
                                            <td className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff]">{ship.faction.sub}</td>
                                        </tr>
                                    }
                                    <tr>
                                        <td colSpan={2} className="text-left px-[1rem] py-[0.3rem] 2xl:py-[0.75rem] border border-[#ffffff] space-x-2 space-y-2">
                                            Tag: {ship.tag.map((tag) => {
                                                return <span key={tag} className="rounded-md bg-[#305B9C] inline-block p-2">
                                                    {tag}
                                                </span>
                                            })}
                                            <div className="text-xs">หมายเหตุ: สกิลส่วนใหญ่ในเกมจะทำงานตาม Tag ที่เกี่ยวข้อง</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="hidden xl:block mt-[1rem]">
                            {
                                dataMode !== "Retrofit" ? <>
                                    <img alt={ship.name + " Chibi"} src={ship.skins[0].chibi} className="mx-auto" />
                                </> : <>
                                    <img alt={ship.name + " Chibi"} src={ship.skins.find((skin) => (skin.name === "Retrofit"))?.chibi} className="mx-auto" />
                                </>
                            }
                        </div>
                    </div>
                    <div className="w-full max-w-[96%] mx-auto md:max-w-[80%] md:mx-0 mt-[1rem] md:mt-0">
                        <div className="grid grid-cols-2 gap-[0.5rem] md:gap-0 mb-[0.5rem] md:mb-0 md:flex pl-[0] md:pl-[2rem] items-end text-[#ffffff]">
                            <button className={`${dataMode === "Normal" ? "md:!h-[60px] bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"} rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.60rem] h-[45px] w-full md:w-max`}
                                onClick={() => {
                                    setDataMode("Normal")
                                }}>
                                <LuAppWindowMac color="#FFFFFF" size={24} />
                                Normal
                            </button>
                            {
                                (ship.skill_detail.retrofit.length !== 0) && <button className={`${dataMode === "Retrofit" ? "md:!h-[60px] bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"}  rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.60rem] h-[45px] w-full md:w-max`}
                                    onClick={() => {
                                        setDataMode("Retrofit")
                                    }}>
                                    <GiGearStickPattern color="#FFFFFF" size={24} />
                                    Retrofit
                                </button>
                            }
                            {
                                (ship.skill_detail.fate_simulation.length !== 0) && <button className={`${dataMode === "Fatesim" ? "md:!h-[60px] bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"}  rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.60rem] h-[45px] w-full md:w-max`}
                                    onClick={() => {
                                        setDataMode("Fatesim")
                                    }}>
                                    <GiAtom color="#FFFFFF" size={24} />
                                    Fate Simulation
                                </button>
                            }
                            {
                                (ship.gear.length !== 0) && <button className={`${dataMode === "Gear" ? "md:!h-[60px] bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"}  rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.60rem] h-[45px] w-full md:w-max`}
                                    onClick={() => {
                                        setDataMode("Gear")
                                    }}>
                                    <BsBookmarkStar color="#FFFFFF" size={20} />
                                    Gear แนะนำ
                                </button>
                            }
                            {
                                ship.review && <Link
                                    href={ship.review}
                                    legacyBehavior
                                >
                                    <a target="_blank">
                                        <button className={`bg-[#182D4D] hover:bg-[#2C528C] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px] rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.60rem] h-[45px] w-full md:w-max`}>
                                            <FaYoutube color="#FFFFFF" size={24} />
                                            คลิป Review
                                        </button>
                                    </a>
                                </Link>
                            }
                            {
                                ship.history && <Link
                                    href={ship.history}
                                    legacyBehavior
                                >
                                    <a target="_blank">
                                        <button className={`bg-[#182D4D] hover:bg-[#2C528C] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px] rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.60rem] h-[45px] w-full md:w-max`}>
                                            <FaBookBookmark color="#FFFFFF" size={20} />
                                            ประวัติเรือ
                                        </button>
                                    </a>
                                </Link>
                            }
                        </div>
                        <div className={`z-20 min-w-[100%] max-w-[100%] min-h-[50px] bg-[#305B9C] overflow-hidden shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 rounded-b-lg rounded-tr-lg rounded-tl-lg ${dataMode === "Normal" ? "" : ""}`}>
                            {
                                dataMode === "Normal" ? <>
                                    {ship.skill_detail.skill.map((skill, index) => {
                                        return <img key={skill} alt={ship.name + " Skill"} src={skill} className={`${index !== (normalPage - 1) ? "hidden" : ""} w-full duration-500 animate-slide-in-bottom`}>
                                        </img>
                                    })}
                                </> :
                                    dataMode === "Retrofit" ? <>
                                        {ship.skill_detail.retrofit.map((skill, index) => {
                                            return <img key={skill} alt={ship.name + " Retrofit"} src={skill} className={`${index !== (retofitPage - 1) ? "hidden" : ""} w-full duration-500 animate-slide-in-bottom`}>
                                            </img>
                                        })}
                                    </>
                                        :
                                        dataMode === "Fatesim" ? <>
                                            {ship.skill_detail.fate_simulation.map((skill, index) => {
                                                return <img key={skill} alt={ship.name + " Fate Simulation"} src={skill} className={`${index !== (fatesimPage - 1) ? "hidden" : ""} w-full duration-500 animate-slide-in-bottom`}>
                                                </img>
                                            })}
                                        </> :
                                            dataMode === "Gear" ? <>
                                                {
                                                    ship.gear.map((gear, index) => {
                                                        return <img key={gear} alt={ship.name + " Gear Recommend"} src={gear} className={`${index !== (fatesimPage - 1) ? "hidden" : ""} w-full duration-500 animate-slide-in-bottom`}>
                                                        </img>
                                                    })
                                                }
                                            </>
                                                : <></>
                            }
                        </div>
                        <div className="flex justify-center items-center mt-[0.75rem] text-[#ffffff]">
                            <div className="flex justify-center items-center w-[50px]">{
                                dataMode === "Normal" ? (normalPage > 1) && <button onClick={() => { setNormalPage(normalPage - 1) }} className="bg-[#305B9C] rotate-180 mr-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                    dataMode === "Retrofit" ? (retofitPage > 1) && <button onClick={() => { setRetrofitPage(retofitPage - 1) }} className="bg-[#305B9C] rotate-180 mr-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                        dataMode === "Fatesim" ? (fatesimPage > 1) && <button onClick={() => { setFatesimPage(fatesimPage - 1) }} className="bg-[#305B9C] rotate-180 mr-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                            dataMode === "Gear" ? (gearPage > 1) && <button onClick={() => { setGearPage(gearPage - 1) }} className="bg-[#305B9C] rotate-180 mr-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                                <></>
                            }</div>

                            {
                                dataMode === "Normal" ? (ship.skill_detail.skill.length > 1) && <>{"Page " + normalPage + "/" + ship.skill_detail.skill.length}</> :
                                    dataMode === "Retrofit" ? (ship.skill_detail.retrofit.length > 1) && <>{"Page " + retofitPage + "/" + ship.skill_detail.retrofit.length}</> :
                                        dataMode === "Fatesim" ? (ship.skill_detail.fate_simulation.length > 1) && <>{"Page " + fatesimPage + "/" + ship.skill_detail.fate_simulation.length}</> :
                                            dataMode === "Gear" ? (ship.gear.length > 1) && <>{"Page " + gearPage + "/" + ship.gear.length}</> :
                                                <></>
                            }
                            <div className="flex justify-center items-center w-[50px]">{
                                dataMode === "Normal" ? (normalPage < ship.skill_detail.skill.length) && <button onClick={() => { setNormalPage(normalPage + 1) }} className="bg-[#305B9C] ml-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                    dataMode === "Retrofit" ? (retofitPage < ship.skill_detail.retrofit.length) && <button onClick={() => { setRetrofitPage(retofitPage + 1) }} className="bg-[#305B9C] ml-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                        dataMode === "Fatesim" ? (fatesimPage < ship.skill_detail.fate_simulation.length) && <button onClick={() => { setFatesimPage(fatesimPage + 1) }} className="bg-[#305B9C] ml-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                            dataMode === "Gear" ? (gearPage < ship.skill_detail.fate_simulation.length) && <button onClick={() => { setGearPage(gearPage + 1) }} className="bg-[#305B9C] ml-[2rem] rounded-full shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]"><MdOutlineNavigateNext size={30} color="#ffffff" /></button> :
                                                <></>
                            }</div>
                        </div>
                    </div>
                </div>
                {
                    (shipSameTag.length > 0) && <div className={`z-20 min-w-[100%] max-w-[100%] min-h-[50px] bg-[#305B9C] overflow-hidden shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 rounded-b-lg rounded-tr-lg rounded-tl-lg mt-[1rem]`}>
                        {
                            ship.tag.map(thisShipTag => {
                                if (shipSameTag.filter(shipInSameTag => shipInSameTag.tag.includes(thisShipTag)).length > 0) {
                                    return <>
                                        <h4 className="text-[1rem] md:text-[1.2rem] text-center text-white w-full pt-[0.75rem]">เรือที่มี Tag: {thisShipTag}</h4>
                                        <div className="px-1 grid justify-center grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-[0.5rem] md:gap-[1rem] mt-[1.5rem]">
                                            {
                                                shipSameTag.filter(shipInSameTag => shipInSameTag.tag.includes(thisShipTag)).map(
                                                    tagFilterShip => {
                                                        return <div key={ship.name + "_" + thisShipTag} className={"w-full h-full duration-500 animate-slide-in-bottom"}>
                                                            <ShipInGrid ship={tagFilterShip} />
                                                        </div>
                                                    }
                                                )
                                            }
                                        </div>
                                    </>
                                }
                            })
                        }
                    </div>
                }
                {
                    shipPR && <div className="mt-[1rem] rounded-lg overflow-hidden w-full shadow-[0_0_5px_2px_rgba(0,150,255,0.85)]">
                        <div className="bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/MainTwilightBG.webp')]">
                            <div className="w-full h-full bg-black/[0.8] p-[0.5rem] md:p-[1rem] overflow-y-auto text-[#ffffff]">
                                <div className="lg:flex mt-[1rem] lg:mt-[2rem] lg:pl-[4rem]">
                                    <h4 className="text-center lg:text-left text-[18px] lg:text-[24px] whitespace-nowrap">เงื่อนไขปลดล็อกการวิจัย</h4>
                                    <span className="hidden lg:block pl-[0.5rem] pr-[2rem] text-[24px]">:</span>
                                    <h4 className="text-center lg:text-left text-[14px] lg:text-[22px]">{shipPR.unlock}</h4>
                                </div>
                                <div className="border-t border-[#99D9EA] mt-[0.5rem] lg:mt-[1rem] w-[90%] mx-auto">
                                    <h4 className="text-center lg:text-left mt-[0.5rem] lg:mt-[1rem] text-[18px] lg:text-[24px] lg:pl-[4rem] whitespace-nowrap">ขั้นตอนการวิจัย</h4>
                                    <div>
                                        {
                                            shipPR.quest.map((quest, index) => {
                                                return <div key={index} className="flex gap-[20px] mt-[0.5rem] text-[14px] lg:text-[22px] lg:pl-[8rem]">
                                                    <p>{index + 1}.</p>
                                                    <p>{quest}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    ship.meta_showdown && <div className="mt-[1rem] rounded-lg overflow-hidden w-full shadow-[0_0_5px_2px_rgba(0,150,255,0.85)]">
                        <div className="bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/BG_Fort_night.png')]">
                            <div className="w-full h-full bg-black/[0.8] p-[0.5rem] md:p-[1rem] overflow-y-auto text-[#ffffff]">
                                <h4 className="mt-[1rem] text-center text-[18px] md:text[24] lg:text-[30px] whitespace-nowrap">ข้อมูลบอส</h4>
                                <div className="border-t border-[#99D9EA] mt-[0.5rem] lg:mt-[1rem] w-[90%] mx-auto">
                                    <h4 className="text-center lg:text-left mt-[0.5rem] lg:mt-[1rem] text-[18px] lg:text-[24px] lg:pl-[4rem] whitespace-nowrap">Skill และ Mechanic</h4>
                                    {
                                        ship.meta_showdown.map((skill, index) => {
                                            return <div key={index} className="mt-[1rem]">
                                                <h4 className="text-[14px] lg:text-[22px] lg:pl-[8rem]">{skill.skill_name}</h4>
                                                <p className="text-[12px] lg:text-[18px] lg:pl-[7rem] mt-[0.7rem]">{skill.skill_detail}</p>
                                                {skill.skill_image != null && (
                                                    <img className="max-w-[300px] max-h-[200px] mx-auto mb-[10px] mt-[5px]" src={skill.skill_image} alt={"Boss skill " + index} ></img>
                                                )}
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    (ship.aoa.length > 0 || ship.note_skill.length > 0 || ship.note.length > 0) && <div className="mt-[1rem] rounded-lg overflow-hidden w-full shadow-[0_0_5px_2px_rgba(0,150,255,0.85)]">
                        <div className="bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/Bg_skill_info.png')]">
                            <div className="w-full h-full bg-black/[0.8] p-[0.5rem] md:p-[1rem] overflow-y-auto text-[#ffffff]">
                                {
                                    (ship.aoa.length > 0) && <div className="w-full h-full">
                                        <h4 className="text-center mt-[0.5rem] lg:mt-[1rem] text-[24px] lg:text-[36px] whitespace-nowrap">All Out Assault</h4>
                                        <div className="grid grid-col-1 gap-[2rem]">
                                            {ship.aoa.map((aoa, index) => {
                                                return <div key={index} className="w-full h-full grid grid-col-1 gap-[0.5rem]">
                                                    <div className="flex justify-center">
                                                        {aoa.image && <>
                                                            {
                                                                aoa.image.includes(".mp4") ? <video className="max-w-11/12 w-[900px]" autoPlay loop muted>
                                                                    <source src={aoa.image} type="video/mp4" />
                                                                </video> :
                                                                    <img alt={ship.name + " All Out Assault"} src={aoa.image}></img>
                                                            }
                                                        </>}
                                                    </div>
                                                    {aoa.desc && <div className="flex justify-center">
                                                        <div className="p-[1rem] rounded-lg bg-[#1A2042] bg-opacity-90 text-[12px] md:text-[16px] lg:text-[20px] shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]">
                                                            <CutString text={aoa.desc} />
                                                        </div>
                                                    </div>}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                }
                                {
                                    (ship.note_skill.length > 0) && <div className="w-full h-full">
                                        <h4 className="text-center mt-[0.5rem] lg:mt-[1rem] text-[24px] lg:text-[36px] whitespace-nowrap">Skill Note</h4>
                                        <div className="grid grid-col-1 gap-[2rem]">
                                            {ship.note_skill.map((skill, index) => {
                                                return <div key={index} className="w-full h-full grid grid-col-1 gap-[0.5rem]">
                                                    <div className="flex justify-center">
                                                        {skill.image && <>
                                                            {
                                                                skill.image.includes(".mp4") ? <video className="max-w-11/12 w-[900px]" autoPlay loop muted>
                                                                    <source src={skill.image} type="video/mp4" />
                                                                </video> :
                                                                    <img alt={ship.name + " Skill"} src={skill.image}></img>
                                                            }
                                                        </>}
                                                    </div>
                                                    {skill.desc && <div className="flex justify-center">
                                                        <div className="p-[1rem] rounded-lg bg-[#1A2042] bg-opacity-90 text-[12px] md:text-[16px] lg:text-[20px] shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]">
                                                            <CutString text={skill.desc} />
                                                        </div>
                                                    </div>}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                }
                                {
                                    (ship.note.length > 0) && <div className="w-full h-full">
                                        <h4 className="text-center mt-[0.5rem] lg:mt-[1rem] text-[24px] lg:text-[36px] whitespace-nowrap">Player Note</h4>
                                        <div className="grid grid-col-1 gap-[2rem]">
                                            {ship.note.map((note, index) => {
                                                return <div key={index} className="w-full h-full grid grid-col-1 gap-[0.5rem]">
                                                    <div className="flex justify-center">
                                                        {note.image && <>
                                                            {
                                                                note.image.includes(".mp4") ? <video className="max-w-11/12 w-[900px]" autoPlay loop muted>
                                                                    <source src={note.image} type="video/mp4" />
                                                                </video> :
                                                                    <img alt={ship.name + " Note"} src={note.image}></img>
                                                            }
                                                        </>}
                                                    </div>
                                                    {note.desc && <div className="flex justify-center">
                                                        <div className="p-[1rem] rounded-lg bg-[#1A2042] bg-opacity-90 text-[12px] md:text-[16px] lg:text-[20px] shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]">
                                                            <CutString text={note.desc} />
                                                        </div>
                                                    </div>}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
                <br></br>
            </div>
            <div className="fixed bottom-[10px] left-[10px]">
                <button className="rounded-lg p-[0.35rem] md:p-[0.75rem] text-[#ffffff] text-[10px] md:text-[12px] lg:text-[14px] bg-[#2E4A80] bg-opacity-90 shadow-[0_0_7px_3px_rgba(0,150,255,0.85)]"
                    onClick={() => {
                        localStorage.setItem("secretary", ship.skins[0].image)
                        setTimeout(() => { window.location.reload() }, 500)
                    }}>
                    ตั้งเป็นเรือเลขา
                </button>
            </div>
        </>
    );
}
