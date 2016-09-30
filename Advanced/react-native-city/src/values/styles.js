/**
 * # styles.js
 * 
 * include common style, that will not changed with theme
 * 
 */
import {
    StyleSheet,
} from 'react-native';

import {unit} from '../common/Utils';

const styles = StyleSheet.create({
    //  horizontal and vertical line 
    HorLine: {
        borderBottomWidth: 4 * unit,
        borderBottomColor: '#e6e6e6',
        marginVertical: 10,
    },
    VerLine: {
        borderRightWidth: 2 * unit,
        marginLeft: 2,
        borderRightColor: '#e6e6e6',
        marginVertical: 10,
    },

    // long button, such as save, logout
    longBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginTop: 25,
    },
    longBtnText: {
        fontSize: 26,
    },

});

export default styles;