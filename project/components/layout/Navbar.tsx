// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
// import { NAV_LINKS, SITE } from '@/lib/content';
// import { getCourses } from '@/lib/api';
// import type { Course } from '@/lib/types';
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetClose,
//   SheetHeader,
//   SheetTitle,
// } from '@/components/ui/sheet';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';
// import { cn } from '@/lib/utils';

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     getCourses()
//       .then(setCourses)
//       .catch(() => {});
//   }, []);

//   const offlineCourses = courses.filter((c) => c.mode === 'offline');
//   const onlineCourses = courses.filter((c) => c.mode === 'online');

//   const isActive = (href: string) =>
//     href === '/' ? pathname === '/' : pathname.startsWith(href);

//   return (
//     <header
//       className={cn(
//         'sticky top-0 z-40 bg-white transition-shadow',
//         scrolled ? 'shadow-md' : 'shadow-sm'
//       )}
//     >
//       <nav className="container mx-auto flex items-center justify-between py-3">
//         <Link href="/" className="flex items-center gap-2.5 shrink-0">
//           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy">
//             <GraduationCap className="h-6 w-6 text-orange" />
//           </div>
//           <div className="flex flex-col leading-none">
//             <span className="font-heading font-extrabold text-navy text-lg">
//               CLAT Scholars
//             </span>
//             <span className="text-[10px] font-medium text-muted-foreground tracking-wide">
//               a Pravmis Edu initiative
//             </span>
//           </div>
//         </Link>

//         <div className="hidden lg:flex items-center gap-1">
//           {NAV_LINKS.map((link) =>
//             link.hasMega ? (
//               <div key={link.href} className="group relative">
//                 <Link
//                   href={link.href}
//                   className={cn(
//                     'nav-link flex items-center gap-1',
//                     isActive(link.href) && 'text-orange-dark'
//                   )}
//                 >
//                   {link.label}
//                   <ChevronDown className="h-3.5 w-3.5" />
//                 </Link>
//                 <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
//                   <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-white p-6 shadow-2xl">
//                     <div>
//                       <p className="mb-2 text-xs font-heading font-bold uppercase tracking-wider text-orange-dark">
//                         Offline Batches
//                       </p>
//                       <ul className="space-y-1.5">
//                         {offlineCourses.length > 0 ? (
//                           offlineCourses.map((c) => (
//                             <li key={c.slug}>
//                               <Link
//                                 href={`/courses/${c.slug}`}
//                                 className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50 hover:text-orange-dark"
//                               >
//                                 {c.name}
//                               </Link>
//                             </li>
//                           ))
//                         ) : (
//                           <li className="px-2 py-1.5 text-sm text-muted-foreground">
//                             Loading courses…
//                           </li>
//                         )}
//                       </ul>
//                     </div>
//                     <div>
//                       <p className="mb-2 text-xs font-heading font-bold uppercase tracking-wider text-orange-dark">
//                         Online Batches
//                       </p>
//                       <ul className="space-y-1.5">
//                         {onlineCourses.length > 0 ? (
//                           onlineCourses.map((c) => (
//                             <li key={c.slug}>
//                               <Link
//                                 href={`/courses/${c.slug}`}
//                                 className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50 hover:text-orange-dark"
//                               >
//                                 {c.name}
//                               </Link>
//                             </li>
//                           ))
//                         ) : (
//                           <li className="px-2 py-1.5 text-sm text-muted-foreground">
//                             Loading courses…
//                           </li>
//                         )}
//                       </ul>
//                     </div>
//                     <div className="col-span-2 border-t border-border pt-3">
//                       <Link
//                         href="/courses"
//                         className="text-sm font-heading font-semibold text-orange-dark hover:underline"
//                       >
//                         View All Courses →
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   'nav-link',
//                   isActive(link.href) && 'text-orange-dark'
//                 )}
//               >
//                 {link.label}
//               </Link>
//             )
//           )}
//         </div>

//         <div className="flex items-center gap-3">
//           <Link href="/admission" className="btn-orange hidden sm:inline-flex text-sm">
//             Admission Enquiry
//           </Link>
//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger
//               className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-navy"
//               aria-label="Open menu"
//             >
//               <Menu className="h-5 w-5" />
//             </SheetTrigger>
//             <SheetContent side="right" className="w-full sm:max-w-sm overflow-y-auto">
//               <SheetHeader className="mb-4">
//                 <SheetTitle className="font-heading font-extrabold text-navy">
//                   CLAT Scholars
//                 </SheetTitle>
//               </SheetHeader>
//               <nav className="flex flex-col gap-1">
//                 {NAV_LINKS.map((link) =>
//                   link.hasMega ? (
//                     <Accordion key={link.href} type="single" collapsible>
//                       <AccordionItem value="courses" border="none">
//                         <AccordionTrigger className="text-base font-heading font-medium text-navy hover:text-orange-dark hover:no-underline py-3">
//                           {link.label}
//                         </AccordionTrigger>
//                         <AccordionContent>
//                           <div className="space-y-3 pb-2">
//                             <div>
//                               <p className="mb-1 text-xs font-bold uppercase tracking-wider text-orange-dark">
//                                 Offline
//                               </p>
//                               {offlineCourses.map((c) => (
//                                 <Link
//                                   key={c.slug}
//                                   href={`/courses/${c.slug}`}
//                                   onClick={() => setOpen(false)}
//                                   className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50"
//                                 >
//                                   {c.name}
//                                 </Link>
//                               ))}
//                             </div>
//                             <div>
//                               <p className="mb-1 text-xs font-bold uppercase tracking-wider text-orange-dark">
//                                 Online
//                               </p>
//                               {onlineCourses.map((c) => (
//                                 <Link
//                                   key={c.slug}
//                                   href={`/courses/${c.slug}`}
//                                   onClick={() => setOpen(false)}
//                                   className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50"
//                                 >
//                                   {c.name}
//                                 </Link>
//                               ))}
//                             </div>
//                             <Link
//                               href="/courses"
//                               onClick={() => setOpen(false)}
//                               className="block rounded-md px-2 py-1.5 text-sm font-semibold text-orange-dark"
//                             >
//                               View All Courses →
//                             </Link>
//                           </div>
//                         </AccordionContent>
//                       </AccordionItem>
//                     </Accordion>
//                   ) : (
//                     <SheetClose asChild key={link.href}>
//                       <Link
//                         href={link.href}
//                         className={cn(
//                           'rounded-md px-3 py-2.5 text-base font-heading font-medium text-navy hover:bg-navy-50 hover:text-orange-dark',
//                           isActive(link.href) && 'text-orange-dark bg-navy-50'
//                         )}
//                       >
//                         {link.label}
//                       </Link>
//                     </SheetClose>
//                   )
//                 )}
//                 <SheetClose asChild>
//                   <Link href="/admission" className="btn-orange mt-3">
//                     Admission Enquiry
//                   </Link>
//                 </SheetClose>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/content';
import { getCourses } from '@/lib/api';
import type { Course } from '@/lib/types';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(() => {});
  }, []);

  // const offlineCourses = courses.filter((c) => c.mode === 'offline');
  // const onlineCourses = courses.filter((c) => c.mode === 'online');
  const offlineCourses = courses.filter(
  (c) => c.mode === 'offline' || c.mode === 'online-offline' || c.mode === 'hybrid'
);
const onlineCourses = courses.filter(
  (c) => c.mode === 'online' || c.mode === 'online-offline' || c.mode === 'hybrid'
);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-white transition-all duration-300',
        scrolled ? 'shadow-md' : 'shadow-sm'
      )}
    >
      <nav
        className={cn(
          'container mx-auto flex items-center justify-between transition-all duration-300',
          scrolled ? 'py-1' : 'py-3'
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0 ">
          
          <div className="flex flex-col leading-none">
            {/* <span
              className={cn(
                'font-heading font-extrabold text-navy transition-all duration-300',
                scrolled ? 'text-lg' : 'text-2xl'
              )}
            >
              CLAT Scholars
            </span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wide">
              a Pravmis Edu initiative
            </span> */}
            <Image src={'/logo.jpg'} height={100} width={100} alt='logo'></Image>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.hasMega ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    'nav-link flex items-center gap-1',
                    isActive(link.href) && 'text-orange-dark'
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-white p-6 shadow-2xl">
                    <div>
                      <p className="mb-2 text-xs font-heading font-bold uppercase tracking-wider text-orange-dark">
                        Offline Batches
                      </p>
                      <ul className="space-y-1.5">
                        {offlineCourses.length > 0 ? (
                          offlineCourses.map((c) => (
                            <li key={c.slug}>
                              <Link
                                href={`/courses/${c.slug}`}
                                className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50 hover:text-orange-dark"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li className="px-2 py-1.5 text-sm text-muted-foreground">
                            Loading courses…
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-heading font-bold uppercase tracking-wider text-orange-dark">
                        Online Batches
                      </p>
                      <ul className="space-y-1.5">
                        {onlineCourses.length > 0 ? (
                          onlineCourses.map((c) => (
                            <li key={c.slug}>
                              <Link
                                href={`/courses/${c.slug}`}
                                className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50 hover:text-orange-dark"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li className="px-2 py-1.5 text-sm text-muted-foreground">
                            Loading courses…
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="col-span-2 border-t border-border pt-3">
                      <Link
                        href="/courses"
                        className="text-sm font-heading font-semibold text-orange-dark hover:underline"
                      >
                        View All Courses →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link',
                  isActive(link.href) && 'text-orange-dark'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admission" className="btn-orange hidden sm:inline-flex text-sm">
            Admission Enquiry
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-navy"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm overflow-y-auto">
              <SheetHeader className="mb-4">
                <SheetTitle className="font-heading font-extrabold text-navy">
                  CLAT Scholars
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) =>
                  link.hasMega ? (
                    <Accordion key={link.href} type="single" collapsible>
                      <AccordionItem value="courses" border="none">
                        <AccordionTrigger className="text-base font-heading font-medium text-navy hover:text-orange-dark hover:no-underline py-3">
                          {link.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pb-2">
                            <div>
                              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-orange-dark">
                                Offline
                              </p>
                              {offlineCourses.map((c) => (
                                <Link
                                  key={c.slug}
                                  href={`/courses/${c.slug}`}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50"
                                >
                                  {c.name}
                                </Link>
                              ))}
                            </div>
                            <div>
                              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-orange-dark">
                                Online
                              </p>
                              {onlineCourses.map((c) => (
                                <Link
                                  key={c.slug}
                                  href={`/courses/${c.slug}`}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-navy-50"
                                >
                                  {c.name}
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/courses"
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-2 py-1.5 text-sm font-semibold text-orange-dark"
                            >
                              View All Courses →
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'rounded-md px-3 py-2.5 text-base font-heading font-medium text-navy hover:bg-navy-50 hover:text-orange-dark',
                          isActive(link.href) && 'text-orange-dark bg-navy-50'
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                )}
                <SheetClose asChild>
                  <Link href="/admission" className="btn-orange mt-3">
                    Admission Enquiry
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}