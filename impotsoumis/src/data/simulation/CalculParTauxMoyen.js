import TauxEffectif from './TauxEffectif'

function _calcul_derniereTranche_taux_marginal(revenu, tranche) {
    return tranche.min * tranche.tauxMin + (revenu - tranche.min) * tranche.tauxMax
}

function CalculParTauxMoyen(revenu, tranches) {

    var currentTranche = {}
    for (var tranche of tranches) {
        if (tranche.min <= revenu && revenu <= tranche.max) {
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
