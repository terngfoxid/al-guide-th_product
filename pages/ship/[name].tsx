import Head from "next/head";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import Ship_Card from "../../components/Ship_Card";
import { useRouter } from "next/router";
import Loading from "../../components/overlay/Loading";
import BackToTop from "../../components/overlay/BackToTop";

export default function Ship() {
  const router = useRouter();
  const { name } = router.query;

  if (name == null) {
    return (
      <>
        <Head>
          <title>ข้อมูลของ {name} | Azur Lane Guide TH</title>
          <meta name="description" content={"ข้อมูลของ " + name} />
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
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>ข้อมูลของ {name} | Azur Lane Guide TH</title>
          <meta name="description" content={"ข้อมูลของ " + name} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Topbar />

        <main className="flex justify-center">
          <div id="zoom" className="w-full 2xl:max-w-7xl">
            <Ship_Card ship={name} />
            <br id="lastspace"></br>
          </div>
        </main>
        <BackToTop />
        <Footer />
      </>
    );
  }
}
