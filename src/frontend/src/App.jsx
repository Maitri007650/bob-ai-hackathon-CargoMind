import { useState } from "react"
import "./App.css"

function App() {
  const [analyzed, setAnalyzed] = useState(false)
  const [selectedShipment, setSelectedShipment] = useState(null)
  const [decision, setDecision] = useState("")

  const shipments = [
    {
      id: "SHP-001",
      origin: "Mumbai",
      destination: "Delhi",
      priority: "Critical",
      reason: "SLA deadline is very close"
    },
    {
      id: "SHP-002",
      origin: "Pune",
      destination: "Ahmedabad",
      priority: "High",
      reason: "Customer delivery window is at risk"
    },
    {
      id: "SHP-003",
      origin: "Mumbai",
      destination: "Jaipur",
      priority: "Normal",
      reason: "Sufficient delivery time available"
    }
  ]

  const reroutingOptions = [
    {
      name: "Option A",
      route: "Mumbai → Delhi via Road",
      cost: "₹45,000",
      delay: "6 hours",
      sla: "At risk"
    },
    {
      name: "Option B",
      route: "Mumbai → Delhi via Rail",
      cost: "₹38,000",
      delay: "2 hours",
      sla: "Within SLA"
    },
    {
      name: "Option C",
      route: "Mumbai → Delhi via Air",
      cost: "₹72,000",
      delay: "1 hour",
      sla: "Within SLA"
    }
  ]

  function analyzeImpact() {
    setAnalyzed(true)
  }

  function selectShipment(shipment) {
    setSelectedShipment(shipment)
    setDecision("")
  }

  function makeDecision(type) {
    setDecision(type)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>ShipTriage</h1>
        <p>Supply Chain Disruption Assistant</p>
      </div>

      <div className="container">

        <div className="section">
          <h2 className="section-title">1. Disruption Dashboard</h2>

          <div className="disruption-box">
            <p>
              <strong>Disruption Type:</strong> Port Disruption
            </p>

            <p>
              <strong>Location:</strong> Mumbai Port
            </p>

            <p>
              <strong>Status:</strong> Active
            </p>

            <p>
              <strong>Data:</strong> Simulated demo data
            </p>

            <button onClick={analyzeImpact}>
              Analyze Impact
            </button>
          </div>
        </div>

        {analyzed && (
          <div className="section">
            <h2 className="section-title">
              2. Impact Analysis + Priority
            </h2>

            <h3>Affected Shipments</h3>

            <div className="shipment-list">
              {shipments.map((shipment) => (
                <div className="shipment" key={shipment.id}>
                  <p>
                    <strong>{shipment.id}</strong>
                  </p>

                  <p>
                    Route: {shipment.origin} → {shipment.destination}
                  </p>

                  <p>
                    Priority:{" "}
                    <span
                      className={`priority ${shipment.priority.toLowerCase()}`}
                    >
                      {shipment.priority}
                    </span>
                  </p>

                  <p>
                    Reason: {shipment.reason}
                  </p>

                  <button onClick={() => selectShipment(shipment)}>
                    View Shipment
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedShipment && (
          <>
            <div className="section">
              <h2 className="section-title">
                3. Shipment Details + Rerouting Options
              </h2>

              <div className="shipment">
                <p>
                  <strong>Shipment:</strong> {selectedShipment.id}
                </p>

                <p>
                  <strong>Current Route:</strong>{" "}
                  {selectedShipment.origin} →{" "}
                  {selectedShipment.destination}
                </p>

                <p>
                  <strong>Priority:</strong>{" "}
                  <span
                    className={`priority ${selectedShipment.priority.toLowerCase()}`}
                  >
                    {selectedShipment.priority}
                  </span>
                </p>

                <p>
                  <strong>Reason:</strong> {selectedShipment.reason}
                </p>
              </div>

              <h3>Rerouting Options</h3>

              <div className="options">
                {reroutingOptions.map((option) => (
                  <div
                    className={`option ${
                      option.name === "Option B" ? "recommended" : ""
                    }`}
                    key={option.name}
                  >
                    <h3>{option.name}</h3>

                    <p>
                      <strong>Route:</strong> {option.route}
                    </p>

                    <p>
                      <strong>Cost:</strong> {option.cost}
                    </p>

                    <p>
                      <strong>Expected Delay:</strong> {option.delay}
                    </p>

                    <p>
                      <strong>SLA:</strong> {option.sla}
                    </p>

                    {option.name === "Option B" && (
                      <p>
                        <strong>Recommended</strong>
                      </p>
                    )}

                    <button onClick={() => makeDecision("approved")}>
                      Select Option
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h2 className="section-title">
                4. Recommendation + Decision
              </h2>

              <div className="recommendation">
                <h3>Recommended Option: Option B</h3>

                <p>
                  Option B is recommended because it keeps the Critical
                  shipment within SLA while adding less cost than Option C.
                </p>
              </div>

              <button onClick={() => makeDecision("approved")}>
                Approve Recommendation
              </button>

              <button onClick={() => makeDecision("overridden")}>
                Override Recommendation
              </button>

              {decision && (
                <div className="decision">
                  <h3>Decision Log</h3>

                  <p>
                    <strong>Decision:</strong> {decision}
                  </p>

                  <p>
                    <strong>Shipment:</strong> {selectedShipment.id}
                  </p>

                  <p>
                    <strong>Recommended Option:</strong> Option B
                  </p>

                  <p>
                    <strong>Status:</strong> Logged
                  </p>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default App