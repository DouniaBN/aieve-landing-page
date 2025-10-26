# AIEVE - Creator Business Management Platform

## Project Overview
This is a React + TypeScript landing page for AIEVE, a business management platform specifically designed for creators. The project uses Vite as the build tool and is styled with Tailwind CSS.

## Technology Stack
- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Backend**: Supabase (supabase-js 2.57.4)
- **Development**: ESLint for linting

## Project Structure
```
src/
├── App.tsx                 # Main app component with page layout
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Problem.tsx         # Problem statement section
│   ├── Solution.tsx        # Solution presentation
│   ├── FoundingStory.tsx   # Company founding story
│   ├── Features.tsx        # Product features showcase
│   ├── EarlyAccess.tsx     # Early access signup form
│   ├── FAQ.tsx             # Frequently asked questions
│   └── Footer.tsx          # Site footer
├── lib/                    # Utility libraries (likely Supabase config)
├── index.css              # Global styles with Tailwind imports
└── main.tsx               # App entry point
```

## Key Features
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Modern UI**: Clean, professional design with pink/blue color scheme
- **Early Access Campaign**: Signup form integrated with Supabase
- **Smooth Scrolling**: Navigation to early access section
- **SEO Optimized**: Proper semantic HTML structure

## Brand Identity
- **Primary Colors**: Pink (#EC4899, #DB2777) and Navy Blue (#1C2D5A)
- **Typography**: Inter font family
- **Target Audience**: Content creators and influencers
- **Value Proposition**: "Your Creator Business, Finally Organised"

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Development Notes
- Uses modern React patterns with functional components and hooks
- TypeScript for type safety
- Tailwind CSS for responsive styling
- Supabase integration for backend functionality
- No testing framework currently configured
- Git repository not initialized

## Key Components Details
- **Hero**: Main landing section with CTA button and dashboard screenshot
- **EarlyAccess**: Likely contains Supabase-integrated signup form
- **Problem/Solution**: Marketing sections explaining the product value
- **Features**: Product capability showcase
- **FAQ**: Common questions about the platform

## Environment
- Uses `.env` file for environment variables (likely Supabase config)
- PostCSS configured for Tailwind processing
- ESLint configured with React and TypeScript rules