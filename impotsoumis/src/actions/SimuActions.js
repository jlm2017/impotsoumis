import AppDispatcher from './../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

export default {
  netChanged(net) {
    AppDispatcher.dispatch({actionType: Constants.Action.NET_CHANGED, net: Number(net)});
  },

  maritalStatusChanged(isMarried) {
    AppDispatcher.dispatch({actionType: Constants.Action.MARITAL_STATUS_CHANGED, isMarried: Number(isMarried)});
  },

  numberofChildrenChanged(numberOfChildren) {
    AppDispatcher.dispatch({actionType: Constants.Action.NUMBER_OF_CHILDREN_CHANGED, numberOfChildren: Number(numberOfChildren)});
  },

  themeChanged(theme) {
    AppDispatcher.dispatch({actionType: Constants.Action.THEME_CHANGED, theme: theme});
  }
};
