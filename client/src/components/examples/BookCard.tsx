import { LanguageProvider } from '@/lib/language-context';
import BookCard from '../BookCard';

export default function BookCardExample() {
  return (
    <LanguageProvider>
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
        <BookCard
          id="1"
          title="Mathematics Grade 9"
          subject="Mathematics"
          onClick={() => console.log('Book clicked')}
        />
        <BookCard
          id="2"
          title="Physics Textbook for Grade 10 Students"
          subject="Physics"
          onClick={() => console.log('Book clicked')}
        />
        <BookCard
          id="3"
          title="Chemistry"
          subject="Chemistry"
          onClick={() => console.log('Book clicked')}
        />
      </div>
    </LanguageProvider>
  );
}
