<script setup lang="ts">
defineProps<{
  number: string
  title: string
}>()
</script>

<template>
  <div class="flex items-start gap-4 mb-8 border-t border-white/20 pt-4">
    <span class="text-lg font-bold opacity-60">{{ number }}</span>
    <h2 class="text-lg font-bold tracking-widest uppercase">{{ title }}</h2>
  </div>
</template>
