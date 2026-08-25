// 'use client';

// import { SectionHeading } from '@/components/shared/SectionHeading';
// import { GENERAL_FAQS } from '@/lib/content';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';

// export function FAQSection() {
//   return (
//     <section className="bg-white py-16 md:py-24">
//       <div className="container mx-auto max-w-3xl">
//         <SectionHeading
//           kicker="FAQ"
//           title="Frequently Asked Questions"
//           description="Everything you need to know about admissions, batches, fees, and life at CLAT Scholars."
//         />

//         <div className="mt-10">
//           <Accordion type="single" collapsible className="rounded-2xl border border-border px-4 md:px-6">
//             {GENERAL_FAQS.map((faq, i) => (
//               <AccordionItem key={i} value={`item-${i}`}>
//                 <AccordionTrigger className="text-left font-heading font-medium text-navy hover:text-orange-dark hover:no-underline">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground leading-relaxed">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export function FAQSection() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/faqs`, { cache: 'no-store' });
        const data = await res.json();
        setFaqs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to load FAQs', err);
        setFaqs([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // No active FAQs yet -> don't render an empty section
  if (!loading && faqs.length === 0) return null;

  // Split alternately into two balanced columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  const renderAccordion = (items) => (
    <Accordion type="single" collapsible className="rounded-2xl border border-border px-4 md:px-6">
      {items.map((faq) => (
        <AccordionItem key={faq._id} value={faq._id}>
          <AccordionTrigger className="text-left font-heading font-medium text-navy hover:text-orange-dark hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          kicker="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about admissions, batches, fees, and life at CLAT Scholars."
        />

        <div className="mt-10">
          {loading ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[...Array(2)].map((_, col) => (
                <div key={col} className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-14 animate-pulse rounded-xl bg-gray-100" />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {renderAccordion(leftFaqs)}
              {renderAccordion(rightFaqs)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}