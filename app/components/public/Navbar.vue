<script setup lang="ts">
import logoImage from '~/assets/Images/favicon-logo.png'

const props = defineProps<{
  scrolled: boolean
}>()

const mobileMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Blogs', to: '/#blogs' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
      : 'bg-transparent border-b border-transparent'"
  >
    <nav class="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer shrink-0">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 overflow-hidden"
            :class="scrolled ? 'bg-transparent' : 'bg-white'"
          >
            <img :src="logoImage" alt="Reckoner logo" class="h-11 w-11 object-contain" />
          </div>
          <div class="leading-tight">
            <span
              class="text-[19px] font-bold tracking-tight transition-colors duration-500"
              :class="scrolled ? 'text-gray-900' : 'text-white'"
            >Reckoner</span>
            <span
              class="block text-[11px] font-bold tracking-widest transition-colors duration-500"
              :class="scrolled ? 'text-green-700' : 'text-green-400'"
            >GEOSPATIAL</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex items-center gap-1">
          <template v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="group nav-link relative px-5 py-2.5 text-[15px] font-semibold rounded-xl transition-all duration-500 cursor-pointer"
              :class="scrolled 
                ? 'text-gray-600 hover:text-green-700 hover:bg-green-50' 
                : 'text-white/90 hover:text-white hover:bg-white/10'"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-green-500 rounded-full transition-all duration-300 group-hover:w-1/2"></span>
            </NuxtLink>
          </template>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block ml-4 lg:ml-8">
          <NuxtLink
            to="/#contact"
            class="px-6 py-3 text-[15px] font-semibold rounded-xl transition-all cursor-pointer bg-green-700 hover:bg-green-800 text-white shadow-md shadow-green-900/10"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-full cursor-pointer transition-colors"
          :class="scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <UIcon :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-6 border border-gray-200/60 mt-2 z-50">
          <div class="flex flex-col space-y-2">
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              class="block px-4 py-3.5 text-lg font-bold text-gray-800 hover:text-green-700 hover:bg-green-50/80 rounded-xl transition-all cursor-pointer"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            
            <div class="h-px bg-gray-100 my-2"></div>
            
            <NuxtLink
              to="/#contact"
              class="block w-full text-center px-4 py-4 mt-2 bg-green-700 hover:bg-green-800 text-white text-lg font-bold rounded-xl shadow-lg shadow-green-900/20 transition-all cursor-pointer"
              @click="mobileMenuOpen = false"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
