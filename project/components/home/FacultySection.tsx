// // // import { SectionHeading } from '@/components/shared/SectionHeading';
// // // import { Reveal } from '@/components/shared/Reveal';
// // // import { FACULTY } from '@/lib/content';
// // // import { Scale } from 'lucide-react';

// // // export function FacultySection() {
// // //   return (
// // //     <section className="bg-navy-50 py-16 md:py-24">
// // //       <div className="container mx-auto">
// // //         <SectionHeading
// // //           kicker="Our Faculty"
// // //           title="Learn From Advocate-Faculty"
// // //           description="Our teachers are practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom."
// // //         />

// // //         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// // //           {FACULTY.map((member, i) => (
// // //             <Reveal key={member.name} delay={i * 70}>
// // //               <div className="card-accent card-accent-navy h-full p-6">
// // //                 <div className="mt-2 flex items-center gap-4">
// // //                   <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-orange font-heading font-bold text-xl">
// // //                     {member.name.split(' ').map((n) => n[0]).join('')}
// // //                   </div>
// // //                   <div>
// // //                     <div className="flex items-center gap-2">
// // //                       <h3 className="font-heading font-semibold text-navy">{member.name}</h3>
// // //                       <span className="inline-flex items-center gap-1 rounded-full bg-orange px-2 py-0.5 text-[10px] font-bold text-navy">
// // //                         <Scale className="h-2.5 w-2.5" /> {member.designation}
// // //                       </span>
// // //                     </div>
// // //                     <p className="text-sm text-orange-dark font-medium">{member.subject}</p>
// // //                   </div>
// // //                 </div>
// // //                 <ul className="mt-4 space-y-2">
// // //                   {member.credentials.map((cred) => (
// // //                     <li key={cred} className="flex items-start gap-2 text-sm text-muted-foreground">
// // //                       <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
// // //                       {cred}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </Reveal>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import { SectionHeading } from '@/components/shared/SectionHeading';
// // import { Reveal } from '@/components/shared/Reveal';
// // import { getFaculty } from '@/lib/api';
// // import { Scale } from 'lucide-react';

// // export async function FacultySection() {
// //   const faculty = await getFaculty();
// //   console.log("faculty", faculty)

// //   // Nothing to show yet (backend empty or briefly unreachable) — hide the section
// //   // rather than render an empty grid.
// //   if (!faculty || faculty.length === 0) return null;

// //   return (
// //     <section className="bg-navy-50 py-16 md:py-24">
// //       <div className="container mx-auto">
// //         <SectionHeading
// //           kicker="Our Faculty"
// //           title="Learn From Advocate-Faculty"
// //           description="Our teachers are practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom."
// //         />

// //         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //           {faculty.map((member, i) => {
// //             const initials = member.name
// //               .split(' ')
// //               .map((n) => n[0])
// //               .join('');
// //             const credentials = [member.qualification, member.experience].filter(
// //               (c): c is string => Boolean(c)
// //             );

// //             return (
// //               <Reveal key={member._id} delay={i * 70}>
// //                 <div className="card-accent card-accent-navy h-full p-6">
// //                   <div className="mt-2 flex items-center gap-4">
// //                     {member.image ? (
// //                       // eslint-disable-next-line @next/next/no-img-element
// //                       <img
// //                         src={member.image}
// //                         alt={member.name}
// //                         className="h-16 w-16 shrink-0 rounded-2xl object-cover"
// //                       />
// //                     ) : (
// //                       <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-orange font-heading font-bold text-xl">
// //                         {initials}
// //                       </div>
// //                     )}
// //                     <div>
// //                       <div className="flex items-center gap-2">
// //                         <h3 className="font-heading font-semibold text-navy">{member.name}</h3>
// //                         {member.designation && (
// //                           <span className="inline-flex items-center gap-1 rounded-full bg-orange px-2 py-0.5 text-[10px] font-bold text-navy">
// //                             <Scale className="h-2.5 w-2.5" /> {member.designation}
// //                           </span>
// //                         )}
// //                       </div>
// //                       {(member.subjects || member.department) && (
// //                         <p className="text-sm text-orange-dark font-medium">
// //                           {member.subjects || member.department}
// //                         </p>
// //                       )}
// //                     </div>
// //                   </div>

// //                   {credentials.length > 0 && (
// //                     <ul className="mt-4 space-y-2">
// //                       {credentials.map((cred) => (
// //                         <li key={cred} className="flex items-start gap-2 text-sm text-muted-foreground">
// //                           <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
// //                           {cred}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   )}
// //                 </div>
// //               </Reveal>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import { SectionHeading } from '@/components/shared/SectionHeading';
// import { Reveal } from '@/components/shared/Reveal';
// import { getFaculty } from '@/lib/api';
// import { Scale, Mail, Phone, Globe, Linkedin, Twitter } from 'lucide-react';

// export async function FacultySection() {
//   const faculty = await getFaculty();

//   // Return early if data is unavailable or empty
//   if (!faculty || faculty.length === 0) return null;

//   return (
//     <section className="bg-navy-50 py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           kicker="Our Faculty"
//           title="Learn From Advocate-Faculty"
//           description="Our teachers are practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom."
//         />

//         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {faculty.map((member, i) => {
//             const initials = member.name
//               ? member.name
//                   .split(' ')
//                   .map((n) => n[0])
//                   .join('')
//               : 'FC';

//             const credentials = [member.qualification, member.experience].filter(
//               (c): c is string => Boolean(c && c.trim() !== '')
//             );

//             const hasSocials =
//               member.socialLinks &&
//               Object.values(member.socialLinks).some((link) => Boolean(link));

//             return (
//               <Reveal key={member._id} delay={i * 70}>
//                 <div className="card-accent card-accent-navy flex h-full flex-col justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
//                   <div>
//                     {/* Header: Profile Image/Initials & Info */}
//                     <div className="flex items-start gap-4">
//                       {member.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={member.image}
//                           alt={member.name}
//                           className="h-16 w-16 shrink-0 rounded-2xl object-cover"
//                         />
//                       ) : (
//                         <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-orange font-heading font-bold text-xl">
//                           {initials}
//                         </div>
//                       )}

//                       <div className="flex-1">
//                         <div className="flex flex-wrap items-center gap-2">
//                           <h3 className="font-heading font-semibold text-navy text-lg">
//                             {member.name}
//                           </h3>
//                           {member.designation && (
//                             <span className="inline-flex items-center gap-1 rounded-full bg-orange/20 text-orange-dark px-2.5 py-0.5 text-[11px] font-bold">
//                               <Scale className="h-3 w-3" /> {member.designation}
//                             </span>
//                           )}
//                         </div>

//                         {(member.subjects || member.department) && (
//                           <p className="mt-1 text-sm font-medium text-orange-dark">
//                             {member.subjects || member.department}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* Bio Section */}
//                     {member.bio && (
//                       <p className="mt-4 text-sm text-slate-600 line-clamp-3">
//                         {member.bio}
//                       </p>
//                     )}

//                     {/* Qualifications & Experience */}
//                     {credentials.length > 0 && (
//                       <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
//                         {credentials.map((cred) => (
//                           <li
//                             key={cred}
//                             className="flex items-start gap-2 text-sm text-slate-500"
//                           >
//                             <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
//                             <span>{cred}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>

//                   {/* Footer: Contacts & Social Links */}
//                   {(member.email || member.phone || hasSocials) && (
//                     <div className="mt-6 border-t border-slate-100 pt-4 flex flex-wrap items-center justify-between gap-2 text-slate-400 text-xs">
//                       <div className="flex items-center gap-3">
//                         {member.email && (
//                           <a
//                             href={`mailto:${member.email}`}
//                             className="hover:text-navy transition-colors"
//                             title={member.email}
//                           >
//                             <Mail className="h-4 w-4" />
//                           </a>
//                         )}
//                         {member.phone && (
//                           <a
//                             href={`tel:${member.phone}`}
//                             className="hover:text-navy transition-colors"
//                             title={member.phone}
//                           >
//                             <Phone className="h-4 w-4" />
//                           </a>
//                         )}
//                       </div>

//                       {hasSocials && (
//                         <div className="flex items-center gap-2">
//                           {member.socialLinks?.linkedin && (
//                             <a
//                               href={member.socialLinks.linkedin}
//                               target="_blank"
//                               rel="noreferrer"
//                               className="hover:text-navy transition-colors"
//                             >
//                               <Linkedin className="h-4 w-4" />
//                             </a>
//                           )}
//                           {member.socialLinks?.twitter && (
//                             <a
//                               href={member.socialLinks.twitter}
//                               target="_blank"
//                               rel="noreferrer"
//                               className="hover:text-navy transition-colors"
//                             >
//                               <Twitter className="h-4 w-4" />
//                             </a>
//                           )}
//                           {member.socialLinks?.website && (
//                             <a
//                               href={member.socialLinks.website}
//                               target="_blank"
//                               rel="noreferrer"
//                               className="hover:text-navy transition-colors"
//                             >
//                               <Globe className="h-4 w-4" />
//                             </a>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { getFaculty } from '@/lib/api';
import { Mail, Phone, Globe, Linkedin, Twitter } from 'lucide-react';

const HEXAGON_CLIP =
  'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

export async function FacultySection() {
  const faculty = await getFaculty();

  if (!faculty || faculty.length === 0) return null;

  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          kicker="Our Faculty"
          title="Learn From Advocate-Faculty"
          description="Our teachers are practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((member, i) => {
            const initials = member.name
              ? member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
              : 'FC';

            const bullets = [member.qualification, member.experience].filter(
              (c): c is string => Boolean(c && c.trim() !== '')
            );

            const hasSocials =
              member.socialLinks &&
              Object.values(member.socialLinks).some((link) => Boolean(link));

            return (
              <Reveal key={member._id} delay={i * 70}>
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-md transition-shadow hover:shadow-xl">
                  {/* Navy header block */}
                  <div className="relative rounded-3xl bg-navy px-6 pb-14 pt-6">
                    <div className="flex items-start gap-4">
                      {/* Photo, poking down below the navy block */}
                      <div className="relative z-10 -mb-10 shrink-0">
                        {member.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-32 w-28 rounded-2xl object-cover shadow-lg"
                          />
                        ) : (
                          <div className="flex h-32 w-28 items-center justify-center rounded-2xl bg-navy-50">
                            <span className="font-heading text-2xl font-bold text-navy">
                              {initials}
                            </span>
                          </div>
                        )}
                        {/* Hexagon accent overlapping bottom-right of photo */}
                        <div
                          className="absolute -bottom-3 -right-3 h-8 w-8 bg-orange"
                          style={{ clipPath: HEXAGON_CLIP }}
                        />
                      </div>

                      {/* Designation + Name */}
                      <div className="pt-2">
                        {member.designation && (
                          <p className="text-xs font-extrabold uppercase tracking-widest text-orange">
                            {member.designation}
                          </p>
                        )}
                        <h3 className="mt-1 font-heading text-xl font-extrabold uppercase leading-tight text-white">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* White body, overlapping the navy block */}
                  <div className="relative rounded-t-[2rem] bg-white px-6 pb-6 pt-8">
                    {(member.subjects || member.department) && (
                      <div className="mb-5 rounded-lg border-l-4 border-orange bg-slate-100 px-4 py-3">
                        <p className="font-heading text-sm font-extrabold uppercase tracking-wide text-navy">
                          {member.subjects || member.department}
                        </p>
                      </div>
                    )}

                    {bullets.length > 0 && (
                      <ul className="space-y-3">
                        {bullets.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                            <span className="text-sm font-medium leading-snug text-navy">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {member.bio && (
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {member.bio}
                      </p>
                    )}

                    {(member.email || member.phone || hasSocials) && (
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-slate-400">
                        <div className="flex items-center gap-3">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="transition-colors hover:text-navy"
                              title={member.email}
                            >
                              <Mail className="h-4 w-4" />
                            </a>
                          )}
                          {member.phone && (
                            <a
                              href={`tel:${member.phone}`}
                              className="transition-colors hover:text-navy"
                              title={member.phone}
                            >
                              <Phone className="h-4 w-4" />
                            </a>
                          )}
                        </div>

                        {hasSocials && (
                          <div className="flex items-center gap-2">
                            {member.socialLinks?.linkedin && (
                              <a
                                href={member.socialLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-navy"
                              >
                                <Linkedin className="h-4 w-4" />
                              </a>
                            )}
                            {member.socialLinks?.twitter && (
                              <a
                                href={member.socialLinks.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-navy"
                              >
                                <Twitter className="h-4 w-4" />
                              </a>
                            )}
                            {member.socialLinks?.website && (
                              <a
                                href={member.socialLinks.website}
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-navy"
                              >
                                <Globe className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}
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