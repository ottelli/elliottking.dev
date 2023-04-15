import Footer from "../components/Footer"
import Header from "../components/Header"
import Reel from "../components/Reel"
import Timeline from "../components/Timeline"

import timeline_text from "../data/timeline_text"
import reel_text from "../data/reel_text"
import ContactForm from "../components/ContactForm"

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <Reel entries={reel_text} />
      <Timeline entries={timeline_text} />
      <PrimeAction />
      <Buffer />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App

const PrimeAction = () => {
  return <section id='action'></section>
}
const Buffer = () => {
  return <section id='buffer'></section>
}
