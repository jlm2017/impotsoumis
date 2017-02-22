import NewIR from './../legislative_parameters/NewIR'
import NewCSG from './../legislative_parameters/NewCSG'
import CurrentIR from './../legislative_parameters/CurrentIR'
import CalculParTauxMoyen from './CalculParTauxMoyen'
import CalculTauxParTranche from './CalculTauxParTranche'

function JLMSimulation(revenu_total, couple, nbenf) {
    console.log("revenu_total")
    console.log(revenu_total)
    console.log("couple")
    console.log(couple)
    console.log("nbenf")
    console.log(nbenf)
    var cI_enfant = NewIR.creditImpotEnfant
    var seuil_recouv = CurrentIR.seuilRecouvrement.value

    var somme = revenu_total.salarie + revenu_total.chomeur + revenu_total.retraite

    var diviseur = 1 + couple
    // a24 = revenu imposable par part fiscale
    var a24 = somme / diviseur

    var calculSommeIR = CalculParTauxMoyen(a24, NewIR.bareme)
    var calculSommeCSG = CalculTauxParTranche(a24, NewCSG.bareme)

    var calculTotal = calculSommeIR.total
    var calculCSG = calculSommeCSG.total
    var calculIR = calculTotal - calculSommeCSG.total;

    // b24 = impot par part fiscale avant ci qf
    var b24 = calculIR

    // c24 = impot total
    var c24 = b24 * (1 + couple)

    // d24 = impot après CI QF
    var d24 = c24 - cI_enfant * nbenf

    var somme_apres_seuil_recouv = (d24 > seuil_recouv)
        ? d24
        : 0

    // e24 : Impot du (après seuil de recouvrement)
    var e24 = (d24 > 0)
        ? somme_apres_seuil_recouv
        : d24

    var ir = e24
    var csg = calculCSG

    return {
        "calcul": {
            "sommeIR": calculSommeIR,
            "sommeCSG": calculSommeCSG,
            "a24": a24,
            "b24": b24,
            "c24": c24,
            "d24": d24,
            "e24": e24
        },
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
        "csg": csg,
        "ir": ir
    }
}

export default JLMSimulation;
