# Oven & Bloom

I made Oven & Bloom as a bakery website project. Visitors can browse the menu, look at products, and send a question or order enquiry.

[View the website](https://oven-bloom-17zo-two.vercel.app/)

## What it can do

- Show the bakery home and menu pages
- Browse cakes, snacks, and other products
- Search and filter products
- Send a contact message or product enquiry
- Work on mobile and desktop

## Tools used

React, Vite, Tailwind CSS, React Router, Node.js, Express, Zod

## Run it on your computer

You need Node.js 20 or newer and npm.

```bash
npm install
npm --prefix frontend install
npm --prefix backend install
```

Copy `backend/.env.example` to `backend/.env` and set the allowed website address as shown in that file.

Start the backend and frontend in separate terminals:

```bash
npm run dev:backend
npm run dev:frontend
```

The website usually runs at `http://localhost:5173`. It connects to the API at `http://localhost:4000`.

For a production build:

```bash
npm run build
```

To run the backend checks:

```bash
npm --prefix backend test
```
