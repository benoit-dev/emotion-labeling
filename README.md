# Emotion Identifier App

A simple web application to help identify and understand emotions through an interactive interface.

## Features
- Hierarchical emotion navigation
- Child-friendly emotion descriptions
- Simple, intuitive interface
- Mobile-responsive design

## Deployment with Cloudflare Pages

1. Push this repository to GitHub
2. Log in to your Cloudflare account
3. Go to Pages > Create a project
4. Connect your GitHub repository
5. Configure your build settings:
   - Build command: (leave empty)
   - Build output directory: / (root directory)
   - Framework preset: None

No build configuration is needed since this is a static site.

## Local Development

To run locally, simply serve the directory with any static file server. For example:
```bash
python3 -m http.server 8000
# or
npx serve
```

Then visit `http://localhost:8000` in your browser.
