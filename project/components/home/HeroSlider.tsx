// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight, GraduationCap, Award, MapPin } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const SLIDES = [
//   {
//     eyebrow: 'CLAT Scholars',
//     title: 'Your Gateway to India\u2019s Top Law Schools',
//     subtitle:
//       'Personal mentorship, advocate faculty, and small batches across Noida, Indirapuram & Delhi. Crack CLAT & AILET with confidence.',
//     ctaPrimary: { label: 'Explore Courses', href: '/courses' },
//     ctaSecondary: { label: 'Book Free Demo', href: '/admission' },
//     badge: '3 Centres in Delhi NCR',
//     icon: MapPin,
//   },
//   {
//     eyebrow: 'Scholars Challenge',
//     title: 'Win Up to 100% Scholarship',
//     subtitle:
//       'Take the Scholars Challenge entrance test and earn merit-based fee waivers on our flagship CLAT batches. Next test dates open now.',
//     ctaPrimary: { label: 'Register Now', href: '/admission' },
//     ctaSecondary: { label: 'View Courses', href: '/courses' },
//     badge: 'Merit Scholarships',
//     icon: Award,
//   },
//   {
//     eyebrow: 'Blossom Test Series',
//     title: '80 Full-Length Mocks with National Ranking',
//     subtitle:
//       'Practice with exam-grade mocks, detailed video solutions, and one-on-one performance reviews. Available as standalone packages.',
//     ctaPrimary: { label: 'View Test Series', href: '/test-series' },
//     ctaSecondary: { label: 'Talk to Us', href: '/contact' },
//     badge: '200+ Sectional Tests',
//     icon: GraduationCap,
//   },
// ];

// export function HeroSlider() {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((prev) => (prev + 1) % SLIDES.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const next = () => setActive((prev) => (prev + 1) % SLIDES.length);
//   const prev = () => setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

//   return (
//     <section className="relative overflow-hidden bg-navy">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
//         <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
//         <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
//         <div className="absolute right-10 top-1/2 hidden h-96 w-96 -translate-y-1/2 opacity-10 lg:block">
//           <GraduationCap className="h-full w-full text-white" />
//         </div>
//       </div>

//       <div className="container relative mx-auto px-4 py-16 md:py-28 lg:py-32">
//         <div className="mx-auto max-w-3xl text-center">
//           {SLIDES.map((slide, i) => (
//             <div
//               key={i}
//               className={cn(
//                 'transition-all duration-700',
//                 i === active ? 'opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'
//               )}
//             >
//               <span className="inline-block rounded-full bg-orange/15 px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-[0.18em] text-orange-light">
//                 {slide.eyebrow}
//               </span>
//               <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white text-balance md:text-5xl lg:text-6xl">
//                 {slide.title}
//               </h1>
//               <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
//                 {slide.subtitle}
//               </p>
//               <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
//                 <Link href={slide.ctaPrimary.href} className="btn-orange w-full sm:w-auto">
//                   {slide.ctaPrimary.label}
//                 </Link>
//                 <Link
//                   href={slide.ctaSecondary.href}
//                   className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 font-heading font-semibold text-white transition-all hover:border-orange hover:bg-orange hover:text-navy w-full sm:w-auto"
//                 >
//                   {slide.ctaSecondary.label}
//                 </Link>
//               </div>
//               <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
//                 <slide.icon className="h-4 w-4 text-orange" />
//                 {slide.badge}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 flex items-center justify-center gap-3">
//           <button
//             onClick={prev}
//             aria-label="Previous slide"
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-orange hover:text-navy hover:border-orange"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <div className="flex items-center gap-2">
//             {SLIDES.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 aria-label={`Go to slide ${i + 1}`}
//                 className={cn(
//                   'h-2 rounded-full transition-all',
//                   i === active ? 'w-8 bg-orange' : 'w-2 bg-white/40'
//                 )}
//               />
//             ))}
//           </div>
//           <button
//             onClick={next}
//             aria-label="Next slide"
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-orange hover:text-navy hover:border-orange"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, GraduationCap, Award, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const SLIDES = [
  {
    docket: 'NOTICE NO. 01/2026',
    title: 'Your Gateway to India\u2019s Top Law Schools',
    subtitle:
      'Personal mentorship, advocate faculty, and small batches across Noida, Indirapuram & Delhi. Crack CLAT & AILET with confidence.',
    ctaPrimary: { label: 'Explore Courses', href: '/courses' },
    ctaSecondary: { label: 'Book Free Demo', href: '/admission' },
    badge: '3 Centres in Delhi NCR',
    icon: MapPin,
  },
  {
    docket: 'NOTICE NO. 02/2026',
    title: 'Win Up to 100% Scholarship',
    subtitle:
      'Take the Scholars Challenge entrance test and earn merit-based fee waivers on our flagship CLAT batches. Next test dates open now.',
    ctaPrimary: { label: 'Register Now', href: '/admission' },
    ctaSecondary: { label: 'View Courses', href: '/courses' },
    badge: 'Merit Scholarships',
    icon: Award,
  },
  {
    docket: 'NOTICE NO. 03/2026',
    title: '80 Full-Length Mocks with National Ranking',
    subtitle:
      'Practice with exam-grade mocks, detailed video solutions, and one-on-one performance reviews. Available as standalone packages.',
    ctaPrimary: { label: 'View Test Series', href: '/test-series' },
    ctaSecondary: { label: 'Talk to Us', href: '/contact' },
    badge: '200+ Sectional Tests',
    icon: GraduationCap,
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative overflow-hidden bg-navy">
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heroSway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .hero-float-a { animation: heroFloat 5s ease-in-out infinite; }
        .hero-float-b { animation: heroFloat 5.5s ease-in-out infinite; animation-delay: 1.4s; }
        .hero-scale-sway { transform-origin: 220px 210px; animation: heroSway 4.5s ease-in-out infinite; }
        .hero-progress { animation: heroProgress 6s linear; }
        @media (prefers-reduced-motion: reduce) {
          .hero-float-a, .hero-float-b, .hero-scale-sway, .hero-progress { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
        {/* faint courthouse columns, barely-there texture */}
        <div className="absolute inset-y-0 right-[8%] hidden lg:block">
          <div className="flex h-full items-end gap-10 pb-10 opacity-[0.06]">
            <div className="h-3/5 w-4 rounded-full bg-white" />
            <div className="h-4/5 w-4 rounded-full bg-white" />
            <div className="h-2/3 w-4 rounded-full bg-white" />
          </div>
        </div>
      </div>

      <div className="container relative mx-auto grid gap-16 px-4 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        {/* Left: copy */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={cn(
                'transition-all duration-700',
                i === active ? 'opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'
              )}
            >
              <div className="inline-flex items-baseline gap-2 border-b border-orange/40 pb-1.5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-orange-light">
                <span className="text-orange">\u00a7</span>
                {slide.docket}
              </div>
              <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/75 md:text-lg lg:mx-0">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link href={slide.ctaPrimary.href} className="btn-orange w-full sm:w-auto">
                  {slide.ctaPrimary.label}
                </Link>
                <Link
                  href={slide.ctaSecondary.href}
                  className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 font-heading font-semibold text-white transition-all hover:border-orange hover:bg-orange hover:text-navy sm:w-auto"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">
                <slide.icon className="h-4 w-4 text-orange" />
                {slide.badge}
              </div>
            </div>
          ))}

          {/* slide controls */}
          <div className="relative mt-10 flex items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-orange hover:bg-orange hover:text-navy"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    'h-1.5 overflow-hidden rounded-full bg-white/20 transition-all',
                    i === active ? 'w-10' : 'w-2 bg-white/30'
                  )}
                >
                  {i === active && <span key={active} className="hero-progress block h-full bg-orange" />}
                </button>
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-orange hover:bg-orange hover:text-navy"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
         <Image src={`/law.png`} height={500} width={500} alt='law'/>

          <div className="hero-float-a absolute left-0 top-4 flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-md">
            <GraduationCap className="h-5 w-5 text-orange" />
            <div>
              <p className="font-heading text-sm font-bold leading-none text-white">2000+</p>
              <p className="mt-1 text-[11px] leading-none text-white/60">NLU Admits</p>
            </div>
          </div>

          <div className="hero-float-b absolute bottom-6 right-0 flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-md">
            <Award className="h-5 w-5 text-orange" />
            <div>
              <p className="font-heading text-sm font-bold leading-none text-white">98.2</p>
              <p className="mt-1 text-[11px] leading-none text-white/60">Avg. Percentile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}