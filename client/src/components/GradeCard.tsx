import { useLanguage } from '@/lib/language-context';

interface GradeCardProps {
  grade: 9 | 10 | 11 | 12;
  onClick: () => void;
}

const gradeDescriptions = {
  9: { en: 'Grade 9', am: 'ክፍል 9' },
  10: { en: 'Grade 10', am: 'ክፍል 10' },
  11: { en: 'Grade 11', am: 'ክፍል 11' },
  12: { en: 'Grade 12', am: 'ክፍል 12' },
};

export default function GradeCard({ grade, onClick }: GradeCardProps) {
  const { t } = useLanguage();
  const desc = gradeDescriptions[grade];

  return (
    <button
      onClick={onClick}
      className="group relative aspect-[3/2] rounded-2xl overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-100"
      style={{
        background: `linear-gradient(135deg, hsl(var(--chart-${grade === 9 ? 1 : grade === 10 ? 2 : grade === 11 ? 3 : 4})) 0%, hsl(var(--chart-${grade === 9 ? 1 : grade === 10 ? 2 : grade === 11 ? 3 : 4}) / 0.8) 100%)`,
      }}
      data-testid={`button-grade-${grade}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
      <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
        <div className="text-6xl font-bold mb-2">{grade}</div>
        <div className="text-xl font-semibold">{t(desc.en, desc.am)}</div>
      </div>
    </button>
  );
}
