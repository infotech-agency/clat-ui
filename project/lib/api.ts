// // import type {
// //   Course,
// //   Blog,
// //   Placement,
// //   Testimonial,
// //   CourseTile,
// //   AdmissionPayload,
// // } from './types';

// // const API_URL =
// //   process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'http://localhost:5000';

// // async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
// //   const res = await fetch(`${API_URL}${path}`, {
// //     ...init,
// //     headers: { Accept: 'application/json', ...(init?.headers || {}) },
// //     cache: 'no-store',
// //   });
// //   if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
// //   const text = await res.text();
// //   try {
// //     return JSON.parse(text) as T;
// //   } catch {
// //     return text as unknown as T;
// //   }
// // }

// // export function getCourses(): Promise<Course[]> {
// //   return apiFetch<Course[]>('/api/courses');
// // }

// // export function getCoursesFiltered(params: Record<string, string>): Promise<Course[]> {
// //   const qs = new URLSearchParams(params).toString();
// //   return apiFetch<Course[]>(`/api/courses?${qs}`);
// // }

// // export function getCourseBySlug(slug: string): Promise<Course | null> {
// //   return apiFetch<Course | null>(`/api/courses/${slug}`).catch(() => null);
// // }

// // export function getBlogs(): Promise<Blog[]> {
// //   return apiFetch<Blog[]>('/api/blogs');
// // }

// // export function getBlogBySlug(slug: string): Promise<Blog | null> {
// //   return apiFetch<Blog | null>(`/api/blogs/${slug}`).catch(() => null);
// // }

// // // export function getPlacements(): Promise<Placement[]> {
// // //   return apiFetch<Placement[]>('/api/placements');
// // // }

// // type PlacementsResponse = {
// //   success: boolean;
// //   count: number;
// //   data: Placement[];
// // };

// // export async function getPlacements(): Promise<Placement[]> {
// //   const response = await apiFetch<PlacementsResponse>('/api/placements');

// //   return response.data || [];
// // }

// // export function getTestimonials(): Promise<Testimonial[]> {
// //   return apiFetch<Testimonial[]>('/api/testimonials/active');
// // }

// // export function getTiles(): Promise<CourseTile[]> {
// //   return apiFetch<CourseTile[]>('/api/tiles');
// // }

// // export async function submitAdmission(payload: AdmissionPayload): Promise<{ ok: boolean }> {
// //   const form = new FormData();
// //   form.append('name', payload.name);
// //   form.append('email', payload.email);
// //   form.append('phone', payload.phone);
// //   if (payload.course) form.append('course', payload.course);
// //   if (payload.dob) form.append('dob', payload.dob);
// //   if (payload.address) form.append('address', payload.address);
// //   if (payload.message) form.append('message', payload.message);
// //   if (payload.idProof) form.append('idProof', payload.idProof);
// //   if (payload.photo) form.append('photo', payload.photo);

// //   const res = await fetch(`${API_URL}/api/admission`, {
// //     method: 'POST',
// //     body: form,
// //   });
// //   if (!res.ok) throw new Error(`Admission submit failed: ${res.status}`);
// //   return { ok: true };
// // }

// import type {
//   Course,
//   Blog,
//   Placement,
//   Testimonial,
//   CourseTile,
//   AdmissionPayload,
//   InquiryPayload,
// } from './types';

// const API_URL =
//   process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'http://localhost:5000';

// async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
//   const res = await fetch(`${API_URL}${path}`, {
//     ...init,
//     headers: { Accept: 'application/json', ...(init?.headers || {}) },
//     cache: 'no-store',
//   });
//   if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
//   const text = await res.text();
//   try {
//     return JSON.parse(text) as T;
//   } catch {
//     return text as unknown as T;
//   }
// }

// export function getCourses(): Promise<Course[]> {
//   return apiFetch<Course[]>('/api/courses');
// }

// export function getCoursesFiltered(params: Record<string, string>): Promise<Course[]> {
//   const qs = new URLSearchParams(params).toString();
//   return apiFetch<Course[]>(`/api/courses?${qs}`);
// }

// export function getCourseBySlug(slug: string): Promise<Course | null> {
//   return apiFetch<Course | null>(`/api/courses/${slug}`).catch(() => null);
// }

// export function getBlogs(): Promise<Blog[]> {
//   return apiFetch<Blog[]>('/api/blogs');
// }

// export function getBlogBySlug(slug: string): Promise<Blog | null> {
//   return apiFetch<Blog | null>(`/api/blogs/${slug}`).catch(() => null);
// }

// // export function getPlacements(): Promise<Placement[]> {
// //   return apiFetch<Placement[]>('/api/placements');
// // }

// type PlacementsResponse = {
//   success: boolean;
//   count: number;
//   data: Placement[];
// };

// export async function getPlacements(): Promise<Placement[]> {
//   const response = await apiFetch<PlacementsResponse>('/api/placements');

//   return response.data || [];
// }

// export function getTestimonials(): Promise<Testimonial[]> {
//   return apiFetch<Testimonial[]>('/api/testimonials/active');
// }

// export function getTiles(): Promise<CourseTile[]> {
//   return apiFetch<CourseTile[]>('/api/tiles');
// }

// export async function submitAdmission(payload: AdmissionPayload): Promise<{ ok: boolean }> {
//   const form = new FormData();
//   form.append('name', payload.name);
//   form.append('email', payload.email);
//   form.append('phone', payload.phone);
//   if (payload.course) form.append('course', payload.course);
//   if (payload.dob) form.append('dob', payload.dob);
//   if (payload.address) form.append('address', payload.address);
//   if (payload.message) form.append('message', payload.message);
//   if (payload.idProof) form.append('idProof', payload.idProof);
//   if (payload.photo) form.append('photo', payload.photo);

//   const res = await fetch(`${API_URL}/api/admission`, {
//     method: 'POST',
//     body: form,
//   });
//   if (!res.ok) throw new Error(`Admission submit failed: ${res.status}`);
//   return { ok: true };
// }

// type InquiryResponse = {
//   success: boolean;
//   message: string;
//   data: unknown;
// };

// export async function submitInquiry(payload: InquiryPayload): Promise<{ ok: boolean }> {
//   await apiFetch<InquiryResponse>('/api/inquiries', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   return { ok: true };
// }

import type {
  Course,
  Blog,
  Placement,
  Testimonial,
  CourseTile,
  AdmissionPayload,
  InquiryPayload,
} from './types';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || 'http://localhost:5000';

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { Accept: 'application/json', ...(init?.headers || {}) },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  const text = await res.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    return text as unknown as T;
  }
}

export function getCourses(): Promise<Course[]> {
  return apiFetch<Course[]>('/api/courses');
}

export function getCoursesFiltered(params: Record<string, string>): Promise<Course[]> {
  const qs = new URLSearchParams(params).toString();
  return apiFetch<Course[]>(`/api/courses?${qs}`);
}

export function getCourseBySlug(slug: string): Promise<Course | null> {
  return apiFetch<Course | null>(`/api/courses/${slug}`).catch(() => null);
}

export function getBlogs(): Promise<Blog[]> {
  return apiFetch<Blog[]>('/api/blogs');
}

export function getBlogBySlug(slug: string): Promise<Blog | null> {
  return apiFetch<Blog | null>(`/api/blogs/${slug}`).catch(() => null);
}

// export function getPlacements(): Promise<Placement[]> {
//   return apiFetch<Placement[]>('/api/placements');
// }

type PlacementsResponse = {
  success: boolean;
  count: number;
  data: Placement[];
};

export async function getPlacements(): Promise<Placement[]> {
  const response = await apiFetch<PlacementsResponse>('/api/placements');

  return response.data || [];
}

export function getTestimonials(): Promise<Testimonial[]> {
  return apiFetch<Testimonial[]>('/api/testimonials/active');
}

export function getTiles(): Promise<CourseTile[]> {
  return apiFetch<CourseTile[]>('/api/tiles');
}

// --- Faculty ---
// NOTE: ideally move this type into ./types.ts alongside Course/Blog/etc.
// Left here so this file works standalone even if you haven't touched types.ts yet.
export type Faculty = {
  _id: string;
  name: string;
  designation?: string;
  department?: string;
  qualification?: string;
  experience?: string;
  email?: string;
  phone?: string;
  bio?: string;
  subjects?: string;
  image?: string | null;
  featured?: boolean;
  order?: number;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
};

export async function getFaculty(): Promise<Faculty[]> {
  try {
    return await apiFetch<Faculty[]>('/api/faculty');
  } catch {
    // Fail soft on the public site — an empty array just hides the section
    // instead of crashing the About page if the backend is briefly down.
    return [];
  }
}

export async function submitAdmission(payload: AdmissionPayload): Promise<{ ok: boolean }> {
  const form = new FormData();
  form.append('name', payload.name);
  form.append('email', payload.email);
  form.append('phone', payload.phone);
  if (payload.course) form.append('course', payload.course);
  if (payload.dob) form.append('dob', payload.dob);
  if (payload.address) form.append('address', payload.address);
  if (payload.message) form.append('message', payload.message);
  if (payload.idProof) form.append('idProof', payload.idProof);
  if (payload.photo) form.append('photo', payload.photo);

  const res = await fetch(`${API_URL}/api/admission`, {
    method: 'POST',
    body: form,
  });
  if (!res.ok) throw new Error(`Admission submit failed: ${res.status}`);
  return { ok: true };
}

type InquiryResponse = {
  success: boolean;
  message: string;
  data: unknown;
};

export async function submitInquiry(payload: InquiryPayload): Promise<{ ok: boolean }> {
  await apiFetch<InquiryResponse>('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return { ok: true };
}