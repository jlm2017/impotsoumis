import TauxEffectif from './TauxEffectif'

function _calcul_derniereTranche_taux_marginal(revenu, tranche) {
    var total = tranche.min * tranche.tauxMin + (revenu - tranche.min) * tranche.tauxMax
    var difference = revenu - total
    if (difference < tranche.min) {
        return {
            "revenu": revenu,
            "total": revenu - tranche.min
        }
    }
    var result = {"revenu": revenu, "taux": tranche.tauxMax, "total": total}
    return result
}

function CalculParTauxMoyen(revenu, tranches) {

    var currentTranche = {}
    for (var tranche of tranches) {
        if (tranche.min <= revenu && revenu < tranche.max) {
            if (tranche.max === Number.MAX_SAFE_INTEGER) {
                return _calcul_derniereTranche_taux_marginal(revenu, tranche)
            } else {
                currentTranche = tranche
                break
            }
        }
    }
    var taux = TauxEffectif(revenu, currentTranche)
    return {
        "revenu": revenu,
        "taux": taux,
        "total": revenu * taux
    }
}

export default CalculParTauxMoyen;
