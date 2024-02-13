'use client'

import { useEffect, useState } from 'react'

const breakpoints = {
  sm: '(max-width: 639px)',
  md: '(min-width: 640px) and (max-width: 767px)',
  lg: '(min-width: 768px)',
}

export function useMediaQuery(breakpoint) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoints[breakpoint])

    function handleMatches(event) {
      setMatches(event.matches)
    }

    // Set initial state and add event listener
    setMatches(mediaQuery.matches)
    mediaQuery.addEventListener(handleMatches)

    // Remove event listener on cleanup
    return () => {
      mediaQuery.removeEventListener(handleMatches)
    }
  }, [breakpoint])

  return matches
}
