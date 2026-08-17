import type { IconName } from '../components/ui/Icon.astro';

export interface Benefit {
  icon: IconName;
  title: string;
  description: string;
  tone: 'rose' | 'lilac' | 'peach' | 'mint';
}

export const benefits: Benefit[] = [
  {
    icon: 'droplet',
    title: 'Hidratación profunda',
    description:
      'Ácido hialurónico de triple peso molecular + escualano: retención de agua visible desde la primera semana.',
    tone: 'rose',
  },
  {
    icon: 'sparkles',
    title: 'Luminosidad natural',
    description:
      'Vitamina C estabilizada y niacinamida que unifican el tono y devuelven el brillo sin grasa ni residuos.',
    tone: 'lilac',
  },
  {
    icon: 'leaf',
    title: 'Fórmulas limpias',
    description:
      'Vegano, cruelty-free y con un 98% de ingredientes de origen natural. Sin parabenos, siliconas ni fragancias sintéticas.',
    tone: 'mint',
  },
  {
    icon: 'shield',
    title: 'Barrera fortalecida',
    description:
      'Ceramidas y péptidos que reparan la barrera cutánea: menos sensibilidad, más resistencia día tras día.',
    tone: 'peach',
  },
];