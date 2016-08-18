/**
 * # City Utis
 * deal with all json data
 * 
 * use it like :
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
 */

import CITIES from './city.json'
import _ from 'lodash';

// get 'name', 'pinyin' from CITIES
const filterall = _(CITIES.CN_CITIES)
  .map(value => _.pick(value, ['name', 'pinyin']))
  .sortBy(value => value.pinyin)
  .value();

// get 'name', 'pinyin' from hot CITIES
const filterhot = _(CITIES.HOT_CITIES)
  .map(value => _.pick(value, ['name', 'pinyin']))
  .sortBy(value => value.pinyin)
  .value();


// section header such title 'A'
export default class CityUitls {

  // get data start with leter 
  static _getData(leter) {
    // get data begin with 'leter'
    console.log("filterall :" +JSON.stringify(filterall));
    let ldata = _(filterall)
      .filter(value => _.startsWith(value.pinyin, leter))
      .map('name')
      .value();

    console.log(leter + ":" +JSON.stringify(ldata));

    return ldata;
  }

  // get hot data
  static _getHotData() {
    let ldata = _(filterhot)
      .map('name')
      .value();

    //console.log("hot :" +JSON.stringify(ldata));

    return ldata;
  }

}