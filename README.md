# LifeWise AI — Your Intelligent Personal Life Assistant

> **Amazon Developer Hackathon 2026** — Alexa+ Track
> Built with Next.js 14, Prisma/SQLite, TypeScript, and a self-hosted Model Context Protocol (MCP) server.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Initialize the Database
```bash
npx prisma db push
npx tsx prisma/seed.ts
```

### 3. Start the Application

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm run build
npm start
```

App runs at **http://localhost:3000**

### 4. Start the MCP Server (Alexa+ Track)

In a separate terminal:
```bash
npm run mcp:server
```

MCP server runs at **http://localhost:3001**

---

## Running Tests

```bash
npm run test
```

**14/14 tests pass** across 2 test files (financeCalculations.test.ts, tools.test.ts).

---

## Command Reference

```bash
npm install               # Install dependencies
npx prisma db push        # Create/sync schema
npx tsx prisma/seed.ts    # Seed demo data
npm run dev               # Dev server (port 3000)
npm run mcp:server        # MCP server (port 3001)
npm run build             # Build for production
npm start                 # Serve production build
npm run test              # Run all tests
```

---

## MCP Tools (Alexa+ Track)

The self-hosted MCP server exposes 8 tools:

| Tool | Description |
|------|-------------|
| `get_financial_summary` | Complete financial overview with transparent calculations |
| `get_upcoming_bills` | Bills due before next payday (paid bills excluded) |
| `get_spending_summary` | Category breakdown and spending intelligence |
| `check_purchase_affordability` | Can I afford this? Full calculation chain shown |
| `get_savings_progress` | All savings goals with trajectory and required contributions |
| `get_daily_briefing` | Synthesized daily life brief |
| `get_wellness_preferences` | Dietary, health, and reminder preferences |
| `create_reminder` | Set a new reminder |

---

## Tech Stack

- **Frontend:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM, SQLite
- **Testing:** Vitest 2.x
- **MCP:** @modelcontextprotocol/sdk v1.0.4, Streamable HTTP/SSE
- **Voice:** Browser Web Speech API (no backend required)

---

## Features

- Executive dashboard with 4 key financial metrics
- Transparent available-to-spend calculation (with visible assumptions)
- Transaction management with search and filtering
- Bill tracking with paid/unpaid toggles (paid bills excluded from deductions)
- Savings goals with monthly contribution calculator
- Optional wellness preferences (fully deletable, GDPR-aware)
- Deterministic AI assistant (no API key required)
- Daily briefing with browser text-to-speech
- Alexa+ voice simulator with live MCP tool invocation logs
- What-If financial simulator (zero data mutation)
- Demo data reset from Settings page

---

## Privacy

- All data stored locally in prisma/dev.db (SQLite)
- No external data transmission in default mode
- Wellness data is opt-in and independently deletable
- No API keys in frontend bundle
- Parameterized Prisma queries (SQL injection safe)
