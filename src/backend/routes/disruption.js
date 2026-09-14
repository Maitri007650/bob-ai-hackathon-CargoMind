const express = require("express");
const router = express.Router();

const db = require("../data/database");
const { prioritizeShipments } = require("../logic/decisionEngine");

router.post("/analyze", (req, res) => {
    const { disruptionId } = req.body;

    if (!disruptionId) {
        return res.status(400).json({
            error: "disruptionId is required"
        });
    }

    db.get(
        "SELECT * FROM disruptions WHERE disruptionId = ?",
        [disruptionId],
        (err, disruption) => {
            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (!disruption) {
                return res.status(404).json({
                    error: "Disruption not found"
                });
            }

            db.all(
                "SELECT * FROM shipments WHERE status = 'Affected'",
                (err, shipments) => {
                    if (err) {
                        return res.status(500).json({
                            error: "Database error"
                        });
                    }

                    const prioritized = prioritizeShipments(shipments);

                    res.json({
                        disruption,
                        affectedShipments: prioritized
                    });
                }
            );
        }
    );
});

module.exports = router;