import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

import Home_Card from "../components/Home_Card";
import Panel_Card from "../components/Panel_Card";

import B_Ship_Card from "../components/button/B_Ship_Card";
import B_Event_Card from "../components/button/B_Event_Card";
import B_Meaw_Card from "../components/button/B_Meaw_Card";
import B_Event_2_Card from "../components/button/B_Event_2_Card";
import ButtonGuideNewbie from "../components/button/ButtonGuideNewbie";
import BackToTop from "../components/overlay/BackToTop";

import { NextSeo } from "next-seo";

export default function Home() {
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

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <Home_Card />
          <br></br>
          <Panel_Card />
          <br className="hidden md:block"></br>
          <br></br>

          <div className="flex justify-center">
            <div className="w-full md:w-5/6 2xl:w-full">
              <div className="md:grid md:grid-cols-2">
                <div className="flex justify-center md:justify-start">
                  <B_Ship_Card />
                </div>
                <br className="block md:hidden"></br>
                <div className="flex justify-center md:justify-end">
                  <B_Event_Card />
                </div>
              </div>
            </div>
          </div>

          <br className="hidden md:block"></br>
          <br></br>

          <div className="flex justify-center">
            <div className="w-full md:w-5/6 2xl:w-full">
              <div className="md:grid md:grid-cols-2">
                <div className="flex justify-center md:justify-start">
                  <ButtonGuideNewbie />
                </div>
                <br className="block md:hidden"></br>
                <div className="flex justify-center md:justify-end">
                  <B_Event_2_Card />
                </div>
              </div>
            </div>
          </div>

          <br className="hidden md:block"></br>
          <br></br>

          <div className="flex justify-center">
            <div className="w-full md:w-5/6 2xl:w-full">
              <div className="md:grid md:grid-cols-2">
                <div className="flex justify-center md:justify-start">
                  <B_Meaw_Card />
                </div>
                <br className="block md:hidden"></br>
                <div className="flex justify-center md:justify-end"></div>
              </div>
            </div>
          </div>

          <br></br>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
