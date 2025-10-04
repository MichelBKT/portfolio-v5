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
      icon: '🌐',
      projects: ['Garage Parrot', 'Jobspot', 'Agilix'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CSS3',
      icon: '🎨',
      projects: ['Garage Parrot', 'Agilix', 'Portfolio', 'Jobspot'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      projects: ['Agilix', 'IRC', 'Portfolio', 'Garage Parrot'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'TypeScript',
      icon: '🛡️',
      projects: ['Portfolio'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'React',
      icon: '⚛️',
      projects: ['Agilix', 'IRC', 'Portfolio'],
      recentlyLearned: false,
      inMyJob: false,
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      name: 'Figma',
      icon: '🎯',
      projects: ['Portfolio', 'Agilix'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'MongoDB',
      icon: '🌿',
      projects: ['IRC'],
      recentlyLearned: false,
      inMyJob: false,
      color: 'from-green-400 to-green-600'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      icon: '🟢',
      projects: ['Agilix', 'IRC'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'Express',
      icon: '🚀',
      projects: ['IRC'],
      recentlyLearned: false,
      inMyJob: false,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'PHP',
      icon: '🐘',
      projects: ['Garage Parrot', 'Jobspot', 'NSA'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      name: 'Symfony',
      icon: '🎼',
      projects: ['Garage Parrot'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-black to-gray-900'
    },
    {
      name: 'Laravel',
      icon: '🔴',
      projects: ['Jobspot'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Java',
      icon: '☕',
      projects: ['RPG Empire'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-orange-600 to-red-600'
    },
    {
      name: 'Python',
      icon: '🐍',
      projects: ['RPG HD2D', 'Cybersecurity'],
      recentlyLearned: true,
      inMyJob: false,
      color: 'from-blue-500 to-yellow-500'
    },
    {
      name: 'Linux',
      icon: '🐧',
      projects: ['NSA', 'Cybersecurity'],
      recentlyLearned: true,
      inMyJob: true,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'JetBrains',
      icon: '🧠',
      projects: ['Développement'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'MySQL',
      icon: '🐬',
      projects: ['Base de données'],
      recentlyLearned: false,
      inMyJob: true,
      color: 'from-blue-600 to-blue-600'
    }
  ]
}