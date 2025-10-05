import { useLanguage } from '@/lib/language-context';
import GradeCard from '@/components/GradeCard';
import TopAppBar from '@/components/TopAppBar';

interface GradeSelectionProps {
  onGradeSelect: (grade: number) => void;
}

export default function GradeSelection({ onGradeSelect }: GradeSelectionProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <TopAppBar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-display mb-4">
            {t('Select Your Grade', 'ክፍልዎን ይምረጡ')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t(
              'Choose your grade level to browse available textbooks',
              'ያሉትን መማሪያ መጽሐፍት ለማሰስ የክፍል ደረጃዎን ይምረጡ'
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <GradeCard grade={9} onClick={() => onGradeSelect(9)} />
          <GradeCard grade={10} onClick={() => onGradeSelect(10)} />
          <GradeCard grade={11} onClick={() => onGradeSelect(11)} />
          <GradeCard grade={12} onClick={() => onGradeSelect(12)} />
        </div>
      </main>
    </div>
  );
}
