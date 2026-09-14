const express = require("express");
const router = express.Router();

const db = require("../data/database");

router.post("/", (req, res) => {
    const {
        shipmentId,
        selectedOption,
        action,
        reason
    } = req.body;

    if (!shipmentId || !selectedOption || !action) {
        return res.status(400).json({
            error: "shipmentId, selectedOption and action are required"
        });
    }

    if (action !== "Approved" && action !== "Overridden") {
        return res.status(400).json({
            error: "action must be Approved or Overridden"
        });
    }

    const timestamp = new Date().toISOString();

    db.run(
        `
        INSERT INTO decisions
        (shipmentId, selectedOption, action, reason, timestamp)
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            shipmentId,
            selectedOption,
            action,
            reason || "",
            timestamp
        ],
        function (err) {
            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            res.status(201).json({
                message: "Decision logged successfully",
                decision: {
                    id: this.lastID,
                    shipmentId,
                    selectedOption,
                    action,
                    reason: reason || "",
                    timestamp
                }
            });
        }
    );
});

router.get("/", (req, res) => {
    db.all(
        "SELECT * FROM decisions ORDER BY timestamp DESC",
        (err, decisions) => {
            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            res.json({
                decisions
            });
        }
    );
});

module.exports = router;