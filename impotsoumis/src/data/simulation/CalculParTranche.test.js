import CalculParTranche from './CalculParTranche'

var assert = require('assert');

describe("Calcul par tranches", () => {
    it("est correct", () => {
        var tranches = [
                {
                    "min": 0,
                    "max": 10,
                    "taux": 0.5 // 10 / 2 = 5
                }, {
                    "min": 10,
                    "max": 110,
                    "taux": 0.5 // 100 / 2 = 50

                }];
                var result = CalculParTranche(110, tranches)
                assert.equal(result.total, 55)
    });
});
