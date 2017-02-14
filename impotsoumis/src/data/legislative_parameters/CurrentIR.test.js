import CurrentIR from './CurrentIR'

var assert = require('assert');

describe("Dans les paramètres de l'impot sur le revenu", () => {
    describe("Le plafond d'abattement des frais pro", () => {
        it("est correct", () => {
            assert.equal(Math.round(CurrentIR.plafond.abattement.fraisPro.value), 1024)
        });
    });
});
