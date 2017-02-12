const NewIR = {
    "creditImpotEnfant": 83,
    "bareme": [
        {
            "name": "0%",
            "min": 0,
            "max": 200,
            "tauxMarginal": 0
        }, {
            "name": "1%",
            "min": 200,
            "max": 500,
            "tauxMarginal": 0.01
        }, {
            "name": "2%",
            "min": 500,
            "max": 800,
            "tauxMarginal": 0.02
        }, {
            "name": "3%",
            "min": 800,
            "max": 1300,
            "tauxMarginal": 0.03
        }, {
            "name": "5%",
            "min": 1300,
            "max": 1500,
            "tauxMarginal": 0.05
        }, {
            "name": "10%",
            "min": 1500,
            "max": 1800,
            "tauxMarginal": 0.1
        }, {
            "name": "15%",
            "min": 1800,
            "max": 2200,
            "tauxMarginal": 0.15
        }, {
            "name": "20%",
            "min": 2200,
            "max": 3000,
            "tauxMarginal": 0.2
        }, {
            "name": "30%",
            "min": 3000,
            "max": 4500,
            "tauxMarginal": 0.3
        }, {
            "name": "40%",
            "min": 4500,
            "max": 5500,
            "tauxMarginal": 0.4
        }, {
            "name": "55%",
            "min": 5500,
            "max": 10000,
            "tauxMarginal": 0.55
        }, {
            "name": "70%",
            "min": 10000,
            "max": 30000,
            "tauxMarginal": 0.7
        }, {
            "name": "90%",
            "min": 30000,
            "max": 40000,
            "tauxMarginal": 0.9
        }, {
            "name": "90%",
            "min": 40000,
            "max": Number.MAX_SAFE_INTEGER,
            "tauxMarginal": 0.9
        }
    ]

}

export default NewIR;
