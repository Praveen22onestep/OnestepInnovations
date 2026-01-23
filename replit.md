# One Step Innovations Landing Page

## Overview
A modern landing page for One Step Innovations built with Next.js 16, React 19, and Tailwind CSS 4. The site features smooth animations powered by Framer Motion.

## Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/api/` - API routes for form submissions
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

## API Routes
- `/api/chat` - Handles chatbot enquiries (logs to console, subject: "Chatbot Enquiry")
- `/api/contact` - Handles contact form submissions (logs to console, subject: "Enquiry")

## Email Integration
Email delivery is configured using Resend. Both API routes send emails to praveensudhakar@onestepinnovations.com.au:
- `/api/contact` - Sends contact form submissions with subject "Enquiry"
- `/api/chat` - Sends chatbot leads with subject "Chatbot Enquiry"

The RESEND_API_KEY secret is stored in environment variables.

## SEO Features
- Structured data (JSON-LD Organization schema)
- Open Graph meta tags
- Twitter card meta tags
- Google Analytics (AW-17639333154)
- Google verification configured

## Mobile Optimization
- Responsive typography across all breakpoints
- Touch-friendly tap targets (min 44px)
- Full-screen chatbot on mobile devices
- Optimized service grid layout

## Booking Integration
Uses Outlook booking: https://outlook.office.com/bookwithme/user/25bbafd7aa564389bcda37e8b5b8e918@onestepinnovations.com.au/meetingtype/2CuJnw-1HkiM_lr5zCs25Q2

## Deployment
Configured for autoscale deployment. Build runs `npm run build` and production runs `npm run start`.
