import TauxEffectif from './TauxEffectif'

function _calcul_derniereTranche_taux_marginal(revenu, tranche) {
    return {
        "revenu": revenu,
        "taux": tranche.tauxMax,
        "total": revenu * tranche.tauxMin + (revenu - tranche.min) * tranche.tauxMax
    }
}

function CalculParTauxMoyen(revenu, tranches) {

    var currentTranche = {}
    for (var tranche of tranches) {
        if (revenu === tranche.min) {
            return {
                "revenu": revenu,
                "taux": tranche.tauxMin,
                "total": revenu * tranche.tauxMin
            }
        }

        if (revenu === tranche.max) {
            return {
                "revenu": revenu,
                "taux": tranche.tauxMax,
                "total": revenu * tranche.tauxMax
            }
        }
        if (tranche.min < revenu && revenu < tranche.max) {
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
