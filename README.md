# Oven & Bloom

Oven & Bloom is a premium bakery and everyday-food brand concept designed and developed as a full-stack web experience. It combines editorial food presentation with product discovery, search, enquiries, and a lightweight backend.

**Live site:** [oven-bloom-17zo-two.vercel.app](https://oven-bloom-17zo-two.vercel.app/)

## What it is

A responsive full-stack bakery and food-brand website built as a portfolio project. The interface uses a restrained single-colour identity, bold editorial typography, carefully composed food photography, and quiet interaction design.

## Features

- Responsive editorial home, menu, category, product, about, contact, and error pages
- URL-based product search, category filters, and product details
- Accessible navigation, mobile menu, forms, loading states, and keyboard focus
- Contact and product order-enquiry workflows
- REST API with validation, sanitisation, controlled CORS, rate limiting, and secure headers
- File-backed development persistence with isolated enquiry models
- Page-specific SEO metadata, structured data, sitemap, and robots configuration
- Reduced-motion support and performance-conscious image loading

## Tech stack

**Frontend:** React, Vite, Tailwind CSS, React Router, and GSAP  
**Backend:** Node.js, Express, Zod, Helmet, and file-backed persistence

The frontend and backend are intentionally deployable independently. The persistence models can be replaced with MongoDB/Mongoose when a production database is configured.

## Local setup

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm --prefix frontend install
npm --prefix backend install
npm run dev:backend
npm run dev:frontend
```

The frontend runs at `http://localhost:5173` and proxies `/api` requests to the backend at `http://localhost:4000`.

For a production build:

```bash
npm run build
npm --prefix backend test
```

## Deployment

The frontend is deployed on Vercel: [View the live site](https://oven-bloom-17zo-two.vercel.app/).

Vercel builds the app from the repository root using the configuration in `vercel.json`. Client-side routes are rewritten to `index.html` so direct visits and page refreshes work correctly.

## Environment variables

Copy `backend/.env.example` to `backend/.env` and configure the allowed frontend origin. The frontend accepts an optional `VITE_API_URL` at build time when the API is deployed separately. Never commit real credentials or production connection strings.

## Project structure

```text
frontend/src/
  components/   Reusable interface and page sections
  pages/        Route-level page composition
  services/     API client and domain services
  data/         Brand data and catalogue image mapping

backend/src/
  controllers/  Request handling
  routes/       REST endpoints and validation
  models/       Enquiry persistence boundaries
  data/         Product catalogue source
```

## Portfolio notes

- **Design:** restrained identity, editorial composition, responsive re-composition, and a deliberate typography hierarchy
- **Frontend:** reusable React architecture, URL-driven discovery, accessible interactions, and GSAP motion
- **Backend:** REST APIs, validation, persisted enquiry workflows, and layered security middleware
- **Engineering:** responsive testing, performance optimisation, SEO, environment configuration, and independent deployment boundaries

## Screenshots

Final portfolio captures can highlight the hero, product range, menu, product details, About and Contact pages, plus the mobile experience.
