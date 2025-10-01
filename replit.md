# Overview

This is a professional AI consulting website for "The Unlock" - a company that specializes in transforming enterprise workflows through custom AI agents and intelligent automation. The website is built as a modern single-page application showcasing the company's services, methodology, team, and partnership approach. It features a polished design with professional branding in teal color schemes, targeting enterprise clients seeking AI transformation solutions.

## Recent Updates (October 2025)

- **Reusable Case Study System**: Fully reusable CaseStudy component with hero sections, challenge/solution/implementation content blocks, optional tech stack display, optional testimonials, optional press sections, and optional CTA links for cross-referencing case studies
- **Mobile Responsiveness**: Comprehensive mobile optimization with responsive text sizes, flexible layouts (flex-col sm:flex-row), appropriate spacing (py-12 md:py-16), and proper image handling (h-auto on mobile to prevent cropping)
- **Case Studies Implemented**:
  - Xero SHAX: Behavioural Change Agent (habit formation coaching for 5,000 employees)
  - ELMO NALAH: SDR Empowerment Agent (autonomous prospect research with 100% adoption, HR Leader press coverage)
  - ELMO Agent Identification: Strategic framework for selecting high-impact AI opportunities (links to NALAH case study)
- **Navigation Enhancement**: Dropdown menu for case studies with fixed hover interaction and padding bridge solution
- **Contact Form**: Functional form using Web3Forms (felipe@theunlock.com.au)
- **Hero Section**: Updated title "Transform Your Workflows with AI Agents" with highlighted "Workflows"

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom design system based on shadcn/ui components
- **State Management**: TanStack Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

## Component Structure
- **UI Components**: Comprehensive shadcn/ui component library with custom theming
- **Layout Components**: Modular sections (Header, Hero, Process, About, Team, Partnership, Contact, Footer)
- **Design System**: Professional color palette with primary teal (#00a8b5), consistent typography, and hover/elevation effects
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot module replacement and development middleware via Vite

## Data Storage Solutions
- **Primary Database**: PostgreSQL for relational data storage
- **ORM**: Drizzle ORM with schema-first approach for database operations
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon serverless PostgreSQL for scalable cloud database hosting

## Authentication and Authorization
- **Session-based Authentication**: PostgreSQL-backed sessions for stateful user management
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted storage layer with memory fallback for development

## External Dependencies

- **Database**: Neon PostgreSQL serverless database
- **UI Components**: Radix UI primitives for accessible component foundation
- **Form Handling**: React Hook Form with Zod for form validation and type safety
- **Date Utilities**: date-fns for date manipulation and formatting
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for image/content carousels
- **Development Tools**: ESBuild for production bundling, TSX for development server