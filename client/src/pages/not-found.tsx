import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          {t('Page Not Found', 'ገጹ አልተገኘም')}
        </h2>
        <p className="text-muted-foreground mb-6">
          {t(
            'The page you are looking for does not exist.',
            'እየፈለጉት ያሉት ገጽ አይኖርም።'
          )}
        </p>
        <Button onClick={() => window.location.href = '/'} data-testid="button-go-home">
          {t('Go Home', 'ወደ መነሻ ይሂዱ')}
        </Button>
      </div>
    </div>
  );
}
