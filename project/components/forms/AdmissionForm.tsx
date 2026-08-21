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
import { getCourses, submitAdmission } from '@/lib/api';
import type { Course } from '@/lib/types';
import { Loader2, CheckCircle2, Upload, User, FileText } from 'lucide-react';

export function AdmissionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [idProof, setIdProof] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(() => {});
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitAdmission({
        name,
        email,
        phone,
        course: course || undefined,
        dob: dob || undefined,
        address: address || undefined,
        message: message || undefined,
        idProof,
        photo,
      });
      setDone(true);
      toast({ title: 'Application Submitted!', description: 'Our admissions team will contact you shortly.' });
    } catch {
      toast({ title: 'Submission failed', description: 'Please try again or call us.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
        <h3 className="font-heading font-bold text-2xl text-navy">Application Submitted!</h3>
        <p className="max-w-md text-muted-foreground">
          Thank you for applying to CLAT Scholars. Our admissions team will review
          your application and contact you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => {
          setDone(false);
          setName(''); setEmail(''); setPhone(''); setCourse(''); setDob(''); setAddress(''); setMessage('');
          setIdProof(null); setPhoto(null);
        }}>
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h3 className="font-heading font-semibold text-navy flex items-center gap-2">
          <User className="h-5 w-5 text-orange-dark" /> Personal Details
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="ad-name">Full Name *</Label>
            <Input id="ad-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your full name" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ad-phone">Phone Number *</Label>
            <Input id="ad-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="10-digit mobile" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ad-email">Email *</Label>
            <Input id="ad-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@email.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ad-dob">Date of Birth</Label>
            <Input id="ad-dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
        </div>
        <div className="mt-4 space-y-1.5">
          <Label htmlFor="ad-address">Address</Label>
          <Textarea id="ad-address" value={address} onChange={(e) => setAddress(e.target.value)} rows={2} placeholder="Your address" />
        </div>
      </div>

      <div>
        <h3 className="font-heading font-semibold text-navy flex items-center gap-2">
          <FileText className="h-5 w-5 text-orange-dark" /> Course Selection
        </h3>
        <div className="mt-4 space-y-1.5">
          <Label>Course *</Label>
          <Select value={course} onValueChange={setCourse} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {courses.length > 0 ? (
                courses.map((c) => (
                  <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>
                ))
              ) : (
                <SelectItem value="general" disabled>Loading courses…</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 space-y-1.5">
          <Label htmlFor="ad-message">Message (optional)</Label>
          <Textarea id="ad-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Tell us about your goals or any questions" />
        </div>
      </div>

      <div>
        <h3 className="font-heading font-semibold text-navy flex items-center gap-2">
          <Upload className="h-5 w-5 text-orange-dark" /> Document Upload
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="ad-idproof">ID Proof</Label>
            <Input
              id="ad-idproof"
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setIdProof(e.target.files?.[0] || null)}
            />
            {idProof && <p className="text-xs text-green-600">Selected: {idProof.name}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ad-photo">Passport Photo</Label>
            <Input
              id="ad-photo"
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
            {photo && <p className="text-xs text-green-600">Selected: {photo.name}</p>}
          </div>
        </div>
      </div>

      <Button type="submit" disabled={loading} className="btn-orange w-full text-base">
        {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
        Submit Application
      </Button>
    </form>
  );
}
