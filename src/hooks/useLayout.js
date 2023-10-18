import { useEffect, useState } from 'react'

const tablet = '(min-width: 640px)'
const desktop = '(min-width: 768px)'

export function useLayout() {
  const [size, setSize] = useState(matchSize)

  function handleChange() {
    setSize(matchSize)
  }

  useEffect(() => {
    matchSize()
    window.matchMedia(tablet).addEventListener('change', handleChange)
    window.matchMedia(desktop).addEventListener('change', handleChange)

    return () => {
      window.matchMedia(tablet).removeEventListener('change', handleChange)
      window.matchMedia(desktop).removeEventListener('change', handleChange)
    }
  }, [])

  return {
    isDesktop: size === 'desktop',
    isTablet: size === 'tablet',
    isMobile: size === 'mobile',
  }
}

function matchSize() {
  if (typeof window === 'object') {
    if (window.matchMedia(desktop).matches) {
      return 'desktop'
    } else if (window.matchMedia(tablet).matches) {
      return 'tablet'
    }
  }
  return 'mobile'
}
