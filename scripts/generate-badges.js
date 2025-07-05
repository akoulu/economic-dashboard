#!/usr/bin/env node

/**
 * Generate static badges for the project
 * Usage: node scripts/generate-badges.js
 */

const fs = require('fs');
const path = require('path');

// Badge configurations
const badges = {
  // Technology badges
  angular: {
    url: 'https://img.shields.io/badge/Angular-20-red.svg?style=for-the-badge&logo=angular',
    link: 'https://angular.io/',
    alt: 'Angular'
  },
  typescript: {
    url: 'https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=for-the-badge&logo=typescript',
    link: 'https://www.typescriptlang.org/',
    alt: 'TypeScript'
  },
  nodejs: {
    url: 'https://img.shields.io/badge/Node.js-20+-green.svg?style=for-the-badge&logo=node.js',
    link: 'https://nodejs.org/',
    alt: 'Node.js'
  },
  license: {
    url: 'https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge',
    link: 'LICENSE',
    alt: 'License'
  },

  // Status badges
  cicd: {
    url: 'https://github.com/akoulu/economic-dashboard/workflows/CI%2FCD/badge.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard/actions',
    alt: 'CI/CD'
  },
  coverage: {
    url: 'https://img.shields.io/badge/coverage-80%25-brightgreen.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard',
    alt: 'Code Coverage'
  },
  quality: {
    url: 'https://img.shields.io/badge/code%20quality-A-brightgreen.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard',
    alt: 'Code Quality'
  },
  security: {
    url: 'https://img.shields.io/badge/security-A-brightgreen.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard',
    alt: 'Security'
  },

  // GitHub badges
  issues: {
    url: 'https://img.shields.io/github/issues/akoulu/economic-dashboard.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard/issues',
    alt: 'GitHub Issues'
  },
  prs: {
    url: 'https://img.shields.io/github/issues-pr/akoulu/economic-dashboard.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard/pulls',
    alt: 'GitHub Pull Requests'
  },
  stars: {
    url: 'https://img.shields.io/github/stars/akoulu/economic-dashboard.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard/stargazers',
    alt: 'GitHub Stars'
  },
  forks: {
    url: 'https://img.shields.io/badge/forks-0-blue.svg?style=flat-square',
    link: 'https://github.com/akoulu/economic-dashboard/network',
    alt: 'GitHub Forks'
  },

  // Deployment badges
  vercel: {
    url: 'https://img.shields.io/badge/Deploy%20to-Vercel-black.svg?style=for-the-badge&logo=vercel',
    link: 'https://vercel.com',
    alt: 'Deploy to Vercel'
  },
  firebase: {
    url: 'https://img.shields.io/badge/Deploy%20to-Firebase-orange.svg?style=for-the-badge&logo=firebase',
    link: 'https://firebase.google.com',
    alt: 'Deploy to Firebase'
  }
};

// Generate badge HTML
function generateBadgeHtml(badge) {
  return `[![${badge.alt}](${badge.url})](${badge.link})`;
}

// Generate all badges
function generateAllBadges() {
  console.log('Generating badges...\n');

  // Technology badges
  console.log('## Technology Badges');
  Object.entries(badges).slice(0, 4).forEach(([key, badge]) => {
    console.log(generateBadgeHtml(badge));
  });
  console.log('');

  // Status badges
  console.log('## Status Badges');
  Object.entries(badges).slice(4, 8).forEach(([key, badge]) => {
    console.log(generateBadgeHtml(badge));
  });
  console.log('');

  // GitHub badges
  console.log('## GitHub Badges');
  Object.entries(badges).slice(8, 12).forEach(([key, badge]) => {
    console.log(generateBadgeHtml(badge));
  });
  console.log('');

  // Deployment badges
  console.log('## Deployment Badges');
  Object.entries(badges).slice(12).forEach(([key, badge]) => {
    console.log(generateBadgeHtml(badge));
  });
}

// Generate badges file
function generateBadgesFile() {
  const badgesContent = `# Project Badges

This file contains all the badges used in the project README.

${Object.entries(badges).map(([key, badge]) => 
  `## ${badge.alt}\n${generateBadgeHtml(badge)}`
).join('\n\n')}

## Usage

Copy the badge HTML from above and paste it into your README.md file.

## Customization

To customize badges, edit the \`badges\` object in \`scripts/generate-badges.js\`.
`;

  fs.writeFileSync(path.join(__dirname, '../docs/badges.md'), badgesContent);
  console.log('✅ Generated docs/badges.md');
}

// Main execution
if (require.main === module) {
  generateAllBadges();
  generateBadgesFile();
  console.log('\n✅ Badge generation complete!');
}

module.exports = { badges, generateBadgeHtml }; 