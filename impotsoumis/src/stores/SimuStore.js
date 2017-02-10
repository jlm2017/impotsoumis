import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

import BaremeActuel from '../data/BaremeActuel'
import NouveauBareme from '../data/NouveauBareme'
import SeriesForBareme from '../data/SeriesForBareme'
import CalculImpot from '../data/CalculImpot'

// Catch: State must be immutable
class SimuStore extends ReduceStore {

    getInitialState() {
        var salaireMensuelNetDuFoyer = 15000;

        var retraiteMensuelle = 0;
        var allocationsChomageMensuelle = 0;
        var marieOuPacse = 1;
        var nbEnfantsACharge = 2;

        return {
            theme: Constants.Theme.GROMMET,
            defaultNet: "15000",
            net: salaireMensuelNetDuFoyer,
            newSeries: this.generateSeries(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nbEnfantsACharge),
            currentSeries: this.generateSeries(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nbEnfantsACharge)
        }
    }

    generateSeries(sal_net, retraite, alloc_cho, couple, nbenf) {

        var retraiteMensuelle = retraite;
        var allocationsChomageMensuelle = alloc_cho;

        var marieOuPacse = couple;
        var nombreEnfantsACharge = nbenf;

        var result = CalculImpot(sal_net, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nombreEnfantsACharge);
        console.log(sal_net);
        console.log(result);

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
                    newSeries: this.generateSeries(action.net, 0, 0, 0, 0),
                    currentSeries: this.generateSeries(action.net, 0, 0, 0, 0)
                };
            case Constants.Action.THEME_CHANGED:
                return {theme: action.theme, defaultNet: state.defaultNet, net: state.net, newSeries: state.newSeries, currentSeries: state.currentSeries};
            default:
                return state;
        }
    }
}

export default new SimuStore(AppDispatcher);
