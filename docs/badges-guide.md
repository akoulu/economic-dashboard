# Badges Guide

Цей документ описує всі badges, які використовуються в проекті Economic Dashboard.

## 📋 Огляд

Badges - це маленькі зображення, які показують статус проекту, технології та метадані. Вони роблять README більш інформативним та професійним.

## 🏷️ Типи Badges

### 1. Technology Badges
Показують основні технології проекту:

- **Angular**: Версія Angular framework
- **TypeScript**: Версія TypeScript
- **Node.js**: Версія Node.js
- **npm**: Версія npm
- **License**: Тип ліцензії

### 2. Status Badges
Показують поточний статус проекту:

- **CI/CD**: Статус GitHub Actions
- **Code Coverage**: Відсоток покриття тестами
- **Code Quality**: Якість коду
- **Security**: Безпека проекту
- **Tests**: Статус тестів

### 3. GitHub Badges
Показують активність на GitHub:

- **Issues**: Кількість відкритих issues
- **Pull Requests**: Кількість відкритих PR
- **Stars**: Кількість зірок
- **Forks**: Кількість форків
- **Last Commit**: Останній коміт
- **Contributors**: Кількість контриб'юторів
- **Repository Size**: Розмір репозиторію

### 4. Deployment Badges
Показують платформи деплою:

- **Vercel**: Deploy to Vercel
- **Firebase**: Deploy to Firebase

## 🛠️ Управління Badges

### Генерація Badges
```bash
npm run badges
```
Генерує всі badges та створює файл `docs/badges.md`

### Оновлення Version Badges
```bash
npm run update-badges
```
Оновлює badges з версіями з `package.json`

### Автоматичне оновлення
GitHub Actions workflow `badges.yml` автоматично оновлює badges при:
- Push до `main` або `develop`
- Pull Request до `main`
- Щоденно о 2:00 UTC

## 📝 Додавання нових Badges

### 1. Створіть badge на shields.io
Відвідайте [shields.io](https://shields.io/) та створіть потрібний badge.

### 2. Додайте до скрипта
Оновіть `scripts/generate-badges.js`:

```javascript
const badges = {
  // ... existing badges
  newBadge: {
    url: 'https://img.shields.io/badge/your-badge-url',
    link: 'https://your-link.com',
    alt: 'Your Badge'
  }
};
```

### 3. Додайте до README
Додайте badge HTML до README.md у відповідній секції.

## 🔧 Налаштування

### GitHub Secrets
Для автоматичного оновлення badges потрібні:
- `GIST_SECRET`: GitHub token з правами на gist

### Badge Styles
- `for-the-badge`: Великі badges для технологій
- `flat-square`: Малі badges для статусу

### Кольори
- `brightgreen`: Успіх
- `green`: Добре
- `orange`: Попередження
- `red`: Помилка
- `blue`: Інформація
- `yellow`: Увага

## 📊 Приклади

### Статичні Badges
```markdown
[![Angular](https://img.shields.io/badge/Angular-20-red.svg?style=for-the-badge&logo=angular)](https://angular.io/)
```

### Динамічні Badges
```markdown
[![GitHub Issues](https://img.shields.io/github/issues/username/repo.svg?style=flat-square)](https://github.com/username/repo/issues)
```

### Badges з логотипами
```markdown
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
```

## 🚀 Best Practices

1. **Групуйте badges** за категоріями
2. **Використовуйте відповідні кольори** для статусу
3. **Додавайте посилання** на відповідні сторінки
4. **Оновлюйте версії** автоматично
5. **Не перевантажуйте** README занадто багатьма badges

## 🔗 Корисні посилання

- [Shields.io](https://shields.io/) - Генератор badges
- [GitHub Badges](https://github.com/badges/shields) - Документація
- [Badge Examples](https://github.com/Naereen/badges) - Приклади використання 