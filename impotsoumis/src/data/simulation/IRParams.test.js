import IRParams from './IRParams'
import UserParams from './UserParams'

var assert = require('assert');

describe('IR Params', () => {
    describe('#IRParams()', () => {
        it('B14-B16 - La CSG taux plein et CRDS doivent être corrects', () => {
            var net = 3000,
                retraite = 0,
                chomage = 0
            var couple = 1,
                nbEnfants = 1

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)
            assert.equal(Math.round(irParams.csg.taux.plein.salarie), 295)
            assert.equal(irParams.csg.taux.plein.retraite, 0)
            assert.equal(irParams.csg.taux.plein.chomeur, 0)
        });

        xit('C14-C16 - La CSG taux réduit et CRDS doivent être corrects', () => {
            var net = 3000,
                retraite = 0,
                chomage = 0
            var couple = 1,
                nbEnfants = 1

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(irParams.csg.taux.reduit.salarie, 0)
            assert.equal(irParams.csg.taux.reduit.retraite, 0)
            assert.equal(irParams.csg.taux.reduit.chomeur, 0)

        });

        xit('D14-D16 - La CSG déductible doit être correcte', () => {
            var net = 3000,
                retraite = 0,
                chomage = 0
            var couple = 1,
                nbEnfants = 1

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(irParams.csg.deductible.salarie, 188)
            assert.equal(irParams.csg.deductible.retraite, 0)
            assert.equal(irParams.csg.deductible.chomeur, 0)

        });

        xit('E14-E16 - Le revenu déclaré doit être correct', () => {
            var net = 3000,
                retraite = 0,
                chomage = 0
            var couple = 1,
                nbEnfants = 1

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(irParams.revenu.declare.salarie, 3107)
            assert.equal(irParams.revenu.declare.retraite, 0)
            assert.equal(irParams.revenu.declare.chomeur, 0)

        });

        xit('F14-F16 - Le revenu fiscal de référence (RFR) doit être correct', () => {
            var net = 3000,
                retraite = 0,
                chomage = 0
            var couple = 1,
                nbEnfants = 1

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(irParams.revenu.fiscalDeReference.salarie, 2796)
            assert.equal(irParams.revenu.fiscalDeReference.retraite, 0)
            assert.equal(irParams.revenu.fiscalDeReference.chomeur, 0)

        });

    });
});
