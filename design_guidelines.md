# Ethiopian Student Textbook Mini App - Design Guidelines

## Design Approach: Reference-Based (Educational + Mobile-First)

**Primary References:** Duolingo (vibrant student engagement) + Notion (clean content organization) + Spotify (media browsing patterns)

**Key Principles:**
- Vibrant yet professional aesthetic that energizes students
- Clear information hierarchy for easy textbook discovery
- Smooth, delightful micro-interactions
- Mobile-optimized layouts (Telegram context)

## Color Palette

**Brand Colors (Ethiopian-Inspired):**
- Primary Green: `142 76% 36%` - Main actions, active states
- Accent Yellow: `48 96% 53%` - Highlights, success states
- Accent Red: `0 72% 51%` - Important CTAs, notifications
- Deep Blue: `220 70% 50%` - Links, secondary actions

**Neutral Palette:**
- Background: `0 0% 100%` (light mode) / `222 47% 11%` (dark mode)
- Surface: `0 0% 98%` (light) / `217 33% 17%` (dark)
- Text Primary: `222 47% 11%` (light) / `0 0% 98%` (dark)
- Text Secondary: `215 20% 45%` (light) / `215 20% 65%` (dark)

**Grade Level Color Coding:**
- Grade 9: `142 76% 36%` (Green)
- Grade 10: `48 96% 53%` (Yellow)
- Grade 11: `220 70% 50%` (Blue)
- Grade 12: `0 72% 51%` (Red)

## Typography

**Font Stack:**
- Amharic: Noto Sans Ethiopic (Google Fonts) - weights 400, 600, 700
- English: Inter (Google Fonts) - weights 400, 500, 600, 700
- Fallback: system-ui, -apple-system, sans-serif

**Type Scale:**
- Hero/Display: 2.5rem (40px) / bold
- Page Titles: 1.875rem (30px) / semibold
- Section Headers: 1.5rem (24px) / semibold
- Card Titles: 1.125rem (18px) / medium
- Body Text: 1rem (16px) / regular
- Small/Meta: 0.875rem (14px) / regular

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Micro spacing: p-2, gap-2
- Component padding: p-4, p-6
- Section spacing: py-8, py-12, py-16
- Page margins: px-4, px-6

**Grid System:**
- Mobile: Single column, full-width cards
- Grade cards: 2-column grid on mobile, 4-column on larger screens
- Book grid: 2-column on mobile, 3-4 column on tablet+

**Container Widths:**
- Mobile: Full width with px-4 padding
- Max content width: max-w-7xl mx-auto

## Component Library

### Navigation Components
**Top App Bar:**
- Sticky header with Telegram theme integration
- Logo/app title on left, language switcher on right
- Back button with smooth slide-left animation
- Height: h-16, shadow: shadow-sm

**Language Switcher:**
- Pill-shaped toggle (EN/አማ)
- Smooth color transition on switch
- Persistent preference saved to localStorage

### Grade Selection Cards
- Large, vibrant cards with grade-specific colors
- Card size: Aspect ratio 3:2, rounded-2xl
- Gradient overlay on background color
- Bold grade number + description
- Hover: scale-105 transform, shadow lift

### Book Cards
**Layout:**
- Vertical card: Cover image top, content below
- Cover aspect ratio: 3:4 (standard book proportion)
- Title (2 lines max, ellipsis)
- Subject tag with pill badge
- Download button with icon

**States:**
- Default: shadow-md, border subtle
- Hover: shadow-lg, scale-102
- Active/Downloaded: checkmark badge overlay

### Book Preview Screen
- Full-screen overlay with backdrop blur
- Top: Close button + download button
- Middle: Embedded Google Drive preview (iframe)
- Bottom: Book metadata (title, subject, grade, description)
- Smooth slide-up entrance animation

### Download Button
- Full-width on mobile, fixed-width on desktop
- Icon + text ("Download" / "አውርድ")
- Loading state: spinner + disabled
- Success state: checkmark + "Downloaded"
- Colors: gradient from primary green to lighter shade

### Search & Filters
**Search Bar:**
- Prominent at top of book lists
- Icon inside input, rounded-full
- Instant filtering with debounce
- Clear button when text present

**Subject Filters:**
- Horizontal scrollable chips
- Active chip: filled background
- Smooth scroll snap behavior

## Images & Visual Assets

**Book Covers:**
- Use actual textbook cover images from Google Drive
- Fallback: Generated placeholder with subject icon + gradient
- Image optimization: lazy loading, proper sizing

**Empty States:**
- Friendly illustrations for "no books found"
- Encouraging copy in both languages
- Prominent search/filter reset action

**Icons:**
- Material Icons via CDN
- Icons: download, language, book, search, close, check, arrow_back
- Size: 20px (small), 24px (default), 32px (large)

## Animations & Interactions

**Page Transitions:**
- Slide-left for forward navigation (100ms ease-out)
- Slide-right for back navigation (100ms ease-out)
- Fade overlay for modals (150ms)

**Micro-interactions:**
- Card hover: subtle scale + shadow (200ms ease)
- Button press: scale-95 (100ms)
- Language switch: color fade (300ms)
- Download progress: smooth bar animation

**Loading States:**
- Skeleton screens for book grids (shimmer effect)
- Spinner for actions (primary green color)
- Progressive image loading with blur-up

## Responsive Behavior

**Mobile-First (320px-768px):**
- Single column layouts
- Full-width cards with 4px gaps
- Sticky navigation
- Bottom sheet for filters

**Tablet+ (768px+):**
- Multi-column grids (2-4 columns)
- Side-by-side preview layouts
- Inline filters vs bottom sheet

## Accessibility & Localization

**Bilingual Support:**
- RTL-aware layouts (Amharic can be LTR or mixed)
- Font size controls for readability
- Language preference persisted
- All UI text translated

**Contrast & Readability:**
- WCAG AA compliance minimum
- Text on colored backgrounds: ensure 4.5:1 ratio
- Focus indicators: 2px ring in primary color
- Touch targets: minimum 44x44px