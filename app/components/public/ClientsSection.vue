<template>
  <section class="relative bg-white py-16 border-y border-gray-200 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none"
         style="background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px); background-size: 24px 24px; opacity: 0.45;"></div>


    <div class="max-w-360 mx-auto px-4 sm:px-6 lg:px-12">
      <h2 class="text-center font-serif text-3xl lg:text-4xl text-gray-900 mb-12 reveal-item">
        Our Clients
      </h2>
    </div>

    <!-- Marquee with fog edges -->
    <div class="marquee-wrapper">
      <div class="marquee-track">
        <!-- Sets 1–4: 4 copies so there's never a gap on wide screens -->
        <template v-for="i in 4" :key="i">
          <div class="marquee-set" :aria-hidden="i > 1 ? 'true' : undefined">
            <img src="~/assets/Images/clients/manila-waters.png" :alt="i === 1 ? 'Manila Water' : ''" />
            <img src="~/assets/Images/clients/architex 1.png" :alt="i === 1 ? 'Architex' : ''" />
            <img src="~/assets/Images/clients/samal-shores.png" :alt="i === 1 ? 'Samal Shores' : ''" />
            <img src="~/assets/Images/clients/suzuki.png" :alt="i === 1 ? 'Suzuki' : ''" />
            <img src="~/assets/Images/clients/Petro-Gazz-Logo.png" :alt="i === 1 ? 'Petro Gazz' : ''" />
            <img src="~/assets/Images/clients/san-pedro-college.png" :alt="i === 1 ? 'San Pedro College' : ''" />
            <img src="~/assets/Images/clients/davao-doctors.png" :alt="i === 1 ? 'Davao Doctors Hospital' : ''" />
            <img src="~/assets/Images/clients/verdant.png" :alt="i === 1 ? 'Verdant' : ''" />
            <img src="~/assets/Images/clients/premium-lands.png" :alt="i === 1 ? 'Premium Lands' : ''" />
          </div>
        </template>
      </div>
    </div>

  </section>
</template>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 28s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-set {
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 0 1.75rem;
}

.marquee-set img {
  height: 3.5rem;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-25%); }
}
</style>
