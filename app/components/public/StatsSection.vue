<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const count1 = ref(0)
const count2 = ref(0)
const statsCardRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
let isAnimating = false

const rollNumber = (target: number, setter: (v: number) => void) => {
  const totalDuration = 1200
  const startTime = Date.now()

  const tick = () => {
    if (!isAnimating) return
    const progress = (Date.now() - startTime) / totalDuration

    if (progress >= 1) {
      setter(target)
      return
    }

    setter(Math.floor(Math.random() * (target + 1)))
    const delay = 30 + Math.floor(progress * progress * 120)
    setTimeout(tick, delay)
  }

  tick()
}

const startAnimation = () => {
  if (isAnimating) return
  isAnimating = true
  count1.value = 0
  count2.value = 0
  rollNumber(147, v => count1.value = v)
  rollNumber(25, v => count2.value = v)
  setTimeout(() => { isAnimating = false }, 1400)
}

onMounted(async () => {
  await nextTick()
  const el = statsCardRef.value
  if (!el) return

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      startAnimation()
    } else {
      isAnimating = false
      count1.value = 0
      count2.value = 0
    }
  }, { threshold: 0.3 })

  observer.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section class="relative bg-white pt-16 pb-40 lg:pt-20 lg:pb-32 border-y border-gray-100">
    
    <!-- Background Wrapper with its own clipping to prevent bleeding -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Guaranteed Visibility: Hard-Coded SVG Geometric Grid (Parallax Layer) -->
      <div class="absolute -inset-y-40 inset-x-0 opacity-[0.6] parallax-layer" data-parallax-speed="-0.1"
           style="background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cpath d=\'M0 60 L60 0 M0 0 L60 60\' stroke=\'%2315803d\' stroke-width=\'1.5\' opacity=\'0.2\' fill=\'none\'/%3E%3Crect width=\'60\' height=\'60\' fill=\'none\' stroke=\'%2315803d\' stroke-width=\'0.5\' opacity=\'0.1\'/%3E%3C/svg%3E');">
      </div>
    </div>
    
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 relative w-full">
      
      <!-- Symmetrical Banner Insert (Matches Projects/Contact Grid) -->
      <div class="relative w-full h-[450px] overflow-hidden shadow-2xl rounded-2xl bg-gray-100 group reveal-item">
        <img 
          src="~/assets/Images/status-image2.jpg" 
          alt="Precision Geodetic Survey"
          class="w-full h-full object-cover"
        />
        
        <!-- Technical Scanning Grid Overlay -->
        <div class="absolute inset-0 z-1 pointer-events-none opacity-20" 
             style="background-image: linear-gradient(rgba(21, 128, 61, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(21, 128, 61, 0.2) 1px, transparent 1px); background-size: 40px 40px;">
        </div>
        <div class="absolute inset-0 bg-green-950/10"></div>
        
        <!-- Corner Callouts (Refined Typography) -->
        <div class="absolute top-8 left-10 flex flex-col gap-1.5 opacity-60">
          <span class="font-mono text-[10px] text-gray-900 font-bold uppercase tracking-[0.2em]">Live Survey Data</span>
          <div class="w-16 h-[2px] bg-green-700"></div>
        </div>
        <div class="absolute top-8 right-10 flex flex-col items-end gap-1.5 opacity-60">
          <span class="font-mono text-[10px] text-gray-900 font-bold tracking-widest">GS-PROTO-310</span>
          <div class="w-10 h-[1px] bg-gray-950"></div>
        </div>
      </div>
      
      <!-- Stats Banner — Positioned OUTSIDE to prevent clipping -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full px-8 sm:px-12">
        <div class="flex flex-col lg:flex-row w-full max-w-5xl mx-auto gap-4 lg:gap-6 items-center lg:items-stretch justify-center">
          
          <!-- Stats Group (Proper Mobile Floating Hub) -->
          <div ref="statsCardRef" class="flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden w-full lg:w-auto shrink-0 reveal-item delay-100">
            <div class="bg-[#0b0c10] text-white flex items-center justify-center gap-6 lg:flex-col lg:gap-1 px-8 py-4 lg:px-14 lg:py-4 shrink-0 border-b lg:border-b-0 lg:border-r border-white/10">
              <span class="font-serif text-3xl lg:text-5xl font-bold text-white leading-none tracking-tight">{{ count1 }}</span>
              <span class="font-sans text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Completed Projects</span>
            </div>
            <div class="bg-red-900 text-white flex items-center justify-center gap-6 lg:flex-col lg:gap-1 px-8 py-4 lg:px-14 lg:py-4 shrink-0 reveal-item delay-200">
              <span class="font-serif text-3xl lg:text-5xl font-bold text-white leading-none tracking-tight">{{ count2 }}<span class="text-2xl ml-0.5">+</span></span>
              <span class="font-sans text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase text-red-100">Years Experience</span>
            </div>
          </div>

          <!-- Quote Group (Restored Mobile Framing) -->
          <div class="bg-white flex-1 flex items-center px-8 py-5 lg:px-12 lg:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl border border-gray-100 w-full max-w-xl reveal-item delay-300">
            <p class="text-gray-900 text-[11px] lg:text-[14px] leading-relaxed font-medium">
              "We provide accurate and reliable land surveying solutions, helping our clients navigate their projects
              with confidence and ensuring a positive impact on the communities we serve."
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
