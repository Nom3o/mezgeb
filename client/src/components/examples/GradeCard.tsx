import { LanguageProvider } from '@/lib/language-context';
import GradeCard from '../GradeCard';

export default function GradeCardExample() {
  return (
    <LanguageProvider>
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
        <GradeCard grade={9} onClick={() => console.log('Grade 9 clicked')} />
        <GradeCard grade={10} onClick={() => console.log('Grade 10 clicked')} />
        <GradeCard grade={11} onClick={() => console.log('Grade 11 clicked')} />
        <GradeCard grade={12} onClick={() => console.log('Grade 12 clicked')} />
      </div>
    </LanguageProvider>
  );
}
