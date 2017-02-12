import UserParams from './UserParams'

var assert = require('assert');

describe('User Params', () => {
    describe('#userParams()', () => {
        it('Les valeurs net, retraite, alloc, couple, nbEnfants doivent être reprises dans le resultat', () => {
            var net = 2000, retraite = 1000, chomage = 500 
            var couple = 1, nbEnfants = 2

            var params = UserParams(net, retraite, chomage, couple, nbEnfants)
            
            assert.equal(2000, params.salaire.net.value)
            assert.equal(1000, params.retraite.value)
            assert.equal(500, params.chomage.value)
            assert.equal(1, params.couple.value)
            assert.equal(2, params.nbEnfants.value)
        });

        it('Le calcul du salaire brut doit être correct', () => {
            var net = 3000, retraite = 0, chomage = 0 
            var couple = 1, nbEnfants = 1

            var params = UserParams(net, retraite, chomage, couple, nbEnfants)
            
            assert.equal(3750, params.salaire.brut.value)
        });

        it('Le calcul du nombre de parts fiscale doit être correct', () => {
            var net = 3000, retraite = 0, chomage = 0 
            var couple = 1, nbEnfants = 1

            var params = UserParams(net, retraite, chomage, couple, nbEnfants)
            
            assert.equal(2.5, params.nbPartsFiscales.value)
        });
    });
});
