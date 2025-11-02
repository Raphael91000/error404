export type Language = 'en' | 'fr';

interface StorySection {
  text: string;
  highlightWords: string[];
  initialVisibleCount: number;
  containerClassName: string;
  textClassName: string;
  baseClassName: string;
}

interface MetricCard {
  label: string;
  value: string;
  details: string[];
}

interface BenefitCard {
  label: string;
  value: string;
  description: string;
}

interface FooterLinks {
  navigation: Array<{ label: string; href: string }>;
  legal: Array<{ label: string; href: string }>;
}

interface SiteTranslations {
  hero: {
    title: {
      primary: string;
      secondary: string;
    };
    overlayText: string;
    overlayHighlightWords: string[];
  };
  robotCard: {
    title: string;
    description: string;
  };
  aiCard: {
    title: string;
    description: string;
  };
  zoomParallax: {
    intro: {
      prefix: string;
      highlight: string;
    };
    leadText: string;
    leadHighlightWords: string[];
    metrics: MetricCard[];
  };
  benefits: {
    title: string;
    highlightWords: string[];
    cards: BenefitCard[];
  };
  story: StorySection[];
  reassurance: StorySection;
  footer: {
    navigationTitle: string;
    legalTitle: string;
    links: FooterLinks;
    rightsSuffix: string;
  };
  backToHomeLabel: string;
  languageToggleLabel: string;
}

export const translations: Record<Language, SiteTranslations> = {
  en: {
    hero: {
      title: {
        primary: 'NeuroBots',
        secondary: 'By R',
      },
      overlayText: 'Replacing humans? Yes, but with whom?',
      overlayHighlightWords: ['yes', 'whom'],
    },
    robotCard: {
      title: 'Interactive 3D Robot',
      description:
        'Industrial robot arms like Universal Robots’ UR10e automate repetitive manual tasks on the factory floor—assembly, palletizing—while freeing operators for higher-value work.',
    },
    aiCard: {
      title: 'Artificial Intelligence',
      description:
        'Models such as ChatGPT and DALL·E from OpenAI automate content creation, data analysis, and customer support, helping companies boost productivity at scale.',
    },
  zoomParallax: {
    intro: {
      prefix: "Let me explain",
      highlight: "why",
    },
    leadText: 'And believe me, it is only a matter of time.',
      leadHighlightWords: ['believe', 'time'],
      metrics: [
        {
          label: '2023 • Adoption',
          value: '~500 M',
          details: [
            'Monthly AI users worldwide · DataReportal 2023',
            '18% of US adults have used ChatGPT · Pew Research',
          ],
        },
        {
          label: '2024 • Adoption',
          value: '~800 M',
          details: [
            'Monthly AI users worldwide · DataReportal / Statista',
            '78% of global organisations deploy AI · Stanford AI Index',
          ],
        },
        {
          label: '2024 • Workforce impact',
          value: '12 742',
          details: [
            'US jobs cut citing AI (Jan–Sep) · Challenger Gray & Christmas',
          ],
        },
        {
          label: '2025 • Adoption',
          value: '>1 B',
          details: [
            'Monthly AI users worldwide · DataReportal 2025',
            '34% of US adults use ChatGPT · Pew Research',
          ],
        },
        {
          label: '2025 • Workplace',
          value: '21%',
          details: [
            'US workers using AI on the job · Pew Research Sep 2025',
          ],
        },
        {
          label: '2025 • Workforce impact',
          value: '17 375',
          details: [
            'US layoffs explicitly citing AI (Jan–Sep) · Challenger Gray & Christmas',
            '20 219 layoffs tied to “technology updates”',
          ],
        },
      ],
    },
    benefits: {
      title: 'Why companies are accelerating AI automation',
      highlightWords: ['companies', 'automation', 'ai'],
      cards: [
        {
          label: 'Cost reduction',
          value: '-32%',
          description: 'Average drop in operating expenses after AI roll-out (McKinsey).',
        },
        {
          label: 'Productivity boost',
          value: '+41%',
          description: 'Typical gain in delivering products and services (Accenture).',
        },
        {
          label: 'Always-on operations',
          value: '+168 h',
          description: 'Extra weekly capacity with 24/7 automated teams.',
        },
      ],
    },
    story: [
      {
        text: 'AI and robots are gradually replacing humans',
        highlightWords: ['ai', 'robots', 'humans'],
        initialVisibleCount: 0,
        containerClassName: 'h-[140vh]',
        textClassName: 'justify-center text-center text-3xl md:text-4xl font-light tracking-tight font-sans text-white',
        baseClassName: 'text-white',
      },
      {
        text: 'Artificial intelligence is shaking up the world of work. In just two years, more than one billion people use AI tools each month, and nearly 80% of companies rely on them. Tasks once handled by humans are now automated.',
        highlightWords: ['artificial', 'intelligence', 'work', 'billion', 'companies', 'automated', 'ai'],
        initialVisibleCount: 3,
        containerClassName: 'h-[140vh]',
        textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans text-white',
        baseClassName: 'text-white',
      },
      {
        text: 'Robots and AI software run tirelessly through long, repetitive, or low-value operations—data entry, customer support, accounting, manufacturing. What took humans hours now happens in seconds, without fatigue or extra cost.',
        highlightWords: ['robots', 'software', 'operations', 'support', 'accounting', 'manufacturing', 'seconds'],
        initialVisibleCount: 3,
        containerClassName: 'h-[140vh]',
        textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans text-white',
        baseClassName: 'text-white',
      },
      {
        text: 'There is a downside: Challenger Gray reports more than 30,000 US jobs cut in 2024–2025 because of AI and automation. For businesses, it is a way to reduce costs and increase productivity.',
        highlightWords: ['downside', 'jobs', 'ai', 'automation', 'businesses', 'productivity'],
        initialVisibleCount: 3,
        containerClassName: 'h-[140vh]',
        textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans text-white/80',
        baseClassName: 'text-white/80',
      },
    ],
    reassurance: {
      text: 'But do not worry: AI cannot replace humans everywhere. Roles such as CEO, CFO, or CTO demand unique expertise and sharp decision-making. An AI or a robot cannot shoulder that responsibility. The best way not to be replaced is to keep your skills sharp.',
      highlightWords: ['ai', 'humans', 'ceo', 'cfo', 'cto', 'decision-making', 'skills'],
      initialVisibleCount: 5,
      containerClassName: 'h-[140vh]',
      textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans',
      baseClassName: 'text-white/85',
    },
    footer: {
      navigationTitle: 'Navigation',
      legalTitle: 'Legal',
      links: {
        navigation: [{ label: 'Home', href: '/' }],
        legal: [
          { label: 'Legal notice', href: '/mentions-legales' },
          { label: 'Privacy policy', href: '/confidentialite' },
          { label: 'Terms of use', href: '/cgu' },
        ],
      },
      rightsSuffix: 'All rights reserved · by R',
    },
    backToHomeLabel: 'Back to home',
    languageToggleLabel: 'Language selector',
  },
  fr: {
    hero: {
      title: {
        primary: 'NeuroBots',
        secondary: 'By R',
      },
      overlayText: 'Remplacer les humains? Oui mais par qui?',
      overlayHighlightWords: ['oui', 'qui'],
    },
    robotCard: {
      title: 'Robot 3D interactif',
      description:
        'Les bras robots industriels comme le UR10e d’Universal Robots remplacent les tâches manuelles répétitives en usine (assemblage, palettisation) et libèrent les opérateurs pour des missions à plus forte valeur ajoutée.',
    },
    aiCard: {
      title: 'Intelligence artificielle',
      description:
        'Les modèles comme ChatGPT et DALL·E d’OpenAI automatisent la création de contenus, l’analyse de données et l’assistance client, et sont désormais massivement utilisés par les entreprises pour gagner en productivité.',
    },
  zoomParallax: {
    intro: {
      prefix: "Je t’explique",
      highlight: "pourquoi",
    },
      leadText: 'Et crois-moi, ce n’est qu’une question de temps.',
      leadHighlightWords: ['crois', 'question', 'temps'],
      metrics: [
        {
          label: '2023 • Adoption',
          value: '~500 M',
          details: [
            'Utilisateurs mensuels d’IA dans le monde · DataReportal 2023',
            '18 % des adultes américains ont utilisé ChatGPT · Pew Research',
          ],
        },
        {
          label: '2024 • Adoption',
          value: '~800 M',
          details: [
            'Utilisateurs mensuels d’IA dans le monde · DataReportal / Statista',
            '78 % des organisations mondiales intègrent l’IA · Stanford AI Index',
          ],
        },
        {
          label: '2024 • Impact social',
          value: '12 742',
          details: [
            'Postes supprimés aux États-Unis citant l’IA (jan–sept) · Challenger Gray & Christmas',
          ],
        },
        {
          label: '2025 • Adoption',
          value: '>1 Md',
          details: [
            'Utilisateurs mensuels d’IA dans le monde · DataReportal 2025',
            '34 % des adultes américains utilisent ChatGPT · Pew Research',
          ],
        },
        {
          label: '2025 • Travail',
          value: '21 %',
          details: [
            'Travailleurs américains utilisant l’IA au quotidien · Pew Research sept. 2025',
          ],
        },
        {
          label: '2025 • Impact social',
          value: '17 375',
          details: [
            'Postes supprimés aux États-Unis citant explicitement l’IA (jan–sept) · Challenger Gray & Christmas',
            '20 219 suppressions pour “mises à jour technologiques”',
          ],
        },
      ],
    },
    benefits: {
      title: 'Pourquoi les entreprises accélèrent l’automatisation IA',
      highlightWords: ['entreprises', 'automatisation', 'ia'],
      cards: [
        {
          label: 'Réduction des coûts',
          value: '-32 %',
          description: 'Baisse moyenne des dépenses opérationnelles après déploiement de l’IA (McKinsey).',
        },
        {
          label: 'Productivité accrue',
          value: '+41 %',
          description: 'Gain moyen sur la production et la livraison de services (Accenture).',
        },
        {
          label: 'Disponibilité 24/7',
          value: '+168 h',
          description: 'Capacité horaire supplémentaire sans interruption humaine.',
        },
      ],
    },
    story: [
      {
        text: 'L’IA et les robots remplacent peu à peu les humains',
        highlightWords: ['l’ia', 'robots', 'humains'],
        initialVisibleCount: 0,
        containerClassName: 'h-[140vh]',
        textClassName: 'justify-center text-center text-3xl md:text-4xl font-light tracking-tight font-sans',
        baseClassName: 'text-white',
      },
      {
        text: 'L’intelligence artificielle bouleverse le monde du travail. En deux ans, plus d’un milliard de personnes utilisent désormais des outils d’IA et près de 80 % des entreprises y ont recours. Résultat : de nombreuses tâches autrefois humaines sont automatisées.',
        highlightWords: ['intelligence', 'artificielle', 'travail', 'milliard', 'entreprises', 'humaines', 'automatisées', 'd’ia'],
        initialVisibleCount: 3,
        containerClassName: 'h-[140vh]',
        textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans text-white/80',
        baseClassName: 'text-white/80',
      },
      {
        text: 'Les robots et logiciels d’IA effectuent sans pause des opérations longues, répétitives ou à faible valeur ajoutée — saisie de données, assistance client, comptabilité, fabrication. Là où un salarié travaillait des heures, la machine agit en quelques secondes, sans fatigue ni coût supplémentaire.',
        highlightWords: ['robots', 'logiciels', 'opérations', 'assistance', 'comptabilité', 'fabrication', 'machine'],
        initialVisibleCount: 3,
        containerClassName: 'h-[140vh]',
        textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans',
        baseClassName: 'text-white/85',
      },
      {
        text: 'Cette efficacité a un revers : selon le cabinet Challenger, plus de 30 000 emplois ont déjà été supprimés aux États-Unis en 2024-2025 à cause de l’IA et de l’automatisation. Les entreprises y voient une solution pour réduire les coûts et augmenter leur productivité.',
        highlightWords: ['efficacité', 'challenger', 'emplois', 'l’ia', 'automatisation', 'entreprises', 'productivité', 'coûts'],
        initialVisibleCount: 3,
        containerClassName: 'h-[140vh]',
        textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans',
        baseClassName: 'text-white/85',
      },
    ],
    reassurance: {
      text: 'Mais ne t’inquiète pas : ils ne pourront pas remplacer l’humain sur tous les points. Des postes comme chef d’entreprise, CFO ou CTO exigent des compétences uniques et surtout des prises de décisions. Une IA ou un robot ne peut pas reproduire cette responsabilité. Tu as bien compris : le seul moyen de ne pas te faire remplacer, c’est d’être compétent.',
      highlightWords: ['humain', 'chef', 'cfo', 'cto', 'décisions', 'ia', 'robot', 'compétent'],
      initialVisibleCount: 5,
      containerClassName: 'h-[140vh]',
      textClassName: 'text-lg leading-relaxed md:text-xl font-light font-sans',
      baseClassName: 'text-white/85',
    },
    footer: {
      navigationTitle: 'Navigation',
      legalTitle: 'Légal',
      links: {
        navigation: [{ label: 'Accueil', href: '/' }],
        legal: [
          { label: 'Mentions légales', href: '/mentions-legales' },
          { label: 'Politique de confidentialité', href: '/confidentialite' },
          { label: 'CGU', href: '/cgu' },
        ],
      },
      rightsSuffix: 'Tous droits réservés · by R',
    },
    backToHomeLabel: 'Retour à l’accueil',
    languageToggleLabel: 'Sélecteur de langue',
  },
};
