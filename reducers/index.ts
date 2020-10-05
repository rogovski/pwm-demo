import { combineReducers } from 'redux';

const INITIAL_APPLIANCE_STATE = {};

const applianceStateReducer = (state = INITIAL_APPLIANCE_STATE, action) => {
  let app;
  switch (action.type) {
    case 'APPLIANCE_FETCH_SUCCESS':
      return Object.assign({}, state, action.payload);
    case 'APPLIANCE_OFF_SUCCESS':
    case 'APPLIANCE_ON_SUCCESS':
      app = state[action.payload.applianceName];
      if (app === undefined) {
        return state;
      }
      return Object.assign({}, state, {
        [action.payload.applianceName]: Object.assign({}, app, { powerState: action.payload.powerState })
      });
    case 'APPLIANCE_LOW_REQUESTED':
    case 'APPLIANCE_MED_REQUESTED':
    case 'APPLIANCE_HIGH_REQUESTED':
      app = state[action.payload.applianceName];
      if (app === undefined) {
        return state;
      }
      return Object.assign({}, state, {
        [action.payload.applianceName]: Object.assign({}, app, { fixtureState: action.payload.fixtureState })
      });

    default:
      return state;
  }
};

export default combineReducers({
  appliances: applianceStateReducer
});
