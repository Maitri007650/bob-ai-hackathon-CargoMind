const db = require("./data/database");

db.serialize(() => {
    db.run("DELETE FROM shipments");
    db.run("DELETE FROM disruptions");
    db.run("DELETE FROM rerouting_options");
    db.run("DELETE FROM decisions");

    const shipments = [
        ["SHP001", "MetroCare Hospitals", "Port Alpha", "Ahmedabad", "Medical Supplies", 85000, "2026-09-16T18:00:00", 95, 100, "Affected"],
        ["SHP002", "FreshMart Foods", "Port Alpha", "Mumbai", "Food Products", 42000, "2026-09-17T12:00:00", 80, 90, "Affected"],
        ["SHP003", "TechNova Electronics", "Port Beta", "Pune", "Electronics", 120000, "2026-09-18T18:00:00", 70, 75, "On Track"],
        ["SHP004", "AutoParts India", "Port Alpha", "Vadodara", "Automotive Parts", 55000, "2026-09-19T20:00:00", 60, 65, "Affected"],
        ["SHP005", "GreenBuild Materials", "Port Gamma", "Surat", "Construction Materials", 30000, "2026-09-20T18:00:00", 40, 40, "On Track"]
    ];

    const shipmentStmt = db.prepare(`
        INSERT INTO shipments
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    shipments.forEach((shipment) => {
        shipmentStmt.run(shipment);
    });

    shipmentStmt.finalize();

    db.run(`
        INSERT INTO disruptions
        VALUES (
            'DIS001',
            'Port Strike',
            'Port Alpha',
            'High',
            'Port operations disrupted due to an ongoing strike.',
            'Active'
        )
    `);

    const reroutingOptions = [
        ["R001", "SHP001", "Port Alpha → Alternate Port → Ahmedabad", 8, 12000, 1, "High", 92],
        ["R002", "SHP001", "Port Alpha → Road Corridor → Ahmedabad", 14, 7000, 0, "Medium", 70],
        ["R003", "SHP002", "Port Alpha → Alternate Port → Mumbai", 10, 9000, 1, "High", 88],
        ["R004", "SHP002", "Port Alpha → Road Corridor → Mumbai", 18, 5500, 0, "Medium", 65],
        ["R005", "SHP004", "Port Alpha → Alternate Port → Vadodara", 12, 8000, 1, "High", 85],
        ["R006", "SHP004", "Port Alpha → Road Corridor → Vadodara", 20, 5000, 0, "Medium", 60]
    ];

    const rerouteStmt = db.prepare(`
        INSERT INTO rerouting_options
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    reroutingOptions.forEach((option) => {
        rerouteStmt.run(option);
    });

    rerouteStmt.finalize();

    console.log("Simulated ShipTriage data inserted successfully");
});

setTimeout(() => {
    db.close();
}, 500);