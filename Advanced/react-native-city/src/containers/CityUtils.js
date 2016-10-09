/**
 * # City Utis
 * deal with all json data
 * 
 * use it like :
     data: {
        A: CityUtils._getData('A'),
        B: CityUtils._getData('B'),
        ......
        Z: CityUtils._getData('Z'),
      }
 */

//import CITIES from './city.json';
// CityList format like this {uniquecode:"210300",shortname:"鞍山",firstchar:"A"},
import {CityList as CITIES} from './CityList'
import _ from 'lodash';

// get 'firstchar', 'shortname' from CITIES
const filterall = _(CITIES)
  .map(value => _.pick(value, ['uniquecode', 'shortname', 'firstchar']))
  .sortBy(value => value.firstchar)
  .value();

// section header such title 'A'
export default class CityUitls {

  // get data start with leter 
  static _getData(leter) {
    // get data begin with 'leter'
    let ldata = _(filterall)
      .filter(value => _.startsWith(value.firstchar, leter))
      .map('shortname')
      .value();
    console.log(leter + ":" + JSON.stringify(ldata));

    return ldata;
  }
}