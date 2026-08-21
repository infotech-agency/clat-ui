'use client';

import { useState, useEffect } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { Skeleton } from '@/components/ui/skeleton';
import { getPlacements } from '@/lib/api';
import type { Placement } from '@/lib/types';
import { GraduationCap } from 'lucide-react';

export default function PlacementsPage() {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("placements", placements);

  useEffect(() => {
    getPlacements()
      .then((p) => setPlacements(p.sort((a, b) => a.order - b.order)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHero
        kicker="Placements"
        title="Our Alumni & Success Stories"
        description="Every year our students secure seats at NLUs and top law colleges across India. Here are some of their journeys."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Placements' }]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl" />
              ))}
            </div>
          ) : placements.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-navy-50 p-12 text-center">
              <p className="text-muted-foreground">Alumni success stories will appear here once published.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {placements.map((p, i) => (
                <div key={p._id || i} className="card-accent card-accent-navy overflow-hidden text-center">
                  <div className="mt-2 flex flex-col items-center p-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy text-white font-heading font-bold text-xl overflow-hidden">
                      {p.studentImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.studentImage} alt={p.studentName} className="h-full w-full object-cover" />
                      ) : (
                        <span>{p.studentName.split(' ').map((n) => n[0]).join('')}</span>
                      )}
                    </div>
                    <h3 className="mt-3 font-heading font-semibold text-navy">{p.studentName}</h3>
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-orange/15 px-3 py-1 text-sm font-semibold text-orange-dark">
                      <GraduationCap className="h-3.5 w-3.5" /> {p.companyName}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
