import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { Reveal } from '@/components/shared/Reveal';
import { TEST_SERIES_PACKAGES } from '@/lib/content';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blossom Test Series',
  description:
    'Choose from four Blossom Test Series packages — Ultimate, Advanced, Essential, and Startup — with full-length mocks, sectional tests, and national ranking for CLAT & AILET.',
  alternates: { canonical: 'https://www.clatscholars.com/test-series' },
};

export default function TestSeriesPage() {
  return (
    <>
      <PageHero
        kicker="Test Series"
        title="Blossom Test Series"
        description="Practice with exam-grade mocks, detailed video solutions, and one-on-one performance reviews. Choose the package that matches your prep intensity."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Test Series' }]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TEST_SERIES_PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 80}>
                <div
                  className={cn(
                    'relative flex h-full flex-col rounded-2xl border-2 p-6 transition-all hover:-translate-y-1 hover:shadow-xl',
                    pkg.badge === 'Best Value' ? 'border-orange bg-orange-50/40 shadow-lg' : 'border-border bg-white'
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
        </div>
      </section>
    </>
  );
}
