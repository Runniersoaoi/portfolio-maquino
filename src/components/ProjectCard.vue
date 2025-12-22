<script setup lang="ts">
defineProps<{
  title: string
  category: string
  tags: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
}>()
</script>

<template>
  <div class="group relative bg-blue-800/30 border border-white/10 hover:border-accent-orange/50 transition-all duration-300 md:h-10/12  flex flex-col">
    <!-- Image Area -->
    <div class="aspect-4/5 w-full bg-blue-900/50 relative overflow-hidden p-4 max-h-[330px] md:max-h-6/12">
      <div class="w-full h-full border border-white/5 relative">
        
        <!-- Actual image would go here -->
        <img v-if="image" :src="image" :alt="title" class="w-full h-full md:object-fill object-fill" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col justify-center h-full max-h-80">
      <h3 class="text-5xl font-bold mb-3 font-oswald">{{ title }}</h3>
      <p class="text-md text-accent-orange font-bold tracking-wider uppercase mb-4">{{ category }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in tags" :key="tag" class="px-2 py-1 bg-blue-900/50 text-[14px] uppercase tracking-wider border border-white/10">
          {{ tag }}
        </span>
      </div>

      <div class="flex gap-4 mt-auto">
        <a v-if="githubUrl" :href="githubUrl" target="_blank" class="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors hover:cursor-pointer border border-white/20">
          <!-- GitHub Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        
        <a v-if="demoUrl" :href="demoUrl" target="_blank" class="w-10 h-10 rounded-full bg-accent-orange flex items-center justify-center hover:bg-orange-600 transition-colors hover:cursor-pointer">
          <!-- External Link Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  </div>
</template>
