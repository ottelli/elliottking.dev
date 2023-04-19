import { useState } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import ErrorBoundary from "../utils/ErrorBoundary"
import TechStack from "./TechStack"
import { ITimelineEntryProse, Prose, ToggleDropdown } from "./TimelineCardParts"

export interface ITimelineEntry {
  title: string
  date: string
  description: string
  link?: string
  stack: string[]
  points: ITimelineEntryProse
}

const Timeline = ({ entries }: { entries: ITimelineEntry[] }) => {
  return (
    <section className='prose-headings prose-p prose flex w-full max-w-none flex-col items-center overflow-hidden bg-white px-4 py-8 dark:prose-invert dark:bg-slate-900'>
      <h1>Projects</h1>
      {entries.map((entry, idx) => {
        if (
          [
            "Persistence",
            "Rho Technologies",
            "First Python Code",
            "Table Tennis Simulator",
          ].includes(entry.title)
        ) {
          return (
            <ErrorBoundary key={"Error Rendering: " + entry.title + idx}>
              <TimelineCard
                key={entry.title + idx}
                index={idx}
                entry={entry}
              />
            </ErrorBoundary>
          )
        }
      })}
    </section>
  )
}

export default Timeline

const TimelineCard = ({
  entry,
  index,
}: {
  entry: ITimelineEntry
  index: number
}) => {
  const { containerRef, isVisible } = useIntersectionObserver({
    root: null,
    rootMargin: "9999px 9999px 0px 0px",
    threshold: 0.3,
  })
  const [isOpen, setOpen] = useState(false)

  return (
    <div
      id={`card-${entry.title}`}
      ref={containerRef}
      className={`mx-0 my-4 flex w-full transform flex-col items-center rounded-3xl p-4 transition duration-500 sm:w-10/12 md:w-8/12 
        ${isVisible || index === 0
          ? "-transform-x-1/2 dark:via-indigp-200 bg-gradient-to-tr from-purple-200 via-indigo-100 to-blue-100 opacity-100 shadow-xl dark:from-purple-800 dark:via-indigo-900 dark:to-blue-900"
          : "translate-x-1/2 bg-white opacity-0"
        }
      `}
    >
      {/* 'Pinned' Project */}
      {index === 0 && (
        <div className='absolute -right-[3px] -top-[8px] h-8 text-amber-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='100%'
            fill='currentColor'
            viewBox='0 0 576 512'
          >
            <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
          </svg>
        </div>
      )}
      <div className='flex flex-row w-full items-center'>
        <h4 className='w-32 justify-self-center rounded bg-gradient-to-tr from-green-700 to-green-500 p-1 text-center font-normal text-white shadow-md shadow-green-100 dark:shadow-slate-900'>
          {entry.date}
        </h4>
        <div className='flex flex-col ml-4'>
          <h2>{entry.title}</h2>
          {entry.link && (
            <a href={`https://${entry.link}`}>
              <h6 className=''>{entry.link}</h6>
            </a>
          )}
        </div>
      </div>
      <h3 className='m-4 text-center font-normal italic'>
        {entry.description}
      </h3>
      <div className='m-4 mt-0'>
        <TechStack items={entry.stack} />
      </div>
      {isOpen && <Prose {...entry.points} />}
      <ToggleDropdown
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
      />
    </div>
  )
}
