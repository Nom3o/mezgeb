import { useLanguage } from '@/lib/language-context';
import { Badge } from '@/components/ui/badge';

interface GradeCardProps {
  grade: number;
  onClick?: () => void;
  comingSoon?: boolean;
}

const gradeDescriptions: Record<number, { en: string; am: string }> = {
  1: { en: 'Grade 1', am: 'ክፍል 1' },
  2: { en: 'Grade 2', am: 'ክፍል 2' },
  3: { en: 'Grade 3', am: 'ክፍል 3' },
  4: { en: 'Grade 4', am: 'ክፍል 4' },
  5: { en: 'Grade 5', am: 'ክፍል 5' },
  6: { en: 'Grade 6', am: 'ክፍል 6' },
  7: { en: 'Grade 7', am: 'ክፍል 7' },
  8: { en: 'Grade 8', am: 'ክፍል 8' },
  9: { en: 'Grade 9', am: 'ክፍል 9' },
  10: { en: 'Grade 10', am: 'ክፍል 10' },
  11: { en: 'Grade 11', am: 'ክፍል 11' },
  12: { en: 'Grade 12', am: 'ክፍል 12' },
};

export default function GradeCard({ grade, onClick, comingSoon = false }: GradeCardProps) {
  const { t } = useLanguage();
  const desc = gradeDescriptions[grade] || { en: `Grade ${grade}`, am: `ክፍል ${grade}` };

  const chartColors: Record<number, number> = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
    6: 1, 7: 2, 8: 3,
    9: 1, 10: 2, 11: 3, 12: 4,
  };

  const chartColor = chartColors[grade] || 1;

  return (
    <button
      onClick={comingSoon ? undefined : onClick}
      disabled={comingSoon}
      className={`group relative aspect-[3/2] rounded-2xl overflow-hidden transition-all duration-200 ${
        comingSoon ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg active:scale-100'
      }`}
      style={{
        background: `linear-gradient(135deg, hsl(var(--chart-${chartColor})) 0%, hsl(var(--chart-${chartColor}) / 0.8) 100%)`,
      }}
      data-testid={`button-grade-${grade}`}
    >
      {comingSoon && (
        <Badge className="absolute top-3 right-3 z-10 bg-background/90 text-foreground border">
          {t('Coming Soon', 'በቅርቡ')}
        </Badge>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
      <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
        <div className="text-6xl font-bold mb-2">{grade}</div>
        <div className="text-xl font-semibold">{t(desc.en, desc.am)}</div>
      </div>
    </button>
  );
}
