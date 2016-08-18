/**
 * all common styles
 */
import {
  StyleSheet,
  PixelRatio
} from 'react-native';

import Utils from './Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: Utils.deviceWidth,
    height: Utils.deviceHeight,
  },
  viewLine: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#ccc',
  },
  button: {

  },
  title_text: {

  },
  content_text: {

  },
  dlgContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'rgba(0, 0, 0, 0.5)'
  },
  dlgInnerContainer: {
    backgroundColor: 'white',     
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default styles;
