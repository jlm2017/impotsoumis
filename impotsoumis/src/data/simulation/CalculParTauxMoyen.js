import TauxEffectif from './TauxEffectif'

function _calcul_derniereTranche_taux_marginal(revenu, tranche) {
    var total = tranche.min * tranche.tauxMin + (revenu - tranche.min) * tranche.tauxMax
    if (total > revenu * 0.7) {
        var result = {
            "revenu": revenu,
            "taux": 0.7,
            "total": revenu * 0.7
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
