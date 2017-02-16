import NewIR from './../legislative_parameters/NewIR'
import CurrentIR from './../legislative_parameters/CurrentIR'
import CalculParTranche from './CalculParTranche'

function JLMSimulation(revenu_fiscal_ref, couple, nbenf) {
    var cI_enfant = NewIR.creditImpotEnfant
    var seuil_recouv = CurrentIR.seuilRecouvrement.value
    var a24 = (revenu_fiscal_ref.salarie + revenu_fiscal_ref.chomeur + revenu_fiscal_ref.retraite) / (1 + couple)

    var calcul = CalculParTranche(a24, NewIR.bareme)
    var b24 = calcul.total

    var c24 = b24 * (1 + couple)

    var d24 = c24 - cI_enfant * nbenf

    var somme_apres_seuil_recouv = (d24 > seuil_recouv) ? d24 : 0
    var e24 = (d24 > 0) ? somme_apres_seuil_recouv : d24

    var csg = calcul.csg
    
    return {
        "revenu": {
            "imposable": a24
        },
        "impot": {
            "par": {
                "partFiscal": {
                    "avant": {
                        "ci": {
                            "qf": b24
                        }
                    }

                }
            },
            "total": c24,
            "apres": {
                "ci": {
                    "qf": d24
                }
            },
            "du": e24
        },
        "csg": csg
    }

}

export default JLMSimulation;
