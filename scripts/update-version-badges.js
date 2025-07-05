#!/usr/bin/env node

/**
 * Update version badges in README.md
 * Usage: node scripts/update-version-badges.js
 */

const fs = require('fs');
const path = require('path');

// Read package.json to get current version
function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return packageJson.version;
}

// Update version badge in README.md
function updateVersionBadge() {
  const version = getCurrentVersion();
  const readmePath = path.join(__dirname, '../README.md');
  
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  
  // Update version badge
  const versionBadgeRegex = /\[!\[Version\]\(https:\/\/img\.shields\.io\/badge\/version-[^)]+\)\]\([^)]+\)/;
  const newVersionBadge = `[![Version](https://img.shields.io/badge/version-${version}-blue.svg?style=flat-square)](https://github.com/akoulu/economic-dashboard/releases)`;
  
  if (versionBadgeRegex.test(readmeContent)) {
    readmeContent = readmeContent.replace(versionBadgeRegex, newVersionBadge);
    fs.writeFileSync(readmePath, readmeContent);
    console.log(`✅ Updated version badge to ${version}`);
  } else {
    console.log('⚠️  Version badge not found in README.md');
  }
}

// Update Angular version badge
function updateAngularBadge() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const angularVersion = packageJson.dependencies['@angular/core']?.replace('^', '') || '20';
  
  const readmePath = path.join(__dirname, '../README.md');
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  
  // Update Angular badge
  const angularBadgeRegex = /\[!\[Angular\]\(https:\/\/img\.shields\.io\/badge\/Angular-[^)]+\)\]\([^)]+\)/;
  const newAngularBadge = `[![Angular](https://img.shields.io/badge/Angular-${angularVersion}-red.svg?style=for-the-badge&logo=angular)](https://angular.io/)`;
  
  if (angularBadgeRegex.test(readmeContent)) {
    readmeContent = readmeContent.replace(angularBadgeRegex, newAngularBadge);
    fs.writeFileSync(readmePath, readmeContent);
    console.log(`✅ Updated Angular badge to ${angularVersion}`);
  } else {
    console.log('⚠️  Angular badge not found in README.md');
  }
}

// Main execution
if (require.main === module) {
  console.log('Updating version badges...\n');
  
  try {
    updateVersionBadge();
    updateAngularBadge();
    console.log('\n✅ Version badges updated successfully!');
  } catch (error) {
    console.error('❌ Error updating badges:', error.message);
    process.exit(1);
  }
}

module.exports = { getCurrentVersion, updateVersionBadge, updateAngularBadge }; 