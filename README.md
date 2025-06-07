# Loxala

## 📦 Setup

```bash
# Clone repo
git clone https://github.com/sergey-kvachenok/loxala
cd loxala

# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start server
npm run dev

Page is available locally at http://localhost:5173/

# Check types
npm run type-check

# Run linter
npm run lint

# Fix linter errors
npm run lint:fix
```

## 🏗️ Build

```bash
# Создать production сборку
npm run build

# Production preview
npm run preview
```

## 📝 Notes

The main page displays Dashboard page (/pages/Dashboard)
Used technologies: React, TypeScript, Vite, Tailwind CSS v4, React Router v7

Please note that the UI matches the Figma designs for 1440px resolution. For smaller resolutions, the layout may differ to support responsiveness.

App is deployed to Vercel and can be viewed here:

https://loxala-siarheis-projects-f8553cd0.vercel.app/
