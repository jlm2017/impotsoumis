function TauxEffectif(revenu, tranche) {
    var lambda = 0
    if (tranche.min == 0) {
        if(revenu < tranche.max) {
            lambda = revenu/tranche.max
        }
    }
    else if(tranche.min<=revenu) {
        if(revenu<tranche.max) {
            lambda = 1-(revenu-tranche.min)/(tranche.max-tranche.min)
        }
    }
    var result = lambda * tranche.tauxMin + (1 - lambda) * tranche.tauxMax

    return result
}

export default TauxEffectif;
