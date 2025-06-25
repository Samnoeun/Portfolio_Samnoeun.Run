<!-- src/components/SkillsSection.vue -->
<template>
  <section class="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="section-title text-4xl font-bold text-gray-900">My Skills</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded"></div>
        <p class="section-subtitle text-lg text-gray-600">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, key) in skillCategories"
          :key="key"
          class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center mr-4 text-2xl shadow-md"
              :class="category.bg"
            >
              <component :is="category.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">{{ category.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-base rounded-full font-medium shadow-sm hover:from-blue-200 hover:to-purple-200 transition flex items-center gap-2"
            >
              <component v-if="skillIcons[skill]" :is="skillIcons[skill]" class="w-4 h-4 mr-1" />
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const portfolioStore = usePortfolioStore()
const skills = portfolioStore.skills

// Category icons (as before)
const CodeIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path></svg>` }
const ServerIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="6" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 10h.01M6 18h.01"></path></svg>` }
const DatabaseIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/><path d="M3 19c0 1.657 4.03 3 9 3s9-1.343 9-3"/></svg>` }
const PaletteIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="12" cy="16" r="1"/></svg>` }
const WrenchIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232a6 6 0 11-8.464 8.464M2 2l20 20"/></svg>` }
const UsersIcon = { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 11-8 0"/><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/></svg>` }

// Skill icons (add more as needed)
const HtmlIcon = { template: `<svg fill="#e34c26" viewBox="0 0 24 24"><path d="M1.5 0l1.7 19.1 8.8 2.4 8.8-2.4L22.5 0H1.5zm16.2 5.6l-.2 2.2-.1 1.2H6.6l.1 1.2.2 2.2h7.7l-.2 2.2-.1 1.2-3.3.9-3.3-.9-.2-2.2H6.6l.2 2.2.1 1.2 4.1 1.1 4.1-1.1.1-1.2.2-2.2H6.6l-.2-2.2-.1-1.2h10.2l-.1-1.2z"/></svg>` }
const CssIcon = { template: `<svg fill="#264de4" viewBox="0 0 24 24"><path d="M1.5 0l1.7 19.1 8.8 2.4 8.8-2.4L22.5 0H1.5zm16.2 5.6l-.2 2.2-.1 1.2H6.6l.1 1.2.2 2.2h7.7l-.2 2.2-.1 1.2-3.3.9-3.3-.9-.2-2.2H6.6l.2 2.2.1 1.2 4.1 1.1 4.1-1.1.1-1.2.2-2.2H6.6l-.2-2.2-.1-1.2h10.2l-.1-1.2z"/></svg>` }
const JsIcon = { template: `<svg fill="#f7df1e" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12c0 6.6 5.4 12 12 12s12-5.4 12-12c0-6.6-5.4-12-12-12zm1.7 17.2c0 1.2-.7 2.1-2.1 2.1-1.1 0-1.7-.6-2.1-1.3l1.2-.7c.2.4.4.7.9.7.4 0 .7-.2.7-.8v-3.7h1.4v3.7zm4.2 2.1c-1.3 0-2.1-.6-2.5-1.4l1.2-.7c.2.4.5.8 1.1.8.5 0 .8-.2.8-.6 0-.4-.3-.5-.9-.7l-.3-.1c-.9-.3-1.5-.7-1.5-1.6 0-.8.6-1.4 1.6-1.4.7 0 1.2.2 1.6.9l-1.1.7c-.2-.3-.4-.5-.7-.5-.3 0-.5.2-.5.5 0 .3.2.4.7.6l.3.1c1 .3 1.6.7 1.6 1.7 0 1-.8 1.5-1.8 1.5z"/></svg>` }
const VueIcon = { template: `<svg fill="#42b883" viewBox="0 0 24 24"><path d="M24 1.7h-5.2l-6.8 11.7L5.2 1.7H0l12 20.7L24 1.7z"/></svg>` }
const PhpIcon = { template: `<svg fill="#777bb4" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="12" ry="12"/><path fill="#fff" d="M7.2 8.6h1.2l-.6 2.2h1.1l.6-2.2h1.2l-1.2 4.2H8l.3-1.1H7.2l-.3 1.1H5.7l1.5-4.2zm5.2 0h1.2l-.6 2.2h1.1l.6-2.2h1.2l-1.2 4.2h-1.2l.3-1.1h-1.1l-.3 1.1h-1.2l1.5-4.2zm5.2 0h1.2l-.6 2.2h1.1l.6-2.2h1.2l-1.2 4.2h-1.2l.3-1.1h-1.1l-.3 1.1h-1.2l1.5-4.2z"/></svg>` }
// Add more icons as needed...

const skillIcons = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JsIcon,
  'Vue.js': VueIcon,
  PHP: PhpIcon,
  // Add more mappings as needed
}

const skillCategories = computed(() => [
  {
    icon: CodeIcon,
    title: 'Frontend Development',
    skills: skills.frontend,
    bg: 'bg-gradient-to-tr from-blue-200 to-blue-400 text-blue-700'
  },
  {
    icon: ServerIcon,
    title: 'Backend Development',
    skills: skills.backend,
    bg: 'bg-gradient-to-tr from-purple-200 to-purple-400 text-purple-700'
  },
  {
    icon: DatabaseIcon,
    title: 'Database',
    skills: skills.database,
    bg: 'bg-gradient-to-tr from-pink-200 to-pink-400 text-pink-700'
  },
  {
    icon: PaletteIcon,
    title: 'Design & UI/UX',
    skills: skills.design,
    bg: 'bg-gradient-to-tr from-yellow-200 to-yellow-400 text-yellow-700'
  },
  {
    icon: WrenchIcon,
    title: 'Development Tools',
    skills: skills.tools,
    bg: 'bg-gradient-to-tr from-green-200 to-green-400 text-green-700'
  },
  {
    icon: UsersIcon,
    title: 'Soft Skills',
    skills: skills.soft,
    bg: 'bg-gradient-to-tr from-indigo-200 to-indigo-400 text-indigo-700'
  }
])
</script>