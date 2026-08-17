export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

// mock: testimonios ficticios de clientes
export const testimonials: Testimonial[] = [
  {
    quote:
      'Mi piel pasó de opaca a luminosa en tres semanas. El Serum Glow se convirtió en mi ritual innegociable.',
    name: 'Camila Duarte',
    role: 'Cliente verificada',
    initials: 'CD',
  },
  {
    quote:
      'La textura de la Cremosa Hidratante es de otro nivel: se funde al instante y no deja nada de grasa.',
    name: 'Laura Méndez',
    role: 'Cliente verificada',
    initials: 'LM',
  },
  {
    quote:
      'Fórmulas limpias que de verdad funcionan. Mi piel sensible por fin encontró una rutina completa.',
    name: 'Sofía Herrera',
    role: 'Dermatóloga y clienta',
    initials: 'SH',
  },
];