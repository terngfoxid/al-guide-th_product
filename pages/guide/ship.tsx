import Head from "next/head";
import { useEffect, useState } from "react";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import { Slide } from "../../components/Slide";

type PageData = {
  name: string;
  description: string;
  ships: {
    name: string;
    icon: string;
    image: string;
    description: string;
    type: string;
    link: string | undefined;
  }[];
};

export default () => {
  const [pageData, setPageData] = useState<PageData[]>([]);

  const [recommend, setRecommend] = useState<number>(0);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/guide/ship");
      const body = await res.json();
      const data = body.filter((item: unknown): item is PageData => {
        if (typeof item !== "object" || item === null) {
          return false;
        }

        const ships = (item as PageData).ships;

        if (!Array.isArray(ships)) {
          return false;
        }

        const hasInvalidShip = ships.some((ship) => {
          return (
            typeof ship !== "object" ||
            ship === null ||
            typeof ship.name !== "string" ||
            typeof ship.icon !== "string" ||
            typeof ship.image !== "string" ||
            typeof ship.description !== "string" ||
            typeof ship.type !== "string"
          );
        });

        return (
          typeof (item as PageData).name === "string" &&
          typeof (item as PageData).description === "string" &&
          !hasInvalidShip
        );
      });

      setPageData(data as PageData[]);
    };

    load().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>Azur Lane Guide</title>
        <meta name="description" content="contract page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />

      <main className="flex justify-center">
        <div className="container p-4">
          <div className="rounded-lg shadow-lg bg-neutral-300 dark:bg-neutral-800 text-zinc-600 dark:text-zinc-400">
            <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
              {pageData.length > 0 &&
                pageData.map((item, idx) => (
                  <button
                    style={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
                    key={idx}
                    className={
                      recommend == idx
                        ? "bg-blue-800 rounded-lg scale-105 text-white"
                        : "px-3 py-2 transition rounded-lg bg-neutral-400 dark:bg-neutral-700 hover:scale-105 hover:bg-neutral-500 hover:text-white hover:dark:bg-neutral-600"
                    }
                    onClick={() => {
                      setRecommend(idx);
                    }}
                  >
                    {item.name}
                  </button>
                ))}

              <div className="col-span-2 p-4 rounded-lg bg-neutral-200 dark:bg-neutral-900 md:col-span-3 lg:col-span-4 border-neutral-400 dark:border-neutral-600">
                {pageData.length >= recommend + 1 &&
                  pageData[recommend].description}
              </div>
            </div>

            <hr className="mx-4 my-2 border-neutral-400 dark:border-neutral-600" />

            <div className="hidden p-4 sm:block">
              {pageData.length > 0 && pageData.length >= recommend && (
                <Slide key="slide-show">
                  {pageData[recommend].ships.map((item, idx) => (
                    <div
                      className="aspect-[21/9] flex flex-row px-10 pb-6 overflow-hidden bg-[url('/images/MainDayBG.webp')] dark:bg-[url('/images/MainTwilightBG.webp')]"
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                      key={idx}
                    >
                      <div className="z-40 flex items-center justify-center flex-shrink-0 aspect-square">
                        <img
                          src={item.image}
                          key={item.image}
                          className="scale-150 origin-[40%_40%] hidden md:block"
                          alt=""
                        />
                        <div className="w-full h-full p-5 md:hidden">
                          <img
                            src={item.icon}
                            key={item.icon}
                            className="w-full h-full rounded-lg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="z-50 w-full h-full p-5">
                        <div className="ิw-full h-full overflow-y-auto bg-neutral-200 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80 p-5 rounded-lg">
                          <div className="flex items-center mb-5">
                            <img
                              className="inline h-8 mr-1 align-middle"
                              src={`/images/type/${item.type}.webp`}
                              alt={item.type}
                            />
                            <span className="text-xl md:text-4xl">{item.name}</span>
                          </div>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slide>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
              {pageData.length >= recommend + 1 &&
                pageData[recommend].ships.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-7 gap-4 p-4 rounded-lg md:grid-cols-3 bg-neutral-200 dark:bg-neutral-900 border-neutral-400 dark:border-neutral-600"
                  >
                    <div className="col-span-2 md:col-span-1 ">
                      <img
                        src={item.icon}
                        key={item.icon}
                        alt={item.name}
                        className="w-full rounded-lg aspect-square bg-neutral-300 dark:bg-neutral-800"
                      />
                    </div>
                    <div className="col-span-5 md:col-span-2">
                      <div className="flex items-center p-4 mb-4 rounded-lg bg-neutral-300 dark:bg-neutral-800">
                        <img
                          className="inline h-5 mr-1 align-middle"
                          src={`/images/type/${item.type}.webp`}
                          alt={item.type}
                        />
                        <span>{item.name}</span>
                      </div>
                      <div className="p-4 rounded-lg bg-neutral-300 dark:bg-neutral-800">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
