import AppDispatcher from './../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

export default {
  netChanged(net) {
    AppDispatcher.dispatch({actionType: Constants.Action.NET_CHANGED, net: net});
  },

  maritalStatusChanged(isMarried) {
    AppDispatcher.dispatch({actionType: Constants.Action.MARITAL_STATUS_CHANGED, isMarried: isMarried});
  },

  numberofChildrenChanged(numberOfChildren) {
    AppDispatcher.dispatch({actionType: Constants.Action.NUMBER_OF_CHILDREN_CHANGED, numberOfChildren: numberOfChildren});
  },

  themeChanged(theme) {
    AppDispatcher.dispatch({actionType: Constants.Action.THEME_CHANGED, theme: theme});
  }
};
