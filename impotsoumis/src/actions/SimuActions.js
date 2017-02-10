import AppDispatcher from './../dispatcher/AppDispatcher';
import Constants from './../constants/Constants';

export default {
  netChanged(net) {
    AppDispatcher.dispatch({actionType: Constants.Action.NET_CHANGED, net: net});
  },

  themeChanged(theme) {
    AppDispatcher.dispatch({actionType: Constants.Action.THEME_CHANGED, theme: theme});
  }
};
