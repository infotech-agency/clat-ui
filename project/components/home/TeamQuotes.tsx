

// import Image from 'next/image';
// import { SectionHeading } from '@/components/shared/SectionHeading';
// import { Reveal } from '@/components/shared/Reveal';
// import { TEAM_QUOTES } from '@/lib/content';
// import { Quote } from 'lucide-react';

// export function TeamQuotes() {
//   return (
//     <section className="bg-white py-16 md:py-24">
//       <div className="container mx-auto">
//         <SectionHeading
//           kicker="What Our Team Says"
//           title="From the People Who Build CLAT Scholars"
//           description="Our academic and leadership team on what makes this institute different."
//         />

//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {TEAM_QUOTES.map((member, i) => (
//             <Reveal key={member.name} delay={i * 100}>
//               <div className="flex h-full flex-col rounded-2xl border border-border bg-navy-50 p-6">
//                 <Quote className="h-8 w-8 text-orange" />
//                 <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground italic">
//                   {member.quote}
//                 </p>
//                 <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
//                   <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-navy">
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       fill
//                       sizes="44px"
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="font-heading font-semibold text-navy text-sm">{member.name}</p>
//                     <p className="text-xs text-muted-foreground">{member.role}</p>
//                     <p className="text-xs text-orange-dark">{member.qualification}</p>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from 'next/image';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { TEAM_QUOTES } from '@/lib/content';
import { Quote } from 'lucide-react';

const HEXAGON_CLIP =
  'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

export function TeamQuotes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          kicker="What Our Team Says"
          title="From the People Who Build CLAT Scholars"
          description="Our academic and leadership team on what makes this institute different."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_QUOTES.map((member, i) => {
            const initials = member.name
              ? member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
              : 'TQ';

            return (
              <Reveal key={member.name} delay={i * 100}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-shadow hover:shadow-xl">
                  {/* Navy Header Block */}
                  <div className="relative rounded-3xl bg-navy px-6 pb-14 pt-6">
                    <div className="flex items-start gap-4">
                      {/* Photo poking down below the navy header */}
                      <div className="relative z-10 -mb-10 shrink-0">
                        {member.image ? (
                          <div className="relative h-32 w-28 overflow-hidden rounded-2xl shadow-lg">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              sizes="112px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-32 w-28 items-center justify-center rounded-2xl bg-navy-50">
                            <span className="font-heading text-2xl font-bold text-navy">
                              {initials}
                            </span>
                          </div>
                        )}
                        {/* Hexagon accent overlay */}
                        <div
                          className="absolute -bottom-3 -right-3 h-8 w-8 bg-orange"
                          style={{ clipPath: HEXAGON_CLIP }}
                        />
                      </div>

                      {/* Role & Name */}
                      <div className="pt-2">
                        {member.role && (
                          <p className="text-xs font-extrabold uppercase tracking-widest text-orange">
                            {member.role}
                          </p>
                        )}
                        <h3 className="mt-1 font-heading text-xl font-extrabold uppercase leading-tight text-white">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Block Overlapping Header */}
                  <div className="relative flex flex-1 flex-col rounded-t-[2rem] bg-white px-6 pb-6 pt-8">
                    {/* Qualification pill block */}
                    {member.qualification && (
                      <div className="mb-4 rounded-lg border-l-4 border-orange bg-slate-100 px-4 py-3">
                        <p className="font-heading text-sm font-extrabold uppercase tracking-wide text-navy">
                          {member.qualification}
                        </p>
                      </div>
                    )}

                    {/* Quote Text */}
                    <div className="relative mt-2 flex-1">
                      <Quote className="mb-2 h-6 w-6 text-orange/60" />
                      <p className="text-sm italic leading-relaxed text-slate-600">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}