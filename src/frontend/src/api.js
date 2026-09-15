const API_URL = "http://10.234.105.87:5000"

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

export async function getReroutingOptions(shipmentId) {
  const response = await fetch(
    `${API_URL}/api/rerouting/${shipmentId}`
  )

  if (!response.ok) {
    throw new Error("Failed to get rerouting options")
  }

  return response.json()
}

export async function saveDecision(data) {
  const response = await fetch(`${API_URL}/api/decisions`, {
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

export async function getDecisionHistory() {
  const response = await fetch(`${API_URL}/api/decisions`)

  if (!response.ok) {
    throw new Error("Failed to get decision history")
  }

  return response.json()
}