'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { getBlogs } from '@/lib/api';
import type { Blog } from '@/lib/types';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const set = new Set(blogs.map((b) => b.category).filter(Boolean));
    return Array.from(set);
  }, [blogs]);

  const filtered = useMemo(() => {
    let list = blogs;
    if (filter !== 'all') list = list.filter((b) => b.category === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((b) => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q));
    }
    return list;
  }, [blogs, filter, search]);

  const popular = useMemo(() => [...blogs].slice(0, 3), [blogs]);

  return (
    <>
      <PageHero
        kicker="Blog"
        title="Insights, Tips & Exam Updates"
        description="Strategy guides, exam updates, and preparation tips from our faculty to help you crack CLAT & AILET."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr,320px]">
          <div>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              {categories.length > 0 && (
                <Tabs value={filter} onValueChange={setFilter}>
                  <TabsList className="bg-navy-50">
                    <TabsTrigger value="all">All</TabsTrigger>
                    {categories.map((cat) => (
                      <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              )}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search articles..." className="pl-10" />
              </div>
            </div>

            {loading ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-64 rounded-2xl" />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-border bg-navy-50 p-12 text-center">
                <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {filtered.map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`} className="card-accent group block overflow-hidden">
                    <div className="relative h-40 overflow-hidden bg-navy">
                      {blog.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                          <span className="font-heading text-lg font-bold text-white/60">{blog.category}</span>
                        </div>
                      )}
                      <span className="absolute left-3 top-3 rounded-full bg-orange px-2.5 py-1 text-xs font-heading font-bold text-navy">{blog.category}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-navy line-clamp-2 group-hover:text-orange-dark transition-colors">{blog.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><User className="h-3 w-3" /> {blog.author}</span>
                        {blog.createdAt && (
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-navy-50 p-6">
              <h3 className="font-heading font-semibold text-navy mb-4">Popular Posts</h3>
              {loading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-16 rounded-lg" />
                  ))}
                </div>
              ) : popular.length === 0 ? (
                <p className="text-sm text-muted-foreground">No posts yet.</p>
              ) : (
                <ul className="space-y-3">
                  {popular.map((blog) => (
                    <li key={blog.slug}>
                      <Link href={`/blog/${blog.slug}`} className="group flex gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-orange font-heading font-bold">
                          {blog.title.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-navy group-hover:text-orange-dark transition-colors line-clamp-2">{blog.title}</p>
                          <p className="text-xs text-muted-foreground">{blog.category}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-navy">Get Free Counselling</h3>
              <p className="mt-1 text-sm text-muted-foreground">Have a question? Reach out and we'll call you back.</p>
              <div className="mt-4 border-t border-border pt-4">
                <InquiryForm variant="sidebar" compact />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
