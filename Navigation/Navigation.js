import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import {StyleSheet, Image} from 'react-native'
import React from 'react'

import Plan from "../Components/Plan";
import Daily from "../Components/Daily";
import Analysis from "../Components/Analysis";

const PlanStackNavigator = createStackNavigator({
    Plan: {
        screen: Plan,
        navigationOptions: {
            title: 'Plan'
        }
    },
})

const DailyStackNavigator = createStackNavigator({
    Daily: {
        screen: Daily,
        navigationOptions: {
            title: 'Daily'
        }
    },
})

const AnalysisStackNavigator = createStackNavigator({
    Analysis: {
        screen: Analysis,
        navigationOptions: {
            title: 'Analysis'
        }
    },
})

const TabNavigator = createBottomTabNavigator({
        Plan: {
            screen: PlanStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../resources/plan.png')}
                        style={styles.icon}/>
                }
            }
        },
        Daily: {
            screen: DailyStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../resources/today.png')}
                        style={styles.icon}/>
                }
            }
        },
        Analysis: {
            screen: AnalysisStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../resources/analysis.png')}
                        style={styles.icon}/>
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: true,
            showIcon: true,
        }
    })

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
export default createAppContainer(TabNavigator)