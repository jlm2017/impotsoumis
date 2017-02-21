function TauxEffectif(revenu, tranche) {
    if (tranche.min > revenu || revenu > tranche.max) {
        return 0;
    }

    var lambda = (revenu - tranche.min) / (tranche.max - tranche.min)
    var result = lambda * tranche.tauxMin + (1 - lambda) * tranche.tauxMax

    return result
}

export default TauxEffectif;
