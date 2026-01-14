import { useDialog } from "@/components/dialog";
import { useLoading } from "@/components/overlay/loading";
import { IGuide } from "models/iguide";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllEventList() {
    const [guides, setGuides] = useState<IGuide[]>([]);

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
                            setGuides(loaddata)
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
        callAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Head>
                <title>ข้อมูลไกด์ทั้งหมด | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลไกด์ทั้งหมด"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="scroll-container" className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] max-w-[min(calc(100vw-30px),1890px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2vw] p-[1vw]">
                    <div className="rounded-lg hover:scale-[1.02] hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300 overflow-hidden">
                        <Link href={"/guide/glossary"}>
                            <img alt="All Ships Data" src="/images/btn/glossary-btn.png" className="w-full h-full">
                  </img>
                        </Link>
                    </div>
                    {
                        guides.map((guide, index) => {
                            return <div key={index} className="rounded-lg hover:scale-[1.02] hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300 overflow-hidden"><Link href={"/guide/gameplay/" + guide.name}>
                                <img src={guide.button} alt={guide.name} className="w-full h-full">
                                </img>
                            </Link></div>
                        })
                    }
                </div>
            </div>
        </>
    )
}