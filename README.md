# ShipTriage

ShipTriage is a logistics disruption decision-support application that helps logistics operations managers turn a disruption into a structured response.

---

## Team

| Field | Value |
|---|---|
| **Team Name** | CargoMind |
| **Track** | AI |
| **Team Lead** | Maitri Patel |
| **Members** | Maitri Patel, Khushi, Rujuta, Omi |

---

## Problem Statement

Logistics disruptions such as port strikes can affect multiple shipments at the same time, making it difficult for operations managers to quickly identify which shipments need attention first. ShipTriage helps managers identify affected shipments, prioritize them based on business and SLA factors, and evaluate rerouting options before making a decision.

---

## Solution

ShipTriage provides a structured workflow from disruption analysis to final decision logging. It identifies affected shipments, calculates an explainable priority score, presents simulated rerouting options with cost, delay, SLA status and feasibility, and allows the manager to approve or override the recommended option.

---

## Key Features

- **Disruption Impact Analysis:** Identifies shipments affected by a selected disruption.
- **Explainable Shipment Prioritization:** Ranks affected shipments using SLA urgency, customer importance, cargo criticality and shipment value.
- **Rerouting Decision Support:** Displays alternative routes with estimated cost, delay, SLA status and feasibility.
- **Recommendation:** Highlights the most suitable rerouting option based on the available shipment and route factors.
- **Manager Decision Logging:** Allows the manager to approve or override a recommendation and records the resulting decision.

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | JavaScript |
| **Frameworks** | React, Vite, Node.js, Express |
| **IBM Technologies** | IBM Bob |
| **Databases** | SQLite |
| **Other** | Git, GitHub, GitHub Actions |

---

## IBM Bob Usage

IBM Bob was used as an AI pair-programming and code-review partner across three key phases of development.

### 1. Codebase Analysis and Risk Identification

Bob performed a full review of the ShipTriage codebase before the frontend-backend integration was built. The review covered the backend API structure and route contracts, the SQLite schema and data handling, the `decisionEngine.js` prioritization logic, and the frontend state and API layer. Bob produced a prioritized list of 14 findings including:

- The `customerImportance` and `cargoCriticality` fields being used raw (0–100) in a weighted scoring formula designed for normalized inputs, causing priority scores to exceed intended tier boundaries.
- The `api.js` file containing a hardcoded LAN IP address (`10.234.105.87`) that would fail on any machine other than the original developer's laptop.
- The `recommendationScore` field in the rerouting reduce logic being nullable, making the best-option selection unreliable.
- All four `api.js` functions being fully written but never imported or called anywhere in `App.jsx`, leaving the entire backend disconnected from the UI.

This phase produced a prioritized report covering critical bugs, logic errors, code quality issues, and demo risks before a single line was changed.

### 2. Integration Planning and Implementation

Bob planned the minimal set of changes required to wire the frontend to the existing backend without rewriting the application or changing API contracts. The plan was reviewed and approved by the team before any code was applied. Bob then implemented:

- A Vite proxy configuration to replace the hardcoded IP with a relative `/api` path, making the app portable across machines.
- Converting all three event handlers (`analyzeImpact`, `selectShipment`, `makeDecision`) from synchronous state setters to async functions calling the correct API endpoints.
- Field mapping between backend response shapes (`shipmentId`, `priorityTier`, `optionId`) and the existing JSX field names (`id`, `priority`, `name`) so no JSX structure needed to change.
- Wiring the decision log to display persisted data from `GET /api/decisions` rather than local component state.
- Loading and error states to give visible feedback during API calls.

### 3. Submission Quality Review

Bob reviewed the completed integration from the perspective of hackathon judges, evaluating the project against the five named evaluation criteria. This produced a structured list of critical gaps, high-value improvements, and items to skip — including identifying that three of the five docs files were still unfilled templates and that the IBM Bob usage itself was undocumented.

---

## Repository Structure

```text
├── src/
│   ├── backend/
│   └── frontend/
├── docs/
│   ├── problem-statement.md
│   ├── solution-overview.md
│   ├── architecture.md
│   ├── setup-guide.md
│   └── data-contract.md
├── demo/
│   ├── screenshots/
│   ├── demo-video-link.txt
│   └── live-demo-url.txt
├── presentation/
├── submission.yaml
├── CONTRIBUTING.md
└── .gitignore