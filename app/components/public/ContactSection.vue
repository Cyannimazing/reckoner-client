<template>
  <section id="contact" class="bg-white py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-20">
        <span class="font-sans text-green-700 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Find Us</span>
        <h2 class="font-serif text-4xl sm:text-5xl lg:text-[56px] font-light text-gray-900 leading-tight tracking-tight">
          Get In Touch
        </h2>
      </div>

      <!-- Two-column layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        <!-- Left: Company info + highlights + socials -->
        <div class="flex flex-col gap-8">

          <!-- Logo + name -->
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white shadow-md shrink-0">
              <UIcon name="i-heroicons-globe-americas" class="h-6 w-6" />
            </div>
            <div class="leading-tight">
              <span class="text-[20px] font-bold tracking-tight text-gray-900">Reckoner</span>
              <span class="block text-[11px] font-bold tracking-widest text-green-700">GEOSPATIAL</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-[15px] text-gray-600 leading-relaxed max-w-md">
            We are a team of licensed geodetic engineers committed to delivering accurate, reliable, and timely survey services across residential, commercial, and government sectors.
          </p>

          <!-- Highlights -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div class="h-9 w-9 rounded-lg bg-green-700/10 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-shield-check" class="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p class="text-[13px] font-bold text-gray-900">PRC Licensed</p>
                <p class="text-[12px] text-gray-500 mt-0.5">Certified Geodetic Engineers</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div class="h-9 w-9 rounded-lg bg-green-700/10 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-clock" class="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p class="text-[13px] font-bold text-gray-900">25+ Years</p>
                <p class="text-[12px] text-gray-500 mt-0.5">Industry Experience</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div class="h-9 w-9 rounded-lg bg-green-700/10 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-document-check" class="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p class="text-[13px] font-bold text-gray-900">LRA Accredited</p>
                <p class="text-[12px] text-gray-500 mt-0.5">Land Registration Authority</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div class="h-9 w-9 rounded-lg bg-green-700/10 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-map" class="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p class="text-[13px] font-bold text-gray-900">147+ Projects</p>
                <p class="text-[12px] text-gray-500 mt-0.5">Completed Nationwide</p>
              </div>
            </div>
          </div>

          <!-- Social / Contact icons -->
          <div class="flex items-center gap-3 pt-2">
            <a
              href="mailto:info@reckoner.com"
              aria-label="Email"
              class="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-green-600 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
            >
              <UIcon name="i-heroicons-envelope" class="h-4.5 w-4.5" />
            </a>
            <a
              href="tel:+00000000000"
              aria-label="Phone"
              class="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-green-600 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
            >
              <UIcon name="i-heroicons-phone" class="h-4.5 w-4.5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              class="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-green-600 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
            >
              <UIcon name="i-heroicons-share" class="h-4.5 w-4.5" />
            </a>
          </div>

        </div>

        <!-- Right: Map + contact details -->
        <div class="flex flex-col gap-6">

          <!-- Embedded Map -->
          <div class="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.5!2d121.0!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0xa26bc3a3de5a4ef5!2sMetro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Reckoner Geospatial Office Location"
              class="w-full h-full"
            ></iframe>
          </div>

          <!-- Location + Contact details -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div class="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <div class="h-9 w-9 rounded-lg bg-green-700 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-map-pin" class="h-5 w-5 text-white" />
              </div>
              <div>
                <p class="text-[13px] font-bold text-gray-900 uppercase tracking-wide mb-1">Location</p>
                <p class="text-[14px] text-gray-600 leading-relaxed">
                  Metro Manila,<br />Philippines
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
              <div class="h-9 w-9 rounded-lg bg-green-700 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-phone" class="h-5 w-5 text-white" />
              </div>
              <div>
                <p class="text-[13px] font-bold text-gray-900 uppercase tracking-wide mb-1">Contact Us</p>
                <a href="tel:+00000000000" class="block text-[14px] text-gray-600 hover:text-green-700 transition-colors">+63 (0) 000 000 000</a>
                <a href="mailto:info@reckoner.com" class="block text-[14px] text-gray-600 hover:text-green-700 transition-colors mt-0.5">info@reckoner.com</a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>
