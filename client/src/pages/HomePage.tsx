import { useLanguage } from '@/lib/language-context';
import GradeCard from '@/components/GradeCard';
import TopAppBar from '@/components/TopAppBar';

interface HomePageProps {
  onGradeSelect: (grade: number) => void;
}

export default function HomePage({ onGradeSelect }: HomePageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-display mb-4">
            {t('Ethiopian Student Textbooks', 'የኢትዮጵያ የተማሪ መማሪያ መጽሐፍት')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t(
              'Access quality textbooks for grades 9-12',
              'ለክፍል 9-12 ጥራት ያላቸው መማሪያ መጽሐፍትን ያግኙ'
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <GradeCard grade={9} onClick={() => onGradeSelect(9)} />
          <GradeCard grade={10} onClick={() => onGradeSelect(10)} />
          <GradeCard grade={11} onClick={() => onGradeSelect(11)} />
          <GradeCard grade={12} onClick={() => onGradeSelect(12)} />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl p-8 border border-card-border">
            <span className="material-icons text-6xl text-primary mb-4 block">school</span>
            <h3 className="text-section mb-2">
              {t('Welcome to Your Learning Journey', 'ወደ የመማሪያ ጉዞዎ እንኳን በደህና መጡ')}
            </h3>
            <p className="text-muted-foreground max-w-md">
              {t(
                'Browse textbooks, save your favorites, and get AI assistance for your studies.',
                'መማሪያ መጽሐፍትን ያስሱ፣ ተወዳጆችዎን ያስቀምጡ እና ለጥናትዎ AI እርዳታ ያግኙ።'
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
