import Head from 'next/head'
import Topbar from '../../components/Topbar'
import Footer from '../../components/Footer'
import Ship_Card from '../../components/Ship_Card'
import { useRouter } from 'next/router'
import Loading from '../../components/overlay/Loading'
import Test_Card from '../../components/test/Test_Card'

export default function Ship() {
    const router = useRouter()
    const { name } = router.query

    if ((name == null)) {
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
                    <Ship_Card ship={name} />
                    <br></br>
                </main>
                <Footer />
            </>
        )
    }
}
