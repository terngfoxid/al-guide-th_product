import BackToTop from "../components/overlay/BackToTop";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { PrSlide } from "@/components/PrShipSlide";
import Loading from "@/components/overlay/Loading"
import Link from "next/link";

type prShipData = {
  serie_number: number,
  ship:[
    {
        name:string,
        type:string,
        quest:[string],
        unlock: string,
        blob: string;
        faction_short: string;
    }
  ],
}[];

export default function ActiveEventDev() {

  const [activePrShipData, setActivePrShipData] = useState<prShipData | null>(null);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/getPrShipData");
      const data = await response.json();
      setActivePrShipData(data as prShipData);
    };

    load().catch((e) => console.log(e));
  }, []);

  if(activePrShipData == null){
    return(<>
      <NextSeo
        title="ไกด์เรือวิจัย | Azur Lane Guide TH"
        description="ไกด์เรือวิจัย Azur Lane"
        openGraph={{
          url: "https://al-guide-th.com/research_shipyard_guide",
          title: "ไกด์เรือวิจัย | Azur Lane Guide TH",
          description: "หน้าไกด์เรือวิจัย",
          type: "article",
          article: {
            tags: ["Azur Lane", "ไกด์เรือวิจัย", "Priority Research", "เรือ PR"],
          },
          site_name: "Azur Lane ไกด์เรือวิจัย",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ไกด์เรือวิจัย,เรือวิจัย,ข้อมูลเรือวิจัย,เรือ PR,PR ship",
          },
        ]}
      />

      <main>
        <div className="container w-full py-4 mx-auto">
          <div className="w-11/12 lg:w-5/6 mx-auto">
            <div className="flex justify-center">
              <Loading/>
            </div>
          </div>
        </div>
      </main>
    </>)
  }

  return (
    <>
      <NextSeo
        title="ไกด์เรือวิจัย | Azur Lane Guide TH"
        description="ไกด์เรือวิจัย Azur Lane"
        openGraph={{
          url: "https://al-guide-th.com/research_shipyard_guide",
          title: "ไกด์เรือวิจัย | Azur Lane Guide TH",
          description: "หน้าไกด์เรือวิจัย",
          type: "article",
          article: {
            tags: ["Azur Lane", "ไกด์เรือวิจัย", "Priority Research", "เรือ PR"],
          },
          site_name: "Azur Lane ไกด์เรือวิจัย",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "azur,lane,guide,th,ไกด์,ไทย,ภาษาไทย,azur lane,azur lane guide th,อซูร์เลน,azur lane ไกด์,azur lane ภาษาไทย,สอนเล่น azur lane,ไกด์เรือวิจัย,เรือวิจัย,ข้อมูลเรือวิจัย,เรือ PR,PR ship",
          },
        ]}
      />

      <main>
        <div className="container w-full py-4 mx-auto">
          <div className="w-11/12 lg:w-5/6 mx-auto">
            <div className="grid grid-cols-1 space-y-3 md:space-y-7">
              <div className="w-full border border-gray-300 rounded-lg shadow-md bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                    className="w-full h-full"
                    src="/images/researchsy/rsy_banner.webp"
                    alt="ไกด์เรือวิจัย Banner"
                ></img>
                <h1 className="hidden">ไกด์เรือวิจัย | Azur Lane Guide TH</h1>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl mr-4">ค่า Tech คืออะไร ?</p>
                <Link
                  className="items-center h-full px-5 py-3 text-base text-center duration-300 border border-gray-300 rounded cursor-pointer bg-neutral-300 dark:bg-neutral-700 dark:border-gray-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 hover:scale-110 text-zinc-700 dark:text-zinc-200 md:text-lg lg:text-xl"
                  href="/guide_newbie/tech"
                >
                  <h2>บทเรียนที่ 7 Tech</h2>
                </Link>
              </div>
              {activePrShipData?.map((pr) => {
                return(<>
                        <div key={pr.serie_number}>
                            <h2 className="text-center text-3xl text-zinc-700 dark:text-zinc-200 pt-5 pb-2">{"เรือวิจัย PR"+pr.serie_number}</h2>
                            <PrSlide>
                                {pr.ship.map((ship) => {
                                    return(
                                        <div 
                                            key={ship.name} 
                                            className="aspect-[9/12] sm:aspect-[9/9] md:aspect-[21/10] md:px-10 bg-no-repeat bg-center bg-cover overflow-hidden bg-[url('/images/MainDayBG.webp')] dark:bg-[url('/images/MainTwilightBG.webp')]">
                                            <div className="relative h-full md:flex md:justify-end">
                                                <img className="absolute z-10 transform -translate-y-1/2 top-1/2 md:top-0 md:-translate-y-0 md:-translate-x-1/2 md:left-1/4 md:h-full"
                                                     src={ship.blob}
                                                     alt={ship.name+"image"}>
                                                </img>
                                                <div className="hidden md:block h-full w-full w-7/12 pt-10 px-4 pb-6 bg-black/[0.7] z-20 overflow-y-auto">
                                                  <div className="h-full w-full overflow-y-auto">
                                                      <div className="flex">
                                                          <img
                                                          className="inline h-6 xl:h-8 mr-3 align-middle"
                                                          src={`/images/type/${ship.type}.webp`}
                                                          alt={ship.type}
                                                          />
                                                          <Link href={"/ship/"+ship.name}><h3 className="text-zinc-300 text-xl xl:text-3xl inline-block">{ship.faction_short}&nbsp;{ship.name}</h3></Link>
                                                      </div>
                                                      <p className="text-zinc-300 text-lg xl:text-2xl mt-4">{"เงื่อนไขปลดล็อกการวิจัย:"}</p>
                                                      <p className="text-zinc-300 text-md xl:text-xl mt-1">{ship.unlock}</p>
                                                      <p className="text-zinc-300 text-lg xl:text-2xl mt-3 pt-3 w-full border-t border-zinc-500">{"ขั้นตอนการวิจัย:"}</p>
                                                      <div className="">
                                                        {ship.quest.map((quest,index) =>{ 
                                                          return <>
                                                            <div key={"quest"+index} className="flex mt-2 text-md xl:text-xl">
                                                              <p className="text-zinc-300 pr-1">{(index+1)+": "}</p>
                                                              <p className="text-zinc-300 pr-3">{quest}</p>
                                                            </div>
                                                          </>})
                                                        }
                                                      </div>
                                                    </div>
                                                </div>
                                                <div className="absolute top-0 md:hidden h-full w-full pt-10 px-4 pb-6 bg-black/[0.75] z-20">
                                                  <div className="h-full w-full overflow-y-auto">
                                                    <div className="flex justify-center">
                                                      <div className="inline-flex">
                                                        <img
                                                          className="inline h-6 xl:h-8 mr-3 align-middle"
                                                          src={`/images/type/${ship.type}.webp`}
                                                          alt={ship.type}
                                                         />
                                                        <h3 className="text-zinc-300 text-xl inline-block">{ship.faction_short}&nbsp;{ship.name}</h3>
                                                      </div>
                                                    </div>
                                                    <p className="text-zinc-300 text-lg mt-4">{"เงื่อนไขปลดล็อกการวิจัย:"}</p>
                                                    <p className="text-zinc-300 text-md mt-1">{ship.unlock}</p>
                                                    <p className="text-zinc-300 text-lg mt-4 pt-3 w-full border-t border-zinc-500">{"ขั้นตอนการวิจัย:"}</p>
                                                    <div className="">
                                                      {ship.quest.map((quest,index) =>{ 
                                                        return <>
                                                          <div key={"quest"+index} className="flex mt-1">
                                                            <p className="text-zinc-300 text-md pr-1">{(index+1)+": "}</p>
                                                            <p className="text-zinc-300 text-md pr-3">{quest}</p>
                                                          </div>
                                                        </>})
                                                      }
                                                    </div>
                                                  </div>
                                                </div>
                                            </div>
                                        </div>)
                                })}
                            </PrSlide>
                        </div>
                       </>);
              })}
            </div>
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  );
}
