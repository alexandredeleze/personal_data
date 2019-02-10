/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform,Dimensions} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";


import {HomeScreen} from "./screen/HomeScreen";
import {Chart} from "./screen/Chart";
import {Settings} from "./screen/Settings";


import {scaledSize} from "./tools/sizeFont";



const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

const { width, height } = Dimensions.get('window');



const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Chart: {
        screen: Chart,
    },
    Settings:{
        screen: Settings,
    }

}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#8D8C8C',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:scaledSize(25),
        },

    },
});

export default createAppContainer(AppNavigator);


