import { Brush, Layers, LayoutGrid, Megaphone, Package, PenTool, Smartphone, Sparkles } from 'lucide-react';

export const navItems = ['Home', 'Services', 'Portfolio', 'Process', 'Contact'];

export const services = [
  { title: 'Brand Identity', icon: Sparkles, description: 'Strategic logos, identity systems, and tone for modern brands.' },
  { title: 'UI / UX Design', icon: LayoutGrid, description: 'Intuitive interfaces with premium experiences for web and mobile.' },
  { title: 'Packaging Design', icon: Package, description: 'Shelf-impact packaging that balances story, utility, and visuals.' },
  { title: 'Social Creatives', icon: Megaphone, description: 'Campaign-ready static and motion assets that improve engagement.' },
  { title: 'Illustrations', icon: Brush, description: 'Custom artwork crafted to add personality and distinction.' },
  { title: 'Design Systems', icon: Layers, description: 'Scalable component foundations for consistent product growth.' },
  { title: 'Mobile Experience', icon: Smartphone, description: 'High-conversion app flows optimized for clarity and retention.' },
  { title: 'Art Direction', icon: PenTool, description: 'Visual storytelling that keeps every touchpoint cohesive.' }
];

export const portfolio = [
  'https://images.unsplash.com/photo-1515378791036-0648a814c963?auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1300&q=80'
];

export const testimonials = [
  { name: 'Aarav Patel', role: 'Founder, Elevon Studio', quote: 'ShikhaArti Graphics transformed our brand into a refined, premium identity.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Meera Shah', role: 'Marketing Head, Nivra', quote: 'From concept to launch, every asset felt polished, strategic, and beautiful.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
  { name: 'Rohan Khanna', role: 'Product Lead, FluxPay', quote: 'Their UI and visuals gave us the exact premium feel we were targeting.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
];
