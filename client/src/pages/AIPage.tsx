import { useLanguage } from '@/lib/language-context';
import TopAppBar from '@/components/TopAppBar';
import { Button } from '@/components/ui/button';

export default function AIPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 animate-pulse">
            <span className="material-icons text-7xl text-primary">smart_toy</span>
          </div>
          
          <h2 className="text-display mb-4">
            {t('AI Study Assistant', 'AI የጥናት ረዳት')}
          </h2>
          
          <div className="max-w-2xl space-y-6 mb-8">
            <p className="text-lg text-muted-foreground">
              {t(
                'Your intelligent study companion is coming soon!',
                'እርስዎ የማሰብ ችሎታ ያለው የጥናት ጓደኛ በቅርቡ ይመጣል!'
              )}
            </p>
            
            <div className="bg-card rounded-2xl p-6 border border-card-border text-left">
              <h3 className="font-semibold text-lg mb-4">
                {t('Features coming soon:', 'በቅርቡ የሚመጡ ባህሪያት፡')}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="material-icons text-primary">check_circle</span>
                  <span>
                    {t(
                      'Get instant answers to your study questions',
                      'ለጥናት ጥያቄዎችዎ ፈጣን መልሶችን ያግኙ'
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons text-primary">check_circle</span>
                  <span>
                    {t(
                      'Personalized study recommendations',
                      'የግል የጥናት ምክሮች'
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons text-primary">check_circle</span>
                  <span>
                    {t(
                      'Homework help and explanations',
                      'የቤት ሥራ እርዳታ እና ማብራሪያዎች'
                    )}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-icons text-primary">check_circle</span>
                  <span>
                    {t(
                      'Practice problems and quizzes',
                      'የልምምድ ችግሮች እና ፈተናዎች'
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Button size="lg" disabled className="opacity-50">
            <span className="material-icons mr-2">notifications_active</span>
            {t('Notify Me When Available', 'ሲገኝ ያሳውቁኝ')}
          </Button>
        </div>
      </main>
    </div>
  );
}
