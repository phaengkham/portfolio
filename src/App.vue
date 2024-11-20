<template>
  <div class="min-h-screen">
    <Suspense>
      <template #default>
        <div class="bg-primary">
          <HeroSection></HeroSection>
          <Skills></Skills>
          <Service></Service>
          <Projects></Projects>
          <ContactMe></ContactMe>
          <Footer></Footer>
          <BackToTop></BackToTop>
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner>hello</LoadingSpinner>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Async Component Imports
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const Skills = defineAsyncComponent(() => import('@/components/Skills.vue'));
const Service = defineAsyncComponent(() => import('@/components/Service.vue'));
const Projects = defineAsyncComponent(() => import('@/components/Projects.vue'));
const ContactMe = defineAsyncComponent(() => import('@/components/ContactMe.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'))

// AOS Initialization
AOS.init({ duration: 2000, delay: 200 });
</script>


<style></style>