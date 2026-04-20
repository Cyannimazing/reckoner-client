<script setup lang="ts">
import asBuiltImage from '~/assets/Images/as-build.jpg'
import boundaryRelocationImage from '~/assets/Images/boundary-relocation-1.jpg'
import caapHeightLimitImage from '~/assets/Images/caap-height-limit.jpg'
import droneSurveyImage from '~/assets/Images/drone-survey.webp'
import hydrographicSurveyImage from '~/assets/Images/hydrographic-survey.jpg'
import originalResurveyImage from '~/assets/Images/original-resurvey.jpg'
import structuralSurveyImage from '~/assets/Images/Structural-survey.jpg'
import subdivisionConsolidationImage from '~/assets/Images/subdivision-consolidation.jpg'
import topographicSurveyImage from '~/assets/Images/topographic-survey-1.jpg'

// Corporate Card Grid Layout
const services = [
  {
    title: 'Topographic Survey',
    description: 'Comprehensive terrain mapping and elevation analysis for engineering, construction, and land development projects.',
    image: topographicSurveyImage,
  },
  {
    title: 'Boundary Relocation Survey',
    description: 'Precise determination and re-establishment of property lines and corners based on original legal descriptions.',
    image: boundaryRelocationImage,
  },
  {
    title: 'Subdivision & Consolidation',
    description: 'Expert division of large tracts into smaller lots or merging of adjacent parcels for optimal land utilization.',
    image: subdivisionConsolidationImage,
  },
  {
    title: 'Structural Surveying',
    description: 'Detailed structural measurements meeting strict compliance requirements for local building and fencing permits.',
    image: structuralSurveyImage,
  },
  {
    title: 'As-Built Survey',
    description: 'Accurate documentation of completed structural additions or modifications to verify conformance to design plans.',
    image: asBuiltImage,
  },
  {
    title: 'Original & Re-Survey',
    description: 'Complete and thorough initial parcel assessments or re-evaluations to definitively resolve land boundary discrepancies.',
    image: originalResurveyImage,
  },
  {
    title: 'Hydrographic Survey',
    description: 'Advanced measurement and description of the physical features of bodies of water and adjacent coastal environments.',
    image: hydrographicSurveyImage,
  },
  {
    title: 'CAAP & Height Limitation',
    description: 'Specialized regulatory surveys ensuring structures comply with aviation authority height and safety airspace limits.',
    image: caapHeightLimitImage,
  },
  {
    title: 'Drone & Aerial Mapping',
    description: 'High-resolution aerial photogrammetry providing rapid, accurate, and cost-effective topographic data and 3D modeling.',
    image: droneSurveyImage,
  },
]
</script>

<template>
  <!-- Very soft corporate gray background -->
  <section id="services" class="scroll-mt-12 bg-[#F2F4F7] min-h-screen flex flex-col justify-center py-10 lg:py-20 border-y border-gray-200/50 relative overflow-hidden">
    
    <!-- High-Impact Architectural Grid Background (Parallax Layer in Clipped Wrapper) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -inset-y-40 inset-x-0 opacity-[0.12] parallax-layer" data-parallax-speed="-0.08"
           style="background-image: radial-gradient(#15803d 1.5px, transparent 1.5px); background-size: 32px 32px;">
      </div>
      <div class="absolute -inset-y-40 inset-x-0 opacity-[0.08] parallax-layer" data-parallax-speed="-0.04"
           style="background-image: linear-gradient(#15803d 1px, transparent 1px), linear-gradient(90deg, #15803d 1px, transparent 1px); background-size: 128px 128px;">
      </div>
    </div>

    <!-- Edge Ruler Marks (Left & Right) -->
    <div class="absolute top-0 bottom-0 left-0 w-8 border-r border-gray-400/20 z-0 opacity-40">
      <div v-for="i in 10" :key="'l'+i" class="h-px w-3 bg-gray-500 absolute left-0" :style="{ top: (i * 10) + '%' }"></div>
    </div>
    <div class="absolute top-0 bottom-0 right-0 w-8 border-l border-gray-400/20 z-0 opacity-40">
      <div v-for="i in 10" :key="'r'+i" class="h-px w-3 bg-gray-500 absolute right-0" :style="{ top: (i * 10) + '%' }"></div>
    </div>

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 relative z-10 reveal-section">

      <!-- Section Header -->
      <div class="text-center mb-12 lg:mb-16 relative reveal-item">
        <span class="font-sans text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-4 block relative z-10">What We Offer</span>
        <h2 class="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light text-gray-900 leading-tight tracking-tight relative z-10">
          Our Services
        </h2>
      </div>

      <!-- 3x3 Corporate Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <div 
          v-for="(item, index) in services" 
          :key="index"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-1 cursor-pointer reveal-item"
          :style="{ transitionDelay: (index * 60) + 'ms' }"
        >
          <!-- Top: Image Window -->
          <div class="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <!-- Subtle gradient to prevent light images from washing out -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <!-- Bottom: Content Box -->
          <div class="flex flex-col flex-1 p-6 lg:p-8 relative bg-white">
            <!-- Animated Green Accent Bar -->
            <div class="absolute top-0 left-0 h-[3px] bg-green-600 w-0 transition-all duration-500 group-hover:w-full"></div>

            <h3 class="font-sans text-[20px] font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-700 transition-colors">
              {{ item.title }}
            </h3>
            
            <p class="font-sans text-[15px] text-gray-600 leading-relaxed mb-6 flex-1">
              {{ item.description }}
            </p>

            <!-- Learn More Arrow -->
            <div class="flex items-center gap-2 mt-auto text-green-700 font-semibold text-[14px]">
              <span>Learn more</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
