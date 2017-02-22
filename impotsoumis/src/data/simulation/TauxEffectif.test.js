import TauxEffectif from './TauxEffectif'

var assert = require('assert');

describe("Calcul par taux moyen", () => {

    it("est ok avec taux au milieu", () => {
        var revenu = 50

        var tranche = {
            "min": 0,
            "max": 100,
            "tauxMin": 0,
            "tauxMax": 1
        }
        // taux moyen = 0.5

        var result = TauxEffectif(revenu, tranche)
        assert.equal(result, 0.5)
    });

    it("est ok avec taux au milieu", () => {
        var revenu = 100

        var tranche = {
            "min": 0,
            "max": 200,
            "tauxMin": 0,
            "tauxMax": 0.02
        }
        // taux moyen = 0.5

        var result = TauxEffectif(revenu, tranche)
        assert.equal(result, 0.01)
    });
});

export default TauxEffectif;
