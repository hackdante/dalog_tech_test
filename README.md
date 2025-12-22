# DALOG Diagnostic Report Manager

## Description

This project is a Diagnostic Report Manager built as part of a technical challenge to demonstrate enterprise-ready frontend architecture. The application simulates API interactions for managing diagnostic reports, focusing on performance, maintainability, scalability, reliability, and accessibility. It includes features for listing reports with real-time search, uploading files with drag-and-drop support, and robust error handling.

The initial report data used for simulation is:
```json
[
  { "id": 1, "name": "vibration_analysis_01.pdf", "size": "2.4MB", "type": "Vibration", "date": "2023-10-01" },
  { "id": 2, "name": "motor_thermal_B.csv", "size": "1.1MB", "type": "Thermal", "date": "2023-10-02" }
]
```

### Key Features
- **Report Listing**: Efficient rendering of reports with real-time search filtering by name, using simulated data.
- **File Upload**: Drag-and-drop upload simulation with 2-second delay, progress indicators (20%, 55%, 90%, 100%), and clear states for Loading, Success, and Error.
- **Accessibility**: Keyboard navigation (e.g., Escape to close dialogs), ARIA labels, and screen reader support.
- **Performance**: Optimized state management with Context API to prevent unnecessary re-renders; Next.js provides code splitting and lazy loading.
- **Patterns**: Partial Strategy Pattern for file type assignment (PDF -> Thermal, CSV -> Vibration).

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0 (App Router) with React 19.2.3 (Hooks and TypeScript).
- **State Management**: Context API with useReducer for scalable state management.
- **Component Library**: Custom components styled with Tailwind CSS.
- **Performance**: Next.js built-in code splitting and lazy loading.
- **Testing**: Planned with Jest and React Testing Library (not yet configured).
- **Language**: TypeScript 5.x for type safety.
- **Build Tool**: Next.js with Vite.
- **Other**: ESLint for code quality, Husky for pre-commit hooks.

## Architecture

The application follows a modular architecture inspired by Atomic Design and separation of concerns:

- **Components**: Divided into `base` (atoms) and `composite` (organisms) for reusability.
- **Contexts**: Global state for authentication, reports, and UI.
- **Hooks**: Custom hooks for logic abstraction (e.g., useReports, useAuth).
- **Services**: Simulation of API calls with mocking.
- **Interfaces**: TypeScript definitions for data structures.
- **Utils**: Utilities like delay simulation for uploads.

This design ensures maintainability, scalability, and efficient rendering.

### Project Structure
```
dalog-tech-test/
├── components/
│   ├── base/            # Basic components (buttons, inputs, etc.)
│   └── composite/       # Complex components (upload dialog, report list, etc.)
├── context/             # React Contexts for state management
├── hooks/               # Custom hooks
├── interfaces/          # TypeScript definitions
├── mocks/               # Mock data for API simulation
├── services/            # API service abstractions
├── src/app/             # Next.js pages and layouts
├── utils/               # General utilities
└── ...                  # Config files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher.
- pnpm as package manager.
- Git for version control.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dalog-tech-test
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:3000`.

### Available Scripts
- `pnpm dev`: Start development server.
- `pnpm build`: Build for production.
- `pnpm start`: Start production server.
- `pnpm lint`: Run ESLint.
- `pnpm test`: Run tests (Jest + React Testing Library).

## Architectural Decisions

- **State Management**: Context API with useReducer chosen for its simplicity and effectiveness in preventing unnecessary re-renders through stable dependencies.
- **Component Patterns**: Atomic Design implemented for modularity and reusability.
- **Performance**: Leveraged Next.js features for code splitting; state optimizations ensure efficient rendering.
- **Testing**: Framework selected (Jest + RTL), but not yet implemented.
- **Accessibility**: Integrated ARIA attributes and keyboard support as per WCAG guidelines.
- **Security**: React's built-in protections used; inputs sanitized.
- **Error Handling**: User feedback implemented for upload errors; Error Boundaries not yet added.

## Technical Discussion: Scaling File Upload for Large Files (>1GB)

To scale the file upload system for reports exceeding 1GB:
- **Chunked Uploads**: Break files into smaller chunks (e.g., 1MB) and upload sequentially or in parallel, reassembling on the server.
- **Resumable Uploads**: Use libraries like Tus.js to resume interrupted uploads, tracking progress via byte-level tracking.
- **Web Workers**: Offload file processing to Web Workers to keep UI responsive.
- **Backend Considerations**: Implement server-side streaming or multipart uploads; use cloud storage (e.g., AWS S3) with presigned URLs.
- **Client Optimizations**: Compress files before upload, validate on client-side, and provide real-time progress with byte-level tracking.
- **Security**: Enforce file type validation, size limits, and virus scanning.
This approach ensures reliability and performance for large-scale operations.

## 🚀 Deployment

The application is configured for continuous deployment on Vercel. The live version is available at [dalog-tech-test.vercel.app](https://dalog-tech-test.vercel.app).

To deploy:
1. Connect the repository to Vercel.
2. Configure build settings: `pnpm build` and `pnpm start`.
3. Automatic deployments occur on pushes to `main` or `develop`.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

Private project for technical test.