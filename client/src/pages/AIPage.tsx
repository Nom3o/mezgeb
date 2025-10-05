import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import TopAppBar from '@/components/TopAppBar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function AIPage() {
  const { t } = useLanguage();
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col">
      <TopAppBar />
      
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-start gap-3 max-w-[80%]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
              <span className="material-icons text-white text-xl">smart_toy</span>
            </div>
            <div className="bg-card rounded-2xl rounded-tl-none p-4 border border-card-border">
              <p className="text-base">
                {t(
                  'Hey there! 👋 I will be available soon to help you with your studies. Stay tuned!',
                  'ሰላም! 👋 በቅርቡ ለጥናትዎ እርስዎን ለመርዳት እገኛለሁ። ይጠብቁ!'
                )}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t(
                  'I\'ll be able to answer questions, explain concepts, and help with homework.',
                  'ጥያቄዎችን መመለስ፣ ጽንሰ-ሀሳቦችን ማብራራት እና የቤት ሥራን መርዳት እችላለሁ።'
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-8 opacity-60">
            <span className="material-icons text-5xl text-muted-foreground mb-2">chat</span>
            <p className="text-sm text-muted-foreground text-center">
              {t(
                'AI Assistant is under development',
                'AI ረዳት በልማት ላይ ነው'
              )}
            </p>
          </div>
        </div>

        <div className="border-t border-border bg-background p-4">
          <div className="flex items-end gap-2 max-w-4xl mx-auto">
            <Button
              variant="outline"
              size="icon"
              disabled
              className="flex-shrink-0"
              data-testid="button-upload-image"
            >
              <span className="material-icons">image</span>
            </Button>
            
            <div className="flex-1 relative">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t(
                  'Type your message here...',
                  'መልእክትዎን እዚህ ይተይቡ...'
                )}
                disabled
                className="min-h-[52px] max-h-32 resize-none pr-12"
                data-testid="input-chat-message"
              />
              <Button
                size="icon"
                disabled
                className="absolute right-2 bottom-2"
                data-testid="button-send-message"
              >
                <span className="material-icons">send</span>
              </Button>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-3">
            {t(
              'AI features coming soon. Upload images and get instant help with your studies.',
              'AI ባህሪያት በቅርቡ ይመጣሉ። ምስሎችን ይስቀሉ እና ለጥናትዎ ፈጣን እርዳታ ያግኙ።'
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
