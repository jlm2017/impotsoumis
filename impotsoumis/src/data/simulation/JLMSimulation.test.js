import IRParams from './IRParams'
import UserParams from './UserParams'
import JLMSimulation from './JLMSimulation'

var assert = require('assert');

describe("Révolution fiscale ", () => {

    describe("Test 2800 euros ", () => {
        describe('Le Revenu imposable par la part fiscale', () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 0,
                    nbEnfants = 0

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.revenu.imposable), 2610)
            });
        });

        describe("L'impôt par part fiscale avant CI QF", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 0,
                    nbEnfants = 0

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.par.partFiscal.avant.ci.qf), 521)
            });
        });

        describe("L'impôt total", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 0,
                    nbEnfants = 0

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.total), 521)
            });
        });
        describe("L'impôt après CI QF", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 0,
                    nbEnfants = 0

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.apres.ci.qf), 521)
            });
        });
        describe("L'impôt du", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 0,
                    nbEnfants = 0

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.du), 521)
            });
        });
    });

    describe("2800 euros, marié, 2 enfant", () => {
        describe("Revenu imposable par part fiscale ", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 1,
                    nbEnfants = 2

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.revenu.imposable), 1305)
            });
        });

        describe("L'impôt par part fiscale avant CI QF", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 1,
                    nbEnfants = 2

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.par.partFiscal.avant.ci.qf), 91)
            });
        });

        describe("L'impôt total", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 1,
                    nbEnfants = 2

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.total), 182)
            });
        });

        describe("L'impôt après CI QF", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 1,
                    nbEnfants = 2

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.apres.ci.qf), 15)
            });
        });

        describe("L'impôt du", () => {
            it('est correct', () => {

                var net = 2800,
                    retraite = 0,
                    chomage = 0,
                    couple = 1,
                    nbEnfants = 2

                var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
                var irParams = IRParams(userParams)

                var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)
                assert.equal(Math.round(jlmSimulation.impot.du), 15)
            });
        });
    });
});
