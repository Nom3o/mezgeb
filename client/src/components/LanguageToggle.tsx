import { useLanguage } from '@/lib/language-context';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
      className="flex items-center gap-1 px-4 h-9 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover-elevate active-elevate-2"
      data-testid="button-language-toggle"
    >
      <span className="material-icons text-[20px]">language</span>
      <span>{language === 'en' ? 'አማ' : 'EN'}</span>
    </button>
  );
}
