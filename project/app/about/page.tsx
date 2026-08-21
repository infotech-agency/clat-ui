import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { AboutSection } from '@/components/home/AboutSection';
import { FacultySection } from '@/components/home/FacultySection';
import { TeamQuotes } from '@/components/home/TeamQuotes';
import { CentresSection } from '@/components/home/CentresSection';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { WHO_WE_ARE_FEATURES, KEY_STRENGTHS, SUBJECTS_OFFERED } from '@/lib/content';
import * as Icons from 'lucide-react';
import { Check, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'CLAT Scholars is a Pravmis Edu initiative offering expert CLAT, AILET & law entrance coaching with personal mentorship, advocate faculty, and small batches across Noida, Indirapuram & Delhi.',
  alternates: { canonical: 'https://www.clatscholars.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="Building India\u2019s Next Generation of Legal Minds"
        description="A Pravmis Edu initiative, CLAT Scholars was founded on the belief that every aspirant deserves personal attention, expert teaching, and a structured path to their dream NLU."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Our Story"
              title="Who We Are"
              align="left"
            />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                CLAT Scholars began with a simple observation — most CLAT
                coaching institutes operate like factories, packing hundreds of
                students into a batch and hoping a few make it through. We
                believed there was a better way.
              </p>
              <p>
                As a Pravmis Edu initiative, we built CLAT Scholars around three
                pillars: advocate-led teaching that brings real legal reasoning
                into the classroom, a structured curriculum that moves students
                from fundamentals to advanced problem-solving, and personal
                mentoring where every student is known by name.
              </p>
              <p>
                Today we operate three centres across Delhi NCR — Noida, Indirapuram,
                and Karkardooma — with both online and offline batches, a full LMS,
                and the Blossom Test Series trusted by thousands of aspirants.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange bg-orange-50 p-6">
              <Target className="h-8 w-8 text-orange-dark" />
              <h3 className="mt-3 font-heading font-semibold text-navy">Our Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                To empower every CLAT aspirant with personalised mentorship,
                expert teaching, and the confidence to secure admission to
                India\u2019s top law universities.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-navy bg-navy-50 p-6">
              <Eye className="h-8 w-8 text-navy" />
              <h3 className="mt-3 font-heading font-semibold text-navy">Our Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                To be the most trusted CLAT coaching institute in Delhi NCR,
                known for small batches, advocate faculty, and a student-first
                approach that produces consistent results year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            kicker="What Makes Us Different"
            title="The Eight Pillars of CLAT Scholars"
            description="Every element of our programme is designed to give you an edge — from one-on-one mentorship to updated, exam-aligned content."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHO_WE_ARE_FEATURES.map((feature, i) => {
              const Icon = (Icons as Record<string, Icons.LucideIcon>)[feature.icon] || Icons.Circle;
              const navy = i % 2 === 1;
              return (
                <Reveal key={feature.title} delay={i * 60}>
                  <div className={`card-accent ${navy ? 'card-accent-navy' : ''} h-full p-6`}>
                    <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50">
                      <Icon className="h-6 w-6 text-orange-dark" />
                    </div>
                    <h3 className="mt-4 font-heading font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            kicker="Key Strengths"
            title="Why Families Trust CLAT Scholars"
            description="Three strengths that have made us a preferred choice for CLAT aspirants across Delhi NCR."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {KEY_STRENGTHS.map((strength, i) => (
              <Reveal key={strength.number} delay={i * 100}>
                <div className="flex gap-5 rounded-2xl bg-navy-50 p-6 h-full">
                  <div className="font-heading font-extrabold text-4xl text-orange shrink-0">{strength.number}</div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy">{strength.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{strength.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border p-6">
            <h3 className="font-heading font-semibold text-navy mb-4">Subjects We Cover</h3>
            <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {SUBJECTS_OFFERED.map((subject) => (
                <li key={subject} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                    <Check className="h-3 w-3 text-orange-dark" />
                  </span>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FacultySection />
      <TeamQuotes />
      <CentresSection />
    </>
  );
}
