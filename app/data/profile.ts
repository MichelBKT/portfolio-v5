export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface ProfileData {
  image?: string
  title: string
  bio: string[]
  timeline: TimelineEvent[]
}

export const profile: ProfileData = {
  image: 'assets/images/memoji.png',
  title: 'Développeur Web Full-Stack',
  bio: [
    "Depuis toujours, l'informatique est bien plus qu'un simple outil pour moi : c'est une véritable passion ! Fasciné par les possibilités infinies du numérique, j'ai d'abord pris un chemin différent en me lançant dans la comptabilité, avec une spécialisation en gestion des paies.",
    "Mais l'envie de coder, de créer et de donner vie à mes idées ne m'a jamais quitté.",
    "En 2024, j'ai donc sauté le pas et obtenu mon titre de Développeur Web et Web Mobile. Aujourd'hui, je poursuis mon aventure à Epitech, déterminé à repousser mes limites et à explorer toujours plus loin le monde du développement web.",
    "Ces différentes expériences m'ont permis de comprendre les enjeux business réels, que la rigueur et la méthodologie sont essentielles pour réussir dans ce domaine. J'ai aussi une capacité à traduire des exigences métier en solutions techniques efficaces.",
    "C'est pourquoi, je suis convaincu qu'Epitech est l'école idéale pour moi. Je vais pouvoir me spécialiser dans les technologies qui me passionnent, tout en continuant à développer mes compétences en informatique."
  ],
  timeline: [
    {
      year: '2012-2014',
      title: 'COMPTABLE FACTURATION',
      description: 'Facturation clients et relances'
    },
    {
      year: '2014-2020',
      title: 'GESTIONNAIRE PAIE',
      description: 'Bulletins de paie et déclarations sociales'
    },
    {
      year: '2022-2024',
      title: 'RECONVERSION',
      description: 'Décision de se tourner vers le dev web '
    },
    {
      year: '2024',
      title: 'CERTIFICATION',
      description: 'Développeur Web et Web Mobile'
    },
    {
      year: '2024-2027',
      title: 'EPITECH',
      description: 'Poursuite d\'études en informatique'
    },
    {
      year: 'NOW',
      title: 'PRESENT',
      description: 'En route vers l\'expertise'
    }
  ]
}

export const epitechInfo = {
  title: 'EPITECH',
  image: 'assets/images/epitech_logo_bleu.png',
  link: 'https://www.epitech.eu/fr/',
  description: [
    "Epitech est une école d'informatique qui propose une pédagogie par projet, basée sur l'apprentissage par la pratique. Ici, on apprend en faisant, en se trompant, en recommençant. C'est un environnement stimulant, qui pousse à sortir de sa zone de confort et à repousser ses limites."
  ]
}