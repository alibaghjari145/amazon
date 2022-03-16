import Head from 'next/head'
import Banner from '../components/banner'
import BookCarousel from '../components/book-carousel'
import Card from '../components/card'
import CardGrid from '../components/card-grid'
import Footer1 from '../components/footer1'
import Footer2 from '../components/footer2'
import Header from '../components/header'
import Navbar from '../components/navbar'
import SignRec from '../components/sign-recomend'

export default function Home() {

  return (

    <div className="p-0  m-0">
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="top"></div>
      <Header />
      <Navbar />
      <Banner />
      <CardGrid />
      <BookCarousel />
      <CardGrid />
      <SignRec />
      <a href="#top">
        <div className='text-white hover:bg-slate-600 bg-slate-700 h-12 text-center pt-3 items-center w-full  '>Back to top</div>
      </a>
      <Footer1 />
      <Footer2/>
    </div>
  )
}



