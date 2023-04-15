import DOMPurify from "isomorphic-dompurify"
import ErrorBoundary from "../utils/ErrorBoundary"
import TechStack from "./TechStack"

interface IReelCard {
  title?: string
  img_src?: string
  link?: string
  stack?: string[]
  prose?: string
}

const Reel = (props: { entries: IReelCard[] }) => {
  return (
    <section
      id='reel'
      className='prose flex max-w-none flex-row justify-start overflow-scroll bg-blue-100 px-4 py-16 dark:bg-slate-800 sm:px-16'
    >
      {props.entries.map((entry) => (
        <ErrorBoundary key={"Error Boundary, Reel: " + entry.title}>
          <ReelCard key={entry.title} {...entry} />
        </ErrorBoundary>
      ))}
    </section>
  )
}

export default Reel

const ReelCard = (props: IReelCard) => {
  return (
    <div
      className={`prose mx-4 my-4 flex w-4/12 min-w-[320px] max-w-none transform flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition duration-500 dark:bg-indigo-900 dark:bg-gradient-to-tr dark:text-white`}
    >
      <div className='flex h-full flex-col justify-between p-10 font-sans font-semibold'>
        <div className='flex flex-col place-content-center'>
          {props.title && <h3 className='dark:text-white'>{props.title}</h3>}
          {props.prose && (
            <p
              className='text-xl'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.prose),
              }}
            />
          )}
        </div>
        {props.stack && <TechStack items={props.stack} onlyIcons />}
      </div>
    </div>
  )
}
