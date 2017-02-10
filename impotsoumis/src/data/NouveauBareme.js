const NouveauBareme = [
    {
        "label": "Taux effectif d'imposition à 2%. ",
        "taux": 0.02,
        "min": 0,
        "max": 13200,
        "colorIndex": "graph-1"
    }, {
        "label": "Taux effectif d'imposition à 2%.",
        "taux": 0.02,
        "min": 13200,
        "max": 26040,
        "colorIndex": "accent-1"
    }, {
        "label": "Taux effectif d'imposition à 10%",
        "taux": 0.1,
        "min": 26040,
        "max": 60000,
        "colorIndex": "ok"
    }, {
        "label": "Taux effectif d'imposition à 13%",
        "taux": 0.13,
        "min": 60000,
        "max": 120000,
        "colorIndex": "warning"
    }, {
        "label": "Taux effectif d'imposition à 25%",
        "taux": 0.25,
        "min": 120000,
        "max": 300000,
        "colorIndex": "accent-2"
    }, {
        "label": "Taux effectif d'imposition à 40%",
        "taux": 0.40,
        "min": 300000,
        "max": 480000,
        "colorIndex": "critical"
    }, {
        "label": "Taux effectif d'imposition à 50%",
        "taux": 0.4,
        "min": 480000,
        "max": 1200000,
        "colorIndex": "graph-2"
    }, {
        "label": "Taux effectif d'imposition à 60%",
        "taux": 0.6,
        "min": 1200000,
        "max": Number.MAX_SAFE_INTEGER,
        "colorIndex": "graph-3"
    }
];

export default NouveauBareme;
