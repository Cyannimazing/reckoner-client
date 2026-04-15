<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'admin',
})

const stats = [
  { label: 'Active users', value: '1,284', change: '+12% from last month', icon: 'i-heroicons-users', trend: 'up' },
  { label: 'Revenue', value: '$42,300', change: '+8% from last month', icon: 'i-heroicons-banknotes', trend: 'up' },
  { label: 'Open tickets', value: '17', change: '-3 since yesterday', icon: 'i-heroicons-ticket', trend: 'down' },
]

const activities = [
  { title: 'New user registered', time: '2 minutes ago', label: 'new', color: 'info' as const, icon: 'i-heroicons-user-plus' },
  { title: 'Subscription upgraded', time: '18 minutes ago', label: 'success', color: 'success' as const, icon: 'i-heroicons-arrow-trending-up' },
  { title: 'Support ticket opened', time: '43 minutes ago', label: 'warning', color: 'warning' as const, icon: 'i-heroicons-exclamation-circle' },
  { title: 'System backup completed', time: '1 hour ago', label: 'neutral', color: 'neutral' as const, icon: 'i-heroicons-cloud-arrow-up' },
]
</script>

<template>
  <div class="space-y-6 max-w-6xl mx-auto">
    <!-- Welcome Banner with Brand Theming -->
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-900 to-brand-700 p-8 shadow-lg shadow-brand-900/20 text-white">
       <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-400 mix-blend-overlay blur-[64px] opacity-60"></div>
       <div class="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-highlight mix-blend-overlay blur-[64px] opacity-40"></div>
       <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p class="text-sm font-medium text-brand-200 mb-1 uppercase tracking-wider">Overview</p>
            <h1 class="text-3xl font-bold tracking-tight">Welcome to Reckoner</h1>
            <p class="mt-2 text-brand-100/90 max-w-xl">Monitor your business performance, manage users, and configure settings. Everything is running smoothly today.</p>
          </div>
          <UButton color="neutral" variant="solid" size="lg" class="shadow-md text-brand-900 px-6 font-semibold ring-0 mt-2 md:mt-0 bg-white hover:bg-neutral-50 dark:bg-white dark:hover:bg-neutral-100" icon="i-heroicons-document-chart-bar">
             Generate Report
          </UButton>
       </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <UCard 
        v-for="item in stats" 
        :key="item.label" 
        class="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 border border-brand-neutral-200/60 dark:border-brand-neutral-800/60"
      >
        <div class="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20 text-brand-500 dark:text-brand-400">
           <UIcon :name="item.icon" class="h-20 w-20" />
        </div>
        <div class="relative z-10 flex items-start justify-between">
           <div>
              <p class="text-sm font-medium text-brand-neutral-500 dark:text-brand-neutral-400">{{ item.label }}</p>
              <p class="mt-1 text-3xl font-bold text-brand-neutral-900 dark:text-white mb-2">{{ item.value }}</p>
              <div class="flex items-center gap-1.5 text-xs font-medium" :class="item.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-brand-600 dark:text-highlight'">
                 <UIcon :name="item.trend === 'up' ? 'i-heroicons-arrow-up-right' : 'i-heroicons-arrow-down-right'" class="h-3.5 w-3.5" />
                 {{ item.change }}
              </div>
           </div>
           <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300">
              <UIcon :name="item.icon" class="h-5 w-5" />
           </div>
        </div>
      </UCard>
    </div>

    <!-- Content Sections -->
    <div class="grid gap-6 lg:grid-cols-3">
      <UCard class="lg:col-span-2 border border-brand-neutral-200/60 dark:border-brand-neutral-800/60 shadow-sm">
        <template #header>
          <div class="flex items-center justify-between">
             <h2 class="text-lg font-semibold tracking-tight text-brand-neutral-900 dark:text-white">Recent Activity</h2>
             <UButton variant="ghost" color="neutral" size="sm" trailing-icon="i-heroicons-arrow-right">View all</UButton>
          </div>
        </template>

        <div class="space-y-4">
          <div
            v-for="activity in activities"
            :key="activity.title"
            class="group flex items-center justify-between rounded-xl bg-brand-neutral-50/50 p-4 transition-colors hover:bg-brand-neutral-100 dark:bg-brand-neutral-900/30 dark:hover:bg-brand-neutral-800/50"
          >
            <div class="flex items-center gap-4 border-l-2 p-1 border-transparent" :class="`hover:border-${activity.color}-500`">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-brand-neutral-950 shadow-sm border border-brand-neutral-200 dark:border-brand-neutral-800 text-brand-neutral-600 dark:text-brand-neutral-400">
                 <UIcon :name="activity.icon" class="h-5 w-5" />
              </div>
              <div>
                <p class="font-semibold text-sm text-brand-neutral-900 dark:text-brand-neutral-100">{{ activity.title }}</p>
                <p class="text-xs text-brand-neutral-500 mt-0.5 font-medium">{{ activity.time }}</p>
              </div>
            </div>
            <UBadge :color="activity.color" variant="subtle" size="sm" class="font-medium whitespace-nowrap">{{ activity.label }}</UBadge>
          </div>
        </div>
      </UCard>

      <UCard class="border border-brand-neutral-200/60 dark:border-brand-neutral-800/60 shadow-sm">
        <template #header>
          <h2 class="text-lg font-semibold tracking-tight text-brand-neutral-900 dark:text-white">Quick Actions</h2>
        </template>

        <div class="space-y-3">
          <UButton block color="primary" variant="solid" size="lg" icon="i-heroicons-envelope" class="shadow-sm shadow-brand-500/20">Invite User</UButton>
          <UButton block color="neutral" variant="soft" size="lg" icon="i-heroicons-arrow-down-tray" class="rounded-xl">Export Analytics</UButton>
          <UButton block color="neutral" variant="soft" size="lg" icon="i-heroicons-adjustments-horizontal" class="rounded-xl">System Settings</UButton>
          <UButton block color="neutral" variant="soft" size="lg" icon="i-heroicons-shield-check" class="rounded-xl">Security Audit</UButton>
        </div>
        
        <div class="mt-6 pt-6 border-t border-brand-neutral-200 dark:border-brand-neutral-800">
           <div class="rounded-xl bg-brand-50 p-4 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800/50">
              <div class="flex items-start gap-3">
                 <UIcon name="i-heroicons-light-bulb" class="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                 <div>
                    <h3 class="text-sm font-semibold text-brand-900 dark:text-brand-100">Pro Tip</h3>
                    <p class="text-xs text-brand-700/80 dark:text-brand-300 mt-1">Press <kbd class="px-1.5 py-0.5 bg-white dark:bg-brand-neutral-800 rounded shadow-sm text-brand-neutral-500 text-[10px] uppercase font-mono mx-0.5 pb-1">Ctrl + K</kbd> anytime to open the global command menu.</p>
                 </div>
              </div>
           </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
