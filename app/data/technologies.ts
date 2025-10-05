export interface Technology {
  name: string
  icon: string
  projects: string[]
  recentlyLearned: boolean
  inMyJob: boolean
  color: string
}

export interface TechData {
  frontend: Technology[]
  backend: Technology[]
}

export const technologies: TechData = {
  frontend: [
    {
      name: 'HTML5',
      icon: 'icon-[skill-icons--html]',
      projects: ['Garage Parrot', 'Jobspot', 'Agilix'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CSS3',
      icon: 'icon-[skill-icons--css]',
      projects: ['Garage Parrot', 'Agilix', 'Portfolio', 'Jobspot'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'JavaScript',
      icon: 'icon-[skill-icons--javascript]',
      projects: ['Agilix', 'IRC', 'Portfolio', 'Garage Parrot'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'TypeScript',
      icon: 'icon-[skill-icons--typescript]',
      projects: ['Portfolio'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'React',
      icon: 'icon-[skill-icons--react-dark]',
      projects: ['Agilix', 'IRC', 'Portfolio'],
      recentlyLearned: false,
      inMyJob: false,
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      name: 'Figma',
      icon: 'icon-[skill-icons--figma-dark]',
      projects: ['Portfolio', 'Agilix'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Tailwind CSS',
      icon: 'icon-[skill-icons--tailwindcss-dark]',
      projects: ['Agilix', 'Portfolio'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-sky-400 to-sky-600'
    },
    {
      name: 'Nuxt.js',
      icon: 'icon-[skill-icons--nuxtjs-dark]',
      projects: ['Portfolio'],
      recentlyLearned: true,
      inMyJob: true,
      color: 'from-green-400 to-green-600'
    }

  ],
  backend: [
    {
      name: 'Node.js',
      icon: 'icon-[skill-icons--nodejs-dark]',
      projects: ['Agilix', 'IRC'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Express',
      icon: 'icon-[skill-icons--expressjs-dark]',
      projects: ['IRC'],
      recentlyLearned: false,
      inMyJob: false,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'PHP',
      icon: 'icon-[skill-icons--php-dark]',
      projects: ['Garage Parrot', 'Jobspot', 'NSA'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      name: 'Symfony',
      icon: 'icon-[skill-icons--symfony-dark]',
      projects: ['Garage Parrot'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-black to-gray-900'
    },
    {
      name: 'Laravel',
      icon: 'icon-[skill-icons--laravel-dark]',
      projects: ['Jobspot'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Java',
      icon: 'icon-[skill-icons--java-dark]',
      projects: ['RPG Empire'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Python',
      icon: 'icon-[skill-icons--python-dark]',
      projects: ['RPG HD2D', 'Cybersecurity'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-blue-500 to-yellow-500'
    },
    {
      name: 'Linux',
      icon: 'icon-[skill-icons--linux-dark]',
      projects: ['NSA', 'Cybersecurity'],
      recentlyLearned: true,
      inMyJob: true,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'JetBrains',
      icon: 'icon-[skill-icons--idea-dark]',
      projects: ['Développement'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'MySQL',
      icon: 'icon-[skill-icons--mysql-dark]',
      projects: ['Base de données'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-blue-600 to-blue-600'
    },
   {
      name: 'MongoDB',
      icon: 'icon-[skill-icons--mongodb]',
      projects: ['IRC'],
      recentlyLearned: false,
      inMyJob: false,
      color: 'from-green-400 to-green-600'
   }
  ]
}