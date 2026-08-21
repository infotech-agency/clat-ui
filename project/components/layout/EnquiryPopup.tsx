'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Sparkles } from 'lucide-react';
import { InquiryForm } from '@/components/forms/InquiryForm';

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   if (typeof window === 'undefined') return;
  //   const dismissed = sessionStorage.getItem('clat_enquiry_shown');
  //   if (dismissed) return;

  //   const timer = setTimeout(() => {
  //     setOpen(true);
  //     sessionStorage.setItem('clat_enquiry_shown', '1');
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);
useEffect(() => {
  if (typeof window === 'undefined') return;

  const dismissed = sessionStorage.getItem('clat_enquiry_shown');
  if (dismissed) return;

  const timer = setTimeout(() => {
    setOpen(true);
    sessionStorage.setItem('clat_enquiry_shown', '1');
  }, 3000);

  return () => clearTimeout(timer);
}, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-orange/15">
            <Sparkles className="h-6 w-6 text-orange-dark" />
          </div>
          <DialogTitle className="font-heading text-2xl text-navy">
            Get Free Counselling
          </DialogTitle>
          <DialogDescription>
            Speak with our academic counsellors and book a free demo class at
            your nearest centre. No commitment required.
          </DialogDescription>
        </DialogHeader>
        <InquiryForm variant="popup" compact />
      </DialogContent>
    </Dialog>
  );
}
