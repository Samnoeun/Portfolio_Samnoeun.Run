<template>
  <main class="pt-16">
    <AboutSection />
    <SkillsSection />
    
    <!-- Education Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-title">Education</h2>
          <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div
              v-for="edu in education"
              :key="edu.degree"
              class="bg-gray-50 p-6 rounded-lg"
            >
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ edu.degree }}</h3>
              <p class="text-blue-600 font-medium mb-1">{{ edu.school }}</p>
              <p class="text-gray-600">{{ edu.period }} • {{ edu.status }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import { usePortfolioStore } from '@/stores/portfolio'

const education = usePortfolioStore().education
</script>
