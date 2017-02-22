import NewIR from './../legislative_parameters/NewIR'
import NewCSG from './../legislative_parameters/NewCSG'
import CurrentIR from './../legislative_parameters/CurrentIR'
import CalculParTauxMoyen from './CalculParTauxMoyen'
import CalculTauxParTranche from './CalculTauxParTranche'

function JLMSimulation(revenu_total, couple, nbenf) {
    var ci_enfant = NewIR.creditImpotEnfant
    var seuil_recouv = CurrentIR.seuilRecouvrement.value
    var abattement = 0.98

    var a24 = revenu_total.salarie + revenu_total.chomeur + revenu_total.retraite

    var calculCSG = CalculTauxParTranche(a24, NewCSG.bareme, abattement)

    var b24 = calculCSG.taux
    var c24 = a24 * b24 * abattement

    var d24 = a24 * 0.92 / (1 + couple)

    var calculIR = CalculParTauxMoyen(d24, NewIR.bareme)
    var e24 = calculIR.total

    var f24 = e24 * (1 + couple)

    var g24 = f24 - c24 - ci_enfant * nbenf

    var somme_apres_seuil_recouv = (g24 > seuil_recouv)
        ? g24
        : 0

    var h24 = (g24 > 0)
        ? somme_apres_seuil_recouv
        : g24

    var i24 = h24 + c24
    return {
        "csg": c24,
        "ir": h24
    }
}

export default JLMSimulation;
