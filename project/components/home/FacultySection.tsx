

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