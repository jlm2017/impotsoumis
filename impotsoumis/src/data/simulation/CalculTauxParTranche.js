function _calcul_derniereTranche(revenu, tranche) {
    return {
        "revenu": revenu,
        "taux": tranche.tauxMax,
        "total": (revenu - tranche.min) * tranche.tauxMax
    }
}

function CalculTauxParTranche(revenu, tranches) {

    var currentTranche = {}

    for (var tranche of tranches) {

        if (revenu === tranche.max) {
            return {
                "revenu": revenu,
                "taux": tranche.tauxMin,
                "total": revenu * tranche.tauxMax
            }
        }

        if (tranche.min <= revenu && revenu < tranche.max) {
            if (tranche.max === Number.MAX_SAFE_INTEGER) {
                return _calcul_derniereTranche(revenu, tranche)
            } else {
                return {
                    "revenu": revenu,
                    "taux": tranche.tauxMin,
                    "total": revenu * tranche.tauxMin
                }
            }
        }
    }

    return 0
}

export default CalculTauxParTranche;
