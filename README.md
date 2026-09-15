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

IBM Bob was used as an AI-powered development partner during the development workflow.

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