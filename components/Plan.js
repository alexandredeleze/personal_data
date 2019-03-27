import React from 'react';

import {AsyncStorage, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Page from "./Page";
import ListView from './src/ListView_Plan';

class Plan extends React.Component {

    render() {
        return (
            <Page >
                <ListView></ListView>
            </Page>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: 'rgba(100, 100, 100, 0.4)'
    }

});

module.exports = Plan;
