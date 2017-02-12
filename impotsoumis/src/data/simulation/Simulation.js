import CurrentIR from './../legislative_parameters/CurrentIR'
import CalculParTranche from './CalculParTranche'

function Simulation(revenu_fiscal_ref, nbparts, couple) {

    var revenu_fiscal_ref_total = revenu_fiscal_ref.salarie + revenu_fiscal_ref.chomeur + revenu_fiscal_ref.retraite

    var a20 = revenu_fiscal_ref_total / nbparts
    var b20 = couple == 1 ? revenu_fiscal_ref.salarie / 2 : revenu_fiscal_ref.salarie 

    var c20 = CalculParTranche(a20, CurrentIR.bareme).total

    return {
        "revenu": {
            "imposable": {
                "par": {
                    "partFiscale": {
                        "value": a20,
                        "sansQF": {
                            "value": b20
                        }
                    }
                }
            }
        },
        "impot": {
            "avantDecote": {
                "avecQF": {
                    "par": {
                        "partFiscale": {
                            "value": c20
                        }
                    }
                },
                "sansQF": {
                    "par": {
                        "partFiscale": {
                            "value": -1
                        }
                    }
                }
            },
            "total": {
                "avantDecote": {
                    "avecPlafonnementQF": {
                        "value": -1
                    }
                }
            },
            "du": {
                "value": -1
            }
        },
        "montant": {
            "depassement": {
                "plafondQF": {
                    "value": -1
                }
            }
        },
        "decote": {
            "value": -1
        },
        "csgDu": {
            "du": {
                "value": -1
            }
        },
        "total": {
            "du": {
                "value": -1
            }
        }
    }
}

export default Simulation;
