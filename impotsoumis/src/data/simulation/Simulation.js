import CurrentIR from './../legislative_parameters/CurrentIR'
import CalculParTranche from './CalculParTranche'

function Simulation(revenu_fiscal_ref, nbparts, couple, csg_taux_plein, csg_taux_reduit) {

    var revenu_fiscal_ref_total = revenu_fiscal_ref.salarie + revenu_fiscal_ref.chomeur + revenu_fiscal_ref.retraite
    var plaf_QF = CurrentIR.plafond.qf.parDemiPart.value

    var a20 = revenu_fiscal_ref_total / nbparts
    var b20 = couple === 1
        ? revenu_fiscal_ref.salarie / 2
        : revenu_fiscal_ref.salarie

    var c20 = CalculParTranche(a20, CurrentIR.bareme).total
    var d20 = CalculParTranche(b20, CurrentIR.bareme).total

    var valeurMin = 0
    var valeurMax = d20 * (1 + couple) - c20 * nbparts - plaf_QF * 2 * (nbparts - (1 + couple))
    var e20 = Math.max(valeurMin, valeurMax)

    var f20 = c20 * nbparts + e20

    var plaf_decote_celib = CurrentIR.plafond.decote.celibataire.value
    var plaf_decote_couple = CurrentIR.plafond.decote.couple.value

    var plafond = couple === 0 ?  plaf_decote_celib : plaf_decote_couple
    var tx_decote = CurrentIR.tauxDecote.value

    var g20 = Math.max(0, tx_decote * (plafond - f20))

    var seuil_recouv = CurrentIR.seuilRecouvrement.value
    var difference = f20 - g20
    var h20 = difference >= seuil_recouv ? difference : 0

    var i20 = csg_taux_plein + csg_taux_reduit
    var j20 = h20 + i20

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
                            "value": d20
                        }
                    }
                }
            },
            "total": {
                "avantDecote": {
                    "avecPlafonnementQF": {
                        "value": f20
                    }
                }
            },
            "du": {
                "value": h20
            }
        },
        "montant": {
            "depassement": {
                "plafondQF": {
                    "value": e20
                }
            }
        },
        "decote": {
            "value": g20
        },
        "csg": {
            "du": {
                "value": i20
            }
        },
        "total": {
            "du": {
                "value": j20
            }
        }
    }
}

export default Simulation;
