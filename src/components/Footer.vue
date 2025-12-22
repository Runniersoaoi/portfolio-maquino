<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-white/10 bg-blue-900/50">
    <div class="px-6 md:px-12 max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-2">
        <div class="border-2 border-white p-1 px-2 text-lg leading-none font-bold">MZ</div>
        <span class="text-xs tracking-widest uppercase opacity-60">Matias Zuriel</span>
      </div>
      
      <div class="flex gap-8 text-xs font-bold tracking-widest opacity-60">
        <a href="#" class="hover:text-white hover:opacity-100 transition-all">{{ t('nav.works') }}</a>
        <a href="#" class="hover:text-white hover:opacity-100 transition-all">{{ t('nav.about') }}</a>
        <a href="#" class="hover:text-white hover:opacity-100 transition-all">{{ t('nav.contact') }}</a>
      </div>
      
      <div class="text-[10px] opacity-40 uppercase tracking-widest">
        {{ t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>
