/**
 * # City Demo
 */

import React, { Component } from 'react';
import {
    AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import styles from './City.styles';
import CityUtils from './CityUtils';
//import AlphabetListView from '../../components/alphabetlist/SelectableSectionsListView';

import AlphabetListView from 'react-native-alphabetlistview';

// section header such title 'A'
class SectionHeader extends Component {
  render() {
    return (
      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionHeaderText}>{this.props.title}</Text>
      </View>
    );
  }
}

// right slide items, such as A~Z
class SectionItem extends Component {
  render() {
    return (
      <Text numberOfLines={1} style={styles.sectionItemText}>{this.props.title}</Text>
    );
  }
}

// Cell, Section content item, such as 'city name'
class Cell extends Component {
  render() {
    return (
      <TouchableHighlight  style={styles.cellView} underlayColor='red' >
        <Text
          style={styles.cellText}
          onPress={() => this.props.onSelect(this.props.item) } >
          {this.props.item}
        </Text>
      </TouchableHighlight>
    );
  }
}

class City extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      current: '杭州',
      data: {
        A: CityUtils._getData('A'),
        B: CityUtils._getData('B'),
        C: CityUtils._getData('C'),
        D: CityUtils._getData('D'),
        E: CityUtils._getData('E'),
        F: CityUtils._getData('F'),
        G: CityUtils._getData('G'),
        H: CityUtils._getData('H'),
        J: CityUtils._getData('J'),
        K: CityUtils._getData('K'),
        L: CityUtils._getData('L'),
        M: CityUtils._getData('M'),
        N: CityUtils._getData('N'),
        P: CityUtils._getData('P'),
        Q: CityUtils._getData('Q'),
        R: CityUtils._getData('R'),
        S: CityUtils._getData('S'),
        T: CityUtils._getData('T'),
        W: CityUtils._getData('W'),
        X: CityUtils._getData('X'),
        Y: CityUtils._getData('Y'),
        Z: CityUtils._getData('Z'),
      }

    };

    var test = JSON.stringify(this.state.data);
    console.log(test);
  }

  _getData() {
    return _(Cities.CITIES_HOT).toArray();
  }

  _onCellSelect(item) {
    this.setState({
      current: item
    })
  }

  _onConfirm() {
    alert('select city ' + this.state.current);
  }

  render() {
    return (
      <View  style={{ flex: 1 }}>
        <View style={styles.currentView}>
          <Text
            style={styles.currentText}>当前选择: {this.state.current}</Text>
          <Text
            style={styles.confirmText}
            onPress={this._onConfirm.bind(this) }>确定</Text>
        </View>
        <AlphabetListView
          style={{ flex: 1 }}
          data={this.state.data}
          cell={Cell}
          cellHeight={40}
          onCellSelect= {(item) => this._onCellSelect(item) }
          sectionListItem={SectionItem}
          sectionHeader={SectionHeader}
          sectionHeaderHeight={22.5}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('city', () => City);