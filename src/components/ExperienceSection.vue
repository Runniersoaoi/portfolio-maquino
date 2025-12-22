<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const experiences = computed(() => [
  {
    year: '2024',
    role: t('experience.roles.fullstack'),
    company: 'Fixa Digital',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    year: '2025',
    role: t('experience.roles.automation'),
    company: 'Continua Continental',
    location: 'Remote',
    type: 'Part-time'
  },
  {
    year: '2025',
    role: t('experience.roles.qa'),
    company: 'Universidad Continental',
    location: 'Remote',
    type: 'Full-time'
  }
])
</script>

<template>
  <section id="experience" class="px-6 md:px-12 max-w-7xl mx-auto py-24">
    <div class="text-center mb-16">
      <h2 class="text-5xl font-bold font-oswald mb-4">{{ t('experience.title') }}</h2>
      <div class="flex justify-center gap-4 text-xs font-bold tracking-widest">
        <span class="bg-white text-blue-900 px-4 py-1">ALL</span>
        <span class="border border-white/20 px-4 py-1 opacity-60">DEV</span>
        <span class="border border-white/20 px-4 py-1 opacity-60">DESIGN</span>
      </div>
    </div>

    <div class="space-y-4">
      <div v-for="exp in experiences" :key="exp.company" class="group flex items-center border-b border-white/10 py-8 hover:bg-white/5 transition-colors px-4">
        <div class="w-24 text-lg opacity-60">{{ exp.year }}</div>
        
        <div class="lg:w-12 lg:h-12 md:w-8 md:h-8 w-4 h-4 border border-white/20 mr-8 flex items-center justify-center group-hover:border-accent-orange transition-colors">
          <!-- Logo placeholder -->
        </div>

        <div class="flex-1">
          <h3 class="md:text-3xl lg:text-4xl text-2xl font-bold">{{ exp.role }}</h3>
        </div>

        <div class="hidden md:flex gap-12 text-lg opacity-60 items-center">
          <span class="w-32">{{ exp.company }}</span>
          <span class="w-32">{{ exp.location }}</span>
        </div>

        <div class="ml-auto w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-900 transition-all hover:cursor-pointer">
          <span class="text-xs">→</span>
        </div>
      </div>
    </div>
  </section>
</template>
