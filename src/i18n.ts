import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      works: 'WORKS',
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      contact: 'CONTACTS'
    },
    hero: {
      role: 'Full Stack Developer',
      description: 'Building digital experiences with a focus on performance and design.',
      cta: 'Contact Me'
    },
    projects: {
      recent: 'RECENT PROJECTS',
      featured: 'FEATURED',
      progress: 'IN PROGRESS',
      categories: {
        web: 'Web Development',
        ui: 'UI/UX Design',
        mobile: 'Mobile App',
        platform: 'Web Platform'
      }
    },
    experience: {
      title: 'WORK EXPERIENCE',
      roles: {
        fullstack: 'Full Stack Developer',
        automation: 'Automation Developer',
        qa: 'QA Analyst'
      }
    },
    about: {
      title: 'About Me',
      heading: 'PASSION FOR\nCODE AND\nDESIGN',
      description: 'I am a developer passionate about creating digital interfaces that not only work perfectly but also inspire. With experience in UI/UX design and full-stack development, I always seek excellence in every pixel.',
      cta: 'Contact Me'
    },
    footer: {
      rights: '© 2024 All Rights Reserved'
    }
  },
  es: {
    nav: {
      works: 'TRABAJOS',
      about: 'SOBRE MI',
      experience: 'EXPERIENCIA',
      contact: 'CONTACTO'
    },
    hero: {
      role: 'Desarrollador Full Stack',
      description: 'Construyendo experiencias digitales con enfoque en rendimiento y diseño.',
      cta: 'Contáctame'
    },
    projects: {
      recent: 'PROYECTOS RECIENTES',
      featured: 'DESTACADO',
      progress: 'EN PROGRESO',
      categories: {
        web: 'Desarrollo Web',
        ui: 'Diseño UI/UX',
        mobile: 'App Móvil',
        platform: 'Plataforma Web'
      }
    },
    experience: {
      title: 'EXPERIENCIA LABORAL',
      roles: {
        fullstack: 'Desarrollador Full Stack',
        automation: 'Desarrollador de Automatización',
        qa: 'Analista QA'
      }
    },
    about: {
      title: 'Sobre Mi',
      heading: 'PASIÓN POR\nEL CÓDIGO Y\nEL DISEÑO',
      description: 'Soy un desarrollador apasionado por crear interfaces digitales que no solo funcionan perfectamente, sino que también inspiran. Con experiencia en diseño UI/UX y desarrollo full-stack, busco siempre la excelencia en cada pixel.',
      cta: 'Contáctame'
    },
    footer: {
      rights: '© 2024 Todos los derechos reservados'
    }
  }
}

export default createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'es', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})
