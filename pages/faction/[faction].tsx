import Head from 'next/head'
import Topbar from '../../components/Topbar'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import Loading from '../../components/overlay/Loading'
import Faction_Ship_Card from '../../components/Faction_Ship_Card'

export default function Ship() {

    const router = useRouter()
    const { faction } = router.query

    if ((faction == null)) {
        return (
            <>
                <Head>
                    <title>Azur Lane Guide</title>
                    <meta name="description" content="Webapp for azur lane TH comunity" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />

                </Head>
                <Topbar />

                <main >
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
    }
    else if ((faction != "Eagle Union") &&
        (faction != "Royal Navy") &&
        (faction != "Sakura Empire") &&
        (faction != "Iron Blood") &&
        (faction != "Dragon Empery") &&
        (faction != "Northern Parliament") &&
        (faction != "Iris Libre") &&
        (faction != "Vichya Dominion") &&
        (faction != "Sardegna Empire") &&
        (faction != "Tempesta") &&
        (faction != "META") &&
        (faction != "Collab")) {

        router.push(
            { pathname: "/ship", query: { } },
            "pls_select_correct_faction"
        );

    }
    else {



        return (
            <>
                <Head>
                    <title>Azur Lane Guide</title>
                    <meta name="description" content="Webapp for azur lane TH comunity" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />

                </Head>
                <Topbar />

                <main >
                    <br></br>
                    <Faction_Ship_Card faction={faction}/>
                    <br></br>

                </main>
                <Footer />
            </>
        )
    }
}