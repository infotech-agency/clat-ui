import { HeroSlider } from '@/components/home/HeroSlider';
import { TrustStats } from '@/components/home/TrustStats';
import { AboutSection } from '@/components/home/AboutSection';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CoursesGrid } from '@/components/home/CoursesGrid';
import { TestSeriesPricing } from '@/components/home/TestSeriesPricing';
import { FacultySection } from '@/components/home/FacultySection';
import { VideoTestimonials } from '@/components/home/VideoTestimonials';
import { AlumniSection } from '@/components/home/AlumniSection';
import { TeamQuotes } from '@/components/home/TeamQuotes';
import { CentresSection } from '@/components/home/CentresSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTABanner } from '@/components/home/CTABanner';
import { BlogPreview } from '@/components/home/BlogPreview';
import { TilesSection } from '@/components/home/TileSection';
import { GallerySection } from '@/components/home/GallerySection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustStats />
      <AboutSection />
      <ProcessSteps />
      <WhyChooseUs />
      <CoursesGrid />
      <GallerySection/>
      <TestSeriesPricing />
      <TilesSection/>
      <FacultySection />
      <VideoTestimonials />
      <AlumniSection />
      <TeamQuotes />
      <CentresSection />
      <FAQSection />
      <CTABanner />
      <BlogPreview />
    </>
  );
}
