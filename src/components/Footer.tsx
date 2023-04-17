// import { useState } from "react"
// import ContactModal from "./ContactModal"

const Footer = () => {
  // const [contactVisible, setContactVisible] = useState(false)

  return (
    <footer
      id='footer'
      className='prose flex max-w-none flex-col justify-start border-t-2 border-violet-800 px-12 py-4 bg-slate-500 dark:prose-invert dark:bg-slate-700'
    >
      {/* <hr className='my-4 text-slate-400' /> */}
      <p className='m-0 dark:text-white'>
        Rho Technologies is registered in the United Kingdom
      </p>
      <p className='m-0'>&copy; Elliott King 2023</p>
    </footer>
  )
}

export default Footer
