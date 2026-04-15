export default defineNuxtPlugin(() => {
  if (process.client) {
    // --- Reveal Animation Observer (Bi-Directional) ---
    const revealOptions = {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          // Re-enable this to "reset" animations when scrolling away
          entry.target.classList.remove('is-visible')
        }
      })
    }, revealOptions)

    // --- Parallax Engine (60fps Performance) ---
    let scrollY = window.scrollY
    let ticking = false

    const updateParallax = () => {
      const layers = document.querySelectorAll('.parallax-layer')
      layers.forEach((layer) => {
        const htmlLayer = layer as HTMLElement
        const speed = parseFloat(htmlLayer.getAttribute('data-parallax-speed') || '0.1')
        const offset = scrollY * speed
        // Shift background slightly to create depth
        htmlLayer.style.transform = `translateY(${offset}px)`
      })
      ticking = false
    }

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax()
          ticking = false
        })
        ticking = true
      }
    })

    // --- DOM Watcher (Ensures new elements are captured) ---
    const scanAndObserve = () => {
      const revealItems = document.querySelectorAll('.reveal-item')
      revealItems.forEach((item) => revealObserver.observe(item))
      
      // Also trigger initial parallax update
      updateParallax()
    }

    const mutationObserver = new MutationObserver(() => {
      scanAndObserve()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Initial run
    scanAndObserve()

    // Handle Nuxt page transitions
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:finish', () => {
      scanAndObserve()
    })
  }
})
