'use client';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { GENERAL_FAQS } from '@/lib/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          kicker="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about admissions, batches, fees, and life at CLAT Scholars."
        />

        <div className="mt-10">
          <Accordion type="single" collapsible className="rounded-2xl border border-border px-4 md:px-6">
            {GENERAL_FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-heading font-medium text-navy hover:text-orange-dark hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
