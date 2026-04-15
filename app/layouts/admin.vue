<script setup lang="ts">
import AuthService from '~/composables/api/AuthService'

const route = useRoute()
const colorMode = useColorMode()

const navigation = [
  { label: 'Overview', to: '/dashboard', icon: 'i-heroicons-chart-pie' },
  { label: 'Users', to: '/dashboard?tab=users', icon: 'i-heroicons-users' },
  { label: 'Settings', to: '/dashboard?tab=settings', icon: 'i-heroicons-cog-8-tooth' },
]

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const logout = async () => {
  try {
    await AuthService.logout()
  } catch {
    // No-op: local logout should still continue even if API call fails
  }

  if (import.meta.client) {
    localStorage.removeItem('_token')
    localStorage.removeItem('_user')
  }

  await navigateTo('/login')
}

const userMenuItems = [
  [
    {
      label: 'Profile Settings',
      icon: 'i-heroicons-user-circle',
      to: '/dashboard?tab=settings',
      click: () => navigateTo('/dashboard?tab=settings'),
      onSelect: () => navigateTo('/dashboard?tab=settings'),
      class: 'cursor-pointer'
    }
  ],
  [
    {
      label: 'Log out',
      icon: 'i-heroicons-arrow-right-on-rectangle',
      click: logout,
      onSelect: logout,
      class: 'cursor-pointer'
    }
  ]
]
</script>

<template>
  <div class="flex min-h-screen bg-brand-neutral-50 dark:bg-brand-neutral-950 font-sans">
    <!-- Sidebar -->
    <aside class="w-72 border-r border-brand-neutral-200 dark:border-brand-neutral-800/60 bg-white dark:bg-brand-neutral-950 hidden md:flex flex-col shadow-sm">
       <div class="h-16 px-6 border-b border-brand-neutral-200 dark:border-brand-neutral-800/60 flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm shadow-brand-500/20">
             <UIcon name="i-heroicons-square-3-stack-3d" class="h-5 w-5" />
          </div>
          <span class="text-xl font-bold tracking-tight text-brand-neutral-900 dark:text-white">Reckoner</span>
       </div>
       
       <div class="flex-1 overflow-y-auto p-4 space-y-1.5 mt-2">
          <p class="px-3 text-xs font-semibold text-brand-neutral-500 dark:text-brand-neutral-400 uppercase tracking-wider mb-2">Main Menu</p>
          <UButton
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="w-full justify-start font-medium text-[15px] cursor-pointer"
            :variant="route.fullPath === item.to ? 'soft' : 'ghost'"
            :color="route.fullPath === item.to ? 'primary' : 'neutral'"
            :icon="item.icon"
            size="lg"
          >
            {{ item.label }}
          </UButton>
       </div>
    </aside>

    <!-- Main Content Wrapper -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Top header -->
      <header class="h-16 px-4 md:px-8 border-b border-brand-neutral-200 dark:border-brand-neutral-800/60 bg-white/70 backdrop-blur-xl dark:bg-brand-neutral-950/70 flex items-center justify-between sticky top-0 z-10">
         <div class="flex items-center gap-3">
            <UButton variant="ghost" color="neutral" icon="i-heroicons-bars-3" class="md:hidden cursor-pointer" />
            <h2 class="font-semibold text-brand-neutral-800 dark:text-brand-neutral-100 text-lg">Admin Dashboard</h2>
         </div>
         <div class="flex items-center gap-3 md:gap-5">
            <UButton variant="ghost" color="neutral" :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'" @click="toggleTheme" class="rounded-full cursor-pointer" />
            <div class="hidden sm:block h-6 w-px bg-brand-neutral-200 dark:bg-brand-neutral-800"></div>
            
            <UDropdownMenu :items="userMenuItems" :content="{ side: 'bottom', align: 'end' }">
               <UButton variant="ghost" color="neutral" class="p-0 hover:bg-transparent">
                  <div class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                     <UAvatar src="https://i.pravatar.cc/150?u=admin" alt="Admin User" size="md" class="ring-2 ring-brand-100 dark:ring-brand-900 cursor-pointer" />
                     <div class="hidden md:block text-sm cursor-pointer text-left">
                        <p class="font-semibold text-brand-neutral-900 dark:text-white leading-none">Admin User</p>
                        <p class="text-xs text-brand-neutral-500 dark:text-brand-neutral-400 mt-1 focus:outline-none">System Admin</p>
                     </div>
                     <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 ml-1 text-brand-neutral-500" />
                  </div>
               </UButton>
            </UDropdownMenu>
         </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
