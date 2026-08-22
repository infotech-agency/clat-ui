// 'use client';

// import { useState, useEffect, useMemo } from 'react';
// import Link from 'next/link';
// import { PageHero } from '@/components/shared/PageHero';
// import { Skeleton } from '@/components/ui/skeleton';
// import { Input } from '@/components/ui/input';
// import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { getCourses } from '@/lib/api';
// import type { Course } from '@/lib/types';
// import { ArrowRight, MapPin, Clock, Search } from 'lucide-react';

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState('all');
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     getCourses()
//       .then(setCourses)
//       .catch(() => {})
//       .finally(() => setLoading(false));
//   }, []);

//   const filtered = useMemo(() => {
//     let list = courses;
//     if (filter !== 'all') {
//       list = list.filter((c) => c.mode === filter || c.targetClass === filter || c.batchType === filter);
//     }
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       list = list.filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
//     }
//     return list;
//   }, [courses, filter, search]);

//   return (
//     <>
//       <PageHero
//         kicker="Courses"
//         title="All Courses & Programmes"
//         description="Browse our full range of CLAT, AILET, and law entrance coaching programmes — online and offline, for Class 11, Class 12, and droppers."
//         breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Courses' }]}
//       />

//       <section className="bg-white py-16 md:py-24">
//         <div className="container mx-auto">
//           <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
//             <Tabs value={filter} onValueChange={setFilter}>
//               <TabsList className="bg-navy-50">
//                 <TabsTrigger value="all">All</TabsTrigger>
//                 <TabsTrigger value="offline">Offline</TabsTrigger>
//                 <TabsTrigger value="online">Online</TabsTrigger>
//                 <TabsTrigger value="Class 11">Class 11</TabsTrigger>
//                 <TabsTrigger value="Class 12">Class 12</TabsTrigger>
//                 <TabsTrigger value="Droppers">Droppers</TabsTrigger>
//                 <TabsTrigger value="weekend">Weekend</TabsTrigger>
//               </TabsList>
//             </Tabs>
//             <div className="relative w-full md:w-72">
//               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//               <Input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search courses..."
//                 className="pl-10"
//               />
//             </div>
//           </div>

//           {loading ? (
//             <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {[...Array(6)].map((_, i) => (
//                 <Skeleton key={i} className="h-72 rounded-2xl" />
//               ))}
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="mt-10 rounded-2xl border border-dashed border-border bg-navy-50 p-12 text-center">
//               <p className="text-muted-foreground">No courses match your search. Try a different filter or keyword.</p>
//             </div>
//           ) : (
//             <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {filtered.map((course) => (
//                 <Link key={course.slug} href={`/courses/${course.slug}`} className="card-accent group block overflow-hidden">
//                   <div className="relative h-44 overflow-hidden bg-navy">
//                     {course.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img src={course.image} alt={course.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
//                     ) : (
//                       <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
//                         <span className="font-heading text-2xl font-bold text-white/80">{course.name.charAt(0)}</span>
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 text-xs text-muted-foreground">
//                       {course.mode && (
//                         <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 font-medium capitalize">
//                           <MapPin className="h-3 w-3" /> {course.mode}
//                         </span>
//                       )}
//                       {course.duration && (
//                         <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-2.5 py-1 font-medium">
//                           <Clock className="h-3 w-3" /> {course.duration}
//                         </span>
//                       )}
//                     </div>
//                     <h3 className="mt-3 font-heading font-semibold text-navy group-hover:text-orange-dark transition-colors">{course.name}</h3>
//                     <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
//                     <div className="mt-4 flex items-center justify-between">
//                       <span className="font-heading font-bold text-lg text-navy">₹{course.price?.toLocaleString('en-IN')}</span>
//                       <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-dark">
//                         View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }


'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCourses } from '@/lib/api';
import type { Course } from '@/lib/types';
import { ArrowRight, MapPin, Clock, Search } from 'lucide-react';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = courses;
    if (filter !== 'all') {
      list = list.filter((c) => c.mode === filter || c.targetClass === filter || c.batchType === filter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
    }
    return list;
  }, [courses, filter, search]);

  return (
    <>
      <PageHero
        kicker="Courses"
        title="All Courses & Programmes"
        description="Browse our full range of CLAT, AILET, and law entrance coaching programmes — online and offline, for Class 11, Class 12, and droppers."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Courses' }]}
      />

      <section className="bg-white py-10 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Scrollable tabs on mobile */}
            <Tabs value={filter} onValueChange={setFilter} className="w-full md:w-auto">
              <TabsList className="flex w-full gap-1 overflow-x-auto bg-navy-50 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:w-auto">
                <TabsTrigger value="all" className="shrink-0">All</TabsTrigger>
                <TabsTrigger value="offline" className="shrink-0">Offline</TabsTrigger>
                <TabsTrigger value="online" className="shrink-0">Online</TabsTrigger>
                <TabsTrigger value="Class 11" className="shrink-0">Class 11</TabsTrigger>
                <TabsTrigger value="Class 12" className="shrink-0">Class 12</TabsTrigger>
                <TabsTrigger value="Droppers" className="shrink-0">Droppers</TabsTrigger>
                <TabsTrigger value="weekend" className="shrink-0">Weekend</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="pl-10"
              />
            </div>
          </div>

          {loading ? (
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl sm:h-72" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-border bg-navy-50 p-8 text-center sm:mt-10 sm:p-12">
              <p className="text-sm text-muted-foreground sm:text-base">
                No courses match your search. Try a different filter or keyword.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filtered.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="card-accent group block overflow-hidden"
                >
                  <div className="relative h-36 overflow-hidden bg-navy sm:h-44">
                    {course.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={course.image}
                        alt={course.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                        <span className="font-heading text-2xl font-bold text-white/80">
                          {course.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
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
                      {course.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-heading font-bold text-lg text-navy">
                        ₹{course.price?.toLocaleString('en-IN')}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-dark">
                        View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}