<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="px-6 md:px-12 max-w-7xl mx-auto py-24">
    <div class="bg-blue-800/30 border border-white/10 p-12 relative overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div>
          <div class="flex items-center gap-2 mb-8">
            <div class="border-2 border-white p-1 px-2 text-lg leading-none font-bold">MZ</div>
            <span class="text-xs tracking-widest uppercase">{{ t('about.title') }}</span>
          </div>
          
          <h2 class="text-5xl font-bold font-oswald mb-8 leading-tight whitespace-pre-line">
            {{ t('about.heading') }}
          </h2>
          
          <div class="w-12 h-1 bg-white/20 mb-8"></div>
          
          <p class="text-md opacity-80 leading-relaxed max-w-md mb-8">
            {{ t('about.description') }}
          </p>
          
          <button class="hover:cursor-pointer bg-white text-blue-900 px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer">
            <span class="text-lg text-accent-orange">▶</span> <a target="_blank" href="https://www.linkedin.com/in/matias-aquino-castro-896016268/">{{ t('about.cta') }}</a>
          </button>
        </div>
        
        <div class="hidden md:block relative">
          <!-- Decorative pattern area -->
          <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff); background-size: 20px 20px; background-position: 0 0, 10px 10px;"></div>
        </div>
      </div>
    </div>
  </section>
</template>
