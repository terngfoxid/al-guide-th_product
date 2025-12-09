
import { useDialog } from "@/components/dialog";
import { useLoading } from "@/components/overlay/loading";
import { IEvent } from "models/ievent";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [deg, setDeg] = useState<number>(0);
  const [events, setEvents] = useState<IEvent[]>([]);

  const [webState, setWebState] = useState(0);

  const { showLoading, hideLoading } = useLoading()
  const { openErrorDialog } = useDialog()

  const callAPI = async () => {
    try {
      showLoading()
      const res = await fetch("/api/v2/event");
      setWebState(res.status)
      if (res.status !== 200) {
        openErrorDialog({
          title: "เกิดข้อผิดพลาด " + res.status,
          message: "โหลดข้อมูลไม่สำเร็จ",
          onClose: () => { }
        })
      }
      else{
        res.json().then((loaddata: IEvent[])=>{
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

      <div className="mx-auto w-[90vw] h-full lg:max-w-[calc(100vw-30px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] overflow-visible">
        <div className="h-full flex items-center">
          <div className="custom-carousel w-[200px] animate-slide-in-left">
            <div className="container">

              {/* Scroll Listener */}
              <div className="scroll-container" ref={scrollRef}>
                <div className="scroll-duration" />
              </div>

              {/* 3D Carousel */}
              <div className="carousel" ref={carouselRef}>
                <div className={`item a hover:!shadow-[0_0_20px_10px_rgba(255,215,0,0.8)] !transition-shadow !duration-300`} onClick={() => {
                  setDeg(0)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(0deg)`;
                  }
                }}>
                  {deg === 0 ? <>
                    <Link className="w-full h-full" href="/ship">
                      <img src="/images/btn/Ship 600x300.webp" className="w-full h-full">
                      </img>
                    </Link>
                  </> : <>
                    <img src="/images/btn/Ship 600x300.webp" className="w-full h-full">
                    </img>
                  </>}
                </div>

                <div className={`item b hover:!shadow-[0_0_20px_10px_rgba(255,215,0,0.8)] !transition-shadow !duration-300`} onClick={() => {
                  setDeg(300)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(300deg)`;
                  }
                }}>
                  {deg === 300 ? <>
                    <Link className="w-full h-full" href="/">
                      <img src="/images/btn/AllEventData.webp" className="w-full h-full">
                      </img>
                    </Link>
                  </> : <>
                    <img src="/images/btn/AllEventData.webp" className="w-full h-full">
                    </img>
                  </>}
                </div>

                <div className={`item c hover:!shadow-[0_0_20px_10px_rgba(255,215,0,0.8)] !transition-shadow !duration-300`} onClick={() => {
                  setDeg(240)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(240deg)`;
                  }
                }}>
                  {deg === 240 ? <>
                    <Link className="w-full h-full" href="/">
                      <img src="/images/btn/Newbie 600x300.webp" className="w-full h-full">
                      </img>
                    </Link>
                  </> : <>
                    <img src="/images/btn/Newbie 600x300.webp" className="w-full h-full">
                    </img>
                  </>}
                </div>

                <div className={`item d hover:!shadow-[0_0_20px_10px_rgba(255,215,0,0.8)] !transition-shadow !duration-300`} onClick={() => {
                  setDeg(180)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(180deg)`;
                  }
                }}>
                  {deg === 180 ? <>
                    <Link className="w-full h-full" href="/">
                      <img src="/images/btn/Augmentation 600x300.webp" className="w-full h-full">
                      </img>
                    </Link>
                  </> : <>
                    <img src="/images/btn/Augmentation 600x300.webp" className="w-full h-full">
                    </img>
                  </>}
                </div>

                <div className={`item e hover:!shadow-[0_0_20px_10px_rgba(255,215,0,0.8)] !transition-shadow !duration-300`} onClick={() => {
                  setDeg(120)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(120deg)`;
                  }
                }}>
                  {deg === 120 ? <>
                    <Link className="w-full h-full" href={"/event/" + (lastestEvent?.name)}>
                      <img src={lastestEvent?.button} className="w-full h-full">
                      </img>
                    </Link>
                  </> : <>
                    <img src={lastestEvent?.button} className="w-full h-full">
                    </img>
                  </>}
                </div>

                <div className={`item f hover:!shadow-[0_0_20px_10px_rgba(255,215,0,0.8)] !transition-shadow !duration-300`} onClick={() => {
                  setDeg(60)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(60deg)`;
                  }
                }}>
                  {deg === 60 ? <>
                    <Link className="w-full h-full" href={"/event/" + (secondEvent?.name)}>
                      <img src={secondEvent?.button} className="w-full h-full">
                      </img>
                    </Link>
                  </> : <>
                    <img src={secondEvent?.button} className="w-full h-full">
                    </img>
                  </>}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
