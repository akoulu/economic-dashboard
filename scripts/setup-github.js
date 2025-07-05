#!/usr/bin/env node

const { Octokit } = require('@octokit/rest');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Конфігурація міток
const labels = [
  // Типи задач
  { name: 'feature', color: '0366d6', description: 'New features' },
  { name: 'bug', color: 'd73a4a', description: 'Bug reports' },
  { name: 'enhancement', color: 'a2eeef', description: 'Improvements' },
  { name: 'documentation', color: '0075ca', description: 'Documentation updates' },
  
  // Пріоритети
  { name: 'priority:low', color: '0e8a16', description: 'Low priority' },
  { name: 'priority:medium', color: 'fbca04', description: 'Medium priority' },
  { name: 'priority:high', color: 'd93f0b', description: 'High priority' },
  { name: 'priority:critical', color: 'b60205', description: 'Critical priority' },
  
  // Ролі
  { name: 'role:developer', color: '5319e7', description: 'Developer role' },
  { name: 'role:analyst', color: '1d76db', description: 'Analyst role' },
  
  // Компоненти
  { name: 'component:gdp', color: 'c2e0c6', description: 'GDP component' },
  { name: 'component:trade', color: 'bfdadc', description: 'Trade component' },
  { name: 'component:country', color: 'd4c5f9', description: 'Country component' },
  { name: 'component:dashboard', color: 'fef2c0', description: 'Dashboard component' },
  { name: 'component:table', color: 'f9d0c4', description: 'Table component' },
  
  // Якість
  { name: 'ui/ux', color: 'fef7c0', description: 'UI/UX related' },
  { name: 'performance', color: 'c2e0c6', description: 'Performance related' },
  { name: 'accessibility', color: 'd4c5f9', description: 'Accessibility related' },
  { name: 'security', color: 'ff0000', description: 'Security related' },
  
  // Статуси
  { name: 'triage', color: 'fef7c0', description: 'Needs triage' },
  { name: 'help wanted', color: '008672', description: 'Help wanted' },
  { name: 'good first issue', color: '7057ff', description: 'Good for newcomers' },
  { name: 'wontfix', color: 'ffffff', description: 'Will not fix' },
  { name: 'duplicate', color: 'cfd3d7', description: 'Duplicate issue' }
];

// Конфігурація milestones
const milestones = [
  { title: 'v1.0.0', description: 'Initial release', state: 'open' },
  { title: 'v1.1.0', description: 'Feature updates', state: 'open' },
  { title: 'v2.0.0', description: 'Major updates', state: 'open' },
  { title: 'Sprint 1', description: 'First development sprint', state: 'open' },
  { title: 'Sprint 2', description: 'Second development sprint', state: 'open' }
];

async function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function showHelp() {
  console.log('🚀 GitHub Repository Setup Script');
  console.log('================================\n');
  console.log('Використання:');
  console.log('  node scripts/setup-github.js [--token TOKEN] [--repo OWNER/REPO]');
  console.log('  npm run setup:github [-- --token TOKEN] [--repo OWNER/REPO]');
  console.log('\nПараметри:');
  console.log('  --token TOKEN     GitHub Personal Access Token');
  console.log('  --repo OWNER/REPO Repository (наприклад: akoulu/economic-dashboard)');
  console.log('  --help           Показати цю довідку');
  console.log('\nПриклади:');
  console.log('  node scripts/setup-github.js --token ghp_xxx --repo akoulu/economic-dashboard');
  console.log('  npm run setup:github -- --token ghp_xxx --repo akoulu/economic-dashboard');
}

async function setupGitHub() {
  // Парсинг аргументів командного рядка
  const args = process.argv.slice(2);
  let token = null;
  let repoInput = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--help' || args[i] === '-h') {
      showHelp();
      return;
    } else if (args[i] === '--token') {
      token = args[i + 1];
      i++;
    } else if (args[i] === '--repo') {
      repoInput = args[i + 1];
      i++;
    }
  }

  console.log('🚀 GitHub Repository Setup Script');
  console.log('================================\n');

  // Отримання токену
  if (!token) {
    token = await question('Введіть ваш GitHub Personal Access Token: ');
  }
  if (!token) {
    console.error('❌ Токен обов\'язковий!');
    process.exit(1);
  }

  // Отримання репозиторію
  if (!repoInput) {
    repoInput = await question('Введіть репозиторій (формат: owner/repo): ');
  }
  if (!repoInput || !repoInput.includes('/')) {
    console.error('❌ Неправильний формат репозиторію! Використовуйте: owner/repo');
    process.exit(1);
  }

  const [owner, repo] = repoInput.split('/');

  // Створення Octokit клієнта
  const octokit = new Octokit({
    auth: token
  });

  try {
    console.log('\n🔍 Перевірка доступу до репозиторію...');
    await octokit.repos.get({ owner, repo });
    console.log('✅ Репозиторій знайдено!\n');

    // Створення міток
    console.log('🏷️  Створення міток...');
    for (const label of labels) {
      try {
        await octokit.issues.createLabel({
          owner,
          repo,
          name: label.name,
          color: label.color,
          description: label.description
        });
        console.log(`✅ Створено мітку: ${label.name}`);
      } catch (error) {
        if (error.status === 422) {
          console.log(`⚠️  Мітка вже існує: ${label.name}`);
        } else {
          console.error(`❌ Помилка створення мітки ${label.name}:`, error.message);
        }
      }
    }

    // Створення milestones
    console.log('\n🎯 Створення milestones...');
    for (const milestone of milestones) {
      try {
        await octokit.issues.createMilestone({
          owner,
          repo,
          title: milestone.title,
          description: milestone.description,
          state: milestone.state
        });
        console.log(`✅ Створено milestone: ${milestone.title}`);
      } catch (error) {
        if (error.status === 422) {
          console.log(`⚠️  Milestone вже існує: ${milestone.title}`);
        } else {
          console.error(`❌ Помилка створення milestone ${milestone.title}:`, error.message);
        }
      }
    }

    // Створення базових issues
    console.log('\n📝 Створення базових issues...');
    
    const sampleIssues = [
      {
        title: '[FEATURE] Add GDP Chart Component',
        body: `## Feature Description
Add interactive GDP chart component using AG Charts.

## Acceptance Criteria
- [ ] Chart displays GDP data for RU, CN, IN, US (2014-2025)
- [ ] Support for zooming and tooltips
- [ ] Export functionality to PNG
- [ ] WCAG 2.1 compliance
- [ ] Unit test coverage >80%

## Technical Requirements
- Component: GdpChartComponent
- Dependencies: AG Charts, Angular Material
- Data Format: JSON

## Priority
- [x] High

## Role Assignment
- [x] Developer (implementation)

## Milestone
- [x] v1.0.0`,
        labels: ['feature', 'priority:high', 'role:developer', 'component:gdp', 'ui/ux']
      },
      {
        title: '[BUG] Fix API error handling',
        body: `## Bug Description
API errors are not properly handled in the dashboard.

## Steps to Reproduce
1. Disconnect internet
2. Try to load dashboard data
3. See unhandled error

## Expected Behavior
Show user-friendly error message with retry option.

## Actual Behavior
Application crashes with technical error.

## Environment
- Browser: Chrome
- Version: Latest
- OS: Windows

## Acceptance Criteria
- [ ] Graceful error handling
- [ ] User-friendly error messages
- [ ] Retry functionality
- [ ] Error logging

## Priority
- [x] High

## Role Assignment
- [x] Developer (code fix)`,
        labels: ['bug', 'priority:high', 'role:developer', 'component:dashboard']
      },
      {
        title: '[ENHANCEMENT] Add data validation',
        body: `## Enhancement Description
Add comprehensive data validation for economic indicators.

## Problem Statement
Currently, invalid data can be displayed without warning.

## Proposed Solution
Implement validation layer with user notifications.

## Acceptance Criteria
- [ ] Validate GDP data ranges
- [ ] Check for missing data
- [ ] Show validation warnings
- [ ] Log validation errors

## Priority
- [x] Medium

## Role Assignment
- [x] Analyst (data verification)
- [x] Developer (implementation)`,
        labels: ['enhancement', 'priority:medium', 'role:analyst', 'role:developer']
      }
    ];

    for (const issue of sampleIssues) {
      try {
        await octokit.issues.create({
          owner,
          repo,
          title: issue.title,
          body: issue.body,
          labels: issue.labels
        });
        console.log(`✅ Створено issue: ${issue.title}`);
      } catch (error) {
        console.error(`❌ Помилка створення issue: ${error.message}`);
      }
    }

    console.log('\n🎉 Налаштування завершено!');
    console.log('\n📋 Наступні кроки:');
    console.log('1. Налаштуйте branch protection rules вручну');
    console.log('2. Додайте секрети для CI/CD (VERCEL_TOKEN, тощо)');
    console.log('3. Налаштуйте GitHub Project automation');
    console.log('4. Додайте учасників у CODEOWNERS');

  } catch (error) {
    console.error('❌ Помилка:', error.message);
    if (error.status === 401) {
      console.error('Перевірте правильність токену та права доступу');
    } else if (error.status === 404) {
      console.error('Репозиторій не знайдено або немає прав доступу');
    }
  } finally {
    rl.close();
  }
}

// Запуск скрипта
if (require.main === module) {
  setupGitHub().catch(console.error);
}

module.exports = { setupGitHub, labels, milestones }; 