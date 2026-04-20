<script setup lang="ts">
const scrolled = ref(true)
</script>

<template>
  <div class="min-h-screen font-sans">
    <PublicNavbar :scrolled="scrolled" />
    <main>
      <slot />
    </main>
    <PublicFooter />
  </div>
</template>
