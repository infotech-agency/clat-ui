// 'use client';

// import { MessageCircle, Phone } from 'lucide-react';
// import { SITE } from '@/lib/content';

// export function FloatingButtons() {
//   return (
//     <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
//       <a
//         href={`https://wa.me/${SITE.whatsapp}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
//       >
//         <MessageCircle className="h-6 w-6" />
//       </a>
//       <a
//         href={`tel:${SITE.phonePrimary.replace(/[^+\d]/g, '')}`}
//         aria-label="Call us"
//         className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-navy shadow-lg transition-transform hover:scale-110"
//       >
//         <Phone className="h-6 w-6" />
//       </a>
//     </div>
//   );
// }

'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { SITE } from '@/lib/content';
import Image from 'next/image';

export function FloatingButtons() {
  return (
    <>
      {/* Mobile: fixed bottom bar, 50-50 split */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex sm:hidden">
        
         <a href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex w-1/2 items-center justify-center gap-2 bg-[#43EB62] py-3.5 text-sm font-semibold text-white shadow-lg"
        >
          {/* <MessageCircle className="h-5 w-5" /> */}
          <Image alt src='/wtsapp.png' height={32} width={32}></Image>
          WhatsApp
        </a>
        
       <a   href={`tel:${SITE.phonePrimary.replace(/[^+\d]/g, '')}`}
          aria-label="Call us"
          className="flex w-1/2 items-center justify-center gap-2 bg-orange py-3.5 text-sm font-semibold text-navy shadow-lg"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
      </div>

      {/* Desktop/tablet: floating circular buttons */}
      <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 sm:flex">
        
         <a href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          {/* <MessageCircle className="h-6 w-6" /> */}
           <Image alt src='/wtsapp.png' height={40} width={40}></Image>
        </a>
        
         <a href={`tel:${SITE.phonePrimary.replace(/[^+\d]/g, '')}`}
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-navy shadow-lg transition-transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}