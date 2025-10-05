import { useState } from 'react';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from '@/lib/language-context';
import { ThemeProvider } from '@/lib/theme-context';
import { FavoritesProvider } from '@/lib/favorites-context';
import HomePage from '@/pages/HomePage';
import BookBrowser from '@/pages/BookBrowser';
import FavoritesPage from '@/pages/FavoritesPage';
import AIPage from '@/pages/AIPage';
import SettingsPage from '@/pages/SettingsPage';
import BottomNav from '@/components/BottomNav';

type Page = 'home' | 'favorites' | 'ai' | 'settings';

function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
  };

  const handleBack = () => {
    setSelectedGrade(null);
  };

  const renderPage = () => {
    if (selectedGrade !== null) {
      return <BookBrowser grade={selectedGrade} onBack={handleBack} />;
    }

    switch (activePage) {
      case 'home':
        return <HomePage onGradeSelect={handleGradeSelect} />;
      case 'favorites':
        return <FavoritesPage />;
      case 'ai':
        return <AIPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage onGradeSelect={handleGradeSelect} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <LanguageProvider>
            <FavoritesProvider>
              <Toaster />
              {renderPage()}
              {selectedGrade === null && (
                <BottomNav activePage={activePage} onPageChange={setActivePage} />
              )}
            </FavoritesProvider>
          </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
