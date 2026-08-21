import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { AdmissionForm } from '@/components/forms/AdmissionForm';
import { CentresSection } from '@/components/home/CentresSection';
import { VideoTestimonials } from '@/components/home/VideoTestimonials';
import { StatCounter } from '@/components/shared/StatCounter';

export const metadata: Metadata = {
  title: 'Admission Enquiry',
  description:
    'Apply for admission to CLAT Scholars. Fill in your personal details, choose a course, and upload your documents to begin your CLAT preparation journey.',
  alternates: { canonical: 'https://www.clatscholars.com/admission' },
};

const STATS = [
  { value: 5000, suffix: '+', label: 'Students Mentored' },
  { value: 15, suffix: '-20', label: 'Batch Size' },
  { value: 80, suffix: '+', label: 'Mocks Available' },
  { value: 3, suffix: '', label: 'Centres in NCR' },
];

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        kicker="Admission"
        title="Begin Your CLAT Journey"
        description="Fill in the application form below and our admissions team will reach out within 24 hours to guide you through the next steps."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Admission' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr,360px]">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
            <AdmissionForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy p-6">
              <h3 className="font-heading font-semibold text-white">Why Choose CLAT Scholars?</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Personal one-on-one mentorship for every student
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Advocate-faculty with real legal expertise
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Small batches of 15-20 students
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Full LMS access with recorded lectures
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  Scholars Challenge scholarship test
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-navy-50 p-6">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CentresSection />
    </>
  );
}
