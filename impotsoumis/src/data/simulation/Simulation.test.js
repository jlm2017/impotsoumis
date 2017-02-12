import IRParams from './IRParams'
import UserParams from './UserParams'
import Simulation from './Simulation'

var assert = require('assert');

describe('Le revenu imposable', () => {
    describe('par part fiscale', () => {
        it('est correct', () => {
            var net = 2800,
                retraite = 0,
                chomage = 0,
                couple = 0,
                nbEnfants = 0

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple)
            assert.equal(Math.round(simulation.revenu.imposable.par.partFiscale.value), 2610)
        });

        describe('sans QF', () => {
            it('est correct', () => {
                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 1,
                    nbEnfants = 0

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple)
                assert.equal(Math.round(simulation.revenu.imposable.par.partFiscale.sansQF.value), 1305)
            });
        });
    });
});

describe("L'impôt avant décote ", () => {
    describe("avec QF par part fiscale", () => {
        it('est correct', () => {

            var net = 2800,
                retraite = 0,
                chomage = 0,
                couple = 0,
                nbEnfants = 0

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value)
            assert.equal(Math.round(simulation.impot.avantDecote.avecQF.par.partFiscale.value, couple), 313)
        });
    });
    describe("sans QF par part fiscale", () => {
        it('est correct', () => {

            var net = 2800,
                retraite = 0,
                chomage = 0,
                couple = 0,
                nbEnfants = 0

            var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
            var irParams = IRParams(userParams)

            var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple)
            assert.equal(Math.round(simulation.impot.avantDecote.avecQF.par.partFiscale.value), 313)
        });
    });
});

describe("Montant dépassement plafond du QF", () => {
    it('est correct', () => {

        var net = 2800,
            retraite = 0,
            chomage = 0,
            couple = 0,
            nbEnfants = 0

        var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        var irParams = IRParams(userParams)

        var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple)
        assert.equal(Math.round(simulation.montant.depassement.plafondQF.value), 0)
    });
});

describe("L'impôt total avant décote avec plafonnement du QF ", () => {
    it('est correct', () => {

        var net = 2800,
            retraite = 0,
            chomage = 0,
            couple = 0,
            nbEnfants = 0

        var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        var irParams = IRParams(userParams)

        var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple)
        assert.equal(Math.round(simulation.impot.total.avantDecote.avecPlafonnementQF.value), 313)
    });
});

describe("Décote", () => {
    it('est correcte', () => {

        var net = 2800,
            retraite = 0,
            chomage = 0,
            couple = 0,
            nbEnfants = 0

        var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        var irParams = IRParams(userParams)

        var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple)
        assert.equal(Math.round(simulation.decote.value), 0)
    });
});

describe("Impôt dû", () => {
    it('est correct', () => {

        var net = 2800,
            retraite = 0,
            chomage = 0,
            couple = 0,
            nbEnfants = 0

        var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        var irParams = IRParams(userParams)

        var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple)
        assert.equal(Math.round(simulation.impot.du.value), 313)
    });
});

describe("CSG", () => {

    it('est correcte', () => {

        var net = 2800,
            retraite = 0,
            chomage = 0,
            couple = 0,
            nbEnfants = 0

        var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        var irParams = IRParams(userParams)

        var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple, irParams.csg.taux.plein.salarie, irParams.csg.taux.reduit.salarie)
        assert.equal(Math.round(simulation.csg.du.value), 275)
    });
});

describe("Total", () => {

    it('is awesome', () => {

        var net = 2800,
            retraite = 0,
            chomage = 0,
            couple = 0,
            nbEnfants = 0

        var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        var irParams = IRParams(userParams)

        var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple, irParams.csg.taux.plein.salarie, irParams.csg.taux.reduit.salarie)
        assert.equal(Math.round(simulation.total.du.value), 588)
    });
});
