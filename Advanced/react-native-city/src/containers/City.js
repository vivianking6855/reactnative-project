/**
 * # City Demo
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {CityListHot} from './CityList';
import {colors} from '../values/colors';
import Region from '../components/regionpicker/region';

/**
 * ## Imports
 * resources
 *
 */
import {Strings} from '../values/strings';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class City extends Component {

  constructor(props, context) {
    super(props, context);

    this._init();
  }

  _init() {
    this.hotlist = CityListHot;
  }

  _hotSelect() {
    alert('_hotSelect: ');
  }

  _location() {
    alert('_location: ');
  }

  renderHotRegions(item, i) {
    const name = item.shortname;
    return (
      <TouchableHighlight style={styles.regionTouchable}
        underlayColor= 'transparent'
        key={"item_" + i}
        onPress={this._hotSelect.bind(this, i) }>
        <Text style={styles.cityText}>{name}</Text>
      </TouchableHighlight>
    );
  }

  renderHeader() {
    return <Text>Header$$$$$$$$$$$$ </Text>
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'flex-start', marginRight: 15 }}>

          {/* location city */}
          <Text style={styles.cityTitle}>定位城市</Text>
          <TouchableHighlight
            onPress={this._location.bind(this) }
            underlayColor='transparent'
            style={styles.locationView}>
            <View style={styles.iconView}>
              <Text style={styles.cityText}>
                杭州
              </Text>
            </View>
          </TouchableHighlight>

          {/* hot city */}
          <Text style={styles.cityTitle}>热门城市</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10 }}>
            {this.hotlist.map((item, i) => this.renderHotRegions(item, i)) }
          </View>

        </View>

        {/* region city */}
        <Region />

      </View >
    );
  }

}

const styles = StyleSheet.create({
  cityTitle: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  cityText: {
    fontSize: 16,
    color: colors.cityText
  },

  // location city
  locationView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cityBK,
    marginLeft: 20,
    marginVertical: 10,
    paddingVertical: 5,
  },
  iconView: {
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 8,
    flexDirection: 'row',
  },

  // tags
  regionTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    height: 40,
    width: (deviceWidth) / 3 - 40,
    alignSelf: 'flex-start',
    marginLeft: 10,
    margin: 6,
    backgroundColor: colors.cityBK,
  },
});