import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Reveal } from '@/components/shared/Reveal';
import { FACULTY } from '@/lib/content';
import { Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Faculty',
  description:
    'Meet the advocate-faculty of CLAT Scholars — practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom.',
  alternates: { canonical: 'https://www.clatscholars.com/faculty' },
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        kicker="Faculty"
        title="Meet Our Advocate-Faculty"
        description="Our teachers are practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Faculty' }]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACULTY.map((member, i) => (
              <Reveal key={member.name} delay={i * 70}>
                <div className="card-accent card-accent-navy h-full p-6">
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-orange font-heading font-bold text-xl">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-semibold text-navy">{member.name}</h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-orange px-2 py-0.5 text-[10px] font-bold text-navy">
                          <Scale className="h-2.5 w-2.5" /> {member.designation}
                        </span>
                      </div>
                      <p className="text-sm text-orange-dark font-medium">{member.subject}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {member.credentials.map((cred) => (
                      <li key={cred} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// import type { Metadata } from 'next';
// import Image from 'next/image';
// import { PageHero } from '@/components/shared/PageHero';
// import { Reveal } from '@/components/shared/Reveal';
// import { FACULTY } from '@/lib/content';
// import { Scale, Linkedin, Twitter, Globe } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'Our Faculty',
//   description:
//     'Meet the advocate-faculty of CLAT Scholars — practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom.',
//   alternates: {
//     canonical: 'https://www.clatscholars.com/faculty',
//   },
// };

// export default function FacultyPage() {
//   return (
//     <>
//       <PageHero
//         kicker="Faculty"
//         title="Meet Our Advocate-Faculty"
//         description="Our teachers are practising advocates and seasoned CLAT mentors who bring real legal reasoning into every classroom."
//         breadcrumbs={[
//           { label: 'Home', href: '/' },
//           { label: 'Faculty' },
//         ]}
//       />

//       <section className="bg-white py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {FACULTY.map((member, i) => (
//               <Reveal key={member.name} delay={i * 70}>
//                 <div className="card-accent card-accent-navy h-full overflow-hidden rounded-2xl bg-white shadow-sm">
                  
//                   {/* Faculty Image */}
//                   <div className="relative h-72 w-full overflow-hidden bg-slate-100">
//                     {member.image ? (
//                       <Image
//                         src={member.image}
//                         alt={member.name}
//                         fill
//                         className="object-cover object-top transition-transform duration-500 hover:scale-105"
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />
//                     ) : (
//                       <div className="flex h-full w-full items-center justify-center bg-navy text-4xl font-heading font-bold text-orange">
//                         {member.name
//                           .split(' ')
//                           .map((n) => n[0])
//                           .join('')}
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     {/* Name + Designation */}
//                     <div className="flex items-start justify-between gap-3">
//                       <div className="min-w-0">
//                         <h3 className="font-heading text-xl font-semibold leading-tight text-navy">
//                           {member.name}
//                         </h3>

//                         <p className="mt-1 text-sm font-medium text-orange-dark">
//                           {member.subjects || member.subject}
//                         </p>
//                       </div>

//                       {member.designation && (
//                         <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold text-navy">
//                           <Scale className="h-3 w-3" />
//                           {member.designation}
//                         </span>
//                       )}
//                     </div>

//                     {/* Qualification */}
//                     {member.qualification && (
//                       <div className="mt-5">
//                         <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
//                           Qualification
//                         </p>

//                         <p className="mt-1 text-sm leading-6 text-muted-foreground">
//                           {member.qualification}
//                         </p>
//                       </div>
//                     )}

//                     {/* Experience */}
//                     {member.experience && (
//                       <div className="mt-3">
//                         <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
//                           Experience
//                         </p>

//                         <p className="mt-1 text-sm leading-6 text-muted-foreground">
//                           {member.experience}
//                         </p>
//                       </div>
//                     )}

//                     {/* Bio */}
//                     {member.bio && (
//                       <div className="mt-4 border-t border-slate-100 pt-4">
//                         <p className="text-sm leading-6 text-muted-foreground">
//                           {member.bio}
//                         </p>
//                       </div>
//                     )}

//                     {/* Credentials */}
//                     {member.credentials?.length > 0 && (
//                       <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
//                         {member.credentials.map((cred) => (
//                           <li
//                             key={cred}
//                             className="flex items-start gap-2 text-sm text-muted-foreground"
//                           >
//                             <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
//                             <span>{cred}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}

//                     {/* Social Links */}
//                     {(member.socialLinks?.linkedin ||
//                       member.socialLinks?.twitter ||
//                       member.socialLinks?.website) && (
//                       <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
//                         {member.socialLinks.linkedin && (
//                           <a
//                             href={member.socialLinks.linkedin}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label={`${member.name} LinkedIn`}
//                             className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-navy transition-colors hover:bg-orange"
//                           >
//                             <Linkedin className="h-4 w-4" />
//                           </a>
//                         )}

//                         {member.socialLinks.twitter && (
//                           <a
//                             href={member.socialLinks.twitter}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label={`${member.name} Twitter`}
//                             className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-navy transition-colors hover:bg-orange"
//                           >
//                             <Twitter className="h-4 w-4" />
//                           </a>
//                         )}

//                         {member.socialLinks.website && (
//                           <a
//                             href={member.socialLinks.website}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label={`${member.name} Website`}
//                             className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-navy transition-colors hover:bg-orange"
//                           >
//                             <Globe className="h-4 w-4" />
//                           </a>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }