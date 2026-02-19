'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { navItems, portfolio, services, testimonials } from './site-data';

const HeroThreeScene = dynamic(() => import('./HeroThreeScene'), {
  ssr: false,
  loading: () => <div className="h-[380px] w-full animate-pulse rounded-card bg-section md:h-[500px]" />
});

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
    });

    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.querySelector('.timeline-progress'),
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="bg-bg text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <nav className="container-shell section-padding flex h-20 items-center justify-between">
          <p className="text-xl font-semibold">ShikhaArti <span className="gradient-text">Graphics</span></p>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="transition hover:text-[#ff8c42]">{item}</a></li>
            ))}
          </ul>
          <button className="rounded-full bg-orangeGradient px-5 py-2.5 text-sm font-semibold text-white shadow-premium">Start Project</button>
        </nav>
      </header>

      <section id="home" className="section-padding relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,140,66,0.18),transparent_48%)]" />
        <div className="container-shell relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Design That Elevates Brands</h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-600">We create branding, UI/UX, packaging, social media creatives & digital experiences.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-orangeGradient px-7 py-3 font-medium text-white shadow-premium">View Portfolio</button>
              <button className="rounded-full border border-[#ff8c42] px-7 py-3 font-medium text-[#ff7f2e] transition hover:bg-[#fff1e8]">Get Quote</button>
            </div>
          </motion.div>
          <div className="fade-up">
            <HeroThreeScene />
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-section py-20">
        <div className="container-shell fade-up">
          <h2 className="text-3xl font-semibold md:text-4xl">Creative Services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="group rounded-card border border-transparent bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#ffbb8f] hover:glow-ring">
                <div className="mb-5 inline-flex rounded-full bg-orangeGradient p-3 text-white"><service.icon size={18} /></div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-padding py-20">
        <div className="container-shell fade-up">
          <h2 className="text-3xl font-semibold md:text-4xl">Featured Portfolio</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolio.map((src, index) => (
              <article key={src} className="group relative overflow-hidden rounded-card">
                <Image src={src} alt={`Portfolio ${index + 1}`} width={1200} height={800} className="h-[310px] w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ff8c42]/45 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-padding bg-section py-20">
        <div className="container-shell fade-up" ref={timelineRef}>
          <h2 className="text-3xl font-semibold md:text-4xl">Process</h2>
          <div className="mt-10">
            <div className="relative h-1 rounded-full bg-orange-100">
              <div className="timeline-progress absolute inset-y-0 left-0 rounded-full bg-orangeGradient" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-semibold text-neutral-600 md:grid-cols-4">
              {['Research', 'Strategy', 'Design', 'Launch'].map((step) => (
                <div key={step} className="rounded-2xl bg-white p-4 text-center shadow-soft">{step}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-20">
        <div className="container-shell fade-up">
          <h2 className="text-3xl font-semibold md:text-4xl">Testimonials</h2>
          <Swiper modules={[Autoplay]} slidesPerView={1} spaceBetween={20} loop autoplay={{ delay: 3200 }} breakpoints={{ 900: { slidesPerView: 2 } }} className="mt-10">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <article className="rounded-card bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-4">
                    <Image src={testimonial.img} alt={testimonial.name} width={54} height={54} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-[#ff8c42]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-neutral-600">“{testimonial.quote}”</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="contact" className="section-padding py-20">
        <div className="container-shell fade-up rounded-[32px] bg-[linear-gradient(135deg,rgba(255,106,0,0.08),rgba(255,179,71,0.18))] px-6 py-16 text-center md:px-16">
          <h2 className="text-4xl font-semibold">Let’s Build Something Powerful</h2>
          <button className="mt-8 rounded-full bg-orangeGradient px-8 py-3 font-semibold text-white shadow-premium">Start Your Project</button>
        </div>
      </section>

      <footer className="section-padding border-t border-neutral-200 py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} ShikhaArti Graphics</p>
          <div className="flex gap-5">
            {['Instagram', 'Behance', 'Dribbble', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="transition hover:text-[#ff8c42]">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
