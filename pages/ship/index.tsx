import Head from 'next/head'
import Topbar from '../../components/Topbar'
import Footer from '../../components/Footer'
import Find_Ship_Card from '../../components/Find_Ship_Card'

export default function Home() {
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
        <Find_Ship_Card />
        <br></br>

      </main>
      <Footer/>
    </>
  )
}
