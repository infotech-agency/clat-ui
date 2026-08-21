import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy via-navy-light to-navy py-16 md:py-20">
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-orange/20 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-orange/10 blur-3xl" />
      <div className="container relative mx-auto text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange/15">
          <CalendarCheck className="h-7 w-7 text-orange" />
        </div>
        <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl text-balance">
          Cracking CLAT Isn&rsquo;t Luck. It&rsquo;s Preparation.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Schedule your free counselling session today and take the first step
          toward your dream law school.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/admission" className="btn-orange">
            Schedule Your FREE Session Today
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 font-heading font-semibold text-white transition-all hover:border-orange hover:bg-orange hover:text-navy"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
