# ShipTriage

## CargoMind — Supply Chain Disruption Decision Support

ShipTriage is a logistics decision-support application designed to help logistics operations managers respond to supply chain disruptions quickly and systematically.

The application follows the workflow:

**Disruption → Affected Shipments → Priority Ranking → Rerouting Options → Recommendation → Manager Decision → Decision Log**

---

---

<<<<<<< HEAD
## Team

=======
>>>>>>> d139849 (Update project README)
| Field         | Value                                                              |
| ------------- | ------------------------------------------------------------------ |
| **Team Name** | CargoMind                                                          |
| **Track**     | AI                                                                 |
| **Team Lead** | Khushi — [25ce080@charusat.edu.in](mailto:25ce080@charusat.edu.in) |
<<<<<<< HEAD
| **Members**   | Maitri Patel, Khushi, Rujuta, Omi                                  |
=======
| **Members**   | Maitri, Rujuta, Omi                                                |
>>>>>>> d139849 (Update project README)

---

## Problem Statement

<<<<<<< HEAD
Logistics disruptions such as port strikes, weather events, and other operational disruptions can affect multiple shipments at the same time, making it difficult for operations managers to quickly identify which shipments need attention first.

ShipTriage helps managers identify affected shipments, prioritize them based on business and SLA factors, and evaluate rerouting options before making a decision.
=======
Supply chain disruptions such as weather events, port strikes, and other operational disruptions can affect multiple shipments at the same time.

Logistics operations managers need to quickly identify affected shipments, understand their criticality, compare alternative routes, and make decisions that reduce delays and protect service-level commitments.
>>>>>>> d139849 (Update project README)

---

## Solution

<<<<<<< HEAD
ShipTriage provides a structured workflow from disruption analysis to final decision logging.

It identifies affected shipments, calculates an explainable priority score, presents simulated rerouting options with cost, delay, SLA status and feasibility, and recommends a suitable option for manager review.

The manager can then approve or override the recommendation, with the final decision recorded in a decision log.
=======
ShipTriage provides a structured workflow for managing shipment disruptions.

A logistics operations manager can enter a disruption, analyze affected shipments, review their priority levels, view shipment details, compare rerouting options, review the recommended route, and either approve or override the recommendation.

The final manager decision is recorded in a decision log for traceability.
>>>>>>> d139849 (Update project README)

---

## Key Features

<<<<<<< HEAD
* **Disruption Impact Analysis:** Identifies shipments affected by a selected disruption.
* **Explainable Shipment Prioritization:** Ranks affected shipments using SLA urgency, customer importance, cargo criticality and shipment value.
* **Shipment Details:** Displays relevant information about an affected shipment, including route, priority and disruption reason.
* **Rerouting Decision Support:** Displays alternative transportation options with estimated cost, duration, SLA status and feasibility.
* **Recommendation:** Highlights a suitable rerouting option based on the available shipment and route factors.
* **Manager Approval or Override:** Allows the manager to approve the recommendation or select an alternative.
* **Decision Logging:** Records the manager's final decision for traceability.
=======
* **Disruption Analysis:** Analyze a supply chain disruption and identify affected shipments.
* **Affected Shipment Identification:** Display shipments affected by the current disruption.
* **Priority Ranking:** Classify shipments into Critical, High, and Normal priority levels.
* **Shipment Details:** View shipment route, priority, and disruption-related information.
* **Rerouting Options:** Compare alternative transportation options based on cost, duration, and SLA status.
* **Rerouting Recommendation:** Highlight a recommended option to support the manager's decision.
* **Manager Approval or Override:** Allow the manager to approve the recommendation or override it.
* **Decision Log:** Record the final manager decision for traceability.

---

## 🔄 Application Workflow

```text
Disruption
    ↓
Analyze Impact
    ↓
Affected Shipments
    ↓
Priority / Criticality Ranking
    ↓
Shipment Details
    ↓
Rerouting Options
    ↓
Recommendation
    ↓
Manager Approves or Overrides
    ↓
Decision Logged
```
>>>>>>> d139849 (Update project README)

---

## Tech Stack

<<<<<<< HEAD
| Category             | Technologies                |
| -------------------- | --------------------------- |
| **Languages**        | JavaScript                  |
| **Frontend**         | React, Vite                 |
| **Backend**          | Node.js, Express            |
| **IBM Technologies** | IBM Bob                     |
| **Database**         | SQLite                      |
| **Other**            | Git, GitHub, GitHub Actions |
=======
| Category             | Technologies            |
| -------------------- | ----------------------- |
| **Languages**        | JavaScript              |
| **Frameworks**       | React, Node.js, Express |
| **IBM Technologies** | IBM Bob                 |
| **Databases**        | SQLite                  |
| **Other**            | Vite, Git, GitHub       |
>>>>>>> d139849 (Update project README)

---

## IBM Bob Usage

IBM Bob was used as an AI pair-programming and software engineering partner across key phases of development.

### 1. Codebase Analysis and Risk Identification

Bob was used to review the ShipTriage codebase before frontend-backend integration. The review covered the backend API structure and route contracts, the SQLite schema and data handling, the `decisionEngine.js` prioritization logic, and the frontend state and API layer.

The review identified development and integration risks including:

* Priority scoring inputs requiring normalization.
* The frontend API configuration depending on a specific LAN IP address.
* Reliability risks in rerouting recommendation selection.
* Frontend API functions not being connected to the UI event handlers.

This helped the team identify critical bugs, logic issues, code quality concerns, and demo risks before completing the integration.

### 2. Integration Planning and Implementation

Bob supported planning and implementation of the frontend-backend integration while preserving the existing application structure and API contracts.

The integration work included:

* Configuring the frontend API communication.
* Connecting disruption analysis to the backend API.
* Connecting shipment and rerouting information to the frontend.
* Mapping backend response fields to the frontend data structure.
* Connecting decision logging with persisted backend data.
* Adding appropriate loading and error handling.

### 3. Submission Quality Review

Bob was also used to review the completed project from a hackathon submission perspective.

The review helped identify documentation gaps, submission requirements, integration concerns, and areas requiring final verification before submission.

---

## Repository Structure

```text
bob-ai-hackathon-CargoMind/
│
├── src/
│   ├── frontend/
<<<<<<< HEAD
│   │   ├── src/
│   │   │   ├── App.jsx
│   │   │   ├── App.css
│   │   │   ├── index.css
│   │   │   ├── api.js
│   │   │   └── main.jsx
=======
>>>>>>> d139849 (Update project README)
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── App.jsx
│   │   │   ├── App.css
│   │   │   ├── index.css
│   │   │   ├── api.js
│   │   │   └── main.jsx
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   └── backend/
│       └── ...
│
├── docs/
│   ├── problem-statement.md
│   ├── solution-overview.md
│   ├── architecture.md
│   ├── setup-guide.md
│   └── data-contract.md
│
├── demo/
│   ├── screenshots/
│   ├── demo-video-link.txt
│   └── live-demo-url.txt
│
├── presentation/
<<<<<<< HEAD
├── submission.yaml
├── CONTRIBUTING.md
└── .gitignore
=======
│
└── submission.yaml
>>>>>>> d139849 (Update project README)
```

---

<<<<<<< HEAD
## How to Run
=======
## ⚡ How to Run
>>>>>>> d139849 (Update project README)

### Prerequisites

Install:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/Maitri007650/bob-ai-hackathon-CargoMind.git
cd bob-ai-hackathon-CargoMind
```

### 2. Start the Backend

Open a terminal and run:

```bash
cd src/backend
npm install
npm start
```

The backend runs on port:

```text
5000
```

### 3. Start the Frontend

Open another terminal and run:

```bash
cd src/frontend
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

Open the frontend URL in a browser.

<<<<<<< HEAD
---

## Application Workflow

```text
Disruption
    ↓
Affected Shipments
    ↓
Priority / Criticality Ranking
    ↓
Shipment Details
    ↓
Rerouting Options
    ↓
Recommendation
    ↓
Manager Approves or Overrides
    ↓
Decision Logged
```

---

## Demo
=======
> The frontend communicates with the backend through the API endpoint configured in `src/frontend/src/api.js`.

---

## 🔌 API Integration

The React frontend communicates with the Node.js and Express backend through API endpoints.

Frontend API integration is handled through:

```text
src/frontend/src/api.js
```

The application uses API operations for:

* Disruption analysis
* Rerouting options
* Saving decisions
* Retrieving decision history

---

## 🖥️ Demo
>>>>>>> d139849 (Update project README)

The demo demonstrates the complete ShipTriage disruption-to-decision workflow.

### Demo Flow

```text
1. Open ShipTriage
2. Review the disruption
3. Analyze Impact
4. View affected shipments
5. Review shipment priority
6. Open a shipment
7. Compare rerouting options
8. Review the recommendation
9. Approve or override the recommendation
10. View the Decision Log
```

### Demo Artifacts

| Artifact            | Location                   |
| ------------------- | -------------------------- |
| 📹 **Demo Video**   | `demo/demo-video-link.txt` |
| 🌐 **Live Demo**    | `demo/live-demo-url.txt`   |
| 🖼️ **Screenshots** | `demo/screenshots/`        |
| 📊 **Presentation** | `presentation/`            |

---

<<<<<<< HEAD
## Screenshots
=======
## 🖼️ Screenshots
>>>>>>> d139849 (Update project README)

The `demo/screenshots/` directory contains screenshots demonstrating the ShipTriage workflow.

Current screenshots include:

* Disruption analysis
* Shipment information
* Rerouting selection
* Approved recommendation
* Overridden recommendation

---

<<<<<<< HEAD
## Known Limitations
=======
## ⚠️ Known Limitations
>>>>>>> d139849 (Update project README)

The current version is an MVP focused on the core disruption-to-decision workflow.

The current MVP uses simulated shipment, disruption, and rerouting data.

The following capabilities are not fully implemented:

* Live external disruption feeds
* Real-time GPS or fleet tracking
* Real-time fleet utilisation optimisation
* Live carrier/logistics integrations
* Live cold-chain IoT monitoring
* Machine-learning prediction
* Advanced route optimisation
* Production-grade authentication and authorization
* Production deployment

These capabilities can be considered for future development.

---

<<<<<<< HEAD
## What We're Most Proud Of
=======
## 🤖 IBM Bob

IBM Bob was used as an AI development and software engineering partner during the project.

It supported the development workflow through activities such as planning, implementation assistance, code understanding, and development support.

The ShipTriage runtime application is implemented using React, Vite, Node.js, Express, and SQLite.

**IBM Bob is used as a development/SDLC assistant and is not presented as the runtime decision engine of ShipTriage.**

---

## 🏅 What We're Most Proud Of
>>>>>>> d139849 (Update project README)

We are most proud of creating a complete end-to-end disruption decision workflow instead of building only a static dashboard.

ShipTriage connects disruption analysis, affected shipment identification, priority ranking, rerouting comparison, recommendation, manager approval or override, and decision logging into one application.

This gives a logistics operations manager a clear and structured path from identifying a disruption to making and recording an operational decision.

---

<<<<<<< HEAD
## Project Status

**Functional MVP**

The current MVP demonstrates:

* Disruption analysis
* Affected shipment identification
* Priority ranking
* Shipment details
* Rerouting options
* Rerouting recommendation
* Manager approval
* Manager override
* Decision logging
=======
## 📌 Proj
>>>>>>> d139849 (Update project README)
