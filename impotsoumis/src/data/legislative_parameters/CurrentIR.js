const CurrentIR = {
    "bareme": [
        {
            "name": "0%",
            "min": 0,
            "max": 810,
            "tauxMarginal": 0
        }, {
            "name": "14%",
            "min": 810,
            "max": 2230,
            "tauxMarginal": 0.14
        }, {
            "name": "30%",
            "min": 2230,
            "max": 5990,
            "tauxMarginal": 0.3
        }, {
            "name": "41%",
            "min": 5990,
            "max": 12680,
            "tauxMarginal": 0.41
        }, {
            "name": "45%",
            "min": 12680,
            "max": 20833,
            "tauxMarginal": 0.45
        }, {
            "name": "48%",
            "min": 20833,
            "max": 41667,
            "tauxMarginal": 0.48
        }, {
            "name": "49%",
            "min": 41667,
            "max": Number.MAX_SAFE_INTEGER,
            "tauxMarginal": 0.49
        }
    ],
    "tauxDecote": {
        "id": "tx_decote",
        "value": 0.75
    },
    "plafond": {
        "decote": {
            "celibataire": {
                "id": "plaf_decote_celib",
                "value": 129
            },
            "couple": {
                "id": "plaf_decote_couple",
                "value": 213
            }
        },
        "abattement": {
            "fraisPro": {
                "id": "plaf_abatpro",
                "value": 1024
            },
            "retraites": {
                "id": "plaf_abatret",
                "value": 309
            }
        }
    },
    "abattement": {
        "fraisProEtRetraites": {
            "id": "abat_pro_ret",
            "value": 0.1
        }
    },
    "plancher": {
        "abattement": {
            "fraisPro": {
                "id": "planch_abatpro",
                "value": 36
            },
            "retraites": {
                "id": "planch_abatret",
                "value": 32
            }
        }
    },
    "seuilRecouvrement": {
        "id": "seuil_recouv",
        "value": 5
    }

}

export default CurrentIR;
