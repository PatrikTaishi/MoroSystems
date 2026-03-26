# MoroSystems – Test Automation Project

## Overview

This project demonstrates **end-to-end test automation** using Playwright with:

- UI (Frontend) tests across multiple browsers  
- API tests using Playwright request context  
- Generated API client using OpenAPI/Swagger (TypeScript Axios)  
- CI/CD pipeline using GitHub Actions  

---

## Features

### 🔹 UI Testing
- Runs tests on:
  - Chromium (Chrome)
  - Firefox
  - WebKit (Safari)
- Automates browser interactions and validates UI behavior

### 🔹 API Testing (Manual)
- Tests REST endpoints:
  - GET /tasks
  - POST /tasks
  - POST /tasks/{id}
  - DELETE /tasks/{id}
- Includes full CRUD validation with assertions

### 🔹 API Testing (Generated Client)
- Uses OpenAPI spec (`/v3/api-docs`)
- Generated TypeScript Axios client
- Fully typed requests and responses
- Separate spec demonstrating usage

---

## Requirements

- Node.js v20+
- npm
- Running backend API at:
  http://localhost:8080

---

## Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

## Browsers Installation
```bash
npx playwright install
```

## Test scripts 
Run all tests
```bash
npm run test
```

Run only API tests
```bash
npm run test:api
```

Run UI tests in all browsers:
```bash
npm run test:ui:all
```

Run UI tests in in Chromium:
```bash
npm run test:ui
```

Run tests in headed mode:
```bash
npm run test:headed
```

Open Playwright report:
```bash
npm run report