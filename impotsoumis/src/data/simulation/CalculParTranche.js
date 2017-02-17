function CalculParTranche(impot, tranches) {

    var series = []
    var total = 0
    var csg = 0

    for (var tranche of tranches) {
        if (impot > tranche.min) {
            var margeHaute = (impot > tranche.max)
                ? tranche.max
                : impot;
            var montantAImposer = margeHaute - tranche.min;
            var sommeAPayerSurTranche = montantAImposer * tranche.tauxMarginal
            var csgSurTranches = sommeAPayerSurTranche * tranche.tauxCSG

            var serie = {
                "id": tranche.name,
                "value": sommeAPayerSurTranche
            };
            series.push(serie);

            total += sommeAPayerSurTranche;
            csg += csgSurTranches;
        } else {
            break;
        }
    }

    var finalCSG = csg < (0.075 * impot) ? csg : impot * 0.075
    return { "tranches": series, "total": total, "ir": total - finalCSG, "csg": finalCSG }
}

export default CalculParTranche;
