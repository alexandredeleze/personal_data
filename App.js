/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";


import {HomeScreen} from "./screen/HomeScreen";
import {Sleep} from "./screen/chart/Sleep";
import {Settings} from "./screen/Settings";


import {scaledSize} from "./tools/sizeFont";
import {Tasks} from "./screen/chart/Tasks";
import {TimeToLeave} from "./screen/chart/TimeToLeave";
import {Synthesis} from "./screen/chart/Synthesis";


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Sleep: {
        screen: Sleep,
    },
    Tasks: {
        screen: Tasks,
    },
    TimeToLeave: {
        screen: TimeToLeave,
    },
    Synthesis: {
        screen: Synthesis,
    },
    Settings: {
        screen: Settings,
    },


}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#8D8C8C',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: scaledSize(25),
        },

    },
});

export default createAppContainer(AppNavigator);


