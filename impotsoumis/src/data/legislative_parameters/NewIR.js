const NewIR = {
    "creditImpotEnfant": 1000/12,
    "bareme": [
        {
            "name": "0%",
            "min": 0,
            "max": 500,
            "taux": 0.01,
        }, {
            "name": "5%",
            "min": 500,
            "max": 750,
            "taux": 0.05,
        }, {
            "name": "10%",
            "min": 750,
            "max": 1000,
            "taux": 0.1,
        }, {
            "name": "15%",
            "min": 1000,
            "max": 1250,
            "taux": 0.15,
        }, {
            "name": "20%",
            "min": 1250,
            "max": 1500,
            "taux": 0.2,
        }, {
            "name": "25%",
            "min": 1500,
            "max": 1750,
            "taux": 0.25,
        }, {
            "name": "30%",
            "min": 1750,
            "max": 1800,
            "taux": 0.3,
        }, {
            "name": "35%",
            "min": 1800,
            "max": 2000,
            "taux": 0.35,
        }, {
            "name": "40%",
            "min": 2000,
            "max": 3000,
            "taux": 0.4,
        }, {
            "name": "50%",
            "min": 3000,
            "max": 4000,
            "taux": 0.5,
        }, {
            "name": "55%",
            "min": 4000,
            "max": 15000,
            "taux": 0.55,
        }, {
            "name": "60%",
            "min": 15000,
            "max": 25000,
            "taux": 0.60,
        }, {
            "name": "65%",
            "min": 25000,
            "max": 33000,
            "taux": 0.65,
        }, {
            "name": "90%",
            "min": 33000,
            "max": Number.MAX_SAFE_INTEGER,
            "taux": 0.9,
        }
    ]

}

export default NewIR;
