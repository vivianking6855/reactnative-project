/**
 * # City.styles.js
 *
 * city page styles
 */

/**
 * ## Imports
 */
import {
    StyleSheet,
    PixelRatio
} from 'react-native';

/**
 * ## localStyles  StyleSheet
 *
 */
const localStyles = StyleSheet.create({
    // SectionHeader styles
    sectionHeaderText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 25,
    },
    sectionHeaderView: {
        backgroundColor: '#ccc',
        opacity: 0.7,
    },
    // SectionItem right slide item
    sectionItemText: {
        color: 'blue',
    },

    // Cell
    cellView: {
        flex: 1,
        height: 40,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc',
    },
    cellText: {
        fontSize: 20,
    },

    // current select
    currentView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    currentText: {
        fontSize: 25,
        color: 'black',
    },
    confirmText: {
        fontSize: 25,
        color: 'red',
        marginRight: 20,
    },
});

/**
 * ## export  StyleSheet
 *
 */
export default {
  ...localStyles,
};