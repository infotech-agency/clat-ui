'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { Skeleton } from '@/components/ui/skeleton';
import { getTiles } from '@/lib/api';
import type { CourseTile } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

/**
 * TilesSection
 * Standalone section that renders ONLY data coming from /api/tiles
 * (courseName, description, price, image). Uses the same design
 * tokens already present in the codebase (navy / orange-dark /
 * font-heading / card-accent) — no new colors, no extra fake fields.
 */
export function TilesSection() {
  const [tiles, setTiles] = useState<CourseTile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTiles()
      .then((t) => setTiles(t?.data))
      .catch(() => setTiles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Featured"
          title="Our Course Tiles"
          description="A quick look at the courses we're currently highlighting."
        />

        {loading ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-72 rounded-2xl" />
            ))}
          </div>
        ) : tiles.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
            <p className="text-muted-foreground">No tiles found right now.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiles?.map((tile, i) => (
              <Reveal key={tile._id ?? tile.courseName} delay={i * 60}>
                <Link
                  href="/courses"
                  className="card-accent group block h-full overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden bg-navy">
                    {tile.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={tile.image}
                        alt={tile.courseName}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                        <span className="font-heading text-2xl font-bold text-white/80">
                          {tile.courseName.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-navy group-hover:text-orange-dark transition-colors">
                      {tile.courseName}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                      {tile.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-heading font-bold text-lg text-navy">
                        ₹{Number(tile.price).toLocaleString('en-IN')}
                      </span>
                      {/* <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-dark">
                        View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span> */}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}