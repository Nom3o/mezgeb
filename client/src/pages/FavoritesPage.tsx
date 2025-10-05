import { useState, useMemo } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useFavorites } from '@/lib/favorites-context';
import TopAppBar from '@/components/TopAppBar';
import BookCard from '@/components/BookCard';
import BookPreviewModal from '@/components/BookPreviewModal';
import textbooksData from '@/data/textbooks.json';

interface Book {
  id: string;
  title: string;
  titleAm: string;
  subject: string;
  grade: number;
  description: string;
  descriptionAm: string;
  driveUrl: string;
}

export default function FavoritesPage() {
  const { t, language } = useLanguage();
  const { favorites } = useFavorites();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const favoriteBooks = useMemo(() => {
    return (textbooksData as Book[]).filter((book) => favorites.has(book.id));
  }, [favorites]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-page-title mb-2">
            {t('My Favorites', 'የእኔ ተወዳጆች')}
          </h2>
          <p className="text-muted-foreground">
            {t(
              `You have ${favoriteBooks.length} favorite textbook${favoriteBooks.length !== 1 ? 's' : ''}`,
              `${favoriteBooks.length} ተወዳጅ መማሪያ መጽሐፍት አሎት`
            )}
          </p>
        </div>

        {favoriteBooks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <span className="material-icons text-5xl text-muted-foreground">favorite_border</span>
            </div>
            <h3 className="text-section mb-2">
              {t('No favorites yet', 'ገና ተወዳጆች የሉም')}
            </h3>
            <p className="text-muted-foreground max-w-md">
              {t(
                'Start adding textbooks to your favorites by clicking the heart icon.',
                'የልብ አዶውን በመጫን መማሪያ መጽሐፍትን ወደ ተወዳጆችዎ መጨመር ይጀምሩ።'
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {favoriteBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={language === 'am' ? book.titleAm : book.title}
                subject={book.subject}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </div>
        )}
      </main>

      <BookPreviewModal
        open={!!selectedBook}
        onOpenChange={(open) => !open && setSelectedBook(null)}
        book={
          selectedBook
            ? {
                title: language === 'am' ? selectedBook.titleAm : selectedBook.title,
                subject: selectedBook.subject,
                grade: selectedBook.grade,
                description:
                  language === 'am' ? selectedBook.descriptionAm : selectedBook.description,
                driveUrl: selectedBook.driveUrl,
              }
            : null
        }
      />
    </div>
  );
}
