import { useDialog } from "@/components/dialog";
import CutString from "@/components/functional/cutstring";
import { useLoading } from "@/components/overlay/loading";
import ShipInGrid from "@/components/ship/shipingrid";
import { IEvent } from "models/ievent";
import { ShipV2 } from "models/shipv2";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { GiNotebook, GiStabbedNote, GiWantedReward } from "react-icons/gi";

export default function Event() {
    const router = useRouter();
    const { name } = router.query;

    const [event, setEvent] = useState<IEvent>()
    const [ships, setShips] = useState<ShipV2[]>([]);
    const [activeTab, setActiveTab] = useState<number>(0)

    const { showLoading, hideLoading } = useLoading()
    const { openErrorDialog } = useDialog()

    const callAPI = async () => {
        try {
            showLoading()
            fetch("/api/v2/event").then(
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
                        res.json().then((loaddata: IEvent[]) => {
                            const findEvent = loaddata.find(event => (event.name.toLocaleLowerCase() === (name as string).toLowerCase()))
                            if (findEvent) {
                                setEvent(findEvent)
                                const queueShip: Promise<Response>[] = []
                                findEvent.ships?.forEach(ship => {
                                    queueShip.push(fetch("/api/v2/ship/" + ship.name.toLowerCase()))
                                })
                                if (queueShip.length > 0) {
                                    Promise.all([...queueShip]).then(resArray => {
                                        const shipArray: ShipV2[] = []
                                        const recursiveWithIndex = (resA: Response[], index: number) => {
                                            resA[index].json().then((loaddata: ShipV2) => {
                                                shipArray.push(loaddata)
                                                if (index + 1 < resA.length) {
                                                    recursiveWithIndex(resArray, index + 1)
                                                }
                                                else if ((index + 1) === resA.length) {
                                                    setShips(shipArray)
                                                    hideLoading()
                                                }
                                            })
                                        }
                                        if (resArray.length > 0) recursiveWithIndex(resArray, 0)
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
                                else {
                                    hideLoading()
                                }
                            }
                            else {
                                hideLoading()
                                openErrorDialog({
                                    title: "เกิดข้อผิดพลาด " + res.status,
                                    message: "โหลดข้อมูลไม่สำเร็จ",
                                    onClose: () => { }
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
            callAPI()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    if (name == null) {
        return <>
            <Head>
                <title>ข้อมูลกิจกรรม {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลกิจกรรม " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    }

    if (!event) {
        <>
            <Head>
                <title>ข้อมูลกิจกรรม {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลกิจกรรม " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    }

    return (
        <>
            <Head>
                <title>ข้อมูลกิจกรรม {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลกิจกรรม " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="scroll-container" className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] max-w-[min(calc(100vw-30px),1890px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
                <div className="w-full max-w-[100%] min-h-[50px] bg-[#305B9C] overflow-hidden shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_3px_2px_#305B9C] bg-opacity-80 rounded-lg">
                    <img alt={event?.name} src={event?.banner} className="w-full"></img>
                </div>
                <div className="mt-[3vh]">
                    <h1 className="text-center md:text-[18px] lg:text-[22px] xl:text-[28px] text-[#ffffff]">กิจกรรม {event?.name}</h1>
                    <div className="py-[1vh] flex justify-center gap-[0.5rem] items-center">
                        <FaClock size={14} color={"#ffffff"} />
                        <p className="text-center text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] text-[#ffffff]">
                            ระยะเวลากิจกรรม
                        </p>
                    </div>
                    <p className="text-center text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] text-[#ffffff]">{event?.time}</p>
                </div>
                {(ships.length !== 0) && <div className="mt-[3vh] p-[1vw] bg-[#305B9C] overflow-hidden shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_3px_2px_#305B9C] bg-opacity-80 rounded-lg">
                    <div className="px-1 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-[0.5rem] md:gap-[1rem]">
                        {
                            ships.map(ship => {
                                return <div key={ship.name} className={"w-full h-full duration-500 animate-slide-in-bottom"}>
                                    <ShipInGrid ship={ship} retrofit={event?.ships?.find((es)=>(es.name.toLowerCase() === ship.name.toLowerCase()))?.retrofit}/>
                                </div>
                            })
                        }
                    </div>
                </div>}
                <div className="mt-[3vh]">
                    <div className="grid grid-cols-2 gap-[0.5rem] md:gap-0 mb-[0.5rem] md:mb-0 md:flex pl-[0] md:pl-[2rem] items-end text-[#ffffff]">
                        <button className={`${activeTab === 0 ? "bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px] md:!h-[60px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"} rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.45rem] h-[45px] w-full md:w-max`}
                            onClick={() => {
                                setActiveTab(0)
                            }}>
                            <BsFillBookmarkStarFill size={16} color="#ffffff" />ข้อมูลสำคัญ
                        </button>
                        <button className={`${activeTab === 1 ? "bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px] md:!h-[60px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"} rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.45rem] h-[45px] w-full md:w-max`}
                            onClick={() => {
                                setActiveTab(1)
                            }}>
                            <GiStabbedNote size={16} color="#ffffff" />บทนำ
                        </button>
                        <button className={`${activeTab === 2 ? "bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px] md:!h-[60px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"} rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.45rem] h-[45px] w-full md:w-max`}
                            onClick={() => {
                                setActiveTab(2)
                            }}>
                            <GiWantedReward size={16} color="#ffffff" /> เควสและของรางวัล
                        </button>
                        <button className={`${activeTab === 3 ? "bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px] md:!h-[60px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"} rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.45rem] h-[45px] w-full md:w-max`}
                            onClick={() => {
                                setActiveTab(3)
                            }}>
                            <GiNotebook size={16} color="#ffffff" />รวมวิธีเล่นกิจกรรม
                        </button>
                    </div>
                    {event && <div className={`w-full h-full min-w-[100%] max-w-[100%] min-h-[50px] bg-[#305B9C] overflow-hidden shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 rounded-b-lg rounded-tr-lg rounded-tl-lg bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/BG_Fort_night.png')] ${activeTab === 0 ? "" : ""}`}>
                        <div className="w-full h-full bg-black/[0.8] p-[3vw] md:p-[4vw] text-[#ffffff]">
                            {
                                (activeTab === 0) && <>
                                    {
                                        event.note ?
                                            <>
                                                <h3 className="text-center md:text-left text-[16px] md:text-[20px] lg:text-[28px]">ผู้เล่นใหม่</h3>
                                                {
                                                    event.note.beginner.map((note) => {
                                                        return note ? <div className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px] flex gap-[0.5rem]"><span>➤</span><CutString text={note} /></div> : <p className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px]">ไม่พบข้อมูล</p>
                                                    })
                                                }
                                                <h3 className="text-center md:text-left text-[16px] md:text-[20px] lg:text-[28px] mt-[2rem] border-t pt-[1rem]">ผู้เล่นเก่า</h3>
                                                {
                                                    event.note.veteran.map((note) => {
                                                        return note ? <div className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px] flex gap-[0.5rem]"><span>➤</span><CutString text={note} /></div> : <p className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px]">ไม่พบข้อมูล</p>
                                                    })
                                                }
                                                <h3 className="text-center md:text-left text-[16px] md:text-[20px] lg:text-[28px] mt-[2rem] border-t pt-[1rem]">สรุปรวม</h3>
                                                {
                                                    event.note.summary.map((note) => {
                                                        return note ? <div className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px] flex gap-[0.5rem]"><span>➤</span><CutString text={note} /></div> : <p className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px]">ไม่พบข้อมูล</p>
                                                    })
                                                }
                                            </>
                                            :
                                            event.noteV2 ?
                                                <>
                                                    <h3 className="text-center md:text-left text-[16px] md:text-[20px] lg:text-[28px]">ผู้เล่นใหม่</h3>
                                                    {
                                                        event.noteV2.beginner.map((note) => {
                                                            return note ?
                                                                <div className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px] flex gap-[0.5rem]">
                                                                    <div className="md:flex md:gap-[2rem]">
                                                                        <div className="flex gap-[0.75rem]">
                                                                            <span>➤</span>
                                                                            {
                                                                                note.desc && <div><CutString text={note.desc} /></div>
                                                                            }
                                                                        </div>
                                                                        {note.image && <>
                                                                            {
                                                                                note.image.includes(".mp4") ? <video className="mt-[0.5rem] md:mt-0 mx-auto md:mx-[1vw] max-w-[11/12] w-[300px] max-h-[100px]" autoPlay loop muted>
                                                                                    <source src={note.image} type="video/mp4" />
                                                                                </video> :
                                                                                    <img className="mt-[0.5rem] md:mt-0 mx-auto md:mx-[1vw] max-h-[50px]" alt={"Note"} src={note.image}></img>
                                                                            }
                                                                        </>}
                                                                    </div>
                                                                </div> : <p className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px]">ไม่พบข้อมูล</p>
                                                        })
                                                    }
                                                    <h3 className="text-center md:text-left text-[16px] md:text-[20px] lg:text-[28px] mt-[2rem] border-t pt-[1rem]">ผู้เล่นเก่า</h3>
                                                    {
                                                        event.noteV2.veteran.map((note) => {
                                                            return note ?
                                                                <div className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px] flex gap-[0.5rem]">
                                                                    <div className="md:flex md:gap-[2rem]">
                                                                        <div className="flex gap-[0.75rem]">
                                                                            <span>➤</span>
                                                                            {
                                                                                note.desc && <div><CutString text={note.desc} /></div>
                                                                            }
                                                                        </div>
                                                                        {note.image && <>
                                                                            {
                                                                                note.image.includes(".mp4") ? <video className="mt-[0.5rem] md:mt-0 mx-auto md:mx-[1vw] max-w-[11/12] w-[300px] max-h-[100px]" autoPlay loop muted>
                                                                                    <source src={note.image} type="video/mp4" />
                                                                                </video> :
                                                                                    <img className="mt-[0.5rem] md:mt-0 mx-auto md:mx-[1vw] max-h-[50px]" alt={"Note"} src={note.image}></img>
                                                                            }
                                                                        </>}
                                                                    </div>
                                                                </div> : <p className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px]">ไม่พบข้อมูล</p>
                                                        })
                                                    }
                                                    <h3 className="text-center md:text-left text-[16px] md:text-[20px] lg:text-[28px] mt-[2rem] border-t pt-[1rem]">สรุปรวม</h3>
                                                    {
                                                        event.noteV2.summary.map((note) => {
                                                            return note ?
                                                                <div className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px] flex gap-[0.5rem]">
                                                                    <div className="md:flex md:gap-[2rem]">
                                                                        <div className="flex gap-[0.75rem]">
                                                                            <span>➤</span>
                                                                            {
                                                                                note.desc && <div><CutString text={note.desc} /></div>
                                                                            }
                                                                        </div>
                                                                        {note.image && <>
                                                                            {
                                                                                note.image.includes(".mp4") ? <video className="mt-[0.5rem] md:mt-0 mx-auto md:mx-[1vw] max-w-[11/12] w-[300px] max-h-[100px]" autoPlay loop muted>
                                                                                    <source src={note.image} type="video/mp4" />
                                                                                </video> :
                                                                                    <img className="mt-[0.5rem] md:mt-0 mx-auto md:mx-[1vw] max-h-[50px]" alt={"Note"} src={note.image}></img>
                                                                            }
                                                                        </>}
                                                                    </div>
                                                                </div> : <p className="pl-[3vw] mt-[1rem] text-[12px] md:text-[16px] lg:text-[20px]">ไม่พบข้อมูล</p>
                                                        })
                                                    }
                                                </>
                                                :
                                                <>
                                                    <p className="text-[24px] text-center">ไม่พบข้อมูล</p>
                                                </>
                                    }
                                </>
                            }
                            {
                                (activeTab === 1) && <>
                                    {
                                        event.lore ?
                                            <>{
                                                event.lore.length > 0 ? <>
                                                    {event.lore.map((note, index) => {
                                                        return <div key={index} className="w-full h-full grid grid-col-1 gap-[0.5rem]">
                                                            <div className="flex justify-center">
                                                                {note.image && <>
                                                                    {
                                                                        note.image.includes(".mp4") ? <video className="max-w-11/12 w-[900px]" autoPlay loop muted>
                                                                            <source src={note.image} type="video/mp4" />
                                                                        </video> :
                                                                            <img alt={"Note"} src={note.image}></img>
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
                                                </> :
                                                    <><p className="text-[24px] text-center">ไม่พบข้อมูล</p></>
                                            }
                                            </>
                                            : <>
                                                <p className="text-[24px] text-center">ไม่พบข้อมูล</p>
                                            </>
                                    }
                                </>
                            }
                            {
                                (activeTab === 2) && <>
                                    {
                                        event.special ?
                                            <div className="grid grid-cols-2 xl:grid-cols-2 gap-[1vw]">
                                                {
                                                    event.special.map((item,index)=>{
                                                        return item? <div className="flex rounded-lg overflow-hidden bg-[#182D4D] p-[0.5rem] xl:p-[1rem] gap-[0.5rem]">
                                                            {item.blob &&<img alt={item.title} src={item.blob} className="my-[0.5rem] h-full max-h-[40px] md:max-h-[60px] lg:max-h-[100px]"></img>}
                                                            <div className="w-full">
                                                                {item.title &&<p className="text-[10px] md:text-[16px] lg:text-[20px] pt-[0.5rem]">{item.title}</p>}
                                                                {item.text &&<><div className="w-full border-t my-[0.5rem]"></div>
                                                                <p className="text-[8px] md:text-[14px] lg:text-[18px]">{item.text}</p></>}
                                                            </div>
                                                        </div>:<div className="h-[1rem]"></div>
                                                    })
                                                }
                                            </div>
                                            : <>
                                                <p className="text-[24px] text-center">ไม่พบข้อมูล</p>
                                            </>
                                    }
                                </>
                            }
                            {
                                (activeTab === 3) && <>
                                    {
                                        event.guideV2 ?
                                            <>{
                                                event.guideV2.length > 0 ? <>
                                                    {event.guideV2.map((note, index) => {
                                                        return <div key={index} className="w-full h-full grid grid-col-1 gap-[0.5rem]">
                                                            <div className="flex justify-center">
                                                                {note.image && <>
                                                                    {
                                                                        note.image.includes(".mp4") ? <video className="max-w-11/12 w-[900px]" autoPlay loop muted>
                                                                            <source src={note.image} type="video/mp4" />
                                                                        </video> :
                                                                            <img alt={"Note"} src={note.image}></img>
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
                                                </> :
                                                    <><p className="text-[24px] text-center">ไม่พบข้อมูล</p></>
                                            }
                                            </>
                                            : <>
                                                <p className="text-[24px] text-center">ไม่พบข้อมูล</p>
                                            </>
                                    }
                                </>
                            }
                        </div>
                    </div>}
                </div>
            </div >
        </>
    )
}