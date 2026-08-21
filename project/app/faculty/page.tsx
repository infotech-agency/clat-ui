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
