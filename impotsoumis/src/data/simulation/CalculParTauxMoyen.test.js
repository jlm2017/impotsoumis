import CalculParTauxMoyen from './CalculParTauxMoyen'

var assert = require('assert');

describe("Calcul par taux moyen", () => {
    it("est correct pour 100 euros", () => {
        var revenu = 100
        var tranches = [
            {
                "min": 0,
                "max": 200,
                "tauxMin": 0,
                "tauxMax": 0.02
            },
            {
                "min": 200,
                "max": 400,
                "tauxMin": 0.02,
                "tauxMax": 0.03
            }
        ];
        var calcul = CalculParTauxMoyen(revenu, tranches)
        assert.equal(calcul.revenu, 100)
        assert.equal(calcul.taux, 0.01)
        assert.equal(calcul.total, 1)

    });

    xit("est correct pour 34000 euros", () => {
        var revenu = 34000
        var tranches = [
            {
                "min": 0,
                "max": 33000,
                "tauxMin": 0,
                "tauxMax": 0.1
            },
            {
                "min": 33000,
                "max": Number.MAX_SAFE_INTEGER,
                "tauxMin": 0.1,
                "tauxMax": 0.9
            }
        ];
        var calcul = CalculParTauxMoyen(revenu, tranches)
        assert.equal(calcul.total, 33000 * 0.1 + 1000 * 0.9)

    });
});
