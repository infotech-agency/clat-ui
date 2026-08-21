import { StatCounter } from '@/components/shared/StatCounter';

const STATS = [
  { value: 3, suffix: '', label: 'Centres in Delhi NCR' },
  { value: 5000, suffix: '+', label: 'Students Mentored' },
  { value: 12, suffix: '+', label: 'Expert Advocate Faculty' },
  { value: 1, suffix: '-on-1', label: 'Personal Mentorship' },
];

export function TrustStats() {
  return (
    <section className="bg-navy py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
