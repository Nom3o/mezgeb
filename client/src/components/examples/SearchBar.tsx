import { LanguageProvider } from '@/lib/language-context';
import SearchBar from '../SearchBar';

export default function SearchBarExample() {
  return (
    <LanguageProvider>
      <div className="p-6 max-w-2xl">
        <SearchBar onSearch={(q) => console.log('Search:', q)} />
      </div>
    </LanguageProvider>
  );
}
