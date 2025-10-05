# Ethiopian Student Textbooks - Deployment Guide

## GitHub Pages Deployment

This application is ready to be deployed on GitHub Pages as a static website.

### Automatic Deployment

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to the main branch

### Manual Deployment Steps

1. Build the application:
   ```bash
   npm run build
   ```

2. Copy the `.nojekyll` file to prevent Jekyll processing:
   ```bash
   cp .nojekyll dist/public/
   ```

3. Deploy the `dist/public` folder to GitHub Pages

### Features

- ✅ Fully static frontend (no backend required)
- ✅ All data stored in JSON files
- ✅ LocalStorage for favorites persistence
- ✅ Bilingual support (English/Amharic)
- ✅ Dark mode support
- ✅ Mobile responsive design
- ✅ Google Drive integration for textbook viewing

### Configuration

The app uses relative paths and should work on any GitHub Pages deployment without additional configuration.

### Post-Deployment

After deployment, your app will be available at:
- `https://<username>.github.io/<repository-name>/`

Make sure to:
1. Test all features after deployment
2. Verify Google Drive links are accessible
3. Check that favorites and theme persist across page reloads
