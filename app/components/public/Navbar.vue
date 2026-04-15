<script setup lang="ts">
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
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b shadow-sm"
    :class="scrolled
      ? 'bg-white border-gray-100'
      : 'bg-white border-gray-100'"
  >
    <nav class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer shrink-0">
          <div
            class="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-white shadow-sm transition-all duration-300"
          >
            <UIcon name="i-heroicons-globe-americas" class="h-6 w-6" />
          </div>
          <div class="leading-tight">
            <span
              class="text-[19px] font-bold tracking-tight text-gray-900"
            >Reckoner</span>
            <span
              class="block text-[11px] font-bold tracking-widest text-green-700"
            >GEOSPATIAL</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex items-center gap-1">
          <template v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="group nav-link relative px-5 py-2.5 text-[15px] font-semibold rounded-xl transition-all duration-300 cursor-pointer text-gray-600 hover:text-green-700 hover:bg-green-100"
            >
              {{ item.label }}
              <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-green-700 rounded-full transition-all duration-300 group-hover:w-1/2"></span>
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
          class="lg:hidden p-2 rounded-full cursor-pointer transition-colors text-gray-700 hover:bg-gray-100"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <UIcon :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden bg-white rounded-xl shadow-xl p-4 mb-2 border border-gray-100">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg cursor-pointer"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="block mt-3 text-center px-4 py-3 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-lg cursor-pointer"
            @click="mobileMenuOpen = false"
          >
            Contact Us
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>
