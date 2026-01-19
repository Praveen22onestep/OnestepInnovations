# One Step Innovations Landing Page

## Overview
A modern landing page for One Step Innovations built with Next.js 16, React 19, and Tailwind CSS 4. The site features smooth animations powered by Framer Motion.

## Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components
- `public/` - Static assets

## Development
The development server runs on port 5000:
```bash
npm run dev
```

## Tech Stack
- Next.js 16.1.3 (Turbopack)
- React 19.2.3
- Tailwind CSS 4
- Framer Motion 12.27.0
- Lucide React for icons
- TypeScript

## Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment
Configured for autoscale deployment. Build runs `npm run build` and production runs `npm run start`.
