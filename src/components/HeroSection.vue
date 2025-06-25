<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <transition name="fade" mode="out-in">
            <p class="text-lg text-gray-600 mb-2" :key="currentPhrase">
              {{ currentPhrase }}
            </p>
          </transition>


          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {{ personalInfo.name }}
            </span>
          </h1>

          <h2 class="text-2xl md:text-3xl text-gray-700 mb-6">{{ personalInfo.title }}</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl">
            I’m currently a second-year Web Development student at Passerelles Numériques Cambodia, and I’m originally
            from Battambang Province. I’m passionate about
            creating user-friendly, responsive interfaces and enjoy learning through real-world projects. I’m now
            looking for an internship or full-time opportunity where I can grow, contribute, and build a strong
            foundation for my future as a developer.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <router-link to="/contact"
              class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
              Hire Me
            </router-link>

            <a href="/cv.pdf" download
              class="bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition font-semibold py-2 px-6 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                </path>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-96 h-96 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-xl">
            <div class="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img :src="profileImage" :alt="personalInfo.name"
                class="w-11/12 h-11/12 object-cover rounded-full shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import profileImage from '@/assets/images/profile.jpg'

const { personalInfo } = usePortfolioStore()

const downloadCV = () => {
  // Implement CV download functionality
  console.log('Downloading CV...')
}
const phrases = [
  "Hi, I'm a Developer 👋",
  "I love building websites 💻",
  "Vue & Laravel are my tools 🛠",
  "I turn ideas into reality 🚀",
  "Always learning, always coding 📚"
]

const currentPhrase = ref(phrases[0])
let index = 0
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    index = (index + 1) % phrases.length
    currentPhrase.value = phrases[index]
  }, 2500)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
