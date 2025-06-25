<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-blue-600">About Me</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 mx-auto mt-2 rounded-full"></div>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Side: Description -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Get to know me!</h3>
          <div class="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              I'm <span class="text-blue-600 font-semibold">{{ personalInfo.name }}</span>, a second-year Web Development student at Passerelles Numériques Cambodia.
              I’m passionate about continuous learning and applying my knowledge in real-world projects.
            </p>
            <p>
              My focus is on frontend development where I enjoy building responsive and user-friendly interfaces.
              I value teamwork, creativity, and growth through practical experience.
            </p>
            <p>
              I aim to merge technical knowledge with design thinking to deliver digital experiences that make a real difference.
            </p>
          </div>
        </div>

        <!-- Right Side: Personal Info -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="(info, key) in personalDetails"
              :key="key"
              class="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <component :is="info.icon" class="h-6 w-6 text-blue-500" />
              <div>
                <p class="text-sm text-gray-500">{{ info.label }}</p>
                <p class="font-medium text-gray-900">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- Languages Section -->
          <div class="mt-6 p-5 bg-blue-50 rounded-xl shadow-sm">
            <h4 class="text-lg font-semibold text-blue-700 mb-3">Languages</h4>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-700">Khmer</span>
                <span class="text-sm text-gray-500">Mother Tongue</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700">English</span>
                <span class="text-sm text-gray-500">Pre-intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const { personalInfo } = usePortfolioStore()

// Simple icon components
const UserIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`
}

const CalendarIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
}

const MapPinIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`
}

const GlobeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
}

const personalDetails = computed(() => [
  { icon: UserIcon, label: 'Full Name', value: personalInfo.name },
  { icon: CalendarIcon, label: 'Date of Birth', value: personalInfo.dateOfBirth },
  { icon: MapPinIcon, label: 'Place of Birth', value: personalInfo.placeOfBirth },
  { icon: GlobeIcon, label: 'Nationality', value: personalInfo.nationality }
])
</script>
