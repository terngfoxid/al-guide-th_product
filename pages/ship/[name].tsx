import BackToTop from "@/components/overlay/backtotop";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Ship() {
    const router = useRouter();
    const { name } = router.query;

    useEffect(() => {
        try {

        } catch (err) {
            
        }
    }, []);

    if (name == null) {
        return <>
            <Head>
                <title>ข้อมูลของ {name} | Azur Lane Guide TH</title>
                <meta name="description" content={"ข้อมูลของ " + name} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    } else {
        return (
            <>
                <Head>
                    <title>ข้อมูลของ {name} | Azur Lane Guide TH</title>
                    <meta name="description" content={"ข้อมูลของ " + name} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div id="scroll-container" className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] lg:max-w-[calc(100vw-30px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
                    <div className="flex p-[0.5rem] items-center gap-[0.5rem]">
                        <h1 className="text-[1.7rem] text-left text-white">ค้นหาเรือ </h1>
                    </div>
                </div>
            </>
        );
    }


}