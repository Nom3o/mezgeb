import { useState } from 'react';
import { LanguageProvider } from '@/lib/language-context';
import BookPreviewModal from '../BookPreviewModal';
import { Button } from '@/components/ui/button';

export default function BookPreviewModalExample() {
  const [open, setOpen] = useState(false);

  const sampleBook = {
    title: 'Mathematics Grade 9',
    subject: 'Mathematics',
    grade: 9,
    description: 'Comprehensive mathematics textbook covering algebra, geometry, and calculus fundamentals for grade 9 students.',
    driveUrl: 'https://drive.google.com/file/d/sample',
  };

  return (
    <LanguageProvider>
      <div className="p-6">
        <Button onClick={() => setOpen(true)}>Open Preview Modal</Button>
        <BookPreviewModal open={open} onOpenChange={setOpen} book={sampleBook} />
      </div>
    </LanguageProvider>
  );
}
