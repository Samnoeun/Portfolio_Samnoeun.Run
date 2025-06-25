<!-- filepath: src/views/TechnicalSkills.vue -->
<template>
  <section class="min-h-screen py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-blue-700 mb-2">Technical Skills</h2>
      <div class="w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 mx-auto mb-12 rounded-full"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="skill in technicalSkills"
          :key="skill.name"
          class="flex items-center bg-white rounded-xl shadow-md p-6 space-x-6 hover:shadow-lg transition"
        >
          <div class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <img :src="skill.icon" :alt="skill.name" class="w-10 h-10" />
          </div>
          <div class="flex-1">
            <div class="flex justify-between items-center mb-1">
              <span class="font-semibold text-gray-800 text-lg">{{ skill.name }}</span>
              <span class="font-semibold text-blue-600">{{ skill.percent }}%</span>
            </div>
            <div class="w-full h-3 bg-blue-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all"
                :style="{ width: skill.percent + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import htmlIcon from '@/assets/html5.png'
import cssIcon from '@/assets/css3.png'
import jsIcon from '@/assets/javascript.png'
import vueIcon from '@/assets/vue.png'
import tailwindIcon from '@/assets/tailwind.png'
import nodeIcon from '@/assets/nodejs.png'
import mysqlIcon from '@/assets/mysql.png'
import gitIcon from '@/assets/git.png'

// You can adjust the icon imports and skill list as needed
const technicalSkills = [
  { name: 'HTML5', icon: htmlIcon, percent: 90 },
  { name: 'CSS3', icon: cssIcon, percent: 85 },
  { name: 'JavaScript', icon: jsIcon, percent: 80 },
  { name: 'Vue.js', icon: vueIcon, percent: 80 },
  { name: 'Tailwind CSS', icon: tailwindIcon, percent: 75 },
  { name: 'Node.js', icon: nodeIcon, percent: 70 },
  { name: 'MySQL', icon: mysqlIcon, percent: 65 },
  { name: 'Git', icon: gitIcon, percent: 80 },
]
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>