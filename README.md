# 🛡️ TestPilot: AI Security & Code Analysis Dashboard (Public Demo)

![TestPilot Dashboard](./public/assets/testpilot-dashboard.png)

> **IMPORTANT NOTICE:** This repository contains **ONLY the Public Demo frontend interface** of TestPilot. The proprietary AI analysis engine, backend server, real-time connectors, and advanced enterprise security core are **NOT included** in this public release. No customer data, production secrets, or proprietary algorithms are present in this repository.

[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com/)
[![License: Custom](https://img.shields.io/badge/License-Custom-red.svg)](LICENSE)

TestPilot is an advanced, privacy-first cybersecurity and code-quality command center demo. Designed specifically to evaluate codebases, it transforms complex static analysis and vulnerability scanning into actionable, prioritized intelligence for both developers and non-technical stakeholders.

## 🏗️ Architectural Philosophy (Demo Mode)

This public demo runs entirely client-side with simulated evaluation data:
- **Client-Side Simulation:** Scans and reports are generated via client-side mock engines (`scanner-demo.ts`) to showcase the UI/UX and reporting capabilities.
- **Session-Isolated State:** Every project, report, and preference is strictly bound to a local session.
- **Multi-Stage Storage:** Utilizing `sessionStorage` and `localStorage` for transient state and user preferences.

## ⚠️ Disclaimer | إخلاء المسؤولية

This public demo does **not** perform real security analysis.

- All scan results are simulated.
- No backend analysis engine is included.
- No real AI models, API keys, or external integrations are used.
- Do not use this demo for production security decisions, compliance, auditing, or risk assessment.

هذه النسخة التجريبية لا تقوم بتحليل أمني حقيقي.

- جميع نتائج الفحص محاكاة.
- لا يوجد محرك تحليل خلفي.
- لا يتم استخدام نماذج ذكاء اصطناعي حقيقية أو مفاتيح API أو تكاملات خارجية.
- لا يجوز استخدام هذه النسخة لقرارات أمنية إنتاجية أو امتثال أو تدقيق أو تقييم مخاطر.

## ✨ Core Capabilities (Demo Showcase)

- **Security & Code-Quality Dashboard UI:** Explore the reporting and triage experience.
- **Simulated Scanning:** Client-side demo scanner with mock data.
- **Severity-Based Triage:** Issues classified as Critical, High, Medium, and Low.
- **Dark Mode & i18n:** Fully localized (English/Arabic RTL support) with a responsive modern dark/light visual language.
- **Executive Reporting:** Board-ready technical summaries.

## 🚀 Getting Started with the Public Demo

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/medissaoui711/TestPilot.git
   cd TestPilot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## 📂 Documentation

Documentation for the private production architecture is not included in this public demo repository.

For security concerns, use GitHub private vulnerability reporting.

## 📜 License

Distributed under the TestPilot Public Demo License (v1.0). See `LICENSE` for more information.
