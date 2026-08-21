'use client';

import { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Skeleton } from '@/components/ui/skeleton';
import { getTestimonials } from '@/lib/api';
import type { Testimonial } from '@/lib/types';
import { Play, Quote } from 'lucide-react';

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return m ? m[1] : null;
}

export function VideoTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    getTestimonials()
      .then(setTestimonials)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-navy py-16 md:py-24">
      {/* <div className="container mx-auto">
        <SectionHeading
          kicker="Video Testimonials"
          title="Hear From Our Students"
          description="Real students, real results. Watch our alumni share how CLAT Scholars helped them crack the exam and reach their dream NLU."
          light
        />

        {loading ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-72 rounded-2xl bg-white/10" />
            ))}
          </div>
        ) : testimonials.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-12 text-center">
            <p className="text-white/60">Testimonials will appear here once published.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials?.map((t) => {
              const ytId = youtubeId(t.youtubeUrl);
              const thumb = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null;
              const isPlaying = playing === t.youtubeUrl;
              return (
                <div key={t._id || t.youtubeUrl} className="overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                  <div className="relative aspect-video bg-navy-800">
                    {isPlaying && ytId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
                        title={t.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    ) : (
                      <button
                        onClick={() => setPlaying(t.youtubeUrl)}
                        className="group relative h-full w-full"
                        aria-label={`Play testimonial: ${t.title}`}
                      >
                        {thumb ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={thumb} alt={t.title} className="h-full w-full object-cover opacity-80" />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-br from-navy-light to-navy" />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-navy/30 transition-colors group-hover:bg-navy/20">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-navy shadow-lg transition-transform group-hover:scale-110">
                            <Play className="h-6 w-6 fill-navy" />
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="p-5">
                    <Quote className="h-6 w-6 text-orange" />
                    <h3 className="mt-2 font-heading font-semibold text-white">{t.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{t.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div> */}
    </section>
  );
}
