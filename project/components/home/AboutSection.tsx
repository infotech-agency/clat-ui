import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { WHO_WE_ARE_FEATURES } from '@/lib/content';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="About Us"
          title="Who We Are"
          description="CLAT Scholars is a Pravmis Edu initiative built on a simple belief — that every aspirant deserves personal attention, expert teaching, and a structured path to their dream NLU."
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
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/about" className="btn-navy inline-flex">
            Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
