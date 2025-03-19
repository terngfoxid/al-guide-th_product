import Head from "next/head";
import BackToTop from "../../components/overlay/BackToTop";
import { useEffect, useState } from "react";
import Loading from "@/components/overlay/Loading";
import Link from "next/link";
import Image from "next/image";

type ShipData = {
  data: [
    {
      name: string,
      type: string,
      type_re: string | null
      chibi: string,
      faction: string,
    }
  ]
};

const faction = ["Eagle Union", "Royal Navy", "Sakura Empire", "Iron Blood", "Dragon Empery", "Northern Parliament", "Iris Libre", "Vichya Dominion", "Sardegna Empire"]

export default function Home() {

  const [retrofitShipData, setRetrofitShipData] = useState<ShipData | null>(null);
  const [webState, setWebState] = useState(0);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/getRetrofit");
      setWebState(response.status)
      const data = await response.json();
      setRetrofitShipData(data as ShipData);
    };

    load().catch((e) => console.log(e));
  }, []);

  if (webState == 429) return (
    <>
      <Head>
        <title>บทเรียนที่ 8 Retrofit | Azur Lane Guide TH</title>
        <meta
          name="description"
          content="Retrofit , การ Retrofit"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <div className="grid grid-cols-1 py-5 space-y-3 md:space-y-5">
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/banner.webp"
                  alt="การ Retrofit"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/1.webp"
                  alt="การ Retrofit คืออะไร"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/2.webp"
                  alt="การหาวัถุดิบ Retrofit 1"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/3.webp"
                  alt="การหาวัถุดิบ Retrofit 2"
                ></img>
              </div>
            </div>

            <div className="flex justify-center">
              <h2 className="mt-[40px] p-2 pt-3 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                เรือที่มี Retrofit
              </h2>
            </div>

            <div className="rounded-lg shadow-md w-max p-5 mx-auto border border-gray-300 bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700">
              <div className="flex gap-1 justify-center items-center">
                <svg className="w-8 h-8 mr-3 text-[#FF3845] fill-[#FF3845]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                <p className="text-[#FF3845]">ไม่สามารถโหลดข้อมูลได้</p>
              </div>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">กรุณาลองใหม่อีกครั้งหลังเวลา 14:00 น.</p>
            </div>


          </div>
        </div>
      </main>
      <BackToTop />
    </>
  );

  return (
    <>
      <Head>
        <title>บทเรียนที่ 8 Retrofit | Azur Lane Guide TH</title>
        <meta
          name="description"
          content="Retrofit , การ Retrofit"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <div className="w-full 2xl:max-w-7xl">
          <div className="grid grid-cols-1 py-5 space-y-3 md:space-y-5">
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/banner.webp"
                  alt="การ Retrofit"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/1.webp"
                  alt="การ Retrofit คืออะไร"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/2.webp"
                  alt="การหาวัถุดิบ Retrofit 1"
                ></img>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11/12 border border-gray-300 rounded-lg shadow-md md:w-5/6 2xl:w-full bg-neutral-200 dark:bg-neutral-800 dark:border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/learning/act 8/3.webp"
                  alt="การหาวัถุดิบ Retrofit 2"
                ></img>
              </div>
            </div>

            <div className="flex justify-center">
              <h2 className="mt-[40px] p-2 pt-3 w-max rounded-lg text-zinc-700 dark:text-zinc-300 text-2xl font-bold text-center border border-gray-300 dark:border-gray-700 bg-neutral-200 dark:bg-neutral-800">
                เรือที่มี Retrofit
              </h2>
            </div>

            {retrofitShipData == null ?
              <div className="flex justify-center">
                <Loading />
              </div> :
              <>
                {
                  faction.map((faction) => {
                    const haveAug = retrofitShipData.data.filter((ship) => { if (faction == ship.faction) return true })
                    if (haveAug.length == 0) { return }
                    return (
                      <div key={faction} className="w-full">
                        <p className="text-center text-xl text-zinc-700 dark:text-zinc-200 pt-5 pb-2">{faction}</p>
                        <div className="mx-auto w-11/12 md:w-5/6 2xl:w-full rounded-lg shadow-md border bg-neutral-200 border-gray-300 dark:border-gray-700 dark:bg-neutral-800 p-[10px]">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                            {retrofitShipData.data?.map(
                              (ship) => {
                                return (<>{ship.faction == faction ?
                                  <Link key={ship.name} className="mx-auto text-zinc-200 dark:text-zinc-300 text-base text-center w-11/12 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 shadow duration-300 hover:scale-110 border-2 border-transparent hover:border-cyan-400"
                                    href={"/ship/" + ship.name}>
                                    <div className="rounded-lg">
                                      <div>
                                        <div className="flex items-center justify-start w-full">
                                          <Image src={"/images/type/" + ship.type + ".webp"}
                                            alt="type image"
                                            width="49"
                                            height="30"
                                          />
                                          {
                                            ship.type_re ?
                                              <>
                                                <Image src={"/images/type/" + ship.type_re + ".webp"}
                                                  alt="type image"
                                                  width="49"
                                                  height="30"
                                                />
                                              </> : <></>
                                          }
                                          <div className="inline-block w-full truncate rounded bg-neutral-600 dark:bg-neutral-600">
                                            <p className="max-w-fit">&nbsp;{ship.name}</p>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="flex items-center justify-center w-full aspect-square md:aspect-video">
                                            <img className="max-h-[150px]" src={ship.chibi} alt="ship chibi image" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link> :
                                  <></>
                                }</>)
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </>
            }

          </div>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
