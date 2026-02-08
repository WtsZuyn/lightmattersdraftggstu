
import { Material, Zone } from './types';

export const MATERIALS: Material[] = [
  {
    id: 'aerogel',
    name: 'Aerogel',
    chemical: 'SiO₂',
    subtitle: 'The Frozen Smoke',
    tag: '99.8% Air',
    description: 'Aerogel is a solid network that’s ~99% air, making it the lightest solid material in existence while serving as a super-insulator.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwD8Z2dZNV1BHxKviTklquLndr2eCvfzbAxKtJlZxac53CqLT736dggP0xym8bhLGLr4Ke-D8aIXBGHRdGyisTgbTb4lgq8VeLIwZJ5y7x7heIdCU6dADhRv8c7V09nYhTdEA2nByxV5P7X6wG8cyTd8DVNiiHTBPvK7DvE-tfaUWo08u4sqWBJDs2CSNfNNGkY3DbeEazlIpQyflh6zFvW0Xb-jWGBAyGsb7yKr2a2NY5nVBbQe74mD7LZOsMeLRJPs8nWc2RSL4',
    color: '#25aff4',
    stats: [
      { label: 'Density', value: '0.001', unit: 'g/cm³', icon: 'scale' },
      { label: 'Thermal', value: '0.013', unit: 'W/mK', icon: 'thermostat' },
      { label: 'Range', value: '650', unit: 'Max °C', icon: 'device_thermostat' }
    ]
  },
  {
    id: 'graphene',
    name: 'Graphene',
    chemical: 'C',
    subtitle: 'The Miracle Material',
    tag: '200x Steel',
    description: 'A single layer of carbon atoms arranged in a 2D hexagonal lattice. It is incredibly strong, lightweight, and an excellent conductor.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5JjjUYNTRhpqAVSHJny3RDhAU6oLsAAn-HX9QYXJrivq8k8Gi-z2KiV33MttIXK26eIOMEQwBRCqODZu8GcKCta5PLsmfPjcXLeP8ssvt-h_37gGg2LhhzNtMT7PzJuhniTyeLHUz1znuVTQrGh2V15rfzf0UOz-Qx_-9Q2jVvkAOh3GUA5jv5-sXFcPYGisAv0pdY1jeTlnY-LV1umHS4ZnAOwdgXBsf_E16XINYUFZo8v5DCBPgzHbRMjIBO1UxKI72XZ9bIYA',
    color: '#4a5568',
    stats: [
      { label: 'Strength', value: '130', unit: 'GPa', icon: 'fitness_center' },
      { label: 'Hardness', value: '9', unit: 'Mohs', icon: 'diamond' },
      { label: 'Conduct.', value: '5k', unit: 'W/mK', icon: 'bolt' }
    ]
  },
  {
    id: 'nitinol',
    name: 'Nitinol',
    chemical: 'NiTi',
    subtitle: 'Shape Memory Alloy',
    tag: 'Elasticity',
    description: 'Nitinol exhibits shape memory and superelasticity, allowing it to return to its original shape after being deformed.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOvhm292CnBuqnmhRwCGPxc9vf1Zzg5o9EZjJHGDJ-KP2xVEo0vgEDkCfwRBE1mHb0nJJ097NTmwMplFOI01CmzWcei4fsJ-yUceM7ltbnX8HM4wFTJBG1wrAVIaFAJBiaxYOK6Rw6sMWL6E2YzK8hrVtjRWV0pnWSj2zTGyqhGaQwDHNpehbXkdb0yBUikMFbkAnnvpriAxtmG_Am41Ci1oAz8Hdap9MCC66FO63m1O_tPe67sQsq43_w74oknf1Er5kBLLd6LDE',
    color: '#667eea',
    stats: [
      { label: 'Phase', value: '70', unit: '°C trans.', icon: 'swap_horiz' },
      { label: 'Density', value: '6.45', unit: 'g/cm³', icon: 'scale' },
      { label: 'Strength', value: '800', unit: 'MPa', icon: 'bolt' }
    ]
  },
  {
    id: 'mycelium',
    name: 'Mycelium',
    chemical: 'BIO',
    subtitle: 'Grown Future',
    tag: 'Carbon Neg.',
    description: 'A sustainable biological material grown from fungal roots that can be molded into packaging or construction materials.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwJIdE9R1MStQsw2llQpkJYuVVazX8Z0df18cu6jIUO12cE2HTZFqiINNNvtGl7P6mp4g9wsxL_K8I3tTILaVVIc629RWZSwFlvA5bmxQxsBT_PZagZ8CB9Lwu8x6T2QctboPc8YeOotMqnTd-lSuirt4trZDFQlld238Y1VHpdKC5ki5wrBt_TrjIT07lLDMJpdyCUgFIlYM4RNokl0TOxlodQ0dNYzE-DsziRMjWAww3QgJQc9fiL7R3NM4wDkpkA_CpHaF0ZTk',
    color: '#48bb78',
    stats: [
      { label: 'Growth', value: '5', unit: 'Days', icon: 'eco' },
      { label: 'CO2', value: '-1.2', unit: 'kg/m³', icon: 'air' },
      { label: 'Insul.', value: '0.04', unit: 'W/mK', icon: 'thermostat' }
    ]
  }
];

export const ZONES: Zone[] = [
  { id: 'z1', name: 'Threshold', subtitle: 'The Entryway', status: 'inactive', x: 400, y: 800, icon: 'door_open', description: 'Begin your journey into the world of light.', image: 'https://picsum.photos/400/300' },
  { id: 'z2', name: 'Aerogel', subtitle: 'The Solid Smoke', status: 'active', x: 500, y: 600, icon: 'science', description: '99.8% Air. The lightest solid known to man.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR71WABklZrbhfNkMj_IRNUX1Uqi5h11Ca9-BpJvGXJ4w2MLvQbIRDQvEG2oxweFyQhgeqLaEGAmhr98ILf7eQs9Pjfzvmue3Z4uo4qugulKwqszGgRJBsLm2hXbS6CUY3WNOLsPYHb9XLuQVX_ikecSfSa2kKSY1Z9q0iRij_CA9JM7sEsSEamxwme6RoHMgvvxauzO2QrJoXzcuraovrmDSIOLLycMfxpnM9ZWJBGroY7FB9233--PrWefaUxwZHrdtDw0kK5mQ' },
  { id: 'z3', name: 'Graphene', subtitle: 'Nano World', status: 'inactive', x: 650, y: 550, icon: 'hive', description: 'Explore the 2D hexagonal lattice.', image: 'https://picsum.photos/400/301' },
  { id: 'z4', name: 'Alloy Lab', subtitle: 'Shape Memory', status: 'inactive', x: 700, y: 400, icon: 'rebase_edit', description: 'Experiment with Nitinol and shape memory.', image: 'https://picsum.photos/400/302' }
];
