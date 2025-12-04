## 📸 What is Snapshot Testing?

Snapshot testing captures the output of your code at a point in time and stores it as a reference. Future test runs compare the current output against the stored snapshot to detect unexpected changes.

## 🚀 Quick Start

### Run Snapshot Tests

```bash
# Run all tests (including snapshots)
npm test

# Run only snapshot tests
npm test -- uiComponent.test.js

# Run tests in watch mode
npm run test:watch
```

### Update Snapshots

When you intentionally change your code:

```bash
# Update all snapshots
npm test -- -u

# Update specific test file snapshots
npm test -- -u uiComponent.test.js

# In watch mode, press 'u' to update snapshots
```

## 📋 Three Essential Snapshot Testing Techniques

### 1. Basic Snapshot Testing

The simplest form - capture the entire output:

```javascript
test('should match user card snapshot', () => {
  const user = {
    name: 'Bug Hunter',
    email: 'bug@automateNow.io',
    role: 'Tester',
    joinDate: '2026-01-01'
  };

  const component = UIComponent.renderUserCard(user);
  
  // Creates snapshot on first run, compares on subsequent runs
  expect(component).toMatchSnapshot();
});
```

**Snapshot file location:** `tests/__snapshots__/uiComponent.test.js.snap`

**When to use:** Perfect for complex objects, UI components, or structured data that you want to track for changes.

### 2. Inline Snapshots

Store snapshots directly in your test file:

```javascript
test('should match navigation inline snapshot', () => {
  const navItems = [
    { label: 'Home', href: '/', active: true, icon: '🏠' },
    { label: 'About', href: '/about', active: false, icon: 'ℹ️' }
  ];

  const component = UIComponent.renderNavigation(navItems);
  
  // Snapshot appears directly in test file
  expect(component).toMatchInlineSnapshot(`
{
  "children": [
    {
      "className": "nav-link active",
      "href": "/",
      "icon": "🏠",
      "text": "Home",
      "type": "a",
    },
    {
      "className": "nav-link",
      "href": "/about",
      "icon": "ℹ️",
      "text": "About",
      "type": "a",
    },
  ],
  "className": "main-navigation",
  "type": "nav",
}
`);
});
```

**Benefits:** 
- Easier code reviews (no separate file to check)
- Better for small, focused snapshots
- See test and snapshot together

**When to use:** For small to medium-sized snapshots where keeping everything in one file aids readability.

### 3. Property Matchers (Dynamic Values)

Handle timestamps, IDs, and other dynamic values:

```javascript
test('should match API response with dynamic values', () => {
  const response = UIComponent.generateApiResponse({
    success: true,
    data: { userId: 123, name: 'Test User' }
  });

  expect(response).toMatchSnapshot({
    timestamp: expect.any(String),  // Accepts any string value
    metadata: {
      requestId: expect.any(String),
      version: expect.any(String)
    }
  });
});
```

**Use cases:** 
- Timestamps and dates
- Generated UUIDs or IDs
- Random values
- Any field that changes between test runs

**When to use:** When your output contains dynamic data but you still want to snapshot the structure and static values.

## 🎯 When to Use Snapshot Testing

### ✅ Good Use Cases

- **UI Components**: React, Vue, or component-like structures
- **API Responses**: Consistent response formats
- **Configuration Objects**: Complex config structures
- **Generated HTML/Markup**: Template outputs
- **Data Transformations**: Complex object mappings

### ❌ Avoid Snapshot Testing For

- Random or truly dynamic values (without property matchers)
- Large binary files
- Frequently changing data
- Test outputs that are hard to review
- Simple boolean/number assertions (use `toBe()` instead)

## 🔍 Reviewing Snapshot Changes

When a snapshot test fails:

1. **Review the diff** - Jest shows what changed
2. **Determine if intentional**:
   - ✅ Expected change → Update snapshot with `npm test -- -u`
   - ❌ Bug introduced → Fix your code
3. **Review snapshot diffs in PRs** - Treat snapshots as code

### Example Test Failure Output

```
  ● should match user card snapshot

    expect(received).toMatchSnapshot()

    Snapshot name: `should match user card snapshot 1`

    - Snapshot  - 1
    + Received  + 1

      {
        "children": [
          {
            "children": [
              {
    -           "text": "Bug Hunter",
    +           "text": "Bug Squasher",
                "type": "h2",
              },
```

## 🛠️ Snapshot Testing Workflow

### Initial Creation

```bash
# 1. Write your test with toMatchSnapshot()
npm test

# 2. Review generated snapshots in __snapshots__ folder
# 3. Commit both test file and snapshot file to git
```

### Making Changes

```bash
# 1. Modify your component
npm test

# 2. Test fails with diff
# 3. If change is intentional:
npm test -- -u

# 4. Review updated snapshot
# 5. Commit updated snapshot
```

## 💡 Best Practices

### 1. Keep Snapshots Small and Focused

```javascript
// ✅ Good - Small, specific snapshot
test('should render navigation with 3 items', () => {
  const nav = UIComponent.renderNavigation(threeItems);
  expect(nav).toMatchSnapshot();
});

// ❌ Bad - Too large, hard to review
test('should render entire page', () => {
  const page = renderEntireApplication();
  expect(page).toMatchSnapshot();  // Snapshot would be huge
});
```

### 2. Use Descriptive Test Names

```javascript
// ✅ Good - Clear what's being tested
test('should render premium user card with badge', () => {
  expect(component).toMatchSnapshot();
});

// ❌ Bad - Unclear purpose
test('test 1', () => {
  expect(component).toMatchSnapshot();
});
```

### 3. Use Property Matchers for Dynamic Data

```javascript
// ✅ Good - Handles dynamic timestamp
expect(response).toMatchSnapshot({
  timestamp: expect.any(String),
  id: expect.any(Number)
});

// ❌ Bad - Will fail every time due to timestamp
expect(response).toMatchSnapshot();
```

### 4. Commit Snapshots to Version Control

```bash
git add tests/__snapshots__/
git commit -m "Add snapshot tests for UI components"
```

### 5. Review Snapshot Changes in Code Reviews

- Treat snapshot changes like code changes
- Verify changes are intentional
- Look for unexpected modifications

## 🧪 Running Different Snapshot Commands

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode (interactive)
npm run test:watch

# Update all failing snapshots
npm test -- -u

# Update snapshots for specific file
npm test -- -u uiComponent.test.js

# See which tests have snapshots
npm test -- --verbose

# Clear cache and run tests
npm test -- --clearCache && npm test
```