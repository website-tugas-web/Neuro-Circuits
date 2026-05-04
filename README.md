# MedReflexed

A full-stack medical reflex application with a Next.js frontend and Express.js backend.

## Project Structure

```
medreflexed/
├── frontend/          # Next.js 14+ frontend with Tailwind CSS
│   ├── app/          # Next.js app directory
│   ├── lib/          # API client and utilities
│   ├── public/       # Static assets
│   └── package.json
├── src/              # Express.js backend server
│   └── index.js
├── .github/          # GitHub Actions workflows
│   └── workflows/
│       ├── ci.yml               # Backend CI/CD
│       └── frontend-ci.yml      # Frontend CI/CD
└── package.json      # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm
- AWS account (for S3 + CloudFront deployment)

### Installation

Install root dependencies:
```bash
npm install
```

Frontend dependencies are installed separately:
```bash
cd frontend && npm install
```

### Running Locally

#### Backend Only
```bash
npm start
```
Backend runs on `http://localhost:3000`

#### Frontend Only
```bash
npm run dev:frontend
```
Frontend runs on `http://localhost:3000` (requires backend on different port)

#### Both Frontend & Backend (Recommended)
```bash
npm run dev:both
```
- Backend: http://localhost:3000
- Frontend: http://localhost:3001

## Architecture

### Backend (Express.js)
- **Framework**: Express.js
- **Runtime**: Node.js
- **Package Manager**: npm
- **Port**: 3000 (default)

### Frontend (Next.js)
- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **API Client**: Fetch API
- **Deployment**: AWS S3 + CloudFront

## API Endpoints

### Health Check
```
GET /health
```

Returns server health status:
```json
{
  "status": "healthy",
  "timestamp": "2026-05-05T12:34:56.789Z",
  "uptime": 123.45
}
```

## Frontend Deployment

The frontend deploys to AWS S3 with CloudFront CDN:

```bash
cd frontend
npm run build
npm run deploy
```

For detailed deployment instructions, see `frontend/AWS_DEPLOYMENT.md`.

**GitHub Actions**: Frontend automatically deploys to production on push to `main`.

## CI/CD

This project uses GitHub Actions for continuous integration:

- **Backend CI** (`.github/workflows/ci.yml`):
  - Tests on Node.js 18.x
  - Verifies health endpoint
  - Deploys to production on `main`

- **Frontend CI** (`.github/workflows/frontend-ci.yml`):
  - Lints and builds on Node.js 18.x and 20.x
  - Deploys to S3+CloudFront on `main`

## Environment Variables

### Backend
- `PORT` - Server port (default: 3000)

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:3000)

For AWS deployment, set:
- `AWS_REGION` - AWS region (default: us-east-1)
- `AWS_S3_BUCKET` - S3 bucket name
- `AWS_DISTRIBUTION_ID` - CloudFront distribution ID

## Development

### Backend Development
```bash
npm run dev
```

### Frontend Development
```bash
npm run dev:frontend
```

### Building Frontend
```bash
npm run build:frontend
```

### Linting Frontend
```bash
npm run lint:frontend
```

## Roadmap

- [ ] Database integration (PostgreSQL)
- [ ] User authentication & authorization
- [ ] Request logging and monitoring
- [ ] Error handling middleware
- [ ] API documentation (OpenAPI/Swagger)
- [ ] Component library (Storybook)
- [ ] End-to-end testing (Playwright/Cypress)
- [ ] Performance monitoring
- [ ] Analytics integration
