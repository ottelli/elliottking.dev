import DOMPurify from "isomorphic-dompurify"
import { useId, useState } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import ErrorBoundary from "../utils/ErrorBoundary"
import TechStack from "./TechStack"

export interface ITimelineEntry {
  title: string
  date: string
  description: string
  brief: string
  stack: string[]
  method: ITimelineEntryMethod
  status: ITimelineEntryStatus
}

interface ITimelineEntryMethod {
  [step: string]: string
}

interface ITimelineEntryStatus {
  [section: string]: string | string[]
}

const Timeline = ({ entries }: { entries: ITimelineEntry[] }) => {
  return (
    <section className='prose-headings prose-p prose dark:prose-invert flex w-full max-w-none flex-col items-center overflow-hidden bg-white px-4 py-8 dark:bg-slate-900'>
      <h1>Projects</h1>
      {entries.map((entry, idx) => {
        if (
          ["Persistence", "Rho Technologies", "First Python Code"].includes(
            entry.title
          )
        ) {
          return (
            <ErrorBoundary key={"Error Rendering: " + entry.title}>
              <TimelineCard key={entry.title} index={idx} entry={entry} />
            </ErrorBoundary>
          )
        }
        return <></>
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
      className={`mx-0 my-4 flex w-full 
      transform flex-col items-center rounded-3xl p-4 px-0 transition duration-500 sm:w-10/12 md:w-8/12
      ${
        isVisible || index === 0
          ? "-transform-x-1/2 dark:via-indigp-200 bg-gradient-to-tr from-purple-200 via-indigo-100 to-blue-100 opacity-100 shadow-xl dark:from-purple-300 dark:to-blue-300"
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

      <h4 className='w-32 justify-self-center rounded bg-gradient-to-tr from-green-700 to-green-500 p-1 text-center font-normal text-white shadow-md shadow-green-100 dark:shadow-slate-900'>
        {entry.date}
      </h4>

      <h2 className='mt-2 font-normal dark:text-slate-800'>{entry.title}</h2>

      <h3 className='text-center font-light italic dark:text-slate-800'>
        {entry.description}
      </h3>

      <h6
        className='m-4'
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(entry.brief),
        }}
      ></h6>

      <div className='m-4'>
        <TechStack items={entry.stack} />
      </div>

      {isOpen && (
        <div className='flex w-full max-w-none flex-row flex-wrap items-center justify-center'>
          <div className='mx-4 h-full md:w-5/12'>
            <Method {...entry.method} />
          </div>

          <div className='mx-4 h-full md:w-5/12'>
            <ProjectStatus {...entry.status} />
          </div>
        </div>
      )}
      <ToggleDropdown isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
    </div>
  )
}

const Method = (props: ITimelineEntryMethod) => {
  const id = useId()

  return (
    <div className='prose flex h-full w-full max-w-none flex-col'>
      {Object.entries(props).map(([name, text]) => (
        <div key={id + name + "-container"}>
          <h5 key={id + name + "-title"} className='font-bold italic'>
            {name}
          </h5>
          <p
            key={id + name + "-text"}
            className='mt-0'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
          ></p>
        </div>
      ))}
    </div>
  )
}

const ProjectStatus = (props: ITimelineEntryStatus) => {
  return (
    <div className='prose flex h-full w-full max-w-none flex-col border-slate-400 dark:border-slate-600'>
      {Object.entries(props).map(([name, text]) => (
        <div key={name}>
          <h5 className='font-bold'>{name}</h5>
          {text instanceof Array ? (
            <ul className='m-0 list-inside list-none p-0'>
              {text.map((point, i) => (
                <li key={i} className='relative flex pl-[20px]'>
                  <svg
                    className='absolute left-0 top-[6px]'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    width='12'
                  >
                    <path d='M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
                  </svg>
                  <p
                    className='m-0'
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(point),
                    }}
                  ></p>
                </li>
              ))}
            </ul>
          ) : (
            <p
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
            ></p>
          )}
        </div>
      ))}
    </div>
  )
}

const ToggleDropdown = (props: { isOpen: boolean; onClick: () => void }) => {
  return (
    <span
      className='col-start-1 col-end-6 flex h-8 flex-row justify-center'
      onClick={props.onClick}
    >
      {props.isOpen ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z'
          />
        </svg>
      )}
    </span>
  )
}
