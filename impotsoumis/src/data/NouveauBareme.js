const NouveauBareme = [
    {
        "label": "Taux effectif d'imposition à 0%. ",
        "taux": 0,
        "min": 0,
        "max": 200,
        "colorIndex": "graph-1"
    }, {
        "label": "Taux effectif d'imposition à 1%.",
        "taux": 0.01,
        "min": 200,
        "max": 500,
        "colorIndex": "accent-1"
    }, {
        "label": "Taux effectif d'imposition à 2%",
        "taux": 0.02,
        "min": 500,
        "max": 800,
        "colorIndex": "ok"
    }, {
        "label": "Taux effectif d'imposition à 3%",
        "taux": 0.03,
        "min": 800,
        "max": 1300,
        "colorIndex": "warning"
    }, {
        "label": "Taux effectif d'imposition à 5%",
        "taux": 0.05,
        "min": 1300,
        "max": 1500,
        "colorIndex": "accent-2"
    }, {
        "label": "Taux effectif d'imposition à 10%",
        "taux": 0.1,
        "min": 1500,
        "max": 1800,
        "colorIndex": "critical"
    }, {
        "label": "Taux effectif d'imposition à 15%",
        "taux": 0.15,
        "min": 1800,
        "max": 2200,
        "colorIndex": "graph-2"
    }, {
        "label": "Taux effectif d'imposition à 20%",
        "taux": 0.2,
        "min": 2200,
        "max": 3000,
        "colorIndex": "accent-3"
    }, {
        "label": "Taux effectif d'imposition à 30%",
        "taux": 0.3,
        "min": 3000,
        "max": 4500,
        "colorIndex": "graph-4"
    }, {
        "label": "Taux effectif d'imposition à 40%",
        "taux": 0.4,
        "min": 4500,
        "max": 5500,
        "colorIndex": "accent-4"
    }, {
        "label": "Taux effectif d'imposition à 55%",
        "taux": 0.55,
        "min": 5500,
        "max": 10000,
        "colorIndex": "graph-5"
    }, {
        "label": "Taux effectif d'imposition à 70%",
        "taux": 0.7,
        "min": 10000,
        "max": 30000,
        "colorIndex": "accent-5"
    }, {
        "label": "Taux effectif d'imposition à 90%",
        "taux": 0.9,
        "min": 30000,
        "max": 40000,
        "colorIndex": "graph-6"
    }, {
        "label": "Taux effectif d'imposition à 90%",
        "taux": 0.9,
        "min": 40000,
        "max": Number.MAX_SAFE_INTEGER,
        "colorIndex": "graph-3"
    }
];

export default NouveauBareme;
