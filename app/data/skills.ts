export interface Skill {
  name: string
  icon: string
  description: string
  contexts: string[]
  inMyJob: boolean
  recentlyDeveloped: boolean
  color: string
}

export interface SkillsData {
  'savoir-faire': Skill[]
  'savoir-etre': Skill[]
}

export const skills: SkillsData = {
  'savoir-faire': [
    {
      name: 'Développement Full-Stack',
      icon: '💻',
      description: 'Conception et développement d\'applications web complètes',
      contexts: ['Projets personnels', 'Formation Epitech'],
      inMyJob: true,
      recentlyDeveloped: false,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Architecture Logicielle',
      icon: '🏗️',
      description: 'Conception d\'architectures évolutives et maintenables',
      contexts: ['Projets complexes', 'Patterns de design'],
      inMyJob: false,
      recentlyDeveloped: true,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Gestion de Base de Données',
      icon: '🗄️',
      description: 'Conception, optimisation et administration de BDD',
      contexts: ['MySQL', 'MongoDB', 'PostgreSQL'],
      inMyJob: true,
      recentlyDeveloped: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'DevOps & Déploiement',
      icon: '🚀',
      description: 'Containerisation, CI/CD et automatisation',
      contexts: ['Docker', 'Git workflows', 'Nginx'],
      inMyJob: false,
      recentlyDeveloped: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Tests & Qualité Code',
      icon: '🧪',
      description: 'Tests unitaires, intégration et bonnes pratiques',
      contexts: ['Jest', 'Testing patterns', 'Code review'],
      inMyJob: false,
      recentlyDeveloped: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Cybersécurité',
      icon: '🔐',
      description: 'Sécurisation des applications et infrastructures',
      contexts: ['TryHackMe', 'Pentesting', 'Vulnérabilités'],
      inMyJob: false,
      recentlyDeveloped: true,
      color: 'from-red-600 to-purple-600'
    }
  ],
  'savoir-etre': [
    {
      name: 'Adaptabilité',
      icon: '🔄',
      description: 'Capacité à s\'adapter rapidement aux nouvelles technologies',
      contexts: ['Reconversion réussie', 'Veille technologique'],
      inMyJob: true,
      recentlyDeveloped: false,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Autonomie',
      icon: '🎯',
      description: 'Capacité à mener des projets de bout en bout',
      contexts: ['Projets personnels', 'Auto-formation'],
      inMyJob: true,
      recentlyDeveloped: false,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Esprit d\'équipe',
      icon: '🤝',
      description: 'Collaboration efficace et partage de connaissances',
      contexts: ['Projets de groupe', 'Pair programming'],
      inMyJob: true,
      recentlyDeveloped: false,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Curiosité Technique',
      icon: '🔍',
      description: 'Passion pour l\'apprentissage continu et l\'innovation',
      contexts: ['Nouvelles technologies', 'Open source'],
      inMyJob: false,
      recentlyDeveloped: false,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Résolution de Problèmes',
      icon: '🧩',
      description: 'Approche méthodique pour résoudre les défis techniques',
      contexts: ['Debugging', 'Optimisation', 'Innovation'],
      inMyJob: true,
      recentlyDeveloped: false,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Communication',
      icon: '💬',
      description: 'Vulgarisation technique et documentation claire',
      contexts: ['Documentation projet', 'Présentation'],
      inMyJob: true,
      recentlyDeveloped: true,
      color: 'from-cyan-500 to-indigo-500'
    },
    {
      name: 'Rigueur Professionnelle',
      icon: '📋',
      description: 'Méthodologie issue de l\'expérience en comptabilité',
      contexts: ['Gestion des paies', 'Processus qualité'],
      inMyJob: true,
      recentlyDeveloped: false,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Leadership Technique',
      icon: '👨‍💻',
      description: 'Capacité à guider et mentorer sur les aspects techniques',
      contexts: ['Projets étudiants', 'Code review'],
      inMyJob: false,
      recentlyDeveloped: true,
      color: 'from-red-500 to-orange-500'
    }
  ]
}