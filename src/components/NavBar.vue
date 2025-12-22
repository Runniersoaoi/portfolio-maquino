<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const links = computed(() => [
  { name: t('nav.works'), href: '#projects' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.experience'), href: '#experience' },
])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <nav class="flex justify-between items-center py-8 px-6 md:px-12 max-w-7xl mx-auto relative z-50">
    <div class="text-2xl font-bold tracking-tighter flex items-center gap-2 z-50 relative">
      <div class="border-2 border-white p-1 px-2 text-xl leading-none">
        MZ
      </div>
      <span class="text-sm tracking-widest uppercase opacity-80">Matias<br>Zuriel</span>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex gap-12 text-base font-bold tracking-widest">
      <a 
        v-for="link in links" 
        :key="link.name" 
        :href="link.href"
        class="hover:text-accent-orange transition-colors"
      >
        {{ link.name }}
      </a>
    </div>

    <div class="hidden md:flex gap-4 items-center">
      <!-- Language Toggle -->
      <button 
        @click="toggleLanguage"
        class="text-md font-bold tracking-widest border border-white/20 px-2 py-1 hover:bg-white hover:text-blue-900 transition-colors uppercase w-12 hover:cursor-pointer"
      >
        {{ locale }}
      </button>

      <!-- Social Icons placeholders -->
      <div class="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-lg text-white p-4">
        <a target="_blank" href="https://www.linkedin.com/in/matias-aquino-castro-896016268/">in</a>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center gap-1.5 group">
      <span :class="{'rotate-45 translate-y-2': isMenuOpen}" class="block w-full h-0.5 bg-white transition-transform duration-300"></span>
      <span :class="{'opacity-0': isMenuOpen}" class="block w-full h-0.5 bg-white transition-opacity duration-300"></span>
      <span :class="{'-rotate-45 -translate-y-2': isMenuOpen}" class="block w-full h-0.5 bg-white transition-transform duration-300"></span>
    </button>

    <!-- Mobile Menu Overlay -->
    <div 
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed inset-0 bg-blue-900/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden"
    >
      <a 
        v-for="link in links" 
        :key="link.name" 
        :href="link.href"
        @click="toggleMenu"
        class="text-2xl font-bold tracking-widest hover:text-accent-orange transition-colors"
      >
        {{ link.name }}
      </a>
      
      <div class="flex gap-4 mt-8 items-center ">
        <button 
          @click="toggleLanguage"
          class="text-xl font-bold tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-blue-900 transition-colors uppercase "
        >
          {{ locale === 'es' ? 'ESPAÑOL' : 'ENGLISH' }}
        </button>

         <div class="w-10 h-10 rounded-full bg-accent-orange flex items-center justify-center text-xl text-white">
          <a target="_blank" href="https://www.linkedin.com/in/matias-aquino-castro-896016268/">in</a>
        </div>
      </div>
    </div>
  </nav>
</template>
