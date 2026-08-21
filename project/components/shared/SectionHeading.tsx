import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {kicker && <span className="section-kicker">{kicker}</span>}
      <h2
        className={cn(
          'section-title mt-2',
          light && 'text-white'
        )}
      >
        {title}
      </h2>
      <span className="section-underline" />
      {description && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
