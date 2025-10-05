import { useState } from 'react';
import { LanguageProvider } from '@/lib/language-context';
import SubjectFilter from '../SubjectFilter';

export default function SubjectFilterExample() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Amharic'];

  return (
    <LanguageProvider>
      <div className="p-6">
        <SubjectFilter
          subjects={subjects}
          activeSubject={activeSubject}
          onSubjectChange={setActiveSubject}
        />
      </div>
    </LanguageProvider>
  );
}
