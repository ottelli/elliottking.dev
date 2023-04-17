import DOMPurify from "isomorphic-dompurify"
import ErrorBoundary from "../utils/ErrorBoundary"
import { useRef, useState } from "react"

interface IReelCard {
  title?: string
  prose: string
}

const Reel = (props: { entries: IReelCard[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [clicked, setClicked] = useState(false)

  function scrollByAmount(amount:number) {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id='reel' className='relative'>
    <div
      ref={scrollContainerRef}
      className='prose flex max-w-none flex-row justify-start overflow-scroll bg-blue-100 px-4 py-16 dark:bg-slate-800 sm:px-16'
      >
      {props.entries.map((entry, index) => (
        <ErrorBoundary key={"Error Boundary, Reel: " + index}>
          <ReelCard key={`reel-entry-${index}`} title={entry.title} prose={entry.prose} index={index} />
        </ErrorBoundary>
      ))}
      </div>
      <button className="absolute bottom-6 left-1/3 bg-white dark:bg-slate-400 rounded-full w-8 h-8 shadow-md flex items-center justify-center" onClick={() => scrollByAmount(-350)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <button className={`absolute bottom-6 right-1/3 bg-white dark:bg-slate-400 rounded-full w-8 h-8 shadow-md flex items-center justify-center ${!clicked && 'animate-bounce-right'}`} onClick={() => {
        scrollByAmount(350)
        setClicked(true)
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      </section>
  )
}

export default Reel

const ReelCard = ({
  title, prose, index
}:{
  title?:string, prose:string, index:number
}) => {
  return (
    <div
      className={`prose mx-4 my-4 flex min-w-[320px] max-w-[320px] transform flex-col rounded-2xl shadow-2xl  ${index === 0 ? 'bg-indigo-700 text-white' : 'bg-white dark:bg-indigo-900 dark:text-white transition duration-500'}`}
    >
      <div className='flex flex-col justify-evenly p-10 font-sans'>
        {title && <h4 className={`mb-2 ${index === 0 ? 'text-white' : 'text-indigo-700 dark:text-white'}`}>{title}</h4>}
        <p
          className='text-l m-0 prose-a:font-semibold prose-a:text-white'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(prose),
          }}
        />
      </div>
    </div>
  )
}
