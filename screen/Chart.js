import {Text, View} from "react-native";
import React, {Component} from 'react';
import {styles} from '../styles/styles'
import {Footer} from "../component/Footer";
class Chart extends Component {
    static navigationOptions = {
        title: 'Chart',
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Content</Text>
                </View>
                <Footer navigation={this.props.navigation}/>
            </View>
        );
    }
}

export {Chart};