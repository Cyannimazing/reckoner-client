<script setup lang="ts">
import { findProjectByUuid, projects, type Project } from '~/data/projects'

definePageMeta({
  layout: 'public'
})

const route = useRoute()
const uuidParam = route.params.uuid
const uuid = Array.isArray(uuidParam)
  ? uuidParam[0] ?? ''
  : String(uuidParam ?? '')
const project = findProjectByUuid(uuid)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
    fatal: true,
  })
}

const currentIndex = projects.findIndex(item => item.uuid === project.uuid)
const fallbackProject = projects[0] as Project
const nextProject = (projects[(currentIndex + 1) % projects.length] ?? fallbackProject) as Project

const statusStyle: Record<string, string> = {
  Ongoing: 'bg-blue-100 text-blue-700 border-blue-200',
  Upcoming: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Finished: 'bg-green-100 text-green-700 border-green-200',
}

const projectStats = [
  { label: 'Project Type', value: project.category },
  { label: 'Location', value: project.location },
  { label: 'Duration', value: project.duration },
  { label: 'Reference', value: project.coordinates },
]

const imageMedia = project.media.filter(item => item.type === 'image')
const videoMedia = project.media.filter(item => item.type === 'video')
const featuredMedia = videoMedia[0] ?? imageMedia[0]

const documentSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'media', label: 'Media' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'approach', label: 'Approach' },
  { id: 'deliverables', label: 'Deliverables' },
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-[#EEF2F0] pt-24 text-gray-900">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -inset-y-40 inset-x-0 opacity-[0.08]"
        style="background-image: radial-gradient(#15803d 1.5px, transparent 1.5px); background-size: 32px 32px;"
      ></div>
      <div
        class="absolute -inset-y-40 inset-x-0 opacity-[0.06]"
        style="background-image: linear-gradient(#15803d 1px, transparent 1px), linear-gradient(90deg, #15803d 1px, transparent 1px); background-size: 128px 128px;"
      ></div>
      <div class="absolute -right-40 top-10 h-96 w-96 rounded-full bg-green-700/10 blur-3xl"></div>
      <div class="absolute -left-40 top-[36rem] h-96 w-96 rounded-full bg-green-700/5 blur-3xl"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-8">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          class="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-gray-200 bg-white/85 px-4 py-2.5 font-sans text-sm font-semibold text-gray-600 shadow-sm backdrop-blur-xl transition-colors hover:border-green-700/30 hover:text-green-700"
          @click="navigateTo('/projects')"
        >
          <span class="transition-transform group-hover:-translate-x-1">←</span>
          <span>Back to projects</span>
        </button>

        <div class="flex items-center gap-2">
          <span class="rounded-full border border-gray-200 bg-white/85 px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500 backdrop-blur-xl">
            Ref {{ project.id }}
          </span>
          <span
            class="rounded-full border px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.2em]"
            :class="statusStyle[project.status]"
          >
            {{ project.status }}
          </span>
        </div>
      </div>

      <div class="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-gray-900/10">
        <div class="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div class="flex min-h-[520px] flex-col justify-between p-6 sm:p-10 lg:p-12">
            <div>
              <div class="mb-10 flex flex-wrap items-center gap-3">
                <span class="rounded-full bg-green-700 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-white">
                  {{ project.category }}
                </span>
                <span class="rounded-full border border-gray-200 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-gray-500">
                  {{ project.sector }}
                </span>
                <span class="rounded-full border border-gray-200 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-gray-500">
                  {{ project.year }}
                </span>
              </div>

              <p class="mb-4 font-sans text-xs font-bold uppercase tracking-[0.35em] text-green-700">
                Project Dossier
              </p>
              <h1 class="max-w-4xl font-serif text-4xl font-light leading-[0.98] tracking-tight text-gray-950 sm:text-5xl lg:text-[72px]">
                {{ project.title }}
              </h1>
              <p class="mt-7 max-w-2xl font-sans text-base leading-relaxed text-gray-600 sm:text-lg">
                {{ project.summary }}
              </p>
            </div>

            <div class="mt-10 grid gap-3 sm:grid-cols-2">
              <div
                v-for="stat in projectStats"
                :key="stat.label"
                class="rounded-2xl border border-gray-100 bg-[#F7F9F8] p-4"
              >
                <span class="mb-4 block h-1 w-10 rounded-full bg-green-700"></span>
                <p class="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">{{ stat.label }}</p>
                <p class="mt-1 font-sans text-sm font-semibold text-gray-950">{{ stat.value }}</p>
              </div>
            </div>
          </div>

          <div class="relative min-h-[420px] overflow-hidden bg-green-950/80 lg:min-h-[620px]">
            <img
              :src="project.image"
              :alt="project.title"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-green-950/65 via-green-950/5 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/60 bg-white/90 p-5 text-gray-900 shadow-xl shadow-green-950/10 backdrop-blur-xl">
              <p class="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-green-700">Site Location</p>
              <p class="mt-3 font-sans text-lg font-semibold leading-tight">{{ project.location }}</p>
              <p class="mt-1 font-sans text-sm text-gray-500">{{ project.coordinates }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
        <aside class="hidden lg:block">
          <div class="sticky top-28 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-900/5">
            <div class="border-b border-gray-100 bg-[#F8FAFC] p-5">
              <p class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Contents</p>
              <p class="mt-2 font-sans text-sm text-gray-500">Project record navigation</p>
            </div>
            <nav class="space-y-1 p-3">
              <a
                v-for="(section, index) in documentSections"
                :key="section.id"
                :href="`#${section.id}`"
                class="group flex items-center justify-between rounded-2xl px-4 py-3 font-sans text-sm font-semibold text-gray-500 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                <span class="flex items-center gap-3">
                  <span class="font-mono text-[11px] text-gray-300 group-hover:text-green-700">{{ String(index + 1).padStart(2, '0') }}</span>
                  {{ section.label }}
                </span>
                <span class="h-px w-0 rounded-full bg-green-700 transition-all duration-300 group-hover:w-5"></span>
              </a>
            </nav>
          </div>
        </aside>

        <article class="space-y-6">
          <div id="overview" class="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div class="grid lg:grid-cols-[240px_1fr]">
              <div class="border-b border-gray-100 bg-[#F8FAFC] p-6 lg:border-b-0 lg:border-r lg:p-8">
                <span class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Overview</span>
                <h2 class="mt-3 font-sans text-2xl font-bold tracking-tight text-gray-950">Project Documentation</h2>
              </div>
              <div class="p-6 sm:p-8 lg:p-10">
                <p class="max-w-3xl font-sans text-lg leading-relaxed text-gray-600">
                  {{ project.summary }}
                </p>

                <div class="mt-8 grid gap-3 sm:grid-cols-3">
                  <div class="rounded-2xl border border-gray-100 bg-[#F7F9F8] p-5">
                    <p class="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">Client</p>
                    <p class="mt-2 font-sans text-sm font-semibold text-gray-900">{{ project.client }}</p>
                  </div>
                  <div class="rounded-2xl border border-gray-100 bg-[#F7F9F8] p-5">
                    <p class="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">Region</p>
                    <p class="mt-2 font-sans text-sm font-semibold text-gray-900">{{ project.region }}</p>
                  </div>
                  <div class="rounded-2xl border border-gray-100 bg-[#F7F9F8] p-5">
                    <p class="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">Timeline</p>
                    <p class="mt-2 font-sans text-sm font-semibold text-gray-900">{{ project.duration }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="media" class="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div class="border-b border-gray-100 p-6 sm:p-8 lg:p-10">
              <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Media</span>
                  <h2 class="mt-3 font-sans text-3xl font-bold tracking-tight text-gray-950">Images and Videos</h2>
                </div>
                <p class="max-w-sm font-sans text-sm leading-relaxed text-gray-500">
                  Field photos, drone captures, walkthrough videos, and supporting documentation media.
                </p>
              </div>
            </div>

            <div class="p-4 sm:p-6 lg:p-8">
              <div class="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
                <div
                  v-if="featuredMedia"
                  class="group overflow-hidden rounded-3xl border border-gray-100 bg-green-950/80 shadow-sm"
                >
                  <div class="relative aspect-video overflow-hidden">
                    <img
                      v-if="featuredMedia.type === 'image'"
                      :src="featuredMedia.source"
                      :alt="featuredMedia.title"
                      class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <iframe
                      v-else-if="featuredMedia.embedUrl"
                      :src="featuredMedia.embedUrl"
                      :title="featuredMedia.title"
                      class="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <template v-else>
                      <img
                        :src="featuredMedia.poster"
                        :alt="featuredMedia.title"
                        class="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent"></div>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <span class="rounded-full border border-white/30 bg-white/15 px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md transition-colors group-hover:bg-green-700">
                          Video
                        </span>
                      </div>
                    </template>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-950/90 to-transparent p-6 text-white">
                      <p class="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-green-300">{{ featuredMedia.type }}</p>
                      <h3 class="mt-2 font-sans text-xl font-bold leading-tight">{{ featuredMedia.title }}</h3>
                      <p class="mt-2 max-w-xl font-sans text-sm leading-relaxed text-white/65">{{ featuredMedia.caption }}</p>
                    </div>
                  </div>
                </div>

                <div class="grid gap-4">
                  <div
                    v-for="item in project.media"
                    :key="`${item.type}-${item.title}`"
                    class="group grid grid-cols-[112px_1fr] overflow-hidden rounded-2xl border border-gray-100 bg-[#F8FAFC] shadow-sm"
                  >
                    <div class="relative min-h-28 overflow-hidden bg-green-950/80">
                      <img
                        v-if="item.type === 'image'"
                        :src="item.source"
                        :alt="item.title"
                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <img
                        v-else
                        :src="item.poster"
                        :alt="item.title"
                        class="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div v-if="item.type === 'video'" class="absolute inset-0 flex items-center justify-center">
                        <span class="rounded-full bg-white/20 px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                          Video
                        </span>
                      </div>
                    </div>
                    <div class="p-4">
                      <div class="mb-2 flex items-center gap-2">
                        <span class="h-px w-5 rounded-full bg-green-700"></span>
                        <span class="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{{ item.type }}</span>
                      </div>
                      <h3 class="font-sans text-sm font-bold leading-snug text-gray-950">{{ item.title }}</h3>
                      <p class="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-gray-500">{{ item.caption }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="challenge" class="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div class="grid lg:grid-cols-[240px_1fr]">
              <div class="border-b border-gray-100 bg-[#F8FAFC] p-6 lg:border-b-0 lg:border-r lg:p-8">
                <span class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Challenge</span>
                <h2 class="mt-3 font-sans text-2xl font-bold tracking-tight text-gray-950">Field Context</h2>
              </div>
              <div class="p-6 sm:p-8 lg:p-10">
                <p class="max-w-3xl border-l-4 border-green-700 pl-6 font-sans text-lg leading-relaxed text-gray-600">
                  {{ project.challenge }}
                </p>
              </div>
            </div>
          </div>

          <div id="approach" class="scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <span class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Approach</span>
            <h2 class="mt-3 font-sans text-3xl font-bold tracking-tight text-gray-950">How the Work Is Structured</h2>
            <div class="mt-8 grid gap-4">
              <div
                v-for="(item, index) in project.approach"
                :key="item"
                class="grid gap-4 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5 sm:grid-cols-[64px_1fr]"
              >
                <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-700 font-mono text-sm font-bold text-white">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <div>
                  <p class="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-green-700">Procedure</p>
                  <p class="mt-2 font-sans text-base leading-relaxed text-gray-600">{{ item }}</p>
                </div>
              </div>
            </div>
          </div>

          <div id="deliverables" class="scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <span class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Deliverables</span>
            <h2 class="mt-3 font-sans text-3xl font-bold tracking-tight text-gray-950">Included Outputs</h2>
            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <div
                v-for="item in project.deliverables"
                :key="item"
                class="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-4"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700">
                </span>
                <div>
                  <p class="font-sans text-sm font-bold text-gray-900">{{ item }}</p>
                  <p class="mt-1 font-sans text-xs leading-relaxed text-gray-500">Prepared as part of the project documentation package.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-3xl border border-green-700/15 bg-white p-6 text-gray-900 shadow-xl shadow-green-900/5 sm:p-8 lg:p-10">
            <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p class="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-green-700">Next Case</p>
                <h2 class="mt-3 max-w-2xl font-sans text-3xl font-bold leading-tight tracking-tight">
                  {{ nextProject.title }}
                </h2>
                <p class="mt-3 font-sans text-sm text-gray-500">{{ nextProject.location }}</p>
              </div>
              <button
                class="inline-flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-green-700 px-6 py-4 font-sans text-sm font-bold text-white transition-colors hover:bg-green-600"
                @click="navigateTo(`/projects/${nextProject.uuid}`)"
              >
                View next project
                <span>→</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
