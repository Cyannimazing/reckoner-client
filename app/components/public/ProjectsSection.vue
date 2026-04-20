<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import boundaryRelocationImage from '~/assets/Images/boundary-relocation-1.jpg'
import topographicSurveyImage from '~/assets/Images/topographic-survey-1.jpg'
import structuralSurveyImage from '~/assets/Images/Structural-survey.jpg'

// Carousel State
const currentIndex = ref(0)

const projects = [
  {
    id: '01',
    title: 'Boundary Relocation Survey',
    description: 'Comprehensive boundary verification for residential and commercial developments ensuring accurate land positioning and compliance.',
    image: boundaryRelocationImage
  },
  {
    id: '02',
    title: 'Topographic Mapping',
    description: 'Detailed elevation and terrain analysis using advanced drone photogrammetry and traditional total station techniques.',
    image: topographicSurveyImage
  },
  {
    id: '03',
    title: 'Construction Staking',
    description: 'High-precision layout of proposed improvements, ensuring construction strictly adheres to architectural and engineering plans.',
    image: structuralSurveyImage
  }
]

const currentProject = computed(() => projects[currentIndex.value] || projects[0])

let timer: ReturnType<typeof setInterval> | null = null

const startTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    nextSlide()
  }, 5000)
}

const pauseTimer = () => {
  if (timer) clearInterval(timer)
}

const resumeTimer = () => {
  startTimer()
}

const resetTimer = () => {
  pauseTimer()
  startTimer()
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length
  resetTimer()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
  resetTimer()
}

const touchStartX = ref(0)
const touchEndX = ref(0)

const onTouchStart = (e: TouchEvent) => {
  if (e.changedTouches[0]) {
    touchStartX.value = e.changedTouches[0].screenX
    pauseTimer()
  }
}

const onTouchEnd = (e: TouchEvent) => {
  if (e.changedTouches[0]) {
    touchEndX.value = e.changedTouches[0].screenX
    handleSwipe()
    resumeTimer()
  }
}

const handleSwipe = () => {
  const swipeThreshold = 40
  if (touchEndX.value < touchStartX.value - swipeThreshold) {
    nextSlide()
  } else if (touchEndX.value > touchStartX.value + swipeThreshold) {
    prevSlide()
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section id="projects" class="scroll-mt-12 bg-[#F8FAFC] min-h-screen flex flex-col justify-center pt-10 pb-0 lg:py-24 relative overflow-hidden">
    
    <!-- Immersive Topographic Background Image (Parallax Layer in Clipped Wrapper) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -inset-y-40 inset-x-0 opacity-[0.12] mix-blend-multiply parallax-layer" data-parallax-speed="-0.06">
        <img src="https://images.unsplash.com/photo-1549492423-4002b9a53bb0?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover filter grayscale contrast-125" />
      </div>
    </div>

    <div class="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
      
      <!-- Drafting Sheet Frame Accents -->
      <div class="absolute -inset-4 sm:-inset-8 border border-gray-900/[0.08] pointer-events-none hidden lg:block"></div>
      <div class="absolute -inset-2 sm:-inset-4 border border-gray-900/[0.04] pointer-events-none hidden lg:block"></div>
      
      <!-- Coordinate Labels in Corners -->
      <div class="hidden lg:flex absolute -top-8 -left-4 font-mono text-[9px] text-gray-400 tracking-tighter opacity-60">N 14° 35' 5.7"</div>
      <div class="hidden lg:flex absolute -top-8 -right-4 font-mono text-[9px] text-gray-400 tracking-tighter opacity-60">E 120° 59' 0.4"</div>

      <!-- Section Header -->
      <div class="text-center mb-8 lg:mb-20 reveal-item">
        <span class="font-sans text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">What We Do</span>
        <h2 class="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light text-gray-900 leading-tight tracking-tight">
          Projects
        </h2>
      </div>

      <!-- Carousel Container -->
      <div 
        class="relative w-screen lg:w-full h-[calc(100vh-120px)] lg:h-auto lg:aspect-video overflow-hidden rounded-none lg:rounded-xl bg-gray-900 shadow-2xl group touch-pan-y reveal-item delay-100 -mx-4 sm:-mx-6 lg:mx-0"
        @mouseenter="pauseTimer"
        @mouseleave="resumeTimer"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        
        <!-- Slides -->
        <TransitionGroup 
          enter-active-class="transition-opacity duration-1000 ease-out"
          leave-active-class="transition-opacity duration-1000 ease-in absolute inset-0 z-0"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <div 
            v-for="(project, index) in projects" 
            :key="project.id"
            v-show="currentIndex === index"
            class="absolute inset-0 z-10 w-full h-full"
          >
            <!-- Background Image with slight slow zoom effect -->
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-[10s] ease-out scale-105"
              :class="{'scale-100': currentIndex === index}"
            />
            
            <!-- Dark Overlay for Readability -->
            <div class="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/40 to-gray-950/60"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/80"></div>
          </div>
        </TransitionGroup>

        <!-- Static Overlay Content (Text updates responsively based on currentIndex) -->
        <div class="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white pointer-events-none">
          
          <!-- Top Area: Featured Tag -->
          <div class="flex items-center gap-4">
            <span class="font-sans text-[11px] font-bold tracking-[0.3em] uppercase text-gray-300">Featured Projects</span>
          </div>

          <!-- Middle Area: Title and About -->
          <Transition name="slide-up" mode="out-in">
            <div :key="currentIndex" class="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12 lg:gap-24">
              <!-- Left: ID & Title -->
              <div class="max-w-2xl">
                <span class="block font-sans text-lg text-green-400 font-bold mb-3 sm:mb-4">{{ currentProject?.id }}</span>
                <h3 class="font-serif font-light text-3xl sm:text-4xl lg:text-[40px] leading-tight tracking-tight">
                  {{ currentProject?.title }}
                </h3>
              </div>

              <!-- Right: About description -->
              <div class="max-w-md hidden lg:block lg:mb-4">
                <h4 class="font-sans text-sm font-bold tracking-[0.2em] uppercase text-white mb-3">About</h4>
                <p class="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
                  {{ currentProject?.description }}
                </p>
              </div>
            </div>
          </Transition>

          <!-- Bottom Area: Controls -->
          <div class="flex justify-between items-center pointer-events-auto">

            <!-- Browse All Link -->
            <NuxtLink to="/(public)/projects" class="group/btn cursor-pointer flex items-center gap-3 lg:gap-4 text-white hover:text-green-400 transition-colors duration-700 ease-out">
              <div class="w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-700 ease-out group-hover/btn:border-green-400 group-hover/btn:bg-green-400/10">
                <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-700 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </div>
              <span class="font-sans text-[11px] lg:text-[13px] font-bold tracking-[0.15em] uppercase">Browse All Projects</span>
            </NuxtLink>

            <!-- Mobile Pagination Dots -->
            <div class="flex lg:hidden items-center gap-2">
              <button
                v-for="(_, index) in projects"
                :key="index"
                @click="currentIndex = index; resetTimer()"
                class="h-2 rounded-full transition-all duration-500 ease-out focus:outline-none"
                :class="currentIndex === index ? 'w-8 bg-green-500' : 'w-2 bg-white/40 hover:bg-white/80'"
                :aria-label="`Jump to project ${index + 1}`"
              ></button>
            </div>

            <!-- Desktop Navigation Arrows -->
            <div class="hidden lg:flex gap-4">
              <button
                @click="prevSlide"
                class="group/nav w-12 h-12 cursor-pointer rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:border-white transition-all duration-300 focus:outline-none"
                aria-label="Previous project"
              >
                <UIcon name="i-heroicons-arrow-left" class="w-5 h-5 text-white group-hover/nav:text-gray-900 group-hover/nav:-translate-x-1 transition-all duration-300 ease-out" />
              </button>
              <button
                @click="nextSlide"
                class="group/nav w-12 h-12 cursor-pointer rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:border-white transition-all duration-300 focus:outline-none"
                aria-label="Next project"
              >
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-white group-hover/nav:text-gray-900 group-hover/nav:translate-x-1 transition-all duration-300 ease-out" />
              </button>
            </div>

          </div>


        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
