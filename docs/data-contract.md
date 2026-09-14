# ShipTriage Data Contract

This document defines the common data structure used between the backend and frontend.

All demo data is simulated.

## 1. Shipment

Example:

    {
      "shipmentId": "SHP-001",
      "customer": "MetroCare Hospitals",
      "origin": "Port Alpha",
      "destination": "Ahmedabad",
      "cargoType": "Medical Supplies",
      "shipmentValue": 85000,
      "slaDeadline": "2026-09-16T18:00:00",
      "customerImportance": 5,
      "cargoCriticality": 5,
      "status": "Affected"
    }

## 2. Disruption

Example:

    {
      "disruptionId": "DIS-001",
      "type": "Port Strike",
      "location": "Port Alpha",
      "severity": "High",
      "description": "Port operations are disrupted due to a simulated strike.",
      "status": "Active"
    }

## 3. Priority

Priority uses an explainable scoring model:

- SLA urgency: 40%
- Customer importance: 30%
- Cargo criticality: 20%
- Shipment value: 10%

Priority tiers:

- 70–100: Critical
- 40–69: High
- 0–39: Normal

Example:

    {
      "shipmentId": "SHP-001",
      "priorityScore": 86,
      "priorityTier": "Critical",
      "reasons": [
        "SLA deadline is approaching",
        "Customer importance is high",
        "Cargo criticality is high"
      ]
    }

## 4. Rerouting Option

Example:

    {
      "optionId": "ROUTE-001",
      "shipmentId": "SHP-001",
      "route": "Port Alpha → Port Beta → Ahmedabad",
      "estimatedDelayHours": 8,
      "estimatedCost": 12000,
      "slaMet": true,
      "feasibility": "High",
      "recommendationScore": 91
    }

The recommendation considers:

- Shipment priority
- SLA impact
- Cost
- Delay
- Feasibility

## 5. Decision

Example:

    {
      "shipmentId": "SHP-001",
      "selectedOption": "ROUTE-001",
      "action": "Approved",
      "reason": "Best option that keeps the shipment within SLA.",
      "timestamp": "2026-09-14T18:30:00"
    }

Possible actions:

- Approved
- Overridden

## Important Rules

1. All demo data is simulated.
2. IBM Bob is not claimed as runtime shipment analysis.
3. Backend and frontend should use these field names where practical.
4. Discuss major changes with the team before changing the structure.