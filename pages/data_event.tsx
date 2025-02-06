import BackToTop from "../components/overlay/BackToTop";
import { NextSeo } from "next-seo";
import DataEventCard from "@/components/DataEventSlide";

export default function ActiveEventDev() {
  
  return (
    <>
      <NextSeo
        title="ข้อมูลกิจกรรม | Azur Lane Guide TH"
        description="ข้อมูลกิจกรรม Azur Lane"
        openGraph={{
          url: "https://al-guide-th.com/data_event",
          title: "ข้อมูลกิจกรรม | Azur Lane Guide TH",
          description: "หน้าข้อมูลกิจกรรม",
          type: "article",
          article: {
            tags: ["Azur Lane", "ข้อมูลกิจกรรม", "Event", "ของรางวัล"],
          },
          site_name: "Azur Lane ข้อมูลกิจกรรม",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ข้อมูลกิจกรรม,ข้อมูลอีเว้น azur lane,ข้อมูล event azur lane,ข้อมูลกิจกรรม azur lane,กิจกรรม,event,event azur lane",
          },
        ]}
      />

      <main>
        <div className="container w-full py-4 mx-auto">
          <div className="w-11/12 lg:w-5/6 mx-auto">
            <DataEventCard />
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  );
}
