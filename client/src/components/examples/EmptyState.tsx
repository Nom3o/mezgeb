import { LanguageProvider } from '@/lib/language-context';
import EmptyState from '../EmptyState';

export default function EmptyStateExample() {
  return (
    <LanguageProvider>
      <div className="p-6">
        <EmptyState onReset={() => console.log('Reset clicked')} />
      </div>
    </LanguageProvider>
  );
}
