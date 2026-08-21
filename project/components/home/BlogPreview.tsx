'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Skeleton } from '@/components/ui/skeleton';
import { getBlogs } from '@/lib/api';
import type { Blog } from '@/lib/types';
import { ArrowRight, Calendar, User } from 'lucide-react';

export function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          kicker="Latest Blogs"
          title="Insights & Exam Tips"
          description="Strategy guides, exam updates, and preparation tips from our faculty."
        />

        {loading ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-72 rounded-2xl" />
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
            <p className="text-muted-foreground">Blog articles will appear here once published.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="card-accent group block overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden bg-navy">
                  {blog.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                      <span className="font-heading text-xl font-bold text-white/60">{blog.category}</span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-orange px-2.5 py-1 text-xs font-heading font-bold text-navy">
                    {blog.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-navy line-clamp-2 group-hover:text-orange-dark transition-colors">
                    {blog.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {blog.author}
                    </span>
                    {blog.createdAt && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-navy inline-flex">
            View All Blogs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
