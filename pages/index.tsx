
import { useDialog } from "@/components/dialog";
import { useLoading } from "@/components/overlay/loading";
import { IEvent } from "models/ievent";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter()

  const [events, setEvents] = useState<IEvent[]>([]);

  const [webState, setWebState] = useState(0);
  const [cssCard, setCssCard] = useState<string[]>([
    "cursor-pointer absolute bottom-0 left-1/2 w-[70vw] max-w-[210px] md:max-w-[360px] xl:max-w-[540px] aspect-[2/1] transition-all duration-700 ease-out will-change-transform shadow-2xl z-30 [transform:translate(-50%,-20%)_translateX(0px)_translateZ(160px)_rotateY(0deg)_scale(1)]",
    //"cursor-pointer absolute bottom-0 left-1/2 w-[70vw] max-w-[210px] md:max-w-[400px] xl:max-w-[600px] aspect-[2/1] transition-all duration-700 ease-out will-change-transform shadow-xl z-20 [transform:translate(-50%,-20%)_translateX(16vw)_translateZ(110px)_rotateY(0deg)_scale(0.92)]",
    "cursor-pointer absolute bottom-0 left-1/2 w-[70vw] max-w-[210px] md:max-w-[360px] xl:max-w-[540px] aspect-[2/1] transition-all duration-700 ease-out will-change-transform shadow-lg opacity-90 z-10 [transform:translate(-50%,-20%)_translateX(-32vw)_translateZ(70px)_rotateY(0deg)_scale(0.84)]",
    //"cursor-pointer absolute bottom-0 left-1/2 w-[70vw] max-w-[210px] md:max-w-[400px] xl:max-w-[600px] aspect-[2/1] transition-all duration-700 ease-out will-change-transform shadow-xl z-20 [transform:translate(-50%,-20%)_translateX(-16vw)_translateZ(110px)_rotateY(0deg)_scale(0.92)]",
    "cursor-pointer absolute bottom-0 left-1/2 w-[70vw] max-w-[210px] md:max-w-[360px] xl:max-w-[540px] aspect-[2/1] transition-all duration-700 ease-out will-change-transform shadow-lg opacity-90 z-10 [transform:translate(-50%,-20%)_translateX(32vw)_translateZ(70px)_rotateY(0deg)_scale(0.84)]",
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

  const swarpCardByIndex = (firstCardIndex: number, secondCardIndex: number, href: string, newTab: boolean = false) => {
    if (newTab) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (firstCardIndex !== secondCardIndex) {
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
    else {
      router.push(href)
    }
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
      <div className="w-screen h-full xl:hidden">
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
                <div className="col-span-2 hover:scale-105">
                  <Link className="w-full h-full" href={"/guide"}>
                    <img alt="All Ships Data" src="/images/btn/guide-btn.png" className="w-full h-full">
                    </img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-full hidden xl:block animate-slide-in-bottom">
        <div id="screen-3d" className="relative w-screen h-full perspective-[3000px] [transform-style:preserve-3d]">
          <div id="holo-screen" className="absolute top-0 left-1/2 aspect-[20/7] z-0 bg-[#182D4D] shadow-[0_0_15px_4px_rgba(0,150,255,0.85)] bg-opacity-95 rounded-xl h-[50vh] overflow-hidden transition-all duration-700 ease-out will-change-transform [transform:translate(-50%,0%)_translateX(0)_translateZ(0)_rotateY(0deg)_scale(1)]">
            {
              (currentIndex == 0) && <Link className="w-full h-full" href="/ship">
                <img alt="All Ships Data" src="/images/bg-dock.webp" className="w-full h-full object-cover">
                </img>
              </Link>
            }
            {
              (currentIndex == 1) && <Link className="w-full h-full" href={"/event/" + (lastestEvent?.name)}>
                <img alt={lastestEvent?.name} src={lastestEvent?.banner} className="w-full h-full object-cover">
                </img>
              </Link>
            }
            {
              (currentIndex == 2) && <Link className="w-full h-full" href={"/guide"}>
                <img alt="All Ships Data" src="/images/bg-go-to-school.webp" className="w-full h-full object-cover">
                </img>
              </Link>
            }
          </div>
          <div className={cssCard[0]}
            onClick={() => {
              swarpCardByIndex(currentIndex, 0, "/ship")
            }}
            onAuxClick={
              (event) => {
                if (event.button === 1) {
                  swarpCardByIndex(currentIndex, 0, "/ship", true)
                }
              }
            }>
            <img alt="All Ships Data" src="/images/btn/ship_info_1200x600.png" className="w-full h-full">
            </img>
          </div>
          <div className={cssCard[1]}
            onClick={() => {
              swarpCardByIndex(currentIndex, 1, "/event/" + (lastestEvent?.name))
            }}
            onAuxClick={
              (event) => {
                if (event.button === 1) {
                  swarpCardByIndex(currentIndex, 1, "/event/" + (lastestEvent?.name), true)
                }
              }
            }>
            <img alt={lastestEvent?.name} src={lastestEvent?.button} className="w-full h-full">
            </img>
          </div>
          <div className={cssCard[2]}
            onClick={() => {
              swarpCardByIndex(currentIndex, 2, "/guide")
            }}
            onAuxClick={
              (event) => {
                if (event.button === 1) {
                  swarpCardByIndex(currentIndex, 2, "/guide", true)
                }
              }
            }>
            <img alt="All Ships Data" src="/images/btn/guide-btn.png" className="w-full h-full">
            </img>
          </div>
          {/*
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
            <img alt="All Ships Data" src="/images/btn/guide-btn.png" className="w-full h-full">
            </img>
          </div>
          */}
        </div >
      </div>
    </>
  );
}
