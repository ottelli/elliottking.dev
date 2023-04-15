import { useEffect, useState } from "react"

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [state: T, setState: React.Dispatch<T>] {
  const [state, setState] = useState(() => {
    let stored = localStorage.getItem(key)
    console.log("STORED", stored)
    if (stored === null) {
      return initialValue
    }
    return JSON.parse(stored)
  })

  useEffect(() => {
    // console.log(state)
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
