function calculatePriorityScore(shipment) {
    const slaUrgency = shipment.slaUrgency;
    const customerImportance = shipment.customerImportance;
    const cargoCriticality = shipment.cargoCriticality;
    const shipmentValue = shipment.shipmentValueScore;

    const score =
        slaUrgency * 0.40 +
        customerImportance * 0.30 +
        cargoCriticality * 0.20 +
        shipmentValue * 0.10;

    let tier;

    if (score >= 70) {
        tier = "Critical";
    } else if (score >= 40) {
        tier = "High";
    } else {
        tier = "Normal";
    }

    return {
        score: Math.round(score),
        tier
    };
}

function calculateSlaUrgency(slaDeadline) {
    const now = new Date();
    const deadline = new Date(slaDeadline);

    const hoursRemaining = (deadline - now) / (1000 * 60 * 60);

    if (hoursRemaining <= 24) {
        return 100;
    } else if (hoursRemaining <= 48) {
        return 80;
    } else if (hoursRemaining <= 72) {
        return 60;
    } else {
        return 40;
    }
}

function calculateShipmentValueScore(value) {
    if (value >= 100000) {
        return 100;
    } else if (value >= 75000) {
        return 80;
    } else if (value >= 50000) {
        return 60;
    } else if (value >= 25000) {
        return 40;
    } else {
        return 20;
    }
}

function prioritizeShipment(shipment) {
    const shipmentWithScores = {
        ...shipment,
        slaUrgency: calculateSlaUrgency(shipment.slaDeadline),
        shipmentValueScore: calculateShipmentValueScore(shipment.shipmentValue)
    };

    const priority = calculatePriorityScore(shipmentWithScores);

    return {
        ...shipment,
        priorityScore: priority.score,
        priorityTier: priority.tier,
        priorityReasons: {
            slaUrgency: shipmentWithScores.slaUrgency,
            customerImportance: shipment.customerImportance,
            cargoCriticality: shipment.cargoCriticality,
            shipmentValue: shipmentWithScores.shipmentValueScore
        }
    };
}

function prioritizeShipments(shipments) {
    return shipments
        .map(prioritizeShipment)
        .sort((a, b) => b.priorityScore - a.priorityScore);
}

module.exports = {
    calculatePriorityScore,
    prioritizeShipment,
    prioritizeShipments
};