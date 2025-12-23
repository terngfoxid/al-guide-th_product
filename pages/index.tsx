
import { useDialog } from "@/components/dialog";
import { useLoading } from "@/components/overlay/loading";
import { IEvent } from "models/ievent";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<IEvent[]>([]);

  const [webState, setWebState] = useState(0);

  const { showLoading, hideLoading } = useLoading()
  const { openErrorDialog } = useDialog()

  const callAPI = async () => {
    try {
      showLoading()
      const res = await fetch("/api/v2/event");
      setWebState(res.status)
      if (!res.ok) {
        openErrorDialog({
          title: "เกิดข้อผิดพลาด " + res.status,
          message: "โหลดข้อมูลไม่สำเร็จ",
          onClose: () => { }
        })
      }
      else {
        res.json().then((loaddata: IEvent[]) => {
          setEvents(loaddata);
          hideLoading()
        })
      }
    } catch (err) {
      hideLoading()
      openErrorDialog({
        title: "เกิดข้อผิดพลาด",
        message: err as any,
        onClose: () => { }
      })
      console.error(err);
    }
  };

  useEffect(() => {
    callAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (webState === 0 || events.length === 0) {
    return <></>
  }

  const lastestEvent = events.find((event, index) => (event._priority === 1))
  const secondEvent = events.find((event, index) => (event._priority === 0))

  return (
    <>
      <NextSeo
        title="อาซูร์เลนไกด์ภาษาไทย | Azur Lane Guide TH"
        description="ยินดีต้อนรับเข้าสู่ Azur Lane Guide TH ( อาซูร์เลน ไกด์ ภาษาไทย) เว็บไซต์ที่จัดทำขึ้นเพื่อสนับสนุนผู้การเกม Azur Lane ชาวไทย โดยเนื้อหาจะประกอบไปด้วย ข้อมูลสกิลของสาวเรือแปลไทย ไกด์ และคำแนะนำในเรื่องต่างๆอย่าง เช่น เกียร์สวมใส่ นอกจากนี้ยังมีทั้ง คลิปรีวิวเรือ และ ประวัติของเรือบางลำ เรียบเรียงมาให้ได้อ่านกันด้วยน๊าา \^-^/"
        openGraph={{
          url: "https://al-guide-th.com",
          title: "อาซูร์เลนไกด์ภาษาไทย | Azur Lane Guide TH",
          description:
            "ยินดีต้อนรับเข้าสู่ Azur Lane Guide TH ( อาซูร์เลน ไกด์ ภาษาไทย) เว็บไซต์ที่จัดทำขึ้นเพื่อสนับสนุนผู้การเกม Azur Lane ชาวไทย โดยเนื้อหาจะประกอบไปด้วย ข้อมูลสกิลของสาวเรือแปลไทย ไกด์ และคำแนะนำในเรื่องต่างๆอย่าง เช่น เกียร์สวมใส่ นอกจากนี้ยังมีทั้ง คลิปรีวิวเรือ และ ประวัติของเรือบางลำ เรียบเรียงมาให้ได้อ่านกันด้วยน๊าา ^-^/",
        }}
      />
      <div id="scroll-container" className={`hide-scrollbar duration-500 animate-slide-in-bottom max-h-[100%] overflow-y-scroll mx-[10px] sm:max-w-[45vw] lg:max-w-[40vw] xl:max-w-[40vw] 2xl:max-w-[33vw] p-[1rem] rounded-lg`}>
        <div className="h-full">
          <div className="w-[96%] mx-auto">
            <div className="grid grid-cols-2 gap-[1rem]">
              <div className="col-span-2 hover:scale-105">
                <Link className="w-full h-full" href="/ship">
                  <img alt="All Ships Data" src="/images/btn/ship_info_1200x600.png" className="w-full h-full">
                  </img>
                </Link>
              </div>
              <div className="col-span-2 hover:scale-105">
                <Link className="w-full h-full" href={"/event/" + (lastestEvent?.name)}>
                  <img alt={lastestEvent?.name} src={lastestEvent?.button} className="w-full h-full">
                  </img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
