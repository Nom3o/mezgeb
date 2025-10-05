import { LanguageProvider } from '@/lib/language-context';
import { ThemeProvider } from '@/lib/theme-context';
import TopAppBar from '../TopAppBar';

export default function TopAppBarExample() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <TopAppBar showBack onBack={() => console.log('Back clicked')} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
