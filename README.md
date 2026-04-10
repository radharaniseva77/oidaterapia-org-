# Oidaterapia - Psicología Perenne Web Platform

![Oidaterapia Logo](./public/assets/oidaterapia/logo-oidaterapia.png)

This repository contains the Next.js (App Router) codebase for **Oidaterapia**, a modular, artistic, and highly functional web application focused on Perennial Psychology and healing. 

## Features
- **Elite UX/UI Design:** Implements an "Esencia y Calma" design system featuring soft glassmorphism, dynamic animations via `framer-motion`, and a carefully curated indigo/sand color palette.
- **Dynamic Modular Architecture:** Divided into distinct conceptual modules (`/sabiduria`, `/el-camino`, `/herramientas`, `/estilo-de-vida`, `/academia`) with built-in Error Boundaries.
- **Interactive Tools:** Contains the interactive `PurgaQuiz` module, guiding users through a 5-step emotional release flow.
- **Conversion-Optimized:** Includes elegant `Floating WhatsApp` functionality and `Therapy CTA` sections.

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router format)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites
Node.js 18.x or later.

### Installation & Development
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Vercel
The repository is fully configured for seamless deployment on Vercel. 
Simply import the project from GitHub into your Vercel Dashboard, and the platform will automatically detect Next.js settings, build the optimized bundles, and serve the application globally. Make sure to populate real images in `/public/assets` before deployment.
