import React, { Component } from 'react';
import { SegmentedControls } from 'react-native-radio-buttons';
var styles = require('./Helpers/styles');

var ReactNative = require('react-native');
var Beacons = require('react-native-ibeacon');


import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  MapView
} from 'react-native';

class iBeacon extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var region = {
      identifier: 'ROAM',
      uuid: 'b1263fb4-f1b8-4cfa-9726-afbf12d5cfc3'
    }
    // Beacons.requestWhenInUseAuthorization();
    // Beacons.startMonitoringForRegion(region);
    // Beacons.startRangingBeaconsInRegion(region);
    // Beacons.startUpdatingLocation();

    console.log('BEACON: ', Beacons);

  }


  render() {
    return (
      <Text style={styles.header}> iBeacon </Text>
    )
  }
}

module.exports = iBeacon;