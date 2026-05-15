
import { useDialog } from "@/components/dialog";
import { useLoading } from "@/components/overlay/loading";
import { IEvent } from "models/ievent";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<IEvent[]>([]);

  const [webState, setWebState] = useState(0);
  const [cssCard, setCssCard] = useState<string[]>([
    // CENTER
    "absolute top-1/2 left-1/2 w-[50vw] max-w-[300px] aspect-[1/1.7] bg-lime-400 rounded-xl transition-all duration-700 ease-out will-change-transform shadow-2xl z-30 [transform:translate(-50%,-50%)_translateX(0px)_translateZ(160px)_rotateY(0deg)_scale(1)]",

    // LEFT 1
    "absolute top-1/2 left-1/2 w-[50vw] max-w-[300px] aspect-[1/1.7] bg-cyan-400 rounded-xl transition-all duration-700 ease-out will-change-transform shadow-xl z-20 [transform:translate(-50%,-50%)_translateX(18vw)_translateZ(110px)_rotateY(0deg)_scale(0.92)]",

    // LEFT 2
    "absolute top-1/2 left-1/2 w-[50vw] max-w-[300px] aspect-[1/1.7] bg-pink-400 rounded-xl transition-all duration-700 ease-out will-change-transform shadow-lg opacity-90 z-10 [transform:translate(-50%,-50%)_translateX(-35vw)_translateZ(70px)_rotateY(0deg)_scale(0.84)]",

    // RIGHT 1
    "absolute top-1/2 left-1/2 w-[50vw] max-w-[300px] aspect-[1/1.7] bg-blue-400 rounded-xl transition-all duration-700 ease-out will-change-transform shadow-xl z-20 [transform:translate(-50%,-50%)_translateX(-18vw)_translateZ(110px)_rotateY(0deg)_scale(0.92)]",

    // RIGHT 2
    "absolute top-1/2 left-1/2 w-[50vw] max-w-[300px] aspect-[1/1.7] bg-orange-400 rounded-xl transition-all duration-700 ease-out will-change-transform shadow-lg opacity-90 z-10 [transform:translate(-50%,-50%)_translateX(35vw)_translateZ(70px)_rotateY(0deg)_scale(0.84)]",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const swarpCardByIndex = (firstCardIndex: number, secondCardIndex: number) => {
    setCssCard((prev) => {
      const next = [...prev];

      [next[firstCardIndex], next[secondCardIndex]] = [
        next[secondCardIndex],
        next[firstCardIndex],
      ];

      return next;
    });
    setCurrentIndex(secondCardIndex)
  }

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
      {false && <div id="scroll-container" className={`hide-scrollbar duration-500 animate-slide-in-bottom max-h-[100%] overflow-y-scroll mx-[10px] sm:max-w-[45vw] lg:max-w-[40vw] xl:max-w-[40vw] 2xl:max-w-[33vw] p-[1rem] rounded-lg`}>
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
              <div className="col-span-2 hover:scale-105">
                <Link className="w-full h-full" href={"/guide"}>
                  <img alt="All Ships Data" src="/images/btn/guide-btn.png" className="w-full h-full">
                  </img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>}
      <div id="screen-3d" className="relative w-screen h-full bg-[#222222] perspective-[3000px] [transform-style:preserve-3d]">
        <div className={cssCard[0]}
          onClick={() => {
            swarpCardByIndex(currentIndex, 0)
          }}>
          <div className="h-full w-full">
            A
          </div>
        </div>
        <div className={cssCard[1]}
          onClick={() => {
            swarpCardByIndex(currentIndex, 1)
          }}>
          <div className="h-full w-full">
            B
          </div>
        </div>
        <div className={cssCard[2]}
          onClick={() => {
            swarpCardByIndex(currentIndex, 2)
          }}>
          <div className="h-full w-full">
            C
          </div>
        </div>
        <div className={cssCard[3]}
          onClick={() => {
            swarpCardByIndex(currentIndex, 3)
          }}>
          <div className="h-full w-full">
            D
          </div>
        </div>
        <div className={cssCard[4]}
          onClick={() => {
            swarpCardByIndex(currentIndex, 4)
          }}>
          <div className="h-full w-full">
            E
          </div>
        </div>
      </div >
    </>
  );
}
