import { useLanguage } from '@/lib/language-context';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

interface TopAppBarProps {
  onBack?: () => void;
  showBack?: boolean;
}

export default function TopAppBar({ onBack, showBack }: TopAppBarProps) {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 h-16 flex items-center justify-between px-4 bg-background border-b border-border shadow-sm">
      <div className="flex items-center gap-3">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="flex items-center justify-center w-9 h-9 rounded-md hover-elevate active-elevate-2"
            data-testid="button-back"
          >
            <span className="material-icons">arrow_back</span>
          </button>
        )}
        <h1 className="text-lg font-semibold">
          {t('Ethiopian Textbooks', 'የኢትዮጵያ መማሪያ መጽሐፍት')}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
}
