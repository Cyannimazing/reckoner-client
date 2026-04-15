<script setup lang="ts">
const serviceKeywords = [
  'Relocation', 'Topographic', 'Structural', 'As-Built',
  'CAAP Height Limitation', 'Hydrographic', 'Parcellary',
  'Construction Surveys', 'Titling & Property Research'
]
</script>

<template>
  <div class="relative">

    <!-- Hero Section -->
    <section class="relative min-h-screen flex flex-col overflow-visible pt-[72px]">

      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80"
          alt="Surveying and construction site"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/60 to-gray-900/30"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-gray-950/20"></div>
      </div>

      <!-- Left Accent Bar -->
      <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-green-600 z-10 hidden lg:block"></div>

      <!-- Hero Content -->
      <div class="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12">
        <div class="max-w-full lg:max-w-5xl">

          <!-- Label -->
          <div class="mb-10">
            <span class="text-green-400 text-[13px] font-semibold uppercase tracking-[0.25em]">
              Licensed Geodetic Engineers
            </span>
          </div>

          <!-- Heading -->
          <h1 class="font-serif text-5xl sm:text-[64px] lg:text-[76px] font-normal text-white leading-[1.1] sm:leading-[1.08] tracking-tight mb-8 sm:mb-10">
            Land Surveying and
            <br class="hidden sm:block" />Mapping Solutions
          </h1>

          <!-- Service Keywords -->
          <div class="flex flex-wrap items-center gap-y-1.5 gap-x-2 sm:gap-y-2 sm:gap-x-3 mb-12 sm:mb-16 max-w-3xl">
            <template v-for="(keyword, index) in serviceKeywords" :key="keyword">
              <span class="text-white/95 text-[15px] sm:text-lg lg:text-[20px] font-medium leading-relaxed">
                {{ keyword }}
              </span>
              <span v-if="index < serviceKeywords.length - 1" class="text-green-500/80 font-medium mx-0.5 sm:mx-1 lg:mx-2">|</span>
            </template>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-6 w-full sm:w-auto">
            <NuxtLink
              to="/#contact"
              class="inline-flex justify-center items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-[16px] font-semibold rounded-xl shadow-xl shadow-green-900/40 hover:shadow-green-800/60 transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto text-center"
            >
              Get a quote
            </NuxtLink>
            <NuxtLink
              to="/#services"
              class="inline-flex justify-center items-center px-8 py-4 text-white hover:text-white text-[16px] font-medium rounded-xl border border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto text-center"
            >
              Our Services
            </NuxtLink>
          </div>

        </div>
      </div>

    </section>

  </div>
</template>