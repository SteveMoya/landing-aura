export interface Product {
  name: string;
  tagline: string;
  price: string;
  size: string;
  tone: 'rose' | 'lilac' | 'peach' | 'mint';
  image: string;
  featured?: boolean;
}

// mock: productos de skincare ficticios
export const products: Product[] = [
  {
    name: 'Serum Glow',
    tagline: 'Vitamina C + niacinamida para una luz inmediata',
    price: '$48',
    size: '30 ml',
    tone: 'peach',
    image: '/product-skincare.jpg',
    featured: true,
  },
  {
    name: 'Cremosa Hidratante',
    tagline: 'Ácido hialurónico + escualano · textura nube',
    price: '$42',
    size: '50 ml',
    tone: 'rose',
    image: '/product-skincare.jpg',
  },
  {
    name: 'Limpiador de Espuma',
    tagline: 'Gel cremoso que respeta la barrera cutánea',
    price: '$26',
    size: '150 ml',
    tone: 'mint',
    image: '/product-skincare.jpg',
  },
  {
    name: 'Protector Solar Invisible',
    tagline: 'SPF 50+ con acabado aterciopelado, sin manchas blancas',
    price: '$34',
    size: '40 ml',
    tone: 'lilac',
    image: '/product-skincare.jpg',
  },
];