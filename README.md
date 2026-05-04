# MedReflexed Backend

A Node.js + Express backend API server for the MedReflexed platform.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

### Development Mode

For development with auto-reload:

```bash
npm run dev
```

## API Endpoints

### Health Check

```
GET /health
```

Returns the server health status, including timestamp and uptime.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-05-05T12:34:56.789Z",
  "uptime": 123.45
}
```

### Root Endpoint

```
GET /
```

Returns basic API information.

## Environment Variables

- `PORT` - Server port (default: 3000)

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. See `.github/workflows/ci.yml` for details.

The CI pipeline:
- Runs on all pushes to `main` and `develop` branches
- Runs on all pull requests to `main` and `develop`
- Tests Node.js 18.x compatibility
- Verifies the application starts successfully
- Validates the health endpoint is accessible

Deployment steps should be configured in the GitHub Actions workflow as needed.

## Architecture

- **Framework**: Express.js
- **Runtime**: Node.js
- **Package Manager**: npm

## Future Improvements

- Add proper test suite
- Add database integration
- Add authentication/authorization
- Add request logging and monitoring
- Add error handling middleware
- Configure production deployment target
