# node-commons

Shared Node.js utilities, logging, and HTTP client

## Overview

This is a Node.js service that provides shared node.js utilities, logging, and http client.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Setup

```bash
npm install
```

### Running

```bash
npm run dev
```

### Testing

```bash
npm test
```

## Architecture

Built with express.

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Service port | `3000` |
| `ENVIRONMENT` | Runtime environment | `development` |
| `LOG_LEVEL` | Logging level | `info` |

## Deployment

This service is deployed to Kubernetes via Helm charts in the `k8s-app-deployments` repo.

## Team

Maintained by the platform team.
