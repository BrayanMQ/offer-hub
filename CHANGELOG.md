# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Vitest + Testing Library testing infrastructure, with unit tests for `DocsSearchBar`, `RegistrationForm`, `ContactForm`, `FloatingCTA`, and the `Navbar` `isLinkActive` helper; CI now fails the build on test failure
### Changed
### Deprecated
### Removed
### Fixed
- Announce `ContactForm` submission errors to screen readers via `role="alert"`
### Security

- Add HTTP security headers (CSP, HSTS, X-Frame-Options, and related) via `next.config.ts` for all routes

---

## [0.1.0] - 2025-01-01

### Added
- Initial monorepo structure with npm Workspaces (`apps/api`, `apps/worker`, `packages/shared`, `packages/database`, `packages/sdk`)
- NestJS API server with modular architecture (port 4000)
- BullMQ async worker for background task processing
- Prisma ORM with PostgreSQL — schema, migrations, and generated client
- Internal user balance management (available and reserved balances)
- Top-up flow via Airtm integration
- Non-custodial escrow checkout via Trustless Work on the Stellar network
- Withdrawal flow to Airtm accounts
- Idempotency keys on all mutating endpoints
- Audit log infrastructure
- Redis-backed queue and cache layer
- Docker Compose setup for local PostgreSQL and Redis
- Next.js frontend with `/changelog` page that fetches releases dynamically from GitHub Releases API
- Comprehensive documentation under `/docs` (architecture, API design, coding standards, contributing guide)

[Unreleased]: https://github.com/OFFER-HUB/offer-hub-monorepo/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/OFFER-HUB/offer-hub-monorepo/releases/tag/v0.1.0
