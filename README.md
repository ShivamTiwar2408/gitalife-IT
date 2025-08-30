# GitaLife Smoke Tests

Automated daily smoke tests for [gitalife.co.in], powered by Playwright and GitHub Actions.

---

##  Purpose

These tests provide a minimal, automated daily check to ensure key pages (Home, Volunteer, Contact, Blog) on your site are loading correctly and contain expected content. If any test fails, the workflow will fail—triggering alerts and generating artifacts (screenshots, reports) for debugging.

---
## 📂 Files & Structure

gitalife-IT/
├── playwright.config.js # Playwright configuration
├── package.json # Defines dependencies & test scripts
├── tests/ # Test files
│ └── smoke.spec.js # Core smoke test scenarios
└── .github/
└── workflows/
└── daily-check.yml # GitHub Actions workflow (daily run)

---

##  Setup & Deployment

1. **Clone the repo:**
    ```bash
    git clone https://github.com/ShivamTiwar2408/gitalife-IT.git
    cd gitalife-IT
    ```

2. **Install dependencies and browsers:**
    ```bash
    npm install
    npx playwright install --with-deps
    ```

3. **Run tests locally:**
    ```bash
    npm test
    # View the test report:
    npx playwright show-report
    ```

4. **GitHub Actions:** On push or via schedule (daily at **07:00 IST / 01:30 UTC**), the workflow:
   - Installs dependencies  
   - Runs your smoke tests  
   - Uploads artifacts if any tests fail  
   - Alerts (via GitHub notification), optionally extendable with Slack/Telegram

---

##  How It Works

- Each test visits one page (`/`, `/volunteer`, `/contact`, `/blog`) and checks:
  - The HTTP response is OK  
  - The page contains a key piece of text (e.g., “GitaLife”, volunteer page heading, your public email, or a newsletter block)

- If any check fails, **Playwright** fails the suite, and **GitHub Actions** alerts you and archives test artifacts for inspection.

---

##  Optional: Alerts via Slack or Telegram

To supplement GitHub email alerts, you can add a step in the workflow for Slack or Telegram notifications. Available if you add your webhook URL or bot token & chat ID as GitHub secrets.

---

##  Summary

- **Free** daily checks for your important pages  
- Clear pass/fail status with debugging data  
- Easy to maintain and extend—just add test cases for new pages!

---

Let me know if you'd like to include a ready-made optional Slack or Telegram alert snippet or help extend it with more test scenarios!
