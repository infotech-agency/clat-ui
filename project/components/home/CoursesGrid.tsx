'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getTiles, getCourses } from '@/lib/api';
import type { CourseTile, Course } from '@/lib/types';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CoursesGrid() {
  const [tiles, setTiles] = useState<CourseTile[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  console.log("tiles", tiles)

  useEffect(() => {
    Promise.all([getTiles().catch(() => []), getCourses().catch(() => [])])
      .then(([t, c]) => {
        setTiles(t);
        setCourses(c);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const source: { courseName: string; description: string; price: number; image?: string; slug?: string; mode?: string; targetClass?: string; duration?: string }[] =
    tiles.length > 0
      ? tiles.map((t) => {
          const match = courses.find((c) => c.name === t.courseName);
          return {
            courseName: t.courseName,
            description: t.description,
            price: t.price,
            image: t.image,
            slug: match?.slug,
            mode: match?.mode,
            targetClass: match?.targetClass,
            duration: match?.duration,
          };
        })
      : courses.filter((c) => c.featured).map((c) => ({
          courseName: c.name,
          description: c.description,
          price: c.price,
          image: c.image,
          slug: c.slug,
          mode: c.mode,
          targetClass: c.targetClass,
          duration: c.duration,
        }));

  const filtered = filter === 'all'
    ? source
    : source.filter((c) => c.mode === filter || c.targetClass === filter);

  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Courses & Programmes"
          title="Find the Right Course for You"
          description="From foundation batches for Class 11 to intensive dropper programmes, choose the course that fits your stage and schedule."
        />

        {/* <div className="mt-8 flex justify-center">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="bg-white">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="offline">Offline</TabsTrigger>
              <TabsTrigger value="online">Online</TabsTrigger>
              <TabsTrigger value="Class 11">Class 11</TabsTrigger>
              <TabsTrigger value="Class 12">Class 12</TabsTrigger>
              <TabsTrigger value="Droppers">Droppers</TabsTrigger>
            </TabsList>
          </Tabs>
        </div> */}
        <div className="mt-8 flex justify-center overflow-x-auto px-4 pb-2 sm:overflow-visible sm:px-0">
  <Tabs value={filter} onValueChange={setFilter}>
    <TabsList className="bg-white flex-nowrap sm:flex-wrap">
      <TabsTrigger value="all">All</TabsTrigger>
      <TabsTrigger value="offline">Offline</TabsTrigger>
      <TabsTrigger value="online">Online</TabsTrigger>
      <TabsTrigger value="Class 11">Class 11</TabsTrigger>
      <TabsTrigger value="Class 12">Class 12</TabsTrigger>
      <TabsTrigger value="Droppers">Droppers</TabsTrigger>
    </TabsList>
  </Tabs>
</div>

        {loading ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-72 rounded-2xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
            <p className="text-muted-foreground">No courses found for this filter. Try another tab.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, i) => (
              <Reveal key={course.courseName} delay={i * 60}>
                <Link
                  href={course.slug ? `/courses/${course.slug}` : '/courses'}
                  className="card-accent group block h-full overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden bg-navy">
                    {course.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={course.image}
                        alt={course.courseName}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                        <span className="font-heading text-2xl font-bold text-white/80">
                          {course.courseName.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {course.mode && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 font-medium capitalize">
                          <MapPin className="h-3 w-3" /> {course.mode}
                        </span>
                      )}
                      {course.duration && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 font-medium">
                          <Clock className="h-3 w-3" /> {course.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-heading font-semibold text-navy group-hover:text-orange-dark transition-colors">
                      {course.courseName}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-heading font-bold text-lg text-navy">
                        ₹{course.price?.toLocaleString('en-IN')}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-dark">
                        View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/courses" className="btn-navy inline-flex">
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
