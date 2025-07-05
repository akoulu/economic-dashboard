# 🚀 Ручне налаштування GitHub - Покрокова інструкція

## 📋 Що ми налаштуємо за 15 хвилин:

1. ✅ Мітки (Labels) - 5 хвилин
2. ✅ Branch Protection - 3 хвилини  
3. ✅ GitHub Secrets - 2 хвилини
4. ✅ Project Automation - 5 хвилин

---

## 🏷️ Крок 1: Створення міток (Labels)

### 1.1 Відкрийте репозиторій
- Перейдіть на https://github.com/akoulu/economic-dashboard
- Натисніть вкладку **Issues** (у верхньому меню)

### 1.2 Створіть мітки
- У правому верхньому куті натисніть **Labels**
- Натисніть **New label**

**Створіть ці мітки (копіюйте назву, колір та опис):**

| Назва | Колір | Опис |
|-------|-------|------|
| `feature` | `0366d6` | New features |
| `bug` | `d73a4a` | Bug reports |
| `enhancement` | `a2eeef` | Improvements |
| `documentation` | `0075ca` | Documentation updates |
| `priority:low` | `0e8a16` | Low priority |
| `priority:medium` | `fbca04` | Medium priority |
| `priority:high` | `d93f0b` | High priority |
| `priority:critical` | `b60205` | Critical priority |
| `role:developer` | `5319e7` | Developer role |
| `role:analyst` | `1d76db` | Analyst role |
| `component:gdp` | `c2e0c6` | GDP component |
| `component:trade` | `bfdadc` | Trade component |
| `component:country` | `d4c5f9` | Country component |
| `component:dashboard` | `fef2c0` | Dashboard component |
| `component:table` | `f9d0c4` | Table component |
| `ui/ux` | `fef7c0` | UI/UX related |
| `performance` | `c2e0c6` | Performance related |
| `accessibility` | `d4c5f9` | Accessibility related |
| `security` | `ff0000` | Security related |

**Для кожної мітки:**
1. Введіть назву
2. Виберіть колір (натисніть на колірний квадратик)
3. Додайте опис
4. Натисніть **Create label**

---

## 🛡️ Крок 2: Branch Protection

### 2.1 Відкрийте налаштування
- Натисніть вкладку **Settings** (у верхньому меню)
- У лівому меню знайдіть **Branches**

### 2.2 Налаштуйте захист для main
- Натисніть **Add branch protection rule**
- У полі **Branch name pattern** введіть: `main`
- Поставте галочки:
  - ✅ **Require a pull request before merging**
  - ✅ **Require approvals** (встановіть 1)
  - ✅ **Require status checks to pass before merging**
  - ✅ **Require branches to be up to date before merging**
- Натисніть **Create**

### 2.3 Налаштуйте захист для develop
- Повторіть для гілки `develop`

---

## 🔐 Крок 3: GitHub Secrets

### 3.1 Відкрийте секрети
- Settings → **Secrets and variables** → **Actions**
- Натисніть **New repository secret**

### 3.2 Додайте секрети (якщо потрібно)
- `VERCEL_TOKEN` (отримайте з Vercel)
- `VERCEL_ORG_ID` (отримайте з Vercel)
- `VERCEL_PROJECT_ID` (отримайте з Vercel)
- `FIREBASE_SERVICE_ACCOUNT` (отримайте з Firebase)

---

## 🤖 Крок 4: GitHub Project Automation

### 4.1 Відкрийте ваш Project
- Перейдіть на вкладку **Projects**
- Відкрийте ваш Kanban board

### 4.2 Налаштуйте автоматизацію
- Натисніть **Settings** (у проекті)
- Знайдіть **Automation**
- Додайте правила:
  - **New issue** → **To Do**
  - **New PR** → **Review**
  - **Merged PR** → **Done**

---

## 🎯 Крок 5: Створення перших Issues

### 5.1 Створіть тестову задачу
- Перейдіть на **Issues**
- Натисніть **New issue**
- Виберіть шаблон **Feature request**
- Заповніть:
  - **Title**: `[FEATURE] Add GDP Chart Component`
  - **Labels**: `feature`, `priority:high`, `role:developer`, `component:gdp`
  - **Assignee**: призначте себе
- Натисніть **Submit new issue**

### 5.2 Створіть ще 2 issues
- `[BUG] Fix API error handling` (labels: `bug`, `priority:high`)
- `[ENHANCEMENT] Add data validation` (labels: `enhancement`, `priority:medium`)

---

## ✅ Перевірка налаштувань

### Що має працювати:
1. ✅ Мітки відображаються в Issues
2. ✅ Branch protection блокує прямі коміти в main
3. ✅ GitHub Actions запускаються при PR
4. ✅ Issues автоматично додаються в Project

### Тест:
1. Створіть нову гілку: `feature/test-setup`
2. Зробіть зміни
3. Створіть PR
4. Перевірте, що:
   - CI/CD запустився
   - Потрібне ревью
   - Issue з'явилася в Project

---

## 🆘 Якщо щось не працює:

### Проблема: Мітки не створюються
**Рішення:** Перевірте, що ви власник репозиторію або маєте права на запис

### Проблема: Branch protection не працює
**Рішення:** Перевірте, що гілка `main` існує і має коміти

### Проблема: GitHub Actions не запускаються
**Рішення:** Перевірте, що файли `.github/workflows/` є в репозиторії

### Проблема: Project не оновлюється
**Рішення:** Перевірте налаштування automation у Project

---

## 🎉 Результат

Після виконання всіх кроків у вас буде:
- ✅ 20+ міток для організації задач
- ✅ Захист гілок main/develop
- ✅ Автоматичні CI/CD перевірки
- ✅ Kanban board з автоматизацією
- ✅ Готові шаблони для Issues/PR

**Час виконання: 15-20 хвилин**

---

**Почніть з Кроку 1 (мітки) - це найважливіше і найпростіше!** 