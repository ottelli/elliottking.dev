import { useState } from "react"

const TechStack = (props: { items: string[]; onlyIcons?: boolean }) => {
  const [hover, setHover] = useState<string | null>(null)
  return (
    <div className='flex flex-row flex-wrap justify-center'>
      {props.items.map((name, index) => (
        <div
          key={name + index}
          className='prose relative m-1 flex flex-row items-center overflow-visible rounded-md bg-gradient-to-tr from-violet-600 to-violet-400 px-2 py-1 text-slate-50 shadow-md shadow-violet-400 dark:text-slate-50 dark:shadow-sm dark:shadow-slate-900'
          onMouseEnter={() => setHover(name)}
          onMouseLeave={() => setHover(null)}
        >
          <div className='flex h-[24px] w-[24px] items-center justify-center'>
            <img
              src={`/assets/stackIcons/${IconFiles[name]}`}
              alt={"#"}
              className='m-0'
              height={24}
              width={24}
            />
          </div>
          {props.onlyIcons ? (
            // Tooltip
            <h6
              className={`absolute -top-9 left-0 m-0 rounded-md bg-slate-700 px-2 py-0 font-bold text-white ${
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
  GCP: "GCP.png",
  Go: "Go.png",
  IMU: "IMU.svg",
  MATLAB: "MATLAB.png",
  NextJS: "nextjs.png",
  Python: "Python.webp",
  React: "React.webp",
  Redux: "Redux.svg",
  Sass: "Sass.png",
  Tailwind: "Tailwind.svg",
  TypeScript: "TypeScript.png",
  Vite: "Vite.svg",
}
