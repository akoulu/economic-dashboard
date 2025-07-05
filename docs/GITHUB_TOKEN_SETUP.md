# GitHub Personal Access Token - Налаштування

## 🔑 Створення токену з правильними правами

### Крок 1: Перейдіть до налаштувань токенів

1. Відкрийте GitHub.com
2. Натисніть на ваш аватар (праворуч вгорі)
3. Виберіть **Settings**
4. У лівому меню знайдіть **Developer settings**
5. Натисніть **Personal access tokens**
6. Виберіть **Tokens (classic)**

### Крок 2: Створіть новий токен

1. Натисніть **Generate new token (classic)**
2. Виберіть **Generate new token (classic)** (не fine-grained)

### Крок 3: Налаштуйте права доступу

**Обов'язкові права (scopes):**

- ✅ **repo** (повний доступ до репозиторіїв)
  - `repo:status` - доступ до статусу комітів
  - `repo_deployment` - доступ до деплоїв
  - `public_repo` - доступ до публічних репозиторіїв
  - `repo:invite` - запрошення до репозиторіїв
  - `security_events` - події безпеки

- ✅ **workflow** (для GitHub Actions)
- ✅ **write:packages** (для пакетів, якщо потрібно)
- ✅ **delete:packages** (для видалення пакетів, якщо потрібно)

### Крок 4: Налаштуйте термін дії

- **Expiration**: Виберіть термін дії (рекомендую 90 днів)
- **Note**: Додайте опис, наприклад "Economic Dashboard Setup"

### Крок 5: Згенеруйте токен

1. Прокрутіть вниз
2. Натисніть **Generate token**
3. **ВАЖЛИВО**: Скопіюйте токен одразу (він покажеться тільки один раз!)

## 🚀 Використання токену

### Запуск скрипта з новим токеном:

```bash
node scripts/setup-github.js --token YOUR_NEW_TOKEN --repo akoulu/economic-dashboard
```

### Або через npm:

```bash
npm run setup:github -- --token YOUR_NEW_TOKEN --repo akoulu/economic-dashboard
```

## 🔒 Безпека токену

### ⚠️ Важливі правила:

1. **Ніколи не діліться токеном** з іншими людьми
2. **Не комітьте токен** у Git репозиторій
3. **Використовуйте мінімальні права** для безпеки
4. **Регулярно оновлюйте** токен (кожні 90 днів)
5. **Видаляйте старі токени** після використання

### Якщо токен потрапив у публічний доступ:

1. **Негайно видаліть** токен з GitHub
2. **Створіть новий** токен
3. **Оновіть всі** місця використання

## 🛠️ Альтернативні способи

### Якщо не хочете використовувати токен:

1. **Ручне створення міток** через GitHub UI
2. **Використання GitHub CLI** (gh)
3. **Створення через API** з іншими методами авторизації

### GitHub CLI альтернатива:

```bash
# Встановлення GitHub CLI
# https://cli.github.com/

# Авторизація
gh auth login

# Створення міток
gh api repos/akoulu/economic-dashboard/labels -f name=feature -f color=0366d6 -f description="New features"
```

## 🔍 Перевірка прав токену

### Тестовий запит:

```bash
curl -H "Authorization: token YOUR_TOKEN" \
     https://api.github.com/repos/akoulu/economic-dashboard
```

### Очікувана відповідь:

```json
{
  "id": 123456789,
  "name": "economic-dashboard",
  "full_name": "akoulu/economic-dashboard",
  "private": true,
  "permissions": {
    "admin": true,
    "push": true,
    "pull": true
  }
}
```

## 📞 Підтримка

### Якщо виникають проблеми:

1. **Перевірте права токену** - має бути `repo` scope
2. **Перевірте термін дії** - токен може бути застарілим
3. **Перевірте права до репозиторію** - маєте бути власником або мати права на запис
4. **Перевірте налаштування репозиторію** - Issues мають бути увімкнені

### Помилки та рішення:

| Помилка | Рішення |
|---------|---------|
| `Resource not accessible by personal access token` | Додайте права `repo` |
| `Token expired` | Створіть новий токен |
| `Repository not found` | Перевірте назву репозиторію |
| `Not authorized` | Перевірте права доступу |

---

**Після створення правильного токену, скрипт автоматично створить всі мітки, milestones та базові issues!** 