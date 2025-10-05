import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { useFavorites } from '@/lib/favorites-context';

interface BookCardProps {
  id: string;
  title: string;
  subject: string;
  coverUrl?: string;
  onClick: () => void;
}

export default function BookCard({ id, title, subject, coverUrl, onClick }: BookCardProps) {
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <div
      className="group bg-card rounded-lg border border-card-border overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer relative"
      onClick={onClick}
      data-testid="card-book"
    >
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover-elevate active-elevate-2 transition-all"
        data-testid={`button-favorite-${id}`}
      >
        <span className={`material-icons text-xl ${isFavorite(id) ? 'text-red-500' : 'text-muted-foreground'}`}>
          {isFavorite(id) ? 'favorite' : 'favorite_border'}
        </span>
      </button>

      <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
        {coverUrl ? (
          <img src={coverUrl} alt={title} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-icons text-6xl text-muted-foreground">book</span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-medium text-card-title line-clamp-2 min-h-[3rem]">{title}</h3>
        <Badge variant="secondary" className="text-xs">
          {subject}
        </Badge>
        <Button size="sm" className="w-full" data-testid="button-view-book">
          <span className="material-icons text-[18px] mr-1">visibility</span>
          {t('View', 'ይመልከቱ')}
        </Button>
      </div>
    </div>
  );
}
