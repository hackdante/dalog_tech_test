# Guía de Contribución

Bienvenido a la contribución del proyecto **DALOG Diagnostic Report Manager**. Esta guía establece estándares y procesos para mantener la calidad del código, fomentar colaboraciones efectivas y asegurar que el proyecto evolucione de manera sostenible. Como prueba técnica, el enfoque está en mejores prácticas de desarrollo frontend.

## 📋 Requisitos Previos
- Familiaridad con **Next.js**, **TypeScript**, **Tailwind CSS** y **React**.
- Conocimiento de **Atomic Design** y patrones de componentes.
- Uso de **pnpm** como gestor de paquetes.
- Entendimiento de **Conventional Commits**.

## 🚀 Setup de Desarrollo
1. **Clona y configura** (ver [README.md](README.md) para detalles).
2. **Instala dependencias**: `pnpm install`.
3. **Ejecuta linting**: `pnpm lint` antes de commits.
4. **Prueba cambios**: Ejecuta `pnpm dev` y verifica en navegador.

## 🌿 Estrategia de Branching
- **main**: Rama de producción, solo merges de `develop` vía PR.
- **develop**: Rama de desarrollo, integra features completas.
- **feature/**: Ramas para nuevas funcionalidades (ej. `feature/add-pagination`).
- **fix/**: Ramas para correcciones (ej. `fix/auth-validation`).
- **hotfix/**: Para parches urgentes en producción.

### Flujo de Trabajo
1. Crea una rama desde `develop`: `git checkout -b feature/nueva-funcionalidad`.
2. Desarrolla y commitea siguiendo Conventional Commits.
3. Push y crea un Pull Request (PR) hacia `develop`.
4. Espera revisión y aprobación antes de merge.

## 📝 Estándares de Código
- **TypeScript**: Usa tipos estrictos, evita `any`.
- **Componentes**: Sigue Atomic Design; exporta desde `index.ts` en cada carpeta.
- **Estilos**: Usa clases de Tailwind; evita estilos inline.
- **Nombres**: PascalCase para componentes, camelCase para hooks/variables.
- **Linting**: Ejecuta `pnpm lint` y corrige errores antes de commit.
- **Accesibilidad**: Implementa ARIA labels y navegación por teclado.

## 🧪 Testing
- Agrega tests para nuevas funcionalidades (unit tests con Jest + RTL).
- Ejecuta tests antes de PR: `pnpm test` (configurar si no existe).
- Cubre casos edge: errores de red, estados de carga, validaciones.

## 🔄 Pull Requests (PRs)
- **Título**: Sigue Conventional Commits (ej. `feat(ui): add search component`).
- **Descripción**: Explica cambios, impacto y cómo probar.
- **Checklist**:
  - [ ] Código linted sin errores.
  - [ ] Tests pasan (si aplican).
  - [ ] Funcionalidad probada manualmente.
  - [ ] Documentación actualizada (si cambia API).
- **Revisión**: Al menos 1 aprobador senior antes de merge.

## 📚 Documentación
- Actualiza [README.md](README.md) para cambios significativos.
- Documenta componentes nuevos en comentarios JSDoc.
- Mantén `interfaces/` actualizadas con nuevos tipos.

## 🐛 Reporte de Issues
- Usa GitHub Issues para bugs o mejoras.
- Incluye: pasos para reproducir, entorno (OS, browser), screenshots/logs.

## 📞 Comunicación
- Usa commits descriptivos y PRs claros.
- Para discusiones grandes, crea issues o usa comentarios en PR.

## 🏆 Mejores Prácticas
- Commits pequeños y frecuentes.
- Evita cambios masivos; divide en PRs pequeñas.
- Revisa tu propio código antes de pedir review.
- Mantén el proyecto modular y escalable.

¡Gracias por contribuir! Tu trabajo ayuda a construir un producto robusto.

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