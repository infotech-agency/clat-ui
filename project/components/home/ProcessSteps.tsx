import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { PROCESS_STEPS } from '@/lib/content';

export function ProcessSteps() {
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Our Process"
          title="Your Journey to an NLU, Step by Step"
          description="From your first counselling session to mock-day readiness, we walk every student through a proven five-step process."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="relative h-full rounded-2xl bg-white p-6 shadow-sm border border-border">
                <div className="font-heading font-extrabold text-5xl text-orange/30">
                  {step.number}
                </div>
                <h3 className="mt-2 font-heading font-semibold text-navy">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-orange/40 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
