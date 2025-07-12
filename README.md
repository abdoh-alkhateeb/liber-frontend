# Liber Frontend

This is the frontend service for the **Liber Platform**, built with **Next.js** and **Node.js**, integrating with **Auth0** for authentication.

## Prerequisites

- Node.js (v14 or later)
- An Auth0 account and application
- The Liber Backend running locally or remotely

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abdoh-alkhateeb/liber-frontend.git
cd liber-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Frontend URL
APP_BASE_URL=http://localhost:3000

# Auth0 Configuration
AUTH0_SECRET=<your-auth0-secret>
AUTH0_DOMAIN=<your-auth0-domain>
AUTH0_CLIENT_ID=<your-auth0-client-id>
AUTH0_CLIENT_SECRET=<your-auth0-client-secret>

# Backend API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

> Make sure to replace placeholder values with your actual configuration.

### 4. Run the development server

```bash
npm run dev
```

By default, the frontend will be available at: `http://localhost:3000`
