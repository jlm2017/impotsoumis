function TauxEffectif(revenu, tranche) {
    var lambda = (revenu - tranche.min) / (tranche.max - tranche.min)
    var result = lambda * tranche.tauxMin + (1 - lambda) * tranche.tauxMax

    return result
}

export default TauxEffectif;
