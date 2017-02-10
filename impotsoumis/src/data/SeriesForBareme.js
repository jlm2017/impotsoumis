function SeriesForBareme(netimposable, baremeList) {

    var series = []
    for (var bareme of baremeList) {
        if (netimposable > bareme.min) {
            var margeHaute = (netimposable > bareme.max)
                ? bareme.max
                : netimposable;
            var montantAImposer = margeHaute - bareme.min;
            var sommeAPayerSurTranche = Math.round(montantAImposer * bareme.taux)

            var serie = {
                "label": bareme.label,
                "value": sommeAPayerSurTranche,
                "colorIndex": bareme.colorIndex
            };

            series.push(serie);
        } else {
            break;
        }
    }
    return series
}

export default SeriesForBareme;
