import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

import CalculImpot from '../data/CalculImpot'

// Catch: State must be immutable
class SimuStore extends ReduceStore {

    getInitialState() {
        var salaireMensuelNetDuFoyer = 15000;
        var retraiteMensuelle = 0;
        var allocationsChomageMensuelle = 0;
        var isMarried = 1;
        var numberOfChildren = 0;

        return {
            theme: Constants.Theme.MARKETING,
            defaultNet: "15000",
            net: salaireMensuelNetDuFoyer,
            isMarried: isMarried,
            numberOfChildren: numberOfChildren,
            newSeries: this.generateSeries(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, isMarried, numberOfChildren),
            currentSeries: this.generateSeries(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, isMarried, numberOfChildren)
        }
    }

    generateSeries(sal_net, retraite, alloc_cho, couple, nbenf) {
        var retraiteMensuelle = retraite;
        var allocationsChomageMensuelle = alloc_cho;

        var marieOuPacse = couple;
        var nombreEnfantsACharge = nbenf;

        var result = CalculImpot(sal_net, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nombreEnfantsACharge);

        return [
            {
                "label": "IR",
                "value": result.IR,
                "colorIndex": "neutral-4"
            }, {
                "label": "CSG",
                "value": result.CSG,
                "colorIndex": "neutral-1"
            }
        ];
    }

    reduce(state, action) {
        switch (action.actionType) {
            case Constants.Action.NET_CHANGED:
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: action.net,
                    isMarried: state.isMarried,
                    numberOfChildren: state.numberOfChildren,
                    newSeries: this.generateSeries(action.net, 0, 0, state.isMarried, state.numberOfChildren),
                    currentSeries: this.generateSeries(action.net, 0, 0, state.isMarried, state.numberOfChildren)
                };
            case Constants.Action.MARITAL_STATUS_CHANGED:
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    isMarried: action.isMarried,
                    numberOfChildren: state.numberOfChildren,
                    currentSeries: this.generateSeries(state.net, 0, 0, action.isMarried, state.numberOfChildren)

                };
            case Constants.Action.MARITAL_STATUS:
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    isMarried: state.isMarried,
                    numberOfChildren: action.numberOfChildren,
                    currentSeries: this.generateSeries(state.net, 0, 0, state.isMarried, action.numberOfChildren)
                };
            case Constants.Action.NUMBER_OF_CHILDREN_CHANGED:
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    isMarried: state.isMarried,
                    numberOfChildren: action.numberOfChildren,
                    currentSeries: this.generateSeries(state.net, 0, 0, state.isMarried, action.numberOfChildren)
                };

            case Constants.Action.THEME_CHANGED:
                return {theme: action.theme, defaultNet: state.defaultNet, net: state.net, newSeries: state.newSeries, currentSeries: state.currentSeries, numberOfChildren: state.numberOfChildren};
            default:
                return state;
        }
    }
}

export default new SimuStore(AppDispatcher);
