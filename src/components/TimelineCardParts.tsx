import DOMPurify from "isomorphic-dompurify"
import { useId } from "react"

export interface ITimelineEntryProse {
  [key: string]: string | string[]
}

export const Prose = (props: ITimelineEntryProse) => {
  const id = useId()
  const isArray = (item:any):boolean => {
    if (item instanceof Object) {
      return true
    }
  }

  return (
    <div>
      {Object.entries(props).map(([key, entry]) => (
        <div key={id + key + "container"} className="mx-4">
          <h5
            className='font-bold italic'
          >
            {key}
          </h5>
          {
            (isArray(entry)) 
            ? <List items={entry} /> 
            : <Paragraph text={entry} /> 
          }
        </div>
      ))}
    </div>
  )
}

const List = ({ items }: { items: string[] }) => {
  return (
    <ul>
      {items.map((text,idx) => (
        <li
          key={idx}
          className='relative flex pl-[20px]'
        >
          <svg
            className='absolute left-0 top-[2px]'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
            width='12'
          >
            <path d='M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
          </svg>
          <Paragraph text={text} />
        </li>
      ))}
    </ul>
  )
}

const Paragraph = ({ text }: { text: string }) => {
  return (
    <p
      className="m-0"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
    ></p>
  )
}

export const ToggleDropdown = (props: { isOpen: boolean; onClick: () => void }) => {
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
