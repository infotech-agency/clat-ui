import Link from 'next/link';
import { Home, BookOpen, GraduationCap } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy py-20">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <div className="container relative mx-auto text-center">
        <p className="font-heading font-extrabold text-8xl text-orange md:text-9xl">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-white md:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          The page you are looking for doesn&rsquo;t exist or has been moved.
          Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-orange">
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 font-heading font-semibold text-white transition-all hover:border-orange hover:bg-orange hover:text-navy"
          >
            <BookOpen className="mr-2 h-4 w-4" /> Browse Courses
          </Link>
          <Link
            href="/admission"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 font-heading font-semibold text-white transition-all hover:border-orange hover:bg-orange hover:text-navy"
          >
            <GraduationCap className="mr-2 h-4 w-4" /> Apply for Admission
          </Link>
        </div>
      </div>
    </section>
  );
}
