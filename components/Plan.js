import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Page from "./Page";
import ListView from './src/ListView';

export default class Plan extends React.Component {
    render() {
        return (
            //<Text>Hello from Plan!</Text>

            //<View style={styles.container}>
            //</View>
            <Page >
                <ListView ></ListView>
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