const ContactForm = () => {
  return (
    <div
      id='contact'
      className='prose flex flex-col bg-slate-50 p-12 opacity-100 transition-opacity dark:prose-invert dark:bg-slate-600'
    >
      <h1>Contact Me</h1>
      <hr className='my-4' />
      <a className='font-bold' href='mailto:elliott@rho-technologies.com'>
        <h4>Send me an email</h4>
      </a>
      <a href='/ElliottKingCV.pdf' target='_blank' className='font-bold'>
        <h4>Request my CV</h4>
      </a>
    </div>
  )
}

export default ContactForm
