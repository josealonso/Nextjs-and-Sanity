import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[#363636] text-white h-screen' >
      <Head>
        <title>JR's Portfolio</title>
      </Head>

      <Header />
      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}

    </div >
  )
}

export default Home
