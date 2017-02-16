import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

import Simulation from '../data/simulation/Simulation'
import JLMSimulation from '../data/simulation/JLMSimulation'

import UserParams from '../data/simulation/UserParams'
import IRParams from '../data/simulation/IRParams'

// Catch: State must be immutable
class SimuStore extends ReduceStore {

    generateSeries(net, retraite, chomage, couple, nbEnfants) {
        var userParams = UserParams(net, retraite, chomage, couple, nbEnfants)
        var irParams = IRParams(userParams)

        var simulation = Simulation(irParams.revenu.fiscalDeReference, userParams.nbPartsFiscales.value, couple, irParams.csg.taux.plein.salarie, irParams.csg.taux.reduit.salarie)

        var jlmSimulation = JLMSimulation(irParams.revenu.fiscalDeReference, couple, nbEnfants)

        var result = {
            "current": {
                "IR": Math.round(simulation.impot.du.value),
                "CSG": Math.round(simulation.csg.du.value)
            },
            "new": {
                "IR": Math.round(jlmSimulation.impot.du),
                "CSG": Math.round(jlmSimulation.csg)
            }
        }
        return result
    }

    getInitialState() {
        var net = 2800;
        var retraite = 0;
        var chomage = 0;
        var couple = 0;
        var nbEnfants = 0;

        var series = this.generateSeries(net, retraite, chomage, couple, nbEnfants)

        return {
            theme: Constants.Theme.DESIGNED,
            defaultNet: 2800,
            net: net,
            retraite: 0,
            chomage: 0,
            isMarried: couple,
            numberOfChildren: nbEnfants,
            currentSeries: series.current,
            newSeries: series.new
        }
    }

    reduce(state, action) {
        var series = {}
        switch (action.actionType) {
            case Constants.Action.NET_CHANGED:
                series = this.generateSeries(action.net, 0, 0, state.isMarried, state.numberOfChildren);
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: action.net,
                    retraite: state.retraite,
                    chomage: state.chomage,
                    isMarried: state.isMarried,
                    numberOfChildren: state.numberOfChildren,
                    currentSeries: series.current,
                    newSeries: series.new
                };

            case Constants.Action.RETRAITE_CHANGED:
                series = this.generateSeries(state.net, action.retraite, state.chomage, state.isMarried, state.numberOfChildren);
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    retraite: action.retraite,
                    chomage: state.chomage,
                    isMarried: state.isMarried,
                    numberOfChildren: state.numberOfChildren,
                    currentSeries: series.current,
                    newSeries: series.new
                };

            case Constants.Action.CHOMAGE_CHANGED:
                series = this.generateSeries(state.net, state.retraite, action.chomage, state.isMarried, state.numberOfChildren);
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    retraite: state.retraite,
                    chomage: action.chomage,
                    isMarried: state.isMarried,
                    numberOfChildren: state.numberOfChildren,
                    currentSeries: series.current,
                    newSeries: series.new
                };

            case Constants.Action.MARITAL_STATUS_CHANGED:
                series = this.generateSeries(state.net, state.retraite, state.chomage, action.isMarried, state.numberOfChildren);
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    retraite: state.retraite,
                    chomage: state.chomage,
                    isMarried: action.isMarried,
                    numberOfChildren: state.numberOfChildren,
                    currentSeries: series.current,
                    newSeries: series.new

                };
            case Constants.Action.NUMBER_OF_CHILDREN_CHANGED:
                series = this.generateSeries(state.net, state.retraite, state.chomage, state.isMarried, action.numberOfChildren);

                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    retraite: state.retraite,
                    chomage: state.chomage,
                    isMarried: state.isMarried,
                    numberOfChildren: action.numberOfChildren,
                    currentSeries: series.current,
                    newSeries: series.new
                };

            case Constants.Action.THEME_CHANGED:
                return {
                    theme: action.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    retraite: state.retraite,
                    chomage: state.chomage,
                    isMarried: state.isMarried,
                    numberOfChildren: state.numberOfChildren,
                    currentSeries: state.currentSeries,
                    newSeries: state.newSeries
                };
            default:
                return state;
        }
    }
}

export default new SimuStore(AppDispatcher);
