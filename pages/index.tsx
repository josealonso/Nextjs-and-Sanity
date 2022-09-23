import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JR's Portfolio</title>
      </Head>

      <h1 className="text-red-400">
        Welcome to my portfolio
      </h1>

      <Header />
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}

    </div >
  )
}

export default Home
