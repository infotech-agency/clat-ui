import { cn } from '@/lib/utils';

interface PageHeroProps {
  kicker?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ kicker, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-24">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="container relative mx-auto text-center">
        {breadcrumbs && (
          <nav className="mb-4 flex items-center justify-center gap-2 text-xs text-white/50">
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-2">
                {bc.href ? (
                  <a href={bc.href} className="hover:text-orange transition-colors">{bc.label}</a>
                ) : (
                  <span className="text-white/80">{bc.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        {kicker && <span className="section-kicker text-orange-light">{kicker}</span>}
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-white md:text-4xl lg:text-5xl text-balance">
          {title}
        </h1>
        <span className="section-underline mx-auto" />
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-white/70 md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
