import Head from "next/head";
import Topbar from "../components/Topbar";
import ActiveEventCard from "../components/ActiveEventCard";
import Footer from "../components/Footer";
import BackToTop from "../components/overlay/BackToTop";
import { NextSeo } from "next-seo";

export default function Active_Event() {
  return (
    <>
      <NextSeo
        title="ข้อมูลกิจกรรม"
        description="ข้อมูลกิจกรรม Azur Lane"
        openGraph={{
          url: 'https://al-guide-th.com/active_event_2',
          title: 'ข้อมูลกิจกรรม',
          description: 'หน้าข้อมูลกิจกรรม',
          type: 'article',
          article: {
            tags: ['Azur Lane', 'ข้อมูลกิจกรรม', 'Event' , 'ของรางวัล','Rerun','รีรัน'],
          },
          site_name: 'Azur Lane ข้อมูลกิจกรรม'
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ข้อมูลกิจกรรม,ข้อมูลอีเว้น azur lane,ข้อมูล event azur lane,ข้อมูลกิจกรรม azur lane,กิจกรรม,event,event azur lane,rerun event azur lane,rerun,reren event,รีรัน,รีรันกิจกรรม,รีรันกิจกรรม azur lane"
          }
        ]}
      />
      <Topbar />

      <main className="flex justify-center">
        <div className="container w-full py-4 mx-auto">
          <div className="flex justify-center">
            <div className="w-11/12 md:w-5/6">
              <ActiveEventCard eventType="active_event_2" />
            </div>
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
