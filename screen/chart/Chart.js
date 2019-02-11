import {Button, Text, View} from "react-native";
import React, {Component} from 'react';
import {styles} from '../../styles/styles'
import {Footer} from "../../component/Footer";

class Chart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>{this.props.text}</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer_button}>
                        <Button title={'Sleep'} onPress={() => this.props.navigation.replace('Sleep')}/>
                    </View>
                    <View style={styles.footer_button}>
                        <Button title={'Tasks'} onPress={() => this.props.navigation.replace('Tasks')}/>
                    </View>
                    <View style={styles.footer_button}>
                        <Button title={'Time to leave'} onPress={() => this.props.navigation.replace('TimeToLeave')}/>
                    </View>
                    <View style={styles.footer_button}>
                        <Button title={'Synthesis'} onPress={() => this.props.navigation.replace('Synthesis')}/>
                    </View>
                </View>
                <Footer navigation={this.props.navigation}/>
            </View>
        );
    }
}

export {Chart};