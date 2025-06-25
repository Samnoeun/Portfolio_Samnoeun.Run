<template>
  <section class="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-blue-600">Get In Touch</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 mx-auto mt-2 rounded-full"></div>
        <p class="text-gray-600 max-w-xl mx-auto mt-4">
          I'm always open to discussing new opportunities and exciting projects. Let’s connect and build something meaningful together!
        </p>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <!-- Email Icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Email</h4>
                <a href="mailto:your.email@example.com" class="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                  your.email@example.com
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <!-- Phone Icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.37 2.39.72 3.53a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.71-1.71a2 2 0 0 1 2.11-.45c1.14.35 2.32.59 3.53.72a2 2 0 0 1 1.72 2z" />
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Phone</h4>
                <a href="tel:+85512345678" class="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                  +855 12 345 678
                </a>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <!-- Location Icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M12 21c-4.97 0-9-4.03-9-9a9 9 0 1 1 18 0c0 4.97-4.03 9-9 9z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">Location</h4>
                <p class="text-gray-600">Battambang Province, Cambodia</p>
              </div>
            </div>
          </div>

          <!-- References -->
          <div class="mt-10 p-6 bg-blue-50 rounded-xl shadow-sm">
            <h4 class="text-lg font-semibold text-blue-700 mb-4">References</h4>
            <div class="space-y-4 text-sm">
              <div>
                <p class="font-medium text-gray-800">Rady Y</p>
                <p class="text-gray-600">PNC IT Coordination</p>
                <p class="text-gray-600">+855 12 251 803</p>
              </div>
              <div>
                <p class="font-medium text-gray-800">Sokhom Hean</p>
                <p class="text-gray-600">PNC English & Professional Life Coordinator</p>
                <p class="text-gray-600">+855 12 298 253</p>
              </div>
              <div>
                <p class="font-medium text-gray-800">Yen Yon</p>
                <p class="text-gray-600">PNC IT Trainer</p>
                <p class="text-gray-600">+855 86 750 534</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Send me a message</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6 bg-white p-6 rounded-xl shadow-md">
            <div>
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                v-model="form.message"
                placeholder="Your Message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="!isSubmitting" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              <svg v-else class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const { personalInfo } = usePortfolioStore()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

// Simple icon components
const MailIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`
}

const PhoneIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>`
}

const MapPinIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`
}

const contactInfo = [
  {
    icon: MailIcon,
    title: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    value: personalInfo.location,
    href: '#'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
  
  isSubmitting.value = false
  alert('Message sent successfully!')
}
const sendToTelegram = (form) => {
  const message = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
  const telegramUrl = `https://t.me/yourusername?text=${encodeURIComponent(message)}`;
  window.open(telegramUrl, '_blank');
};
</script>
