AI Website Builder
An intelligent, full-stack website building platform that uses AI to transform user prompts into fully functional web projects.

Features
AI-Powered Generation: Leverage OpenAI to generate website structures and content from simple text descriptions.

Comprehensive Auth System: Secure user authentication and session management using better-auth.

Dynamic Editor Panel: A sophisticated interface for real-time website editing and previewing.

Integrated Payments: Subscription and payment processing powered by Stripe.

Responsive UI/UX: Built with React 19, Tailwind CSS 4, and Radix UI components for a seamless, modern experience.

Community & My Projects: Browse community-created projects or manage your personal creations through dedicated dashboards.

Tech Stack
Client-Side
Framework: React 19 with TypeScript

Build Tool: Vite

Styling: Tailwind CSS 4 & Radix UI

Icons: Lucide React

Routing: React Router DOM

State & Notifications: Sonner (toasts) & Next Themes (theming)

Server-Side
Runtime: Node.js with Express.js

Language: TypeScript

Database ORM: Prisma with PostgreSQL

AI Integration: OpenAI API

Authentication: Better-Auth

Payments: Stripe

Getting Started
Prerequisites
Node.js (v18 or higher recommended)

PostgreSQL database

OpenAI API Key

Stripe API Keys

Installation
Clone the repository:

Bash
git clone [repository-url]
cd ai-website-builder
Install Client Dependencies:

Bash
cd client
npm install
Install Server Dependencies:

Bash
cd ../server
npm install
Environment Variables:
Create a .env file in the server directory and add your database URL, OpenAI key, and Stripe credentials.

Database Setup:

Bash
npx prisma migrate dev
npx prisma generate
Run the Project:

Frontend: npm run dev (in client/)

Backend: npm run server (in server/)

Scripts
Client
dev: Starts the Vite development server.

build: Compiles TypeScript and builds the project for production.

lint: Runs ESLint for code quality checks.

preview: Previews the production build locally.

Server
server: Starts the server with nodemon and tsx for development.

build: Compiles TypeScript to JavaScript.

start: Runs the compiled production server.

postinstall: Automatically generates the Prisma client.
