import { useEffect, useState } from 'react'

export default function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0.1,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
