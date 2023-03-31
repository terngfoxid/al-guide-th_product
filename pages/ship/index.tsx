import Head from "next/head";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import Find_Ship_Card from "../../components/Find_Ship_Card";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="ค้นหาเรือด้วย Faction"
        description="ค้นหาเรือด้วย Faction"
        openGraph={{
          url: 'https://al-guide-th.com/ship',
          title: 'ค้นหาเรือด้วย Faction',
          description: 'หน้าค้นหาเรือด้วย Faction',
          site_name: 'Azur Lane ค้นหาเรือด้วย Faction'
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,เรือ,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ข้อมูลเรือ,ข้อมูลเรือ azur lane,ข้อมูลเรือตามชาติ,faction,faction azur lane,faction ship,ค้นหาเรือ,ค้นหาเรือ azur lane,เรือ azur lane"
          }
        ]}
      />
      <Topbar />

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <br></br>
          <Find_Ship_Card />
          <br></br>
        </div>
      </main>
      <Footer />
    </>
  );
}
