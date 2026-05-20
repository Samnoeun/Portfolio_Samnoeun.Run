import { ref, computed } from "vue"
import { defineStore } from "pinia"
import posImg from '@/assets/images/pos.png'
import quizAppImg from '@/assets/images/quiz_app.png'
import voiceImg from '@/assets/images/voice_cmp.png'
import libraryImg from '@/assets/images/library.png'


export const usePortfolioStore = defineStore("portfolio", () => {
  const personalInfo = ref({
    name: "Samnoeun Run",
    title: "Web Developer",
    email: "samnoeunr@gmail.com",
    phone: "+855 972 024 055",
    location: "Street 371, phum Tropeang Chhuk, SangkatTek Thla, Khan Sen Sok, Phnom Penh",
    dateOfBirth: "November 29, 2005",
    placeOfBirth: "Battambang, Cambodia",
    nationality: "Khmer",
    status: "Single",
  })

  const skills = ref({
    frontend: ["HTML", "CSS", "Sass", "JavaScript", "TypeScript", "Vue.js", "Bootstrap 5"],
    backend: ["Node.js", "PHP", "Laravel", "Python"],
    database: ["MySQL", "Database Design"],
    design: ["Figma", "Canva", "Responsive Design", "UI/UX Design"],
    tools: ["Git & GitHub", "VS Code", "Jira", "AWS", "Linux", "Xampp", "Postman", "Netlify", "Vercel"],
    soft: [
      "Team-work",
      "Problem-solving",
      "Creative thinking",
      "Good communication",
      "Fast learner",
      "High commitment",
      "Innovation",
      "Leadership",
    ],
  })

  const projects = ref([
    {
      id: 1,
      title: "POS System (Point Of Sale)",
      description:
        "Developed a Point of Sale system to help customers easily sell their products and generate inventory reports. My role included QA Testing and development.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
      github: "https://github.com/Kin-Doung/POS-SYSTEM-G5",
      demo: "https://youtu.be/sklR4Joz0Ys?si=FAkWbs7Dy7t3SLsK",
      period: "Feb 25 – May 02, 2025",
      image: posImg,
      role: "QA Testing and Developer",
    },
    {
      id: 2,
      title: "Quiz App",
      description:
        "Working to create a Quiz App using modern web technologies. Responsible as a team member, utilizing APIs to store information.",
      technologies: ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "API"],
      github: "https://github.com/Charyna-chab/JS-project-G13.git",
      demo: "https://quiz-app-group13.netlify.app/",
      period: "Jan 12 – Jan 26, 2025",
      image: quizAppImg,
      role: "Team Member",
    },
    {
      id: 3,
      title: "Voice Controller Music Player",
      description:
        "Built a music player that improves user experience by allowing voice control for playback functions like play, pause, next, previous, and volume control.",
      technologies: ["Python", "Tkinter", "HTML", "CSS", "Bootstrap", "Algorithm"],
      github: "https://github.com/monpany/Voice-Controlled-Music-Player.git",
      period: "Nov 11 – Nov 20, 2024",
      image: voiceImg,
      role: "Team Leader",
    },
    {
      id: 4,
      title: "Library Website",
      description:
        "Built a static library website with modern design principles and responsive layout using modern web technologies.",
      technologies: ["HTML", "CSS", "SASS", "Bootstrap", "Figma"],
      github: "https://github.com/Mengseu-Sork/Library-C6.git",
      demo: "https://tourmaline-genie-50dcae.netlify.app/",
      period: "Sep 21 – Nov 04, 2024",
      image: libraryImg,
      role: "Developer",
    },
    {
      id: 5,
      title: "WordPress Deployment",
      description:
        "Deployed a WordPress website on AWS EC2 using Ubuntu Linux. Gained practical experience in cloud hosting and server management.",
      technologies: ["WordPress", "AWS EC2", "Ubuntu Linux", "VirtualBox", "MobaXterm"],
      github: "#",
      period: "Dec 30, 2024 – Jan 05, 2025",
      image: "https://via.placeholder.com/400x200/f97316/ffffff?text=WordPress+Deployment",
      role: "Individual Project",
    },
  ])

  const education = ref([
    {
      degree: "Association Degree in Web Development",
      school: "Passerelles Numériques (PNC)",
      period: "2024 - Present",
      status: "Current Student",
    },
    {
      degree: "BacII Exam",
      school: "Sor Kheang Kantue 2 High School, Battambang",
      period: "2021 - 2023",
      status: "Completed",
    },
  ])

  const languages = ref([
    { name: "Khmer", level: "Mother Tongue" },
    { name: "English", level: "Pre-intermediate (Good at speaking, listening, writing and reading)" },
  ])

  const allSkills = computed(() => {
    return [
      ...skills.value.frontend,
      ...skills.value.backend,
      ...skills.value.database,
      ...skills.value.design,
      ...skills.value.tools,
    ]
  })

  return {
    personalInfo,
    skills,
    projects,
    education,
    languages,
    allSkills,
  }
})
