import Image from 'next/image';
import Link from 'next/link';

interface Subject {
  title: string;
  description: string;
  image: string;
}

const subjects: Subject[] = [
  {
    title: 'English Language',
    description: 'Reading Skills, Comprehension, Figures of Speech, Tones, Vocabulary, Title.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaRHVvH4UCUYz41xmX7smnOml0jD2H9g5-p6B9Ffo3UZWhuSZ3ZowKOM&s=10',
  },
  {
    title: 'General Knowledge & Current Affairs',
    description: 'Everything Under the Sun Polity, International Affairs, Awards, Appointments, Sports.',
    image: 'https://static.vecteezy.com/system/resources/previews/020/784/801/non_2x/general-knowledge-icon-vector.jpg',
  },
  {
    title: 'Legal Reasoning & Knowledge',
    description: 'Think Like a Lawyer. Understanding of Legal Jargon. Reasoning Skills. Legal Passages.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gKgnP_WPpMcdVxz87G6_iL2Dm9j7cuY8T5qxsR25QQ&s=10',
  },
  {
    title: 'Logical Reasoning (Critical & Analytical)',
    description: 'Exercise Your Brain. Pattern Spotting, Strengthening & Weakening Arguments. Puzzles.',
    image: 'https://cdn-icons-png.magnific.com/512/14596/14596549.png',
  },
  {
    title: 'Quantitative Techniques',
    description: 'What You Likely Hate Most. Officially Class 10th Maths. Realistically, Class 8th Maths.',
    image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/quantitative-research-icon-svg-download-png-10939482.png',
  },
];

export function SubjectsMastery() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-heading font-bold text-navy text-3xl md:text-4xl leading-tight">
          The Subjects We Help You Master
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {subjects.map((subject) => (
            <div key={subject.title} className="flex flex-col items-center text-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-border shadow-sm">
                <Image
                  src={subject.image}
                  alt={subject.title}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-5 font-heading font-semibold text-navy text-xl leading-snug text-balance">
                {subject.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                {subject.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="btn-navy">
            Start Your Preparation
          </Link>
        </div>
      </div>
    </section>
  );
}