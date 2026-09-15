# 🚀 ShipTriage

> ⚠️ **Replace everything in** **`[ ]`** **brackets with your actual content before submission.**

---

## 👥 Team

| **Field** | **Value** |
| --------- | --------- |
| **Team Name** | CargoMind |
| **Track** | AI |
| **Team Lead** | Khushi  |
| **Members** | Maitri , Khushi , Rujuta, Omi |

---

## 🎯 Problem Statement

> In 2–3 sentences: What problem does your project solve? Who experiences this problem?

Logistics disruptions such as port strikes can affect multiple shipments at the same time, making it difficult for operations managers to quickly identify which shipments need attention first. ShipTriage helps managers identify affected shipments, prioritize them based on business and SLA factors, and evaluate rerouting options before making a decision.

---

## 💡 Solution

> In 2–3 sentences: What did you build? How does it solve the problem above?

ShipTriage provides a structured workflow from disruption analysis to final decision logging. It identifies affected shipments, calculates an explainable priority score, presents simulated rerouting options with cost, delay, SLA status and feasibility, and allows the manager to approve or override the recommended option.

---

## ✨ Key Features

- **Disruption Impact Analysis:** Identifies shipments affected by a selected disruption.
- **Explainable Shipment Prioritization:** Ranks affected shipments using SLA urgency, customer importance, cargo criticality and shipment value.
- **Rerouting Decision Support:** Displays alternative routes with estimated cost, delay, SLA status and feasibility.
- **Recommendation:** Highlights the most suitable rerouting option based on the available shipment and route factors.
- **Manager Decision Logging:** Allows the manager to approve or override a recommendation and records the resulting decision.

---

## 🛠️ Tech Stack

| **Category** | **Technologies** |
| ------------ | ---------------- |
| **Languages** | JavaScript |
| **Frameworks** | React, Vite, Node.js, Express |
| **IBM Technologies** | IBM Bob |
| **Databases** | SQLite |
| **Other** | Git, GitHub, GitHub Actions |

---

## 📁 Repository Structure

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
```

---

## ⚡ How to Run

> **Copy these exact steps from your** [**`docs/setup-guide.md`**](https://github.com/Maitri007650/bob-ai-hackathon-CargoMind/blob/main/docs/setup-guide.md)

```bash
# 1. Clone the repo
git clone https://github.com/Maitri007650/bob-ai-hackathon-CargoMind.git
cd bob-ai-hackathon-CargoMind

# 2. Install dependencies
cd src/frontend
npm install

# 3. Configure environment
No environment configuration is required.

# 4. Run the project
npm run dev
```

---

## 🖥️ Demo

| **Artifact** | **Link** |
| ------------ | -------- |
| 📹 Demo Video | [See demo/demo-video-link.txt](https://github.com/Maitri007650/bob-ai-hackathon-CargoMind/blob/main/demo/demo-video-link.txt) |
| 🌐 Live Demo | [See demo/live-demo-url.txt](https://github.com/Maitri007650/bob-ai-hackathon-CargoMind/blob/main/demo/live-demo-url.txt) |
| 🖼️ Screenshots | See demo/screenshots/ |
| 📊 Presentation | See presentation/ |

---

## ⚠️ Known Limitations



- The project uses simulated shipment and rerouting data.
- The priority and recommendation logic is rule-based.
- Live logistics integrations and advanced route optimization are not included.

---

## 🏅 What We're Most Proud Of

ShipTriage provides a complete and easy-to-understand workflow for handling supply chain disruptions. The system connects disruption analysis, shipment prioritization, rerouting options, recommendation, manager approval or override, and decision logging in one application.