const API_URL = "http://localhost:3000"

export async function analyzeDisruption(data) {
  const response = await fetch(`${API_URL}/api/disruption/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error("Failed to analyze disruption")
  }

  return response.json()
}

export async function getShipments(disruptionId) {
  const response = await fetch(
    `${API_URL}/api/disruptions/${disruptionId}/shipments/tiered`
  )

  if (!response.ok) {
    throw new Error("Failed to get shipments")
  }

  return response.json()
}

export async function getReroutingOptions(shipmentId) {
  const response = await fetch(
    `${API_URL}/api/shipments/${shipmentId}/rerouting-options`
  )

  if (!response.ok) {
    throw new Error("Failed to get rerouting options")
  }

  return response.json()
}

export async function approveDecision(data) {
  const response = await fetch(`${API_URL}/api/decisions/approve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error("Failed to save decision")
  }

  return response.json()
}

export async function getDecisionLog() {
  const response = await fetch(`${API_URL}/api/decisions/log`)

  if (!response.ok) {
    throw new Error("Failed to get decision log")
  }

  return response.json()
}