# GitHub Project Setup Guide

## 1. Repository Configuration

### Branch Protection Rules

Set up branch protection for `main` and `develop` branches:

1. Go to **Settings** → **Branches**
2. Add rule for `main`:
   - ✅ Require a pull request before merging
   - ✅ Require approvals: 1
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators
   - ✅ Restrict pushes that create files
   - ✅ Allow force pushes: Never
   - ✅ Allow deletions: Never

3. Add rule for `develop`:
   - ✅ Require a pull request before merging
   - ✅ Require approvals: 1
   - ✅ Require status checks to pass before merging
   - ✅ Include administrators

### Required Status Checks

Enable these status checks:
- `lint` - Code linting
- `test` - Unit and E2E tests
- `build` - Build verification

## 2. GitHub Project Setup

### Create Kanban Board

1. Go to **Projects** tab
2. Click **New project**
3. Choose **Board** template
4. Name: "Economic Dashboard Kanban"
5. Description: "Project management for Economic Dashboard development"

### Configure Project Fields

Add these custom fields:

#### Status Field
- **To Do**: New issues and features
- **In Progress**: Active development
- **Review**: Code review phase
- **Done**: Completed and deployed

#### Priority Field
- **Low**: Nice to have features
- **Medium**: Standard features
- **High**: Important features
- **Critical**: Blocking issues

#### Role Field
- **Developer**: Code implementation
- **Analyst**: Data verification
- **Both**: Requires both roles

#### Milestone Field
- **v1.0.0**: Initial release
- **v1.1.0**: Feature updates
- **v2.0.0**: Major updates

### Automation Rules

Set up these automation rules:

1. **New Issue → To Do**
   - When: Issue is created
   - Action: Move to "To Do" column

2. **PR Created → Review**
   - When: Pull request is created
   - Action: Move linked issue to "Review" column

3. **PR Merged → Done**
   - When: Pull request is merged
   - Action: Move linked issue to "Done" column

## 3. Labels Configuration

Create these labels:

### Type Labels
- `feature` - New features
- `bug` - Bug reports
- `enhancement` - Improvements
- `documentation` - Documentation updates

### Priority Labels
- `priority:low`
- `priority:medium`
- `priority:high`
- `priority:critical`

### Role Labels
- `role:developer`
- `role:analyst`

### Component Labels
- `component:gdp`
- `component:trade`
- `component:country`
- `component:table`
- `component:dashboard`

### Quality Labels
- `ui/ux`
- `performance`
- `accessibility`
- `security`

## 4. Workflow Examples

### Feature Development Workflow

1. **Create Issue**
   ```
   Title: [FEATURE] Add GDP Chart Component
   Labels: feature, priority:high, role:developer, component:gdp
   Assignee: @developer
   Milestone: v1.0.0
   ```

2. **Create Branch**
   ```bash
   git checkout -b feature/#42-gdp-chart
   ```

3. **Development**
   - Write code
   - Add tests
   - Update documentation

4. **Create PR**
   ```
   Title: Add GDP Chart Component
   Description: Closes #42
   Labels: feature, component:gdp
   ```

5. **Review Process**
   - Code review
   - CI/CD checks
   - Approval

6. **Merge**
   - Merge to `develop`
   - Issue moves to "Done"

### Bug Fix Workflow

1. **Create Issue**
   ```
   Title: [BUG] GDP chart not displaying data
   Labels: bug, priority:high, role:developer, component:gdp
   ```

2. **Create Branch**
   ```bash
   git checkout -b bugfix/#43-gdp-chart-display
   ```

3. **Fix and Test**
   - Fix the bug
   - Add regression tests
   - Verify fix

4. **Create PR**
   ```
   Title: Fix GDP chart data display
   Description: Fixes #43
   ```

## 5. Team Roles

### Developer Responsibilities
- Code implementation
- Unit testing
- Code review
- CI/CD maintenance
- Performance optimization

### Analyst Responsibilities
- Data verification
- UI/UX testing
- Accessibility testing
- Business logic validation
- Documentation review

## 6. Quality Gates

### Code Quality
- ESLint passes
- Stylelint passes
- TypeScript compilation
- Unit test coverage >80%

### Accessibility
- WCAG 2.1 AA compliance
- ARIA labels implemented
- Keyboard navigation
- Screen reader compatibility

### Performance
- Lighthouse score >90
- Bundle size <2MB
- Load time <3s

## 7. Release Process

### Pre-release
1. Create `release/v1.0.0` branch from `develop`
2. Update version numbers
3. Update changelog
4. Final testing

### Release
1. Merge to `main`
2. Create tag `v1.0.0`
3. Deploy to production
4. Update project status

### Post-release
1. Merge back to `develop`
2. Close milestone
3. Archive completed issues

## 8. Monitoring and Metrics

### Key Metrics
- Issues completed per sprint
- Average time to resolution
- Code review time
- Test coverage percentage
- Deployment frequency

### Reports
- Weekly progress reports
- Sprint retrospectives
- Performance metrics
- Quality metrics

## 9. Troubleshooting

### Common Issues
1. **CI/CD failures**: Check logs, fix issues, re-run
2. **Merge conflicts**: Resolve conflicts, update branch
3. **Review delays**: Ping reviewers, escalate if needed
4. **Deployment issues**: Check environment, rollback if needed

### Escalation Path
1. Team lead
2. Project manager
3. Technical lead

## 10. Best Practices

### Issue Management
- Use descriptive titles
- Include acceptance criteria
- Add relevant labels
- Assign appropriate roles

### Code Quality
- Write self-documenting code
- Add comprehensive tests
- Follow coding standards
- Review thoroughly

### Communication
- Update issue status regularly
- Comment on progress
- Ask for help when needed
- Share knowledge with team 