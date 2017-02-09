import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

import BaremeActuel from '../data/BaremeActuel'
import NouveauBareme from '../data/NouveauBareme'
import SeriesForBareme from '../data/SeriesForBareme'

// Catch: State must be immutable
class SimuStore extends ReduceStore {

    getInitialState() {
        return {
            theme: Constants.Theme.GROMMET,
            defaultNet: "13677",
            net: 13677,
            newSeries: SeriesForBareme(13677, NouveauBareme),
            currentSeries: SeriesForBareme(13677, BaremeActuel)
        }
    }

    reduce(state, action) {
        switch (action.actionType) {
            case Constants.Action.NET_CHANGED:
                return {
                    theme: state.theme,
                    defaultNet: state.defaultNet,
                    net: action.net,
                    newSeries: SeriesForBareme(action.net, NouveauBareme),
                    currentSeries: SeriesForBareme(action.net, BaremeActuel)
                };
            case Constants.Action.THEME_CHANGED:
                return {
                    theme: action.theme,
                    defaultNet: state.defaultNet,
                    net: state.net,
                    newSeries: state.newSeries,
                    currentSeries: state.currentSeries
                };
            default:
                return state;
        }
    }
}

export default new SimuStore(AppDispatcher);
