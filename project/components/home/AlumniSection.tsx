// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { SectionHeading } from '@/components/shared/SectionHeading';
// import { Skeleton } from '@/components/ui/skeleton';
// import { getPlacements } from '@/lib/api';
// import type { Placement } from '@/lib/types';
// import { ArrowRight, GraduationCap } from 'lucide-react';

// export function AlumniSection() {
//   const [placements, setPlacements] = useState<Placement[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getPlacements()
//       .then((p) => setPlacements(p.sort((a, b) => a.order - b.order)))
//       .catch(() => {})
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <section className="bg-navy-50 py-16 md:py-24">
//       <div className="container mx-auto">
//         <SectionHeading
//           kicker="Our Alumni"
//           title="Success Stories That Inspire"
//           description="Every year our students secure seats at NLUs and top law colleges across India. Here are some of their journeys."
//         />

//         {loading ? (
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {[...Array(4)].map((_, i) => (
//               <Skeleton key={i} className="h-64 rounded-2xl" />
//             ))}
//           </div>
//         ) : placements.length === 0 ? (
//           <div className="mt-12 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
//             <p className="text-muted-foreground">Alumni success stories will appear here once published.</p>
//           </div>
//         ) : (
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {placements.slice(0, 8).map((p, i) => (
//               <div key={p._id || i} className="card-accent card-accent-navy overflow-hidden text-center">
//                 <div className="mt-2 flex flex-col items-center p-6">
//                   <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy text-white font-heading font-bold text-xl overflow-hidden">
//                     {p.studentImage ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img src={p.studentImage} alt={p.studentName} className="h-full w-full object-cover" />
//                     ) : (
//                       <span>{p.studentName.split(' ').map((n) => n[0]).join('')}</span>
//                     )}
//                   </div>
//                   <h3 className="mt-3 font-heading font-semibold text-navy">{p.studentName}</h3>
//                   <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-orange/15 px-3 py-1 text-sm font-semibold text-orange-dark">
//                     <GraduationCap className="h-3.5 w-3.5" />
//                     {p.companyName}
//                   </div>
//                   <p className="mt-1.5 text-sm text-muted-foreground">{p.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-10 text-center">
//           <Link href="/placements" className="btn-navy inline-flex">
//             View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { SectionHeading } from '@/components/shared/SectionHeading';
// import { Skeleton } from '@/components/ui/skeleton';
// import { getPlacements } from '@/lib/api';
// import type { Placement } from '@/lib/types';
// import { ArrowRight, GraduationCap } from 'lucide-react';

// export function AlumniSection() {
//   const [placements, setPlacements] = useState<Placement[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getPlacements()
//       .then((p) => setPlacements(p.sort((a, b) => a.order - b.order)))
//       .catch(() => {})
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <section className="bg-navy-50 py-16 md:py-24">
//       <div className="container mx-auto">
//         <SectionHeading
//           kicker="Our Alumni"
//           title="Success Stories That Inspire"
//           description="Every year our students go on to build careers at top companies. Here are some of their journeys."
//         />

//         {loading ? (
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {[...Array(3)].map((_, i) => (
//               <Skeleton key={i} className="h-96 rounded-2xl" />
//             ))}
//           </div>
//         ) : placements.length === 0 ? (
//           <div className="mt-12 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
//             <p className="text-muted-foreground">Alumni success stories will appear here once published.</p>
//           </div>
//         ) : (
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {placements.slice(0, 9).map((p, i) => (
//               <div
//                 key={p._id || i}
//                 className="card-accent overflow-hidden bg-white p-6 flex flex-col"
//               >
//                 {/* Student info */}
//                 <div className="flex items-center gap-3">
//                   <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-navy text-white font-heading font-bold flex items-center justify-center">
//                     {p.studentImage ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img src={p.studentImage} alt={p.studentName} className="h-full w-full object-cover" />
//                     ) : (
//                       <span>{p.studentName.split(' ').map((n) => n[0]).join('')}</span>
//                     )}
//                   </div>
//                   <div>
//                     <h3 className="font-heading font-semibold text-navy leading-tight">{p.studentName}</h3>
//                     <p className="text-sm text-muted-foreground">CLAT Scholar Student</p>
//                   </div>
//                 </div>

//                 {/* Company logo */}
//                 <div className="mt-6 flex flex-1 flex-col items-center justify-center py-4">
//                   {p.companyLogo ? (
//                     // eslint-disable-next-line @next/next/no-img-element
//                     <img
//                       src={p.companyLogo}
//                       alt={p.companyName}
//                       className="h-16 w-auto max-w-[70%] object-contain"
//                     />
//                   ) : (
//                     <span className="font-heading text-3xl font-extrabold text-navy">
//                       {p.companyName}
//                     </span>
//                   )}
//                   <span className="mt-2 text-sm font-medium text-muted-foreground">
//                     {p.companyName}
//                   </span>
//                 </div>

//                 {/* Selection banner */}
//                 <div className="relative mt-2 flex items-center justify-between overflow-hidden rounded-xl bg-navy-50 py-3 pl-6 pr-3">
//                   <span className="absolute left-0 top-0 h-full w-1.5 bg-orange-dark" />
//                   <span className="absolute left-1.5 top-0 h-full w-1.5 bg-navy" />
//                   <div>
//                     <p className="text-xs text-muted-foreground">Selected as a</p>
//                     {p.role && (
//                       <p className="font-heading text-base font-extrabold italic uppercase text-navy">
//                         {p.role}
//                       </p>
//                     )}
//                   </div>
//                   <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-navy/20 bg-white px-2.5 py-1.5">
//                     <GraduationCap className="h-4 w-4 text-navy" />
//                     <span className="text-[10px] font-heading font-bold leading-tight text-navy">
//                       CLAT<br />SCHOLAR
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-10 text-center">
//           <Link href="/placements" className="btn-navy inline-flex">
//             View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Skeleton } from '@/components/ui/skeleton';
import { getPlacements } from '@/lib/api';
import type { Placement } from '@/lib/types';
import { ArrowRight, GraduationCap, Trophy } from 'lucide-react';

export function AlumniSection() {
  const [placements, setPlacements] = useState<Placement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlacements()
      .then((p) => setPlacements(p.sort((a, b) => a.order - b.order)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Our Alumni"
          title="Success Stories That Inspire"
          description="Every year our students go on to build careers at top companies. Here are some of their journeys."
        />

        {loading ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-[28rem] rounded-2xl" />
            ))}
          </div>
        ) : placements.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
            <p className="text-muted-foreground">Alumni success stories will appear here once published.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placements.slice(0, 9).map((p, i) => {
              const initials = p.studentName
                ? p.studentName.split(' ').map((n) => n[0]).join('')
                : 'CS';

              return (
                <div
                  key={p._id || i}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  {/* Big student photo, hero style */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
                    {p.studentImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.studentImage}
                        alt={p.studentName}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-navy">
                        <span className="font-heading text-5xl font-bold text-orange">
                          {initials}
                        </span>
                      </div>
                    )}

                    {/* Gradient + name overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        CLAT Scholar Student
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-extrabold text-white drop-shadow-sm">
                        {p.studentName}
                      </h3>
                      {p.companyName && (
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-orange">
                          <GraduationCap className="h-4 w-4" />
                          {p.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Achievement highlight */}
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <div className="relative flex items-start gap-3 overflow-hidden rounded-xl border border-orange/20 bg-orange/5 p-4">
                      <span className="absolute left-0 top-0 h-full w-1 bg-orange" />
                      <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-orange-dark">
                          Course &amp; Achievement
                        </p>
                        {p.role && (
                          <p className="mt-1 font-heading text-base font-bold leading-snug text-navy">
                            {p.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/placements" className="btn-navy inline-flex">
            View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}