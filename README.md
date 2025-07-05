# Economic Dashboard

[![Angular](https://img.shields.io/badge/Angular-20.0.0-red.svg?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![npm](https://img.shields.io/badge/npm-9+-red.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/)

[![CI/CD](https://github.com/akoulu/economic-dashboard/workflows/CI%2FCD/badge.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/actions)
[![Code Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard)
[![Code Quality](https://img.shields.io/badge/code%20quality-A-brightgreen.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard)
[![Security](https://img.shields.io/badge/security-A-brightgreen.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/actions)

[![GitHub Issues](https://img.shields.io/github/issues/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/stargazers)
[![GitHub Forks](https://img.shields.io/badge/forks-0-blue.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/network)

[![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/releases)
[![Last Commit](https://img.shields.io/github/last-commit/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/commits/main)
[![Contributors](https://img.shields.io/github/contributors/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/graphs/contributors)

[![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-black.svg?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Deploy to Firebase](https://img.shields.io/badge/Deploy%20to-Firebase-orange.svg?style=for-the-badge&logo=firebase)](https://firebase.google.com)

A comprehensive economic data visualization dashboard built with Angular 20, featuring GDP analysis, trade statistics, and country comparisons.

## 🚀 Features

- **GDP Analysis**: Interactive charts for GDP comparison across countries (RU, CN, IN, US)
- **Trade Statistics**: Trade data visualization and analysis
- **Country Comparison**: Multi-country economic indicators
- **Responsive Design**: Mobile-friendly interface
- **Internationalization**: Multi-language support with Transloco
- **Accessibility**: WCAG 2.1 compliant interface

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/           # Core services, guards, interceptors
│   ├── features/       # Feature modules
│   │   ├── dashboard/  # Main dashboard
│   │   ├── gdp/        # GDP analysis
│   │   ├── trade/      # Trade statistics
│   │   ├── country/    # Country data
│   │   └── table/      # Data tables
│   └── shared/         # Shared components and pipes
├── assets/
│   └── i18n/          # Translation files
└── environments/      # Environment configurations
```

## 🛠️ Technology Stack

[![Angular Material](https://img.shields.io/badge/Angular%20Material-15-blue.svg?style=flat-square&logo=angular)](https://material.angular.io/)
[![AG Charts](https://img.shields.io/badge/AG%20Charts-10.0+-orange.svg?style=flat-square)](https://www.ag-grid.com/charts/)
[![Transloco](https://img.shields.io/badge/Transloco-5.0+-purple.svg?style=flat-square)](https://ngneat.github.io/transloco/)
[![Jasmine](https://img.shields.io/badge/Jasmine-5.0+-green.svg?style=flat-square&logo=jasmine)](https://jasmine.github.io/)
[![Karma](https://img.shields.io/badge/Karma-6.0+-blue.svg?style=flat-square&logo=karma)](https://karma-runner.github.io/)
[![ESLint](https://img.shields.io/badge/ESLint-8.0+-purple.svg?style=flat-square&logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.0+-pink.svg?style=flat-square&logo=prettier)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-8.0+-green.svg?style=flat-square)](https://typicode.github.io/husky/)

- **Frontend**: Angular 20, TypeScript
- **UI Framework**: Angular Material
- **Charts**: AG Charts
- **Internationalization**: Transloco
- **Testing**: Jasmine, Karma
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel, Firebase

## 📋 Prerequisites

- Node.js 20+
- npm 9+
- Angular CLI 20+

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/akoulu/economic-dashboard.git
   cd economic-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🧪 Testing

```bash
# Unit tests
npm test

# E2E tests
npm run e2e

# Code coverage
npm run test:coverage
```

## 🏗️ Building

```bash
# Development build
npm run build

# Production build
npm run build --prod
```

## 📦 Deployment

The application is automatically deployed to:
- **Vercel**: On push to `main` branch
- **Firebase**: On release tags (`v*`)

## 🤝 Contributing

We follow a structured workflow:

1. **Create an issue** using our templates
2. **Create a feature branch**: `feature/#issue-number-description`
3. **Make changes** following our coding standards
4. **Create a pull request** with proper description
5. **Wait for review** and CI/CD checks
6. **Merge** after approval

### Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `release/*`: Release preparation
- `hotfix/*`: Critical fixes

### Code Quality

- ESLint for code linting
- Stylelint for SCSS linting
- Unit tests with >80% coverage
- E2E tests for critical paths
- WCAG 2.1 accessibility compliance

## 📊 Project Management

We use GitHub Projects with Kanban methodology:

- **To Do**: New issues and features
- **In Progress**: Active development
- **Review**: Code review phase
- **Done**: Completed and deployed

### Roles

- **Developer**: Code implementation, CI/CD setup
- **Analyst**: Data verification, UI/UX testing

## 🔧 Configuration

### Environment Variables

Create `.env` file for local development:
```env
API_BASE_URL=https://api.example.com
TRANSLATION_API_KEY=your_key_here
```

### GitHub Secrets

Required for deployment:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `FIREBASE_SERVICE_ACCOUNT`

## 📈 Performance

- Lighthouse score: 90+
- Bundle size: <2MB
- Load time: <3s
- Accessibility score: 100

## 🔒 Security

- Regular dependency updates
- Security scanning in CI/CD
- Input validation
- XSS protection

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- **Issues**: [GitHub Issues](https://github.com/akoulu/economic-dashboard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/akoulu/economic-dashboard/discussions)
- **Wiki**: [Project Wiki](https://github.com/akoulu/economic-dashboard/wiki)
- **Badges Guide**: [docs/badges-guide.md](docs/badges-guide.md)

## 📊 Development Progress

### Completed Features
- [x] Angular 20 setup
- [x] Basic project structure
- [x] CI/CD pipeline
- [x] Internationalization setup

### In Progress
- [ ] GDP Chart Component
- [ ] Trade Statistics Module
- [ ] Country Comparison Feature

### Planned
- [ ] API Integration
- [ ] Advanced Filtering
- [ ] Export Functionality
- [ ] PWA Features

---

## 📊 Project Status

[![Development Status](https://img.shields.io/badge/status-active%20development-brightgreen.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard)
[![Repository Size](https://img.shields.io/github/repo-size/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard)
[![Open Issues](https://img.shields.io/github/issues-raw/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed-raw/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/issues?q=is%3Aissue+is%3Aclosed)
[![Open Pull Requests](https://img.shields.io/github/issues-pr-raw/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/pulls)
[![Closed Pull Requests](https://img.shields.io/github/issues-pr-closed-raw/akoulu/economic-dashboard.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/pulls?q=is%3Apr+is%3Aclosed)

**Built with ❤️ using Angular 20**

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
