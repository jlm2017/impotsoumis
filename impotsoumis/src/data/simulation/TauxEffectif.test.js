import TauxEffectif from './TauxEffectif'

var assert = require('assert');

describe("Calcul par taux moyen", () => {
    it("retourne 0 si revenu est au dessus de la tranche", () => {
        var revenu = 150

        var tranche = {
            "min": 0,
            "max": 100,
            "tauxMin": 0,
            "tauxMax": 1
        }

        var result = TauxEffectif(revenu, tranche)
        assert.equal(result, 0)
    });

    it("retourne 0 si revenu est en dessous de la tranche", () => {
        var revenu = 5

        var tranche = {
            "min": 10,
            "max": 40,
            "tauxMin": 0,
            "tauxMax": 1
        }

        var result = TauxEffectif(revenu, tranche)
        assert.equal(result, 0)
    });

    it("est correct si revenu au milieu de la tranche", () => {
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
});

export default TauxEffectif;
