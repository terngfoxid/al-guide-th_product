import { useDialog } from "@/components/dialog";
import CutString from "@/components/functional/cutstring";
import { useLoading } from "@/components/overlay/loading";
import { IGuide } from "models/iguide";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { GiNotebook, GiStabbedNote } from "react-icons/gi";

export default function Event() {
    const router = useRouter();
    const { name } = router.query;

    const [guide, setGuide] = useState<IGuide>()
    const [activeTab, setActiveTab] = useState<number>(0)

    const { showLoading, hideLoading } = useLoading()
    const { openErrorDialog } = useDialog()

    const callAPI = async () => {
        try {
            showLoading()
            fetch("/api/v2/guide").then(
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
                        res.json().then((loaddata: IGuide[]) => {
                            const findGuide = loaddata.find(event => (event.name.toLocaleLowerCase() === (name as string).toLowerCase()))
                            if (findGuide) {
                                setGuide(findGuide)
                                hideLoading()
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
                <title>ข้อมูลไกด์ {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลไกด์ " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    }

    if (!guide) {
        <>
            <Head>
                <title>ข้อมูลไกด์ {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลไกด์ " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    }

    return (
        <>
            <Head>
                <title>ข้อมูลไกด์ {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลไกด์ " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="scroll-container" className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] max-w-[min(calc(100vw-30px),1890px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
                <div className="mt-[3vh]">
                    <div className="grid grid-cols-2 gap-[0.5rem] md:gap-0 mb-[0.5rem] md:mb-0 md:flex pl-[0] md:pl-[2rem] items-end text-[#ffffff]">
                        <button className={`${activeTab === 0 ? "bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px] md:!h-[60px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"} rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.45rem] h-[45px] w-full md:w-max`}
                            onClick={() => {
                                setActiveTab(0)
                            }}>
                            <GiNotebook size={16} color="#ffffff" />ไกด์
                        </button>
                        <button className={`${activeTab === 1 ? "bg-[#305B9C] p-[0.5rem] lg:p-[0.8rem] text-[14px] lg:text-[18px] md:!h-[60px]" : "bg-[#182D4D] p-[0.3rem] lg:p-[0.6rem] text-[12px] lg:text-[16px]"} rounded-md md:rounded-b-none md:rounded-t-lg shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 !duration-300 flex items-center gap-[0.45rem] h-[45px] w-full md:w-max`}
                            onClick={() => {
                                setActiveTab(1)
                            }}>
                            <FaYoutube color="#FFFFFF" size={16} />Video
                        </button>
                    </div>
                    {guide && <div className={`w-full h-full min-w-[100%] max-w-[100%] min-h-[50px] bg-[#305B9C] overflow-hidden shadow-[0px_0px_1px_1px_#305B9C,0px_-0px_1px_1px_#305B9C] bg-opacity-80 rounded-b-lg rounded-tr-lg rounded-tl-lg bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/BG_Fort_night.png')] ${activeTab === 0 ? "" : ""}`}>
                        <div className="w-full h-full bg-black/[0.8] p-[3vw] md:p-[4vw] text-[#ffffff] grid grid-cols-1 gap-[2rem]">
                            {
                                (activeTab === 0) && <>
                                    {
                                        guide.guideV2 ?
                                            <>{
                                                guide.guideV2.length > 0 ? <>
                                                    {guide.guideV2.map((note, index) => {
                                                        return <div key={index} className="w-full h-full grid grid-col-1 gap-[0.5rem] mb-[2rem]">
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
                                                                <div className="p-[1rem] rounded-lg bg-[#1A2042] bg-opacity-90 text-[12px] md:text-[16px] lg:text-[20px] shadow-[0_0_2px_1px_rgba(0,150,255,0.85)] flex items-center">
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
                                (activeTab === 1) && <>
                                    {
                                        guide.youtube ?
                                            <>{
                                                guide.youtube.length > 0 ? <>
                                                    {guide.youtube.map((video, index) => {
                                                        return <div key={index} className="w-full h-full grid grid-col-1 gap-[0.5rem]">
                                                            {video.name && <div className="flex justify-center">
                                                                <div className="p-[1rem] rounded-lg bg-[#1A2042] bg-opacity-90 text-[12px] md:text-[16px] lg:text-[20px] shadow-[0_0_2px_1px_rgba(0,150,255,0.85)]">
                                                                    <CutString text={video.name} />
                                                                </div>
                                                            </div>}
                                                            <div className="flex justify-center">
                                                                {video.url && <iframe
                                                                    className="aspect-video w-full rounded"
                                                                    src={video.url}
                                                                    title="YouTube video player"
                                                                    allowFullScreen
                                                                ></iframe>}
                                                            </div>
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