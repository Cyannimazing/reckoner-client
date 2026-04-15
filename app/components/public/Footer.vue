<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Blogs', to: '/#blogs' },
  { label: 'Contact Us', to: '/#contact' },
]

const services = [
  'Topographic Survey',
  'Boundary Relocation Survey',
  'Subdivision & Consolidation',
  'Structural Surveying',
  'As-Built Survey',
  'Hydrographic Survey',
  'Drone & Aerial Mapping',
]

const socials = [
  { icon: 'i-heroicons-envelope', label: 'Email', href: 'mailto:info@reckoner.com' },
  { icon: 'i-heroicons-phone', label: 'Phone', href: 'tel:+00000000000' },
]
</script>

<template>
  <footer class="bg-gray-950 text-gray-300">

    <!-- Main Footer Grid -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 pt-20 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

        <!-- Col 1: Brand -->
        <div class="lg:col-span-1 flex flex-col gap-6">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 w-fit">
            <div class="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-white shadow-md shrink-0">
              <UIcon name="i-heroicons-globe-americas" class="h-6 w-6" />
            </div>
            <div class="leading-tight">
              <span class="text-[19px] font-bold tracking-tight text-white">Reckoner</span>
              <span class="block text-[11px] font-bold tracking-widest text-green-500">GEOSPATIAL</span>
            </div>
          </NuxtLink>

          <p class="text-[14px] text-gray-400 leading-relaxed max-w-xs">
            Delivering precision land surveying and geospatial solutions trusted by engineers, developers, and institutions for over 25 years.
          </p>

          <!-- Contact Quicklinks -->
          <div class="flex flex-col gap-3 mt-1">
            <a
              href="mailto:info@reckoner.com"
              class="flex items-center gap-3 text-[14px] text-gray-400 hover:text-green-400 transition-colors duration-200 group w-fit"
            >
              <UIcon name="i-heroicons-envelope" class="h-4 w-4 text-green-600 group-hover:text-green-400 transition-colors shrink-0" />
              info@reckoner.com
            </a>
            <a
              href="tel:+00000000000"
              class="flex items-center gap-3 text-[14px] text-gray-400 hover:text-green-400 transition-colors duration-200 group w-fit"
            >
              <UIcon name="i-heroicons-phone" class="h-4 w-4 text-green-600 group-hover:text-green-400 transition-colors shrink-0" />
              +63 (0) 000 000 000
            </a>
            <div class="flex items-start gap-3 text-[14px] text-gray-400">
              <UIcon name="i-heroicons-map-pin" class="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
              <span>Metro Manila, Philippines</span>
            </div>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="flex flex-col gap-5">
          <h3 class="font-sans text-[13px] font-bold tracking-[0.2em] uppercase text-white">
            Quick Links
          </h3>
          <ul class="flex flex-col gap-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="group flex items-center gap-2 text-[14px] text-gray-400 hover:text-green-400 transition-colors duration-200 w-fit"
              >
                <span class="h-px w-0 bg-green-500 transition-all duration-300 group-hover:w-4 rounded-full shrink-0"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Services -->
        <div class="flex flex-col gap-5">
          <h3 class="font-sans text-[13px] font-bold tracking-[0.2em] uppercase text-white">
            Our Services
          </h3>
          <ul class="flex flex-col gap-3">
            <li v-for="service in services" :key="service">
              <NuxtLink
                to="/#services"
                class="group flex items-center gap-2 text-[14px] text-gray-400 hover:text-green-400 transition-colors duration-200 w-fit"
              >
                <span class="h-px w-0 bg-green-500 transition-all duration-300 group-hover:w-4 rounded-full shrink-0"></span>
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Newsletter / CTA -->
        <div class="flex flex-col gap-5">
          <h3 class="font-sans text-[13px] font-bold tracking-[0.2em] uppercase text-white">
            Get In Touch
          </h3>
          <p class="text-[14px] text-gray-400 leading-relaxed">
            Have a project in mind? Our licensed geodetic engineers are ready to provide accurate, timely survey services.
          </p>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center gap-2 px-5 py-3 mt-1 bg-green-700 hover:bg-green-600 text-white text-[14px] font-semibold rounded-xl shadow-md shadow-green-900/30 transition-all duration-300 w-full text-center"
          >
            <UIcon name="i-heroicons-paper-airplane" class="h-4 w-4" />
            Request a Quote
          </NuxtLink>

          <!-- Certifications / Trust badges -->
          <div class="mt-4 pt-5 border-t border-gray-800 flex flex-col gap-2">
            <span class="text-[11px] font-bold tracking-widest text-gray-500 uppercase">Licensed & Certified</span>
            <div class="flex flex-wrap gap-2 mt-1">
              <span class="px-3 py-1 bg-gray-800 rounded-full text-[12px] text-gray-400 font-medium">PRC Licensed</span>
              <span class="px-3 py-1 bg-gray-800 rounded-full text-[12px] text-gray-400 font-medium">CAAP Approved</span>
              <span class="px-3 py-1 bg-gray-800 rounded-full text-[12px] text-gray-400 font-medium">LRA Accredited</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-800">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <!-- Copyright -->
        <p class="text-[13px] text-gray-500 text-center sm:text-left">
          &copy; {{ currentYear }} Reckoner Geospatial. All rights reserved.
        </p>

        <!-- Built by -->
        <p class="text-[13px] text-gray-600 italic hidden md:block">
          Precision you can stand on.
        </p>

        <!-- Links + Credit -->
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <div class="flex items-center gap-5 text-[13px] text-gray-500">
            <NuxtLink to="/privacy" class="hover:text-green-400 transition-colors duration-200">Privacy Policy</NuxtLink>
            <span class="text-gray-700">·</span>
            <NuxtLink to="/terms" class="hover:text-green-400 transition-colors duration-200">Terms of Use</NuxtLink>
          </div>
          <span class="hidden sm:block text-gray-700">·</span>
          <p class="text-[13px] text-gray-600">
            Designed & built by
            <span class="text-gray-400 font-semibold tracking-wide hover:text-green-400 transition-colors duration-200 cursor-default">CyNergy</span>
          </p>
        </div>

      </div>
    </div>

  </footer>
</template>
