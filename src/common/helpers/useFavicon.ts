import { useEffect } from 'react'

export const useFavicon = (faviconUrl: string) =>
  useEffect(() => {
    // 1. Get the current favicon element
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement

    // 2. If it doesn't exist (rare), create it
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }

    // 3. Store the original favicon path to restore later
    const originalHref = link.href

    // 4. Set the new favicon for this page
    link.href = faviconUrl

    // 5. Cleanup: restore the original favicon when leaving this page
    return () => {
      link.href = originalHref
    }
  }, [faviconUrl])
