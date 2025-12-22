<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const project1 = computed(() => ({
  title: 'Shorter links',
  category: t('projects.categories.web'),
  tags: ['Vue', 'Tailwind', 'Python'],
  image: '/src/assets/shorter-project.png',
  githubUrl: 'https://github.com/Runniersoaoi/urlshorter.git',
  demoUrl: 'https://shortter.matiasaquino.com/'
}))

const project2 = computed(() => ({
  title: 'Recipe app',
  category: t('projects.categories.web'),
  tags: ['React', 'Tailwind'],
  image: '/src/assets/recipe-project.png',
  githubUrl: 'https://github.com/Runniersoaoi/recipe-app.git',
  demoUrl: 'https://runniersoaoi.github.io/recipe-app/'
}))

const project3 = computed(() => ({
  title: 'Yuyariy',
  category: t('projects.categories.platform'),
  tags: ['React', 'Node', 'Python'],
  image: '/src/assets/yuyariy-project.png',
  githubUrl: 'https://github.com/Runniersoaoi/yuyariy.git',
  demoUrl: 'https://yuyariy-frontend.vercel.app/'
}))
</script>

<template>
  <section id="projects" class="px-6 md:px-12 max-w-7xl mx-auto py-24">
    <div class="md:grid md:grid-cols-3 gap-8">
      <!-- Column 1 -->
      <div class="md:col-span-1 animate-on-scroll">
        <SectionTitle number="01" :title="t('projects.recent')" />
        <ProjectCard v-bind="project1" />
      </div>

      <!-- Column 2 -->
      <div class="md:col-span-1 animate-on-scroll delay-200">
        <SectionTitle number="02" :title="t('projects.featured')" />
        <ProjectCard v-bind="project2" />
      </div>

      <!-- Column 3 -->
      <div class="md:col-span-1 animate-on-scroll delay-400">
        <SectionTitle number="03" :title="t('projects.progress')" />
        <ProjectCard v-bind="project3" />
      </div>
    </div>
  </section>
</template>
