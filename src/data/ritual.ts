export interface RitualStep {
  step: string;
  title: string;
  description: string;
  time: string;
  tone: 'rose' | 'lilac' | 'peach';
}

export const ritual: RitualStep[] = [
  {
    step: '01',
    title: 'Limpieza',
    description:
      'El Limpiador de Espuma elimina impurezas y maquillaje sin tirantez, dejando la piel lista para recibir.',
    time: '1 min · mañana y noche',
    tone: 'rose',
  },
  {
    step: '02',
    title: 'Luz',
    description:
      'Tres gotas de Serum Glow sobre piel húmeda. La vitamina C trabaja mientras tu piel respira.',
    time: '30 s · mañana',
    tone: 'peach',
  },
  {
    step: '03',
    title: 'Sello',
    description:
      'La Cremosa Hidratante sella los activos y (por el día) el Protector Solar Invisible completa tu escudo.',
    time: '1 min · mañana y noche',
    tone: 'lilac',
  },
];