import Head from 'next/head'
import Topbar from '../components/Topbar'
import ActiveEventCard from '../components/ActiveEventCard'
import Footer from '../components/Footer'

export default function Active_Event() {
  return (
    <>
      <Head>
        <title>Rerun / War Archives</title>
        <meta name="description" content="active event 2 page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Topbar />

      <main className='flex justify-center'>
        <div id="zoom" className='w-full 2xl:max-w-7xl'>
          <ActiveEventCard eventType="active_event_2"/>
          <br id="lastspace"></br>
        </div>
      </main>
      <Footer />
    </>
  )
}
