import { useState } from "react"

const TechStack = (props: { items: string[]; onlyIcons?: boolean }) => {
  const [hover, setHover] = useState<string | null>(null)
  return (
    <div className='flex flex-row flex-wrap'>
      {props.items.map((name) => (
        <div
          key={name}
          className='prose relative m-1 flex flex-row items-center overflow-visible rounded-md bg-gradient-to-tr from-violet-600 to-violet-400 py-1 px-2 text-slate-50 shadow-md shadow-violet-400 dark:text-slate-50 dark:shadow-slate-900'
          onMouseEnter={() => setHover(name)}
          onMouseLeave={() => setHover(null)}
        >
          <div className='flex h-6 w-6 items-center justify-center'>
            <img
              src={`/assets/stackIcons/${IconFiles[name]}`}
              alt={"#"}
              className='m-0'
              height='100%'
            />
          </div>
          {props.onlyIcons ? (
            // Tooltip
            <h6
              className={`absolute -top-9 left-0 m-0 rounded-md bg-slate-700 py-0 px-2 font-bold text-white ${
                hover === name ? "z-10 block" : "hidden"
              }`}
            >
              {name}
            </h6>
          ) : (
            // Text
            <h6 className='ml-2 font-bold'>{name}</h6>
          )}
        </div>
      ))}
    </div>
  )
}

export default TechStack

const IconFiles: { [key: string]: string } = {
  Android: "Android.webp",
  Arduino: "Arduino.png",
  Flask: "Flask.png",
  Go: "Go.png",
  IMU: "IMU.svg",
  MATLAB: "MATLAB.png",
  Python: "Python.webp",
  React: "React.webp",
  Redux: "Redux.svg",
  Sass: "Sass.png",
  Tailwind: "Tailwind.svg",
  TypeScript: "TypeScript.png",
}
