import { useState, useMemo } from 'react';
import { useLanguage } from '@/lib/language-context';
import TopAppBar from '@/components/TopAppBar';
import SearchBar from '@/components/SearchBar';
import SubjectFilter from '@/components/SubjectFilter';
import BookCard from '@/components/BookCard';
import BookPreviewModal from '@/components/BookPreviewModal';
import EmptyState from '@/components/EmptyState';
import textbooksData from '@/data/textbooks.json';

interface BookBrowserProps {
  grade: number;
  onBack: () => void;
}

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

export default function BookBrowser({ grade, onBack }: BookBrowserProps) {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books = textbooksData.filter((book) => book.grade === grade) as Book[];

  const subjects = useMemo(() => {
    const uniqueSubjects = Array.from(new Set(books.map((book) => book.subject)));
    return uniqueSubjects.sort();
  }, [books]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        searchQuery === '' ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.titleAm.includes(searchQuery) ||
        book.subject.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSubject = activeSubject === null || book.subject === activeSubject;

      return matchesSearch && matchesSubject;
    });
  }, [books, searchQuery, activeSubject]);

  const handleReset = () => {
    setSearchQuery('');
    setActiveSubject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopAppBar showBack onBack={onBack} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-page-title mb-2">
            {t(`Grade ${grade} Textbooks`, `ክፍል ${grade} መማሪያ መጽሐፍት`)}
          </h2>
          <p className="text-muted-foreground">
            {t(
              `Browse ${books.length} textbooks for grade ${grade}`,
              `${books.length} መማሪያ መጽሐፍቶችን ይመልከቱ`
            )}
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <SearchBar onSearch={setSearchQuery} />
          <SubjectFilter
            subjects={subjects}
            activeSubject={activeSubject}
            onSubjectChange={setActiveSubject}
          />
        </div>

        {filteredBooks.length === 0 ? (
          <EmptyState onReset={handleReset} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredBooks.map((book) => (
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
                description: language === 'am' ? selectedBook.descriptionAm : selectedBook.description,
                driveUrl: selectedBook.driveUrl,
              }
            : null
        }
      />
    </div>
  );
}
