export const fetchApplianceState = () => (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'APPLIANCE_FETCH_SUCCESS',
        payload: {
          diningroom: { key: 'diningroom', display: 'Dining Room', powerState: 'on', fixtureState: 'low' },
          kitchen: { key: 'kitchen', display: 'Kitchen', powerState: 'on', fixtureState: 'low' },
          livingroom: { key: 'livingroom', display: 'Living Room', powerState: 'on', fixtureState: 'low' },
          bedroom: { key: 'bedroom', display: 'Bedroom', powerState: 'on', fixtureState: 'low' },
          bathroom: { key: 'bathroom', display: 'Bathroom', powerState: 'on', fixtureState: 'low' }
        }
      });
    }, 1000);
};

export const turnOff = (applianceName) => (dispatch, getState) => {
  const { powerState } = getState().appliances[applianceName];
  if (powerState !== 'off') {
    setTimeout(() => {
      dispatch({
        type: 'APPLIANCE_OFF_SUCCESS',
        payload: { applianceName, powerState: 'off' }
      });
    }, 1000);
  }
};

export const turnOn = (applianceName) => (dispatch, getState) => {
  const { powerState } = getState().appliances[applianceName];
  if (powerState !== 'on') {
    setTimeout(() => {
      dispatch({
        type: 'APPLIANCE_ON_SUCCESS',
        payload: { applianceName, powerState: 'on' }
      });
    }, 1000);
  }
};

export const setLow = (applianceName) => (dispatch, getState) => {
  const { fixtureState } = getState().appliances[applianceName];
  if (fixtureState !== 'low') {
    dispatch({
      type: 'APPLIANCE_LOW_REQUESTED',
      payload: { applianceName, fixtureState: 'low', fixtureStateAck: false }
    });
    setTimeout(() => {
      // dispatch({
      //   type: 'APPLIANCE_LOW_ACK',
      //   payload: { applianceName, fixtureState: 'low', fixtureStateAck: true }
      // });
    }, 500);
  }
};

export const setMed = (applianceName) => (dispatch, getState) => {
  const { fixtureState } = getState().appliances[applianceName];
  if (fixtureState !== 'med') {
    dispatch({
      type: 'APPLIANCE_MED_REQUESTED',
      payload: { applianceName, fixtureState: 'med', fixtureStateAck: false }
    });
    setTimeout(() => {
      // dispatch({
      //   type: 'APPLIANCE_MED_ACK',
      //   payload: { applianceName, fixtureState: 'med', fixtureStateAck: true }
      // });
    }, 500);
  }
};

export const setHigh = (applianceName) => (dispatch, getState) => {
  const { fixtureState } = getState().appliances[applianceName];
  if (fixtureState !== 'high') {
    dispatch({
      type: 'APPLIANCE_HIGH_REQUESTED',
      payload: { applianceName, fixtureState: 'high', fixtureStateAck: false }
    });
    setTimeout(() => {
      // dispatch({
      //   type: 'APPLIANCE_HIGH_ACK',
      //   payload: { applianceName, fixtureState: 'high', fixtureStateAck: true }
      // });
    }, 500);
  }
};
