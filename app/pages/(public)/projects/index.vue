<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { projects } from '~/data/projects'

definePageMeta({
  layout: 'public'
})

const filterRegion = ref('')
const filterSector = ref('')
const filterService = ref('')
const filterStatus = ref('')
const activeFilter = ref<string | null>(null)
const filtersRef = ref<HTMLElement | null>(null)
const loadMoreRef = ref<HTMLElement | null>(null)
const visibleCount = ref(6)
const isLoadingMore = ref(false)

const pageSize = 6
const paginationDelayMs = 1200
let loadObserver: IntersectionObserver | null = null
let loadTimer: ReturnType<typeof setTimeout> | null = null

const filterControls = [
  {
    id: 'region',
    eyebrow: 'Area',
    label: 'Region',
    model: filterRegion,
    options: [
      { label: 'All regions', value: '' },
      { label: 'Davao Region', value: 'Davao Region' },
      { label: 'Mindanao', value: 'Mindanao' },
    ],
  },
  {
    id: 'sector',
    eyebrow: 'Market',
    label: 'Sector',
    model: filterSector,
    options: [
      { label: 'All sectors', value: '' },
      { label: 'Residential', value: 'Residential' },
      { label: 'Commercial', value: 'Commercial' },
      { label: 'Infrastructure', value: 'Infrastructure' },
    ],
  },
  {
    id: 'service',
    eyebrow: 'Scope',
    label: 'Service',
    model: filterService,
    options: [
      { label: 'All services', value: '' },
      { label: 'Boundary Survey', value: 'Boundary Survey' },
      { label: 'Topographic Survey', value: 'Topographic Survey' },
      { label: 'Structural Survey', value: 'Structural Survey' },
      { label: 'Hydrographic Survey', value: 'Hydrographic Survey' },
      { label: 'As-Built Survey', value: 'As-Built Survey' },
      { label: 'CAAP Survey', value: 'CAAP Survey' },
      { label: 'Original Survey', value: 'Original Survey' },
      { label: 'Subdivision Survey', value: 'Subdivision Survey' },
      { label: 'Drone Survey', value: 'Drone Survey' },
      { label: 'Relocation Survey', value: 'Relocation Survey' },
    ],
  },
  {
    id: 'status',
    eyebrow: 'Progress',
    label: 'Status',
    model: filterStatus,
    options: [
      { label: 'Any status', value: '' },
      { label: 'Ongoing', value: 'Ongoing' },
      { label: 'Upcoming', value: 'Upcoming' },
      { label: 'Finished', value: 'Finished' },
    ],
  },
]

const filteredProjects = computed(() => projects.filter(p => {
  if (filterRegion.value && p.region !== filterRegion.value) return false
  if (filterSector.value && p.sector !== filterSector.value) return false
  if (filterService.value && p.category !== filterService.value) return false
  if (filterStatus.value && p.status !== filterStatus.value) return false
  return true
}))

const activeFilterCount = computed(() => filterControls.filter(control => control.model.value).length)
const visibleProjects = computed(() => filteredProjects.value.slice(0, visibleCount.value))
const hasMoreProjects = computed(() => visibleCount.value < filteredProjects.value.length)

const selectedFilterLabel = (control: typeof filterControls[number]) => {
  return control.options.find(option => option.value === control.model.value)?.label || control.label
}

const chooseFilterOption = (control: typeof filterControls[number], value: string) => {
  control.model.value = value
  activeFilter.value = null
}

const clearFilters = () => {
  filterControls.forEach(control => {
    control.model.value = ''
  })
  visibleCount.value = pageSize
  activeFilter.value = null
}

const loadMoreProjects = () => {
  if (!hasMoreProjects.value || isLoadingMore.value) return

  isLoadingMore.value = true
  loadTimer = setTimeout(() => {
    visibleCount.value = Math.min(visibleCount.value + pageSize, filteredProjects.value.length)
    isLoadingMore.value = false
  }, paginationDelayMs)
}

const handleDocumentClick = (event: MouseEvent) => {
  if (!filtersRef.value?.contains(event.target as Node)) {
    activeFilter.value = null
  }
}

const statusStyle: Record<string, string> = {
  Ongoing:  'bg-blue-100 text-blue-700',
  Upcoming: 'bg-yellow-100 text-yellow-700',
  Finished: 'bg-green-100 text-green-700',
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)

  if (loadMoreRef.value) {
    loadObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        loadMoreProjects()
      }
    }, {
      rootMargin: '240px 0px',
      threshold: 0,
    })

    loadObserver.observe(loadMoreRef.value)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
  loadObserver?.disconnect()
  if (loadTimer) clearTimeout(loadTimer)
})

watch([filterRegion, filterSector, filterService, filterStatus], () => {
  visibleCount.value = pageSize
  isLoadingMore.value = false
  if (loadTimer) clearTimeout(loadTimer)
})
</script>

<template>
  <section class="bg-[#F2F4F7] min-h-screen pt-28 pb-20 border-b border-gray-200/50 relative overflow-hidden">

    <!-- Background grid — matches ServicesSection -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -inset-y-40 inset-x-0 opacity-[0.12]"
        style="background-image: radial-gradient(#15803d 1.5px, transparent 1.5px); background-size: 32px 32px;">
      </div>
      <div class="absolute -inset-y-40 inset-x-0 opacity-[0.08]"
        style="background-image: linear-gradient(#15803d 1px, transparent 1px), linear-gradient(90deg, #15803d 1px, transparent 1px); background-size: 128px 128px;">
      </div>
    </div>

    <div class="max-w-360 mx-auto px-4 sm:px-6 lg:px-6 relative z-10">

      <!-- Filters -->
      <div ref="filtersRef" class="relative z-40 mb-10 rounded-3xl border border-white/80 bg-white/75 p-3 shadow-xl shadow-gray-200/50 backdrop-blur-xl lg:p-4">
        <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div class="flex items-center gap-3 px-1">
            <div>
              <span class="block font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Project Filters</span>
              <p class="font-sans text-sm text-gray-500">Showing {{ visibleProjects.length }} of {{ filteredProjects.length }} projects</p>
            </div>
          </div>

          <button
            v-if="activeFilterCount"
            class="self-start cursor-pointer rounded-full border border-green-700/20 bg-green-50 px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.18em] text-green-800 transition-all hover:border-green-700/40 hover:bg-green-100 lg:self-auto"
            @click="clearFilters"
          >
            Clear {{ activeFilterCount }}
          </button>
        </div>

        <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="control in filterControls"
            :key="control.id"
            class="relative"
          >
            <button
              class="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border bg-white px-4 py-3 text-left shadow-sm transition-colors duration-300"
              :class="control.model.value
                ? 'border-green-700/35 ring-4 ring-green-700/10'
                : 'border-gray-200/80 hover:border-green-700/25'"
              @click.stop="activeFilter = activeFilter === control.id ? null : control.id"
              @keydown.escape="activeFilter = null"
            >
              <span class="flex min-w-0 items-center gap-3">
                <span
                  class="h-8 w-1 shrink-0 rounded-full transition-colors"
                  :class="control.model.value ? 'bg-green-700' : 'bg-gray-200 group-hover:bg-green-700/50'"
                ></span>
                <span class="min-w-0">
                  <span class="block font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">{{ control.eyebrow }}</span>
                  <span class="block truncate font-sans text-sm font-semibold text-gray-900">{{ selectedFilterLabel(control) }}</span>
                </span>
              </span>
              <span
                class="shrink-0 font-sans text-xs font-bold text-gray-400 transition-transform duration-300"
                :class="activeFilter === control.id ? 'rotate-180 text-green-700' : ''"
              >⌄</span>
            </button>

            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 -translate-y-2 scale-95"
            >
              <div
                v-if="activeFilter === control.id"
                class="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-gray-900/15"
              >
                <button
                  v-for="option in control.options"
                  :key="option.label"
                  class="group/option relative flex w-full cursor-pointer items-center justify-between overflow-hidden px-4 py-3 text-left font-sans text-sm transition-all duration-300 ease-out hover:bg-green-50 hover:pl-5"
                  :class="control.model.value === option.value ? 'bg-green-700 text-white hover:bg-green-700' : 'text-gray-600'"
                  @click="chooseFilterOption(control, option.value)"
                >
                  <span
                    class="absolute inset-y-2 left-0 w-1 origin-y-center rounded-r-full bg-green-700 transition-transform duration-300 ease-out"
                    :class="control.model.value === option.value ? 'scale-y-100 bg-white/80' : 'scale-y-0 group-hover/option:scale-y-100'"
                  ></span>
                  <span class="relative font-medium transition-transform duration-300 ease-out group-hover/option:translate-x-1">{{ option.label }}</span>
                  <span
                    v-if="control.model.value === option.value"
                    class="relative font-sans text-xs font-bold"
                  >Selected</span>
                  <span
                    v-else
                    class="relative h-px w-0 rounded-full bg-green-700 transition-all duration-300 group-hover/option:w-5"
                  ></span>
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <!-- Grid -->
      <div class="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(project, index) in visibleProjects"
          :key="project.id"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-1"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span class="bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-lg border border-white/30">Project</span>
              <span class="text-white text-[11px] font-sans drop-shadow">
                {{ project.location }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1 p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="font-sans text-gray-400 text-[12px]">{{ project.client }}</span>
              <span class="font-sans text-gray-400 text-[12px]">{{ project.category }}</span>
            </div>
            <h3 class="font-sans text-[18px] font-semibold text-gray-900 leading-snug flex-1 mb-4">
              {{ project.title }}
            </h3>
            <div class="flex items-center justify-between">
              <span class="font-sans text-[11px] font-semibold px-3 py-1 rounded-full" :class="statusStyle[project.status]">
                {{ project.status }}
              </span>
              <NuxtLink
                :to="`/projects/${project.uuid}`"
                class="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-2 font-sans text-[13px] text-gray-600 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-all cursor-pointer group/btn"
              >
                <span>Read more</span>
                <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredProjects.length === 0" class="col-span-3 text-center py-20 text-gray-400 font-sans">
          No projects match the selected filters.
        </div>
      </div>

      <div ref="loadMoreRef" class="relative z-0 min-h-8">
        <div
          v-if="isLoadingMore"
          class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <div
            v-for="index in 3"
            :key="index"
            class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div class="h-52 animate-pulse bg-linear-to-r from-gray-100 via-gray-200 to-gray-100"></div>
            <div class="space-y-4 p-6">
              <div class="flex items-center justify-between">
                <div class="h-3 w-28 animate-pulse rounded-full bg-gray-200"></div>
                <div class="h-3 w-20 animate-pulse rounded-full bg-gray-200"></div>
              </div>
              <div class="space-y-2">
                <div class="h-4 w-full animate-pulse rounded-full bg-gray-200"></div>
                <div class="h-4 w-2/3 animate-pulse rounded-full bg-gray-200"></div>
              </div>
              <div class="flex items-center justify-between pt-2">
                <div class="h-7 w-20 animate-pulse rounded-full bg-green-100"></div>
                <div class="h-9 w-24 animate-pulse rounded-xl bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-else-if="filteredProjects.length > 0 && !hasMoreProjects"
          class="mt-10 flex justify-center"
        >
          <span class="rounded-full border border-green-700/15 bg-white/80 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-green-700 shadow-sm">
            All projects loaded
          </span>
        </div>
      </div>

    </div>
  </section>
</template>
