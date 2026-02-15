# Contributing to Profilr

Thank you for considering contributing to Profilr! We welcome all contributions — bug reports, feature requests, documentation improvements, and code changes.

## Development Setup

1. **Fork and clone** the repository.
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   This starts Vite on `http://localhost:5173` with hot module replacement.

4. **Build for production:**

   ```bash
   npm run build
   ```

## Running Tests

Tests are located in `src/components/__tests__/`. Run them with:

```bash
npm test
```

Make sure all tests pass before submitting a pull request. If adding new functionality, please include corresponding tests.

## Code Style

- This project uses **TypeScript** with strict mode enabled.
- Components follow **functional component** patterns with React hooks.
- **Tailwind CSS** is used for styling — avoid inline styles or separate CSS files.
- Run the TypeScript compiler to check for type errors:

  ```bash
  npx tsc --noEmit
  ```

- Code formatting is handled by **Prettier** (see `.editorconfig` and `.vscode/settings.json`).

## Pull Request Guidelines

1. Create a feature branch from `main`.
2. Keep changes focused — one feature or fix per PR.
3. Write clear commit messages.
4. Update documentation and tests as needed.
5. Ensure the build passes (`npm run build`).
6. Open a pull request with a descriptive title and summary.

Thank you for contributing!
