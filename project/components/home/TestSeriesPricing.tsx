import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { TEST_SERIES_PACKAGES } from '@/lib/content';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TestSeriesPricing() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Blossom Test Series"
          title="Mock Packages for Every Stage"
          description="Pick the test series that matches your prep intensity — from a starter 15-mock pack to the full 80-mock Ultimate series with national ranking."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TEST_SERIES_PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 80}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border-2 p-6 transition-all hover:-translate-y-1 hover:shadow-xl',
                  pkg.badge === 'Best Value'
                    ? 'border-orange bg-orange-50/40 shadow-lg'
                    : 'border-border bg-white'
                )}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-heading font-bold text-navy">
                    <Star className="h-3 w-3 fill-navy" /> {pkg.badge}
                  </span>
                )}
                <h3 className="font-heading font-bold text-navy text-lg">{pkg.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.mocks}</p>
                <p className="mt-1 text-xs text-muted-foreground">{pkg.exams}</p>
                <p className="mt-4 font-heading font-extrabold text-3xl text-navy">{pkg.price}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange/15">
                        <Check className="h-3 w-3 text-orange-dark" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/admission"
                  className={cn(
                    'mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-heading font-semibold text-sm transition-all',
                    pkg.badge === 'Best Value'
                      ? 'bg-orange text-navy hover:bg-orange-dark hover:text-white'
                      : 'bg-navy text-white hover:bg-navy-light'
                  )}
                >
                  Enquire Now
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/test-series" className="text-sm font-heading font-semibold text-orange-dark hover:underline">
            View full test series details →
          </Link>
        </div>
      </div>
    </section>
  );
}
