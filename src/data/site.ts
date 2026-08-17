export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export const site = {
  name: 'Aura',
  tagline: 'Tu piel en su mejor luz.',
  description:
    'Skincare de lujo con fórmulas limpias y texturas que se desvanecen como cristal. Revela tu aura natural.',
  url: 'https://aura.stevemoya.me',
  email: 'hola@aura.skin',
  founded: 2021,

  nav: [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Productos', href: '#productos' },
    { label: 'Ritual', href: '#ritual' },
    { label: 'Opiniones', href: '#opiniones' },
  ] satisfies NavItem[],

  hero: {
    badge: 'Skincare de lujo · Fórmulas limpias',
    title: { start: 'Tu piel en su', accent: 'mejor luz' },
    subtitle:
      'Texturas ligeras, ingredientes activos y una luminosidad que se nota. Diseñado para revelar tu aura natural todos los días.',
    primaryCta: 'Descubrir productos',
    secondaryCta: 'Ver beneficios',
  },

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/aura.skin', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/auraskin', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@aura.skin', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@auraskin', icon: 'youtube' },
  ] satisfies Social[],

  newsletter: {
    title: 'Únete al ritual',
    subtitle: 'Consejos de piel, lanzamientos y 10% de bienvenida en tu primer pedido.',
    placeholder: 'tu@email.com',
    button: 'Suscribirme',
    success: '¡Bienvenida al ritual! Revisa tu correo para tu descuento. ✨',
  },

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;