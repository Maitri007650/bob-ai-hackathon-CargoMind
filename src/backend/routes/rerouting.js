const express = require("express");
const router = express.Router();

const db = require("../data/database");

router.get("/:shipmentId", (req, res) => {
    const { shipmentId } = req.params;

    db.all(
        "SELECT * FROM rerouting_options WHERE shipmentId = ?",
        [shipmentId],
        (err, options) => {
            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (options.length === 0) {
                return res.status(404).json({
                    error: "No rerouting options found"
                });
            }

            const recommended = options.reduce((best, option) => {
                return option.recommendationScore > best.recommendationScore
                    ? option
                    : best;
            });

            res.json({
                shipmentId,
                options,
                recommendedOption: recommended
            });
        }
    );
});

module.exports = router;