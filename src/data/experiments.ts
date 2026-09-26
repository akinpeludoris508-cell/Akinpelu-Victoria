export interface LabExperiment {
  id: string;
  code: string;
  title: string;
  category: string;
  date: string;
  promptArchitecture: string;
  hypothesis: string;
  resultNotes: string;
  fps: string;
  steps: number;
  engine: string;
  image: string;
  status: 'SUCCESS' | 'OPTIMAL' | 'BREAKTHROUGH' | 'ANOMALY';
  interactiveMetrics: {
    latentCoherence: string;
    motionVectors: string;
    temporalFidelity: string;
  };
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-01',
    code: 'LAB-EXP // 0081',
    title: 'Zero-G Viscosity & Molten Obsidian',
    category: 'FLUID PHYSICS DYNAMICS',
    date: 'MAR 2026',
    promptArchitecture: 'high-speed probe camera tracking ultra-dense black volcanic glass fluid colliding with liquid bronze, 1200fps micro-droplet surface tension, ACES film stock',
    hypothesis: 'Can we achieve fluid particle consistency across 12-second camera arcs without temporal boiling or particle flickering?',
    resultNotes: 'Zero flickering achieved by clamping high-frequency latent noise and utilizing motion vector guiding.',
    fps: '60.00 fps',
    steps: 64,
    engine: 'Runway Gen-3 + ComfyUI VectorNet',
    image: '/src/assets/images/project_solaris_fragrance_1790418010469.jpg',
    status: 'BREAKTHROUGH',
    interactiveMetrics: {
      latentCoherence: '99.4%',
      motionVectors: 'Smooth Linear Arc',
      temporalFidelity: 'Sub-pixel 4K'
    }
  },
  {
    id: 'exp-02',
    code: 'LAB-EXP // 0074',
    title: 'Multi-Epoch Brutalist Metamorphosis',
    category: 'ARCHITECTURAL LATENT WALKS',
    date: 'FEB 2026',
    promptArchitecture: 'seamless architectural morphing from 1960s monolithic concrete brutalist pavilion into 2090 biometric crystalline structure, golden hour rim shadows',
    hypothesis: 'Latent-space interpolation between two mathematically disparate architectural styles while holding ground contact geometry fixed.',
    resultNotes: 'Structural pillars retained precise pixel coordinates while surface textures organically transitioned from porous concrete to refractive crystal.',
    fps: '24.00 fps',
    steps: 120,
    engine: 'Flux Pro + Custom Depth Matrix',
    image: '/src/assets/images/project_haute_cyber_1790418047662.jpg',
    status: 'OPTIMAL',
    interactiveMetrics: {
      latentCoherence: '98.1%',
      motionVectors: 'Orthogonal Push',
      temporalFidelity: 'Zero Drift'
    }
  },
  {
    id: 'exp-03',
    code: 'LAB-EXP // 0069',
    title: 'Bioluminescent Quantum Spores',
    category: 'ORGANIC LIGHT SENSING',
    date: 'FEB 2026',
    promptArchitecture: 'macro photography of translucent fungal spores emitting coherent turquoise and emerald photon pulses, deep black velvet background, authentic bokeh falloff',
    hypothesis: 'Simulating physical light emission that illuminates neighboring organic geometry realistically inside generative frames.',
    resultNotes: 'Light bounce physics matched real raytracing rendering with authentic chromatic dispersion at boundaries.',
    fps: '48.00 fps',
    steps: 90,
    engine: 'Sora Generative Core + Topaz 5',
    image: '/src/assets/images/project_biome_documentary_1790418032989.jpg',
    status: 'BREAKTHROUGH',
    interactiveMetrics: {
      latentCoherence: '99.8%',
      motionVectors: 'Brownian Dispersion',
      temporalFidelity: 'Physical Ray bounce'
    }
  },
  {
    id: 'exp-04',
    code: 'LAB-EXP // 0055',
    title: 'Kinetic Slipstream & Aerodynamic Vortices',
    category: 'AERODYNAMIC SIMULATION',
    date: 'JAN 2026',
    promptArchitecture: 'hypercar traveling at 320km/h in subterranean concrete tunnel, condensation vapor vortex trails peeling off rear carbon wing in heavy rain',
    hypothesis: 'Synthesizing vapor trails that accurately follow Bernoulli fluid dynamics principles without synthetic artifacts.',
    resultNotes: 'Vortices curl naturally and interact with camera wake turbulence without silhouette shearing.',
    fps: '60.00 fps',
    steps: 75,
    engine: 'Kling 1.5 + Neural Flow Guidance',
    image: '/src/assets/images/project_chrono_automotive_1790418022456.jpg',
    status: 'OPTIMAL',
    interactiveMetrics: {
      latentCoherence: '97.9%',
      motionVectors: 'Vorticity Aligned',
      temporalFidelity: 'Fluid Accurate'
    }
  }
];
