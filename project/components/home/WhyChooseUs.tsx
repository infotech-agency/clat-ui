import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { KEY_STRENGTHS, SUBJECTS_OFFERED } from '@/lib/content';
import { Check } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Why Choose Us"
          title="Key Strengths That Set Us Apart"
          description="We combine advocate-led teaching, a structured curriculum, and personal mentoring with a full LMS — so you are never studying alone."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange bg-orange-50 p-6">
              <p className="font-heading text-lg italic text-navy leading-relaxed">
                &ldquo;We do not teach to a test — we build legal thinkers. Every
                student who walks in is trained to reason like a future lawyer,
                and that is what makes CLAT feel easy.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-orange-dark">
                — Ritesh Singh, Director, Academics
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-heading font-semibold text-navy mb-4">
                Subjects We Cover
              </h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
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

          <div className="space-y-5">
            {KEY_STRENGTHS.map((strength, i) => (
              <Reveal key={strength.number} delay={i * 100}>
                <div className="flex gap-5 rounded-2xl bg-navy-50 p-6">
                  <div className="font-heading font-extrabold text-4xl text-orange shrink-0">
                    {strength.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy">{strength.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
