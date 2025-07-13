# Alx Listing App

An Airbnb-style listing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project is part of the ALX Front-End specialization and aims to provide a clean, reusable component structure for property listings.


## 📌 Project Objective

The goal of this project is to create the foundation of an Airbnb clone that allows users to view property listings. The app uses modern front-end technologies and follows best practices for scalability, reusability, and maintainability.


## ✨ Features

- Responsive property listing grid
- Reusable UI components (`Card`, `Button`)
- Organized folder structure for maintainability
- Type safety with TypeScript
- Utility-first styling with Tailwind CSS
- Clean code with ESLint integration


## 🧱 Project Structure

alx-listing-app/
│
├── components/
│ └── common/
│ ├── Button.tsx # Reusable button component
│ └── Card.tsx # Reusable card component for property listings
│
├── constants/
│ └── index.ts # Project-wide constants (e.g., config, labels)
│
├── interfaces/
│ └── index.ts # TypeScript interfaces (e.g., CardProps, ButtonProps)
│
├── pages/
│ └── index.tsx # Main listing page (Home)
│
├── public/
│ └── assets/ # All images and SVGs (e.g., logo, listing photos)
│
├── styles/
│ └── globals.css # Global styles using Tailwind CSS
│
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── .eslintrc.json # ESLint configuration
└── README.md # Project documentation


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`


## Development

### Key Components
- **Card Component**: Displays property information like images, pricing, and other details
- **Button Component**: Customizable button for calls-to-action like “Book Now”.
- **Interfaces**: Central location for defining props and data types.
- **Contants**: Reusable values such as dummy data, labels, or URLs.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Assets

All reusable images, icons, and SVGs are placed in the public/assets directory.

## 🛠 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vite
- ESLint

## 📜 License

This project is developed as part of the ALX Software Engineering Program and is intended for educational and demonstration purposes only.

