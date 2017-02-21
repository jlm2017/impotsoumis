const NewIR = {
    "creditImpotEnfant": 1000 / 12,
    "bareme": [
        {
            "name": "2%",
            "min": 0,
            "max": 200,
            "taux": 0.02
        }, {
            "name": "3%",
            "min": 200,
            "max": 500,
            "taux": 0.03
        }, {
            "name": "4%",
            "min": 500,
            "max": 800,
            "taux": 0.04
        }, {
            "name": "6%",
            "min": 800,
            "max": 1300,
            "taux": 0.06
        }, {
            "name": "8%",
            "min": 1300,
            "max": 1500,
            "taux": 0.08
        }, {
            "name": "10%",
            "min": 1500,
            "max": 1800,
            "taux": 0.1
        }, {
            "name": "12%",
            "min": 1800,
            "max": 2200,
            "taux": 0.12
        }, {
            "name": "14%",
            "min": 2200,
            "max": 3000,
            "taux": 0.14
        }, {
            "name": "18%",
            "min": 3000,
            "max": 4000,
            "taux": 0.18
        }, {
            "name": "25%",
            "min": 4000,
            "max": 4500,
            "taux": 0.25
        }, {
            "name": "30%",
            "min": 4500,
            "max": 5500,
            "taux": 0.3
        }, {
            "name": "40%",
            "min": 5500,
            "max": 10000,
            "taux": 0.4
        }, {
            "name": "50%",
            "min": 10000,
            "max": 25000,
            "taux": 0.5
        }, {
            "name": "60%",
            "min": 25000,
            "max": 33000,
            "taux": 0.6
        }, {
            "name": "90%",
            "min": 33000,
            "max": Number.MAX_SAFE_INTEGER,
            "taux": 0.9
        }
    ]
}

export default NewIR;
