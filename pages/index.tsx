
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [deg, setDeg] = useState<number>(0);

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
                <div className={`item a ${deg === 0 ? "hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300" : ""}`} onClick={() => {
                  setDeg(0)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(0deg)`;
                  }
                }}>
                  {deg === 0 ? <>
                    <Link className="w-full h-full" href="/ships">
                      <img src="/images/btn/Ship 600x300.webp" className="w-full h-full">
                      </img>
                    </Link>
                  </> : <>
                    <img src="/images/btn/Ship 600x300.webp" className="w-full h-full">
                    </img>
                  </>}
                </div>
                <div className={`item b ${deg === 300 ? "hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300" : ""}`} onClick={() => {
                  setDeg(300)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(300deg)`;
                  }
                }}>B</div>
                <div className={`item c ${deg === 240 ? "hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300" : ""}`} onClick={() => {
                  setDeg(240)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(240deg)`;
                  }
                }}>C</div>
                <div className={`item d ${deg === 180 ? "hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300" : ""}`} onClick={() => {
                  setDeg(180)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(180deg)`;
                  }
                }}>D</div>
                <div className={`item e ${deg === 120 ? "hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300" : ""}`} onClick={() => {
                  setDeg(120)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(120deg)`;
                  }
                }}>E</div>
                <div className={`item f ${deg === 60 ? "hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300" : ""}`} onClick={() => {
                  setDeg(60)
                  if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateX(60deg)`;
                  }
                }}>F</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
