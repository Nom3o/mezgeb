import { useLanguage } from '@/lib/language-context';

type NavPage = 'home' | 'favorites' | 'ai' | 'settings';

interface BottomNavProps {
  activePage: NavPage;
  onPageChange: (page: NavPage) => void;
}

export default function BottomNav({ activePage, onPageChange }: BottomNavProps) {
  const { t } = useLanguage();

  const navItems: { page: NavPage; icon: string; label: string; labelAm: string }[] = [
    { page: 'home', icon: 'home', label: 'Home', labelAm: 'መነሻ' },
    { page: 'favorites', icon: 'favorite', label: 'Favorites', labelAm: 'ተወዳጆች' },
    { page: 'ai', icon: 'smart_toy', label: 'AI Assistant', labelAm: 'AI ረዳት' },
    { page: 'settings', icon: 'settings', label: 'Settings', labelAm: 'ቅንብሮች' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-card-border">
      <div className="flex items-center justify-around h-16 max-w-7xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onPageChange(item.page)}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
              activePage === item.page
                ? 'text-primary'
                : 'text-muted-foreground hover-elevate'
            }`}
            data-testid={`nav-${item.page}`}
          >
            <span className="material-icons text-2xl">{item.icon}</span>
            <span className="text-xs font-medium">{t(item.label, item.labelAm)}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
