import NewIR from './../legislative_parameters/NewIR'
import NewCSG from './../legislative_parameters/NewCSG'
import CurrentIR from './../legislative_parameters/CurrentIR'
import CalculParTauxMoyen from './CalculParTauxMoyen'

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
    console.log("somme")
    console.log(somme)

    var diviseur = 1 + couple
    console.log("diviseur")

    console.log(diviseur)

    var a24 = somme / diviseur
    console.log("a24")
    console.log(a24)

    var calculSommeIR = CalculParTauxMoyen(a24, NewIR.bareme)
    var calculSommeCSG = CalculParTauxMoyen(a24, NewCSG.bareme)

    var calculTotal = calculSommeIR.total
    var calculCSG = calculSommeCSG.total
    var calculIR = calculTotal - calculSommeCSG.total;

    var b24 = calculIR

    var c24 = b24 * (1 + couple)

    var d24 = c24 - cI_enfant * nbenf

    var somme_apres_seuil_recouv = (d24 > seuil_recouv)
        ? d24
        : 0
    var e24 = (d24 > 0)
        ? somme_apres_seuil_recouv
        : d24

    var ir = e24
    var csg = calculCSG

    return {
        "calcul": {
            "sommeIR": calculSommeIR,
            "sommeCSG": calculSommeCSG
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
