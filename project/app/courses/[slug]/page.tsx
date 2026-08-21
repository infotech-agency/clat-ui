// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import { getCourseBySlug, getCourses } from '@/lib/api';
// import { InquiryForm } from '@/components/forms/InquiryForm';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';
// import { Check, Clock, MapPin, Users, FileBarChart, BookOpen, GraduationCap, Briefcase, Wrench, ArrowRight } from 'lucide-react';

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const course = await getCourseBySlug(params.slug);
//   if (!course) return { title: 'Course Not Found' };
//   return {
//     title: course.seo?.title || course.name,
//     description: course.seo?.description || course.description,
//     keywords: course.seo?.keywords,
//     alternates: { canonical: `https://www.clatscholars.com/courses/${course.slug}` },
//     openGraph: {
//       title: course.seo?.title || course.name,
//       description: course.seo?.description || course.description,
//       images: course.image ? [{ url: course.image, width: 1200, height: 630 }] : undefined,
//       type: 'website',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: course.seo?.title || course.name,
//       description: course.seo?.description || course.description,
//       images: course.image ? [course.image] : undefined,
//     },
//   };
// }

// export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
//   const course = await getCourseBySlug(params.slug);
//   if (!course) notFound();

//   const allCourses = await getCourses().catch(() => []);
//   const related = allCourses
//     .filter((c) => c.slug !== course.slug && (c.targetClass === course.targetClass || c.mode === course.mode))
//     .slice(0, 4);

//   const specs = [
//     { icon: Clock, label: 'Weekly Classes', value: course.weeklyClasses },
//     { icon: FileBarChart, label: 'Total Mocks', value: String(course.totalMocks) },
//     { icon: Users, label: 'Doubt Sessions', value: course.doubtSessions },
//     { icon: GraduationCap, label: 'Mentorship', value: course.mentorship },
//     { icon: BookOpen, label: 'Online Platform', value: course.onlinePlatformIncluded ? 'Included' : 'Not included' },
//     { icon: BookOpen, label: 'Monthly GK', value: course.monthlyGK },
//     { icon: FileBarChart, label: 'Mock Analysis', value: course.mockAnalysis },
//     { icon: FileBarChart, label: 'Sectional Tests', value: course.sectionalTestIncluded ? 'Included' : 'Not included' },
//   ];

//   const courseSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'Course',
//     name: course.name,
//     description: course.description,
//     provider: { '@type': 'Organization', name: 'CLAT Scholars' },
//     hasCourseInstance: {
//       '@type': 'CourseInstance',
//       courseMode: course.mode === 'online' ? 'Online' : 'Onsite',
//     },
//     offers: { '@type': 'Offer', price: course.price, priceCurrency: 'INR' },
//   };

//   const faqSchema =
//     course.faqs && course.faqs.length > 0
//       ? {
//           '@context': 'https://schema.org',
//           '@type': 'FAQPage',
//           mainEntity: course.faqs.map((f) => ({
//             '@type': 'Question',
//             name: f.question,
//             acceptedAnswer: { '@type': 'Answer', text: f.answer },
//           })),
//         }
//       : null;

//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
//       {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

//       <section className="relative overflow-hidden bg-navy py-16 md:py-24">
//         <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
//         <div className="container relative mx-auto">
//           <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
//             <Link href="/" className="hover:text-orange">Home</Link>
//             <span>/</span>
//             <Link href="/courses" className="hover:text-orange">Courses</Link>
//             <span>/</span>
//             <span className="text-white/80">{course.name}</span>
//           </nav>
//           <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
//             <div>
//               <span className="inline-block rounded-full bg-orange px-3 py-1 text-xs font-heading font-bold text-navy">{course.category}</span>
//               <h1 className="mt-4 font-heading text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">{course.name}</h1>
//               <p className="mt-4 max-w-2xl text-white/70 md:text-lg">{course.description}</p>
//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 {course.mode && (
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white capitalize">
//                     <MapPin className="h-3.5 w-3.5 text-orange" /> {course.mode}
//                   </span>
//                 )}
//                 {course.duration && (
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
//                     <Clock className="h-3.5 w-3.5 text-orange" /> {course.duration}
//                   </span>
//                 )}
//                 {course.targetClass && (
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
//                     <GraduationCap className="h-3.5 w-3.5 text-orange" /> {course.targetClass}
//                   </span>
//                 )}
//                 {course.batchType && (
//                   <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white capitalize">
//                     <Clock className="h-3.5 w-3.5 text-orange" /> {course.batchType}
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div className="rounded-2xl bg-white p-6 shadow-xl">
//               <p className="text-sm text-muted-foreground">Course Fee</p>
//               <p className="font-heading font-extrabold text-3xl text-navy">₹{course.price?.toLocaleString('en-IN')}</p>
//               <div className="mt-4 border-t border-border pt-4">
//                 <InquiryForm variant="sidebar" lockedCourse={course.name} compact />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-16 md:py-24">
//         <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr,320px]">
//           <div className="space-y-12">
//             <div>
//               <h2 className="section-title text-2xl">Course Specifications</h2>
//               <span className="section-underline" />
//               <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                 {specs.map((spec) => (
//                   <div key={spec.label} className="flex items-center gap-3 rounded-xl border border-border bg-navy-50 p-4">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-orange shrink-0">
//                       <spec.icon className="h-5 w-5" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-muted-foreground">{spec.label}</p>
//                       <p className="font-heading font-semibold text-navy text-sm">{spec.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {course.subjectsCovered && course.subjectsCovered.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl">Subjects Covered</h2>
//                 <span className="section-underline" />
//                 <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
//                   {course.subjectsCovered.map((subject) => (
//                     <li key={subject} className="flex items-start gap-2 text-sm text-foreground">
//                       <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
//                         <Check className="h-3 w-3 text-orange-dark" />
//                       </span>
//                       {subject}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {course.modules && course.modules.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl">Curriculum / Modules</h2>
//                 <span className="section-underline" />
//                 <Accordion type="single" collapsible className="mt-6 rounded-2xl border border-border px-4 md:px-6">
//                   {course.modules
//                     .sort((a, b) => a.order - b.order)
//                     .map((module, i) => (
//                       <AccordionItem key={i} value={`module-${i}`}>
//                         <AccordionTrigger className="text-left font-heading font-medium text-navy hover:text-orange-dark hover:no-underline">
//                           {module.title} <span className="ml-2 text-xs text-muted-foreground font-normal">({module.duration})</span>
//                         </AccordionTrigger>
//                         <AccordionContent>
//                           <ul className="space-y-1.5">
//                             {module.topics.map((topic) => (
//                               <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
//                                 <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" /> {topic}
//                               </li>
//                             ))}
//                           </ul>
//                         </AccordionContent>
//                       </AccordionItem>
//                     ))}
//                 </Accordion>
//               </div>
//             )}

//             {course.syllabus && course.syllabus.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl">Syllabus</h2>
//                 <span className="section-underline" />
//                 <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
//                   {course.syllabus.map((item) => (
//                     <li key={item} className="flex items-start gap-2 text-sm text-foreground">
//                       <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
//                         <Check className="h-3 w-3 text-orange-dark" />
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {course.highlights && course.highlights.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl">Highlights</h2>
//                 <span className="section-underline" />
//                 <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
//                   {course.highlights.map((item) => (
//                     <li key={item} className="flex items-start gap-2 text-sm text-foreground">
//                       <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
//                         <Check className="h-3 w-3 text-orange-dark" />
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {course.tools && course.tools.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl flex items-center gap-2"><Wrench className="h-6 w-6 text-orange-dark" /> Tools Included</h2>
//                 <span className="section-underline" />
//                 <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
//                   {course.tools.map((item) => (
//                     <li key={item} className="flex items-start gap-2 text-sm text-foreground">
//                       <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
//                         <Check className="h-3 w-3 text-orange-dark" />
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {course.whoCanJoin && course.whoCanJoin.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl">Who Can Join</h2>
//                 <span className="section-underline" />
//                 <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
//                   {course.whoCanJoin.map((item) => (
//                     <li key={item} className="flex items-start gap-2 text-sm text-foreground">
//                       <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
//                         <Users className="h-3 w-3 text-orange-dark" />
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {course.careerOptions && course.careerOptions.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl flex items-center gap-2"><Briefcase className="h-6 w-6 text-orange-dark" /> Career Options</h2>
//                 <span className="section-underline" />
//                 <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
//                   {course.careerOptions.map((item) => (
//                     <li key={item} className="flex items-start gap-2 text-sm text-foreground">
//                       <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
//                         <Check className="h-3 w-3 text-orange-dark" />
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {course.faqs && course.faqs.length > 0 && (
//               <div>
//                 <h2 className="section-title text-2xl">Course FAQs</h2>
//                 <span className="section-underline" />
//                 <Accordion type="single" collapsible className="mt-6 rounded-2xl border border-border px-4 md:px-6">
//                   {course.faqs.map((faq, i) => (
//                     <AccordionItem key={i} value={`faq-${i}`}>
//                       <AccordionTrigger className="text-left font-heading font-medium text-navy hover:text-orange-dark hover:no-underline">
//                         {faq.question}
//                       </AccordionTrigger>
//                       <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </div>
//             )}
//           </div>

//           <div className="hidden lg:block">
//             <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-lg">
//               <p className="font-heading font-semibold text-navy">Enquire About This Course</p>
//               <p className="mt-1 text-sm text-muted-foreground">Fill the form and our team will call you back.</p>
//               <div className="mt-4 border-t border-border pt-4">
//                 <InquiryForm variant="sidebar" lockedCourse={course.name} compact />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {related.length > 0 && (
//         <section className="bg-navy-50 py-16 md:py-24">
//           <div className="container mx-auto">
//             <h2 className="section-title text-2xl text-center">You Might Also Like</h2>
//             <span className="section-underline mx-auto" />
//             <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {related.map((c) => (
//                 <Link key={c.slug} href={`/courses/${c.slug}`} className="card-accent group block overflow-hidden">
//                   <div className="relative h-36 overflow-hidden bg-navy">
//                     {c.image ? (
//                       // eslint-disable-next-line @next/next/no-img-element
//                       <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
//                     ) : (
//                       <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
//                         <span className="font-heading text-xl font-bold text-white/80">{c.name.charAt(0)}</span>
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-heading font-semibold text-navy group-hover:text-orange-dark transition-colors text-sm">{c.name}</h3>
//                     <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.description}</p>
//                     <div className="mt-3 flex items-center justify-between">
//                       <span className="font-heading font-bold text-navy">₹{c.price?.toLocaleString('en-IN')}</span>
//                       <ArrowRight className="h-4 w-4 text-orange-dark transition-transform group-hover:translate-x-1" />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// }

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourseBySlug, getCourses } from '@/lib/api';
import { InquiryForm } from '@/components/forms/InquiryForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check, Clock, MapPin, Users, FileBarChart, BookOpen, GraduationCap, Briefcase, Wrench, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: course.seo?.title || course.name,
    description: course.seo?.description || course.description,
    keywords: course.seo?.keywords,
    alternates: { canonical: `https://www.clatscholars.com/courses/${course.slug}` },
    openGraph: {
      title: course.seo?.title || course.name,
      description: course.seo?.description || course.description,
      images: course.image ? [{ url: course.image, width: 1200, height: 630 }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.seo?.title || course.name,
      description: course.seo?.description || course.description,
      images: course.image ? [course.image] : undefined,
    },
  };
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);
  if (!course) notFound();

  const allCourses = await getCourses().catch(() => []);
  const related = allCourses
    .filter((c) => c.slug !== course.slug && (c.targetClass === course.targetClass || c.mode === course.mode))
    .slice(0, 4);

  const specs = [
    { icon: Clock, label: 'Weekly Classes', value: course.weeklyClasses },
    { icon: FileBarChart, label: 'Total Mocks', value: String(course.totalMocks) },
    { icon: Users, label: 'Doubt Sessions', value: course.doubtSessions },
    { icon: GraduationCap, label: 'Mentorship', value: course.mentorship },
    { icon: BookOpen, label: 'Online Platform', value: course.onlinePlatformIncluded ? 'Included' : 'Not included' },
    { icon: BookOpen, label: 'Monthly GK', value: course.monthlyGK },
    { icon: FileBarChart, label: 'Mock Analysis', value: course.mockAnalysis },
    { icon: FileBarChart, label: 'Sectional Tests', value: course.sectionalTestIncluded ? 'Included' : 'Not included' },
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: { '@type': 'Organization', name: 'CLAT Scholars' },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.mode === 'online' ? 'Online' : 'Onsite',
    },
    offers: { '@type': 'Offer', price: course.price, priceCurrency: 'INR' },
  };

  const faqSchema =
    course.faqs && course.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: course.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <section className="relative overflow-hidden bg-navy py-16 md:py-24">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
        <div className="container relative mx-auto">
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-orange">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-orange">Courses</Link>
            <span>/</span>
            <span className="text-white/80">{course.name}</span>
          </nav>
          <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
            <div>
              <span className="inline-block rounded-full bg-orange px-3 py-1 text-xs font-heading font-bold text-navy">{course.category}</span>
              <h1 className="mt-4 font-heading text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">{course.name}</h1>
              <p className="mt-4 max-w-2xl text-white/70 md:text-lg">{course.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {course.mode && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white capitalize">
                    <MapPin className="h-3.5 w-3.5 text-orange" /> {course.mode}
                  </span>
                )}
                {course.duration && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
                    <Clock className="h-3.5 w-3.5 text-orange" /> {course.duration}
                  </span>
                )}
                {course.targetClass && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
                    <GraduationCap className="h-3.5 w-3.5 text-orange" /> {course.targetClass}
                  </span>
                )}
                {course.batchType && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white capitalize">
                    <Clock className="h-3.5 w-3.5 text-orange" /> {course.batchType}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-sm text-muted-foreground">Course Fee</p>
              <p className="font-heading font-extrabold text-3xl text-navy">₹{course.price?.toLocaleString('en-IN')}</p>
              <div className="mt-4 border-t border-border pt-4">
                <InquiryForm variant="sidebar" lockedCourse={course.name} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr,320px]">
          <div className="space-y-12">
            <div>
              <h2 className="section-title text-2xl">Course Specifications</h2>
              <span className="section-underline" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center gap-3 rounded-xl border border-border bg-navy-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-orange shrink-0">
                      <spec.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="font-heading font-semibold text-navy text-sm">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {course.subjectsCovered && course.subjectsCovered.length > 0 && (
              <div>
                <h2 className="section-title text-2xl">Subjects Covered</h2>
                <span className="section-underline" />
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {course.subjectsCovered.map((subject) => (
                    <li key={subject} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                        <Check className="h-3 w-3 text-orange-dark" />
                      </span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.modules && course.modules.length > 0 && (
              <div>
                <h2 className="section-title text-2xl">Curriculum / Modules</h2>
                <span className="section-underline" />
                <Accordion type="single" collapsible className="mt-6 rounded-2xl border border-border px-4 md:px-6">
                  {course.modules.map((module, i) => (
                    <AccordionItem key={i} value={`module-${i}`}>
                      <AccordionTrigger className="text-left font-heading font-medium text-navy hover:text-orange-dark hover:no-underline">
                        {module.title}
                        {module.duration && (
                          <span className="ml-2 text-xs text-muted-foreground font-normal">({module.duration})</span>
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {module.description && (
                          <p className="mb-2 text-sm text-muted-foreground">{module.description}</p>
                        )}
                        {module.topics && module.topics.length > 0 && (
                          <ul className="space-y-1.5">
                            {module.topics.map((topic) => (
                              <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" /> {topic}
                              </li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {course.syllabus && course.syllabus.length > 0 && (
              <div>
                <h2 className="section-title text-2xl">Syllabus</h2>
                <span className="section-underline" />
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {course.syllabus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                        <Check className="h-3 w-3 text-orange-dark" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.highlights && course.highlights.length > 0 && (
              <div>
                <h2 className="section-title text-2xl">Highlights</h2>
                <span className="section-underline" />
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {course.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                        <Check className="h-3 w-3 text-orange-dark" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.tools && course.tools.length > 0 && (
              <div>
                <h2 className="section-title text-2xl flex items-center gap-2"><Wrench className="h-6 w-6 text-orange-dark" /> Tools Included</h2>
                <span className="section-underline" />
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {course.tools.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                        <Check className="h-3 w-3 text-orange-dark" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.whoCanJoin && course.whoCanJoin.length > 0 && (
              <div>
                <h2 className="section-title text-2xl">Who Can Join</h2>
                <span className="section-underline" />
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {course.whoCanJoin.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                        <Users className="h-3 w-3 text-orange-dark" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.careerOptions && course.careerOptions.length > 0 && (
              <div>
                <h2 className="section-title text-2xl flex items-center gap-2"><Briefcase className="h-6 w-6 text-orange-dark" /> Career Options</h2>
                <span className="section-underline" />
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {course.careerOptions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                        <Check className="h-3 w-3 text-orange-dark" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.faqs && course.faqs.length > 0 && (
              <div>
                <h2 className="section-title text-2xl">Course FAQs</h2>
                <span className="section-underline" />
                <Accordion type="single" collapsible className="mt-6 rounded-2xl border border-border px-4 md:px-6">
                  {course.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-heading font-medium text-navy hover:text-orange-dark hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-lg">
              <p className="font-heading font-semibold text-navy">Enquire About This Course</p>
              <p className="mt-1 text-sm text-muted-foreground">Fill the form and our team will call you back.</p>
              <div className="mt-4 border-t border-border pt-4">
                <InquiryForm variant="sidebar" lockedCourse={course.name} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-navy-50 py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="section-title text-2xl text-center">You Might Also Like</h2>
            <span className="section-underline mx-auto" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((c) => (
                <Link key={c.slug} href={`/courses/${c.slug}`} className="card-accent group block overflow-hidden">
                  <div className="relative h-36 overflow-hidden bg-navy">
                    {c.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                        <span className="font-heading text-xl font-bold text-white/80">{c.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-navy group-hover:text-orange-dark transition-colors text-sm">{c.name}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-heading font-bold text-navy">₹{c.price?.toLocaleString('en-IN')}</span>
                      <ArrowRight className="h-4 w-4 text-orange-dark transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}