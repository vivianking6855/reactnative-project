'use strict';
/**
 * Sample Guide Page
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/project2-WebAsync/WebAsyncPage.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ProgressBarAndroid,
    Image,
    View
} from 'react-native';

const REQ_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class WebAsyncPage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            movies: null
        };
      }

    componentDidMount() {
        this.fetchData();
    }

    // get json data from network
    fetchData(){
        fetch(REQ_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies
                });
            })
            .done();
    }

    _pressButton(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    loadingMovie(){
        return (
            <View style={styles.container}>
                <ProgressBarAndroid styleAttr="LargeInverse" />
            </View>
        );
    }

    renderMovie(movie){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.thumbnail}
                    resizeMode="contain"
                    source={{uri:movie.posters.thumbnail}}/>
                <View style={styles.right}>
                    <Text style={styles.title}>title: {movie.title}</Text>
                    <Text style={styles.year}>year: {movie.year}</Text>
                </View>
            </View>
        );
    }

    render(){
        if(!this.state.movies){
            return this.loadingMovie();
        }

        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    right: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom:8,
        textAlign:'center',
    },
    year: {
        textAlign:'center'
    },

});