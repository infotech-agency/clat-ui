import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { CENTRES } from '@/lib/content';

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white text-xs">
      <div className="container mx-auto flex items-center justify-between gap-4 py-2">
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="https://www.facebook.com/clatscholars"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/80 hover:text-orange transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/clatscholars"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/80 hover:text-orange transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/clatscholars"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/80 hover:text-orange transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center gap-x-5 gap-y-1 overflow-x-auto scrollbar-hide flex-1 sm:justify-end sm:overflow-visible">
          {CENTRES.map((c) => (
            <a
              key={c.name}
              href={`tel:${c.phoneRaw}`}
              className="flex items-center gap-1.5 whitespace-nowrap text-white/85 hover:text-orange transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{c.phone}</span>
            </a>
          ))}
          <a
            href="mailto:info@clatscholars.com"
            className="hidden md:flex items-center gap-1.5 whitespace-nowrap text-white/85 hover:text-orange transition-colors"
          >
            <Mail className="h-3 w-3" />
            <span>info@clatscholars.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
