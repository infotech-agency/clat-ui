import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  image: string;
  alt: string;
  href?: string;
}

export function BannerTop({ image, alt, href }: BannerProps) {
  const content = (
    <div className="relative w-full">
      <Image
        src='/banners/banner-top.png'
        alt={alt}
        width={1920}
        height={640}
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );

  return (
    <section className="w-full">
      {href ? (
        <Link href={href} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </section>
  );
}