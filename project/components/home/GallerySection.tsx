import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import Image from 'next/image';

const GALLERY_IMAGES = [
  { src: '/gallery/class.webp', alt: 'Classroom session', span: 'row-span-2' },
  { src: '/gallery/doubt.webp', alt: 'Doubt clearing session', span: 'row-span-1' },
  { src: '/gallery/mock.webp', alt: 'Mock test hall', span: 'row-span-1' },
  { src: '/gallery/rewards.webp', alt: 'Student achievements', span: 'row-span-2' },
  { src: '/gallery/faculty.webp', alt: 'Faculty interaction', span: 'row-span-1' },
  { src: '/gallery/center.webp', alt: 'Centre campus', span: 'row-span-1' },
  { src: '/gallery/ceremony.jpg', alt: 'Award ceremony', span: 'row-span-2' },
];

export function GallerySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Gallery"
          title="Moments That Define Us"
          description="A glimpse into classrooms, achievements, and the journey of every CLAT aspirant with us."
        />

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 70}>
              <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={i % 3 === 0 ? 650 : 400}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-3 left-4 right-4 translate-y-2 font-heading text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}