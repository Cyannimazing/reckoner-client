<template>
  <section class="bg-white pt-16 pb-20 sm:pb-24 lg:pt-24 lg:pb-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:block">
      
      <!-- Aerial / Topo Map Image Container -->
      <div class="relative w-full overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[21/9] bg-gray-100">
        <!-- Using a placeholder aerial map/survey image to match Figma topo feel -->
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Topographic Aerial Mapping"
          class="w-full h-full object-cover"
        />
        <!-- Subtle dark overlay for contrast -->
        <div class="absolute inset-0 bg-gray-900/10"></div>
      </div>
      
      <!-- Stats Banner — Anchored securely over the topo image -->
      <div class="relative lg:absolute z-20 -mt-16 sm:-mt-24 lg:mt-0 lg:bottom-0 w-full lg:w-auto lg:translate-y-1/2 lg:max-w-5xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] self-center items-center mx-auto lg:left-8">
        <div class="flex flex-col lg:flex-row w-full bg-white">

          <!-- Black Stat -->
          <div class="bg-[#0b0c10] text-white flex flex-col justify-center px-8 py-7 lg:px-10 lg:py-10 lg:w-[220px] shrink-0 border-b lg:border-b-0 lg:border-r border-gray-800">
            <span class="font-sans text-5xl lg:text-[64px] font-bold text-white leading-none mb-2 tracking-tight">
              147
            </span>
            <span class="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">
              Completed Projects
            </span>
          </div>

          <!-- Red Stat -->
          <div class="bg-[#B91C1C] text-white flex flex-col justify-center px-8 py-7 lg:px-10 lg:py-10 lg:w-[220px] shrink-0">
            <span class="font-sans text-5xl lg:text-[64px] font-bold text-white leading-none mb-2 tracking-tight">
              25<span class="text-4xl ml-1">+</span>
            </span>
            <span class="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-red-100">
              Years Experience
            </span>
          </div>

          <!-- Quote -->
          <div class="bg-white flex-1 flex items-center px-8 py-7 lg:px-12 lg:py-10">
            <p class="text-gray-700 text-[14px] lg:text-[16px] leading-[1.8] font-medium max-w-xl">
              "We provide accurate and reliable land surveying solutions, helping our clients navigate their projects
              with confidence and ensuring a positive impact on the communities we serve."
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
