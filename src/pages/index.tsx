import Footer from "../components/Footer"
import Header from "../components/Header"
import Reel from "../components/Reel"
import Timeline from "../components/Timeline"

import timeline_text from "../data/timeline_text"
import reel_text from "../data/reel_text"
import ContactForm from "../components/ContactForm"
import Head from "next/head"

const App = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Elliott King | Portfolio</title>
        <meta
          property='description'
          content='Portfolio for Elliott King'
        />
      </Head>
      <Header />
      <Reel entries={reel_text} />
      <Timeline entries={timeline_text} />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App

