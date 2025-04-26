import Head from "next/head";
import { useRouter } from "next/router";
import Loading from "../../components/overlay/Loading";
import Faction_Ship_Card from "../../components/Faction_Ship_Card";
import BackToTop from "../../components/overlay/BackToTop";

export default function Ship() {
  const router = useRouter();
  const { faction } = router.query;

  if (faction == null) {
    return (
      <>
        <Head>
          <title>เรือฝ่าย {faction} | Azur Lane Guide TH</title>
          <meta name="description" content={"เรือฝ่าย " + faction} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div>
            <br></br>
            <div className="flex justify-center">
              <Loading />
            </div>
            <br></br>
          </div>
        </main>
      </>
    );
  } else if (
    faction != "Eagle Union" &&
    faction != "Royal Navy" &&
    faction != "Sakura Empire" &&
    faction != "Iron Blood" &&
    faction != "Dragon Empery" &&
    faction != "Northern Parliament" &&
    faction != "Iris Libre" &&
    faction != "Vichya Dominion" &&
    faction != "Sardegna Empire" &&
    faction != "Kingdom of Tulipa" &&
    faction != "Tempesta" &&
    faction != "META" &&
    faction != "Collab"
  ) {
    router.push({ pathname: "/ship", query: {} }, "pls_select_correct_faction");
  } else {
    return (
      <>
        <Head>
          <title>เรือฝ่าย&nbsp;{faction}&nbsp;| Azur Lane Guide TH</title>
          <meta name="description" content={"เรือฝ่าย " + faction} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex justify-center">
          <div className="w-full 2xl:max-w-7xl">
            <br></br>
            <Faction_Ship_Card faction={faction} />
            <br></br>
          </div>
        </main>
        <BackToTop />
      </>
    );
  }
}
