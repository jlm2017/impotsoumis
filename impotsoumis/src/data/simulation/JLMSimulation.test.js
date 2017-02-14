import IRParams from './IRParams'
import UserParams from './UserParams'
import JLMSimulation from './JLMSimulation'

var assert = require('assert');

describe("Révolution fiscale ", () => {

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
            assert.equal(Math.round(jlmSimulation.impot.par.partFiscal.avant.ci.qf), 432)
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
            assert.equal(Math.round(jlmSimulation.impot.total), 432)
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
            assert.equal(Math.round(jlmSimulation.impot.apres.ci.qf), 432)
        });
    });
});
