import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { TEAM_QUOTES } from '@/lib/content';
import { Quote } from 'lucide-react';

export function TeamQuotes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="What Our Team Says"
          title="From the People Who Build CLAT Scholars"
          description="Our academic and leadership team on what makes this institute different."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TEAM_QUOTES.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-navy-50 p-6">
                <Quote className="h-8 w-8 text-orange" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground italic">
                  {member.quote}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-orange font-heading font-bold">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-orange-dark">{member.qualification}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
