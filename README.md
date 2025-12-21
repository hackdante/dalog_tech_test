# DALOG Diagnostic Report Manager (v.0.0.4)

## Description

This project is an enterprise-grade dashboard for managing technical diagnostic reports, developed as part of a frontend technical test. The application allows authenticated users to view, search, and manage diagnostic reports efficiently and securely. It is built with modern technologies to ensure scalability, maintainability, and optimal user experience.

### Key Features
- **Secure Authentication**: Login flow with simulated credential validation and realistic latency handling.
- **Report Management**: Report visualization in list format, with search and pagination functionalities.
- **Modular Interface**: Architecture based on Atomic Design for reusable components.
- **Optimized Performance**: Use of Next.js Server Components and efficient state management.
- **Accessibility and UX**: Responsive design with Tailwind CSS, focused on usability.

## 🛠️ Tech Stack & Standards

- **Framework**: Next.js 16.1.0 (App Router) + React 19.2.3 (with React Compiler enabled for automatic optimizations).
- **Language**: TypeScript 5.x for type safety.
- **Styling**: Tailwind CSS 4.x for a consistent and efficient design system.
- **Icons**: Lucide React for scalable iconography.
- **Linting**: ESLint 9.x configured for Next.js.
- **Build Tool**: Next.js integrated with PostCSS and Tailwind.
- **Versioning**: Conventional Commits (`type(scope): description v.x.x.x`).
- **Deployment**: Optimized for Vercel (Edge Runtime compatible).

### Architecture

The project follows a modular architecture inspired by **Atomic Design**:
- **Atoms (Base Components)**: Basic components like buttons, inputs, loaders (located in `components/base`).
- **Organisms (Composite Components)**: Complex components like login forms, headers, report lists (in `components/composite`).
- **Contexts**: Global state management for authentication (`context/auth`) and reports (`context/reports`).
- **Custom Hooks**: Reusable logic for authentication, fetching, and reports (in `hooks`).
- **Services**: Abstraction layer for API calls (in `services`).
- **Interfaces**: TypeScript definitions for data types (in `interfaces`).
- **Utils**: General utilities like simulated delays (in `utils`).

This structure promotes separation of concerns, facilitating maintenance and scalability.

### Project Structure
```
dalog-tech-test/
├── components/           # UI Components
│   ├── base/            # Atoms (buttons, inputs, etc.)
│   └── composite/       # Organisms (login, headers, etc.)
├── context/             # React Contexts for global state
├── hooks/               # Custom hooks
├── interfaces/          # TypeScript types
├── mocks/               # Mock data for development
├── public/              # Static assets
├── services/            # Services for APIs
├── src/app/             # Next.js pages and layouts
│   ├── (private)/       # Protected routes (dashboard)
│   └── (public)/        # Public routes (login)
├── utils/               # General utilities
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── eslint.config.mjs    # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.x or higher (20.x recommended).
- **pnpm**: Package manager (install with `npm install -g pnpm`).
- **Git**: For version control.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/hackdante/dalog_tech_test.git
   cd dalog-tech-test
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure environment variables** (if applicable, create `.env.local`):
   - No variables are required currently, but for future real API integrations, add `NEXT_PUBLIC_API_URL`.

4. **Run in development**:
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:3000`.

### Available Scripts
- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server (after build).
- `pnpm lint`: Runs ESLint to check code.

## 🧪 Testing
Currently, no test suite is configured. As a senior developer, I recommend integrating:
- **Jest** + **React Testing Library** for component unit tests.
- **Cypress** or **Playwright** for end-to-end testing.
- Run `pnpm test` (once configured).

For adding basic tests:
1. Install dependencies: `pnpm add -D jest @testing-library/react @testing-library/jest-dom`.
2. Configure Jest in `jest.config.js`.
3. Create tests in `__tests__/` or alongside components.

## 🚀 Deployment
The application is optimized for Vercel:
1. Connect the repository on Vercel.
2. Configure build settings: `pnpm build` and `pnpm start`.
3. Automatic deploy on pushes to `main` or `develop`.

For other providers (Netlify, etc.), adjust `next.config.ts` if necessary.

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License
This project is private and part of a technical test. Do not distribute without authorization.

## 📞 Contact
For questions, contact the development team.