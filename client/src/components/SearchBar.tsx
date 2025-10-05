import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const defaultPlaceholder = t('Search textbooks...', 'መማሪያ መጽሐፍት ፈልግ...');

  return (
    <div className="relative">
      <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
        search
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || defaultPlaceholder}
        className="w-full h-12 pl-12 pr-4 rounded-full bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        data-testid="input-search"
      />
    </div>
  );
}
