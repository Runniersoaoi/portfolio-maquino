<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import AboutSection from './components/AboutSection.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <!-- Global Grid Background -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-10" 
         style="background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
         background-size: 100px 100px;">
    </div>

    <div class="relative z-10">
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <Footer />
    </div>
  </div>
</template>

<style>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
