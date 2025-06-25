<template>
  <footer class="relative bg-gradient-to-tr from-blue-900 via-gray-900 to-blue-800 text-white py-16 overflow-hidden">
    <!-- Wave SVG Top Divider -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180" style="height: 80px;">
      <svg
        class="relative block w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path
          d="M321.39 56.55C167.93 68.22 0 58.64 0 58.64V120h1200V0s-262.02 69.2-460.21 69.2c-173.81 0-270.2-36.44-418.4-12.65z"
          fill="url(#gradWave)"
          fill-opacity="0.7"
        />
        <defs>
          <linearGradient id="gradWave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#2563EB" />
            <stop offset="100%" stop-color="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div>
          <h3 class="text-3xl font-extrabold mb-5 tracking-wide">
            <span class="text-blue-400">Samnoeun </span><span class="text-white">RUN</span>
          </h3>
          <p class="text-blue-200 max-w-xs leading-relaxed">
            Web Developer passionate about creating beautiful and functional websites.
          </p>

          <!-- Social Icons -->
          <div class="flex space-x-5 mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener"
              class="text-blue-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.841-2.339 4.687-4.566 4.933.36.31.678.921.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.005 10.005 0 0022 12c0-5.52-4.48-10-10-10z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener"
              class="text-blue-300 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 10.25h-3v-4.5c0-1.07-.9-1.95-2-1.95s-2 .88-2 1.95v4.5h-3v-9h3v1.2c.49-.69 1.42-1.2 2.5-1.2 2.09 0 3.5 1.68 3.5 3.75v5.25z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-semibold mb-6 text-blue-300">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/"
                class="text-blue-200 hover:text-white underline-offset-4 hover:underline transition duration-300"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-blue-200 hover:text-white underline-offset-4 hover:underline transition duration-300"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="text-blue-200 hover:text-white underline-offset-4 hover:underline transition duration-300"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-blue-200 hover:text-white underline-offset-4 hover:underline transition duration-300"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-xl font-semibold mb-6 text-blue-300">Contact</h4>
          <div class="space-y-3 text-blue-200 max-w-xs">
            <p class="hover:text-white cursor-pointer transition duration-300">
              samnoeun.run@student.passerellesnumeriques
            </p>
            <p class="hover:text-white cursor-pointer transition duration-300">
              +855 972 024 055
            </p>
            <p class="hover:text-white cursor-pointer transition duration-300">
              Street 371, Phnom Penh, Cambodia
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-blue-700 mt-12 pt-8 text-center text-blue-300">
        <p>&copy; 2025 Samnoeun Run. All rights reserved.</p>
        <p class="mt-1">Built with Vue.js and Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>
