import { LanguageProvider } from '@/lib/language-context';
import LanguageToggle from '../LanguageToggle';

export default function LanguageToggleExample() {
  return (
    <LanguageProvider>
      <div className="p-6">
        <LanguageToggle />
      </div>
    </LanguageProvider>
  );
}
