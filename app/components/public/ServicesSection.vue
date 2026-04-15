<script setup lang="ts">
// Corporate Card Grid Layout
const services = [
  {
    title: 'Topographic Survey',
    description: 'Comprehensive terrain mapping and elevation analysis for engineering, construction, and land development projects.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Boundary Relocation Survey',
    description: 'Precise determination and re-establishment of property lines and corners based on original legal descriptions.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Subdivision & Consolidation',
    description: 'Expert division of large tracts into smaller lots or merging of adjacent parcels for optimal land utilization.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Structural Surveying',
    description: 'Detailed structural measurements meeting strict compliance requirements for local building and fencing permits.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'As-Built Survey',
    description: 'Accurate documentation of completed structural additions or modifications to verify conformance to design plans.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Original & Re-Survey',
    description: 'Complete and thorough initial parcel assessments or re-evaluations to definitively resolve land boundary discrepancies.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Hydrographic Survey',
    description: 'Advanced measurement and description of the physical features of bodies of water and adjacent coastal environments.',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'CAAP & Height Limitation',
    description: 'Specialized regulatory surveys ensuring structures comply with aviation authority height and safety airspace limits.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Drone & Aerial Mapping',
    description: 'High-resolution aerial photogrammetry providing rapid, accurate, and cost-effective topographic data and 3D modeling.',
    image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?auto=format&fit=crop&q=80&w=800',
  },
]
</script>

<template>
  <!-- Very soft corporate gray background -->
  <section id="services" class="bg-gray-50 py-12 lg:py-16 border-y border-gray-100/50">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6">

      <!-- Section Header -->
      <div class="text-center mb-12 lg:mb-16">
        <span class="font-sans text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">What We Offer</span>
        <h2 class="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light text-gray-900 leading-tight tracking-tight">
          Our Services
        </h2>
      </div>

      <!-- 3x3 Corporate Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <div 
          v-for="(item, index) in services" 
          :key="index"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100 flex flex-col hover:-translate-y-1 cursor-pointer"
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
