# Contribution Guide

Thank you for your interest in contributing to **OFFER-HUB**! To maintain code quality and consistency, we follow these standards.

## Local Setup

### Cloning the Repository
```bash
git clone <repo-url>
cd offer-hub-monorepo
```

### Installation
Ensure you have **Node.js 20+** and **npm 10+**.
```bash
npm install
```

### Infrastructure (PostgreSQL & Redis)
This project requires PostgreSQL and Redis. We provide a Docker setup for local development:
```bash
docker compose up -d
```

### Configuration
Copy the example file and fill in the variables:
```bash
cp .env.example .env
```

### Database Setup (Prisma)
Once your database is running, apply the migrations and generate the client:
```bash
# 1. Apply migrations to the DB
npm run prisma:migrate

# 2. Generate Prisma Client
npm run prisma:generate
```

## Development Commands

The project uses **npm Workspaces**. You can run the services from the root:

- **Development Mode**: `npm run dev` (Starts Next.js dev server)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

### Backend (Orchestrator)

For the backend Orchestrator, see the [OFFER-HUB-Orchestrator](https://github.com/OFFER-HUB/OFFER-HUB-Orchestrator) repository:

- **API Server**: `npm run dev:api`
- **Both Services (API + Worker)**: `npm run dev`

## Git Standards

### Branch Naming
We use prefixes to identify the type of change:

- `feat/feature-name`: New features.
- `fix/error-description`: Bug fixes.
- `bug/ticket-reference`: Critical reported bugs.
- `refactor/affected-area`: Changes that don't affect functionality.
- `docs/doc-name`: Documentation improvements.

### Atomic Commits
Commit messages should be clear and in English. We recommend following [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add user balance check resource
fix: handle provider timeout in topup flow
docs: update api-overview with new response format
```

## Code Standards

Before submitting a change, ensure you:
1. Follow the **Naming Conventions** defined in [`docs/standards/naming-conventions.md`](./standards/naming-conventions.md).
2. Use the correct **ID Prefixes** (`usr_`, `ord_`, etc.) for backend code.
3. Verify that **Amounts** follow the string format with 2 decimal places (`"100.00"`).
4. Do not break the **State Machine** of the resources.
5. Follow the **Design System** rules in [`docs/design/visual-dna.md`](./design/visual-dna.md) for frontend code.

## Manual QA Reports

For manual test reports (screenshots + step-by-step verification of an issue),
use a local `reports/issue-[number]/` folder at the repo root — it's covered
by `.gitignore` and is not tracked in git. Name reports
`Report_[FeatureName]_Issue_[Number].md` and use this template:

```markdown
# Manual Test Report: [Feature Name]

## Issue Information
- **Issue Number**: #[Number]
- **Title**: [Issue Title]
- **Date**: [YYYY-MM-DD]
- **Tester**: [Your Name/Username]

## Test Environment
- **URL**: https://www.offer-hub.org
- **Browser**: [Browser Name and Version]
- **Device**: [Desktop/Mobile/Tablet]

## Test Steps

### Step 1: [Step Description]
- **Action**: [What was done]
- **Expected Result**: [What should happen]
- **Actual Result**: [What actually happened]
- **Status**: ✅ Pass / ❌ Fail
- **Screenshot**: [filename]

## Test Results Summary
- **Total Steps**: [Number]
- **Passed**: [Number]
- **Failed**: [Number]
- **Overall Status**: ✅ Pass / ❌ Fail

## Issues Found
- [Description of any issues found during testing]

## Recommendations
- [Any recommendations for improvements]
```

Attach the report content and screenshots directly to your PR description rather than committing them — this keeps the QA evidence next to the change it verifies without growing the repo.

## Pull Request Process

1. Create a branch from `main`.
2. Make your changes and use atomic commits.
3. Ensure the project builds correctly (`npm run build`).
4. **If your PR introduces a user-facing change** (new feature, bug fix, deprecation, breaking change, or security patch), add an entry to the `[Unreleased]` section of [`CHANGELOG.md`](../CHANGELOG.md) at the repository root. Follow the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and place the change under the appropriate category: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, or `Security`.
5. Open a PR using our Pull Request template.
6. Wait for a maintainer's review.

## Roadmap & Tasks

This project follows a strict execution plan. Before picking up a task, check the:
- [**ROADMAP.md**](../ROADMAP.md): Our master development checklist.

---

Questions? Consult the [AI Context Guide](./ai-context.md) or open an issue.
