export interface Seo {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface CourseModule {
  title: string;
  topics: string[];
  duration: string;
  order: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  _id?: string;
  name: string;
  slug: string;
  price: number;
  duration: string;
  description: string;
  category: string;
  featured: boolean;
  mode: 'online' | 'offline';
  targetClass: string;
  batchType: string;
  weeklyClasses: string;
  totalMocks: string | number;
  doubtSessions: string;
  mentorship: string;
  onlinePlatformIncluded: boolean;
  monthlyGK: string;
  mockAnalysis: string;
  sectionalTestIncluded: boolean;
  subjectsCovered: string[];
  modules: CourseModule[];
  syllabus: string[];
  highlights: string[];
  tools: string[];
  whoCanJoin: string[];
  careerOptions: string[];
  faqs: FAQ[];
  seo: Seo;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Blog {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featured: boolean;
  seo: Seo;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Placement {
  _id?: string;
  studentName: string;
  companyName: string;
  role: string;
  isFeatured: boolean;
  order: number;
  studentImage?: string;
  companyLogo?: string;
}

export interface Testimonial {
  _id?: string;
  title: string;
  description: string;
  youtubeUrl: string;
  isActive: boolean;
  sortOrder: number;
}

export interface CourseTile {
  _id?: string;
  courseName: string;
  description: string;
  price: number;
  image?: string;
}

export interface AdmissionPayload {
  name: string;
  email: string;
  phone: string;
  course?: string;
  dob?: string;
  address?: string;
  message?: string;
  idProof?: File | null;
  photo?: File | null;
}
