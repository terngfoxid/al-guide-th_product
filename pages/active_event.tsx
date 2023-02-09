import Head from 'next/head'
import Topbar from '../components/Topbar'
import Active_Event_Card from '../components/Active_Event_Card'
import Footer from '../components/Footer'

export default function Active_Event() {
  return (
    <>
      <Head>
        <title>Azur Lane Guide</title>
        <meta name="description" content="contract page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Topbar />

      <main >
      <br></br>
      <Active_Event_Card />
      <br></br>

      </main>
      <Footer/>
    </>
  )
}
