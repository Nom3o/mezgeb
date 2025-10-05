import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import TopAppBar from '@/components/TopAppBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-page-title mb-8">
          {t('Settings', 'ቅንብሮች')}
        </h2>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">
              {t('Preferences', 'ምርጫዎች')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{t('Language', 'ቋንቋ')}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Choose your preferred language', 'የሚመርጡትን ቋንቋ ይምረጡ')}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                  data-testid="button-language-setting"
                >
                  {language === 'en' ? 'English' : 'አማርኛ'}
                </Button>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <div className="font-medium">{t('Theme', 'ገጽታ')}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Switch between light and dark mode', 'በብርሃን እና ጨለማ ሁነታ መካከል ቀይር')}
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={toggleTheme}
                  data-testid="button-theme-setting"
                >
                  <span className="material-icons mr-2">
                    {theme === 'light' ? 'dark_mode' : 'light_mode'}
                  </span>
                  {theme === 'light' ? t('Dark', 'ጨለማ') : t('Light', 'ብርሃን')}
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">
              {t('About', 'ስለ')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t(
                'Ethiopian Student Textbooks is a free platform providing access to quality educational materials for grades 9-12.',
                'የኢትዮጵያ የተማሪ መማሪያ መጽሐፍት ለክፍል 9-12 ጥራት ያላቸው የትምህርት ቁሳቁሶችን ያቀርባል።'
              )}
            </p>
            <div className="text-sm text-muted-foreground">
              {t('Version', 'ስሪት')} 1.0.0
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">
              {t('Contact Us', 'ያግኙን')}
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/abel-mekuriya-b405a0236/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-linkedin"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons text-primary">link</span>
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Connect on LinkedIn', 'በLinkedIn ላይ ያገናኙ')}
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Nom3o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-github"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons text-primary">code</span>
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-muted-foreground">
                    {t('View on GitHub', 'በGitHub ላይ ይመልከቱ')}
                  </div>
                </div>
              </a>

              <a
                href="https://t.me/mrnooby23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover-elevate active-elevate-2 transition-all"
                data-testid="link-telegram"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons text-primary">send</span>
                </div>
                <div>
                  <div className="font-medium">Telegram</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Message on Telegram', 'በTelegram ላይ መልዕክት ይላኩ')}
                  </div>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
