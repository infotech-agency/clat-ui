// 'use client';

// import { useState, useEffect } from 'react';
// import { useToast } from '@/hooks/use-toast';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from '@/components/ui/select';
// import { getCourses, submitAdmission } from '@/lib/api';
// import { Loader2, CheckCircle2 } from 'lucide-react';
// import { cn } from '@/lib/utils';

// type Variant = 'popup' | 'sidebar' | 'footer' | 'inline';

// interface InquiryFormProps {
//   variant?: Variant;
//   lockedCourse?: string;
//   compact?: boolean;
// }

// export function InquiryForm({ variant = 'inline', lockedCourse, compact = false }: InquiryFormProps) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [course, setCourse] = useState(lockedCourse || '');
//   const [message, setMessage] = useState('');
//   const [courses, setCourses] = useState<{ name: string }[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);
//   const { toast } = useToast();

//   useEffect(() => {
//     getCourses()
//       .then((c) => setCourses(c))
//       .catch(() => {});
//   }, []);

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await submitAdmission({ name, email, phone, course: course || undefined, message: message || undefined });
//       setDone(true);
//       toast({ title: 'Thank you!', description: 'Our team will reach out within 24 hours.' });
//     } catch {
//       toast({ title: 'Something went wrong', description: 'Please try again or call us.', variant: 'destructive' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (done) {
//     return (
//       <div className={cn('flex flex-col items-center justify-center gap-3 py-8 text-center')}>
//         <CheckCircle2 className="h-12 w-12 text-green-500" />
//         <p className="font-heading font-semibold text-navy">Thank you for reaching out!</p>
//         <p className="text-sm text-muted-foreground">
//           Our admissions team will contact you within 24 hours.
//         </p>
//         <Button variant="outline" size="sm" onClick={() => setDone(false)}>
//           Submit another enquiry
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={onSubmit} className={cn('space-y-3', compact && 'space-y-2.5')}>
//       <div className="grid gap-3 sm:grid-cols-2">
//         <div className="space-y-1.5">
//           <Label htmlFor={`name-${variant}`} className="text-xs">Name</Label>
//           <Input id={`name-${variant}`} value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
//         </div>
//         <div className="space-y-1.5">
//           <Label htmlFor={`phone-${variant}`} className="text-xs">Phone</Label>
//           <Input id={`phone-${variant}`} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="10-digit mobile" />
//         </div>
//       </div>
//       <div className="space-y-1.5">
//         <Label htmlFor={`email-${variant}`} className="text-xs">Email</Label>
//         <Input id={`email-${variant}`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@email.com" />
//       </div>
//       <div className="space-y-1.5">
//         <Label className="text-xs">Course</Label>
//         {lockedCourse ? (
//           <Input value={lockedCourse} disabled className="bg-muted" />
//         ) : (
//           <Select value={course} onValueChange={setCourse}>
//             <SelectTrigger className="h-10">
//               <SelectValue placeholder="Select a course" />
//             </SelectTrigger>
//             <SelectContent>
//               {courses.length > 0 ? (
//                 courses.map((c) => (
//                   <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
//                 ))
//               ) : (
//                 <SelectItem value="general" disabled>Loading courses…</SelectItem>
//               )}
//             </SelectContent>
//           </Select>
//         )}
//       </div>
//       {!compact && (
//         <div className="space-y-1.5">
//           <Label htmlFor={`msg-${variant}`} className="text-xs">Message (optional)</Label>
//           <Textarea id={`msg-${variant}`} value={message} onChange={(e) => setMessage(e.target.value)} rows={2} placeholder="Tell us about your goals" />
//         </div>
//       )}
//       <Button type="submit" disabled={loading} className="btn-orange w-full">
//         {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
//         Get Free Counselling
//       </Button>
//     </form>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { getCourses, submitInquiry } from '@/lib/api';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'popup' | 'sidebar' | 'footer' | 'inline';

interface InquiryFormProps {
  variant?: Variant;
  lockedCourse?: string;
  compact?: boolean;
}

export function InquiryForm({ variant = 'inline', lockedCourse, compact = false }: InquiryFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(lockedCourse || '');
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    getCourses()
      .then((c) => setCourses(c))
      .catch(() => {});
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitInquiry({
        name,
        email,
        phone,
        course: course || undefined,
        message: message || undefined,
        source: variant,
      });
      setDone(true);
      toast({ title: 'Thank you!', description: 'Our team will reach out within 24 hours.' });
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again or call us.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className={cn('flex flex-col items-center justify-center gap-3 py-8 text-center')}>
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <p className="font-heading font-semibold text-navy">Thank you for reaching out!</p>
        <p className="text-sm text-muted-foreground">
          Our admissions team will contact you within 24 hours.
        </p>
        <Button variant="outline" size="sm" onClick={() => setDone(false)}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn('space-y-3', compact && 'space-y-2.5')}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={`name-${variant}`} className="text-xs">Name</Label>
          <Input id={`name-${variant}`} value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`phone-${variant}`} className="text-xs">Phone</Label>
          <Input id={`phone-${variant}`} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="10-digit mobile" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`email-${variant}`} className="text-xs">Email</Label>
        <Input id={`email-${variant}`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@email.com" />
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs">Course</Label>
        {lockedCourse ? (
          <Input value={lockedCourse} disabled className="bg-muted" />
        ) : (
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {courses.length > 0 ? (
                courses.map((c) => (
                  <SelectItem className='text-black' key={c.name} value={c.name}>{c.name}</SelectItem>
                ))
              ) : (
                <SelectItem value="general" disabled>Loading courses…</SelectItem>
              )}
            </SelectContent>
          </Select>
        )}
      </div>
      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor={`msg-${variant}`} className="text-xs">Message (optional)</Label>
          <Textarea className='text-black' id={`msg-${variant}`} value={message} onChange={(e) => setMessage(e.target.value)} rows={2} placeholder="Tell us about your goals" />
        </div>
      )}
      <Button type="submit" disabled={loading} className="btn-orange w-full">
        {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
        Get Free Counselling
      </Button>
    </form>
  );
}