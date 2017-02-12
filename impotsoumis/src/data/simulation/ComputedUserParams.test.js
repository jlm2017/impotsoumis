import ComputedUserParams from './ComputedUserParams'

var assert = require('assert');

describe('Computed User Params', () => {
    describe('#userParams()', () => {
        it('Le calcul du salaire brut doit être correct', () => {
            var net = 2000
            var couple = 1
            var nbEnfants = 2
            var params = ComputedUserParams(net, couple, nbEnfants)
            assert.equal(2500, params.salaireBrut.value)
        });

        it('Le calcul du nombre de parts fiscale doit être correct', () => {
            var net = 2000
            var couple = 1
            var nbEnfants = 2
            var params = ComputedUserParams(net, couple, nbEnfants)
            assert.equal(3, params.nbPartsFiscales.value)
        });
    });
});
