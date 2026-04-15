<script setup lang="ts">
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
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
