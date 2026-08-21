import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogBySlug, getBlogs } from '@/lib/api';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { Calendar, User, ArrowLeft, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';
import { sanitize } from 'isomorphic-dompurify';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return { title: 'Article Not Found' };
  return {
    title: blog.seo?.title || blog.title,
    description: blog.seo?.description || blog.excerpt,
    keywords: blog.seo?.keywords,
    alternates: { canonical: `https://www.clatscholars.com/blog/${blog.slug}` },
    openGraph: {
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || blog.excerpt,
      images: blog.image ? [{ url: blog.image, width: 1200, height: 630 }] : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || blog.excerpt,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) notFound();

  const allBlogs = await getBlogs().catch(() => []);
  const related = allBlogs.filter((b) => b.slug !== blog.slug && b.category === blog.category).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    image: blog.image,
    author: { '@type': 'Person', name: blog.author },
    publisher: { '@type': 'Organization', name: 'CLAT Scholars' },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
  };

  const cleanContent = sanitize(blog.content || '');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative overflow-hidden bg-navy py-16 md:py-24">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
        <div className="container relative mx-auto max-w-3xl">
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-orange">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange">Blog</Link>
            <span>/</span>
            <span className="text-white/80 line-clamp-1">{blog.title}</span>
          </nav>
          <span className="inline-block rounded-full bg-orange px-3 py-1 text-xs font-heading font-bold text-navy">{blog.category}</span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-white md:text-4xl text-balance">{blog.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-orange" /> {blog.author}</span>
            {blog.createdAt && (
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-orange" /> {new Date(blog.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr,320px]">
          <article>
            {blog.image && (
              <div className="mb-8 overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={blog.image} alt={blog.title} className="w-full object-cover" />
              </div>
            )}
            <div
              className="prose-clat prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            />

            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <span className="text-sm font-heading font-semibold text-navy">Share:</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.clatscholars.com/blog/${blog.slug}`)}`} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy hover:bg-navy hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://www.clatscholars.com/blog/${blog.slug}`)}`} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy hover:bg-navy hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.clatscholars.com/blog/${blog.slug}`)}`} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy hover:bg-navy hover:text-white transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-navy-50 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-orange font-heading font-bold text-lg">
                {blog.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-heading font-semibold text-navy">{blog.author}</p>
                <p className="text-sm text-muted-foreground">Faculty at CLAT Scholars</p>
              </div>
            </div>
          </article>

          <aside>
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-navy">Have a Question?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Fill the form and our team will call you back.</p>
              <div className="mt-4 border-t border-border pt-4">
                <InquiryForm variant="sidebar" compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-navy-50 py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="section-title text-2xl text-center">Related Articles</h2>
            <span className="section-underline mx-auto" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((b) => (
                <Link key={b.slug} href={`/blog/${b.slug}`} className="card-accent group block overflow-hidden">
                  <div className="relative h-36 overflow-hidden bg-navy">
                    {b.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={b.image} alt={b.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                        <span className="font-heading text-lg font-bold text-white/60">{b.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-navy group-hover:text-orange-dark transition-colors line-clamp-2 text-sm">{b.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{b.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-orange-dark hover:underline">
                <ArrowLeft className="h-4 w-4" /> Back to All Blogs
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
