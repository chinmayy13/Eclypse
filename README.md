# ECYLPSE E-commerce Application

A full-stack e-commerce web application for ECYLPSE products with a React frontend and Express backend.

### [Live Server](https://eclypse-gamma.vercel.app/)

## Features

- Responsive design optimized for all device sizes
- Product showcase with hero image and gallery
- Interactive product selection with size dropdown
- Expandable accordion sections for product details
- Customer review section with star ratings
- Full-featured backend API

## Technology Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Node.js, Express
- **API Communication**: Axios

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Start the backend server (in a separate terminal):
   ```
   node server/index.js
   ```

## API Endpoints

- `/api/product` - Get product details
- `/api/reviews` - Get customer reviews
- `/api/gallery` - Get gallery images

## Project Structure

```
├── public/
├── server/
│   ├── data/
│   │   ├── product.json
│   │   ├── reviews.json
│   │   └── gallery.json
│   ├── routes/
│   │   ├── product.js
│   │   ├── reviews.js
│   │   └── gallery.js
│   └── index.js
└── src/
    ├── api/
    │   └── index.ts
    ├── components/
    │   ├── Accordion.tsx
    │   ├── Footer.tsx
    │   ├── Gallery.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── ProductSection.tsx
    │   └── ReviewSection.tsx
    ├── pages/
    │   └── Home.tsx
    ├── types/
    │   └── index.ts
    ├── App.tsx
    ├── index.css
    └── main.tsx
```
