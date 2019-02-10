import {Text, View} from "react-native";
import React, {Component} from 'react';
import {styles} from '../styles/styles'
import {Footer} from "../component/Footer";


class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Content</Text>
                    //TODO Create a setting page
                </View>
                <Footer navigation={this.props.navigation}/>
            </View>
        );
    }
}

export {Settings};