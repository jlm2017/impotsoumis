import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

import Simulation from '../data/simulation/Simulation'
import JLMSimulation from '../data/simulation/JLMSimulation'

import UserParams from '../data/simulation/UserParams'
import IRParams from '../data/simulation/IRParams'
import DistributionRevenus from '../data/DistributionRevenus'

// Catch: State must be immutable
class SimuStore extends ReduceStore {

    percentageRicher(net) {
        var bareme = DistributionRevenus.bareme
        var percentage = 0
        for (var item of bareme) {
            if (net > item.revenu) {
                percentage = item.percentile
            } else {
                break;
            }
        }
        return percentage
    }
    generateSeries(net, retraite, chomage, couple, nbEnfants) {
        const userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        const irParams = IRParams(userParams)

        const simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple, irParams.csg.taux.plein.salarie, irParams.csg.taux.reduit.salarie)

        const jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)

        const IR = Math.round(simulation.impot.du.value) * 12,
              CSG = Math.round(simulation.csg.du.value) * 12,
              NEW_IR = Math.round(jlmSimulation.newIR) * 12,
              CSG_P = Math.round(jlmSimulation.csg) * 12;

        return {
            current: {
                IR: IR,
                CSG: CSG,
                total: IR + CSG
            },
            revolution: {
                IR: NEW_IR,
                CSG: CSG_P,
                total: NEW_IR + CSG_P
            },
            gain: (IR + CSG) - (NEW_IR + CSG_P)
        };
    }

    getInitialState() {
        const net = 0;
        const retraite = 0;
        const chomage = 0;
        const couple = 0;
        const nbEnfants = 0;

        return {
            theme: Constants.Theme.DESIGNED,
            defaultNet: 2800,
            net: net,
            retraite: 0,
            chomage: 0,
            percentile: this.percentageRicher(0),
            isMarried: couple,
            numberOfChildren: nbEnfants,
            results: this.generateSeries(net, retraite, chomage, couple, nbEnfants)
        }
    }

    reduce(state, action) {
        switch (action.actionType) {
            case Constants.Action.NET_CHANGED:
            return {
                ...state,
                net: action.net,
                percentile: this.percentageRicher(action.net),
                results: this.generateSeries(action.net, 0, 0, state.isMarried, state.numberOfChildren)
            };

            case Constants.Action.RETRAITE_CHANGED:
            return {
                ...state,
                retraite: action.retraite,
                results: this.generateSeries(state.net, action.retraite, state.chomage, state.isMarried, state.numberOfChildren)
            }

            case Constants.Action.CHOMAGE_CHANGED:
            return {
                ...state,
                chomage: action.chomage,
                results: this.generateSeries(state.net, state.retraite, action.chomage, state.isMarried, state.numberOfChildren)
            };

            case Constants.Action.MARITAL_STATUS_CHANGED:
            return {
                ...state,
                isMarried: action.isMarried,
                results: this.generateSeries(state.net, state.retraite, state.chomage, action.isMarried, state.numberOfChildren)
            };

            case Constants.Action.NUMBER_OF_CHILDREN_CHANGED:
            return {
                ...state,
                numberOfChildren: action.numberOfChildren,
                results: this.generateSeries(state.net, state.retraite, state.chomage, state.isMarried, action.numberOfChildren)
            };

            case Constants.Action.THEME_CHANGED:
            return {
                theme: action.theme,
                ...state
            };

            default:
            return state;
        }
    }
}

export default new SimuStore(AppDispatcher);
