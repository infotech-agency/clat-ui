import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import Image from 'next/image';

const GALLERY_IMAGES = [
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkhb8TJF2XI4ixent9E1UtGxJvz0VpJIDQcIoswmE17daTCAgp82lkFK3qekCXwwuKNVdnMqXPzZCj-to-6hLGId09Ss5_zDsglfs3kICdqdcHL-S_vTp7JBlP6P1a4ZHupftmntF0MXeHR=s1360-w1360-h1020-rw', alt: 'Classroom session', span: 'row-span-2' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkquTTIdcYV00Go4gJCGLiEErRUwR54ds5vPyvt7yj6JFksEBTluAeF1GLKOjRfTJ8eihUwq5JuLL5qjwV13amce68ytWTYyucCEVrhaJAOdz3MioDk-aaAJaV5usjZhRE3y8YsbTKtGbwh=s1360-w1360-h1020-rw', alt: 'Doubt clearing session', span: 'row-span-1' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJnIwWb6uTCTd_mwjfZRqjJMXbdpp52gdc8wz4PpH5U0K384UuEf69srNEe2SVyTWIq2HI9wYnN29ubk1j918NF7Ila2C4_hAKwpI_BksHDl3dVNkqt4ZDOZT_8ARjXGI64kOcrgT1-9E7=s1360-w1360-h1020-rw', alt: 'Mock test hall', span: 'row-span-1' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6R2Vj6H0g9ZFe7Y0qqy2f2E8QiQXPatbZcnanoBO_pbcy5tHWdJ_kOe9q62a-7q3ULLGrNiCEHlICpn4MZcwPnY9hzt_6NOlmY1-fclNquEzC54t8ITIyNMB6srw0ZH7KD1Nb7bM6zh5S=s1360-w1360-h1020-rw', alt: 'Student achievements', span: 'row-span-2' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmlGwwgLbIlcxStvs3UH0Pc9Wq1zVwbhRBgSzSKHEB-zBjykQwF_W2N-euQzVhOvpxhe3PKWOM4txsXIblfmQ0Oy_mHOGYGxCk3POjfOhgmUjvf8GQJwtHO0iNHM5Nuwo2Ruo7snxec9AA=s1360-w1360-h1020-rw', alt: 'Faculty interaction', span: 'row-span-1' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkgOAPm1wGcR9RRwl0CQblJBi79tuUAz6apA86fxCbvIMNHwbXmbCEHTysY0nKievLlUz7v2n9YPIqaNy-49y6q9NJwq2bWXSpDFM7e92kIfR0TO4lm87jKcLUPIkyv1gpxeGIlqqje_pc_=s1360-w1360-h1020-rw', alt: 'Centre campus', span: 'row-span-1' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkuiuyC7AkFzA-exs4XU4pJRXldgopyF_77GXHC4DcYaT2x1AEYHrWfQ4viQCpVGGo81eZXtRyHSiQOMesAQ7JynuJEJOFX1FtPqVCpN1D3bxhZDO5Xzvp0N_TQtlayR1mWPM_kyraZQ9y_=s1360-w1360-h1020-rw', alt: 'Award ceremony', span: 'row-span-2' },
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
                <Image
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