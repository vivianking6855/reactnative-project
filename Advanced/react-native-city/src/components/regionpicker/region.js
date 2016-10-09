/**
 * 省市区级联
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Picker,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {Regions} from './RegionList';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Region extends Component {
  // 构造
  constructor(props) {
    super(props);

    this._province = Regions;
    this._city = Regions[0].sub;

    this.state = {
      //选中的省
      selectedProvince: 0,
      //选中的市
      selectedCity: 0,
    };

  }

  render() {//省市级联
    return (
      <View style={styles.container}>
        {/*省*/}
        <Picker
          style={styles.city}
          onValueChange={this._handleProvinceChange}
          selectedValue={this.state.selectedProvince}>
          {this._province.map((v, k) => {
            return (
              <Picker.Item value={k} label={v.shortname} key={k}/>
            );
          }) }
        </Picker>

        {/*市*/}
        <Picker
          style={styles.city}
          onValueChange={this._handleCityChange}
          selectedValue={this.state.selectedCity}>
          {this._city.map((v, k) => {
            return (<Picker.Item value={k} label={v.shortname} key={k}/>
            );
          }) }
        </Picker>
      </View>
    );
  }

  /**
   * 处理省的改变
   */
  _handleProvinceChange = (pos) => {
    this._provincepos = pos;

    //过滤出改变后，省对应的市
    this._city = this._province[pos].sub;

    this.setState({
      selectedProvince: pos,
      selectedCity: 0,
    });

  }

  /**
   * 处理市改变
   */
  _handleCityChange = (pos) => {
    this._citypos = pos;
    this.setState({
      selectedCity: pos,
    });
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  city: {
    flex: 1
  }
});
