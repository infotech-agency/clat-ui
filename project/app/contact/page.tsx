import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { CENTRES, SITE } from '@/lib/content';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Navigation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with CLAT Scholars. Find our centres in Noida, Indirapuram, and Karkardooma Delhi with phone numbers, addresses, and directions.',
  alternates: { canonical: 'https://www.clatscholars.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Get in Touch With Us"
        description="Have a question or want to visit a centre? Reach out via the form below or call us directly at any of our three locations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div>
            <h2 className="section-title text-2xl">Send Us a Message</h2>
            <span className="section-underline" />
            <p className="mt-4 text-muted-foreground">
              Fill in the form and our team will get back to you within 24 hours.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-navy-50 p-6">
              <InquiryForm variant="inline" />
            </div>
          </div>

          <div>
            <h2 className="section-title text-2xl">Our Centres</h2>
            <span className="section-underline" />
            <div className="mt-6 space-y-5">
              {CENTRES.map((centre) => {
                const localBusinessSchema = {
                  '@context': 'https://schema.org',
                  '@type': 'LocalBusiness',
                  name: `CLAT Scholars - ${centre.name}`,
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: centre.address,
                  },
                  telephone: centre.phone,
                };
                return (
                  <div key={centre.name} className="rounded-2xl border border-border p-5">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-orange shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-navy">{centre.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{centre.address}</p>
                        <a href={`tel:${centre.phoneRaw}`} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-navy hover:text-orange-dark transition-colors">
                          <Phone className="h-4 w-4" /> {centre.phone}
                        </a>
                        <a
                          // href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.mapQuery)}`}
                          href={`${centre.mapQuery}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-orange px-3 py-1.5 text-xs font-heading font-semibold text-navy transition-colors hover:bg-orange-dark hover:text-white"
                        >
                          <Navigation className="h-3.5 w-3.5" /> Get Directions
                        </a>
                      </div>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-border">
                      <iframe
                        title={`Map of ${centre.name}`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(centre.mapQuery)}&output=embed`}
                            // src={`${encodeURIComponent(centre.mapQuery)}&output=embed`}
                            // src={`https://www.google.com/maps?q=${encodeURIComponent(centre.mapQuery)}&output=embed`}
                        className="h-40 w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-navy p-6">
              <h3 className="font-heading font-semibold text-white">Connect With Us</h3>
              <a href={`mailto:${SITE.email}`} className="mt-3 flex items-center gap-2 text-sm text-white/70 hover:text-orange transition-colors">
                <Mail className="h-4 w-4 text-orange" /> {SITE.email}
              </a>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://www.facebook.com/clatscholars" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange hover:text-navy transition-colors">
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a href="https://www.instagram.com/clatscholars" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange hover:text-navy transition-colors">
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a href="https://www.linkedin.com/company/clatscholars" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange hover:text-navy transition-colors">
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
