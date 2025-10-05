import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/language-context';

interface SubjectFilterProps {
  subjects: string[];
  activeSubject: string | null;
  onSubjectChange: (subject: string | null) => void;
}

const subjectTranslations: Record<string, { en: string; am: string }> = {
  all: { en: 'All', am: 'ሁሉም' },
  mathematics: { en: 'Mathematics', am: 'ሂሳብ' },
  physics: { en: 'Physics', am: 'ፊዚክስ' },
  chemistry: { en: 'Chemistry', am: 'ኬሚስትሪ' },
  biology: { en: 'Biology', am: 'ባዮሎጂ' },
  english: { en: 'English', am: 'እንግሊዝኛ' },
  amharic: { en: 'Amharic', am: 'አማርኛ' },
  history: { en: 'History', am: 'ታሪክ' },
  geography: { en: 'Geography', am: 'ጂኦግራፊ' },
  civics: { en: 'Civics', am: 'ዜግነት' },
};

export default function SubjectFilter({ subjects, activeSubject, onSubjectChange }: SubjectFilterProps) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
      <Badge
        variant={activeSubject === null ? 'default' : 'secondary'}
        className="cursor-pointer snap-start flex-shrink-0 hover-elevate active-elevate-2"
        onClick={() => onSubjectChange(null)}
        data-testid="filter-all"
      >
        {t('All', 'ሁሉም')}
      </Badge>
      {subjects.map((subject) => {
        const trans = subjectTranslations[subject.toLowerCase()] || { en: subject, am: subject };
        return (
          <Badge
            key={subject}
            variant={activeSubject === subject ? 'default' : 'secondary'}
            className="cursor-pointer snap-start flex-shrink-0 hover-elevate active-elevate-2"
            onClick={() => onSubjectChange(subject)}
            data-testid={`filter-${subject.toLowerCase()}`}
          >
            {t(trans.en, trans.am)}
          </Badge>
        );
      })}
    </div>
  );
}
