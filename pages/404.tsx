import Link from 'next/link'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import E404_Card from '../components/E404_Card'

export default function FourOhFour() {
    return <>
        <Head>
            <title>Azur Lane Guide</title>
            <meta name="description" content="Webapp for azur lane TH comunity" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

        </Head>
        <Topbar />
        <main>
            <br></br>
            <E404_Card />
            <br></br>
        </main>
        <Footer />
    </>
}