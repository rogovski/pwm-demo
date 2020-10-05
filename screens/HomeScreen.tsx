import React, { useState } from 'react';
import { StyleSheet, Animated, Easing, ScrollView } from 'react-native';
import Svg, { Path, Ellipse, Text, TSpan } from 'react-native-svg';
import { withAnchorPoint } from '../util/rotation';
import * as Themed from '../components/Themed';
import LowMidHigh  from '../components/LowMidHigh';
import {
  fetchApplianceState,
  turnOff,
  turnOn,
  setLow,
  setMed,
  setHigh
} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class HomeScreen extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    const applianceKeys = Object.keys(this.props.appliances);
    const isLoading = applianceKeys.length === 0;
    if (isLoading) {
      this.props.fetchApplianceState();
    }
  }

  render () {
    const applianceKeys = Object.keys(this.props.appliances);
    const isLoading = applianceKeys.length === 0;

    if (isLoading) {
      return (
        <Themed.View style={styles.container}>
          <Themed.Text>LOADING</Themed.Text>
        </Themed.View>
      );
    }
    else {
      return (
        <ScrollView>
        {applianceKeys.map(k => {
          const appliance = this.props.appliances[k];
          return (
            <Themed.View key={k} style={styles.container}>
              <Themed.Text>{appliance.display}</Themed.Text>
              <LowMidHigh
                powerState={appliance.powerState}
                fixtureState={appliance.fixtureState}
                onPowerUp={() => this.props.turnOn(k)}
                onPowerDown={() => this.props.turnOff(k)}
                onLow={() => this.props.setLow(k)}
                onMed={() => this.props.setMed(k)}
                onHigh={() => this.props.setHigh(k)}
              />
            </Themed.View>
          );
        })}
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const mapStateToProps = (state) => {
  const { appliances } = state;
  return { appliances };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchApplianceState,
    turnOff,
    turnOn,
    setLow,
    setMed,
    setHigh
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
