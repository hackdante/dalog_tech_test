# Contributing Guide

Welcome to contributing to the **DALOG Diagnostic Report Manager** project. This guide establishes standards and processes to maintain code quality, foster effective collaborations, and ensure the project evolves sustainably. As a technical test, the focus is on frontend development best practices.

## 📋 Prerequisites
- Familiarity with **Next.js**, **TypeScript**, **Tailwind CSS**, and **React**.
- Knowledge of **Atomic Design** and component patterns.
- Use of **pnpm** as package manager.
- Understanding of **Conventional Commits**.

## 🚀 Development Setup
1. **Clone and configure** (see [README.md](README.md) for details).
2. **Install dependencies**: `pnpm install`.
3. **Run linting**: `pnpm lint` before commits.
4. **Test changes**: Run `pnpm dev` and verify in browser.

## 🌿 Branching Strategy
- **main**: Production branch, only merges from `develop` via PR.
- **develop**: Development branch, integrates complete features.
- **feature/**: Branches for new functionalities (e.g., `feature/add-pagination`).
- **fix/**: Branches for fixes (e.g., `fix/auth-validation`).
- **hotfix/**: For urgent patches in production.

### Workflow
1. Create a branch from `develop`: `git checkout -b feature/new-functionality`.
2. Develop and commit following Conventional Commits.
3. Push and create a Pull Request (PR) towards `develop`.
4. Wait for review and approval before merge.

## 📝 Code Standards
- **TypeScript**: Use strict types, avoid `any`.
- **Components**: Follow Atomic Design; export from `index.ts` in each folder.
- **Styles**: Use Tailwind classes; avoid inline styles.
- **Naming**: PascalCase for components, camelCase for hooks/variables.
- **Linting**: Run `pnpm lint` and fix errors before commit.
- **Accessibility**: Implement ARIA labels and keyboard navigation.

## 🧪 Testing
- Add tests for new functionalities (unit tests with Jest + RTL).
- Run tests before PR: `pnpm test` (configure if not exists).
- Cover edge cases: network errors, loading states, validations.

## 🔄 Pull Requests (PRs)
- **Title**: Follow Conventional Commits (e.g., `feat(ui): add search component`).
- **Description**: Explain changes, impact, and how to test.
- **Checklist**:
  - [ ] Code linted without errors.
  - [ ] Tests pass (if applicable).
  - [ ] Functionality tested manually.
  - [ ] Documentation updated (if API changes).
- **Review**: At least 1 senior approver before merge.

## 📚 Documentation
- Update [README.md](README.md) for significant changes.
- Document new components in JSDoc comments.
- Keep `interfaces/` updated with new types.

## 🐛 Issue Reporting
- Use GitHub Issues for bugs or improvements.
- Include: reproduction steps, environment (OS, browser), screenshots/logs.

## 📞 Communication
- Use descriptive commits and clear PRs.
- For large discussions, create issues or use PR comments.

## 🏆 Best Practices
- Small and frequent commits.
- Avoid massive changes; split into small PRs.
- Review your own code before requesting review.
- Keep the project modular and scalable.

Thank you for contributing! Your work helps build a robust product.

---

## Git Commit Standards (v.1.0.0)

### Format
`<type>(<scope>): <description> <version>`

### Types
- **feat**: A new feature for the user.
- **fix**: A bug fix.
- **docs**: Documentation only changes.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing tests or correcting existing tests.
- **chore**: Changes to the build process or auxiliary tools.

### Example
`feat(ui): implement accessible button atom v.0.0.1`