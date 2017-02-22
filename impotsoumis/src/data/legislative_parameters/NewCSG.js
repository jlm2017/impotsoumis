const NewCSG = {
    "bareme": [
        {
            "name": "1%",
            "min": 0,
            "max": 1300,
            "tauxMin": 0,
            "tauxMax": 0.01
        }, {
            "name": "2%",
            "min": 1300,
            "max": 1800,
            "tauxMin": 0.01,
            "tauxMax": 0.02
        }, {
            "name": "3%",
            "min": 1800,
            "max": 3000,
            "tauxMin": 0.02,
            "tauxMax": 0.03
        }, {
            "name": "8%",
            "min": 3000,
            "max": 10000,
            "tauxMin": 0.03,
            "tauxMax": 0.08
        }, {
            "name": "12%",
            "min": 10000,
            "max": Number.MAX_SAFE_INTEGER,
            "tauxMin": 0.08,
            "tauxMax": 0.12
        }
    ]
}

export default NewCSG;
