# GitHub Setup Script - Інструкція

## 🚀 Автоматичне налаштування GitHub репозиторію

Цей скрипт автоматично створить всі необхідні мітки, milestones та базові issues у вашому GitHub репозиторії.

## 📋 Перед запуском

### 1. Створіть GitHub Personal Access Token

1. Перейдіть на GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Натисніть **Generate new token (classic)**
3. Виберіть права:
   - `repo` (повний доступ до репозиторіїв)
   - `workflow` (для GitHub Actions)
4. Скопіюйте токен (він покажеться тільки один раз!)

### 2. Встановіть залежності

```bash
npm install --legacy-peer-deps
```

## 🎯 Запуск скрипта

```bash
npm run setup:github
```

Або напряму:

```bash
node scripts/setup-github.js
```

## 📝 Що зробить скрипт

### 1. Створить мітки (Labels)
- **Типи задач**: `feature`, `bug`, `enhancement`, `documentation`
- **Пріоритети**: `priority:low`, `priority:medium`, `priority:high`, `priority:critical`
- **Ролі**: `role:developer`, `role:analyst`
- **Компоненти**: `component:gdp`, `component:trade`, `component:country`, `component:dashboard`, `component:table`
- **Якість**: `ui/ux`, `performance`, `accessibility`, `security`
- **Статуси**: `triage`, `help wanted`, `good first issue`, `wontfix`, `duplicate`

### 2. Створить Milestones
- `v1.0.0` - Initial release
- `v1.1.0` - Feature updates
- `v2.0.0` - Major updates
- `Sprint 1` - First development sprint
- `Sprint 2` - Second development sprint

### 3. Створить базові Issues
- `[FEATURE] Add GDP Chart Component`
- `[BUG] Fix API error handling`
- `[ENHANCEMENT] Add data validation`

## 🔧 Приклад використання

```bash
$ npm run setup:github

🚀 GitHub Repository Setup Script
================================

Введіть ваш GitHub Personal Access Token: ghp_xxxxxxxxxxxxxxxxxxxx
Введіть репозиторій (формат: owner/repo): akoulu/economic-dashboard

🔍 Перевірка доступу до репозиторію...
✅ Репозиторій знайдено!

🏷️  Створення міток...
✅ Створено мітку: feature
✅ Створено мітку: bug
✅ Створено мітку: enhancement
...

🎯 Створення milestones...
✅ Створено milestone: v1.0.0
✅ Створено milestone: v1.1.0
...

📝 Створення базових issues...
✅ Створено issue: [FEATURE] Add GDP Chart Component
✅ Створено issue: [BUG] Fix API error handling
✅ Створено issue: [ENHANCEMENT] Add data validation

🎉 Налаштування завершено!

📋 Наступні кроки:
1. Налаштуйте branch protection rules вручну
2. Додайте секрети для CI/CD (VERCEL_TOKEN, тощо)
3. Налаштуйте GitHub Project automation
4. Додайте учасників у CODEOWNERS
```

## ⚠️ Важливі зауваження

1. **Токен безпеки**: Не діліться токеном з іншими людьми
2. **Права доступу**: Токен повинен мати права на запис у репозиторій
3. **Дублювання**: Скрипт не створить мітки, які вже існують
4. **Помилки**: Якщо щось не вдається, скрипт продовжить роботу з іншими елементами

## 🛠️ Ручні кроки після скрипта

### 1. Branch Protection Rules
1. GitHub → Settings → Branches
2. Add rule для `main` та `develop`
3. Увімкніть:
   - Require a pull request before merging
   - Require approvals (1)
   - Require status checks (lint, test, build)

### 2. GitHub Secrets
1. GitHub → Settings → Secrets and variables → Actions
2. Додайте:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   - `FIREBASE_SERVICE_ACCOUNT`

### 3. GitHub Project Automation
1. Відкрийте ваш Kanban
2. Settings → Automation
3. Додайте правила:
   - New issue → To Do
   - New PR → Review
   - Merged PR → Done

## 🔍 Troubleshooting

### Помилка 401 (Unauthorized)
- Перевірте правильність токену
- Переконайтеся, що токен має права `repo`

### Помилка 404 (Not Found)
- Перевірте правильність назви репозиторію
- Переконайтеся, що у вас є права доступу

### Помилка 422 (Unprocessable Entity)
- Мітка або milestone вже існує (це нормально)
- Скрипт продовжить роботу

## 📞 Підтримка

Якщо виникли проблеми:
1. Перевірте права токену
2. Перевірте назву репозиторію
3. Переконайтеся, що репозиторій існує
4. Перевірте, що у вас є права на запис

---

**Скрипт створено для автоматизації рутинних завдань. Всі важливі налаштування (branch protection, secrets) потрібно робити вручну через GitHub UI.** 