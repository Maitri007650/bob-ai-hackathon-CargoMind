const disruptionRoutes = require("./routes/disruption");
const reroutingRoutes = require("./routes/rerouting");
const decisionRoutes = require("./routes/decisions");
require("./data/database");

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/disruption", disruptionRoutes);
app.use("/api/rerouting", reroutingRoutes);
app.use("/api/decisions", decisionRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "ShipTriage backend is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        service: "ShipTriage API"
    });
});

const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`ShipTriage backend running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
    console.error("Server error:", error);
});