import { useEffect } from 'react'

/** Scroll-reveal: adds .on to .reveal elements when they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) io.observe(el)
      else el.classList.add('on')
    })
    return () => io.disconnect()
  }, [])
}
