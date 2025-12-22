<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="px-6 md:px-12 max-w-7xl mx-auto pt-12 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12">
    <div class="flex flex-col justify-center order-2 md:order-1">
      <p class="text-md font-bold tracking-[0.2em] mb-4 text-blue-200 uppercase animate-on-scroll">
        {{ t('hero.role') }}
      </p>
      
      <h1 class="text-3xl md:text-5xl lg:text-9xl font-bold leading-[0.9] mb-6 uppercase animate-on-scroll delay-100">
        Matias<br>Zuriel
      </h1>
      
      <p class="text-lg max-w-xs opacity-80 mb-8 leading-relaxed animate-on-scroll delay-200">
        {{ t('hero.description') }}
      </p>
      
      <button class="hover:cursor-pointer bg-accent-orange text-white px-8 py-3 text-xs font-bold tracking-widest uppercase w-fit hover:bg-orange-600 transition-colors flex items-center gap-2 animate-on-scroll delay-300">
        <span class="text-lg">▶</span> <a target="_blank" href="https://www.linkedin.com/in/matias-aquino-castro-896016268/">{{ t('hero.cta') }}</a>
      </button>
    </div>

    <div class="relative h-[300px] md:h-[600px] w-full bg-blue-800/20 backdrop-blur-sm overflow-hidden order-1 md:order-2 animate-on-scroll delay-200">
      <!-- Abstract pattern or image placeholder -->
      <img src="/src/assets/hero-image.png" alt="hero-image" class="w-full h-full object-none lg:object-cover">
    </div>
  </section>
</template>

<style scoped>
.pattern-grid {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
