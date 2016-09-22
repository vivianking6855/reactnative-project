import React, {  Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownSelection: '-- Choose --'
        };
    }

    onMenuSelect(value) {
        alert(`onMenuSelect value = : ${value}`)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <MenuContext>
                    <Menu onSelect={value => this.onMenuSelect(value) }>
                        <MenuTrigger>
                            <Text style={{ fontSize: 30 }}>--Choose--</Text>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={1} text='One' />
                            <MenuOption value={2}>
                                <Text style={{ color: 'red', backgroundColor: 'green', fontSize: 20 }}>Two</Text>
                            </MenuOption>
                            <MenuOption value={3} disabled={true} text='Three' />
                        </MenuOptions>
                    </Menu>
                </MenuContext>
                <Text style={{ backgroundColor: 'green', flex: 1 }} >Hello world!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dropdown: {
        width: 300,
        borderColor: '#999',
        borderWidth: 1,
        padding: 5
    },
    dropdownOptions: {
        marginTop: 30,
        borderColor: '#ccc',
        borderWidth: 2,
        width: 300,
        height: 200
    }
});