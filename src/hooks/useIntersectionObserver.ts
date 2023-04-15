import { useEffect, useRef, useState } from "react"

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    const container = containerRef.current // copy to variable so cleanup function uses same ref

    if (container) observer.observe(container)

    return () => {
      if (container) observer.unobserve(container)
    }
  }, [containerRef, options])

  return { containerRef, isVisible }
}

export default useIntersectionObserver
