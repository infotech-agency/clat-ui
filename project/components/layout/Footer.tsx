import Link from 'next/link';
import { GraduationCap, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Send } from 'lucide-react';
import { NAV_LINKS, CENTRES, SITE } from '@/lib/content';
import { InquiryForm } from '@/components/forms/InquiryForm';

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container mx-auto py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange">
                <GraduationCap className="h-6 w-6 text-navy" />
              </div>
              <span className="font-heading font-extrabold text-white text-lg">
                CLAT Scholars
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              A Pravmis Edu initiative. Expert CLAT, AILET & law entrance
              coaching with personal mentorship, small batches, and advocate
              faculty across Noida, Indirapuram & Delhi.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://www.facebook.com/clatscholars" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange hover:text-navy transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/clatscholars" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange hover:text-navy transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/clatscholars" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-orange hover:text-navy transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/testimonials" className="text-white/70 hover:text-orange transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-white/70 hover:text-orange transition-colors">
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Centres</h3>
            <ul className="space-y-4 text-sm">
              {CENTRES.map((c) => (
                <li key={c.name}>
                  <p className="font-medium text-white">{c.name}</p>
                  <p className="mt-1 flex items-start gap-1.5 text-white/60">
                    <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                    {c.address}
                  </p>
                  <a href={`tel:${c.phoneRaw}`} className="mt-1 flex items-center gap-1.5 text-white/70 hover:text-orange transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Get Free Counselling</h3>
            <p className="text-sm text-white/60 mb-3">
              Share your details and our team will call you back within 24 hours.
            </p>
            <InquiryForm variant="footer" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-white/50">
          <p>© {new Date().getFullYear()} CLAT Scholars (Pravmis Edu). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-orange transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-orange transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
