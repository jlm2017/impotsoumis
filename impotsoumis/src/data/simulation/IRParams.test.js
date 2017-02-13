import IRParams from './IRParams'
import UserParams from './UserParams'

import CurrentCSG from './../legislative_parameters/CurrentCSG'

var assert = require('assert');

describe('Le revenu fiscal de référence', () => {
    describe('doit être correct', () => {
        it('pour un salarié', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.revenu.fiscalDeReference.salarie), 1398)
        });

        it('pour un retraité', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.revenu.fiscalDeReference.retraite), 450)
        });

        it('pour un chômeur', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.revenu.fiscalDeReference.chomeur), 1357)
        });
    });
});
describe('Le revenu déclaré', () => {
    describe('doit être correct', () => {
        it('pour un salarié', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.revenu.declare.salarie), 1553)
        });

        it('pour un retraité', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.revenu.declare.retraite), 500)
        });

        it('pour un chômeur', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.revenu.declare.chomeur), 1507)
        });
    });
});

describe('La CSG déductible', () => {
    describe('doit être correcte', () => {
        it('pour un salarié', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.deductible.salarie), 94)
        });

        it('pour un retraité', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.deductible.retraite), 22)
        });

        it('pour un chômeur', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.deductible.chomeur), 56)
        });
    });
});

describe('La CSG taux réduit', () => {
    describe('doit être correcte', () => {
        it('pour un salarié', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.taux.reduit.salarie), 0)
        });

        it('pour un retraité', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.taux.reduit.retraite), 22)
        });

        it('pour un chômeur', () => {
            var net = 1500,
                retraite = 500,
                chomage = 1500,
                couple = 1,
                nbEnfants = 4

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.taux.reduit.chomeur), 63)
        });
    });
});

describe('La CSG taux plein', () => {

    describe('doit être correcte', () => {
        it('pour un salarié', () => {
            var net = 3000,
                retraite = 0,
                chomage = 0,
                couple = 1,
                nbEnfants = 2

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.taux.plein.salarie), 295)
        });

        it('pour un retraité', () => {
            var net = 1500,
                retraite = 1500,
                chomage = 0,
                couple = 1,
                nbEnfants = 2

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.taux.plein.retraite), 107)
        });

        it('pour un chômeur', () => {
            var net = 1500,
                retraite = 0,
                chomage = 2000,
                couple = 1,
                nbEnfants = 0

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            assert.equal(userParams.salaire.brut.value, 1875)
            var irParams = IRParams(userParams)

            assert.equal(Math.round(irParams.csg.taux.plein.chomeur), 132)
        });
    });
});
