export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  clientFit: string;
  tools: string[];
  previewImage: string;
  previewVideo?: string;
  statLabel: string;
  statValue: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'product-commercials',
    number: '01',
    title: 'AI PRODUCT ADS & COMMERCIALS',
    subtitle: 'High-Impact Advertising for Visionary Brands',
    description: 'Transform physical and conceptual products into hyper-luxurious commercial cinema. From fluid simulations to impossible camera tracking, we produce broadcast-ready advertising without the million-dollar physical film crew constraints.',
    deliverables: [
      '15s, 30s & 60s broadcast and social hero masters',
      'Ultra-macro product physics and fluid mechanics',
      'Hyper-photorealistic synthetic packaging and materials',
      'Multi-format delivery (16:9, 9:16, 4:5, 1:1, DOOH)',
      'Custom color grading and sound design included'
    ],
    clientFit: 'Luxury brands, beauty & fragrance houses, automotive manufacturers, tech hardware, consumer beverage.',
    tools: ['Runway Gen-3', 'Midjourney v7', 'Flux Pro', 'Topaz Video AI 5', 'DaVinci Resolve Studio'],
    previewImage: '/src/assets/images/project_solaris_fragrance_1790418010469.jpg',
    statLabel: 'Production Velocity',
    statValue: '5x faster than physical film shoots'
  },
  {
    id: 'cinematic-videos',
    number: '02',
    title: 'AI CINEMATIC VIDEOS',
    subtitle: 'Short Films, Narrative Teasers & Concept Worlds',
    description: 'Narrative storytelling with cinematic scale. We direct atmospheric short films, sci-fi worldbuilding sequences, title sequences, and music films driven by artificial intelligence, preserving emotional resonance and character consistency.',
    deliverables: [
      'Full narrative concept development and scriptwriting',
      'Temporal character consistency across scenes',
      'Unbounded environmental worldbuilding (alien ecosystems, futuristic cities)',
      'Theatrical grade 4K DCI master exports',
      'Full cinematic orchestral & synthetic soundscape synthesis'
    ],
    clientFit: 'Entertainment studios, game developers (cinematic trailers), music artists, sci-fi franchises, venture narrative films.',
    tools: ['Sora AI', 'Luma Dream Machine', 'Runway Gen-3 Alpha', 'ElevenLabs Audio', 'Cubase Pro 14'],
    previewImage: '/src/assets/images/hero_cinematic_ai_1790417996387.jpg',
    statLabel: 'Festival Recognition',
    statValue: '2026 AI Film Grand Jury Winner'
  },
  {
    id: 'visual-content',
    number: '03',
    title: 'AI VISUAL CONTENT & CAMPAIGNS',
    subtitle: 'High-Retention Motion for Modern Attention',
    description: 'Stop the scroll with imagery audiences have literally never seen before. We produce cohesive digital campaign ecosystems: motion key visuals, interactive billboard animations, 3D anamorphic displays, and viral teaser loops.',
    deliverables: [
      'Comprehensive campaign motion key visuals',
      'Large-scale LED facade & anamorphic DOOH loops',
      'Series of 6–12 interconnected social motion vignettes',
      'High-resolution print & digital key art (up to 16K)',
      'A/B test variations with generative variations'
    ],
    clientFit: 'Fashion houses, streetwear labels, digital product launches, music festivals, luxury hospitality.',
    tools: ['Midjourney v7', 'ComfyUI ControlNet', 'Kling AI 1.5', 'After Effects AI'],
    previewImage: '/src/assets/images/project_haute_cyber_1790418047662.jpg',
    statLabel: 'Engagement Multiplier',
    statValue: '+240% average watch-through rate'
  },
  {
    id: 'creative-direction',
    number: '04',
    title: 'AI CREATIVE DIRECTION & CONSULTING',
    subtitle: 'Architecting Brand Universes & Custom Workflows',
    description: 'We partner with internal agency creative teams, brand CMOs, and directors to build custom AI filmmaking workflows, proprietary visual style systems, and treatment decks that win enterprise pitches.',
    deliverables: [
      'Bespoke visual style books and prompt architecture manuals',
      'Custom fine-tuned LoRA models trained on brand guidelines',
      'Pitch-winning cinematic treatment decks and animatics',
      'Executive workshop and workflow implementation',
      'On-demand creative direction for AI-enabled productions'
    ],
    clientFit: 'Global advertising agencies, production companies, in-house creative departments, venture studios.',
    tools: ['Custom LoRA Pipelines', 'SDXL / Flux Custom Models', 'ACES Color Standards', 'Keynote Cinematic'],
    previewImage: '/src/assets/images/project_chrono_automotive_1790418022456.jpg',
    statLabel: 'Agency Adoption',
    statValue: '12+ global agencies guided'
  }
];
