import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal } from '@/components/shared/Reveal';
import { CENTRES } from '@/lib/content';
import { MapPin, Phone, Navigation } from 'lucide-react';

export function CentresSection() {
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Our Centres"
          title="Visit Us Across Delhi NCR"
          description="Three conveniently located centres so you are never far from expert CLAT coaching."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CENTRES.map((centre, i) => (
            <Reveal key={centre.name} delay={i * 80}>
              <div className="card-accent card-accent-navy h-full p-6">
                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                  <MapPin className="h-6 w-6 text-orange" />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-navy">{centre.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{centre.address}</p>
                <a
                  href={`tel:${centre.phoneRaw}`}
                  className="mt-3 flex items-center gap-2 text-sm font-medium text-navy hover:text-orange-dark transition-colors"
                >
                  <Phone className="h-4 w-4" /> {centre.phone}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-orange px-4 py-2 text-sm font-heading font-semibold text-navy transition-colors hover:bg-orange-dark hover:text-white"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
