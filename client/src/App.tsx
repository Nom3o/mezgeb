import { useState } from 'react';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from '@/lib/language-context';
import { ThemeProvider } from '@/lib/theme-context';
import GradeSelection from '@/pages/GradeSelection';
import BookBrowser from '@/pages/BookBrowser';

function App() {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
  };

  const handleBack = () => {
    setSelectedGrade(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Toaster />
            {selectedGrade === null ? (
              <GradeSelection onGradeSelect={handleGradeSelect} />
            ) : (
              <BookBrowser grade={selectedGrade} onBack={handleBack} />
            )}
          </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
