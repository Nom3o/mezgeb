import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/language-context';
import { ScrollArea } from '@/components/ui/scroll-area';

interface BookPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: {
    title: string;
    subject: string;
    grade: number;
    description?: string;
    driveUrl: string;
  } | null;
}

export default function BookPreviewModal({ open, onOpenChange, book }: BookPreviewModalProps) {
  const { t } = useLanguage();

  if (!book) return null;

  const handleDownload = () => {
    console.log('Downloading:', book.title);
    window.open(book.driveUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <DialogTitle className="text-section">{book.title}</DialogTitle>
              <div className="flex gap-2">
                <Badge>{book.subject}</Badge>
                <Badge variant="secondary">{t(`Grade ${book.grade}`, `ክፍል ${book.grade}`)}</Badge>
              </div>
            </div>
            <Button onClick={handleDownload} data-testid="button-download">
              <span className="material-icons text-[20px] mr-2">download</span>
              {t('Download', 'አውርድ')}
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            <div className="w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <iframe
                src={`${book.driveUrl}/preview`}
                className="w-full h-full border-0"
                title={book.title}
              />
            </div>

            {book.description && (
              <div className="space-y-2">
                <h3 className="font-semibold">{t('About this book', 'ስለዚህ መጽሐፍ')}</h3>
                <p className="text-muted-foreground">{book.description}</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
