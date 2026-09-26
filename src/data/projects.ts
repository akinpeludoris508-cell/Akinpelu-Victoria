export interface Project {
  id: string;
  title: string;
  category: 'AI PRODUCT COMMERCIAL' | 'CINEMATIC AI FILM' | 'FASHION & BEAUTY' | 'TECHNOLOGY' | 'EXPERIMENTAL VISUALS';
  year: string;
  duration: string;
  aspectRatio: string;
  tagline: string;
  description: string;
  image: string;
  videoUrl?: string;
  client: string;
  role: string;
  tools: string[];
  productionApproach: string;
  aiWorkflow: string;
  finalDelivery: string;
  featured: boolean;
  filmSpecs: {
    fps: string;
    resolution: string;
    colorSpace: string;
    cameraLens: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'solaris-parfum',
    title: 'SOLARIS — L’OR NOIR',
    category: 'AI PRODUCT COMMERCIAL',
    year: '2026',
    duration: '00:45',
    aspectRatio: '2.39:1',
    tagline: 'Liquid Gold and Obsidian Alchemy for Haute Parfumerie',
    description: 'A sensory commercial exploring the collision between molten gold and volcanic basalt glass. Commissioned as the worldwide launch film for SOLARIS Parfums, capturing fluid micro-physics impossible to shoot with physical cameras without millions in rig budgets.',
    image: '/src/assets/images/project_solaris_fragrance_1790418010469.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    client: 'Solaris Parfums Paris',
    role: 'AI Film Director, Creative Direction, Neural Fluid Simulation',
    tools: ['Midjourney v7', 'Runway Gen-3 Alpha', 'Sora', 'Topaz Video AI 5', 'DaVinci Resolve ACES'],
    productionApproach: 'Created 240 custom diffusion LoRAs trained on real antique French blown crystal and macro honey viscosity. Directed camera motion vectors with custom trajectory prompts to simulate a zero-g macro probe lens.',
    aiWorkflow: 'Multi-stage latent upscaling: 1080p generative base → optical flow vector stabilization → 4K DCI temporal consistency pass → ACEScc color grading in DaVinci Resolve.',
    finalDelivery: 'Broadcast 4K DCI Master, 9:16 Social Cutdowns, Paris Fashion Week LED Screen Array (12,000px wide).',
    featured: true,
    filmSpecs: {
      fps: '24.000 fps',
      resolution: '4096 × 1716 (DCI 4K Scope)',
      colorSpace: 'ACEScc / DCI-P3 Gen 2',
      cameraLens: 'Simulated Cooke Anamorphic /i 65mm T2.3'
    }
  },
  {
    id: 'chrono-hypercar',
    title: 'PROJECT CHRONO: SPEED OF LIGHT',
    category: 'AI PRODUCT COMMERCIAL',
    year: '2026',
    duration: '01:15',
    aspectRatio: '2.39:1',
    tagline: 'Brutalist Aerodynamics and Pure Kinetic Velocity',
    description: 'A commercial film heralding a new electric hypercar prototype. Filmed inside synthetic architectural tunnels with hyper-realistic wet asphalt reflections, light-streak optics, and aerodynamic slipstream air compression.',
    image: '/src/assets/images/project_chrono_automotive_1790418022456.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    client: 'Chrono Motors Global',
    role: 'Director, AI Vehicle Design Synthesis, Sound Design',
    tools: ['Runway Gen-3', 'ComfyUI ControlNet', 'Kling AI 1.5', 'Splice Neural FX', 'Dolby Atmos'],
    productionApproach: 'Synthesized non-existent brutalist underground tunnel architectures, controlling camera speed from 0 to 300 km/h with continuous temporal coherence across 18 sequential shots.',
    aiWorkflow: '3D blockout depth passes fed into generative image-to-video pipelines, locked to chassis geometry using motion vector guidance to prevent wheel-wobble and silhouette warping.',
    finalDelivery: 'Worldwide Concept Reveal, Super Bowl 60-second broadcast spec, IMAX 1.90:1 special master.',
    featured: true,
    filmSpecs: {
      fps: '24.000 fps',
      resolution: '3840 × 1608 (Ultra-Wide 4K)',
      colorSpace: 'Rec.2020 / HDR10',
      cameraLens: 'Simulated ARRI Master Anamorphic 35mm'
    }
  },
  {
    id: 'biome-origins',
    title: 'BIOME: THE UNCHARTED KINGDOM',
    category: 'CINEMATIC AI FILM',
    year: '2026',
    duration: '03:20',
    aspectRatio: '16:9',
    tagline: 'Bioluminescent Organisms in Impossible Ecosystems',
    description: 'A poetic nature documentary exploring a hypothetical planetary biosphere where fungal networks communicate via coherent quantum light pulses. Selected for the 2026 AI Film Festival Grand Jury Prize.',
    image: '/src/assets/images/project_biome_documentary_1790418032989.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    client: 'Independent / Sundance AI Cinema Initiative',
    role: 'Writer, Director, Worldbuilder & AI Cinematographer',
    tools: ['Flux 1.1 Pro', 'Luma Dream Machine', 'Runway Gen-3', 'ElevenLabs Neural Audio', 'Cubase Pro 14'],
    productionApproach: 'Deep biological worldbuilding referencing deep-sea cephalopods, nocturnal rainforest mycology, and crystalline mineral structures. Voiceover performed by synthetic voice cloned with subtle breath cadences.',
    aiWorkflow: 'Multi-layered visual compositing blending 32 AI camera angles with spatial audio fields generated from botanical electrical impulses.',
    finalDelivery: 'Theatrical DCP 4K, 5.1 Surround Sound, Interactive Web Experience.',
    featured: true,
    filmSpecs: {
      fps: '24.000 fps',
      resolution: '3840 × 2160 (UHD 4K)',
      colorSpace: 'DCI-P3 / HDR Master',
      cameraLens: 'Simulated Leica Noctilux 50mm f/0.95'
    }
  },
  {
    id: 'haute-cyber',
    title: 'CHROMA: HAUTE COUTURE 2027',
    category: 'FASHION & BEAUTY',
    year: '2026',
    duration: '00:50',
    aspectRatio: '4:3',
    tagline: 'Liquid Chrome & Architectural Sculptural Garments',
    description: 'An avant-garde fashion campaign for a high-fashion house debuting synthetic textiles that shift pigmentation based on ambient temperature and sunlight angle. Photographed in an ethereal brutalist marble pavilion.',
    image: '/src/assets/images/project_haute_cyber_1790418047662.jpg',
    videoUrl: 'https://res.cloudinary.com/so8uohki/video/upload/v1790425154/Creating_fashion_commercial_video_20260922112658.mp4',
    client: 'Maison Vaneau Couture',
    role: 'Creative Director & AI Cinematographer',
    tools: ['Midjourney v7', 'Flux Dev', 'Kling Pro', 'Topaz Gigapixel', 'After Effects AI'],
    productionApproach: 'Trained model on archive couture patterns from 1950s Cristobal Balenciaga blended with zero-friction fluid dynamic algorithms. Maintained micro-fabric weave texture across full camera rotations.',
    aiWorkflow: 'Latent-space interpolation linking stationary high-fashion poses with fluid slow-motion catwalk strides.',
    finalDelivery: 'Vertical DOOH screens in Tokyo, Milan & London; 4:3 Editorial Print Book.',
    featured: false,
    filmSpecs: {
      fps: '24.000 fps',
      resolution: '2880 × 2160 (4:3 Academy)',
      colorSpace: 'ProPhoto RGB / Adobe RGB',
      cameraLens: 'Simulated Hasselblad HC 100mm f/2.2'
    }
  },
  {
    id: 'aetheria-monolith',
    title: 'AETHERIA: THE FIRST CONTACT',
    category: 'CINEMATIC AI FILM',
    year: '2026',
    duration: '02:10',
    aspectRatio: '2.39:1',
    tagline: 'The Arrival of the Silent Obsidian Architect',
    description: 'A sci-fi cinematic teaser chronicling the silent descent of a geometric obsidian monolith over the black sands of northern Iceland. A study in scale, silence, and cinematic awe.',
    image: '/src/assets/images/hero_cinematic_ai_1790417996387.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    client: 'Sci-Fi Shorts Lab / Spec Commercial',
    role: 'Creator, Director, Sound Architect',
    tools: ['Sora AI', 'Runway Gen-3', 'Flux Pro', 'Topaz Video AI', 'Reaper Audio'],
    productionApproach: 'Location-accurate weather matching with Icelandic meteorological scans. Camera moves programmed to match heavy helicopter cine-rig dampening with authentic low-frequency ground rumble.',
    aiWorkflow: 'Raw prompt-to-video generation paired with custom noise-injection passes to simulate 35mm Kodak 5219 film stock grain structure.',
    finalDelivery: '4K Cinema Teaser, Dolby Atmos Master, Film Festival Circuit.',
    featured: false,
    filmSpecs: {
      fps: '24.000 fps',
      resolution: '4096 × 1716 (DCI 4K Scope)',
      colorSpace: 'ACEScc / Rec.709',
      cameraLens: 'Simulated Panavision C-Series 40mm Anamorphic'
    }
  }
];
