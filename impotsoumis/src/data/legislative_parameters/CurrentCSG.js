const CurrentCSG = {
    "salaries": {
        "tauxPlein": {
            "id": "tx_sal_CSG",
            "value": 0.075,
            "tauxDeductible": {
                "id": "txd_sal_CSG",
                "value": 0.051
            }
        },
        "abattement": {
            "fraisPro": {
                "id": "abat_sal_CSG",
                "value": 0.0175
            }
        }
    },
    "retraites": {
        "tauxPlein": {
            "id": "tx_ret_CSG",
            "value": 0.066,
            "tauxDeductible": {
                "id": "txd_ret_CSG",
                "value": 0.042
            }
        },
        "seuil": {
            "taux": {
                "reduit": {
                    "celibataire": {
                        "id": "plaf_txred_celib",
                        "value": 1163
                    },
                    "couple": {
                        "id": "plaf_txred_couple",
                        "value": 1783
                    },
                    "demiPartSupplentaire": {
                        "id": "plaf_txred_demip",
                        "value": 311
                    },
                    "entierementDeductible": {
                        "id": "txred_CSG",
                        "value": 0.038
                    }
                }
            },
            "exoneration": {
                "celibataire": {
                    "id": "plaf_exo_celib",
                    "value": 890
                },
                "couple": {
                    "id": "plaf_exo_couple",
                    "value": 1365
                },
                "demiPartSupplentaire": {
                    "id": "plaf_exo_demip",
                    "value": 238
                }
            }
        }
    },
    "chomage": {
        "tauxPlein": {
            "id": "tx_chom_CSG",
            "value": 0.062,
            "tauxDeductible": {
                "id": "Dont_taux_déductible",
                "value": 0.038
            }
        },
        "plafond": {
            "tauxReduit": {
                "celibataire": {
                    "id": "plaf_txred_celib_chom",
                    "value": 1198
                },
                "parQuartSupplementaire": {
                    "id": "plaf_txred_part_chom",
                    "value": 160
                }
            }
        },
        "seuil": {
            "exoneration": {
                "celibataire": {
                    "id": "seuil_exo_cho_celib",
                    "value": 916
                },
                "parQuartSupplementaire": {
                    "id": "seuil_exo_cho_demip",
                    "value": 122
                }
            }
        }
    }
}

export default CurrentCSG
