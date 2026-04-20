<script setup lang="ts">
import logoImage from '~/assets/Images/favicon-logo.png'

const props = defineProps<{
  scrolled: boolean
}>()

const mobileMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/#home' },
  { label: 'Services', to: '/#services' },
  {
    label: 'Projects',
    to: '/#projects',
    dropdown: [
      { label: 'Featured Projects', to: '/#projects', description: 'Highlighted work on the homepage' },
      { label: 'All Projects', to: '/projects', description: 'Browse the full project list' },
    ]
  },
  { label: 'About Us', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

const activeDropdown = ref<string | null>(null)

const router = useRouter()

const handleNav = (to: string) => {
  mobileMenuOpen.value = false
  router.push(to)
}
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
            class="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 overflow-hidden"
            :class="scrolled ? 'bg-transparent' : 'bg-white'"
          >
            <img :src="logoImage" alt="Reckoner logo" class="h-18 w-18 object-contain" />
          </div>
          <div class="leading-none">
            <span
              class="font-['Times_New_Roman'] text-[28px] font-normal tracking-tight transition-colors duration-500"
              :class="scrolled ? 'text-gray-900' : 'text-white'"
            >Reckoner</span>
            <span
              class="block font-['Times_New_Roman'] text-[15px] font-normal tracking-widest transition-colors duration-500 -mt-1"
              :class="scrolled ? 'text-green-700' : 'text-green-400'"
            >GEOSPATIAL</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex items-center gap-1">
          <template v-for="item in navigation" :key="item.to">
            <!-- Item with dropdown -->
            <div
              v-if="item.dropdown"
              class="group relative"
              @mouseenter="activeDropdown = item.label"
              @mouseleave="activeDropdown = null"
            >
              <button
                class="nav-link relative flex items-center gap-1 px-5 py-2.5 text-[15px] font-normal cursor-pointer transition-colors duration-200"
                :class="scrolled ? 'text-gray-700 group-hover:text-green-700' : 'text-white/90 group-hover:text-white'"
              >
                <span class="absolute top-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span>{{ item.label }}</span>
                <UIcon
                  name="i-heroicons-chevron-right"
                  class="h-3.5 w-3.5 transition-transform duration-200"
                  :class="activeDropdown === item.label ? 'rotate-90' : ''"
                />
              </button>
              <!-- Dropdown Panel -->
              <Transition
                enter-active-class="transition duration-150 ease-out"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-if="activeDropdown === item.label"
                  class="absolute top-full left-0 w-56 pt-2 z-50"
                >
                  <div class="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    <div v-for="sub in item.dropdown" :key="sub.to">
                      <button
                        class="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors group/sub cursor-pointer"
                        @click="activeDropdown = null; sub.to.startsWith('/#') ? handleNav(sub.to) : navigateTo(sub.to)"
                      >
                        <span class="block text-[14px] font-medium text-gray-800 group-hover/sub:text-green-700">{{ sub.label }}</span>
                        <span class="block text-[11px] text-gray-400 mt-0.5">{{ sub.description }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Regular item -->
            <button
              v-else
              class="group nav-link relative px-5 py-2.5 text-[15px] font-normal cursor-pointer transition-colors duration-200"
              :class="scrolled ? 'text-gray-700 hover:text-green-700' : 'text-white/90 hover:text-white'"
              @click="handleNav(item.to)"
            >
              <span class="absolute top-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              {{ item.label }}
            </button>
          </template>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block ml-4 lg:ml-8">
          <button
            class="px-6 py-3 text-[15px] font-semibold rounded-xl transition-all cursor-pointer bg-green-700 hover:bg-green-800 text-white shadow-md shadow-green-900/10"
            @click="handleNav('/#contact')"
          >
            Get a Quote
          </button>
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
            <template v-for="item in navigation" :key="item.to">
              <button
                class="block w-full text-left px-4 py-3.5 text-lg font-normal text-gray-800 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all cursor-pointer"
                @click="handleNav(item.to)"
              >
                {{ item.label }}
              </button>
              <!-- Dropdown sub-items indented -->
              <template v-if="item.dropdown">
                <button
                  v-for="sub in item.dropdown"
                  :key="sub.to"
                  class="block w-full text-left pl-8 pr-4 py-2.5 text-base font-normal text-gray-500 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all cursor-pointer"
                  @click="sub.to.startsWith('/#') ? handleNav(sub.to) : (mobileMenuOpen = false, navigateTo(sub.to))"
                >
                  {{ sub.label }}
                </button>
              </template>
            </template>
            
            <div class="h-px bg-gray-100 my-2"></div>
            
            <button
              class="block w-full text-center px-4 py-4 mt-2 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded-xl shadow-lg shadow-green-900/20 transition-all cursor-pointer"
              @click="handleNav('/#contact')"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
