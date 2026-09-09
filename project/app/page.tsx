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
import { SubjectsMastery } from '@/components/home/SubjectMastery';
import { BannerTop } from '@/components/Banners/BannerTop';
import { BannerMid } from '@/components/Banners/BannerMid';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <SubjectsMastery/>
      <BannerTop/>
      <TrustStats />
      <AboutSection />
      <ProcessSteps />
      <WhyChooseUs />
      <BannerMid/>
      <CoursesGrid />
      <GallerySection/>
      <TestSeriesPricing />
      <TilesSection/>
      <FacultySection />
        <TeamQuotes />
      <VideoTestimonials />
      <AlumniSection />
    
      <CentresSection />
      <FAQSection />
      <CTABanner />
      <BlogPreview />
    </>
  );
}
