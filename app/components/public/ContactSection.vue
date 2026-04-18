<template>
  <section id="contact" class="py-10 lg:py-14 relative overflow-hidden scroll-mt-18" style="background-color: #f0f7ff; background-image: linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px); background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;">
    

<div class="max-w-360 mx-auto px-4 relative z-10 reveal-section">

      <!-- Section Header (Minimized for Insert Feel) -->
      <div class="text-center mb-8 reveal-item">
        <span class="font-sans text-green-700 text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">Reach Us</span>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
          Get In Touch
        </h2>
      </div>

      <!-- Symmetrical Split Hub (Compact Insert Height) -->
      <div class="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 min-h-[300px] lg:h-[320px] w-full reveal-item delay-100">
        
        <!-- Left: Full-Height Map -->
        <div class="lg:w-3/5 relative min-h-[300px] lg:min-h-full border-r border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.5!2d121.0!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0xa26bc3a3de5a4ef5!2sMetro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            title="Location Map"
            class="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        <!-- Right: Simple Contact Data -->
        <div class="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div class="space-y-6 sm:space-y-8">
            
            <!-- Location -->
            <div class="flex items-start gap-5">
              <UIcon name="i-heroicons-map-pin" class="h-6 w-6 text-green-700 shrink-0 mt-1" />
              <div>
                <p class="font-sans text-[10px] font-bold text-green-700/60 uppercase tracking-[0.3em] mb-1">Office Location</p>
                <p class="font-sans text-lg sm:text-xl text-gray-900 font-medium tracking-tight">Metro Manila, Philippines</p>
              </div>
            </div>

            <!-- Contacts -->
            <div class="flex items-start gap-5">
              <UIcon name="i-heroicons-phone" class="h-6 w-6 text-green-700 shrink-0 mt-1" />
              <div>
                <p class="font-sans text-[10px] font-bold text-green-700/60 uppercase tracking-[0.3em] mb-1">Direct Reach</p>
                <a href="tel:+63000000000" class="block font-sans text-lg sm:text-xl text-gray-900 font-medium tracking-tight hover:text-green-700 transition-colors">+63 (0) 000 000 000</a>
                <a href="mailto:info@reckoner.com" class="block font-sans text-lg text-gray-600 font-medium tracking-tight hover:text-green-700 transition-colors mt-0.5">info@reckoner.com</a>
              </div>
            </div>

            <!-- Social Medias -->
            <div class="flex items-start gap-5">
              <UIcon name="i-heroicons-globe-alt" class="h-6 w-6 text-green-700 shrink-0 mt-1" />
              <div>
                <p class="font-sans text-[10px] font-bold text-green-700/60 uppercase tracking-[0.4em] mb-3">Professional Channels</p>
                <div class="flex gap-5">
                   <a href="#" aria-label="LinkedIn" class="text-gray-400 hover:text-green-700 transition-all transform hover:-translate-y-1">
                     <UIcon name="i-simple-icons-linkedin" class="w-6 h-6" />
                   </a>
                   <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-green-700 transition-all transform hover:-translate-y-1">
                     <UIcon name="i-simple-icons-facebook" class="w-6 h-6" />
                   </a>
                   <a href="#" aria-label="Instagram" class="text-gray-400 hover:text-green-700 transition-all transform hover:-translate-y-1">
                     <UIcon name="i-simple-icons-instagram" class="w-6 h-6" />
                   </a>
                   <a href="#" aria-label="YouTube" class="text-gray-400 hover:text-green-700 transition-all transform hover:-translate-y-1">
                     <UIcon name="i-simple-icons-youtube" class="w-6 h-6" />
                   </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
