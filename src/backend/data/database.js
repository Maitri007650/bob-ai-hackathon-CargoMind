const sqlite3 = require("sqlite3").verbose();

const path = require("path");

const dbPath = path.join(__dirname, "shiptriage.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS shipments (
            shipmentId TEXT PRIMARY KEY,
            customer TEXT NOT NULL,
            origin TEXT NOT NULL,
            destination TEXT NOT NULL,
            cargoType TEXT NOT NULL,
            shipmentValue REAL NOT NULL,
            slaDeadline TEXT NOT NULL,
            customerImportance INTEGER NOT NULL,
            cargoCriticality INTEGER NOT NULL,
            status TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS disruptions (
            disruptionId TEXT PRIMARY KEY,
            type TEXT NOT NULL,
            location TEXT NOT NULL,
            severity TEXT NOT NULL,
            description TEXT NOT NULL,
            status TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS rerouting_options (
            optionId TEXT PRIMARY KEY,
            shipmentId TEXT NOT NULL,
            route TEXT NOT NULL,
            estimatedDelayHours REAL NOT NULL,
            estimatedCost REAL NOT NULL,
            slaMet INTEGER NOT NULL,
            feasibility TEXT NOT NULL,
            recommendationScore REAL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS decisions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            shipmentId TEXT NOT NULL,
            selectedOption TEXT NOT NULL,
            action TEXT NOT NULL,
            reason TEXT,
            timestamp TEXT NOT NULL
        )
    `);

    console.log("ShipTriage database initialized");
});

module.exports = db;