<template>
  <section class="bg-white pt-12 pb-24 lg:pt-16 lg:pb-32 relative">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 relative flex flex-col lg:block">
      
      <!-- Aerial / Topo Map Image Container -->
      <div class="relative w-full overflow-hidden shadow-2xl rounded-2xl aspect-[16/9] lg:aspect-[21/9] bg-gray-100">
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
      <div class="relative lg:absolute z-20 -mt-8 sm:-mt-12 lg:mt-0 lg:bottom-0 w-full lg:max-w-5xl self-center items-center mx-auto lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2">
        <div class="flex flex-col lg:flex-row w-full gap-4 lg:gap-6 items-stretch">
          
          <!-- Stats Card (Black & Green) -->
          <div class="flex flex-col lg:flex-row shadow-[0_15px_50px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden shrink-0">
            <!-- Black Stat -->
          <div class="bg-[#0b0c10] text-white flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-1 px-8 py-5 lg:px-14 lg:py-4 lg:w-auto shrink-0 border-b lg:border-b-0 lg:border-r border-gray-800">
            <span class="font-sans text-4xl lg:text-5xl font-bold text-white leading-none tracking-tight">
              147
            </span>
            <span class="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Completed Projects
            </span>
          </div>

          <!-- Accent Stat (Deep Red) -->
          <div class="bg-red-900 text-white flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-1 px-8 py-5 lg:px-14 lg:py-4 lg:w-auto shrink-0">
            <span class="font-sans text-4xl lg:text-5xl font-bold text-white leading-none tracking-tight">
              25<span class="text-3xl ml-0.5">+</span>
            </span>
            <span class="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-red-100">
              Years Experience
            </span>
          </div>
        </div>

        <!-- Quote Card (White) -->
        <div class="bg-white flex-1 flex items-center px-8 py-5 lg:px-12 lg:py-4 shadow-[0_15px_50px_rgba(0,0,0,0.08)] rounded-xl border border-gray-100/50">
          <p class="text-gray-700 text-[12px] lg:text-[14px] leading-relaxed font-medium">
              "We provide accurate and reliable land surveying solutions, helping our clients navigate their projects
              with confidence and ensuring a positive impact on the communities we serve."
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
