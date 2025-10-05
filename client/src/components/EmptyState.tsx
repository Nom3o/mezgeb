import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onReset?: () => void;
}

export default function EmptyState({ onReset }: EmptyStateProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
        <span className="material-icons text-5xl text-muted-foreground">search_off</span>
      </div>
      <h3 className="text-section mb-2">{t('No textbooks found', 'ምንም መማሪያ መጽሐፍ አልተገኘም')}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {t(
          'Try adjusting your search or filters to find what you\'re looking for.',
          'የሚፈልጉትን ለማግኘት ፍለጋዎን ወይም ማጣሪያዎችን ማስተካከል ይሞክሩ።'
        )}
      </p>
      {onReset && (
        <Button onClick={onReset} variant="outline" data-testid="button-reset-filters">
          <span className="material-icons text-[20px] mr-2">refresh</span>
          {t('Clear filters', 'ማጣሪያዎችን አጽዳ')}
        </Button>
      )}
    </div>
  );
}
