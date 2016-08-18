'use strict';
/**
 * Sample Navigator
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/NavigatorLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Navigator,
    ScrollView,
    Text,
    View
} from 'react-native';

export default class NavigatorLesson extends Component {
    // 构造
    constructor(props) {
        super(props);
    }

    render() {
        let defaultName='List';
        let defaultComponent=List;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                //配置场景
                configureScene=
                    {
                        (route) => {
                            //这个是页面之间跳转时候的动画，具体有哪些？
                            // 可以看这个目录下，有源代码的:
                            // node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                          return Navigator.SceneConfigs.VerticalDownSwipeJump;
                        }
                    }
                renderScene={
                    (route, navigator) =>
                        {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }
                }
            />
    );
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {title: null, user: null};
    }

    _pressButton(title) {
        const { navigator } = this.props;
        this.state.title = title;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        const  self = this;
        if(navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    title: this.state.title,
                    getUser:function(user){
                        self.setState({
                            user: user
                        })
                    }
                }
            })
        }
    }

    render(){
        var contents= [
            '1',
            '2'
         ];
        var list = [];
        for(var i in contents){
            var text=(
                <Text
                    style={styles.list_item}
                    onPress={this._pressButton.bind(this, contents[i] )}
                    key={i}>
                {contents[i]}
                </Text>
            );
            list.push(text);
        }

        if(this.state.user){
            return(
                <View>
                      <Text  style={styles.list_item}>用户信息：{JSON.stringify(this.state.user)} </Text>
                </View>
            );
        }else{
            return (
                <ScrollView style={styles.flex}>
                    {list}
                </ScrollView>
            );
        }
    }
}

const USER_MODELS = {
    1: {name:'name1',age :23},
    2: {name:'name2',age :24}
}

class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {title:null};
    }

    componentDidMount() {
        // get title from List
        this.setState({title: this.props.title});
    }

    _pressButton() {
        const { navigator } = this.props;
        if(this.props.getUser){
            let user = USER_MODELS[this.props.title];
            this.props.getUser(user);
        }
        if(navigator) {
            //把当前的页面pop掉，返回到上一个页面:List
            navigator.pop();
        }
    }

    render(){
        return(
            <ScrollView>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)} >点击我可以跳回去 from {this.state.title}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    list_item:{
        height:60,
        marginLeft:10,
        marginRight:10,
        marginTop:30,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center',
    },
});

AppRegistry.registerComponent('TwoReact', () => TwoReact);
